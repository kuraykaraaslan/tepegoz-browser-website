"use client";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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
function Button(_a) {
  var _b = _a, {
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
  return /* @__PURE__ */ jsxs(
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
        loading && /* @__PURE__ */ jsx("span", { className: "animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full shrink-0", "aria-hidden": "true" }),
        !loading && iconLeft && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "shrink-0", children: iconLeft }),
        children,
        !loading && iconRight && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "shrink-0", children: iconRight })
      ]
    })
  );
}

export {
  Button
};
