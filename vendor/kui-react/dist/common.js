"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// modules/domains/common/index.ts
var common_exports = {};
__export(common_exports, {
  AddressCard: () => AddressCard,
  AddressForm: () => AddressForm,
  AddressSelector: () => AddressSelector,
  ApiErrorSchema: () => ApiErrorSchema,
  ApiResponseSchema: () => ApiResponseSchema,
  ApiSuccessSchema: () => ApiSuccessSchema,
  AuthResponseSchema: () => AuthResponseSchema,
  AuthSessionSchema: () => AuthSessionSchema,
  BaseEntitySchema: () => BaseEntitySchema,
  CartBadge: () => CartBadge,
  CartItem: () => CartItem,
  CartPreview: () => CartPreview,
  CartSummary: () => CartSummary,
  ChangePasswordForm: () => ChangePasswordForm,
  ChangePasswordSchema: () => ChangePasswordSchema,
  ChatBox: () => ChatBox,
  CheckoutSuccessState: () => CheckoutSuccessState,
  CountrySelector: () => CountrySelector,
  CouponInput: () => CouponInput,
  CreditCardForm: () => CreditCardForm,
  CreditCardVisual: () => CreditCardVisual,
  CurrencySelector: () => CurrencySelector,
  DateSchema: () => DateSchema,
  DirectionProvider: () => DirectionProvider,
  DiscountBadge: () => DiscountBadge,
  EmailSchema: () => EmailSchema,
  ForgotPasswordForm: () => ForgotPasswordForm,
  GeoPointDisplay: () => GeoPointDisplay,
  IdSchema: () => IdSchema,
  LanguageEnum: () => LanguageEnum,
  LanguageSwitcher: () => LanguageSwitcher,
  LocationPicker: () => LocationPicker,
  LoginForm: () => LoginForm,
  LoginRequestSchema: () => LoginRequestSchema,
  NotificationMenu: () => NotificationMenu,
  NullableDateSchema: () => NullableDateSchema,
  OAuthButtons: () => OAuthButtons,
  OAuthCallbackSchema: () => OAuthCallbackSchema,
  OAuthProviderEnum: () => OAuthProviderEnum,
  OrderTotalsCard: () => OrderTotalsCard,
  PaginationSchema: () => PaginationSchema,
  PasswordSchema: () => PasswordSchema,
  PaymentMethodSelector: () => PaymentMethodSelector,
  PaymentStatusBadge: () => PaymentStatusBadge,
  PaymentSummaryCard: () => PaymentSummaryCard,
  PriceDisplay: () => PriceDisplay,
  ProcessingStatusIndicator: () => ProcessingStatusIndicator,
  ProductComparisonRadar: () => ProductComparisonRadar,
  PublishStatusBadge: () => PublishStatusBadge,
  RegionalSalesPolar: () => RegionalSalesPolar,
  RegisterForm: () => RegisterForm,
  RegisterRequestSchema: () => RegisterRequestSchema,
  RevenueBarChart: () => RevenueBarChart,
  SafeUserSchema: () => SafeUserSchema,
  SalesByCategoryDoughnut: () => SalesByCategoryDoughnut,
  SavedCardSelector: () => SavedCardSelector,
  SeoForm: () => SeoForm,
  SeoPreview: () => SeoPreview,
  SessionExpiredBanner: () => SessionExpiredBanner,
  SlugSchema: () => SlugSchema,
  SortOrderEnum: () => SortOrderEnum,
  StatusEnum: () => StatusEnum,
  SubscriptionPlanCard: () => SubscriptionPlanCard,
  ThemeEnum: () => ThemeEnum,
  UserActivityLineChart: () => UserActivityLineChart,
  UserAvatar: () => UserAvatar,
  UserMenu: () => UserMenu,
  UserPreferencesForm: () => UserPreferencesForm,
  UserPreferencesSchema: () => UserPreferencesSchema,
  UserProfileCard: () => UserProfileCard,
  UserProfileForm: () => UserProfileForm,
  UserProfileSchema: () => UserProfileSchema,
  UserRoleBadge: () => UserRoleBadge,
  UserRoleEnum: () => UserRoleEnum,
  UserSchema: () => UserSchema,
  UserStatusBadge: () => UserStatusBadge,
  UserStatusEnum: () => UserStatusEnum,
  UuidSchema: () => UuidSchema,
  VisibilityBadge: () => VisibilityBadge,
  detectBrand: () => detectBrand,
  useDirection: () => useDirection
});
module.exports = __toCommonJS(common_exports);

// modules/domains/common/types.ts
var import_zod2 = require("zod");

// modules/domains/common/I18nTypes.ts
var import_zod = require("zod");
var import_iso_639_1 = __toESM(require("iso-639-1"));
var _a;
var parsedEnvLangs = (_a = process.env.NEXT_PUBLIC_I18N_LANGUAGES) == null ? void 0 : _a.split(",").map((l) => l.trim().toLowerCase()).filter((l) => import_iso_639_1.default.validate(l));
var FALLBACK_LANGS = ["en"];
var AppLanguageEnum = import_zod.z.enum(
  parsedEnvLangs && parsedEnvLangs.length > 0 ? parsedEnvLangs : FALLBACK_LANGS
);
var AVAILABLE_LANGUAGES = AppLanguageEnum.options;
var _a2;
var DEFAULT_LANGUAGE = (_a2 = AVAILABLE_LANGUAGES[0]) != null ? _a2 : "en";
var RTL_SET = /* @__PURE__ */ new Set(["ar", "he", "fa", "ur"]);
function isRTL(lang) {
  return RTL_SET.has(lang);
}
function getDirection(lang) {
  return isRTL(lang) ? "rtl" : "ltr";
}
function getLanguageName(lang) {
  return import_iso_639_1.default.getName(lang) || lang;
}
var LANG_NAMES = Object.fromEntries(
  AVAILABLE_LANGUAGES.map((lang) => [
    lang,
    import_iso_639_1.default.getName(lang) || lang
  ])
);
var LANG_REGION = {
  af: "ZA",
  am: "ET",
  ar: "SA",
  az: "AZ",
  be: "BY",
  bg: "BG",
  bn: "BD",
  bs: "BA",
  ca: "ES",
  cs: "CZ",
  da: "DK",
  de: "DE",
  el: "GR",
  en: "US",
  es: "ES",
  et: "EE",
  eu: "ES",
  fa: "IR",
  fi: "FI",
  fr: "FR",
  ga: "IE",
  gl: "ES",
  he: "IL",
  hi: "IN",
  hr: "HR",
  hu: "HU",
  hy: "AM",
  id: "ID",
  is: "IS",
  it: "IT",
  ja: "JP",
  ka: "GE",
  kk: "KZ",
  km: "KH",
  ko: "KR",
  ky: "KG",
  lo: "LA",
  lt: "LT",
  lv: "LV",
  mk: "MK",
  ms: "MY",
  mt: "MT",
  my: "MM",
  nb: "NO",
  ne: "NP",
  nl: "NL",
  nn: "NO",
  no: "NO",
  pl: "PL",
  pt: "PT",
  ro: "RO",
  ru: "RU",
  si: "LK",
  sk: "SK",
  sl: "SI",
  sq: "AL",
  sr: "RS",
  sv: "SE",
  sw: "TZ",
  ta: "IN",
  th: "TH",
  tr: "TR",
  uk: "UA",
  ur: "PK",
  uz: "UZ",
  vi: "VN",
  zh: "CN",
  zu: "ZA"
};
function langToRegion(lang) {
  var _a3;
  return (_a3 = LANG_REGION[lang]) != null ? _a3 : null;
}
function countryCodeToEmoji(code) {
  return code.toUpperCase().replace(
    /./g,
    (char) => String.fromCodePoint(127397 + char.charCodeAt(0))
  );
}
function getLangFlag(lang) {
  const region = langToRegion(lang);
  return region === null ? "" : countryCodeToEmoji(region);
}
var LANG_FLAGS = Object.fromEntries(
  AVAILABLE_LANGUAGES.map((lang) => [lang, getLangFlag(lang)])
);

// modules/domains/common/types.ts
var IdSchema = import_zod2.z.string().min(1);
var UuidSchema = import_zod2.z.uuid();
var SlugSchema = import_zod2.z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
var DateSchema = import_zod2.z.coerce.date();
var NullableDateSchema = import_zod2.z.coerce.date().nullable().optional();
var EmailSchema = import_zod2.z.email();
var PasswordSchema = import_zod2.z.string().min(8);
var SortOrderEnum = import_zod2.z.enum(["asc", "desc"]);
var StatusEnum = import_zod2.z.enum([
  "ACTIVE",
  "INACTIVE",
  "DRAFT",
  "PUBLISHED",
  "ARCHIVED"
]);
var BaseEntitySchema = import_zod2.z.object({
  createdAt: DateSchema.optional(),
  updatedAt: NullableDateSchema,
  deletedAt: NullableDateSchema
});
var PaginationSchema = import_zod2.z.object({
  page: import_zod2.z.coerce.number().int().positive().default(1),
  limit: import_zod2.z.coerce.number().int().positive().max(100).default(20)
});
var ApiSuccessSchema = import_zod2.z.object({
  success: import_zod2.z.literal(true),
  message: import_zod2.z.string().optional()
});
var ApiErrorSchema = import_zod2.z.object({
  success: import_zod2.z.literal(false),
  message: import_zod2.z.string(),
  code: import_zod2.z.string().optional(),
  errors: import_zod2.z.array(import_zod2.z.object({
    field: import_zod2.z.string(),
    message: import_zod2.z.string()
  })).optional()
});
var ApiResponseSchema = import_zod2.z.union([
  ApiSuccessSchema,
  ApiErrorSchema
]);
var UserRoleEnum = import_zod2.z.enum(["ADMIN", "AUTHOR", "USER"]);
var UserStatusEnum = import_zod2.z.enum(["ACTIVE", "INACTIVE", "BANNED"]);
var ThemeEnum = import_zod2.z.enum(["LIGHT", "DARK", "SYSTEM"]);
var LanguageEnum = import_zod2.z.enum(["en"]);
var UserPreferencesSchema = import_zod2.z.object({
  theme: ThemeEnum.default("SYSTEM"),
  language: AppLanguageEnum.default("en"),
  emailNotifications: import_zod2.z.boolean().default(true),
  pushNotifications: import_zod2.z.boolean().default(true),
  newsletter: import_zod2.z.boolean().default(true),
  timezone: import_zod2.z.string().default("UTC")
});
var UserProfileSchema = import_zod2.z.object({
  name: import_zod2.z.string().nullable().optional(),
  username: import_zod2.z.string().nullable().optional(),
  biography: import_zod2.z.string().nullable().optional(),
  profilePicture: import_zod2.z.string().nullable().optional()
});
var UserSchema = import_zod2.z.object({
  userId: IdSchema,
  email: EmailSchema,
  phone: import_zod2.z.string().nullable().optional(),
  password: PasswordSchema,
  userRole: UserRoleEnum.default("USER"),
  userStatus: UserStatusEnum.default("ACTIVE"),
  userPreferences: UserPreferencesSchema.optional(),
  userProfile: UserProfileSchema.optional(),
  createdAt: DateSchema.optional(),
  updatedAt: DateSchema.optional(),
  deletedAt: NullableDateSchema
});
var SafeUserSchema = UserSchema.omit({
  password: true
});
var LoginRequestSchema = import_zod2.z.object({
  email: EmailSchema,
  password: PasswordSchema
});
var RegisterRequestSchema = import_zod2.z.object({
  email: EmailSchema,
  password: PasswordSchema,
  confirmPassword: import_zod2.z.string()
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var ChangePasswordSchema = import_zod2.z.object({
  currentPassword: import_zod2.z.string(),
  newPassword: PasswordSchema,
  confirmPassword: import_zod2.z.string()
}).refine((d) => d.newPassword === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var AuthSessionSchema = import_zod2.z.object({
  sessionId: IdSchema,
  userId: IdSchema,
  token: import_zod2.z.string(),
  refreshToken: import_zod2.z.string().optional(),
  expiresAt: DateSchema,
  createdAt: DateSchema
});
var AuthResponseSchema = import_zod2.z.object({
  success: import_zod2.z.boolean(),
  message: import_zod2.z.string(),
  token: import_zod2.z.string().optional(),
  refreshToken: import_zod2.z.string().optional(),
  user: SafeUserSchema.optional()
});
var OAuthProviderEnum = import_zod2.z.enum([
  "GOOGLE",
  "GITHUB",
  "DISCORD",
  "MICROSOFT"
]);
var OAuthCallbackSchema = import_zod2.z.object({
  code: import_zod2.z.string(),
  state: import_zod2.z.string().optional(),
  provider: OAuthProviderEnum
});

// modules/domains/common/address/AddressCard.tsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");

// libs/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// modules/ui/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var variantClasses = {
  primary: "bg-primary text-primary-fg hover:bg-primary-hover",
  secondary: "bg-secondary text-secondary-fg hover:bg-secondary-hover",
  ghost: "bg-transparent text-text-primary hover:bg-surface-overlay",
  danger: "bg-error text-text-inverse hover:opacity-90",
  outline: "border border-border text-text-primary hover:bg-surface-overlay"
};
var sizeClasses = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
  xl: "px-6 py-3 text-lg"
};
var iconOnlySizeClasses = {
  xs: "p-1 text-xs",
  sm: "p-1.5 text-sm",
  md: "p-2 text-sm",
  lg: "p-2.5 text-base",
  xl: "p-3 text-lg"
};
function Button(_a3) {
  var _b = _a3, {
    as,
    children,
    variant = "primary",
    size = "md",
    loading,
    iconLeft,
    iconRight,
    iconOnly = false,
    fullWidth = false,
    selected = false,
    type = "button",
    "data-testid": testId,
    className
  } = _b, rest = __objRest(_b, [
    "as",
    "children",
    "variant",
    "size",
    "loading",
    "iconLeft",
    "iconRight",
    "iconOnly",
    "fullWidth",
    "selected",
    "type",
    "data-testid",
    "className"
  ]);
  const Tag = as != null ? as : "button";
  const isNativeButton = Tag === "button";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    Tag,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, isNativeButton && { type }), {
      "aria-busy": loading || void 0,
      "aria-pressed": selected ? true : void 0,
      "data-testid": testId,
      className: cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
        fullWidth && "w-full",
        selected && "ring-2 ring-border-focus",
        className
      )
    }), rest), {
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full shrink-0", "aria-hidden": "true" }),
        !loading && iconLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: iconLeft }),
        children,
        !loading && iconRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: iconRight })
      ]
    })
  );
}

// modules/domains/common/address/AddressCard.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function AddressCard({ address, onEdit, onDelete, selected = false, className }) {
  const cityLine = [address.city, address.state, address.postalCode].filter(Boolean).join(", ");
  const countryLine = [address.country, address.countryCode ? `(${address.countryCode})` : ""].filter(Boolean).join(" ");
  const selectable = selected !== void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: cn(
        "relative rounded-lg border bg-surface-raised p-4 space-y-2 transition-colors",
        selectable && selected ? "border-primary ring-2 ring-primary ring-offset-1" : "border-border",
        className
      ),
      children: [
        selectable && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "span",
          {
            "aria-hidden": "true",
            className: cn(
              "absolute top-3 right-3 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors",
              selected ? "border-primary bg-primary" : "border-border bg-surface-base"
            ),
            children: selected && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
          }
        ),
        address.fullName && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-2 text-sm font-medium text-text-primary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faUser, className: "w-3 h-3 text-text-disabled shrink-0" }),
          address.fullName
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-start gap-2 text-sm text-text-secondary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faLocationDot, className: "w-3 h-3 text-text-disabled shrink-0 mt-0.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: address.addressLine1 }),
            address.addressLine2 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: address.addressLine2 }),
            cityLine && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: cityLine }),
            countryLine && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: countryLine })
          ] })
        ] }),
        address.phone && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-2 text-sm text-text-secondary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone, className: "w-3 h-3 text-text-disabled shrink-0" }),
          address.phone
        ] }),
        (onEdit || onDelete) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex gap-2 pt-2 border-t border-border", children: [
          onEdit && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "ghost", size: "xs", onClick: onEdit, className: "text-primary hover:text-primary-hover", children: "Edit" }),
          onDelete && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "ghost", size: "xs", onClick: onDelete, className: "text-error hover:opacity-80", children: "Delete" })
        ] })
      ]
    }
  );
}

// modules/domains/common/address/AddressForm.tsx
var import_react3 = require("react");
var import_react_fontawesome4 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/AlertBanner.tsx
var import_react = require("react");
var import_react_fontawesome2 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime3 = require("react/jsx-runtime");
var variantMap = {
  success: { container: "bg-success-subtle border-success text-success-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faCircleCheck, className: "w-4 h-4" }) },
  warning: { container: "bg-warning-subtle border-warning text-warning-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faTriangleExclamation, className: "w-4 h-4" }) },
  error: { container: "bg-error-subtle border-error text-error-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faCircleXmark, className: "w-4 h-4" }) },
  info: { container: "bg-info-subtle border-info text-info-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faCircleInfo, className: "w-4 h-4" }) }
};
function AlertBanner({
  variant = "info",
  title,
  message,
  dismissible = false,
  action,
  icon,
  className
}) {
  const [dismissed, setDismissed] = (0, import_react.useState)(false);
  if (dismissed) return null;
  const { container, defaultIcon } = variantMap[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      role: "alert",
      className: cn(
        "flex items-start gap-3 rounded-lg border p-4",
        container,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", className: "mt-0.5 shrink-0 font-bold", children: icon != null ? icon : defaultIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex-1 text-sm min-w-0", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: cn(title && "mt-0.5"), children: message }),
          action && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-2", children: action.href ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "a",
            {
              href: action.href,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              type: "button",
              onClick: action.onClick,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) })
        ] }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss",
            onClick: () => setDismissed(true),
            className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faXmark, className: "w-4 h-4" })
          }
        )
      ]
    }
  );
}

