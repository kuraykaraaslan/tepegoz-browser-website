/**
 * The client i18n surface this site actually uses.
 *
 * It imports the provider module DIRECTLY rather than `@kuraykaraaslan/i18n/ui`,
 * and the reason is not stylistic. That barrel also re-exports `app-locale`
 * (`APP_LOCALE_COOKIE`, `setAppLocaleCookie`) and `resolveAppLocale` — the
 * upstream SaaS locale model, where the language is a user preference stored
 * against a tenant and mirrored into a cookie for SSR.
 *
 * This site has no users, no tenants, and no server at request time. Its locale
 * is in the URL, because a static export cannot negotiate one and because the
 * copy's own rules require translated URLs and a real language switcher. Pulling
 * the cookie helpers in would ship a second, contradictory source of truth for
 * the locale — and, incidentally, is what put a vendored file into `tsc`'s
 * output: it is stricter here than upstream, so the barrel failed the build on a
 * helper nothing calls.
 *
 * Keep this list minimal. Anything added here is something the site has decided
 * to depend on.
 */
export {
  I18nProvider,
  useI18n,
  useT,
  useLocale,
  useDir,
} from '@kuraykaraaslan/i18n/ui/i18n.context.component';
export type { Messages, TFunction } from '@kuraykaraaslan/i18n/server/i18n.core';
