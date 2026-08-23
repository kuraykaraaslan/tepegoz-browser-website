"use client";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/Avatar.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var sizeMap = {
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
  const sizeClass = sizeMap[size];
  const inner = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt: name,
        className: cn(sizeClass, "rounded-full object-cover border border-border shrink-0", className)
      }
    )
  ) : /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs("span", { className: "relative inline-flex shrink-0", children: [
    inner,
    /* @__PURE__ */ jsx(
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
function AvatarGroup({
  avatars,
  max = 4,
  size = "md"
}) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;
  return /* @__PURE__ */ jsxs("div", { className: "flex -space-x-2", "aria-label": `${avatars.length} users`, children: [
    visible.map((a, i) => /* @__PURE__ */ jsx(Avatar, __spreadProps(__spreadValues({}, a), { size, className: "ring-2 ring-surface-base" }), i)),
    overflow > 0 && /* @__PURE__ */ jsxs(
      "span",
      {
        className: cn(
          sizeMap[size],
          "rounded-full bg-surface-sunken text-text-secondary font-semibold text-xs",
          "flex items-center justify-center shrink-0 ring-2 ring-surface-base border border-border select-none"
        ),
        "aria-label": `${overflow} more`,
        children: [
          "+",
          overflow
        ]
      }
    )
  ] });
}

// modules/ui/Badge.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var variantMap = {
  success: "bg-success-subtle text-success-fg",
  error: "bg-error-subtle text-error-fg",
  warning: "bg-warning-subtle text-warning-fg",
  info: "bg-info-subtle text-info-fg",
  neutral: "bg-surface-sunken text-text-secondary",
  primary: "bg-primary-subtle text-primary"
};
var sizeMap2 = {
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
function Badge(_a) {
  var _b = _a, {
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
  return /* @__PURE__ */ jsxs2(
    Tag,
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        variantMap[variant],
        sizeMap2[size],
        className
      )
    }, rest), {
      children: [
        dot && /* @__PURE__ */ jsx2(
          "span",
          {
            className: cn("h-1.5 w-1.5 rounded-full shrink-0", dotColorMap[variant]),
            "aria-hidden": "true"
          }
        ),
        children,
        dismissible && /* @__PURE__ */ jsx2(
          "button",
          {
            type: "button",
            "aria-label": "Remove",
            onClick: onDismiss,
            className: "ml-0.5 leading-none hover:opacity-70 transition-opacity focus-visible:outline-none rounded-full",
            children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: faXmark, className: "w-2.5 h-2.5" })
          }
        )
      ]
    })
  );
}