// modules/app/Form.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Form({
  title,
  description,
  error,
  columns = 1,
  actions,
  children,
  onSubmit,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "form",
    {
      onSubmit,
      noValidate: true,
      className: cn("space-y-6", className),
      children: [
        (title || description) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-lg font-semibold text-text-primary", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-text-secondary mt-0.5", children: description })
        ] }),
        error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AlertBanner, { variant: "error", message: error }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn(
          "grid gap-4",
          columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
        ), children }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center justify-end gap-3 pt-2 border-t border-border", children: actions })
      ]
    }
  );
}

// modules/ui/Input.tsx
var import_react2 = require("react");
var import_react_fontawesome3 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Input = (0, import_react2.forwardRef)(function Input2(_a3, ref) {
  var _b = _a3, {
    id,
    label,
    hint,
    error,
    success,
    required,
    prefixIcon,
    suffixIcon,
    clearable,
    onClear,
    showCount,
    maxLength,
    className,
    value,
    onChange,
    readOnly,
    type,
    step,
    min,
    max
  } = _b, props = __objRest(_b, [
    "id",
    "label",
    "hint",
    "error",
    "success",
    "required",
    "prefixIcon",
    "suffixIcon",
    "clearable",
    "onClear",
    "showCount",
    "maxLength",
    "className",
    "value",
    "onChange",
    "readOnly",
    "type",
    "step",
    "min",
    "max"
  ]);
  const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
  const isPassword = type === "password";
  const isNumber = type === "number";
  const resolvedType = isPassword ? showPassword ? "text" : "password" : type;
  const state = error ? "error" : success ? "success" : "default";
  const describedBy = [
    hint && !error && !success ? `${id}-hint` : null,
    error ? `${id}-error` : null,
    success && !error ? `${id}-success` : null
  ].filter(Boolean).join(" ");
  const hasSuffix = suffixIcon || clearable && value || isPassword;
  const hasPrefix = !!prefixIcon;
  const inputBaseClass = cn(
    "block w-full rounded-md border px-3 py-2 text-sm transition-colors",
    "text-text-primary placeholder:text-text-disabled",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-sunken",
    "read-only:bg-surface-sunken read-only:cursor-default",
    state === "error" && "border-error ring-1 ring-error bg-error-subtle",
    state === "success" && "border-success ring-1 ring-success bg-success-subtle",
    state === "default" && "border-border bg-surface-base",
    hasPrefix && "pl-9",
    (hasSuffix || isNumber) && "pr-9"
  );
  const charCount = typeof value === "string" ? value.length : 0;
  function increment() {
    const current = Number(value != null ? value : 0);
    const stepVal = Number(step != null ? step : 1);
    const maxVal = max !== void 0 ? Number(max) : Infinity;
    const next = Math.min(current + stepVal, maxVal);
    onChange == null ? void 0 : onChange({ target: { value: String(next) } });
  }
  function decrement() {
    const current = Number(value != null ? value : 0);
    const stepVal = Number(step != null ? step : 1);
    const minVal = min !== void 0 ? Number(min) : -Infinity;
    const next = Math.max(current - stepVal, minVal);
    onChange == null ? void 0 : onChange({ target: { value: String(next) } });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "(required)" })
      ] }),
      readOnly && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "ml-2 text-xs font-normal text-text-disabled", children: "(read-only)" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative", children: [
      prefixIcon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-disabled pointer-events-none", children: prefixIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        __spreadValues({
          ref,
          id,
          type: resolvedType,
          required,
          readOnly,
          "aria-invalid": state === "error",
          "aria-describedby": describedBy || void 0,
          maxLength,
          value,
          onChange,
          step,
          min,
          max,
          className: cn(inputBaseClass, isNumber && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none")
        }, props)
      ),
      isPassword && !readOnly && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          "aria-label": showPassword ? "Hide password" : "Show password",
          onClick: () => setShowPassword((v) => !v),
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none text-sm",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome3.FontAwesomeIcon, { icon: showPassword ? import_free_solid_svg_icons3.faEyeSlash : import_free_solid_svg_icons3.faEye, className: "w-3.5 h-3.5" })
        }
      ),
      clearable && value && !readOnly && !isPassword && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          "aria-label": "Clear",
          onClick: onClear,
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faXmark, className: "w-3 h-3" })
        }
      ),
      suffixIcon && !clearable && !isPassword && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled pointer-events-none", children: suffixIcon }),
      isNumber && !readOnly && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute right-0 top-0 h-full flex flex-col border-l border-border overflow-hidden rounded-r-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Increment",
            onClick: increment,
            tabIndex: -1,
            className: "flex-1 px-2 text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none border-b border-border leading-none flex items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faChevronUp, className: "w-2 h-2" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Decrement",
            onClick: decrement,
            tabIndex: -1,
            className: "flex-1 px-2 text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none leading-none flex items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faChevronDown, className: "w-2 h-2" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex-1", children: [
        hint && !error && !success && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: `${id}-hint`, className: "text-xs text-text-secondary", children: hint }),
        error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: `${id}-error`, className: "text-xs text-error", role: "alert", children: error }),
        success && !error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: `${id}-success`, className: "text-xs text-success-fg", children: success })
      ] }),
      showCount && maxLength && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: cn("text-xs shrink-0", charCount >= maxLength ? "text-error" : "text-text-disabled"), children: [
        charCount,
        "/",
        maxLength
      ] })
    ] })
  ] });
});

// modules/domains/common/address/AddressForm.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function toStr(v) {
  return v != null ? v : "";
}
function fromAddress(a) {
  return {
    fullName: toStr(a == null ? void 0 : a.fullName),
    phone: toStr(a == null ? void 0 : a.phone),
    addressLine1: toStr(a == null ? void 0 : a.addressLine1),
    addressLine2: toStr(a == null ? void 0 : a.addressLine2),
    city: toStr(a == null ? void 0 : a.city),
    state: toStr(a == null ? void 0 : a.state),
    postalCode: toStr(a == null ? void 0 : a.postalCode),
    country: toStr(a == null ? void 0 : a.country),
    countryCode: toStr(a == null ? void 0 : a.countryCode)
  };
}
function toAddress(v) {
  return {
    addressLine1: v.addressLine1,
    addressLine2: v.addressLine2 || null,
    fullName: v.fullName || null,
    phone: v.phone || null,
    city: v.city || null,
    state: v.state || null,
    postalCode: v.postalCode || null,
    country: v.country || null,
    countryCode: v.countryCode || null
  };
}
function AddressForm({ initial, onSubmit, onCancel, submitLabel = "Save", className }) {
  const [values, setValues] = (0, import_react3.useState)(() => fromAddress(initial));
  const [errors, setErrors] = (0, import_react3.useState)({});
  const [loading, setLoading] = (0, import_react3.useState)(false);
  function set(field) {
    return (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { [field]: e.target.value }));
  }
  function validate() {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    if (!values.addressLine1.trim()) next.addressLine1 = "Address line 1 is required.";
    if (!values.city.trim()) next.city = "City is required.";
    if (!values.country.trim()) next.country = "Country is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(toAddress(values));
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    Form,
    {
      onSubmit: handleSubmit,
      className,
      actions: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
        onCancel && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { type: "submit", loading, children: submitLabel })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Input,
            {
              id: "addr-fullname",
              label: "Full Name",
              required: true,
              prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faUser, className: "w-3 h-3" }),
              value: values.fullName,
              onChange: set("fullName"),
              error: errors.fullName
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Input,
            {
              id: "addr-phone",
              label: "Phone",
              type: "tel",
              prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faPhone, className: "w-3 h-3" }),
              value: values.phone,
              onChange: set("phone")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Input,
          {
            id: "addr-line1",
            label: "Address Line 1",
            required: true,
            prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faLocationDot, className: "w-3 h-3" }),
            value: values.addressLine1,
            onChange: set("addressLine1"),
            error: errors.addressLine1
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Input,
          {
            id: "addr-line2",
            label: "Address Line 2 (optional)",
            value: values.addressLine2,
            onChange: set("addressLine2")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Input, { id: "addr-city", label: "City", required: true, value: values.city, onChange: set("city"), error: errors.city }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Input, { id: "addr-state", label: "State / District", value: values.state, onChange: set("state") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Input, { id: "addr-postalcode", label: "Postal Code", value: values.postalCode, onChange: set("postalCode") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Input,
            {
              id: "addr-country",
              label: "Country",
              required: true,
              prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faGlobe, className: "w-3 h-3" }),
              value: values.country,
              onChange: set("country"),
              error: errors.country
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Input,
            {
              id: "addr-countrycode",
              label: "Country Code (2 letters)",
              value: values.countryCode,
              onChange: set("countryCode"),
              maxLength: 2
            }
          )
        ] })
      ]
    }
  );
}

// modules/domains/common/address/AddressSelector.tsx
var import_react4 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function AddressSelector({
  addresses,
  selectedIndex,
  onSelect,
  onAdd,
  onEdit,
  onDelete,
  className
}) {
  const [active, setActive] = (0, import_react4.useState)(selectedIndex);
  function handleSelect(i) {
    setActive(i);
    onSelect(i, addresses[i]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("fieldset", { className: cn("space-y-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("legend", { className: "sr-only", children: "Select delivery address" }),
    addresses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-sm text-text-secondary py-4 text-center", children: "No saved addresses." }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "space-y-2", children: addresses.map((addr, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "label",
      {
        className: cn(
          "block cursor-pointer rounded-lg",
          "focus-within:ring-2 focus-within:ring-border-focus"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "input",
            {
              type: "radio",
              name: "address-selector",
              value: String(i),
              checked: active === i,
              onChange: () => handleSelect(i),
              className: "sr-only"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            AddressCard,
            {
              address: addr,
              selected: active === i,
              onEdit: onEdit ? () => onEdit(i, addr) : void 0,
              onDelete: onDelete ? () => onDelete(i, addr) : void 0
            }
          )
        ]
      },
      i
    )) }),
    onAdd && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "outline", size: "sm", onClick: onAdd, className: "w-full", children: "+ Add new address" })
  ] });
}

// modules/domains/common/auth/ChangePasswordForm.tsx
var import_react5 = require("react");
var import_react_fontawesome5 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons5 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime8 = require("react/jsx-runtime");
function ChangePasswordForm({ onSubmit, error, className }) {
  const [values, setValues] = (0, import_react5.useState)({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [errors, setErrors] = (0, import_react5.useState)({});
  const [loading, setLoading] = (0, import_react5.useState)(false);
  function validate() {
    const next = {};
    if (!values.currentPassword) next.currentPassword = "Current password is required.";
    if (!values.newPassword) next.newPassword = "New password is required.";
    else if (values.newPassword.length < 8) next.newPassword = "Password must be at least 8 characters.";
    if (!values.confirmPassword) next.confirmPassword = "Please confirm your new password.";
    else if (values.newPassword !== values.confirmPassword) next.confirmPassword = "Passwords don't match.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  }
  const lockIcon = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons5.faLock, className: "w-3.5 h-3.5" });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Input,
      {
        id: "current-password",
        label: "Current Password",
        type: "password",
        required: true,
        autoComplete: "current-password",
        prefixIcon: lockIcon,
        value: values.currentPassword,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { currentPassword: e.target.value })),
        error: errors.currentPassword
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Input,
      {
        id: "new-password",
        label: "New Password",
        type: "password",
        required: true,
        autoComplete: "new-password",
        prefixIcon: lockIcon,
        value: values.newPassword,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { newPassword: e.target.value })),
        error: errors.newPassword
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Input,
      {
        id: "confirm-password",
        label: "Confirm New Password",
        type: "password",
        required: true,
        autoComplete: "new-password",
        prefixIcon: lockIcon,
        value: values.confirmPassword,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { confirmPassword: e.target.value })),
        error: errors.confirmPassword
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { type: "submit", fullWidth: true, loading, children: "Update Password" })
  ] });
}

// modules/domains/common/auth/ForgotPasswordForm.tsx
var import_react6 = require("react");
var import_react_fontawesome6 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons6 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime9 = require("react/jsx-runtime");
function ForgotPasswordForm({ onSubmit, error, className }) {
  const [email, setEmail] = (0, import_react6.useState)("");
  const [emailError, setEmailError] = (0, import_react6.useState)("");
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const [sent, setSent] = (0, import_react6.useState)(false);
  function validate() {
    if (!email) {
      setEmailError("Email is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(email);
      setSent(true);
    } finally {
      setLoading(false);
    }
  }
  if (sent) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "rounded-lg bg-success-subtle border border-success px-4 py-4 text-sm text-success-fg space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "font-semibold", children: "Check your inbox" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
        "We sent a password reset link to ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "font-mono", children: email }),
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Input,
      {
        id: "forgot-email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
        prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: import_free_solid_svg_icons6.faEnvelope, className: "w-3.5 h-3.5" }),
        value: email,
        onChange: (e) => setEmail(e.target.value),
        error: emailError
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { type: "submit", fullWidth: true, loading, children: "Send reset link" })
  ] });
}

// modules/domains/common/auth/LoginForm.tsx
var import_react7 = require("react");
var import_react_fontawesome7 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons7 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime10 = require("react/jsx-runtime");
function LoginForm({ onSubmit, error, className }) {
  const [values, setValues] = (0, import_react7.useState)({ email: "", password: "", rememberMe: false });
  const [errors, setErrors] = (0, import_react7.useState)({});
  const [loading, setLoading] = (0, import_react7.useState)(false);
  function validate() {
    const next = {};
    if (!values.email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.password) next.password = "Password is required.";
    else if (values.password.length < 8) next.password = "Password must be at least 8 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Input,
      {
        id: "login-email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
        prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_fontawesome7.FontAwesomeIcon, { icon: import_free_solid_svg_icons7.faEnvelope, className: "w-3.5 h-3.5" }),
        value: values.email,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { email: e.target.value })),
        error: errors.email
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Input,
      {
        id: "login-password",
        label: "Password",
        type: "password",
        required: true,
        autoComplete: "current-password",
        prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_fontawesome7.FontAwesomeIcon, { icon: import_free_solid_svg_icons7.faLock, className: "w-3.5 h-3.5" }),
        value: values.password,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { password: e.target.value })),
        error: errors.password
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { className: "flex items-center gap-2 text-sm text-text-secondary cursor-pointer select-none", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "input",
        {
          type: "checkbox",
          checked: values.rememberMe,
          onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { rememberMe: e.target.checked })),
          className: "rounded border-border accent-primary focus-visible:ring-2 focus-visible:ring-border-focus"
        }
      ),
      "Remember me"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, { type: "submit", fullWidth: true, loading, children: "Sign In" })
  ] });
}

// modules/domains/common/auth/OAuthButtons.tsx
var import_react8 = require("react");
var import_react_fontawesome8 = require("@fortawesome/react-fontawesome");
var import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons");
var import_jsx_runtime11 = require("react/jsx-runtime");
var providerMeta = {
  GOOGLE: { label: "Continue with Google", icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faGoogle }), iconClass: "text-[#EA4335]" },
  GITHUB: { label: "Continue with GitHub", icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faGithub }), iconClass: "text-text-primary" },
  DISCORD: { label: "Continue with Discord", icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faDiscord }), iconClass: "text-[#5865F2]" },
  MICROSOFT: { label: "Continue with Microsoft", icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_brands_svg_icons.faMicrosoft }), iconClass: "text-[#00A4EF]" }
};
function OAuthButtons({
  providers = ["GOOGLE", "GITHUB", "DISCORD", "MICROSOFT"],
  onProvider,
  className
}) {
  const [loadingProvider, setLoadingProvider] = (0, import_react8.useState)(null);
  async function handleClick(provider) {
    setLoadingProvider(provider);
    try {
      await onProvider(provider);
    } finally {
      setLoadingProvider(null);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn("flex flex-col gap-2", className), children: providers.map((provider) => {
    const meta = providerMeta[provider];
    const isLoading = loadingProvider === provider;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Button,
      {
        variant: "outline",
        fullWidth: true,
        loading: isLoading,
        disabled: loadingProvider !== null,
        "aria-label": meta.label,
        onClick: () => handleClick(provider),
        iconLeft: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: meta.iconClass, children: meta.icon }),
        children: meta.label
      },
      provider
    );
  }) });
}

