'use client';

import { useSyncExternalStore } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDisplay } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@/libs/utils/cn';
import { useT } from '@/libs/i18n/client';

/**
 * Light / Dark / System toggle.
 *
 * KUI ships a `ThemeSwitcher`, and this replaces it for one reason: it is built
 * on KUI's `DropdownMenu`, which puts `aria-haspopup="menu"` on a bare `<div>`
 * with no role. axe reports that as a **critical** `aria-allowed-attr`
 * violation, and WCAG 2.2 AA is a stated non-negotiable for this site.
 *
 * The contract with the rest of the app is unchanged, so nothing else has to
 * know: the same `localStorage.theme` key, the same `light | dark | system`
 * values, and the same `.dark` class on `<html>` that the pre-paint bootstrap in
 * `app/[locale]/layout.tsx` reads. Swapping back to KUI's component is a
 * one-line change once its dropdown sets a role.
 *
 * Three explicit buttons rather than a cycling one: with a System option, a
 * cycling toggle gives no way to see which of the three is active.
 */

type Theme = 'light' | 'dark' | 'system';

const OPTIONS: { value: Theme; icon: IconDefinition }[] = [
  { value: 'light', icon: faSun },
  { value: 'dark', icon: faMoon },
  { value: 'system', icon: faDisplay },
];

const STORAGE_KEY = 'theme';

/* -------------------------------------------------------------------------- */
/* The theme is external state — it lives in localStorage and on the <html>
 * element, both of which outlive any component. Modelling it as an external
 * store rather than useState+useEffect means no synchronous setState during
 * mount (which triggers a cascading render), and multi-tab changes stay in sync
 * for free through the `storage` event.
 */

const listeners = new Set<() => void>();

function read(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    // Private mode or blocked storage.
    return 'system';
  }
}

function apply(theme: Theme) {
  const dark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
}

function write(next: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // The choice still applies to this page even if it cannot be persisted.
  }
  apply(next);
  for (const listener of listeners) listener();
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);

  const media = window.matchMedia('(prefers-color-scheme: dark)');
  // Only matters while the preference is "system", but `apply` already handles
  // that, so there is no branch to keep in sync here.
  const onExternalChange = () => {
    apply(read());
    onStoreChange();
  };

  media.addEventListener('change', onExternalChange);
  window.addEventListener('storage', onExternalChange);

  return () => {
    listeners.delete(onStoreChange);
    media.removeEventListener('change', onExternalChange);
    window.removeEventListener('storage', onExternalChange);
  };
}

/**
 * Static HTML cannot know the stored preference, so the server snapshot is
 * `null` and no button reads as selected until hydration. First paint is
 * already correct — the inline bootstrap script sets `.dark` before paint.
 */
const serverSnapshot = (): Theme | null => null;

/* -------------------------------------------------------------------------- */

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, read, serverSnapshot);
  const t = useT();
  /*
   * Written out as three literal `t()` calls rather than mapped over OPTIONS.
   * `scripts/i18n/extract.mjs` reads the English source out of a STRING LITERAL
   * in the second argument, so `t(option.key, option.label)` would compile, run,
   * and be invisible to the extractor — the keys would simply never reach
   * `en.json`, and nothing would report it.
   */
  const labels: Record<Theme, string> = {
    light: t('marketing.theme.light', 'Light'),
    dark: t('marketing.theme.dark', 'Dark'),
    system: t('marketing.theme.system', 'System'),
  };

  return (
    <div
      className="flex items-center gap-0.5 rounded-md border border-border p-0.5"
      role="group"
      aria-label={t('marketing.theme.groupLabel', 'Colour theme')}
    >
      {OPTIONS.map((option) => {
        const active = theme === option.value;
        const label = labels[option.value];
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => write(option.value)}
            aria-pressed={active}
            title={label}
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded transition-colors',
              active
                ? 'bg-primary-subtle text-primary'
                : 'text-text-secondary hover:bg-surface-overlay hover:text-text-primary'
            )}
          >
            <FontAwesomeIcon icon={option.icon} className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
