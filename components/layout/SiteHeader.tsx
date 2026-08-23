'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppNav } from '@kuraykaraaslan/kui-react/app';
import { Button } from '@kuraykaraaslan/kui-react/ui';
import { BrandLockup } from '@/components/brand/BrandLockup';
import { LocaleSwitcher } from './LocaleSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { PRIMARY_NAV, ROUTES } from '@/libs/config/site';
import { localePath, type Locale } from '@/libs/i18n/locales';
import type { NavLabels } from '@/types/content';

/**
 * Marketing header.
 *
 * Built on KUI's `AppNav` rather than the `DashboardShell`/`AppShell` contract:
 * `UI_Interface_Rules_Next/appshell-compliance.md` exempts landing and static
 * content pages from the sidebar shell, and a marketing site with a sidebar
 * would be the wrong shape. `AppNav` still gives us the compliant mobile
 * NavDrawer, and the theme + language controls stay in the top bar as required.
 */
export function SiteHeader({ locale, labels }: { locale: Locale; labels: NavLabels }) {
  const pathname = usePathname();

  const navItems = PRIMARY_NAV.map((key) => {
    const href = localePath(ROUTES[key], locale);
    return {
      label: labels[key],
      href,
      active: pathname === href || pathname === `${href}/`,
    };
  });

  return (
    <AppNav
      sticky
      logo={<BrandLockup locale={locale} compact />}
      navItems={navItems}
      className="site-header gap-2 bg-surface-base/85 px-3 backdrop-blur-md sm:gap-3 sm:px-6"
    >
      <LocaleSwitcher locale={locale} />
      <ThemeToggle />
      {/* The primary CTA stays visible at every width. `AppNav`'s mobile drawer
          only renders `navItems`, and Download is not one of them — hiding the
          button below `sm` would leave a phone with no route to the download
          page from the header at all. */}
      <Button
        as={Link}
        href={localePath(ROUTES.download, locale)}
        prefetch={false}
        variant="primary"
        size="sm"
      >
        {labels.download}
      </Button>
    </AppNav>
  );
}