// modules/domains/common/auth/RegisterForm.tsx
var import_react9 = require("react");
var import_react_fontawesome9 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons8 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime12 = require("react/jsx-runtime");
function RegisterForm({ onSubmit, error, className }) {
  const [values, setValues] = (0, import_react9.useState)({ email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = (0, import_react9.useState)({});
  const [loading, setLoading] = (0, import_react9.useState)(false);
  function validate() {
    const next = {};
    if (!values.email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.password) next.password = "Password is required.";
    else if (values.password.length < 8) next.password = "Password must be at least 8 characters.";
    if (!values.confirmPassword) next.confirmPassword = "Please confirm your password.";
    else if (values.password !== values.confirmPassword) next.confirmPassword = "Passwords do not match.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit({ email: values.email, password: values.password });
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Input,
      {
        id: "register-email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
        prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faEnvelope, className: "w-3.5 h-3.5" }),
        value: values.email,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { email: e.target.value })),
        error: errors.email
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Input,
      {
        id: "register-password",
        label: "Password",
        type: "password",
        required: true,
        autoComplete: "new-password",
        hint: "Minimum 8 characters",
        prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faLock, className: "w-3.5 h-3.5" }),
        value: values.password,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { password: e.target.value })),
        error: errors.password
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Input,
      {
        id: "register-confirm-password",
        label: "Confirm Password",
        type: "password",
        required: true,
        autoComplete: "new-password",
        prefixIcon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faLock, className: "w-3.5 h-3.5" }),
        value: values.confirmPassword,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { confirmPassword: e.target.value })),
        error: errors.confirmPassword
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { type: "submit", fullWidth: true, loading, children: "Create Account" })
  ] });
}

// modules/domains/common/auth/SessionExpiredBanner.tsx
var import_react_fontawesome10 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons9 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime13 = require("react/jsx-runtime");
function SessionExpiredBanner({
  onSignIn,
  message = "Your session has expired. Please sign in again to continue.",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      role: "alert",
      className: cn(
        "flex items-start sm:items-center justify-between gap-4 flex-wrap",
        "rounded-lg border border-warning bg-warning-subtle px-4 py-3",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-start gap-3 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome10.FontAwesomeIcon, { icon: import_free_solid_svg_icons9.faClock, className: "w-5 h-5 text-warning shrink-0 mt-0.5", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm font-semibold text-text-primary", children: "Session expired" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-text-secondary mt-0.5", children: message })
          ] })
        ] }),
        onSignIn && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { variant: "primary", size: "sm", onClick: onSignIn, className: "shrink-0", children: "Sign in again" })
      ]
    }
  );
}

// modules/domains/common/cart/CartBadge.tsx
var import_react_fontawesome11 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons10 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime14 = require("react/jsx-runtime");
function CartBadge({ cart, onClick, className }) {
  const totalQty = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "button",
    {
      type: "button",
      onClick,
      "aria-label": `Cart \u2014 ${totalQty} item${totalQty !== 1 ? "s" : ""}`,
      className: cn(
        "relative inline-flex items-center justify-center h-10 w-10 rounded-full",
        "border border-border bg-surface-raised text-text-primary",
        "hover:bg-surface-overlay transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faCartShopping, className: "w-5 h-5", "aria-hidden": "true" }),
        totalQty > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute -top-1 -right-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-fg tabular-nums shadow",
            children: totalQty > 99 ? "99+" : totalQty
          }
        )
      ]
    }
  );
}

// modules/domains/common/money/PriceDisplay.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var sizeMap = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl font-semibold",
  xl: "text-3xl font-bold"
};
function PriceDisplay({
  amount,
  currency = "TRY",
  locale = "tr-TR",
  size = "md",
  strikethrough = false,
  className
}) {
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "span",
    {
      className: cn(
        "tabular-nums",
        sizeMap[size],
        strikethrough && "line-through text-text-secondary",
        className
      ),
      children: formatted
    }
  );
}

// modules/domains/common/cart/CartItem.tsx
var import_react_fontawesome12 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons11 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime16 = require("react/jsx-runtime");
function CartItem({
  item,
  onQuantityChange,
  onRemove,
  compact = false,
  className
}) {
  const canDecrement = item.quantity > 1;
  const canIncrement = item.maxQuantity == null || item.quantity < item.maxQuantity;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: cn("flex gap-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: cn(
      "shrink-0 rounded-lg border border-border bg-surface-overlay flex items-center justify-center text-text-disabled overflow-hidden",
      compact ? "h-12 w-12" : "h-16 w-16"
    ), children: item.image ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: item.image, alt: item.name, className: "h-full w-full object-cover" }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_fontawesome12.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faBagShopping, className: cn("text-text-disabled", compact ? "w-5 h-5" : "w-7 h-7"), "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex-1 min-w-0 space-y-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: cn("font-medium text-text-primary truncate", compact ? "text-xs" : "text-sm"), children: item.name }),
      item.variant && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs text-text-secondary truncate", children: item.variant }),
      item.description && !compact && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs text-text-secondary line-clamp-1", children: item.description }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-2 pt-1 flex-wrap", children: [
        onQuantityChange ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-1 rounded-md border border-border bg-surface-base", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Decrease quantity",
              disabled: !canDecrement,
              onClick: () => onQuantityChange(item.cartItemId, item.quantity - 1),
              className: "flex h-6 w-6 items-center justify-center rounded-l-md text-text-secondary hover:bg-surface-overlay disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs font-bold",
              children: "\u2212"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "w-6 text-center text-xs font-medium text-text-primary tabular-nums", children: item.quantity }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Increase quantity",
              disabled: !canIncrement,
              onClick: () => onQuantityChange(item.cartItemId, item.quantity + 1),
              className: "flex h-6 w-6 items-center justify-center rounded-r-md text-text-secondary hover:bg-surface-overlay disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs font-bold",
              children: "+"
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "text-xs text-text-secondary", children: [
          "Qty: ",
          item.quantity
        ] }),
        onRemove && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          Button,
          {
            variant: "ghost",
            size: "xs",
            onClick: () => onRemove(item.cartItemId),
            className: "text-error hover:opacity-80 px-1",
            children: "Remove"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "shrink-0 text-right space-y-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        PriceDisplay,
        {
          amount: item.price * item.quantity,
          currency: item.currency,
          size: compact ? "sm" : "md"
        }
      ),
      item.quantity > 1 && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "text-xs text-text-secondary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(PriceDisplay, { amount: item.price, currency: item.currency, size: "sm" }),
        " each"
      ] })
    ] })
  ] });
}