// modules/ui/Select.tsx
import { forwardRef, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Fragment, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
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
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);
  const searchRef = useRef(null);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const selected = options.find((o) => o.value === value);
  const filtered = searchable && search ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase())) : options;
  useEffect(() => {
    if (!open) {
      setSearch("");
      return;
    }
    if (searchable) setTimeout(() => {
      var _a;
      return (_a = searchRef.current) == null ? void 0 : _a.focus();
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
  return /* @__PURE__ */ jsxs3("div", { ref: containerRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsxs3("label", { id: `${id}-label`, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsxs3(Fragment, { children: [
        /* @__PURE__ */ jsx3("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx3("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3(
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
          (selected == null ? void 0 : selected.icon) && /* @__PURE__ */ jsx3("span", { className: "shrink-0", children: selected.icon }),
          /* @__PURE__ */ jsx3("span", { className: cn("flex-1", !selected && "text-text-disabled"), children: selected ? selected.label : placeholder != null ? placeholder : "Select\u2026" }),
          /* @__PURE__ */ jsx3(FontAwesomeIcon2, { icon: open ? faChevronUp : faChevronDown, className: "w-3 h-3 text-text-disabled", "aria-hidden": "true" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs3("div", { className: "z-20 w-full rounded-md border border-border bg-surface-raised shadow-lg overflow-hidden", children: [
      searchable && /* @__PURE__ */ jsx3("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ jsx3(
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
      /* @__PURE__ */ jsxs3("ul", { role: "listbox", "aria-labelledby": `${id}-label`, className: "py-1 max-h-48 overflow-y-auto", children: [
        placeholder && !search && /* @__PURE__ */ jsx3(
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
        filtered.length === 0 ? /* @__PURE__ */ jsx3("li", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: "No results found." }) : filtered.map((opt) => {
          const active = opt.value === value;
          return /* @__PURE__ */ jsxs3(
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
                opt.icon && /* @__PURE__ */ jsx3("span", { className: "shrink-0", "aria-hidden": "true", children: opt.icon }),
                opt.label,
                active && /* @__PURE__ */ jsx3(FontAwesomeIcon2, { icon: faCheck, className: "ml-auto w-3 h-3 text-primary", "aria-hidden": "true" })
              ]
            },
            opt.value
          );
        })
      ] })
    ] }),
    hint && !error && /* @__PURE__ */ jsx3("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ jsx3("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}
var Select = forwardRef(function Select2(_a, ref) {
  var _b = _a, { id, label, options, placeholder, hint, error, disabled, required, searchable, className } = _b, props = __objRest(_b, ["id", "label", "options", "placeholder", "hint", "error", "disabled", "required", "searchable", "className"]);
  const hasIcons = options.some((o) => o.icon);
  if (hasIcons || searchable) {
    const _a2 = props, { value, onChange } = _a2, rest = __objRest(_a2, ["value", "onChange"]);
    return /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsxs3("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsxs3("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsxs3(Fragment, { children: [
        /* @__PURE__ */ jsx3("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx3("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3(
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
          placeholder && /* @__PURE__ */ jsx3("option", { value: "", children: placeholder }),
          options.map((opt) => /* @__PURE__ */ jsx3("option", { value: opt.value, children: opt.label }, opt.value))
        ]
      })
    ),
    hint && !error && /* @__PURE__ */ jsx3("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ jsx3("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
});

// modules/ui/AlertBanner.tsx
import { useState as useState2 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTriangleExclamation, faCircleXmark, faCircleInfo, faXmark as faXmark2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var variantMap2 = {
  success: { container: "bg-success-subtle border-success text-success-fg", defaultIcon: /* @__PURE__ */ jsx4(FontAwesomeIcon3, { icon: faCircleCheck, className: "w-4 h-4" }) },
  warning: { container: "bg-warning-subtle border-warning text-warning-fg", defaultIcon: /* @__PURE__ */ jsx4(FontAwesomeIcon3, { icon: faTriangleExclamation, className: "w-4 h-4" }) },
  error: { container: "bg-error-subtle border-error text-error-fg", defaultIcon: /* @__PURE__ */ jsx4(FontAwesomeIcon3, { icon: faCircleXmark, className: "w-4 h-4" }) },
  info: { container: "bg-info-subtle border-info text-info-fg", defaultIcon: /* @__PURE__ */ jsx4(FontAwesomeIcon3, { icon: faCircleInfo, className: "w-4 h-4" }) }
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
  const [dismissed, setDismissed] = useState2(false);
  if (dismissed) return null;
  const { container, defaultIcon } = variantMap2[variant];
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      role: "alert",
      className: cn(
        "flex items-start gap-3 rounded-lg border p-4",
        container,
        className
      ),
      children: [
        /* @__PURE__ */ jsx4("span", { "aria-hidden": "true", className: "mt-0.5 shrink-0 font-bold", children: icon != null ? icon : defaultIcon }),
        /* @__PURE__ */ jsxs4("div", { className: "flex-1 text-sm min-w-0", children: [
          title && /* @__PURE__ */ jsx4("p", { className: "font-semibold", children: title }),
          /* @__PURE__ */ jsx4("p", { className: cn(title && "mt-0.5"), children: message }),
          action && /* @__PURE__ */ jsx4("div", { className: "mt-2", children: action.href ? /* @__PURE__ */ jsx4(
            "a",
            {
              href: action.href,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) : /* @__PURE__ */ jsx4(
            "button",
            {
              type: "button",
              onClick: action.onClick,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) })
        ] }),
        dismissible && /* @__PURE__ */ jsx4(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss",
            onClick: () => setDismissed(true),
            className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
            children: /* @__PURE__ */ jsx4(FontAwesomeIcon3, { icon: faXmark2, className: "w-4 h-4" })
          }
        )
      ]
    }
  );
}

// modules/ui/DropdownMenu.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState3 } from "react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function DropdownMenu({
  trigger,
  items,
  header,
  align = "left",
  className
}) {
  const [open, setOpen] = useState3(false);
  const containerRef = useRef2(null);
  useEffect2(() => {
    if (!open) return;
    function onOutside(e) {
      var _a;
      if (!((_a = containerRef.current) == null ? void 0 : _a.contains(e.target))) setOpen(false);
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
  return /* @__PURE__ */ jsxs5("div", { ref: containerRef, className: cn("relative inline-block", className), children: [
    /* @__PURE__ */ jsx5(
      "div",
      {
        onClick: () => setOpen((p) => !p),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        children: trigger
      }
    ),
    open && /* @__PURE__ */ jsxs5(
      "div",
      {
        role: "menu",
        className: cn(
          "absolute z-[60] mt-1 min-w-[10rem] rounded-lg border border-border bg-surface-raised shadow-lg py-1",
          align === "right" ? "right-0" : "left-0"
        ),
        children: [
          header && /* @__PURE__ */ jsx5("div", { className: "border-b border-border mb-1", children: header }),
          items.map((item, i) => {
            if (item.type === "separator") {
              return /* @__PURE__ */ jsx5("div", { role: "separator", className: "my-1 border-t border-border" }, i);
            }
            return /* @__PURE__ */ jsxs5(
              "button",
              {
                role: "menuitem",
                type: "button",
                disabled: item.disabled,
                onClick: () => {
                  var _a;
                  (_a = item.onClick) == null ? void 0 : _a.call(item);
                  setOpen(false);
                },
                className: cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-sm text-left transition-colors",
                  "focus-visible:outline-none focus-visible:bg-surface-overlay",
                  item.danger ? "text-error hover:bg-error-subtle" : "text-text-primary hover:bg-surface-overlay",
                  item.disabled && "opacity-50 cursor-not-allowed"
                ),
                children: [
                  item.icon && /* @__PURE__ */ jsx5("span", { "aria-hidden": "true", children: item.icon }),
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

// modules/ui/TagInput.tsx
import { useRef as useRef3, useState as useState4 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import { faXmark as faXmark3 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
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
  const [input, setInput] = useState4("");
  const [editingIdx, setEditingIdx] = useState4(null);
  const [editValue, setEditValue] = useState4("");
  const inputRef = useRef3(null);
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
  return /* @__PURE__ */ jsxs6("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsx6("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ jsxs6(
      "div",
      {
        onClick: () => {
          var _a;
          return (_a = inputRef.current) == null ? void 0 : _a.focus();
        },
        className: cn(
          "flex flex-wrap gap-1.5 min-h-10 w-full rounded-md border px-3 py-2 transition-colors cursor-text",
          "focus-within:ring-2 focus-within:ring-border-focus focus-within:border-border-focus",
          disabled ? "opacity-50 cursor-not-allowed bg-surface-sunken border-border" : "bg-surface-base border-border",
          error && "border-error ring-1 ring-error bg-error-subtle"
        ),
        children: [
          value.map(
            (tag, i) => editingIdx === i ? /* @__PURE__ */ jsx6(
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
            ) : /* @__PURE__ */ jsxs6(
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
                  !disabled && /* @__PURE__ */ jsx6(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        removeTag(i);
                      },
                      "aria-label": `Remove ${tag}`,
                      className: "hover:opacity-70 focus-visible:outline-none rounded-full",
                      children: /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faXmark3, className: "w-2.5 h-2.5" })
                    }
                  )
                ]
              },
              i
            )
          ),
          !disabled && /* @__PURE__ */ jsx6(
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
    hint && !error && /* @__PURE__ */ jsx6("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    !hint && !error && value.length > 0 && /* @__PURE__ */ jsx6("p", { className: "text-xs text-text-disabled", children: "Double-click a tag to edit it" }),
    error && /* @__PURE__ */ jsx6("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

export {
  Avatar,
  AvatarGroup,
  Badge,
  Select,
  AlertBanner,
  DropdownMenu,
  TagInput
};
