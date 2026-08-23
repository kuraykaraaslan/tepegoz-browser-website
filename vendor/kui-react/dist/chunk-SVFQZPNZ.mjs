"use client";
import {
  Input,
  RadioGroup,
  Textarea,
  Toggle
} from "./chunk-C7AYI4XM.mjs";
import {
  Form,
  ThemeSwitcher,
  isBrowser
} from "./chunk-45I3EDB2.mjs";
import {
  Avatar,
  Badge,
  DropdownMenu,
  Select,
  TagInput
} from "./chunk-ZLYBRYWQ.mjs";
import {
  Button
} from "./chunk-MTT5TKAJ.mjs";
import {
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/domains/common/types.ts
import { z as z2 } from "zod";

// modules/domains/common/I18nTypes.ts
import { z } from "zod";
import ISO6391 from "iso-639-1";
var _a;
var parsedEnvLangs = (_a = process.env.NEXT_PUBLIC_I18N_LANGUAGES) == null ? void 0 : _a.split(",").map((l) => l.trim().toLowerCase()).filter((l) => ISO6391.validate(l));
var FALLBACK_LANGS = ["en"];
var AppLanguageEnum = z.enum(
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
  return ISO6391.getName(lang) || lang;
}
var LANG_NAMES = Object.fromEntries(
  AVAILABLE_LANGUAGES.map((lang) => [
    lang,
    ISO6391.getName(lang) || lang
  ])
);
function langToCountry(lang) {
  return lang.length === 2 ? lang.toUpperCase() : "US";
}
function countryCodeToEmoji(code) {
  return code.toUpperCase().replace(
    /./g,
    (char) => String.fromCodePoint(127397 + char.charCodeAt(0))
  );
}
function getLangFlag(lang) {
  return countryCodeToEmoji(langToCountry(lang));
}
var LANG_FLAGS = Object.fromEntries(
  AVAILABLE_LANGUAGES.map((lang) => [lang, getLangFlag(lang)])
);

// modules/domains/common/types.ts
var IdSchema = z2.string().min(1);
var UuidSchema = z2.uuid();
var SlugSchema = z2.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
var DateSchema = z2.coerce.date();
var NullableDateSchema = z2.coerce.date().nullable().optional();
var EmailSchema = z2.email();
var PasswordSchema = z2.string().min(8);
var SortOrderEnum = z2.enum(["asc", "desc"]);
var StatusEnum = z2.enum([
  "ACTIVE",
  "INACTIVE",
  "DRAFT",
  "PUBLISHED",
  "ARCHIVED"
]);
var BaseEntitySchema = z2.object({
  createdAt: DateSchema.optional(),
  updatedAt: NullableDateSchema,
  deletedAt: NullableDateSchema
});
var PaginationSchema = z2.object({
  page: z2.coerce.number().int().positive().default(1),
  limit: z2.coerce.number().int().positive().max(100).default(20)
});
var ApiSuccessSchema = z2.object({
  success: z2.literal(true),
  message: z2.string().optional()
});
var ApiErrorSchema = z2.object({
  success: z2.literal(false),
  message: z2.string(),
  code: z2.string().optional(),
  errors: z2.array(z2.object({
    field: z2.string(),
    message: z2.string()
  })).optional()
});
var ApiResponseSchema = z2.union([
  ApiSuccessSchema,
  ApiErrorSchema
]);
var UserRoleEnum = z2.enum(["ADMIN", "AUTHOR", "USER"]);
var UserStatusEnum = z2.enum(["ACTIVE", "INACTIVE", "BANNED"]);
var ThemeEnum = z2.enum(["LIGHT", "DARK", "SYSTEM"]);
var LanguageEnum = z2.enum(["en"]);
var UserPreferencesSchema = z2.object({
  theme: ThemeEnum.default("SYSTEM"),
  language: AppLanguageEnum.default("en"),
  emailNotifications: z2.boolean().default(true),
  pushNotifications: z2.boolean().default(true),
  newsletter: z2.boolean().default(true),
  timezone: z2.string().default("UTC")
});
var UserProfileSchema = z2.object({
  name: z2.string().nullable().optional(),
  username: z2.string().nullable().optional(),
  biography: z2.string().nullable().optional(),
  profilePicture: z2.string().nullable().optional()
});
var UserSchema = z2.object({
  userId: IdSchema,
  email: EmailSchema,
  phone: z2.string().nullable().optional(),
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
var LoginRequestSchema = z2.object({
  email: EmailSchema,
  password: PasswordSchema
});
var RegisterRequestSchema = z2.object({
  email: EmailSchema,
  password: PasswordSchema,
  confirmPassword: z2.string()
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var ChangePasswordSchema = z2.object({
  currentPassword: z2.string(),
  newPassword: PasswordSchema,
  confirmPassword: z2.string()
}).refine((d) => d.newPassword === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var AuthSessionSchema = z2.object({
  sessionId: IdSchema,
  userId: IdSchema,
  token: z2.string(),
  refreshToken: z2.string().optional(),
  expiresAt: DateSchema,
  createdAt: DateSchema
});
var AuthResponseSchema = z2.object({
  success: z2.boolean(),
  message: z2.string(),
  token: z2.string().optional(),
  refreshToken: z2.string().optional(),
  user: SafeUserSchema.optional()
});
var OAuthProviderEnum = z2.enum([
  "GOOGLE",
  "GITHUB",
  "DISCORD",
  "MICROSOFT"
]);
var OAuthCallbackSchema = z2.object({
  code: z2.string(),
  state: z2.string().optional(),
  provider: OAuthProviderEnum
});

// modules/domains/common/address/AddressCard.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { jsx, jsxs } from "react/jsx-runtime";
function AddressCard({ address, onEdit, onDelete, selected = false, className }) {
  const cityLine = [address.city, address.state, address.postalCode].filter(Boolean).join(", ");
  const countryLine = [address.country, address.countryCode ? `(${address.countryCode})` : ""].filter(Boolean).join(" ");
  const selectable = selected !== void 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative rounded-lg border bg-surface-raised p-4 space-y-2 transition-colors",
        selectable && selected ? "border-primary ring-2 ring-primary ring-offset-1" : "border-border",
        className
      ),
      children: [
        selectable && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: cn(
              "absolute top-3 right-3 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors",
              selected ? "border-primary bg-primary" : "border-border bg-surface-base"
            ),
            children: selected && /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
          }
        ),
        address.fullName && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-text-primary", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faUser, className: "w-3 h-3 text-text-disabled shrink-0" }),
          address.fullName
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm text-text-secondary", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLocationDot, className: "w-3 h-3 text-text-disabled shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx("p", { children: address.addressLine1 }),
            address.addressLine2 && /* @__PURE__ */ jsx("p", { children: address.addressLine2 }),
            cityLine && /* @__PURE__ */ jsx("p", { children: cityLine }),
            countryLine && /* @__PURE__ */ jsx("p", { children: countryLine })
          ] })
        ] }),
        address.phone && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-text-secondary", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPhone, className: "w-3 h-3 text-text-disabled shrink-0" }),
          address.phone
        ] }),
        (onEdit || onDelete) && /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-2 border-t border-border", children: [
          onEdit && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "xs", onClick: onEdit, className: "text-primary hover:text-primary-hover", children: "Edit" }),
          onDelete && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "xs", onClick: onDelete, className: "text-error hover:opacity-80", children: "Delete" })
        ] })
      ]
    }
  );
}