// modules/domains/common/cart/CartPreview.tsx
var import_react10 = require("react");
var import_react_fontawesome13 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons12 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime17 = require("react/jsx-runtime");
function CartPreview({ cart, defaultOpen = false, className }) {
  const [open, setOpen] = (0, import_react10.useState)(defaultOpen);
  const totalQty = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const itemLabel = `${totalQty} item${totalQty !== 1 ? "s" : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: cn("rounded-xl border border-border bg-surface-raised overflow-hidden", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-expanded": open,
        className: "w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border-focus",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons12.faCartShopping, className: "w-4 h-4 text-text-secondary", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-sm font-semibold text-text-primary", children: "Your order" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "text-xs text-text-secondary", children: [
              "(",
              itemLabel,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-3 shrink-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(PriceDisplay, { amount: cart.totals.total, currency: cart.totals.currency, size: "sm" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              import_react_fontawesome13.FontAwesomeIcon,
              {
                icon: import_free_solid_svg_icons12.faChevronDown,
                className: cn("h-3.5 w-3.5 text-text-secondary transition-transform duration-200", open && "rotate-180"),
                "aria-hidden": "true"
              }
            )
          ] })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "border-t border-border px-4 py-3 space-y-3", children: cart.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-text-secondary py-2 text-center", children: "No items in cart." }) : cart.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      CartItem,
      {
        item,
        compact: true,
        className: cn(idx > 0 && "border-t border-border pt-3")
      },
      item.cartItemId
    )) })
  ] });
}

// modules/domains/common/money/OrderTotalsCard.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function OrderTotalsCard({ totals, locale, className }) {
  var _a3;
  const currency = (_a3 = totals.currency) != null ? _a3 : "TRY";
  const lines = [
    { label: "Subtotal", amount: totals.subtotal },
    ...totals.discountTotal && totals.discountTotal > 0 ? [{ label: "Discount", amount: -totals.discountTotal, isDiscount: true }] : [],
    ...totals.taxTotal && totals.taxTotal > 0 ? [{ label: "Tax", amount: totals.taxTotal }] : [],
    ...totals.serviceFee && totals.serviceFee > 0 ? [{ label: "Service Fee", amount: totals.serviceFee }] : [],
    ...totals.shippingTotal && totals.shippingTotal > 0 ? [{ label: "Shipping", amount: totals.shippingTotal }] : []
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: cn("rounded-lg border border-border bg-surface-raised p-4 space-y-2", className), children: [
    lines.map(({ label, amount, isDiscount }) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-text-secondary", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        PriceDisplay,
        {
          amount: Math.abs(amount),
          currency,
          locale,
          className: cn(isDiscount && "text-success-fg")
        }
      )
    ] }, label)),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-sm font-semibold text-text-primary", children: "Total" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PriceDisplay, { amount: totals.total, currency, locale, size: "lg" })
    ] })
  ] });
}

// modules/domains/common/cart/CartSummary.tsx
var import_react_fontawesome15 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons14 = require("@fortawesome/free-solid-svg-icons");

// modules/domains/common/discount/CouponInput.tsx
var import_react11 = require("react");
var import_react_fontawesome14 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons13 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime19 = require("react/jsx-runtime");
function CouponInput({ onApply, onRemove, appliedCode, className }) {
  const [code, setCode] = (0, import_react11.useState)("");
  const [state, setState] = (0, import_react11.useState)("idle");
  const [message, setMessage] = (0, import_react11.useState)("");
  async function handleApply() {
    var _a3, _b;
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;
    setState("loading");
    setMessage("");
    try {
      const result = await onApply(trimmed);
      if (result.success) {
        setState("success");
        setMessage((_a3 = result.message) != null ? _a3 : "Coupon applied!");
        setCode("");
      } else {
        setState("error");
        setMessage((_b = result.message) != null ? _b : "Invalid coupon code.");
      }
    } catch (e) {
      setState("error");
      setMessage("Failed to apply coupon. Try again.");
    }
  }
  function handleRemove() {
    setState("idle");
    setMessage("");
    setCode("");
    onRemove == null ? void 0 : onRemove();
  }
  if (appliedCode) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: cn("flex items-center justify-between gap-3 rounded-lg bg-success-subtle border border-success px-4 py-2.5", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCheck, className: "w-3.5 h-3.5 text-success-fg", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "text-sm font-medium text-success-fg truncate", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-mono", children: appliedCode }),
          " applied"
        ] })
      ] }),
      onRemove && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        Button,
        {
          variant: "ghost",
          size: "xs",
          onClick: handleRemove,
          className: "text-success-fg underline hover:no-underline shrink-0",
          children: "Remove"
        }
      )
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: cn("space-y-1.5", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        Input,
        {
          id: "coupon-code",
          label: "",
          placeholder: "Enter coupon code",
          value: code,
          onChange: (e) => {
            setCode(e.target.value.toUpperCase());
            setState("idle");
            setMessage("");
          },
          onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), handleApply()),
          className: "flex-1",
          "aria-label": "Coupon code"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        Button,
        {
          variant: "outline",
          loading: state === "loading",
          disabled: !code.trim(),
          onClick: handleApply,
          className: "shrink-0 self-end mb-0.5",
          children: "Apply"
        }
      )
    ] }),
    message && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: cn("text-xs", state === "success" ? "text-success-fg" : "text-error"), children: message })
  ] });
}

// modules/domains/common/cart/CartSummary.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function CartSummary({
  cart,
  onQuantityChange,
  onRemove,
  onCouponApply,
  onCouponRemove,
  appliedCoupon,
  onCheckout,
  checkoutLabel = "Proceed to Checkout",
  showTotals = true,
  showCoupon = true,
  className
}) {
  if (cart.items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: cn("flex flex-col items-center justify-center gap-3 py-12 text-center", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_fontawesome15.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faCartShopping, className: "w-10 h-10 text-text-disabled", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "font-medium text-text-primary", children: "Your cart is empty" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-sm text-text-secondary", children: "Add items to get started" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "divide-y divide-border", children: cart.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      CartItem,
      {
        item,
        onQuantityChange,
        onRemove,
        className: "py-4 first:pt-0 last:pb-0"
      },
      item.cartItemId
    )) }),
    showCoupon && onCouponApply && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      CouponInput,
      {
        appliedCode: appliedCoupon,
        onApply: onCouponApply,
        onRemove: onCouponRemove
      }
    ),
    showTotals && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(OrderTotalsCard, { totals: cart.totals }),
    onCheckout && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, { fullWidth: true, onClick: onCheckout, className: "h-11 font-semibold", children: checkoutLabel })
  ] });
}

// modules/domains/common/charts/Charts.tsx
var import_chart = require("chart.js");
var import_react_chartjs_2 = require("react-chartjs-2");
var import_jsx_runtime21 = require("react/jsx-runtime");
import_chart.Chart.register(
  import_chart.CategoryScale,
  import_chart.LinearScale,
  import_chart.BarElement,
  import_chart.LineElement,
  import_chart.PointElement,
  import_chart.ArcElement,
  import_chart.RadialLinearScale,
  import_chart.Filler,
  import_chart.Tooltip,
  import_chart.Legend,
  import_chart.Title
);
function ChartCard({ title, subtitle, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    {
      className: cn(
        "rounded-xl border border-border bg-surface-raised p-5 shadow-sm",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "mt-0.5 text-xs text-text-secondary", children: subtitle })
        ] }),
        children
      ]
    }
  );
}
var BAR_DATA = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [4200, 5800, 4900, 7100, 6300, 8400],
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      borderRadius: 6
    },
    {
      label: "Expenses",
      data: [2800, 3200, 3600, 4100, 3900, 4700],
      backgroundColor: "rgba(139, 92, 246, 0.8)",
      borderRadius: 6
    }
  ]
};
function RevenueBarChart({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    ChartCard,
    {
      title: "Revenue vs Expenses",
      subtitle: "Monthly comparison (USD)",
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react_chartjs_2.Bar,
        {
          data: BAR_DATA,
          options: {
            responsive: true,
            plugins: { legend: { position: "top" } },
            scales: { y: { beginAtZero: true } }
          }
        }
      )
    }
  );
}
var LINE_DATA = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Active Users",
      data: [1200, 1900, 1500, 2300, 2100, 2800, 1700],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      fill: true,
      tension: 0.4
    },
    {
      label: "New Signups",
      data: [300, 480, 220, 560, 410, 690, 320],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      fill: true,
      tension: 0.4
    }
  ]
};
function UserActivityLineChart({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    ChartCard,
    {
      title: "User Activity",
      subtitle: "Daily active users vs new signups",
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react_chartjs_2.Line,
        {
          data: LINE_DATA,
          options: {
            responsive: true,
            plugins: { legend: { position: "top" } },
            scales: { y: { beginAtZero: true } }
          }
        }
      )
    }
  );
}
var DOUGHNUT_DATA = {
  labels: ["Electronics", "Clothing", "Food", "Books", "Other"],
  datasets: [
    {
      data: [35, 25, 20, 12, 8],
      backgroundColor: [
        "rgba(59, 130, 246, 0.85)",
        "rgba(139, 92, 246, 0.85)",
        "rgba(34, 197, 94, 0.85)",
        "rgba(245, 158, 11, 0.85)",
        "rgba(107, 114, 128, 0.85)"
      ],
      borderWidth: 2,
      borderColor: "#fff"
    }
  ]
};
function SalesByCategoryDoughnut({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    ChartCard,
    {
      title: "Sales by Category",
      subtitle: "Percentage share of total revenue",
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mx-auto max-w-xs", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react_chartjs_2.Doughnut,
        {
          data: DOUGHNUT_DATA,
          options: {
            responsive: true,
            plugins: { legend: { position: "bottom" } },
            cutout: "65%"
          }
        }
      ) })
    }
  );
}
var RADAR_DATA = {
  labels: ["Speed", "Reliability", "Support", "Price", "Features", "UX"],
  datasets: [
    {
      label: "Our Product",
      data: [88, 92, 78, 70, 85, 90],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      pointBackgroundColor: "rgb(59, 130, 246)"
    },
    {
      label: "Competitor",
      data: [72, 80, 65, 85, 75, 68],
      borderColor: "rgb(139, 92, 246)",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
      pointBackgroundColor: "rgb(139, 92, 246)"
    }
  ]
};
function ProductComparisonRadar({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    ChartCard,
    {
      title: "Product Comparison",
      subtitle: "Our product vs competitor across 6 dimensions",
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react_chartjs_2.Radar,
        {
          data: RADAR_DATA,
          options: {
            responsive: true,
            plugins: { legend: { position: "top" } },
            scales: { r: { beginAtZero: true, max: 100 } }
          }
        }
      )
    }
  );
}
var POLAR_DATA = {
  labels: ["North", "South", "East", "West", "Central"],
  datasets: [
    {
      data: [42, 28, 35, 19, 56],
      backgroundColor: [
        "rgba(59, 130, 246, 0.75)",
        "rgba(34, 197, 94, 0.75)",
        "rgba(245, 158, 11, 0.75)",
        "rgba(239, 68, 68, 0.75)",
        "rgba(139, 92, 246, 0.75)"
      ],
      borderWidth: 1
    }
  ]
};
function RegionalSalesPolar({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    ChartCard,
    {
      title: "Regional Sales",
      subtitle: "Units sold per region",
      className,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mx-auto max-w-xs", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react_chartjs_2.PolarArea,
        {
          data: POLAR_DATA,
          options: {
            responsive: true,
            plugins: { legend: { position: "bottom" } }
          }
        }
      ) })
    }
  );
}

// modules/domains/common/chat/ChatBox.tsx
var import_react12 = require("react");
var import_react_fontawesome16 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons15 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime22 = require("react/jsx-runtime");
function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function ChatBox({
  title = "Support Chat",
  subtitle = "We typically reply in a few minutes",
  placeholder = "Type a message\u2026",
  initialMessages = [],
  onSend,
  className
}) {
  const [open, setOpen] = (0, import_react12.useState)(false);
  const [minimised, setMinimised] = (0, import_react12.useState)(false);
  const [messages, setMessages] = (0, import_react12.useState)(initialMessages);
  const [input, setInput] = (0, import_react12.useState)("");
  const [loading, setLoading] = (0, import_react12.useState)(false);
  const [unread, setUnread] = (0, import_react12.useState)(0);
  const listRef = (0, import_react12.useRef)(null);
  const inputRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => {
        var _a3;
        return (_a3 = inputRef.current) == null ? void 0 : _a3.focus();
      }, 120);
    }
  }, [open]);
  (0, import_react12.useEffect)(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);
  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg = {
      id: `u-${Date.now()}`,
      role: "user",
      text,
      timestamp: formatTime(/* @__PURE__ */ new Date())
    };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    try {
      const reply = onSend ? await onSend(text) : await new Promise((r) => setTimeout(() => r("Thanks for your message! We\u2019ll get back to you shortly."), 900));
      const agentMsg = {
        id: `a-${Date.now()}`,
        role: "agent",
        text: reply,
        timestamp: formatTime(/* @__PURE__ */ new Date())
      };
      setMessages((prev) => [...prev, agentMsg]);
      if (!open) setUnread((n) => n + 1);
    } finally {
      setLoading(false);
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }
  function toggleOpen() {
    setOpen((v) => !v);
    if (minimised) setMinimised(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    "div",
    {
      className: cn("fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3", className),
      role: "region",
      "aria-label": "Chat support",
      children: [
        open && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
          "div",
          {
            className: cn(
              "w-80 sm:w-96 rounded-2xl shadow-2xl border border-border overflow-hidden",
              "bg-surface-base flex flex-col transition-all duration-200",
              minimised ? "h-14" : "h-[480px]"
            ),
            "aria-live": "polite",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center gap-3 px-4 py-3 bg-primary text-primary-fg flex-shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex items-center justify-center w-8 h-8 rounded-full bg-white/20", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faRobot, className: "w-4 h-4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm font-semibold leading-tight truncate", children: title }),
                  !minimised && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-xs text-primary-fg/70 truncate", children: subtitle })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                  "button",
                  {
                    onClick: () => setMinimised((v) => !v),
                    "aria-label": minimised ? "Expand chat" : "Minimise chat",
                    className: "flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faMinus, className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                  "button",
                  {
                    onClick: () => setOpen(false),
                    "aria-label": "Close chat",
                    className: "flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faTimes, className: "w-3 h-3" })
                  }
                )
              ] }),
              !minimised && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
                  "div",
                  {
                    ref: listRef,
                    className: "flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 scroll-smooth",
                    children: [
                      messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col items-center justify-center h-full gap-2 text-text-secondary", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faCommentDots, className: "w-8 h-8 opacity-30" }),
                        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm", children: "Start the conversation" })
                      ] }),
                      messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
                        "div",
                        {
                          className: cn(
                            "flex gap-2 items-end",
                            msg.role === "user" ? "flex-row-reverse" : "flex-row"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                              "div",
                              {
                                className: cn(
                                  "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs",
                                  msg.role === "user" ? "bg-primary text-primary-fg" : "bg-surface-overlay text-text-secondary"
                                ),
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                                  import_react_fontawesome16.FontAwesomeIcon,
                                  {
                                    icon: msg.role === "user" ? import_free_solid_svg_icons15.faUser : import_free_solid_svg_icons15.faRobot,
                                    className: "w-3 h-3"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
                              "div",
                              {
                                className: cn(
                                  "max-w-[75%] flex flex-col gap-0.5",
                                  msg.role === "user" ? "items-end" : "items-start"
                                ),
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                                    "div",
                                    {
                                      className: cn(
                                        "px-3 py-2 rounded-2xl text-sm leading-snug",
                                        msg.role === "user" ? "bg-primary text-primary-fg rounded-br-sm" : "bg-surface-raised border border-border text-text-primary rounded-bl-sm"
                                      ),
                                      children: msg.text
                                    }
                                  ),
                                  msg.timestamp && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-[10px] text-text-disabled px-1", children: msg.timestamp })
                                ]
                              }
                            )
                          ]
                        },
                        msg.id
                      )),
                      loading && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex gap-2 items-end", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-surface-overlay text-text-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faRobot, className: "w-3 h-3" }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "bg-surface-raised border border-border rounded-2xl rounded-bl-sm px-3 py-2", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "flex gap-1 items-center", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-text-disabled animate-bounce [animation-delay:0ms]" }),
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-text-disabled animate-bounce [animation-delay:150ms]" }),
                          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-text-disabled animate-bounce [animation-delay:300ms]" })
                        ] }) })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex-shrink-0 border-t border-border bg-surface-base px-3 py-2 flex gap-2 items-end", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                    "textarea",
                    {
                      ref: inputRef,
                      value: input,
                      onChange: (e) => setInput(e.target.value),
                      onKeyDown: handleKeyDown,
                      placeholder,
                      rows: 1,
                      disabled: loading,
                      "aria-label": "Chat message input",
                      className: cn(
                        "flex-1 resize-none rounded-xl border border-border bg-surface-raised px-3 py-2",
                        "text-sm text-text-primary placeholder:text-text-disabled",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "max-h-28 overflow-y-auto leading-snug"
                      ),
                      style: { height: 38 },
                      onInput: (e) => {
                        const el = e.currentTarget;
                        el.style.height = "38px";
                        el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
                      }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                    "button",
                    {
                      onClick: handleSend,
                      disabled: loading || !input.trim(),
                      "aria-label": "Send message",
                      className: cn(
                        "flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl",
                        "bg-primary text-primary-fg",
                        "hover:bg-primary-hover active:bg-primary-active transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faPaperPlane, className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
          "button",
          {
            onClick: toggleOpen,
            "aria-label": open ? "Close chat" : "Open chat",
            "aria-expanded": open,
            className: cn(
              "relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl",
              "bg-primary text-primary-fg",
              "hover:bg-primary-hover active:bg-primary-active transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                import_react_fontawesome16.FontAwesomeIcon,
                {
                  icon: open ? import_free_solid_svg_icons15.faTimes : import_free_solid_svg_icons15.faCommentDots,
                  className: "w-6 h-6",
                  "aria-hidden": "true"
                }
              ),
              !open && unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-error text-white text-[10px] font-bold", children: unread > 9 ? "9+" : unread })
            ]
          }
        )
      ]
    }
  );
}

// modules/domains/common/discount/DiscountBadge.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var sizeMap2 = {
  sm: "text-xs px-1.5 py-0.5",
  md: "text-sm px-2 py-0.5",
  lg: "text-base px-2.5 py-1"
};
function DiscountBadge({ discountType, discountValue, currency = "TRY", size = "md", className }) {
  let label;
  if (discountType === "PERCENTAGE") {
    label = `${discountValue}% off`;
  } else if (discountType === "FIXED") {
    const formatted = new Intl.NumberFormat("tr-TR", { style: "currency", currency, maximumFractionDigits: 0 }).format(discountValue);
    label = `${formatted} off`;
  } else {
    label = "Free shipping";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "span",
    {
      className: cn(
        "inline-flex items-center font-semibold rounded-full",
        "bg-error-subtle text-error border border-error/30",
        sizeMap2[size],
        className
      ),
      children: label
    }
  );
}

// modules/domains/common/i18n/DirectionProvider.tsx
var import_react13 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var DirectionContext = (0, import_react13.createContext)({
  lang: "en",
  dir: "ltr",
  isRTL: false
});
function useDirection() {
  return (0, import_react13.useContext)(DirectionContext);
}
function DirectionProvider({ lang, children, applyToDocument = false }) {
  const dir = getDirection(lang);
  if (applyToDocument && typeof document !== "undefined") {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DirectionContext.Provider, { value: { lang, dir, isRTL: isRTL(lang) }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { dir, lang, children }) });
}

// modules/domains/common/i18n/LanguageSwitcher.tsx
var import_react15 = require("react");
var import_react_fontawesome17 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons16 = require("@fortawesome/free-solid-svg-icons");
var Flags = __toESM(require("country-flag-icons/react/3x2"));

// modules/ui/DropdownMenu.tsx
var import_react14 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function DropdownMenu({
  trigger,
  items,
  header,
  align = "left",
  className
}) {
  const [open, setOpen] = (0, import_react14.useState)(false);
  const containerRef = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    if (!open) return;
    function onOutside(e) {
      var _a3;
      if (!((_a3 = containerRef.current) == null ? void 0 : _a3.contains(e.target))) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { ref: containerRef, className: cn("relative inline-block", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "div",
      {
        onClick: () => setOpen((p) => !p),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        children: trigger
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "div",
      {
        role: "menu",
        className: cn(
          "absolute z-[60] mt-1 min-w-[10rem] rounded-lg border border-border bg-surface-raised shadow-lg py-1",
          align === "right" ? "right-0" : "left-0"
        ),
        children: [
          header && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "border-b border-border mb-1", children: header }),
          items.map((item, i) => {
            if (item.type === "separator") {
              return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { role: "separator", className: "my-1 border-t border-border" }, i);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
              "button",
              {
                role: "menuitem",
                type: "button",
                disabled: item.disabled,
                onClick: () => {
                  var _a3;
                  (_a3 = item.onClick) == null ? void 0 : _a3.call(item);
                  setOpen(false);
                },
                className: cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-sm text-left transition-colors",
                  "focus-visible:outline-none focus-visible:bg-surface-overlay",
                  item.danger ? "text-error hover:bg-error-subtle" : "text-text-primary hover:bg-surface-overlay",
                  item.disabled && "opacity-50 cursor-not-allowed"
                ),
                children: [
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { "aria-hidden": "true", children: item.icon }),
                  item.label
                ]
              },
              i
            );
          })
        ]
      }
    )
  ] });
}

// modules/domains/common/i18n/LanguageSwitcher.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function getFlag(lang) {
  const region = langToRegion(lang);
  if (region === null) return null;
  const FlagComp = Flags[region];
  return FlagComp ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(FlagComp, { className: "w-4 h-auto rounded-[2px] shadow-sm" }) : null;
}
function LanguageSwitcher({
  value,
  onChange,
  languages = AVAILABLE_LANGUAGES,
  className
}) {
  const [internal, setInternal] = (0, import_react15.useState)(DEFAULT_LANGUAGE);
  const current = value !== void 0 ? value : internal;
  const items = languages.map((lang) => {
    var _a3;
    return {
      type: "item",
      label: getLanguageName(lang),
      // No cast. The comment here used to say DropdownMenu expects a string, and it
      // does not — `DropdownItem.icon` is `React.ReactNode`, which an element and
      // `undefined` both satisfy. The `as any` was load-bearing for nothing and hid
      // the fact that this had always type-checked.
      //
      // `?? undefined` rather than null so a flagless row renders with no icon slot
      // at all: `DropdownMenu` guards with `item.icon && …`, which treats both the
      // same, but `undefined` is what "absent optional prop" means.
      icon: (_a3 = getFlag(lang)) != null ? _a3 : void 0,
      onClick: () => {
        setInternal(lang);
        onChange == null ? void 0 : onChange(lang);
      }
    };
  });
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    DropdownMenu,
    {
      className,
      trigger: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Button, { variant: "outline", size: "sm", className: "gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "w-4 flex items-center justify-center shrink-0", "aria-hidden": "true", children: getFlag(current) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: getLanguageName(current) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faChevronDown, className: "w-3 h-3 text-text-disabled" })
      ] }),
      items
    }
  );
}

// modules/domains/common/location/CountrySelector.tsx
var import_react16 = require("react");
var import_react_dom = require("react-dom");

// libs/utils/isBrowser.ts
var isBrowser = typeof window !== "undefined";

// modules/domains/common/location/CountrySelector.tsx
var import_countries_list = require("countries-list");
var Flags2 = __toESM(require("country-flag-icons/react/3x2"));
var import_react_fontawesome18 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons17 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime27 = require("react/jsx-runtime");
var ALL_COUNTRIES = (0, import_countries_list.getCountryDataList)().map((c) => ({ iso2: c.iso2, name: c.name })).sort((a, b) => a.name.localeCompare(b.name));
function CountryFlag({ iso2 }) {
  if (!iso2) return null;
  const FlagComp = Flags2[iso2];
  if (!FlagComp) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(FlagComp, { className: "w-4 h-auto rounded-[2px] shadow-sm shrink-0" });
}
function CountrySelector({
  value,
  onChange,
  id: idProp,
  label = "Country",
  placeholder = "Select country\u2026",
  disabled = false,
  hint,
  error,
  required,
  className
}) {
  const uid = (0, import_react16.useId)();
  const id = idProp != null ? idProp : uid;
  const [open, setOpen] = (0, import_react16.useState)(false);
  const [search, setSearch] = (0, import_react16.useState)("");
  const [rect, setRect] = (0, import_react16.useState)(null);
  const triggerRef = (0, import_react16.useRef)(null);
  const searchRef = (0, import_react16.useRef)(null);
  const portalId = `country-selector-portal-${id.replace(/:/g, "")}`;
  const selected = ALL_COUNTRIES.find((c) => c.iso2 === value);
  const filtered = search.trim() ? ALL_COUNTRIES.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.iso2.toLowerCase().includes(search.toLowerCase())
  ) : ALL_COUNTRIES;
  function handleOpen() {
    if (disabled) return;
    if (!open && triggerRef.current) {
      setRect(triggerRef.current.getBoundingClientRect());
    }
    setOpen((p) => !p);
  }
  (0, import_react16.useEffect)(() => {
    if (!open) {
      setSearch("");
      return;
    }
    setTimeout(() => {
      var _a3;
      return (_a3 = searchRef.current) == null ? void 0 : _a3.focus();
    }, 0);
    function onOutside(e) {
      var _a3, _b;
      const target = e.target;
      if (!((_a3 = triggerRef.current) == null ? void 0 : _a3.contains(target)) && !((_b = document.getElementById(portalId)) == null ? void 0 : _b.contains(target))) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onScroll() {
      if (triggerRef.current) setRect(triggerRef.current.getBoundingClientRect());
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [open, portalId]);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const panel = open && rect && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      id: portalId,
      role: "listbox",
      "aria-label": "Select country",
      style: { position: "fixed", top: rect.bottom + 4, left: rect.left, width: rect.width, zIndex: 9999 },
      className: "rounded-lg border border-border bg-surface-raised shadow-lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "input",
          {
            ref: searchRef,
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search country\u2026",
            className: cn(
              "w-full rounded-md border border-border bg-surface-base px-2.5 py-1.5 text-sm text-text-primary",
              "placeholder:text-text-disabled",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "max-h-56 overflow-y-auto py-1", children: [
          filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "px-3 py-2 text-sm text-text-secondary", children: "No results" }),
          filtered.map((opt) => {
            const active = opt.iso2 === value;
            return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
              "button",
              {
                type: "button",
                role: "option",
                "aria-selected": active,
                onClick: () => {
                  onChange(opt.iso2);
                  setOpen(false);
                },
                className: cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-sm text-left transition-colors",
                  "focus-visible:outline-none focus-visible:bg-surface-overlay",
                  active ? "bg-primary-subtle text-primary font-medium" : "text-text-primary hover:bg-surface-overlay"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CountryFlag, { iso2: opt.iso2 }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "flex-1 truncate", children: opt.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "text-xs text-text-secondary shrink-0", children: opt.iso2 }),
                  active && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_fontawesome18.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faCheck, className: "w-3 h-3 text-primary shrink-0", "aria-hidden": "true" })
                ]
              }
            ) }, opt.iso2);
          })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cn("space-y-1", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { ref: triggerRef, className: "relative w-full", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      Button,
      {
        id,
        type: "button",
        variant: "outline",
        size: "sm",
        disabled,
        onClick: handleOpen,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-describedby": [hintId, errorId].filter(Boolean).join(" ") || void 0,
        "aria-invalid": !!error,
        "aria-required": required,
        className: cn(
          "w-full justify-between gap-2",
          error && "border-error ring-1 ring-error"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "flex items-center gap-2 min-w-0", children: selected ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CountryFlag, { iso2: selected.iso2 }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "truncate", children: selected.name })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "text-text-disabled truncate", children: placeholder }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_fontawesome18.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faChevronDown, className: "w-3 h-3 text-text-disabled shrink-0", "aria-hidden": "true" })
        ]
      }
    ) }),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error }),
    isBrowser && (0, import_react_dom.createPortal)(panel, document.body)
  ] });
}

// modules/domains/common/location/GeoPointDisplay.tsx
var import_react_fontawesome19 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons18 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime28 = require("react/jsx-runtime");
function GeoPointDisplay({
  point,
  label,
  showMapLink = true,
  precision = 6,
  className
}) {
  const lat = point.latitude.toFixed(precision);
  const lng = point.longitude.toFixed(precision);
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: cn("inline-flex items-center gap-2 text-sm", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faLocationDot, className: "w-3.5 h-3.5 text-text-disabled shrink-0", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "min-w-0", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-xs text-text-secondary mb-0.5", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("p", { className: "font-mono text-text-primary tabular-nums", children: [
        lat,
        ", ",
        lng
      ] })
    ] }),
    showMapLink && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "a",
      {
        href: mapsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-xs text-primary hover:text-primary-hover underline shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
        "aria-label": `Open ${lat}, ${lng} in Google Maps`,
        children: "Map"
      }
    )
  ] });
}

// modules/domains/common/location/LocationPicker.tsx
var import_react18 = require("react");
var import_countries_list2 = require("countries-list");

// modules/ui/Select.tsx
var import_react17 = require("react");
var import_react_fontawesome20 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons19 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime29 = require("react/jsx-runtime");
function CustomSelect({
  id,
  label,
  options,
  placeholder,
  hint,
  error,
  disabled,
  required,
  searchable,
  className,
  value,
  onChange
}) {
  const [open, setOpen] = (0, import_react17.useState)(false);
  const [search, setSearch] = (0, import_react17.useState)("");
  const containerRef = (0, import_react17.useRef)(null);
  const searchRef = (0, import_react17.useRef)(null);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const selected = options.find((o) => o.value === value);
  const filtered = searchable && search ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase())) : options;
  (0, import_react17.useEffect)(() => {
    if (!open) {
      setSearch("");
      return;
    }
    if (searchable) setTimeout(() => {
      var _a3;
      return (_a3 = searchRef.current) == null ? void 0 : _a3.focus();
    }, 30);
    function onOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open, searchable]);
  function select(v) {
    onChange == null ? void 0 : onChange(v);
    setOpen(false);
  }
  function onKeyDown(e) {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((o) => !o);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { ref: containerRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { id: `${id}-label`, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "div",
      {
        role: "combobox",
        tabIndex: disabled ? -1 : 0,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-labelledby": `${id}-label`,
        "aria-describedby": describedBy,
        "aria-disabled": disabled,
        "aria-required": required,
        id,
        onClick: () => !disabled && setOpen((o) => !o),
        onKeyDown,
        className: cn(
          "flex items-center gap-2 w-full rounded-md border px-3 py-2 text-sm transition-colors cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          error ? "border-error ring-1 ring-error bg-error-subtle" : "border-border bg-surface-base",
          disabled && "opacity-50 cursor-not-allowed bg-surface-sunken"
        ),
        children: [
          (selected == null ? void 0 : selected.icon) && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "shrink-0", children: selected.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: cn("flex-1", !selected && "text-text-disabled"), children: selected ? selected.label : placeholder != null ? placeholder : "Select\u2026" }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react_fontawesome20.FontAwesomeIcon, { icon: open ? import_free_solid_svg_icons19.faChevronUp : import_free_solid_svg_icons19.faChevronDown, className: "w-3 h-3 text-text-disabled", "aria-hidden": "true" })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "z-20 w-full rounded-md border border-border bg-surface-raised shadow-lg overflow-hidden", children: [
      searchable && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "input",
        {
          ref: searchRef,
          type: "text",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search\u2026",
          className: cn(
            "block w-full rounded-md border border-border bg-surface-base px-3 py-1.5 text-sm",
            "text-text-primary placeholder:text-text-disabled",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("ul", { role: "listbox", "aria-labelledby": `${id}-label`, className: "py-1 max-h-48 overflow-y-auto", children: [
        placeholder && !search && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "li",
          {
            role: "option",
            "aria-selected": !value,
            onClick: () => select(""),
            tabIndex: 0,
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                select("");
              }
            },
            className: cn(
              "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer text-text-disabled select-none",
              "hover:bg-surface-overlay focus-visible:outline-none focus-visible:bg-surface-overlay"
            ),
            children: placeholder
          }
        ),
        filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: "No results found." }) : filtered.map((opt) => {
          const active = opt.value === value;
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
            "li",
            {
              role: "option",
              "aria-selected": active,
              onClick: () => select(opt.value),
              tabIndex: 0,
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  select(opt.value);
                }
              },
              className: cn(
                "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer select-none",
                "hover:bg-surface-overlay transition-colors",
                "focus-visible:outline-none focus-visible:bg-surface-overlay",
                active && "text-primary font-medium"
              ),
              children: [
                opt.icon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "shrink-0", "aria-hidden": "true", children: opt.icon }),
                opt.label,
                active && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react_fontawesome20.FontAwesomeIcon, { icon: import_free_solid_svg_icons19.faCheck, className: "ml-auto w-3 h-3 text-primary", "aria-hidden": "true" })
              ]
            },
            opt.value
          );
        })
      ] })
    ] }),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}
var Select = (0, import_react17.forwardRef)(function Select2(_a3, ref) {
  var _b = _a3, { id, label, options, placeholder, hint, error, disabled, required, searchable, className } = _b, props = __objRest(_b, ["id", "label", "options", "placeholder", "hint", "error", "disabled", "required", "searchable", "className"]);
  const hasIcons = options.some((o) => o.icon);
  if (hasIcons || searchable) {
    const _a4 = props, { value, onChange } = _a4, rest = __objRest(_a4, ["value", "onChange"]);
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      CustomSelect,
      __spreadValues({
        id,
        label,
        options,
        placeholder,
        hint,
        error,
        disabled,
        required,
        searchable,
        className,
        value,
        onChange: (v) => onChange == null ? void 0 : onChange({ target: { value: v } })
      }, rest)
    );
  }
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "select",
      __spreadProps(__spreadValues({
        ref,
        id,
        disabled,
        required,
        "aria-describedby": describedBy,
        "aria-invalid": !!error,
        "data-testid": `select-${id}`,
        className: cn(
          "block w-full rounded-md border px-3 py-2 text-sm transition-colors appearance-none",
          "bg-surface-base text-text-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:border-border-focus",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-sunken",
          error ? "border-error ring-1 ring-error bg-error-subtle" : "border-border"
        )
      }, props), {
        children: [
          placeholder && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: "", children: placeholder }),
          options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
        ]
      })
    ),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
});

// modules/domains/common/location/LocationPicker.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var COUNTRY_OPTIONS = (0, import_countries_list2.getCountryDataList)().sort((a, b) => a.name.localeCompare(b.name)).map((c) => ({ value: c.iso2, label: c.name }));
function LocationPicker({ initial = {}, onSubmit, onCancel, error, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const [values, setValues] = (0, import_react18.useState)({
    city: (_a3 = initial.city) != null ? _a3 : null,
    state: (_b = initial.state) != null ? _b : null,
    country: (_c = initial.country) != null ? _c : null,
    countryCode: (_d = initial.countryCode) != null ? _d : null,
    postalCode: (_e = initial.postalCode) != null ? _e : null,
    latitude: (_f = initial.latitude) != null ? _f : null,
    longitude: (_g = initial.longitude) != null ? _g : null
  });
  const [loading, setLoading] = (0, import_react18.useState)(false);
  function set(key, val) {
    setValues((v) => __spreadProps(__spreadValues({}, v), { [key]: val }));
  }
  function handleCountry(code) {
    var _a4;
    const country = COUNTRY_OPTIONS.find((c) => c.value === code);
    set("countryCode", code || null);
    set("country", (_a4 = country == null ? void 0 : country.label) != null ? _a4 : null);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      columns: 2,
      className,
      actions: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
        onCancel && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { type: "submit", loading, children: "Save Location" })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Select,
          {
            id: "loc-country",
            label: "Country",
            options: [{ value: "", label: "Select country\u2026" }, ...COUNTRY_OPTIONS],
            value: (_h = values.countryCode) != null ? _h : "",
            onChange: (e) => handleCountry(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Input,
          {
            id: "loc-city",
            label: "City",
            value: (_i = values.city) != null ? _i : "",
            onChange: (e) => set("city", e.target.value || null)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Input,
          {
            id: "loc-state",
            label: "State / Province",
            value: (_j = values.state) != null ? _j : "",
            onChange: (e) => set("state", e.target.value || null)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Input,
          {
            id: "loc-postal",
            label: "Postal Code",
            value: (_k = values.postalCode) != null ? _k : "",
            onChange: (e) => set("postalCode", e.target.value || null)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Input,
          {
            id: "loc-lat",
            label: "Latitude",
            type: "number",
            value: (_l = values.latitude) != null ? _l : "",
            onChange: (e) => set("latitude", e.target.value ? parseFloat(e.target.value) : null)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          Input,
          {
            id: "loc-lng",
            label: "Longitude",
            type: "number",
            value: (_m = values.longitude) != null ? _m : "",
            onChange: (e) => set("longitude", e.target.value ? parseFloat(e.target.value) : null)
          }
        )
      ]
    }
  );
}

// modules/domains/common/money/CurrencySelector.tsx
var import_react19 = require("react");
var import_react_dom2 = require("react-dom");
var import_countries_list3 = require("countries-list");
var Flags3 = __toESM(require("country-flag-icons/react/3x2"));
var import_react_fontawesome21 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons20 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime31 = require("react/jsx-runtime");
var currencyToCountry = {};
var _seen = /* @__PURE__ */ new Set();
for (const c of (0, import_countries_list3.getCountryDataList)()) {
  for (const cur of c.currency) {
    if (!currencyToCountry[cur]) currencyToCountry[cur] = c.iso2;
    _seen.add(cur);
  }
}
var ALL_CURRENCIES = Array.from(_seen).sort().map((cur) => ({ value: cur, countryCode: currencyToCountry[cur] }));
function CurrencyFlag({ countryCode }) {
  if (!countryCode) return null;
  const FlagComp = Flags3[countryCode];
  if (!FlagComp) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FlagComp, { className: "w-4 h-auto rounded-[2px] shadow-sm shrink-0" });
}
function CurrencySelector({
  value,
  onChange,
  id = "currency",
  label = "Currency",
  disabled = false,
  className
}) {
  const [open, setOpen] = (0, import_react19.useState)(false);
  const [search, setSearch] = (0, import_react19.useState)("");
  const [rect, setRect] = (0, import_react19.useState)(null);
  const triggerRef = (0, import_react19.useRef)(null);
  const searchRef = (0, import_react19.useRef)(null);
  const filtered = search.trim() ? ALL_CURRENCIES.filter((c) => c.value.toLowerCase().includes(search.toLowerCase())) : ALL_CURRENCIES;
  function handleOpen() {
    if (disabled) return;
    if (!open && triggerRef.current) {
      setRect(triggerRef.current.getBoundingClientRect());
    }
    setOpen((p) => !p);
  }
  (0, import_react19.useEffect)(() => {
    if (!open) {
      setSearch("");
      return;
    }
    setTimeout(() => {
      var _a3;
      return (_a3 = searchRef.current) == null ? void 0 : _a3.focus();
    }, 0);
    function onOutside(e) {
      var _a3, _b;
      const target = e.target;
      if (!((_a3 = triggerRef.current) == null ? void 0 : _a3.contains(target)) && !((_b = document.getElementById("currency-portal")) == null ? void 0 : _b.contains(target))) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onScroll() {
      if (triggerRef.current) setRect(triggerRef.current.getBoundingClientRect());
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [open]);
  const panel = open && rect && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "div",
    {
      id: "currency-portal",
      role: "listbox",
      "aria-label": "Select currency",
      style: { position: "fixed", top: rect.bottom + 4, left: rect.left, width: rect.width, zIndex: 9999 },
      className: "rounded-lg border border-border bg-surface-raised shadow-lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "input",
          {
            ref: searchRef,
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search currency\u2026",
            className: cn(
              "w-full rounded-md border border-border bg-surface-base px-2.5 py-1.5 text-sm text-text-primary",
              "placeholder:text-text-disabled",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("ul", { className: "max-h-56 overflow-y-auto py-1", children: [
          filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("li", { className: "px-3 py-2 text-sm text-text-secondary", children: "No results" }),
          filtered.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": opt.value === value,
              onClick: () => {
                onChange(opt.value);
                setOpen(false);
              },
              className: cn(
                "flex w-full items-center gap-2 px-3 py-2 text-sm text-left transition-colors",
                "focus-visible:outline-none focus-visible:bg-surface-overlay",
                opt.value === value ? "bg-primary-subtle text-primary font-medium" : "text-text-primary hover:bg-surface-overlay"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CurrencyFlag, { countryCode: opt.countryCode }),
                /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: opt.value })
              ]
            }
          ) }, opt.value))
        ] })
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: cn("space-y-1", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { ref: triggerRef, className: "relative w-full", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      Button,
      {
        id,
        type: "button",
        variant: "outline",
        size: "sm",
        disabled,
        onClick: handleOpen,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        className: "w-full justify-between gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CurrencyFlag, { countryCode: currencyToCountry[value] }),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: value })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faChevronDown, className: "w-3 h-3 text-text-disabled" })
        ]
      }
    ) }),
    isBrowser && (0, import_react_dom2.createPortal)(panel, document.body)
  ] });
}

// modules/domains/common/notification/NotificationMenu.tsx
var import_react20 = require("react");
var import_react_fontawesome22 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons21 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime32 = require("react/jsx-runtime");
var variantDot = {
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error"
};
function NotificationMenu({
  items,
  onMarkAllRead,
  onViewAll,
  align = "right",
  className
}) {
  const [open, setOpen] = (0, import_react20.useState)(false);
  const containerRef = (0, import_react20.useRef)(null);
  const unreadCount = items.filter((n) => !n.read).length;
  (0, import_react20.useEffect)(() => {
    if (!open) return;
    function onOutside(e) {
      var _a3;
      if (!((_a3 = containerRef.current) == null ? void 0 : _a3.contains(e.target))) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { ref: containerRef, className: cn("relative", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      "button",
      {
        type: "button",
        "aria-label": `Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        onClick: () => setOpen((p) => !p),
        className: "relative flex items-center justify-center w-8 h-8 rounded-md text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome22.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faBell, className: "w-4 h-4", "aria-hidden": "true" }),
          unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[1rem] h-4 px-1 rounded-full bg-error text-primary-fg text-[10px] font-bold leading-none pointer-events-none", children: unreadCount > 9 ? "9+" : unreadCount })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
      "div",
      {
        role: "dialog",
        "aria-label": "Notifications",
        className: cn(
          "absolute top-full mt-2 z-50 w-80 rounded-xl border border-border bg-surface-raised shadow-xl overflow-hidden",
          align === "right" ? "right-0" : "left-0"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "text-sm font-semibold text-text-primary", children: "Notifications" }),
              unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "px-1.5 py-0.5 rounded-full bg-error text-primary-fg text-[10px] font-bold leading-none", children: unreadCount })
            ] }),
            onMarkAllRead && unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
              "button",
              {
                type: "button",
                onClick: onMarkAllRead,
                className: "text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                children: "Mark all read"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "max-h-80 overflow-y-auto divide-y divide-border", children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex flex-col items-center justify-center py-10 gap-2 text-text-disabled", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome22.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faBell, className: "w-6 h-6", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-sm", children: "No notifications" })
          ] }) : items.map((item) => {
            var _a3;
            return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
              "button",
              {
                type: "button",
                onClick: () => {
                  var _a4;
                  (_a4 = item.onClick) == null ? void 0 : _a4.call(item);
                  setOpen(false);
                },
                className: cn(
                  "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors",
                  "hover:bg-surface-overlay focus-visible:outline-none focus-visible:bg-surface-overlay",
                  !item.read && "bg-primary-subtle/40"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                    "span",
                    {
                      className: cn(
                        "mt-1.5 shrink-0 w-2 h-2 rounded-full",
                        item.read ? "bg-transparent" : variantDot[(_a3 = item.variant) != null ? _a3 : "info"]
                      ),
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: cn(
                      "text-sm truncate",
                      item.read ? "text-text-secondary" : "text-text-primary font-medium"
                    ), children: item.title }),
                    item.description && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-xs text-text-secondary mt-0.5 line-clamp-2", children: item.description }),
                    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-[11px] text-text-disabled mt-1", children: item.timestamp })
                  ] })
                ]
              },
              item.id
            );
          }) }),
          onViewAll && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "border-t border-border", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "button",
            {
              type: "button",
              onClick: () => {
                onViewAll();
                setOpen(false);
              },
              className: "w-full py-2.5 text-xs text-primary font-medium hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
              children: "View all notifications"
            }
          ) })
        ]
      }
    )
  ] });
}

