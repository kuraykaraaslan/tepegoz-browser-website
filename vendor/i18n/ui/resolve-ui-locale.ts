// Pure application-locale resolution. No imports (kept a leaf so both the RSC
// layout and client can call it). Resolution order:
//   user preference → tenant default → 'en', and only if it is enabled.
// Normalization (lowercase + primary subtag) is inline so this stays dependency-free.

export function resolveAppLocale(input: {
  userLang?: string | null;
  defaultLang?: string | null;
  enabledLanguages?: string[] | null;
}): string {
  const enabled = (input.enabledLanguages || []).map((l) => (l || '').toLowerCase());
  const def = ((input.defaultLang || 'en').toLowerCase().split('-')[0]) || 'en';
  const user = (input.userLang || '').toLowerCase().split('-')[0];

  const isAllowed = (code: string) => enabled.length === 0 || enabled.includes(code);

  if (user && isAllowed(user)) return user;
  if (isAllowed(def)) return def;
  return enabled[0] || 'en';
}
