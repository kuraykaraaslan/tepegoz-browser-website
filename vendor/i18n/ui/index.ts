// Application-UI i18n runtime (client) — `@kuraykaraaslan/i18n/ui`. The generated
// per-module message map is NOT imported here: the RSC layout loads the
// active-locale bundle and passes it to <I18nProvider>, so this barrel stays a
// pure leaf (no dependency cycle). Neither is any reference data — language and
// country catalogues live in `localization`, which imports THIS module, never
// the other way round.
export { I18nProvider, useT, useLocale, useDir, useI18n, useAppLanguages } from './i18n.context.component';
export { interpolate } from './interpolate';
export { resolveAppLocale } from './resolve-ui-locale';
export { APP_LOCALE_COOKIE, setAppLocaleCookie, getAppLocaleCookie } from './app-locale';
export type { Messages, Locale, Direction, TFunction } from './types';