// modules/domains/common/payment/CheckoutSuccessState.tsx
var import_react_fontawesome24 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons23 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/Badge.tsx
var import_react_fontawesome23 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons22 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime33 = require("react/jsx-runtime");
var variantMap2 = {
  success: "bg-success-subtle text-success-fg",
  error: "bg-error-subtle text-error-fg",
  warning: "bg-warning-subtle text-warning-fg",
  info: "bg-info-subtle text-info-fg",
  neutral: "bg-surface-sunken text-text-secondary",
  primary: "bg-primary-subtle text-primary"
};
var sizeMap3 = {
  sm: "px-1.5 py-0 text-[10px]",
  md: "px-2 py-0.5 text-xs",
  lg: "px-3 py-1 text-sm"
};
var dotColorMap = {
  success: "bg-success",
  error: "bg-error",
  warning: "bg-warning",
  info: "bg-info",
  neutral: "bg-text-disabled",
  primary: "bg-primary"
};
function Badge(_a3) {
  var _b = _a3, {
    as,
    children,
    variant = "neutral",
    size = "md",
    dot = false,
    dismissible = false,
    onDismiss,
    className
  } = _b, rest = __objRest(_b, [
    "as",
    "children",
    "variant",
    "size",
    "dot",
    "dismissible",
    "onDismiss",
    "className"
  ]);
  const Tag = as != null ? as : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    Tag,
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        variantMap2[variant],
        sizeMap3[size],
        className
      )
    }, rest), {
      children: [
        dot && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "span",
          {
            className: cn("h-1.5 w-1.5 rounded-full shrink-0", dotColorMap[variant]),
            "aria-hidden": "true"
          }
        ),
        children,
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Remove",
            onClick: onDismiss,
            className: "ml-0.5 leading-none hover:opacity-70 transition-opacity focus-visible:outline-none rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react_fontawesome23.FontAwesomeIcon, { icon: import_free_solid_svg_icons22.faXmark, className: "w-2.5 h-2.5" })
          }
        )
      ]
    })
  );
}

