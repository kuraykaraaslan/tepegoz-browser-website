"use client";
import {
  __objRest,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/Input.tsx
import { forwardRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Input = forwardRef(function Input2(_a, ref) {
  var _b = _a, {
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
  const [showPassword, setShowPassword] = useState(false);
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
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "(required)" })
      ] }),
      readOnly && /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs font-normal text-text-disabled", children: "(read-only)" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      prefixIcon && /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-disabled pointer-events-none", children: prefixIcon }),
      /* @__PURE__ */ jsx(
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
      isPassword && !readOnly && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": showPassword ? "Hide password" : "Show password",
          onClick: () => setShowPassword((v) => !v),
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none text-sm",
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: showPassword ? faEyeSlash : faEye, className: "w-3.5 h-3.5" })
        }
      ),
      clearable && value && !readOnly && !isPassword && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": "Clear",
          onClick: onClear,
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none",
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faXmark, className: "w-3 h-3" })
        }
      ),
      suffixIcon && !clearable && !isPassword && /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled pointer-events-none", children: suffixIcon }),
      isNumber && !readOnly && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-0 h-full flex flex-col border-l border-border overflow-hidden rounded-r-md", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Increment",
            onClick: increment,
            tabIndex: -1,
            className: "flex-1 px-2 text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none border-b border-border leading-none flex items-center justify-center",
            children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronUp, className: "w-2 h-2" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Decrement",
            onClick: decrement,
            tabIndex: -1,
            className: "flex-1 px-2 text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none leading-none flex items-center justify-center",
            children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronDown, className: "w-2 h-2" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        hint && !error && !success && /* @__PURE__ */ jsx("p", { id: `${id}-hint`, className: "text-xs text-text-secondary", children: hint }),
        error && /* @__PURE__ */ jsx("p", { id: `${id}-error`, className: "text-xs text-error", role: "alert", children: error }),
        success && !error && /* @__PURE__ */ jsx("p", { id: `${id}-success`, className: "text-xs text-success-fg", children: success })
      ] }),
      showCount && maxLength && /* @__PURE__ */ jsxs("p", { className: cn("text-xs shrink-0", charCount >= maxLength ? "text-error" : "text-text-disabled"), children: [
        charCount,
        "/",
        maxLength
      ] })
    ] })
  ] });
});

// modules/ui/Textarea.tsx
import { forwardRef as forwardRef2 } from "react";
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Textarea = forwardRef2(function Textarea2(_a, ref) {
  var _b = _a, {
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
  return /* @__PURE__ */ jsxs2("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsxs2("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsxs2(Fragment2, { children: [
        /* @__PURE__ */ jsx2("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ jsx2(
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
    hint && !error && /* @__PURE__ */ jsx2("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ jsx2("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
});

// modules/ui/Toggle.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var sizeMap = {
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
  const { track, thumb, on } = sizeMap[size];
  return /* @__PURE__ */ jsxs3(
    "label",
    {
      htmlFor: id,
      className: cn(
        "flex items-start gap-3",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs3("div", { className: "relative shrink-0 mt-0.5", children: [
          /* @__PURE__ */ jsx3(
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
          /* @__PURE__ */ jsx3(
            "div",
            {
              className: cn(
                "rounded-full transition-colors duration-200",
                track,
                checked ? "bg-primary" : "bg-surface-sunken border border-border"
              )
            }
          ),
          /* @__PURE__ */ jsx3(
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
        /* @__PURE__ */ jsxs3("div", { children: [
          /* @__PURE__ */ jsx3("span", { className: "text-sm font-medium text-text-primary", children: label }),
          description && /* @__PURE__ */ jsx3("p", { className: "text-xs text-text-secondary mt-0.5", children: description })
        ] })
      ]
    }
  );
}

// modules/ui/RadioGroup.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs4("fieldset", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsx4("legend", { className: "mb-2 text-sm font-medium text-text-primary", children: legend }),
    /* @__PURE__ */ jsx4(
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
          return /* @__PURE__ */ jsxs4(
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
                /* @__PURE__ */ jsx4(
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
                /* @__PURE__ */ jsxs4("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2", children: [
                    opt.icon && /* @__PURE__ */ jsx4("span", { className: "text-lg leading-none text-text-secondary", children: opt.icon }),
                    /* @__PURE__ */ jsx4("span", { className: "text-sm text-text-primary", children: opt.label })
                  ] }),
                  opt.hint && /* @__PURE__ */ jsx4("p", { className: "mt-0.5 text-xs text-text-secondary", children: opt.hint })
                ] })
              ]
            },
            opt.value
          );
        })
      }
    ),
    error && /* @__PURE__ */ jsx4("p", { className: "mt-1 text-xs text-error", role: "alert", children: error })
  ] });
}

export {
  Input,
  Textarea,
  Toggle,
  RadioGroup
};