// modules/domains/common/address/AddressForm.tsx
import { useState } from "react";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faUser as faUser2, faPhone as faPhone2, faLocationDot as faLocationDot2, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const [values, setValues] = useState(() => fromAddress(initial));
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
  return /* @__PURE__ */ jsxs2(
    Form,
    {
      onSubmit: handleSubmit,
      className,
      actions: /* @__PURE__ */ jsxs2(Fragment, { children: [
        onCancel && /* @__PURE__ */ jsx2(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ jsx2(Button, { type: "submit", loading, children: submitLabel })
      ] }),
      children: [
        /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx2(
            Input,
            {
              id: "addr-fullname",
              label: "Full Name",
              required: true,
              prefixIcon: /* @__PURE__ */ jsx2(FontAwesomeIcon2, { icon: faUser2, className: "w-3 h-3" }),
              value: values.fullName,
              onChange: set("fullName"),
              error: errors.fullName
            }
          ),
          /* @__PURE__ */ jsx2(
            Input,
            {
              id: "addr-phone",
              label: "Phone",
              type: "tel",
              prefixIcon: /* @__PURE__ */ jsx2(FontAwesomeIcon2, { icon: faPhone2, className: "w-3 h-3" }),
              value: values.phone,
              onChange: set("phone")
            }
          )
        ] }),
        /* @__PURE__ */ jsx2(
          Input,
          {
            id: "addr-line1",
            label: "Address Line 1",
            required: true,
            prefixIcon: /* @__PURE__ */ jsx2(FontAwesomeIcon2, { icon: faLocationDot2, className: "w-3 h-3" }),
            value: values.addressLine1,
            onChange: set("addressLine1"),
            error: errors.addressLine1
          }
        ),
        /* @__PURE__ */ jsx2(
          Input,
          {
            id: "addr-line2",
            label: "Address Line 2 (optional)",
            value: values.addressLine2,
            onChange: set("addressLine2")
          }
        ),
        /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx2(Input, { id: "addr-city", label: "City", required: true, value: values.city, onChange: set("city"), error: errors.city }),
          /* @__PURE__ */ jsx2(Input, { id: "addr-state", label: "State / District", value: values.state, onChange: set("state") }),
          /* @__PURE__ */ jsx2(Input, { id: "addr-postalcode", label: "Postal Code", value: values.postalCode, onChange: set("postalCode") })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx2(
            Input,
            {
              id: "addr-country",
              label: "Country",
              required: true,
              prefixIcon: /* @__PURE__ */ jsx2(FontAwesomeIcon2, { icon: faGlobe, className: "w-3 h-3" }),
              value: values.country,
              onChange: set("country"),
              error: errors.country
            }
          ),
          /* @__PURE__ */ jsx2(
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
import { useState as useState2 } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function AddressSelector({
  addresses,
  selectedIndex,
  onSelect,
  onAdd,
  onEdit,
  onDelete,
  className
}) {
  const [active, setActive] = useState2(selectedIndex);
  function handleSelect(i) {
    setActive(i);
    onSelect(i, addresses[i]);
  }
  return /* @__PURE__ */ jsxs3("fieldset", { className: cn("space-y-3", className), children: [
    /* @__PURE__ */ jsx3("legend", { className: "sr-only", children: "Select delivery address" }),
    addresses.length === 0 ? /* @__PURE__ */ jsx3("p", { className: "text-sm text-text-secondary py-4 text-center", children: "No saved addresses." }) : /* @__PURE__ */ jsx3("div", { className: "space-y-2", children: addresses.map((addr, i) => /* @__PURE__ */ jsxs3(
      "label",
      {
        className: cn(
          "block cursor-pointer rounded-lg",
          "focus-within:ring-2 focus-within:ring-border-focus"
        ),
        children: [
          /* @__PURE__ */ jsx3(
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
          /* @__PURE__ */ jsx3(
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
    onAdd && /* @__PURE__ */ jsx3(Button, { variant: "outline", size: "sm", onClick: onAdd, className: "w-full", children: "+ Add new address" })
  ] });
}

// modules/domains/common/auth/ChangePasswordForm.tsx
import { useState as useState3 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function ChangePasswordForm({ onSubmit, error, className }) {
  const [values, setValues] = useState3({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [errors, setErrors] = useState3({});
  const [loading, setLoading] = useState3(false);
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
  const lockIcon = /* @__PURE__ */ jsx4(FontAwesomeIcon3, { icon: faLock, className: "w-3.5 h-3.5" });
  return /* @__PURE__ */ jsxs4(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ jsx4(
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
    /* @__PURE__ */ jsx4(
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
    /* @__PURE__ */ jsx4(
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
    /* @__PURE__ */ jsx4(Button, { type: "submit", fullWidth: true, loading, children: "Update Password" })
  ] });
}

// modules/domains/common/auth/ForgotPasswordForm.tsx
import { useState as useState4 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function ForgotPasswordForm({ onSubmit, error, className }) {
  const [email, setEmail] = useState4("");
  const [emailError, setEmailError] = useState4("");
  const [loading, setLoading] = useState4(false);
  const [sent, setSent] = useState4(false);
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
    return /* @__PURE__ */ jsxs5("div", { className: "rounded-lg bg-success-subtle border border-success px-4 py-4 text-sm text-success-fg space-y-1", children: [
      /* @__PURE__ */ jsx5("p", { className: "font-semibold", children: "Check your inbox" }),
      /* @__PURE__ */ jsxs5("p", { children: [
        "We sent a password reset link to ",
        /* @__PURE__ */ jsx5("span", { className: "font-mono", children: email }),
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs5(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ jsx5(
      Input,
      {
        id: "forgot-email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
        prefixIcon: /* @__PURE__ */ jsx5(FontAwesomeIcon4, { icon: faEnvelope, className: "w-3.5 h-3.5" }),
        value: email,
        onChange: (e) => setEmail(e.target.value),
        error: emailError
      }
    ),
    /* @__PURE__ */ jsx5(Button, { type: "submit", fullWidth: true, loading, children: "Send reset link" })
  ] });
}

// modules/domains/common/auth/LoginForm.tsx
import { useState as useState5 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon5 } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelope2, faLock as faLock2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function LoginForm({ onSubmit, error, className }) {
  const [values, setValues] = useState5({ email: "", password: "", rememberMe: false });
  const [errors, setErrors] = useState5({});
  const [loading, setLoading] = useState5(false);
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
  return /* @__PURE__ */ jsxs6(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ jsx6(
      Input,
      {
        id: "login-email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
        prefixIcon: /* @__PURE__ */ jsx6(FontAwesomeIcon5, { icon: faEnvelope2, className: "w-3.5 h-3.5" }),
        value: values.email,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { email: e.target.value })),
        error: errors.email
      }
    ),
    /* @__PURE__ */ jsx6(
      Input,
      {
        id: "login-password",
        label: "Password",
        type: "password",
        required: true,
        autoComplete: "current-password",
        prefixIcon: /* @__PURE__ */ jsx6(FontAwesomeIcon5, { icon: faLock2, className: "w-3.5 h-3.5" }),
        value: values.password,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { password: e.target.value })),
        error: errors.password
      }
    ),
    /* @__PURE__ */ jsxs6("label", { className: "flex items-center gap-2 text-sm text-text-secondary cursor-pointer select-none", children: [
      /* @__PURE__ */ jsx6(
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
    /* @__PURE__ */ jsx6(Button, { type: "submit", fullWidth: true, loading, children: "Sign In" })
  ] });
}

// modules/domains/common/auth/OAuthButtons.tsx
import { useState as useState6 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon6 } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faDiscord, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { jsx as jsx7 } from "react/jsx-runtime";
var providerMeta = {
  GOOGLE: { label: "Continue with Google", icon: /* @__PURE__ */ jsx7(FontAwesomeIcon6, { icon: faGoogle }), iconClass: "text-[#EA4335]" },
  GITHUB: { label: "Continue with GitHub", icon: /* @__PURE__ */ jsx7(FontAwesomeIcon6, { icon: faGithub }), iconClass: "text-text-primary" },
  DISCORD: { label: "Continue with Discord", icon: /* @__PURE__ */ jsx7(FontAwesomeIcon6, { icon: faDiscord }), iconClass: "text-[#5865F2]" },
  MICROSOFT: { label: "Continue with Microsoft", icon: /* @__PURE__ */ jsx7(FontAwesomeIcon6, { icon: faMicrosoft }), iconClass: "text-[#00A4EF]" }
};
function OAuthButtons({
  providers = ["GOOGLE", "GITHUB", "DISCORD", "MICROSOFT"],
  onProvider,
  className
}) {
  const [loadingProvider, setLoadingProvider] = useState6(null);
  async function handleClick(provider) {
    setLoadingProvider(provider);
    try {
      await onProvider(provider);
    } finally {
      setLoadingProvider(null);
    }
  }
  return /* @__PURE__ */ jsx7("div", { className: cn("flex flex-col gap-2", className), children: providers.map((provider) => {
    const meta = providerMeta[provider];
    const isLoading = loadingProvider === provider;
    return /* @__PURE__ */ jsx7(
      Button,
      {
        variant: "outline",
        fullWidth: true,
        loading: isLoading,
        disabled: loadingProvider !== null,
        "aria-label": meta.label,
        onClick: () => handleClick(provider),
        iconLeft: /* @__PURE__ */ jsx7("span", { className: meta.iconClass, children: meta.icon }),
        children: meta.label
      },
      provider
    );
  }) });
}

// modules/domains/common/auth/RegisterForm.tsx
import { useState as useState7 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon7 } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelope3, faLock as faLock3 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function RegisterForm({ onSubmit, error, className }) {
  const [values, setValues] = useState7({ email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState7({});
  const [loading, setLoading] = useState7(false);
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
  return /* @__PURE__ */ jsxs7(Form, { onSubmit: handleSubmit, error, className, children: [
    /* @__PURE__ */ jsx8(
      Input,
      {
        id: "register-email",
        label: "Email",
        type: "email",
        required: true,
        autoComplete: "email",
        prefixIcon: /* @__PURE__ */ jsx8(FontAwesomeIcon7, { icon: faEnvelope3, className: "w-3.5 h-3.5" }),
        value: values.email,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { email: e.target.value })),
        error: errors.email
      }
    ),
    /* @__PURE__ */ jsx8(
      Input,
      {
        id: "register-password",
        label: "Password",
        type: "password",
        required: true,
        autoComplete: "new-password",
        hint: "Minimum 8 characters",
        prefixIcon: /* @__PURE__ */ jsx8(FontAwesomeIcon7, { icon: faLock3, className: "w-3.5 h-3.5" }),
        value: values.password,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { password: e.target.value })),
        error: errors.password
      }
    ),
    /* @__PURE__ */ jsx8(
      Input,
      {
        id: "register-confirm-password",
        label: "Confirm Password",
        type: "password",
        required: true,
        autoComplete: "new-password",
        prefixIcon: /* @__PURE__ */ jsx8(FontAwesomeIcon7, { icon: faLock3, className: "w-3.5 h-3.5" }),
        value: values.confirmPassword,
        onChange: (e) => setValues((v) => __spreadProps(__spreadValues({}, v), { confirmPassword: e.target.value })),
        error: errors.confirmPassword
      }
    ),
    /* @__PURE__ */ jsx8(Button, { type: "submit", fullWidth: true, loading, children: "Create Account" })
  ] });
}

// modules/domains/common/auth/SessionExpiredBanner.tsx
import { FontAwesomeIcon as FontAwesomeIcon8 } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function SessionExpiredBanner({
  onSignIn,
  message = "Your session has expired. Please sign in again to continue.",
  className
}) {
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      role: "alert",
      className: cn(
        "flex items-start sm:items-center justify-between gap-4 flex-wrap",
        "rounded-lg border border-warning bg-warning-subtle px-4 py-3",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex items-start gap-3 min-w-0", children: [
          /* @__PURE__ */ jsx9(FontAwesomeIcon8, { icon: faClock, className: "w-5 h-5 text-warning shrink-0 mt-0.5", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs8("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx9("p", { className: "text-sm font-semibold text-text-primary", children: "Session expired" }),
            /* @__PURE__ */ jsx9("p", { className: "text-sm text-text-secondary mt-0.5", children: message })
          ] })
        ] }),
        onSignIn && /* @__PURE__ */ jsx9(Button, { variant: "primary", size: "sm", onClick: onSignIn, className: "shrink-0", children: "Sign in again" })
      ]
    }
  );
}

// modules/domains/common/cart/CartBadge.tsx
import { FontAwesomeIcon as FontAwesomeIcon9 } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function CartBadge({ cart, onClick, className }) {
  const totalQty = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  return /* @__PURE__ */ jsxs9(
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
        /* @__PURE__ */ jsx10(FontAwesomeIcon9, { icon: faCartShopping, className: "w-5 h-5", "aria-hidden": "true" }),
        totalQty > 0 && /* @__PURE__ */ jsx10(
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
import { jsx as jsx11 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx11(
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
import { FontAwesomeIcon as FontAwesomeIcon10 } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
function CartItem({
  item,
  onQuantityChange,
  onRemove,
  compact = false,
  className
}) {
  const canDecrement = item.quantity > 1;
  const canIncrement = item.maxQuantity == null || item.quantity < item.maxQuantity;
  return /* @__PURE__ */ jsxs10("div", { className: cn("flex gap-3", className), children: [
    /* @__PURE__ */ jsx12("div", { className: cn(
      "shrink-0 rounded-lg border border-border bg-surface-overlay flex items-center justify-center text-text-disabled overflow-hidden",
      compact ? "h-12 w-12" : "h-16 w-16"
    ), children: item.image ? /* @__PURE__ */ jsx12("img", { src: item.image, alt: item.name, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsx12(FontAwesomeIcon10, { icon: faBagShopping, className: cn("text-text-disabled", compact ? "w-5 h-5" : "w-7 h-7"), "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs10("div", { className: "flex-1 min-w-0 space-y-0.5", children: [
      /* @__PURE__ */ jsx12("p", { className: cn("font-medium text-text-primary truncate", compact ? "text-xs" : "text-sm"), children: item.name }),
      item.variant && /* @__PURE__ */ jsx12("p", { className: "text-xs text-text-secondary truncate", children: item.variant }),
      item.description && !compact && /* @__PURE__ */ jsx12("p", { className: "text-xs text-text-secondary line-clamp-1", children: item.description }),
      /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 pt-1 flex-wrap", children: [
        onQuantityChange ? /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1 rounded-md border border-border bg-surface-base", children: [
          /* @__PURE__ */ jsx12(
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
          /* @__PURE__ */ jsx12("span", { className: "w-6 text-center text-xs font-medium text-text-primary tabular-nums", children: item.quantity }),
          /* @__PURE__ */ jsx12(
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
        ] }) : /* @__PURE__ */ jsxs10("span", { className: "text-xs text-text-secondary", children: [
          "Qty: ",
          item.quantity
        ] }),
        onRemove && /* @__PURE__ */ jsx12(
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
    /* @__PURE__ */ jsxs10("div", { className: "shrink-0 text-right space-y-0.5", children: [
      /* @__PURE__ */ jsx12(
        PriceDisplay,
        {
          amount: item.price * item.quantity,
          currency: item.currency,
          size: compact ? "sm" : "md"
        }
      ),
      item.quantity > 1 && /* @__PURE__ */ jsxs10("p", { className: "text-xs text-text-secondary", children: [
        /* @__PURE__ */ jsx12(PriceDisplay, { amount: item.price, currency: item.currency, size: "sm" }),
        " each"
      ] })
    ] })
  ] });
}

// modules/domains/common/cart/CartPreview.tsx
import { useState as useState8 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon11 } from "@fortawesome/react-fontawesome";
import { faCartShopping as faCartShopping2, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function CartPreview({ cart, defaultOpen = false, className }) {
  const [open, setOpen] = useState8(defaultOpen);
  const totalQty = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const itemLabel = `${totalQty} item${totalQty !== 1 ? "s" : ""}`;
  return /* @__PURE__ */ jsxs11("div", { className: cn("rounded-xl border border-border bg-surface-raised overflow-hidden", className), children: [
    /* @__PURE__ */ jsxs11(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-expanded": open,
        className: "w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border-focus",
        children: [
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsx13(FontAwesomeIcon11, { icon: faCartShopping2, className: "w-4 h-4 text-text-secondary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx13("span", { className: "text-sm font-semibold text-text-primary", children: "Your order" }),
            /* @__PURE__ */ jsxs11("span", { className: "text-xs text-text-secondary", children: [
              "(",
              itemLabel,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-3 shrink-0", children: [
            /* @__PURE__ */ jsx13(PriceDisplay, { amount: cart.totals.total, currency: cart.totals.currency, size: "sm" }),
            /* @__PURE__ */ jsx13(
              FontAwesomeIcon11,
              {
                icon: faChevronDown,
                className: cn("h-3.5 w-3.5 text-text-secondary transition-transform duration-200", open && "rotate-180"),
                "aria-hidden": "true"
              }
            )
          ] })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx13("div", { className: "border-t border-border px-4 py-3 space-y-3", children: cart.items.length === 0 ? /* @__PURE__ */ jsx13("p", { className: "text-sm text-text-secondary py-2 text-center", children: "No items in cart." }) : cart.items.map((item, idx) => /* @__PURE__ */ jsx13(
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
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs12("div", { className: cn("rounded-lg border border-border bg-surface-raised p-4 space-y-2", className), children: [
    lines.map(({ label, amount, isDiscount }) => /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsx14("span", { className: "text-text-secondary", children: label }),
      /* @__PURE__ */ jsx14(
        PriceDisplay,
        {
          amount: Math.abs(amount),
          currency,
          locale,
          className: cn(isDiscount && "text-success-fg")
        }
      )
    ] }, label)),
    /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
      /* @__PURE__ */ jsx14("span", { className: "text-sm font-semibold text-text-primary", children: "Total" }),
      /* @__PURE__ */ jsx14(PriceDisplay, { amount: totals.total, currency, locale, size: "lg" })
    ] })
  ] });
}

// modules/domains/common/cart/CartSummary.tsx
import { FontAwesomeIcon as FontAwesomeIcon13 } from "@fortawesome/react-fontawesome";
import { faCartShopping as faCartShopping3 } from "@fortawesome/free-solid-svg-icons";

// modules/domains/common/discount/CouponInput.tsx
import { useState as useState9 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon12 } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
function CouponInput({ onApply, onRemove, appliedCode, className }) {
  const [code, setCode] = useState9("");
  const [state, setState] = useState9("idle");
  const [message, setMessage] = useState9("");
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
    return /* @__PURE__ */ jsxs13("div", { className: cn("flex items-center justify-between gap-3 rounded-lg bg-success-subtle border border-success px-4 py-2.5", className), children: [
      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ jsx15(FontAwesomeIcon12, { icon: faCheck, className: "w-3.5 h-3.5 text-success-fg", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs13("span", { className: "text-sm font-medium text-success-fg truncate", children: [
          /* @__PURE__ */ jsx15("span", { className: "font-mono", children: appliedCode }),
          " applied"
        ] })
      ] }),
      onRemove && /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsxs13("div", { className: cn("space-y-1.5", className), children: [
    /* @__PURE__ */ jsxs13("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx15(
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
      /* @__PURE__ */ jsx15(
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
    message && /* @__PURE__ */ jsx15("p", { className: cn("text-xs", state === "success" ? "text-success-fg" : "text-error"), children: message })
  ] });
}

// modules/domains/common/cart/CartSummary.tsx
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs14("div", { className: cn("flex flex-col items-center justify-center gap-3 py-12 text-center", className), children: [
      /* @__PURE__ */ jsx16(FontAwesomeIcon13, { icon: faCartShopping3, className: "w-10 h-10 text-text-disabled", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx16("p", { className: "font-medium text-text-primary", children: "Your cart is empty" }),
      /* @__PURE__ */ jsx16("p", { className: "text-sm text-text-secondary", children: "Add items to get started" })
    ] });
  }
  return /* @__PURE__ */ jsxs14("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ jsx16("div", { className: "divide-y divide-border", children: cart.items.map((item) => /* @__PURE__ */ jsx16(
      CartItem,
      {
        item,
        onQuantityChange,
        onRemove,
        className: "py-4 first:pt-0 last:pb-0"
      },
      item.cartItemId
    )) }),
    showCoupon && onCouponApply && /* @__PURE__ */ jsx16(
      CouponInput,
      {
        appliedCode: appliedCoupon,
        onApply: onCouponApply,
        onRemove: onCouponRemove
      }
    ),
    showTotals && /* @__PURE__ */ jsx16(OrderTotalsCard, { totals: cart.totals }),
    onCheckout && /* @__PURE__ */ jsx16(Button, { fullWidth: true, onClick: onCheckout, className: "h-11 font-semibold", children: checkoutLabel })
  ] });
}

// modules/domains/common/charts/Charts.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
  Title
} from "chart.js";
import { Bar, Line, Doughnut, Radar, PolarArea } from "react-chartjs-2";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
  Title
);
function ChartCard({ title, subtitle, children, className }) {
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      className: cn(
        "rounded-xl border border-border bg-surface-raised p-5 shadow-sm",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs15("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx17("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
          subtitle && /* @__PURE__ */ jsx17("p", { className: "mt-0.5 text-xs text-text-secondary", children: subtitle })
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
  return /* @__PURE__ */ jsx17(
    ChartCard,
    {
      title: "Revenue vs Expenses",
      subtitle: "Monthly comparison (USD)",
      className,
      children: /* @__PURE__ */ jsx17(
        Bar,
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
  return /* @__PURE__ */ jsx17(
    ChartCard,
    {
      title: "User Activity",
      subtitle: "Daily active users vs new signups",
      className,
      children: /* @__PURE__ */ jsx17(
        Line,
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
  return /* @__PURE__ */ jsx17(
    ChartCard,
    {
      title: "Sales by Category",
      subtitle: "Percentage share of total revenue",
      className,
      children: /* @__PURE__ */ jsx17("div", { className: "mx-auto max-w-xs", children: /* @__PURE__ */ jsx17(
        Doughnut,
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
  return /* @__PURE__ */ jsx17(
    ChartCard,
    {
      title: "Product Comparison",
      subtitle: "Our product vs competitor across 6 dimensions",
      className,
      children: /* @__PURE__ */ jsx17(
        Radar,
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
  return /* @__PURE__ */ jsx17(
    ChartCard,
    {
      title: "Regional Sales",
      subtitle: "Units sold per region",
      className,
      children: /* @__PURE__ */ jsx17("div", { className: "mx-auto max-w-xs", children: /* @__PURE__ */ jsx17(
        PolarArea,
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
import { useState as useState10, useRef, useEffect } from "react";
import { FontAwesomeIcon as FontAwesomeIcon14 } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faTimes,
  faPaperPlane,
  faUser as faUser3,
  faRobot,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { Fragment as Fragment2, jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
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
  const [open, setOpen] = useState10(false);
  const [minimised, setMinimised] = useState10(false);
  const [messages, setMessages] = useState10(initialMessages);
  const [input, setInput] = useState10("");
  const [loading, setLoading] = useState10(false);
  const [unread, setUnread] = useState10(0);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => {
        var _a3;
        return (_a3 = inputRef.current) == null ? void 0 : _a3.focus();
      }, 120);
    }
  }, [open]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      className: cn("fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3", className),
      role: "region",
      "aria-label": "Chat support",
      children: [
        open && /* @__PURE__ */ jsxs16(
          "div",
          {
            className: cn(
              "w-80 sm:w-96 rounded-2xl shadow-2xl border border-border overflow-hidden",
              "bg-surface-base flex flex-col transition-all duration-200",
              minimised ? "h-14" : "h-[480px]"
            ),
            "aria-live": "polite",
            children: [
              /* @__PURE__ */ jsxs16("div", { className: "flex items-center gap-3 px-4 py-3 bg-primary text-primary-fg flex-shrink-0", children: [
                /* @__PURE__ */ jsx18("div", { className: "flex items-center justify-center w-8 h-8 rounded-full bg-white/20", children: /* @__PURE__ */ jsx18(FontAwesomeIcon14, { icon: faRobot, className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxs16("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx18("p", { className: "text-sm font-semibold leading-tight truncate", children: title }),
                  !minimised && /* @__PURE__ */ jsx18("p", { className: "text-xs text-primary-fg/70 truncate", children: subtitle })
                ] }),
                /* @__PURE__ */ jsx18(
                  "button",
                  {
                    onClick: () => setMinimised((v) => !v),
                    "aria-label": minimised ? "Expand chat" : "Minimise chat",
                    className: "flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    children: /* @__PURE__ */ jsx18(FontAwesomeIcon14, { icon: faMinus, className: "w-3 h-3" })
                  }
                ),
                /* @__PURE__ */ jsx18(
                  "button",
                  {
                    onClick: () => setOpen(false),
                    "aria-label": "Close chat",
                    className: "flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    children: /* @__PURE__ */ jsx18(FontAwesomeIcon14, { icon: faTimes, className: "w-3 h-3" })
                  }
                )
              ] }),
              !minimised && /* @__PURE__ */ jsxs16(Fragment2, { children: [
                /* @__PURE__ */ jsxs16(
                  "div",
                  {
                    ref: listRef,
                    className: "flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 scroll-smooth",
                    children: [
                      messages.length === 0 && /* @__PURE__ */ jsxs16("div", { className: "flex flex-col items-center justify-center h-full gap-2 text-text-secondary", children: [
                        /* @__PURE__ */ jsx18(FontAwesomeIcon14, { icon: faCommentDots, className: "w-8 h-8 opacity-30" }),
                        /* @__PURE__ */ jsx18("p", { className: "text-sm", children: "Start the conversation" })
                      ] }),
                      messages.map((msg) => /* @__PURE__ */ jsxs16(
                        "div",
                        {
                          className: cn(
                            "flex gap-2 items-end",
                            msg.role === "user" ? "flex-row-reverse" : "flex-row"
                          ),
                          children: [
                            /* @__PURE__ */ jsx18(
                              "div",
                              {
                                className: cn(
                                  "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs",
                                  msg.role === "user" ? "bg-primary text-primary-fg" : "bg-surface-overlay text-text-secondary"
                                ),
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ jsx18(
                                  FontAwesomeIcon14,
                                  {
                                    icon: msg.role === "user" ? faUser3 : faRobot,
                                    className: "w-3 h-3"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ jsxs16(
                              "div",
                              {
                                className: cn(
                                  "max-w-[75%] flex flex-col gap-0.5",
                                  msg.role === "user" ? "items-end" : "items-start"
                                ),
                                children: [
                                  /* @__PURE__ */ jsx18(
                                    "div",
                                    {
                                      className: cn(
                                        "px-3 py-2 rounded-2xl text-sm leading-snug",
                                        msg.role === "user" ? "bg-primary text-primary-fg rounded-br-sm" : "bg-surface-raised border border-border text-text-primary rounded-bl-sm"
                                      ),
                                      children: msg.text
                                    }
                                  ),
                                  msg.timestamp && /* @__PURE__ */ jsx18("span", { className: "text-[10px] text-text-disabled px-1", children: msg.timestamp })
                                ]
                              }
                            )
                          ]
                        },
                        msg.id
                      )),
                      loading && /* @__PURE__ */ jsxs16("div", { className: "flex gap-2 items-end", children: [
                        /* @__PURE__ */ jsx18("div", { className: "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-surface-overlay text-text-secondary", children: /* @__PURE__ */ jsx18(FontAwesomeIcon14, { icon: faRobot, className: "w-3 h-3" }) }),
                        /* @__PURE__ */ jsx18("div", { className: "bg-surface-raised border border-border rounded-2xl rounded-bl-sm px-3 py-2", children: /* @__PURE__ */ jsxs16("span", { className: "flex gap-1 items-center", children: [
                          /* @__PURE__ */ jsx18("span", { className: "w-1.5 h-1.5 rounded-full bg-text-disabled animate-bounce [animation-delay:0ms]" }),
                          /* @__PURE__ */ jsx18("span", { className: "w-1.5 h-1.5 rounded-full bg-text-disabled animate-bounce [animation-delay:150ms]" }),
                          /* @__PURE__ */ jsx18("span", { className: "w-1.5 h-1.5 rounded-full bg-text-disabled animate-bounce [animation-delay:300ms]" })
                        ] }) })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs16("div", { className: "flex-shrink-0 border-t border-border bg-surface-base px-3 py-2 flex gap-2 items-end", children: [
                  /* @__PURE__ */ jsx18(
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
                  /* @__PURE__ */ jsx18(
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
                      children: /* @__PURE__ */ jsx18(FontAwesomeIcon14, { icon: faPaperPlane, className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs16(
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
              /* @__PURE__ */ jsx18(
                FontAwesomeIcon14,
                {
                  icon: open ? faTimes : faCommentDots,
                  className: "w-6 h-6",
                  "aria-hidden": "true"
                }
              ),
              !open && unread > 0 && /* @__PURE__ */ jsx18("span", { className: "absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-error text-white text-[10px] font-bold", children: unread > 9 ? "9+" : unread })
            ]
          }
        )
      ]
    }
  );
}

// modules/domains/common/discount/DiscountBadge.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx19(
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
import { createContext, useContext } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var DirectionContext = createContext({
  lang: "en",
  dir: "ltr",
  isRTL: false
});
function useDirection() {
  return useContext(DirectionContext);
}
function DirectionProvider({ lang, children, applyToDocument = false }) {
  const dir = getDirection(lang);
  if (applyToDocument && typeof document !== "undefined") {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }
  return /* @__PURE__ */ jsx20(DirectionContext.Provider, { value: { lang, dir, isRTL: isRTL(lang) }, children: /* @__PURE__ */ jsx20("div", { dir, lang, children }) });
}

// modules/domains/common/i18n/LanguageSwitcher.tsx
import { useState as useState11 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon15 } from "@fortawesome/react-fontawesome";
import { faChevronDown as faChevronDown2 } from "@fortawesome/free-solid-svg-icons";
import * as Flags from "country-flag-icons/react/3x2";
import { jsx as jsx21, jsxs as jsxs17 } from "react/jsx-runtime";
var langToCountry2 = {
  en: "US",
  // veya 'GB' kullanılabilir
  tr: "TR",
  de: "DE",
  fr: "FR",
  ar: "SA"
};
function getFlag(lang) {
  const countryCode = langToCountry2[lang];
  if (countryCode) {
    const FlagComp = Flags[countryCode];
    if (FlagComp) {
      return /* @__PURE__ */ jsx21(FlagComp, { className: "w-4 h-auto rounded-[2px] shadow-sm" });
    }
  }
  return LANG_FLAGS[lang];
}
function LanguageSwitcher({
  value,
  onChange,
  languages = AVAILABLE_LANGUAGES,
  className
}) {
  const [internal, setInternal] = useState11(DEFAULT_LANGUAGE);
  const current = value !== void 0 ? value : internal;
  const items = languages.map((lang) => ({
    type: "item",
    label: getLanguageName(lang),
    icon: getFlag(lang),
    // DropdownMenu string beklediği için cast ediyoruz
    onClick: () => {
      setInternal(lang);
      onChange == null ? void 0 : onChange(lang);
    }
  }));
  return /* @__PURE__ */ jsx21(
    DropdownMenu,
    {
      className,
      trigger: /* @__PURE__ */ jsxs17(Button, { variant: "outline", size: "sm", className: "gap-2", children: [
        /* @__PURE__ */ jsx21("span", { className: "w-4 flex items-center justify-center shrink-0", "aria-hidden": "true", children: getFlag(current) }),
        /* @__PURE__ */ jsx21("span", { children: getLanguageName(current) }),
        /* @__PURE__ */ jsx21(FontAwesomeIcon15, { icon: faChevronDown2, className: "w-3 h-3 text-text-disabled" })
      ] }),
      items
    }
  );
}

// modules/domains/common/location/CountrySelector.tsx
import { useState as useState12, useRef as useRef2, useEffect as useEffect2, useId } from "react";
import { createPortal } from "react-dom";
import { getCountryDataList } from "countries-list";
import * as Flags2 from "country-flag-icons/react/3x2";
import { FontAwesomeIcon as FontAwesomeIcon16 } from "@fortawesome/react-fontawesome";
import { faChevronDown as faChevronDown3, faCheck as faCheck2 } from "@fortawesome/free-solid-svg-icons";
import { Fragment as Fragment3, jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
var ALL_COUNTRIES = getCountryDataList().map((c) => ({ iso2: c.iso2, name: c.name })).sort((a, b) => a.name.localeCompare(b.name));
function CountryFlag({ iso2 }) {
  if (!iso2) return null;
  const FlagComp = Flags2[iso2];
  if (!FlagComp) return null;
  return /* @__PURE__ */ jsx22(FlagComp, { className: "w-4 h-auto rounded-[2px] shadow-sm shrink-0" });
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
  const uid = useId();
  const id = idProp != null ? idProp : uid;
  const [open, setOpen] = useState12(false);
  const [search, setSearch] = useState12("");
  const [rect, setRect] = useState12(null);
  const triggerRef = useRef2(null);
  const searchRef = useRef2(null);
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
  useEffect2(() => {
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
  const panel = open && rect && /* @__PURE__ */ jsxs18(
    "div",
    {
      id: portalId,
      role: "listbox",
      "aria-label": "Select country",
      style: { position: "fixed", top: rect.bottom + 4, left: rect.left, width: rect.width, zIndex: 9999 },
      className: "rounded-lg border border-border bg-surface-raised shadow-lg",
      children: [
        /* @__PURE__ */ jsx22("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ jsx22(
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
        /* @__PURE__ */ jsxs18("ul", { className: "max-h-56 overflow-y-auto py-1", children: [
          filtered.length === 0 && /* @__PURE__ */ jsx22("li", { className: "px-3 py-2 text-sm text-text-secondary", children: "No results" }),
          filtered.map((opt) => {
            const active = opt.iso2 === value;
            return /* @__PURE__ */ jsx22("li", { children: /* @__PURE__ */ jsxs18(
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
                  /* @__PURE__ */ jsx22(CountryFlag, { iso2: opt.iso2 }),
                  /* @__PURE__ */ jsx22("span", { className: "flex-1 truncate", children: opt.name }),
                  /* @__PURE__ */ jsx22("span", { className: "text-xs text-text-secondary shrink-0", children: opt.iso2 }),
                  active && /* @__PURE__ */ jsx22(FontAwesomeIcon16, { icon: faCheck2, className: "w-3 h-3 text-primary shrink-0", "aria-hidden": "true" })
                ]
              }
            ) }, opt.iso2);
          })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ jsxs18("div", { className: cn("space-y-1", className), children: [
    label && /* @__PURE__ */ jsxs18("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsxs18(Fragment3, { children: [
        /* @__PURE__ */ jsx22("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx22("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ jsx22("div", { ref: triggerRef, className: "relative w-full", children: /* @__PURE__ */ jsxs18(
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
          /* @__PURE__ */ jsx22("span", { className: "flex items-center gap-2 min-w-0", children: selected ? /* @__PURE__ */ jsxs18(Fragment3, { children: [
            /* @__PURE__ */ jsx22(CountryFlag, { iso2: selected.iso2 }),
            /* @__PURE__ */ jsx22("span", { className: "truncate", children: selected.name })
          ] }) : /* @__PURE__ */ jsx22("span", { className: "text-text-disabled truncate", children: placeholder }) }),
          /* @__PURE__ */ jsx22(FontAwesomeIcon16, { icon: faChevronDown3, className: "w-3 h-3 text-text-disabled shrink-0", "aria-hidden": "true" })
        ]
      }
    ) }),
    hint && !error && /* @__PURE__ */ jsx22("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ jsx22("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error }),
    isBrowser && createPortal(panel, document.body)
  ] });
}

// modules/domains/common/location/GeoPointDisplay.tsx
import { FontAwesomeIcon as FontAwesomeIcon17 } from "@fortawesome/react-fontawesome";
import { faLocationDot as faLocationDot3 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs19("div", { className: cn("inline-flex items-center gap-2 text-sm", className), children: [
    /* @__PURE__ */ jsx23(FontAwesomeIcon17, { icon: faLocationDot3, className: "w-3.5 h-3.5 text-text-disabled shrink-0", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs19("div", { className: "min-w-0", children: [
      label && /* @__PURE__ */ jsx23("p", { className: "text-xs text-text-secondary mb-0.5", children: label }),
      /* @__PURE__ */ jsxs19("p", { className: "font-mono text-text-primary tabular-nums", children: [
        lat,
        ", ",
        lng
      ] })
    ] }),
    showMapLink && /* @__PURE__ */ jsx23(
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
import { useState as useState13 } from "react";
import { getCountryDataList as getCountryDataList2 } from "countries-list";
import { Fragment as Fragment4, jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
var COUNTRY_OPTIONS = getCountryDataList2().sort((a, b) => a.name.localeCompare(b.name)).map((c) => ({ value: c.iso2, label: c.name }));
function LocationPicker({ initial = {}, onSubmit, onCancel, error, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const [values, setValues] = useState13({
    city: (_a3 = initial.city) != null ? _a3 : null,
    state: (_b = initial.state) != null ? _b : null,
    country: (_c = initial.country) != null ? _c : null,
    countryCode: (_d = initial.countryCode) != null ? _d : null,
    postalCode: (_e = initial.postalCode) != null ? _e : null,
    latitude: (_f = initial.latitude) != null ? _f : null,
    longitude: (_g = initial.longitude) != null ? _g : null
  });
  const [loading, setLoading] = useState13(false);
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
  return /* @__PURE__ */ jsxs20(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      columns: 2,
      className,
      actions: /* @__PURE__ */ jsxs20(Fragment4, { children: [
        onCancel && /* @__PURE__ */ jsx24(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ jsx24(Button, { type: "submit", loading, children: "Save Location" })
      ] }),
      children: [
        /* @__PURE__ */ jsx24(
          Select,
          {
            id: "loc-country",
            label: "Country",
            options: [{ value: "", label: "Select country\u2026" }, ...COUNTRY_OPTIONS],
            value: (_h = values.countryCode) != null ? _h : "",
            onChange: (e) => handleCountry(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx24(
          Input,
          {
            id: "loc-city",
            label: "City",
            value: (_i = values.city) != null ? _i : "",
            onChange: (e) => set("city", e.target.value || null)
          }
        ),
        /* @__PURE__ */ jsx24(
          Input,
          {
            id: "loc-state",
            label: "State / Province",
            value: (_j = values.state) != null ? _j : "",
            onChange: (e) => set("state", e.target.value || null)
          }
        ),
        /* @__PURE__ */ jsx24(
          Input,
          {
            id: "loc-postal",
            label: "Postal Code",
            value: (_k = values.postalCode) != null ? _k : "",
            onChange: (e) => set("postalCode", e.target.value || null)
          }
        ),
        /* @__PURE__ */ jsx24(
          Input,
          {
            id: "loc-lat",
            label: "Latitude",
            type: "number",
            value: (_l = values.latitude) != null ? _l : "",
            onChange: (e) => set("latitude", e.target.value ? parseFloat(e.target.value) : null)
          }
        ),
        /* @__PURE__ */ jsx24(
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
import { useState as useState14, useRef as useRef3, useEffect as useEffect3 } from "react";
import { createPortal as createPortal2 } from "react-dom";
import { getCountryDataList as getCountryDataList3 } from "countries-list";
import * as Flags3 from "country-flag-icons/react/3x2";
import { FontAwesomeIcon as FontAwesomeIcon18 } from "@fortawesome/react-fontawesome";
import { faChevronDown as faChevronDown4 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
var currencyToCountry = {};
var _seen = /* @__PURE__ */ new Set();
for (const c of getCountryDataList3()) {
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
  return /* @__PURE__ */ jsx25(FlagComp, { className: "w-4 h-auto rounded-[2px] shadow-sm shrink-0" });
}
function CurrencySelector({
  value,
  onChange,
  id = "currency",
  label = "Currency",
  disabled = false,
  className
}) {
  const [open, setOpen] = useState14(false);
  const [search, setSearch] = useState14("");
  const [rect, setRect] = useState14(null);
  const triggerRef = useRef3(null);
  const searchRef = useRef3(null);
  const filtered = search.trim() ? ALL_CURRENCIES.filter((c) => c.value.toLowerCase().includes(search.toLowerCase())) : ALL_CURRENCIES;
  function handleOpen() {
    if (disabled) return;
    if (!open && triggerRef.current) {
      setRect(triggerRef.current.getBoundingClientRect());
    }
    setOpen((p) => !p);
  }
  useEffect3(() => {
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
  const panel = open && rect && /* @__PURE__ */ jsxs21(
    "div",
    {
      id: "currency-portal",
      role: "listbox",
      "aria-label": "Select currency",
      style: { position: "fixed", top: rect.bottom + 4, left: rect.left, width: rect.width, zIndex: 9999 },
      className: "rounded-lg border border-border bg-surface-raised shadow-lg",
      children: [
        /* @__PURE__ */ jsx25("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ jsx25(
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
        /* @__PURE__ */ jsxs21("ul", { className: "max-h-56 overflow-y-auto py-1", children: [
          filtered.length === 0 && /* @__PURE__ */ jsx25("li", { className: "px-3 py-2 text-sm text-text-secondary", children: "No results" }),
          filtered.map((opt) => /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsxs21(
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
                /* @__PURE__ */ jsx25(CurrencyFlag, { countryCode: opt.countryCode }),
                /* @__PURE__ */ jsx25("span", { children: opt.value })
              ]
            }
          ) }, opt.value))
        ] })
      ]
    }
  );
  return /* @__PURE__ */ jsxs21("div", { className: cn("space-y-1", className), children: [
    label && /* @__PURE__ */ jsx25("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ jsx25("div", { ref: triggerRef, className: "relative w-full", children: /* @__PURE__ */ jsxs21(
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
          /* @__PURE__ */ jsxs21("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx25(CurrencyFlag, { countryCode: currencyToCountry[value] }),
            /* @__PURE__ */ jsx25("span", { children: value })
          ] }),
          /* @__PURE__ */ jsx25(FontAwesomeIcon18, { icon: faChevronDown4, className: "w-3 h-3 text-text-disabled" })
        ]
      }
    ) }),
    isBrowser && createPortal2(panel, document.body)
  ] });
}

// modules/domains/common/notification/NotificationMenu.tsx
import { useEffect as useEffect4, useRef as useRef4, useState as useState15 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon19 } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx26, jsxs as jsxs22 } from "react/jsx-runtime";
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
  const [open, setOpen] = useState15(false);
  const containerRef = useRef4(null);
  const unreadCount = items.filter((n) => !n.read).length;
  useEffect4(() => {
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
  return /* @__PURE__ */ jsxs22("div", { ref: containerRef, className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs22(
      "button",
      {
        type: "button",
        "aria-label": `Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        onClick: () => setOpen((p) => !p),
        className: "relative flex items-center justify-center w-8 h-8 rounded-md text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
        children: [
          /* @__PURE__ */ jsx26(FontAwesomeIcon19, { icon: faBell, className: "w-4 h-4", "aria-hidden": "true" }),
          unreadCount > 0 && /* @__PURE__ */ jsx26("span", { className: "absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[1rem] h-4 px-1 rounded-full bg-error text-primary-fg text-[10px] font-bold leading-none pointer-events-none", children: unreadCount > 9 ? "9+" : unreadCount })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs22(
      "div",
      {
        role: "dialog",
        "aria-label": "Notifications",
        className: cn(
          "absolute top-full mt-2 z-50 w-80 rounded-xl border border-border bg-surface-raised shadow-xl overflow-hidden",
          align === "right" ? "right-0" : "left-0"
        ),
        children: [
          /* @__PURE__ */ jsxs22("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
            /* @__PURE__ */ jsxs22("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx26("span", { className: "text-sm font-semibold text-text-primary", children: "Notifications" }),
              unreadCount > 0 && /* @__PURE__ */ jsx26("span", { className: "px-1.5 py-0.5 rounded-full bg-error text-primary-fg text-[10px] font-bold leading-none", children: unreadCount })
            ] }),
            onMarkAllRead && unreadCount > 0 && /* @__PURE__ */ jsx26(
              "button",
              {
                type: "button",
                onClick: onMarkAllRead,
                className: "text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                children: "Mark all read"
              }
            )
          ] }),
          /* @__PURE__ */ jsx26("div", { className: "max-h-80 overflow-y-auto divide-y divide-border", children: items.length === 0 ? /* @__PURE__ */ jsxs22("div", { className: "flex flex-col items-center justify-center py-10 gap-2 text-text-disabled", children: [
            /* @__PURE__ */ jsx26(FontAwesomeIcon19, { icon: faBell, className: "w-6 h-6", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx26("p", { className: "text-sm", children: "No notifications" })
          ] }) : items.map((item) => {
            var _a3;
            return /* @__PURE__ */ jsxs22(
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
                  /* @__PURE__ */ jsx26(
                    "span",
                    {
                      className: cn(
                        "mt-1.5 shrink-0 w-2 h-2 rounded-full",
                        item.read ? "bg-transparent" : variantDot[(_a3 = item.variant) != null ? _a3 : "info"]
                      ),
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxs22("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsx26("p", { className: cn(
                      "text-sm truncate",
                      item.read ? "text-text-secondary" : "text-text-primary font-medium"
                    ), children: item.title }),
                    item.description && /* @__PURE__ */ jsx26("p", { className: "text-xs text-text-secondary mt-0.5 line-clamp-2", children: item.description }),
                    /* @__PURE__ */ jsx26("p", { className: "text-[11px] text-text-disabled mt-1", children: item.timestamp })
                  ] })
                ]
              },
              item.id
            );
          }) }),
          onViewAll && /* @__PURE__ */ jsx26("div", { className: "border-t border-border", children: /* @__PURE__ */ jsx26(
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
import { FontAwesomeIcon as FontAwesomeIcon20 } from "@fortawesome/react-fontawesome";
import { faCheck as faCheck3 } from "@fortawesome/free-solid-svg-icons";

// modules/domains/common/payment/PaymentStatusBadge.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx27(Badge, { variant: meta.variant, size, dot, children: meta.label });
}

// modules/domains/common/payment/PaymentSummaryCard.tsx
import { jsx as jsx28, jsxs as jsxs23 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs23("div", { className: cn("bg-surface-raised border border-border rounded-xl overflow-hidden", className), children: [
    /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border bg-surface-overlay", children: [
      /* @__PURE__ */ jsx28("span", { className: "text-sm font-semibold text-text-primary", children: "Payment" }),
      /* @__PURE__ */ jsx28(PaymentStatusBadge, { status: payment.status, size: "sm", dot: true })
    ] }),
    /* @__PURE__ */ jsxs23("div", { className: "px-4 py-4 space-y-3", children: [
      /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx28("span", { className: "text-sm text-text-secondary", children: "Amount" }),
        /* @__PURE__ */ jsx28(PriceDisplay, { amount: payment.amount, currency: payment.currency, size: "lg" })
      ] }),
      payment.method && /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx28("span", { className: "text-sm text-text-secondary", children: "Method" }),
        /* @__PURE__ */ jsx28("span", { className: "text-sm font-medium text-text-primary", children: (_a3 = METHOD_LABELS[payment.method]) != null ? _a3 : payment.method })
      ] }),
      /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx28("span", { className: "text-sm text-text-secondary", children: "Provider" }),
        /* @__PURE__ */ jsx28("span", { className: "text-sm font-medium text-text-primary", children: payment.provider })
      ] }),
      payment.providerPaymentId && /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsx28("span", { className: "text-sm text-text-secondary shrink-0", children: "Ref" }),
        /* @__PURE__ */ jsx28("span", { className: "text-xs font-mono text-text-secondary truncate text-right", children: payment.providerPaymentId })
      ] })
    ] })
  ] });
}

// modules/domains/common/payment/CheckoutSuccessState.tsx
import { jsx as jsx29, jsxs as jsxs24 } from "react/jsx-runtime";
function CheckoutSuccessState({
  payment,
  address,
  onReset,
  locale = "tr-TR"
}) {
  const fmt = new Intl.NumberFormat(locale, { style: "currency", currency: payment.currency });
  return /* @__PURE__ */ jsxs24("div", { className: "flex flex-col items-center justify-center py-16 space-y-6 text-center max-w-md mx-auto", children: [
    /* @__PURE__ */ jsx29("span", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-success-subtle", children: /* @__PURE__ */ jsx29(FontAwesomeIcon20, { icon: faCheck3, className: "w-10 h-10 text-success", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs24("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx29("h2", { className: "text-2xl font-bold text-text-primary", children: "Payment successful!" }),
      /* @__PURE__ */ jsxs24("p", { className: "text-text-secondary", children: [
        fmt.format(payment.amount),
        " was charged. A receipt has been sent to your email."
      ] })
    ] }),
    /* @__PURE__ */ jsxs24("div", { className: "w-full space-y-4 text-left", children: [
      /* @__PURE__ */ jsx29(PaymentSummaryCard, { payment }),
      address && /* @__PURE__ */ jsxs24("div", { className: "rounded-xl border border-border bg-surface-raised p-4 space-y-2", children: [
        /* @__PURE__ */ jsx29("p", { className: "text-xs font-semibold text-text-secondary uppercase tracking-wide", children: "Delivering to" }),
        /* @__PURE__ */ jsx29(AddressCard, { address })
      ] })
    ] }),
    onReset && /* @__PURE__ */ jsx29(Button, { variant: "outline", onClick: onReset, children: "Start over" })
  ] });
}

// modules/domains/common/payment/CreditCardForm.tsx
import { useState as useState16 } from "react";

// modules/domains/common/payment/CreditCardVisual.tsx
import { jsx as jsx30, jsxs as jsxs25 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx30(
    "div",
    {
      className: cn("w-72 h-44 select-none", className),
      style: { perspective: "1000px" },
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxs25(
        "div",
        {
          className: "relative w-full h-full transition-transform duration-500",
          style: { transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" },
          children: [
            /* @__PURE__ */ jsxs25(
              "div",
              {
                className: cn("absolute inset-0 rounded-2xl bg-gradient-to-br p-5 flex flex-col justify-between shadow-xl text-white", gradient),
                style: { backfaceVisibility: "hidden" },
                children: [
                  /* @__PURE__ */ jsxs25("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ jsxs25("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ jsx30("div", { className: "w-8 h-6 rounded bg-yellow-400/80" }),
                      /* @__PURE__ */ jsx30("div", { className: "w-8 h-6 rounded bg-yellow-300/50 -ml-3" })
                    ] }),
                    label && /* @__PURE__ */ jsx30("span", { className: "text-sm font-bold tracking-widest opacity-90", children: label })
                  ] }),
                  /* @__PURE__ */ jsx30("p", { className: "font-mono text-lg tracking-widest", children: maskNumber(cardNumber, brand) }),
                  /* @__PURE__ */ jsxs25("div", { className: "flex justify-between items-end", children: [
                    /* @__PURE__ */ jsxs25("div", { children: [
                      /* @__PURE__ */ jsx30("p", { className: "text-[9px] uppercase opacity-60 mb-0.5", children: "Card Holder" }),
                      /* @__PURE__ */ jsx30("p", { className: "text-xs font-medium tracking-wide uppercase truncate max-w-[10rem]", children: cardholderName || "\u2022\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022\u2022" })
                    ] }),
                    /* @__PURE__ */ jsxs25("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsx30("p", { className: "text-[9px] uppercase opacity-60 mb-0.5", children: "Expires" }),
                      /* @__PURE__ */ jsxs25("p", { className: "text-xs font-medium font-mono", children: [
                        expiryMonth,
                        "/",
                        expiryYear
                      ] })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs25(
              "div",
              {
                className: cn("absolute inset-0 rounded-2xl bg-gradient-to-br shadow-xl overflow-hidden text-white", gradient),
                style: { backfaceVisibility: "hidden", transform: "rotateY(180deg)" },
                children: [
                  /* @__PURE__ */ jsx30("div", { className: "mt-7 h-10 bg-black/60 w-full" }),
                  /* @__PURE__ */ jsxs25("div", { className: "px-5 mt-4 flex items-center justify-end gap-3", children: [
                    /* @__PURE__ */ jsx30("div", { className: "flex-1 h-6 bg-white/20 rounded" }),
                    /* @__PURE__ */ jsxs25("div", { className: "bg-white/90 rounded px-3 py-1 text-right min-w-[3.5rem]", children: [
                      /* @__PURE__ */ jsx30("p", { className: "text-[9px] text-gray-500 mb-0.5", children: "CVV" }),
                      /* @__PURE__ */ jsx30("p", { className: "font-mono text-sm text-gray-800 tracking-widest", children: cvv ? "\u2022".repeat(cvv.length) : "\u2022\u2022\u2022" })
                    ] })
                  ] }),
                  label && /* @__PURE__ */ jsx30("p", { className: "absolute bottom-4 right-5 text-sm font-bold tracking-widest opacity-80", children: label })
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
import { Fragment as Fragment5, jsx as jsx31, jsxs as jsxs26 } from "react/jsx-runtime";
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
  const [cardNumber, setCardNumber] = useState16("");
  const [cardholderName, setCardholderName] = useState16("");
  const [expiry, setExpiry] = useState16("");
  const [cvv, setCvv] = useState16("");
  const [cvvFocused, setCvvFocused] = useState16(false);
  const [errors, setErrors] = useState16({});
  const [loading, setLoading] = useState16(false);
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
  return /* @__PURE__ */ jsxs26(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ jsxs26(Fragment5, { children: [
        onCancel && /* @__PURE__ */ jsx31(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ jsx31(Button, { type: "submit", loading, children: "Add Card" })
      ] }),
      children: [
        /* @__PURE__ */ jsx31("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ jsx31(
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
        /* @__PURE__ */ jsx31(
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
        /* @__PURE__ */ jsx31(
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
        /* @__PURE__ */ jsxs26("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx31(
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
          /* @__PURE__ */ jsx31(
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
import { useState as useState17 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon21 } from "@fortawesome/react-fontawesome";
import {
  faPaypal,
  faApple,
  faGoogle as faGoogle2,
  faBitcoin
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx32 } from "react/jsx-runtime";
var paymentOptions = [
  { value: "CREDIT_CARD", label: "Credit Card", icon: /* @__PURE__ */ jsx32(FontAwesomeIcon21, { icon: faCreditCard, className: "h-4 w-4 text-blue-600" }) },
  { value: "PAYPAL", label: "PayPal", icon: /* @__PURE__ */ jsx32(FontAwesomeIcon21, { icon: faPaypal, className: "h-4 w-4 text-blue-500" }) },
  { value: "APPLE_PAY", label: "Apple Pay", icon: /* @__PURE__ */ jsx32(FontAwesomeIcon21, { icon: faApple, className: "h-4 w-4 text-gray-900" }) },
  { value: "GOOGLE_PAY", label: "Google Pay", icon: /* @__PURE__ */ jsx32(FontAwesomeIcon21, { icon: faGoogle2, className: "h-4 w-4 text-blue-600" }) },
  { value: "CRYPTO", label: "Cryptocurrency", icon: /* @__PURE__ */ jsx32(FontAwesomeIcon21, { icon: faBitcoin, className: "h-4 w-4 text-orange-500" }) }
];
function PaymentMethodSelector({
  value,
  onChange,
  disabled = false,
  className
}) {
  const [selected, setSelected] = useState17("CREDIT_CARD");
  return /* @__PURE__ */ jsx32("div", { className: cn("w-full", className), children: /* @__PURE__ */ jsx32(
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
import { useState as useState18 } from "react";
import { jsx as jsx33, jsxs as jsxs27 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx33("span", { className: cn("inline-flex items-center justify-center rounded px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wide shrink-0", BRAND_COLOR[brand]), children: labels[brand] });
}
function SavedCardSelector({
  cards,
  selectedCardId,
  onSelect,
  onRemove,
  onAddNew,
  className
}) {
  const [active, setActive] = useState18(selectedCardId);
  function handleSelect(card) {
    setActive(card.cardId);
    onSelect(card.cardId, card);
  }
  return /* @__PURE__ */ jsxs27("fieldset", { className: cn("space-y-3", className), children: [
    /* @__PURE__ */ jsx33("legend", { className: "sr-only", children: "Select payment card" }),
    cards.length === 0 ? /* @__PURE__ */ jsx33("p", { className: "text-sm text-text-secondary py-4 text-center", children: "No saved cards." }) : /* @__PURE__ */ jsx33("div", { className: "space-y-2", children: cards.map((card) => {
      const isSelected = active === card.cardId;
      return /* @__PURE__ */ jsxs27(
        "label",
        {
          className: cn(
            "flex items-center gap-3 rounded-lg border bg-surface-raised p-3 cursor-pointer transition-colors",
            "focus-within:ring-2 focus-within:ring-border-focus",
            isSelected ? "border-primary ring-2 ring-primary ring-offset-1" : "border-border hover:border-border-strong"
          ),
          children: [
            /* @__PURE__ */ jsx33(
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
            /* @__PURE__ */ jsx33(
              "span",
              {
                "aria-hidden": "true",
                className: cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  isSelected ? "border-primary bg-primary" : "border-border bg-surface-base"
                ),
                children: isSelected && /* @__PURE__ */ jsx33("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
              }
            ),
            /* @__PURE__ */ jsx33(CardBrandBadge, { brand: card.brand }),
            /* @__PURE__ */ jsxs27("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs27("p", { className: "text-sm font-medium text-text-primary font-mono", children: [
                "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ",
                card.last4
              ] }),
              /* @__PURE__ */ jsxs27("p", { className: "text-xs text-text-secondary", children: [
                card.cardholderName,
                " \xB7 ",
                card.expiryMonth,
                "/",
                card.expiryYear,
                card.isDefault && /* @__PURE__ */ jsx33("span", { className: "ml-2 text-[10px] font-semibold text-primary uppercase", children: "Default" })
              ] })
            ] }),
            onRemove && /* @__PURE__ */ jsx33(
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
    onAddNew && /* @__PURE__ */ jsx33(Button, { variant: "outline", size: "sm", onClick: onAddNew, className: "w-full", children: "+ Add new card" })
  ] });
}

// modules/domains/common/seo/SeoForm.tsx
import { useState as useState19 } from "react";
import { Fragment as Fragment6, jsx as jsx34, jsxs as jsxs28 } from "react/jsx-runtime";
function SeoForm({ initial = {}, onSubmit, onCancel, error, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const [values, setValues] = useState19({
    seoTitle: (_a3 = initial.seoTitle) != null ? _a3 : null,
    seoDescription: (_b = initial.seoDescription) != null ? _b : null,
    keywords: (_c = initial.keywords) != null ? _c : []
  });
  const [errors, setErrors] = useState19({});
  const [loading, setLoading] = useState19(false);
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
  return /* @__PURE__ */ jsxs28(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ jsxs28(Fragment6, { children: [
        onCancel && /* @__PURE__ */ jsx34(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ jsx34(Button, { type: "submit", loading, children: "Save SEO" })
      ] }),
      children: [
        /* @__PURE__ */ jsx34(
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
        /* @__PURE__ */ jsx34(
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
        /* @__PURE__ */ jsx34(
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
import { jsx as jsx35, jsxs as jsxs29 } from "react/jsx-runtime";
var TITLE_PLACEHOLDER = "Page title will appear here";
var DESC_PLACEHOLDER = "Meta description will appear here. Keep it between 120\u2013160 characters for best results in search engines.";
function SeoPreview({ seo, url = "https://example.com/page", siteName, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const title = ((_a3 = seo.seoTitle) == null ? void 0 : _a3.trim()) || TITLE_PLACEHOLDER;
  const desc = ((_b = seo.seoDescription) == null ? void 0 : _b.trim()) || DESC_PLACEHOLDER;
  const hasTitle = !!((_c = seo.seoTitle) == null ? void 0 : _c.trim());
  const hasDesc = !!((_d = seo.seoDescription) == null ? void 0 : _d.trim());
  return /* @__PURE__ */ jsxs29("div", { className: cn("rounded-xl border border-border bg-surface-raised p-4 space-y-3", className), children: [
    /* @__PURE__ */ jsx35("p", { className: "text-xs font-semibold text-text-secondary uppercase tracking-wider", children: "Google Preview" }),
    /* @__PURE__ */ jsxs29("div", { className: "max-w-lg space-y-1", children: [
      siteName && /* @__PURE__ */ jsx35("p", { className: "text-xs text-text-secondary truncate", children: siteName }),
      /* @__PURE__ */ jsx35("p", { className: "text-xs text-success-fg truncate", children: url }),
      /* @__PURE__ */ jsx35("p", { className: cn("text-base font-medium leading-snug truncate", hasTitle ? "text-[#1a0dab]" : "text-text-disabled italic"), children: title }),
      /* @__PURE__ */ jsx35("p", { className: cn("text-sm leading-relaxed line-clamp-2", hasDesc ? "text-text-secondary" : "text-text-disabled italic"), children: desc })
    ] }),
    /* @__PURE__ */ jsxs29("div", { className: "flex gap-4 pt-1 border-t border-border", children: [
      /* @__PURE__ */ jsxs29("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs29("p", { className: cn("text-sm font-semibold tabular-nums", ((_f = (_e = seo.seoTitle) == null ? void 0 : _e.length) != null ? _f : 0) > 60 ? "text-error" : "text-text-primary"), children: [
          (_h = (_g = seo.seoTitle) == null ? void 0 : _g.length) != null ? _h : 0,
          /* @__PURE__ */ jsx35("span", { className: "text-text-secondary font-normal", children: "/60" })
        ] }),
        /* @__PURE__ */ jsx35("p", { className: "text-xs text-text-secondary", children: "Title" })
      ] }),
      /* @__PURE__ */ jsxs29("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs29("p", { className: cn("text-sm font-semibold tabular-nums", ((_j = (_i = seo.seoDescription) == null ? void 0 : _i.length) != null ? _j : 0) > 160 ? "text-error" : "text-text-primary"), children: [
          (_l = (_k = seo.seoDescription) == null ? void 0 : _k.length) != null ? _l : 0,
          /* @__PURE__ */ jsx35("span", { className: "text-text-secondary font-normal", children: "/160" })
        ] }),
        /* @__PURE__ */ jsx35("p", { className: "text-xs text-text-secondary", children: "Description" })
      ] }),
      /* @__PURE__ */ jsxs29("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx35("p", { className: "text-sm font-semibold text-text-primary tabular-nums", children: (_n = (_m = seo.keywords) == null ? void 0 : _m.length) != null ? _n : 0 }),
        /* @__PURE__ */ jsx35("p", { className: "text-xs text-text-secondary", children: "Keywords" })
      ] })
    ] })
  ] });
}

// modules/domains/common/status/ProcessingStatusIndicator.tsx
import { FontAwesomeIcon as FontAwesomeIcon22 } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faGear, faCheck as faCheck4, faXmark } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx36, jsxs as jsxs30 } from "react/jsx-runtime";
var STATUS_META = {
  UPLOADING: { label: "Uploading", icon: /* @__PURE__ */ jsx36(FontAwesomeIcon22, { icon: faCloudArrowUp }), color: "text-info", pulse: true },
  PROCESSING: { label: "Processing", icon: /* @__PURE__ */ jsx36(FontAwesomeIcon22, { icon: faGear }), color: "text-warning", pulse: true },
  READY: { label: "Ready", icon: /* @__PURE__ */ jsx36(FontAwesomeIcon22, { icon: faCheck4 }), color: "text-success", pulse: false },
  FAILED: { label: "Failed", icon: /* @__PURE__ */ jsx36(FontAwesomeIcon22, { icon: faXmark }), color: "text-error", pulse: false }
};
var sizeMap3 = {
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
  const s = sizeMap3[size];
  return /* @__PURE__ */ jsxs30("div", { className: cn("space-y-1.5", className), role: "status", "aria-label": label != null ? label : meta.label, "aria-live": "polite", children: [
    /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx36(
        "span",
        {
          className: cn(s.icon, meta.color, meta.pulse && "animate-pulse"),
          "aria-hidden": "true",
          children: meta.icon
        }
      ),
      /* @__PURE__ */ jsx36("span", { className: cn(s.text, "font-medium text-text-primary"), children: label != null ? label : meta.label }),
      progress !== void 0 && /* @__PURE__ */ jsxs30("span", { className: cn(s.text, "text-text-secondary ml-auto tabular-nums"), children: [
        Math.round(progress),
        "%"
      ] })
    ] }),
    progress !== void 0 && /* @__PURE__ */ jsx36("div", { className: cn("w-full rounded-full bg-surface-sunken overflow-hidden", s.bar), children: /* @__PURE__ */ jsx36(
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
import { FontAwesomeIcon as FontAwesomeIcon23 } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faGlobe as faGlobe2, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx37, jsxs as jsxs31 } from "react/jsx-runtime";
var statusMeta2 = {
  DRAFT: { label: "Draft", variant: "warning", icon: /* @__PURE__ */ jsx37(FontAwesomeIcon23, { icon: faPenToSquare, className: "w-3 h-3" }) },
  PUBLISHED: { label: "Published", variant: "success", icon: /* @__PURE__ */ jsx37(FontAwesomeIcon23, { icon: faGlobe2, className: "w-3 h-3" }) },
  ARCHIVED: { label: "Archived", variant: "neutral", icon: /* @__PURE__ */ jsx37(FontAwesomeIcon23, { icon: faBoxArchive, className: "w-3 h-3" }) }
};
function PublishStatusBadge({ status, size = "md", showIcon = true, className }) {
  var _a3;
  const meta = (_a3 = statusMeta2[status]) != null ? _a3 : { label: status, variant: "neutral", icon: null };
  return /* @__PURE__ */ jsxs31(Badge, { variant: meta.variant, size, className: cn("gap-1", className), children: [
    showIcon && meta.icon,
    meta.label
  ] });
}

// modules/domains/common/status/VisibilityBadge.tsx
import { FontAwesomeIcon as FontAwesomeIcon24 } from "@fortawesome/react-fontawesome";
import { faEye, faLock as faLock4, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx38, jsxs as jsxs32 } from "react/jsx-runtime";
var visibilityMeta = {
  PUBLIC: { label: "Public", variant: "success", icon: /* @__PURE__ */ jsx38(FontAwesomeIcon24, { icon: faEye, className: "w-3 h-3" }) },
  PRIVATE: { label: "Private", variant: "error", icon: /* @__PURE__ */ jsx38(FontAwesomeIcon24, { icon: faLock4, className: "w-3 h-3" }) },
  UNLISTED: { label: "Unlisted", variant: "neutral", icon: /* @__PURE__ */ jsx38(FontAwesomeIcon24, { icon: faEyeSlash, className: "w-3 h-3" }) }
};
function VisibilityBadge({ visibility, size = "md", showIcon = true, className }) {
  var _a3;
  const meta = (_a3 = visibilityMeta[visibility]) != null ? _a3 : { label: visibility, variant: "neutral", icon: null };
  return /* @__PURE__ */ jsxs32(Badge, { variant: meta.variant, size, className: cn("gap-1", className), children: [
    showIcon && meta.icon,
    meta.label
  ] });
}

// modules/domains/common/subscription/SubscriptionPlanCard.tsx
import { FontAwesomeIcon as FontAwesomeIcon25 } from "@fortawesome/react-fontawesome";
import { faCheck as faCheck5, faStar } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx39, jsxs as jsxs33 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs33(
    "div",
    {
      className: cn(
        "relative flex flex-col rounded-2xl border p-6 transition-shadow",
        highlighted ? "border-primary shadow-md shadow-primary/10" : "border-border shadow-sm hover:shadow-md",
        className
      ),
      children: [
        plan.isPopular && !isCurrent && /* @__PURE__ */ jsxs33("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-fg", children: [
          /* @__PURE__ */ jsx39(FontAwesomeIcon25, { icon: faStar, className: "w-2.5 h-2.5" }),
          "Popular"
        ] }),
        isCurrent && /* @__PURE__ */ jsxs33("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-success px-3 py-0.5 text-xs font-semibold text-white", children: [
          /* @__PURE__ */ jsx39(FontAwesomeIcon25, { icon: faCheck5, className: "w-2.5 h-2.5" }),
          "Current Plan"
        ] }),
        /* @__PURE__ */ jsxs33("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx39("h3", { className: "text-base font-semibold text-text-primary", children: plan.name }),
          plan.description && /* @__PURE__ */ jsx39("p", { className: "mt-1 text-xs text-text-secondary", children: plan.description })
        ] }),
        /* @__PURE__ */ jsxs33("div", { className: "mb-6 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsx39("span", { className: "text-3xl font-bold text-text-primary tracking-tight", children: formattedPrice }),
          /* @__PURE__ */ jsx39("span", { className: "text-sm text-text-secondary", children: INTERVAL_LABEL[interval] })
        ] }),
        plan.features && plan.features.length > 0 && /* @__PURE__ */ jsx39("ul", { className: "mb-6 flex-1 space-y-2", children: plan.features.map((feature) => /* @__PURE__ */ jsxs33("li", { className: "flex items-start gap-2 text-sm text-text-primary", children: [
          /* @__PURE__ */ jsx39(
            FontAwesomeIcon25,
            {
              icon: faCheck5,
              className: "w-3.5 h-3.5 text-success mt-0.5 flex-shrink-0",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx39("span", { children: feature })
        ] }, feature)) }),
        /* @__PURE__ */ jsx39(
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

// modules/domains/common/user/UserAvatar.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
function UserAvatar({ user, size = "md", status, className }) {
  var _a3, _b, _c, _d;
  const name = (_b = (_a3 = user.userProfile) == null ? void 0 : _a3.name) != null ? _b : user.email;
  const src = (_d = (_c = user.userProfile) == null ? void 0 : _c.profilePicture) != null ? _d : null;
  return /* @__PURE__ */ jsx40(Avatar, { src, name, size, status, className });
}

// modules/domains/common/user/UserMenu.tsx
import { FontAwesomeIcon as FontAwesomeIcon26 } from "@fortawesome/react-fontawesome";
import { faChevronDown as faChevronDown6, faUser as faUser4, faGear as faGear2, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx41, jsxs as jsxs34 } from "react/jsx-runtime";
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
    { type: "item", label: "Profile", icon: /* @__PURE__ */ jsx41(FontAwesomeIcon26, { icon: faUser4, className: "w-3.5 h-3.5", "aria-hidden": "true" }) },
    { type: "item", label: "Settings", icon: /* @__PURE__ */ jsx41(FontAwesomeIcon26, { icon: faGear2, className: "w-3.5 h-3.5", "aria-hidden": "true" }) },
    { type: "separator" },
    { type: "item", label: "Sign out", icon: /* @__PURE__ */ jsx41(FontAwesomeIcon26, { icon: faArrowRightFromBracket, className: "w-3.5 h-3.5", "aria-hidden": "true" }), danger: true }
  ];
  const trigger = /* @__PURE__ */ jsxs34(
    Button,
    {
      variant: "ghost",
      size: "sm",
      "aria-label": `User menu for ${displayName}`,
      className: cn("gap-2 px-2"),
      children: [
        /* @__PURE__ */ jsx41(Avatar, { src: avatar, name: displayName, size: "sm" }),
        !onlyAvatar && /* @__PURE__ */ jsxs34("div", { className: "hidden sm:block text-left min-w-0", children: [
          /* @__PURE__ */ jsx41("p", { className: "text-sm font-medium text-text-primary truncate max-w-[8rem]", children: displayName }),
          /* @__PURE__ */ jsx41("p", { className: "text-xs text-text-secondary truncate", children: user.userRole })
        ] }),
        /* @__PURE__ */ jsx41(FontAwesomeIcon26, { icon: faChevronDown6, className: "w-3 h-3 text-text-disabled hidden sm:block", "aria-hidden": "true" })
      ]
    }
  );
  const header = /* @__PURE__ */ jsxs34("div", { className: "px-3 py-2.5", children: [
    /* @__PURE__ */ jsx41("p", { className: "text-sm font-semibold text-text-primary truncate", children: displayName }),
    /* @__PURE__ */ jsx41("p", { className: "text-xs text-text-secondary truncate", children: user.email })
  ] });
  return /* @__PURE__ */ jsx41(DropdownMenu, { trigger, items: defaultItems, header, align });
}

// modules/domains/common/user/UserPreferencesForm.tsx
import { useState as useState20 } from "react";
import { jsx as jsx42, jsxs as jsxs35 } from "react/jsx-runtime";
var ControlledThemeSwitcher = ThemeSwitcher;
function UserPreferencesForm({ initial = {}, onSubmit, error, className }) {
  var _a3, _b, _c, _d, _e, _f;
  const [values, setValues] = useState20({
    theme: (_a3 = initial.theme) != null ? _a3 : "SYSTEM",
    language: (_b = initial.language) != null ? _b : "en",
    emailNotifications: (_c = initial.emailNotifications) != null ? _c : true,
    pushNotifications: (_d = initial.pushNotifications) != null ? _d : true,
    newsletter: (_e = initial.newsletter) != null ? _e : true,
    timezone: (_f = initial.timezone) != null ? _f : "UTC"
  });
  const [loading, setLoading] = useState20(false);
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
  return /* @__PURE__ */ jsxs35(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ jsx42(Button, { type: "submit", loading, children: "Save Preferences" }),
      children: [
        /* @__PURE__ */ jsxs35("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx42("h3", { className: "text-sm font-semibold text-text-primary", children: "Appearance" }),
          /* @__PURE__ */ jsx42(ControlledThemeSwitcher, { value: values.theme, onChange: (theme) => setField("theme", theme) }),
          /* @__PURE__ */ jsx42(LanguageSwitcher, { value: values.language, onChange: (lang) => setField("language", lang) })
        ] }),
        /* @__PURE__ */ jsxs35("div", { className: "space-y-3 pt-2 border-t border-border", children: [
          /* @__PURE__ */ jsx42("h3", { className: "text-sm font-semibold text-text-primary pt-2", children: "Notifications" }),
          /* @__PURE__ */ jsx42(
            Toggle,
            {
              id: "email-notifications",
              label: "Email notifications",
              checked: values.emailNotifications,
              onChange: (checked) => setField("emailNotifications", checked)
            }
          ),
          /* @__PURE__ */ jsx42(
            Toggle,
            {
              id: "push-notifications",
              label: "Push notifications",
              checked: values.pushNotifications,
              onChange: (checked) => setField("pushNotifications", checked)
            }
          ),
          /* @__PURE__ */ jsx42(
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
import { jsx as jsx43 } from "react/jsx-runtime";
var roleMeta = {
  ADMIN: { label: "Admin", variant: "error" },
  AUTHOR: { label: "Author", variant: "primary" },
  USER: { label: "User", variant: "neutral" }
};
function UserRoleBadge({ role, size = "md" }) {
  var _a3;
  const meta = (_a3 = roleMeta[role]) != null ? _a3 : { label: role, variant: "neutral" };
  return /* @__PURE__ */ jsx43(Badge, { variant: meta.variant, size, children: meta.label });
}

// modules/domains/common/user/UserStatusBadge.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
var statusMeta3 = {
  ACTIVE: { label: "Active", variant: "success" },
  INACTIVE: { label: "Inactive", variant: "neutral" },
  BANNED: { label: "Banned", variant: "error" }
};
function UserStatusBadge({ status, size = "md", dot = false }) {
  var _a3;
  const meta = (_a3 = statusMeta3[status]) != null ? _a3 : { label: status, variant: "neutral" };
  return /* @__PURE__ */ jsx44(Badge, { variant: meta.variant, size, dot, children: meta.label });
}

// modules/domains/common/user/UserProfileCard.tsx
import { jsx as jsx45, jsxs as jsxs36 } from "react/jsx-runtime";
function UserProfileCard({ user, actions, className }) {
  var _a3, _b, _c, _d;
  const name = (_b = (_a3 = user.userProfile) == null ? void 0 : _a3.name) != null ? _b : user.email;
  const username = (_c = user.userProfile) == null ? void 0 : _c.username;
  const bio = (_d = user.userProfile) == null ? void 0 : _d.biography;
  return /* @__PURE__ */ jsxs36("div", { className: cn("bg-surface-raised border border-border rounded-xl overflow-hidden", className), children: [
    /* @__PURE__ */ jsx45("div", { className: "h-20 bg-gradient-to-r from-primary-subtle to-secondary/20" }),
    /* @__PURE__ */ jsxs36("div", { className: "px-5 pb-5", children: [
      /* @__PURE__ */ jsxs36("div", { className: "flex items-end justify-between -mt-8 mb-3", children: [
        /* @__PURE__ */ jsx45("div", { className: "ring-4 ring-surface-raised rounded-full", children: /* @__PURE__ */ jsx45(UserAvatar, { user, size: "xl" }) }),
        actions && /* @__PURE__ */ jsx45("div", { className: "flex items-center gap-2 pb-1", children: actions })
      ] }),
      /* @__PURE__ */ jsxs36("div", { className: "space-y-1 mb-3", children: [
        /* @__PURE__ */ jsx45("h3", { className: "text-lg font-bold text-text-primary leading-tight", children: name }),
        username && /* @__PURE__ */ jsxs36("p", { className: "text-sm text-text-secondary", children: [
          "@",
          username
        ] }),
        bio && /* @__PURE__ */ jsx45("p", { className: "text-sm text-text-secondary leading-relaxed pt-1", children: bio })
      ] }),
      /* @__PURE__ */ jsxs36("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsx45(UserRoleBadge, { role: user.userRole }),
        /* @__PURE__ */ jsx45(UserStatusBadge, { status: user.userStatus }),
        /* @__PURE__ */ jsx45("span", { className: "text-xs text-text-secondary truncate", children: user.email })
      ] })
    ] })
  ] });
}

// modules/domains/common/user/UserProfileForm.tsx
import { useState as useState21 } from "react";
import { Fragment as Fragment7, jsx as jsx46, jsxs as jsxs37 } from "react/jsx-runtime";
function UserProfileForm({ initial = {}, onSubmit, onCancel, error, className }) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const [values, setValues] = useState21({
    name: (_a3 = initial.name) != null ? _a3 : null,
    username: (_b = initial.username) != null ? _b : null,
    biography: (_c = initial.biography) != null ? _c : null,
    profilePicture: (_d = initial.profilePicture) != null ? _d : null
  });
  const [errors, setErrors] = useState21({});
  const [loading, setLoading] = useState21(false);
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
  return /* @__PURE__ */ jsxs37(
    Form,
    {
      onSubmit: handleSubmit,
      error,
      className,
      actions: /* @__PURE__ */ jsxs37(Fragment7, { children: [
        onCancel && /* @__PURE__ */ jsx46(Button, { type: "button", variant: "outline", onClick: onCancel, disabled: loading, children: "Cancel" }),
        /* @__PURE__ */ jsx46(Button, { type: "submit", loading, children: "Save Profile" })
      ] }),
      children: [
        /* @__PURE__ */ jsx46(
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
        /* @__PURE__ */ jsx46(
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
        /* @__PURE__ */ jsx46(
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
        /* @__PURE__ */ jsx46(
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

export {
  IdSchema,
  UuidSchema,
  SlugSchema,
  DateSchema,
  NullableDateSchema,
  EmailSchema,
  PasswordSchema,
  SortOrderEnum,
  StatusEnum,
  BaseEntitySchema,
  PaginationSchema,
  ApiSuccessSchema,
  ApiErrorSchema,
  ApiResponseSchema,
  UserRoleEnum,
  UserStatusEnum,
  ThemeEnum,
  LanguageEnum,
  UserPreferencesSchema,
  UserProfileSchema,
  UserSchema,
  SafeUserSchema,
  LoginRequestSchema,
  RegisterRequestSchema,
  ChangePasswordSchema,
  AuthSessionSchema,
  AuthResponseSchema,
  OAuthProviderEnum,
  OAuthCallbackSchema,
  AddressCard,
  AddressForm,
  AddressSelector,
  ChangePasswordForm,
  ForgotPasswordForm,
  LoginForm,
  OAuthButtons,
  RegisterForm,
  SessionExpiredBanner,
  CartBadge,
  PriceDisplay,
  CartItem,
  CartPreview,
  OrderTotalsCard,
  CouponInput,
  CartSummary,
  RevenueBarChart,
  UserActivityLineChart,
  SalesByCategoryDoughnut,
  ProductComparisonRadar,
  RegionalSalesPolar,
  ChatBox,
  DiscountBadge,
  useDirection,
  DirectionProvider,
  LanguageSwitcher,
  CountrySelector,
  GeoPointDisplay,
  LocationPicker,
  CurrencySelector,
  NotificationMenu,
  PaymentStatusBadge,
  PaymentSummaryCard,
  CheckoutSuccessState,
  CreditCardVisual,
  detectBrand,
  CreditCardForm,
  PaymentMethodSelector,
  SavedCardSelector,
  SeoForm,
  SeoPreview,
  ProcessingStatusIndicator,
  PublishStatusBadge,
  VisibilityBadge,
  SubscriptionPlanCard,
  UserAvatar,
  UserMenu,
  UserPreferencesForm,
  UserRoleBadge,
  UserStatusBadge,
  UserProfileCard,
  UserProfileForm
};