// modules/domains/common/payment/PaymentStatusBadge.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var statusMeta = {
  PENDING: { label: "Pending", variant: "warning" },
  AUTHORIZED: { label: "Authorized", variant: "info" },
  PAID: { label: "Paid", variant: "success" },
  FAILED: { label: "Failed", variant: "error" },
  CANCELLED: { label: "Cancelled", variant: "neutral" },
  REFUNDED: { label: "Refunded", variant: "info" }
};
function PaymentStatusBadge({ status, size = "md", dot = false }) {
  var _a3;
  const meta = (_a3 = statusMeta[status]) != null ? _a3 : { label: status, variant: "neutral" };
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Badge, { variant: meta.variant, size, dot, children: meta.label });
}

// modules/domains/common/payment/PaymentSummaryCard.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
var METHOD_LABELS = {
  CREDIT_CARD: "Credit Card",
  DEBIT_CARD: "Debit Card",
  BANK_TRANSFER: "Bank Transfer",
  CASH: "Cash",
  WALLET: "Digital Wallet",
  CRYPTO: "Crypto"
};
function PaymentSummaryCard({ payment, className }) {
  var _a3;
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: cn("bg-surface-raised border border-border rounded-xl overflow-hidden", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border bg-surface-overlay", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-sm font-semibold text-text-primary", children: "Payment" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(PaymentStatusBadge, { status: payment.status, size: "sm", dot: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "px-4 py-4 space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-sm text-text-secondary", children: "Amount" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(PriceDisplay, { amount: payment.amount, currency: payment.currency, size: "lg" })
      ] }),
      payment.method && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-sm text-text-secondary", children: "Method" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-sm font-medium text-text-primary", children: (_a3 = METHOD_LABELS[payment.method]) != null ? _a3 : payment.method })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-sm text-text-secondary", children: "Provider" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-sm font-medium text-text-primary", children: payment.provider })
      ] }),
      payment.providerPaymentId && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-sm text-text-secondary shrink-0", children: "Ref" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-xs font-mono text-text-secondary truncate text-right", children: payment.providerPaymentId })
      ] })
    ] })
  ] });
}

// modules/domains/common/payment/CheckoutSuccessState.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function CheckoutSuccessState({
  payment,
  address,
  onReset,
  locale = "tr-TR"
}) {
  const fmt = new Intl.NumberFormat(locale, { style: "currency", currency: payment.currency });
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-col items-center justify-center py-16 space-y-6 text-center max-w-md mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-success-subtle", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_fontawesome24.FontAwesomeIcon, { icon: import_free_solid_svg_icons23.faCheck, className: "w-10 h-10 text-success", "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h2", { className: "text-2xl font-bold text-text-primary", children: "Payment successful!" }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("p", { className: "text-text-secondary", children: [
        fmt.format(payment.amount),
        " was charged. A receipt has been sent to your email."
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "w-full space-y-4 text-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(PaymentSummaryCard, { payment }),
      address && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "rounded-xl border border-border bg-surface-raised p-4 space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-xs font-semibold text-text-secondary uppercase tracking-wide", children: "Delivering to" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(AddressCard, { address })
      ] })
    ] }),
    onReset && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button, { variant: "outline", onClick: onReset, children: "Start over" })
  ] });
}

// modules/domains/common/payment/CreditCardForm.tsx
var import_react21 = require("react");

// modules/domains/common/payment/CreditCardVisual.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var BRAND_STYLE = {
  VISA: {
    label: "VISA",
    gradient: "from-[#1A1F71] to-[#0A0F3D]"
  },
  MASTERCARD: {
    label: "Mastercard",
    gradient: "from-[#EB001B] via-[#F79E1B] to-[#FF5F00]"
  },
  AMEX: {
    label: "AMEX",
    gradient: "from-[#2E77BC] to-[#006FCF]"
  },
  DISCOVER: {
    label: "Discover",
    gradient: "from-[#F58220] to-[#111827]"
  },
  TROY: {
    label: "TROY",
    gradient: "from-[#00AEEF] via-[#003B71] to-[#111827]"
  },
  MIR: {
    label: "MIR",
    gradient: "from-[#00A551] via-[#0072BC] to-[#111827]"
  },
  UNIONPAY: {
    label: "UnionPay",
    gradient: "from-[#E21836] via-[#00447C] to-[#007A3D]"
  },
  JCB: {
    label: "JCB",
    gradient: "from-[#0B5CAD] via-[#D71920] to-[#009A44]"
  },
  UNKNOWN: {
    label: "",
    gradient: "from-[#4B5563] to-[#111827]"
  }
};
function maskNumber(raw, brand) {
  const d = raw.replace(/\D/g, "").padEnd(brand === "AMEX" ? 15 : 16, "\u2022");
  if (brand === "AMEX") return `${d.slice(0, 4)} ${d.slice(4, 10)} ${d.slice(10, 15)}`;
  return `${d.slice(0, 4)} ${d.slice(4, 8)} ${d.slice(8, 12)} ${d.slice(12, 16)}`;
}
function CreditCardVisual({
  cardNumber = "",
  cardholderName = "",
  expiryMonth = "MM",
  expiryYear = "YY",
  cvv = "",
  brand = "UNKNOWN",
  flipped = false,
  className
}) {
  const { label, gradient } = BRAND_STYLE[brand];
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "div",
    {
      className: cn("w-72 h-44 select-none", className),
      style: { perspective: "1000px" },
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
        "div",
        {
          className: "relative w-full h-full transition-transform duration-500",
          style: { transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
              "div",
              {
                className: cn("absolute inset-0 rounded-2xl bg-gradient-to-br p-5 flex flex-col justify-between shadow-xl text-white", gradient),
                style: { backfaceVisibility: "hidden" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "w-8 h-6 rounded bg-yellow-400/80" }),
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "w-8 h-6 rounded bg-yellow-300/50 -ml-3" })
                    ] }),
                    label && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "text-sm font-bold tracking-widest opacity-90", children: label })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "font-mono text-lg tracking-widest", children: maskNumber(cardNumber, brand) }),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex justify-between items-end", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "text-[9px] uppercase opacity-60 mb-0.5", children: "Card Holder" }),
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "text-xs font-medium tracking-wide uppercase truncate max-w-[10rem]", children: cardholderName || "\u2022\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022\u2022" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "text-right", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "text-[9px] uppercase opacity-60 mb-0.5", children: "Expires" }),
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("p", { className: "text-xs font-medium font-mono", children: [
                        expiryMonth,
                        "/",
                        expiryYear
                      ] })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
              "div",
              {
                className: cn("absolute inset-0 rounded-2xl bg-gradient-to-br shadow-xl overflow-hidden text-white", gradient),
                style: { backfaceVisibility: "hidden", transform: "rotateY(180deg)" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "mt-7 h-10 bg-black/60 w-full" }),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "px-5 mt-4 flex items-center justify-end gap-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "flex-1 h-6 bg-white/20 rounded" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "bg-white/90 rounded px-3 py-1 text-right min-w-[3.5rem]", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "text-[9px] text-gray-500 mb-0.5", children: "CVV" }),
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "font-mono text-sm text-gray-800 tracking-widest", children: cvv ? "\u2022".repeat(cvv.length) : "\u2022\u2022\u2022" })
                    ] })
                  ] }),
                  label && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "absolute bottom-4 right-5 text-sm font-bold tracking-widest opacity-80", children: label })
                ]
              }
            )
          ]
        }
      )
    }
  );
}

// modules/domains/common/payment/CreditCardForm.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
function detectBrand(number) {
  const n = number.replace(/\D/g, "");
  if (!n) return "UNKNOWN";
  const len = n.length;
  const prefix2 = len >= 2 ? Number(n.slice(0, 2)) : 0;
  const prefix3 = len >= 3 ? Number(n.slice(0, 3)) : 0;
  const prefix4 = len >= 4 ? Number(n.slice(0, 4)) : 0;
  const prefix6 = len >= 6 ? Number(n.slice(0, 6)) : 0;
  if (n.startsWith("9792")) return "TROY";
  if (prefix4 >= 2200 && prefix4 <= 2204) return "MIR";
  if (n.startsWith("62")) return "UNIONPAY";
  if (prefix4 >= 3528 && prefix4 <= 3589) return "JCB";
  if (n.startsWith("4")) return "VISA";
  if (prefix2 >= 51 && prefix2 <= 55) return "MASTERCARD";
  if (prefix4 >= 2221 && prefix4 <= 2720) return "MASTERCARD";
  if (prefix2 === 34 || prefix2 === 37) return "AMEX";
  if (n.startsWith("6011") || n.startsWith("65")) return "DISCOVER";
  if (prefix3 >= 644 && prefix3 <= 649) return "DISCOVER";
  if (prefix6 >= 622126 && prefix6 <= 622925) return "DISCOVER";
  return "UNKNOWN";
}
function formatNumber(raw, brand) {
  const digits = raw.replace(/\D/g, "");
  const maxLen = brand === "AMEX" ? 15 : 16;
  const trimmed = digits.slice(0, maxLen);
  if (brand === "AMEX") {
    return trimmed.replace(
      /(\d{4})(\d{0,6})(\d{0,5})/,
      (_, a, b, c) => [a, b, c].filter(Boolean).join(" ")
    );
  }
  return trimmed.replace(/(\d{4})(?=\d)/g, "$1 ");
}
function formatExpiry(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
}
function CreditCardForm({ onSubmit, onCancel, error, className }) {
  const [cardNumber, setCardNumber] = (0, import_react21.useState)("");
  const [cardholderName, setCardholderName] = (0, import_react21.useState)("");
  const [expiry, setExpiry] = (0, import_react21.useState)("");
  const [cvv, setCvv] = (0, import_react21.useState)("");
  const [cvvFocused, setCvvFocused] = (0, import_react21.useState)(false);
  const [errors, setErrors] = (0, import_react21.useState)({});
  const [loading, setLoading] = (0, import_react21.useState)(false);
  const brand = detectBrand(cardNumber);
  const maxCvv = brand === "AMEX" ? 4 : 3;
  function validate() {
    const next = {};
    const digits = cardNumber.replace(/\D/g, "");
    const minLen = brand === "AMEX" ? 15 : 16;
    if (digits.length < minLen) next.cardNumber = `Card number must be ${minLen} digits.`;
    const [mm, yy] = expiry.split("/");
    const month = parseInt(mm != null ? mm : "", 10);
    const year = parseInt(`20${yy != null ? yy : ""}`, 10);
    const now = /* @__PURE__ */ new Date();
    if (!mm || !yy || month < 1 || month > 12) {
      next.expiry = "Enter a valid expiry date (MM/YY).";
    } else if (year < now.getFullYear() || year === now.getFullYear() && month < now.getMonth() + 1) {
      next.expiry = "Card has expired.";
    }
    if (cvv.length < maxCvv) next.cvv = `CVV must be ${maxCvv} digits.`;
    if (!cardholderName.trim()) next.cardholderName = "Cardholder name is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit({
        cardNumber: cardNumber.replace(/\s/g, ""),
        cardholderName: cardholderName.trim(),
        expiryMonth: expiry.split("/")[0],
        expiryYear: expiry.split("/")[1],
        cvv
      });
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
        onCancel && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Button, { type: "submit", loading, children: "Add Card" })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          CreditCardVisual,
          {
            cardNumber,
            cardholderName,
            expiryMonth: expiry.split("/")[0] || "MM",
            expiryYear: expiry.split("/")[1] || "YY",
            cvv,
            brand,
            flipped: cvvFocused
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          Input,
          {
            id: "card-number",
            label: "Card Number",
            placeholder: "1234 5678 9012 3456",
            value: cardNumber,
            inputMode: "numeric",
            autoComplete: "cc-number",
            onChange: (e) => setCardNumber(formatNumber(e.target.value, brand)),
            error: errors.cardNumber
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          Input,
          {
            id: "cardholder-name",
            label: "Cardholder Name",
            placeholder: "Name on card",
            value: cardholderName,
            autoComplete: "cc-name",
            onChange: (e) => setCardholderName(e.target.value.toUpperCase()),
            error: errors.cardholderName
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            Input,
            {
              id: "expiry",
              label: "Expiry",
              placeholder: "MM/YY",
              value: expiry,
              inputMode: "numeric",
              autoComplete: "cc-exp",
              onChange: (e) => setExpiry(formatExpiry(e.target.value)),
              error: errors.expiry
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
            Input,
            {
              id: "cvv",
              label: "CVV",
              type: "password",
              placeholder: "\u2022".repeat(maxCvv),
              value: cvv,
              inputMode: "numeric",
              autoComplete: "cc-csc",
              onChange: (e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, maxCvv)),
              onFocus: () => setCvvFocused(true),
              onBlur: () => setCvvFocused(false),
              error: errors.cvv
            }
          )
        ] })
      ]
    }
  );
}

// modules/domains/common/payment/PaymentMethodSelector.tsx
var import_react22 = require("react");
var import_react_fontawesome25 = require("@fortawesome/react-fontawesome");
var import_free_brands_svg_icons2 = require("@fortawesome/free-brands-svg-icons");
var import_free_solid_svg_icons24 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/RadioGroup.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
function RadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  disabled,
  className,
  optionClassName,
  variant = "default",
  columns = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("fieldset", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("legend", { className: "mb-2 text-sm font-medium text-text-primary", children: legend }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "div",
      {
        className: cn(
          columns === 1 && "space-y-2",
          columns > 1 && "grid gap-2",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        ),
        children: options.map((opt) => {
          const isSelected = value === opt.value;
          return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
            "label",
            {
              className: cn(
                "flex items-start gap-2",
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                variant === "card" && [
                  "rounded-lg border border-border bg-surface-base p-3 transition-colors",
                  "hover:border-border-focus",
                  isSelected && "border-primary bg-primary/5",
                  error && "border-error"
                ],
                optionClassName
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                  "input",
                  {
                    type: "radio",
                    name,
                    value: opt.value,
                    checked: isSelected,
                    disabled,
                    onChange: () => onChange == null ? void 0 : onChange(opt.value),
                    "data-testid": `radio-${name}-${opt.value}`,
                    className: cn(
                      "mt-0.5 h-4 w-4 border-border text-primary",
                      "focus-visible:ring-2 focus-visible:ring-border-focus",
                      error && "border-error"
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2", children: [
                    opt.icon && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-lg leading-none text-text-secondary", children: opt.icon }),
                    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-sm text-text-primary", children: opt.label })
                  ] }),
                  opt.hint && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "mt-0.5 text-xs text-text-secondary", children: opt.hint })
                ] })
              ]
            },
            opt.value
          );
        })
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "mt-1 text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/domains/common/payment/PaymentMethodSelector.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
var paymentOptions = [
  { value: "CREDIT_CARD", label: "Credit Card", icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons24.faCreditCard, className: "h-4 w-4 text-blue-600" }) },
  { value: "PAYPAL", label: "PayPal", icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_brands_svg_icons2.faPaypal, className: "h-4 w-4 text-blue-500" }) },
  { value: "APPLE_PAY", label: "Apple Pay", icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_brands_svg_icons2.faApple, className: "h-4 w-4 text-gray-900" }) },
  { value: "GOOGLE_PAY", label: "Google Pay", icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_brands_svg_icons2.faGoogle, className: "h-4 w-4 text-blue-600" }) },
  { value: "CRYPTO", label: "Cryptocurrency", icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_brands_svg_icons2.faBitcoin, className: "h-4 w-4 text-orange-500" }) }
];
function PaymentMethodSelector({
  value,
  onChange,
  disabled = false,
  className
}) {
  const [selected, setSelected] = (0, import_react22.useState)("CREDIT_CARD");
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: cn("w-full", className), children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    RadioGroup,
    {
      name: "payment-method",
      legend: "Payment method",
      options: paymentOptions,
      value: selected,
      variant: "card",
      columns: 2,
      onChange: (val) => {
        setSelected(val);
        onChange == null ? void 0 : onChange(val);
      },
      disabled
    }
  ) });
}

// modules/domains/common/payment/SavedCardSelector.tsx
var import_react23 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var BRAND_COLOR = {
  VISA: "bg-blue-600",
  MASTERCARD: "bg-orange-500",
  AMEX: "bg-teal-600",
  DISCOVER: "bg-orange-400",
  JCB: "bg-blue-600",
  TROY: "bg-cyan-600",
  MIR: "bg-green-600",
  UNIONPAY: "bg-red-600",
  UNKNOWN: "bg-gray-500"
};
function CardBrandBadge({ brand }) {
  const labels = {
    VISA: "VISA",
    MASTERCARD: "MC",
    AMEX: "AMEX",
    DISCOVER: "DISC",
    JCB: "JCB",
    TROY: "TROY",
    MIR: "MIR",
    UNIONPAY: "UNIONPAY",
    UNKNOWN: "\u2022\u2022"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: cn("inline-flex items-center justify-center rounded px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wide shrink-0", BRAND_COLOR[brand]), children: labels[brand] });
}
function SavedCardSelector({
  cards,
  selectedCardId,
  onSelect,
  onRemove,
  onAddNew,
  className
}) {
  const [active, setActive] = (0, import_react23.useState)(selectedCardId);
  function handleSelect(card) {
    setActive(card.cardId);
    onSelect(card.cardId, card);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("fieldset", { className: cn("space-y-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("legend", { className: "sr-only", children: "Select payment card" }),
    cards.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "text-sm text-text-secondary py-4 text-center", children: "No saved cards." }) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "space-y-2", children: cards.map((card) => {
      const isSelected = active === card.cardId;
      return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
        "label",
        {
          className: cn(
            "flex items-center gap-3 rounded-lg border bg-surface-raised p-3 cursor-pointer transition-colors",
            "focus-within:ring-2 focus-within:ring-border-focus",
            isSelected ? "border-primary ring-2 ring-primary ring-offset-1" : "border-border hover:border-border-strong"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              "input",
              {
                type: "radio",
                name: "saved-card",
                value: card.cardId,
                checked: isSelected,
                onChange: () => handleSelect(card),
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              "span",
              {
                "aria-hidden": "true",
                className: cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  isSelected ? "border-primary bg-primary" : "border-border bg-surface-base"
                ),
                children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CardBrandBadge, { brand: card.brand }),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("p", { className: "text-sm font-medium text-text-primary font-mono", children: [
                "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ",
                card.last4
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("p", { className: "text-xs text-text-secondary", children: [
                card.cardholderName,
                " \xB7 ",
                card.expiryMonth,
                "/",
                card.expiryYear,
                card.isDefault && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "ml-2 text-[10px] font-semibold text-primary uppercase", children: "Default" })
              ] })
            ] }),
            onRemove && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "xs",
                onClick: (e) => {
                  e.preventDefault();
                  onRemove(card.cardId);
                },
                className: "text-error shrink-0",
                children: "Remove"
              }
            )
          ]
        },
        card.cardId
      );
    }) }),
    onAddNew && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Button, { variant: "outline", size: "sm", onClick: onAddNew, className: "w-full", children: "+ Add new card" })
  ] });
}

// modules/domains/common/seo/SeoForm.tsx
var import_react26 = require("react");

// modules/ui/Textarea.tsx
var import_react24 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Textarea = (0, import_react24.forwardRef)(function Textarea2(_a3, ref) {
  var _b = _a3, {
    id,
    label,
    hint,
    error,
    disabled,
    required,
    rows = 4,
    className
  } = _b, props = __objRest(_b, [
    "id",
    "label",
    "hint",
    "error",
    "disabled",
    "required",
    "rows",
    "className"
  ]);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "textarea",
      __spreadValues({
        ref,
        id,
        rows,
        disabled,
        required,
        "aria-describedby": describedBy,
        "aria-invalid": !!error,
        "data-testid": `textarea-${id}`,
        className: cn(
          "block w-full rounded-md border px-3 py-2 text-sm transition-colors resize-y",
          "text-text-primary placeholder:text-text-disabled",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:border-border-focus",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-sunken",
          error ? "border-error ring-1 ring-error bg-error-subtle" : "border-border bg-surface-base"
        )
      }, props)
    ),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
});

// modules/ui/TagInput.tsx
var import_react25 = require("react");
var import_react_fontawesome26 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons25 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime43 = require("react/jsx-runtime");
function TagInput({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  placeholder = "Type and press Enter or comma\u2026",
  disabled,
  className
}) {
  const [input, setInput] = (0, import_react25.useState)("");
  const [editingIdx, setEditingIdx] = (0, import_react25.useState)(null);
  const [editValue, setEditValue] = (0, import_react25.useState)("");
  const inputRef = (0, import_react25.useRef)(null);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  function addTags(raw) {
    const tags = raw.split(",").map((t) => t.trim()).filter(Boolean);
    onChange([.../* @__PURE__ */ new Set([...value, ...tags])]);
    setInput("");
  }
  function removeTag(idx) {
    onChange(value.filter((_, i) => i !== idx));
  }
  function handleInputChange(v) {
    if (v.includes(",")) {
      const parts = v.split(",");
      parts.slice(0, -1).forEach((p) => p.trim() && addTags(p));
      setInput(parts[parts.length - 1]);
    } else {
      setInput(v);
    }
  }
  function handleKeyDown(e) {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      addTags(input);
    } else if (e.key === "Backspace" && !input && value.length) {
      removeTag(value.length - 1);
    }
  }
  function finishEdit() {
    if (editingIdx === null) return;
    const trimmed = editValue.trim();
    if (trimmed) {
      const next = [...value];
      next[editingIdx] = trimmed;
      onChange([...new Set(next)]);
    }
    setEditingIdx(null);
    setEditValue("");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      "div",
      {
        onClick: () => {
          var _a3;
          return (_a3 = inputRef.current) == null ? void 0 : _a3.focus();
        },
        className: cn(
          "flex flex-wrap gap-1.5 min-h-10 w-full rounded-md border px-3 py-2 transition-colors cursor-text",
          "focus-within:ring-2 focus-within:ring-border-focus focus-within:border-border-focus",
          disabled ? "opacity-50 cursor-not-allowed bg-surface-sunken border-border" : "bg-surface-base border-border",
          error && "border-error ring-1 ring-error bg-error-subtle"
        ),
        children: [
          value.map(
            (tag, i) => editingIdx === i ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              "input",
              {
                type: "text",
                value: editValue,
                onChange: (e) => setEditValue(e.target.value),
                onBlur: finishEdit,
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    finishEdit();
                  }
                  if (e.key === "Escape") {
                    setEditingIdx(null);
                    setEditValue("");
                  }
                },
                autoFocus: true,
                className: "inline-block w-24 rounded border border-border-focus bg-surface-base px-1.5 py-0.5 text-xs text-text-primary outline-none"
              },
              i
            ) : /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
              "span",
              {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-primary-subtle text-primary",
                onDoubleClick: () => {
                  if (!disabled) {
                    setEditingIdx(i);
                    setEditValue(tag);
                  }
                },
                title: "Double-click to edit",
                children: [
                  tag,
                  !disabled && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        removeTag(i);
                      },
                      "aria-label": `Remove ${tag}`,
                      className: "hover:opacity-70 focus-visible:outline-none rounded-full",
                      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react_fontawesome26.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faXmark, className: "w-2.5 h-2.5" })
                    }
                  )
                ]
              },
              i
            )
          ),
          !disabled && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            "input",
            {
              ref: inputRef,
              id,
              value: input,
              onChange: (e) => handleInputChange(e.target.value),
              onKeyDown: handleKeyDown,
              onBlur: () => {
                if (input.trim()) addTags(input);
              },
              placeholder: value.length === 0 ? placeholder : void 0,
              "aria-describedby": describedBy,
              className: "flex-1 min-w-24 bg-transparent text-sm text-text-primary placeholder:text-text-disabled outline-none"
            }
          )
        ]
      }
    ),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    !hint && !error && value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "text-xs text-text-disabled", children: "Double-click a tag to edit it" }),
    error && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/domains/common/seo/SeoForm.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
function SeoForm({ initial = {}, onSubmit, onCancel, error, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const [values, setValues] = (0, import_react26.useState)({
    seoTitle: (_a3 = initial.seoTitle) != null ? _a3 : null,
    seoDescription: (_b = initial.seoDescription) != null ? _b : null,
    keywords: (_c = initial.keywords) != null ? _c : []
  });
  const [errors, setErrors] = (0, import_react26.useState)({});
  const [loading, setLoading] = (0, import_react26.useState)(false);
  function validate() {
    const next = {};
    if (values.seoTitle && values.seoTitle.length > 60)
      next.seoTitle = "Title should be 60 characters or less for best SEO results.";
    if (values.seoDescription && values.seoDescription.length > 160)
      next.seoDescription = "Description should be 160 characters or less.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  }
  const titleLen = (_e = (_d = values.seoTitle) == null ? void 0 : _d.length) != null ? _e : 0;
  const descLen = (_g = (_f = values.seoDescription) == null ? void 0 : _f.length) != null ? _g : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
        onCancel && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Button, { type: "submit", loading, children: "Save SEO" })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          Input,
          {
            id: "seo-title",
            label: "SEO Title",
            type: "text",
            placeholder: "Page title for search engines",
            value: (_h = values.seoTitle) != null ? _h : "",
            onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { seoTitle: e.target.value || null })),
            error: errors.seoTitle,
            hint: `${titleLen}/60`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          Textarea,
          {
            id: "seo-description",
            label: "Meta Description",
            rows: 3,
            placeholder: "Short description shown in search results",
            value: (_i = values.seoDescription) != null ? _i : "",
            onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { seoDescription: e.target.value || null })),
            error: errors.seoDescription,
            hint: `${descLen}/160`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          TagInput,
          {
            id: "seo-keywords",
            label: "Keywords",
            value: (_j = values.keywords) != null ? _j : [],
            onChange: (keywords) => setValues((v) => __spreadProps(__spreadValues({}, v), { keywords })),
            placeholder: "Add keyword\u2026"
          }
        )
      ]
    }
  );
}

// modules/domains/common/seo/SeoPreview.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
var TITLE_PLACEHOLDER = "Page title will appear here";
var DESC_PLACEHOLDER = "Meta description will appear here. Keep it between 120\u2013160 characters for best results in search engines.";
function SeoPreview({ seo, url = "https://example.com/page", siteName, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const title = ((_a3 = seo.seoTitle) == null ? void 0 : _a3.trim()) || TITLE_PLACEHOLDER;
  const desc = ((_b = seo.seoDescription) == null ? void 0 : _b.trim()) || DESC_PLACEHOLDER;
  const hasTitle = !!((_c = seo.seoTitle) == null ? void 0 : _c.trim());
  const hasDesc = !!((_d = seo.seoDescription) == null ? void 0 : _d.trim());
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: cn("rounded-xl border border-border bg-surface-raised p-4 space-y-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-xs font-semibold text-text-secondary uppercase tracking-wider", children: "Google Preview" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "max-w-lg space-y-1", children: [
      siteName && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-xs text-text-secondary truncate", children: siteName }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-xs text-success-fg truncate", children: url }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: cn("text-base font-medium leading-snug truncate", hasTitle ? "text-[#1a0dab]" : "text-text-disabled italic"), children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: cn("text-sm leading-relaxed line-clamp-2", hasDesc ? "text-text-secondary" : "text-text-disabled italic"), children: desc })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex gap-4 pt-1 border-t border-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: cn("text-sm font-semibold tabular-nums", ((_f = (_e = seo.seoTitle) == null ? void 0 : _e.length) != null ? _f : 0) > 60 ? "text-error" : "text-text-primary"), children: [
          (_h = (_g = seo.seoTitle) == null ? void 0 : _g.length) != null ? _h : 0,
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "text-text-secondary font-normal", children: "/60" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-xs text-text-secondary", children: "Title" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: cn("text-sm font-semibold tabular-nums", ((_j = (_i = seo.seoDescription) == null ? void 0 : _i.length) != null ? _j : 0) > 160 ? "text-error" : "text-text-primary"), children: [
          (_l = (_k = seo.seoDescription) == null ? void 0 : _k.length) != null ? _l : 0,
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "text-text-secondary font-normal", children: "/160" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-xs text-text-secondary", children: "Description" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-sm font-semibold text-text-primary tabular-nums", children: (_n = (_m = seo.keywords) == null ? void 0 : _m.length) != null ? _n : 0 }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-xs text-text-secondary", children: "Keywords" })
      ] })
    ] })
  ] });
}

// modules/domains/common/status/ProcessingStatusIndicator.tsx
var import_react_fontawesome27 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons26 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime46 = require("react/jsx-runtime");
var STATUS_META = {
  UPLOADING: { label: "Uploading", icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons26.faCloudArrowUp }), color: "text-info", pulse: true },
  PROCESSING: { label: "Processing", icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons26.faGear }), color: "text-warning", pulse: true },
  READY: { label: "Ready", icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons26.faCheck }), color: "text-success", pulse: false },
  FAILED: { label: "Failed", icon: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons26.faXmark }), color: "text-error", pulse: false }
};
var sizeMap4 = {
  sm: { text: "text-xs", icon: "text-sm", bar: "h-1" },
  md: { text: "text-sm", icon: "text-base", bar: "h-1.5" },
  lg: { text: "text-base", icon: "text-lg", bar: "h-2" }
};
function ProcessingStatusIndicator({
  status,
  label,
  progress,
  size = "md",
  className
}) {
  const meta = STATUS_META[status];
  const s = sizeMap4[size];
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: cn("space-y-1.5", className), role: "status", "aria-label": label != null ? label : meta.label, "aria-live": "polite", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
        "span",
        {
          className: cn(s.icon, meta.color, meta.pulse && "animate-pulse"),
          "aria-hidden": "true",
          children: meta.icon
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: cn(s.text, "font-medium text-text-primary"), children: label != null ? label : meta.label }),
      progress !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("span", { className: cn(s.text, "text-text-secondary ml-auto tabular-nums"), children: [
        Math.round(progress),
        "%"
      ] })
    ] }),
    progress !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: cn("w-full rounded-full bg-surface-sunken overflow-hidden", s.bar), children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": progress,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: cn(
          "h-full rounded-full transition-all duration-300",
          status === "READY" && "bg-success",
          status === "FAILED" && "bg-error",
          status === "UPLOADING" && "bg-info",
          status === "PROCESSING" && "bg-warning"
        ),
        style: { width: `${Math.min(100, Math.max(0, progress))}%` }
      }
    ) })
  ] });
}

// modules/domains/common/status/PublishStatusBadge.tsx
var import_react_fontawesome28 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons27 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime47 = require("react/jsx-runtime");
var statusMeta2 = {
  DRAFT: { label: "Draft", variant: "warning", icon: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faPenToSquare, className: "w-3 h-3" }) },
  PUBLISHED: { label: "Published", variant: "success", icon: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faGlobe, className: "w-3 h-3" }) },
  ARCHIVED: { label: "Archived", variant: "neutral", icon: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faBoxArchive, className: "w-3 h-3" }) }
};
function PublishStatusBadge({ status, size = "md", showIcon = true, className }) {
  var _a3;
  const meta = (_a3 = statusMeta2[status]) != null ? _a3 : { label: status, variant: "neutral", icon: null };
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(Badge, { variant: meta.variant, size, className: cn("gap-1", className), children: [
    showIcon && meta.icon,
    meta.label
  ] });
}

// modules/domains/common/status/VisibilityBadge.tsx
var import_react_fontawesome29 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons28 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime48 = require("react/jsx-runtime");
var visibilityMeta = {
  PUBLIC: { label: "Public", variant: "success", icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons28.faEye, className: "w-3 h-3" }) },
  PRIVATE: { label: "Private", variant: "error", icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons28.faLock, className: "w-3 h-3" }) },
  UNLISTED: { label: "Unlisted", variant: "neutral", icon: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons28.faEyeSlash, className: "w-3 h-3" }) }
};
function VisibilityBadge({ visibility, size = "md", showIcon = true, className }) {
  var _a3;
  const meta = (_a3 = visibilityMeta[visibility]) != null ? _a3 : { label: visibility, variant: "neutral", icon: null };
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(Badge, { variant: meta.variant, size, className: cn("gap-1", className), children: [
    showIcon && meta.icon,
    meta.label
  ] });
}

// modules/domains/common/subscription/SubscriptionPlanCard.tsx
var import_react_fontawesome30 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons29 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime49 = require("react/jsx-runtime");
var INTERVAL_LABEL = {
  MONTHLY: "/ month",
  YEARLY: "/ year",
  ONCE: "one-time"
};
function SubscriptionPlanCard({
  plan,
  isCurrent = false,
  isSelected = false,
  onSelect,
  loading = false,
  className
}) {
  var _a3, _b;
  const interval = (_a3 = plan.interval) != null ? _a3 : "MONTHLY";
  const currency = (_b = plan.currency) != null ? _b : "USD";
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: plan.price % 100 === 0 ? 0 : 2
  }).format(plan.price / 100);
  const highlighted = plan.isPopular || isSelected || isCurrent;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    "div",
    {
      className: cn(
        "relative flex flex-col rounded-2xl border p-6 transition-shadow",
        highlighted ? "border-primary shadow-md shadow-primary/10" : "border-border shadow-sm hover:shadow-md",
        className
      ),
      children: [
        plan.isPopular && !isCurrent && /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-fg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome30.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faStar, className: "w-2.5 h-2.5" }),
          "Popular"
        ] }),
        isCurrent && /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-success px-3 py-0.5 text-xs font-semibold text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome30.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faCheck, className: "w-2.5 h-2.5" }),
          "Current Plan"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("h3", { className: "text-base font-semibold text-text-primary", children: plan.name }),
          plan.description && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("p", { className: "mt-1 text-xs text-text-secondary", children: plan.description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "mb-6 flex items-baseline gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-3xl font-bold text-text-primary tracking-tight", children: formattedPrice }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-sm text-text-secondary", children: INTERVAL_LABEL[interval] })
        ] }),
        plan.features && plan.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("ul", { className: "mb-6 flex-1 space-y-2", children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("li", { className: "flex items-start gap-2 text-sm text-text-primary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            import_react_fontawesome30.FontAwesomeIcon,
            {
              icon: import_free_solid_svg_icons29.faCheck,
              className: "w-3.5 h-3.5 text-success mt-0.5 flex-shrink-0",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { children: feature })
        ] }, feature)) }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
          "button",
          {
            type: "button",
            disabled: isCurrent || loading || !onSelect,
            onClick: () => onSelect == null ? void 0 : onSelect(plan.planId),
            className: cn(
              "mt-auto w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
              isCurrent ? "bg-surface-raised text-text-secondary cursor-default" : "bg-primary text-primary-fg hover:bg-primary-hover active:bg-primary-active disabled:opacity-50 disabled:cursor-not-allowed"
            ),
            children: isCurrent ? "Current Plan" : loading ? "Processing\u2026" : `Choose ${plan.name}`
          }
        )
      ]
    }
  );
}

// modules/ui/Avatar.tsx
var import_jsx_runtime50 = (
  // eslint-disable-next-line @next/next/no-img-element
  require("react/jsx-runtime")
);
var sizeMap5 = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg"
};
var statusColorMap = {
  online: "bg-success",
  offline: "bg-text-disabled",
  away: "bg-warning",
  busy: "bg-error"
};
var statusDotSizeMap = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3 w-3",
  xl: "h-4 w-4"
};
function getInitials(name) {
  return name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";
}
function Avatar({
  src,
  name,
  size = "md",
  status,
  className
}) {
  const sizeClass = sizeMap5[size];
  const inner = src ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "img",
    {
      src,
      alt: name,
      className: cn(sizeClass, "rounded-full object-cover border border-border shrink-0", className)
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "span",
    {
      "aria-label": name,
      className: cn(
        sizeClass,
        "rounded-full bg-primary-subtle text-primary font-semibold",
        "flex items-center justify-center shrink-0 border border-primary-subtle select-none",
        className
      ),
      children: getInitials(name)
    }
  );
  if (!status) return inner;
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("span", { className: "relative inline-flex shrink-0", children: [
    inner,
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      "span",
      {
        "aria-label": status,
        className: cn(
          "absolute bottom-0 right-0 rounded-full border-2 border-surface-base",
          statusColorMap[status],
          statusDotSizeMap[size]
        )
      }
    )
  ] });
}

// modules/domains/common/user/UserAvatar.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
function UserAvatar({ user, size = "md", status, className }) {
  var _a3, _b, _c, _d;
  const name = (_b = (_a3 = user.userProfile) == null ? void 0 : _a3.name) != null ? _b : user.email;
  const src = (_d = (_c = user.userProfile) == null ? void 0 : _c.profilePicture) != null ? _d : null;
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Avatar, { src, name, size, status, className });
}

// modules/domains/common/user/UserMenu.tsx
var import_react_fontawesome31 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons30 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime52 = require("react/jsx-runtime");
function UserMenu({
  user,
  items,
  align = "right",
  onlyAvatar = false
}) {
  var _a3, _b, _c, _d;
  const displayName = (_b = (_a3 = user.userProfile) == null ? void 0 : _a3.name) != null ? _b : user.email;
  const avatar = (_d = (_c = user.userProfile) == null ? void 0 : _c.profilePicture) != null ? _d : null;
  const defaultItems = items != null ? items : [
    { type: "item", label: "Profile", icon: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons30.faUser, className: "w-3.5 h-3.5", "aria-hidden": "true" }) },
    { type: "item", label: "Settings", icon: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons30.faGear, className: "w-3.5 h-3.5", "aria-hidden": "true" }) },
    { type: "separator" },
    { type: "item", label: "Sign out", icon: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons30.faArrowRightFromBracket, className: "w-3.5 h-3.5", "aria-hidden": "true" }), danger: true }
  ];
  const trigger = /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
    Button,
    {
      variant: "ghost",
      size: "sm",
      "aria-label": `User menu for ${displayName}`,
      className: cn("gap-2 px-2"),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Avatar, { src: avatar, name: displayName, size: "sm" }),
        !onlyAvatar && /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "hidden sm:block text-left min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-sm font-medium text-text-primary truncate max-w-[8rem]", children: displayName }),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-xs text-text-secondary truncate", children: user.userRole })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons30.faChevronDown, className: "w-3 h-3 text-text-disabled hidden sm:block", "aria-hidden": "true" })
      ]
    }
  );
  const header = /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "px-3 py-2.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-sm font-semibold text-text-primary truncate", children: displayName }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-xs text-text-secondary truncate", children: user.email })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(DropdownMenu, { trigger, items: defaultItems, header, align });
}

// modules/domains/common/user/UserPreferencesForm.tsx
var import_react28 = require("react");

// modules/ui/Toggle.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var sizeMap6 = {
  sm: { track: "h-4 w-7", thumb: "h-3 w-3", on: "translate-x-3.5" },
  md: { track: "h-5 w-9", thumb: "h-3.5 w-3.5", on: "translate-x-4" },
  lg: { track: "h-6 w-11", thumb: "h-4 w-4", on: "translate-x-5" }
};
function Toggle({
  id,
  label,
  description,
  checked,
  onChange,
  disabled,
  size = "md",
  className
}) {
  const { track, thumb, on } = sizeMap6[size];
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
    "label",
    {
      htmlFor: id,
      className: cn(
        "flex items-start gap-3",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "relative shrink-0 mt-0.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
            "input",
            {
              id,
              type: "checkbox",
              role: "switch",
              checked,
              onChange: (e) => onChange(e.target.checked),
              disabled,
              "aria-checked": checked,
              "data-testid": `toggle-${id}`,
              className: "sr-only"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
            "div",
            {
              className: cn(
                "rounded-full transition-colors duration-200",
                track,
                checked ? "bg-primary" : "bg-surface-sunken border border-border"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
            "div",
            {
              className: cn(
                "absolute top-0.5 left-0.5 rounded-full bg-white shadow-sm transition-transform duration-200",
                thumb,
                checked ? on : "translate-x-0"
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "text-sm font-medium text-text-primary", children: label }),
          description && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-xs text-text-secondary mt-0.5", children: description })
        ] })
      ]
    }
  );
}

// modules/app/ThemeSwitcher.tsx
var import_react27 = require("react");
var import_react_fontawesome32 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons31 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime54 = require("react/jsx-runtime");
function readStoredTheme() {
  if (typeof window === "undefined") return "system";
  const t = window.localStorage.getItem("theme");
  return t === "light" || t === "dark" || t === "system" ? t : "system";
}
function ThemeSwitcher() {
  const [theme, setTheme] = (0, import_react27.useState)(readStoredTheme);
  (0, import_react27.useEffect)(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const icon = theme === "light" ? import_free_solid_svg_icons31.faSun : theme === "dark" ? import_free_solid_svg_icons31.faMoon : import_free_solid_svg_icons31.faDisplay;
  const label = theme.charAt(0).toUpperCase() + theme.slice(1);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    DropdownMenu,
    {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(Button, { variant: "outline", size: "sm", className: "gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "w-4 flex items-center justify-center shrink-0", "aria-hidden": "true", suppressHydrationWarning: true, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react_fontawesome32.FontAwesomeIcon, { icon, className: "w-4 h-4" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "inline-block min-w-[3.5rem] text-left", suppressHydrationWarning: true, children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react_fontawesome32.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faChevronDown, className: "w-3 h-3 text-text-disabled" })
      ] }),
      items: [
        { type: "item", label: "Light", icon: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react_fontawesome32.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faSun }), onClick: () => setTheme("light") },
        { type: "item", label: "Dark", icon: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react_fontawesome32.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faMoon }), onClick: () => setTheme("dark") },
        { type: "item", label: "System", icon: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react_fontawesome32.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faDisplay }), onClick: () => setTheme("system") }
      ]
    }
  );
}

// modules/domains/common/user/UserPreferencesForm.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
var ControlledThemeSwitcher = ThemeSwitcher;
function UserPreferencesForm({ initial = {}, onSubmit, error, className }) {
  var _a3, _b, _c, _d, _e, _f;
  const [values, setValues] = (0, import_react28.useState)({
    theme: (_a3 = initial.theme) != null ? _a3 : "SYSTEM",
    language: (_b = initial.language) != null ? _b : "en",
    emailNotifications: (_c = initial.emailNotifications) != null ? _c : true,
    pushNotifications: (_d = initial.pushNotifications) != null ? _d : true,
    newsletter: (_e = initial.newsletter) != null ? _e : true,
    timezone: (_f = initial.timezone) != null ? _f : "UTC"
  });
  const [loading, setLoading] = (0, import_react28.useState)(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  }
  function setField(key, val) {
    setValues((v) => __spreadProps(__spreadValues({}, v), { [key]: val }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Button, { type: "submit", loading, children: "Save Preferences" }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h3", { className: "text-sm font-semibold text-text-primary", children: "Appearance" }),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ControlledThemeSwitcher, { value: values.theme, onChange: (theme) => setField("theme", theme) }),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(LanguageSwitcher, { value: values.language, onChange: (lang) => setField("language", lang) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "space-y-3 pt-2 border-t border-border", children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h3", { className: "text-sm font-semibold text-text-primary pt-2", children: "Notifications" }),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
            Toggle,
            {
              id: "email-notifications",
              label: "Email notifications",
              checked: values.emailNotifications,
              onChange: (checked) => setField("emailNotifications", checked)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
            Toggle,
            {
              id: "push-notifications",
              label: "Push notifications",
              checked: values.pushNotifications,
              onChange: (checked) => setField("pushNotifications", checked)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
            Toggle,
            {
              id: "newsletter",
              label: "Newsletter",
              checked: values.newsletter,
              onChange: (checked) => setField("newsletter", checked)
            }
          )
        ] })
      ]
    }
  );
}

// modules/domains/common/user/UserRoleBadge.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
var roleMeta = {
  ADMIN: { label: "Admin", variant: "error" },
  AUTHOR: { label: "Author", variant: "primary" },
  USER: { label: "User", variant: "neutral" }
};
function UserRoleBadge({ role, size = "md" }) {
  var _a3;
  const meta = (_a3 = roleMeta[role]) != null ? _a3 : { label: role, variant: "neutral" };
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Badge, { variant: meta.variant, size, children: meta.label });
}

// modules/domains/common/user/UserStatusBadge.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
var statusMeta3 = {
  ACTIVE: { label: "Active", variant: "success" },
  INACTIVE: { label: "Inactive", variant: "neutral" },
  BANNED: { label: "Banned", variant: "error" }
};
function UserStatusBadge({ status, size = "md", dot = false }) {
  var _a3;
  const meta = (_a3 = statusMeta3[status]) != null ? _a3 : { label: status, variant: "neutral" };
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Badge, { variant: meta.variant, size, dot, children: meta.label });
}

// modules/domains/common/user/UserProfileCard.tsx
var import_jsx_runtime58 = require("react/jsx-runtime");
function UserProfileCard({ user, actions, className }) {
  var _a3, _b, _c, _d;
  const name = (_b = (_a3 = user.userProfile) == null ? void 0 : _a3.name) != null ? _b : user.email;
  const username = (_c = user.userProfile) == null ? void 0 : _c.username;
  const bio = (_d = user.userProfile) == null ? void 0 : _d.biography;
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: cn("bg-surface-raised border border-border rounded-xl overflow-hidden", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "h-20 bg-gradient-to-r from-primary-subtle to-secondary/20" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "px-5 pb-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-end justify-between -mt-8 mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "ring-4 ring-surface-raised rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(UserAvatar, { user, size: "xl" }) }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "flex items-center gap-2 pb-1", children: actions })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "space-y-1 mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { className: "text-lg font-bold text-text-primary leading-tight", children: name }),
        username && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("p", { className: "text-sm text-text-secondary", children: [
          "@",
          username
        ] }),
        bio && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text-sm text-text-secondary leading-relaxed pt-1", children: bio })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(UserRoleBadge, { role: user.userRole }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(UserStatusBadge, { status: user.userStatus }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "text-xs text-text-secondary truncate", children: user.email })
      ] })
    ] })
  ] });
}

// modules/domains/common/user/UserProfileForm.tsx
var import_react29 = require("react");
var import_jsx_runtime59 = require("react/jsx-runtime");
function UserProfileForm({ initial = {}, onSubmit, onCancel, error, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const [values, setValues] = (0, import_react29.useState)({
    name: (_a3 = initial.name) != null ? _a3 : null,
    username: (_b = initial.username) != null ? _b : null,
    biography: (_c = initial.biography) != null ? _c : null,
    profilePicture: (_d = initial.profilePicture) != null ? _d : null
  });
  const [errors, setErrors] = (0, import_react29.useState)({});
  const [loading, setLoading] = (0, import_react29.useState)(false);
  function validate() {
    const next = {};
    if (values.username && !/^[a-z0-9_]{3,32}$/.test(values.username)) {
      next.username = "Username must be 3\u201332 characters: lowercase letters, numbers, underscores.";
    }
    if (values.biography && values.biography.length > 300) {
      next.biography = "Bio must be 300 characters or less.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  }
  function set(key, val) {
    setValues((v) => __spreadProps(__spreadValues({}, v), { [key]: val }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
        onCancel && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Button, { type: "submit", loading, children: "Save Profile" })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          Input,
          {
            id: "profile-name",
            label: "Display Name",
            type: "text",
            autoComplete: "name",
            value: (_e = values.name) != null ? _e : "",
            onChange: (e) => set("name", e.target.value || null),
            error: (_f = errors.name) != null ? _f : void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          Input,
          {
            id: "profile-username",
            label: "Username",
            type: "text",
            autoComplete: "username",
            value: (_g = values.username) != null ? _g : "",
            onChange: (e) => set("username", e.target.value || null),
            error: (_h = errors.username) != null ? _h : void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          Textarea,
          {
            id: "profile-bio",
            label: "Bio",
            rows: 3,
            value: (_i = values.biography) != null ? _i : "",
            onChange: (e) => set("biography", e.target.value || null),
            error: (_j = errors.biography) != null ? _j : void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          Input,
          {
            id: "profile-picture",
            label: "Profile Picture URL",
            type: "url",
            value: (_k = values.profilePicture) != null ? _k : "",
            onChange: (e) => set("profilePicture", e.target.value || null),
            error: (_l = errors.profilePicture) != null ? _l : void 0
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddressCard,
  AddressForm,
  AddressSelector,
  ApiErrorSchema,
  ApiResponseSchema,
  ApiSuccessSchema,
  AuthResponseSchema,
  AuthSessionSchema,
  BaseEntitySchema,
  CartBadge,
  CartItem,
  CartPreview,
  CartSummary,
  ChangePasswordForm,
  ChangePasswordSchema,
  ChatBox,
  CheckoutSuccessState,
  CountrySelector,
  CouponInput,
  CreditCardForm,
  CreditCardVisual,
  CurrencySelector,
  DateSchema,
  DirectionProvider,
  DiscountBadge,
  EmailSchema,
  ForgotPasswordForm,
  GeoPointDisplay,
  IdSchema,
  LanguageEnum,
  LanguageSwitcher,
  LocationPicker,
  LoginForm,
  LoginRequestSchema,
  NotificationMenu,
  NullableDateSchema,
  OAuthButtons,
  OAuthCallbackSchema,
  OAuthProviderEnum,
  OrderTotalsCard,
  PaginationSchema,
  PasswordSchema,
  PaymentMethodSelector,
  PaymentStatusBadge,
  PaymentSummaryCard,
  PriceDisplay,
  ProcessingStatusIndicator,
  ProductComparisonRadar,
  PublishStatusBadge,
  RegionalSalesPolar,
  RegisterForm,
  RegisterRequestSchema,
  RevenueBarChart,
  SafeUserSchema,
  SalesByCategoryDoughnut,
  SavedCardSelector,
  SeoForm,
  SeoPreview,
  SessionExpiredBanner,
  SlugSchema,
  SortOrderEnum,
  StatusEnum,
  SubscriptionPlanCard,
  ThemeEnum,
  UserActivityLineChart,
  UserAvatar,
  UserMenu,
  UserPreferencesForm,
  UserPreferencesSchema,
  UserProfileCard,
  UserProfileForm,
  UserProfileSchema,
  UserRoleBadge,
  UserRoleEnum,
  UserSchema,
  UserStatusBadge,
  UserStatusEnum,
  UuidSchema,
  VisibilityBadge,
  detectBrand,
  useDirection
});
