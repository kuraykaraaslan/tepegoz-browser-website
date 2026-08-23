"use client";
import {
  SkeletonCard,
  SkeletonTableRow,
  isFocusTrapTopLayer,
  useAsync,
  useFilter,
  useFocusTrap,
  useLoadMore
} from "./chunk-XA7J6PVJ.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/BrandLogo.tsx
import { jsx } from "react/jsx-runtime";
function BrandLogo({ children, size = "md", className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "flex items-center justify-center rounded-2xl bg-primary text-primary-fg font-bold shadow-sm",
        size === "sm" && "h-8 w-8 text-sm",
        size === "md" && "h-12 w-12 text-lg",
        size === "lg" && "h-16 w-16 text-2xl",
        size === "xl" && "h-20 w-20 text-3xl",
        size === "2xl" && "h-24 w-24 text-4xl",
        className
      ),
      children
    }
  );
}

// modules/ui/Checkbox.tsx
import { useEffect, useRef } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Checkbox(_a) {
  var _b = _a, {
    id,
    label,
    hint,
    error,
    disabled,
    indeterminate,
    className
  } = _b, props = __objRest(_b, [
    "id",
    "label",
    "hint",
    "error",
    "disabled",
    "indeterminate",
    "className"
  ]);
  const ref = useRef(null);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-start gap-3", className), children: [
    /* @__PURE__ */ jsx2(
      "input",
      __spreadValues({
        ref,
        id,
        type: "checkbox",
        disabled,
        "aria-describedby": describedBy,
        "aria-invalid": !!error,
        "aria-checked": indeterminate ? "mixed" : void 0,
        "data-testid": `checkbox-${id}`,
        className: cn(
          "mt-0.5 h-4 w-4 rounded border-border text-primary",
          "focus-visible:ring-2 focus-visible:ring-border-focus",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-error"
        )
      }, props)
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx2("label", { htmlFor: id, className: cn("text-sm font-medium", disabled ? "text-text-disabled" : "text-text-primary"), children: label }),
      hint && !error && /* @__PURE__ */ jsx2("p", { id: hintId, className: "text-xs text-text-secondary mt-0.5", children: hint }),
      error && /* @__PURE__ */ jsx2("p", { id: errorId, className: "text-xs text-error mt-0.5", role: "alert", children: error })
    ] })
  ] });
}

// modules/ui/FileInput/index.tsx
import { useRef as useRef2, useState, useEffect as useEffect2, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faXmark } from "@fortawesome/free-solid-svg-icons";

// modules/ui/FileInput/types.ts
var DEFAULT_MESSAGES = {
  invalidSize: (limit) => `File exceeds ${limit} limit`,
  invalidType: "File type not allowed",
  tooMany: (max) => `Too many files \u2014 limit is ${max}`,
  uploadFailed: "Upload failed. Please try again.",
  uploadSuccess: "Files uploaded successfully."
};

// modules/ui/FileInput/index.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function matchesAccept(file, accept) {
  if (!accept) return true;
  const patterns = accept.split(",").map((p) => p.trim().toLowerCase()).filter(Boolean);
  if (patterns.length === 0) return true;
  const name = file.name.toLowerCase();
  const mime = (file.type || "").toLowerCase();
  return patterns.some((p) => {
    if (p.startsWith(".")) return name.endsWith(p);
    if (p.endsWith("/*")) {
      const prefix = p.slice(0, -1);
      return mime.startsWith(prefix);
    }
    return mime === p;
  });
}
function FileInput({
  id,
  label,
  hint,
  multiple = false,
  accept,
  maxSizeBytes,
  maxFiles,
  allowedTypes,
  disabled,
  required,
  name,
  enablePaste = false,
  onFiles,
  onUpload,
  uploadLabel = "Upload",
  className,
  messages
}) {
  const inputRef = useRef2(null);
  const rootRef = useRef2(null);
  const [entries, setEntries] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [uploadState, setUploadState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [globalError, setGlobalError] = useState("");
  const isDisabled = disabled || uploadState === "uploading";
  const msg = __spreadValues(__spreadValues({}, DEFAULT_MESSAGES), messages);
  const validate = useCallback(
    (file) => {
      if (maxSizeBytes && file.size > maxSizeBytes) {
        return msg.invalidSize(formatBytes(maxSizeBytes));
      }
      if (allowedTypes && allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
        return msg.invalidType;
      }
      if (accept && !matchesAccept(file, accept)) {
        return msg.invalidType;
      }
      return void 0;
    },
    [maxSizeBytes, allowedTypes, accept, msg]
  );
  const addFiles = useCallback(
    (files) => {
      if (!files) return;
      const arr = Array.from(files);
      if (arr.length === 0) return;
      const newEntries = arr.map((file) => ({
        file,
        error: validate(file)
      }));
      setEntries((prev) => {
        const combined = multiple ? [...prev, ...newEntries] : newEntries;
        if (maxFiles && combined.length > maxFiles) {
          setGlobalError(msg.tooMany(maxFiles));
          return combined.slice(0, maxFiles);
        }
        setGlobalError("");
        return combined;
      });
      const valid = newEntries.filter((e) => !e.error).map((e) => e.file);
      if (valid.length > 0) onFiles == null ? void 0 : onFiles(valid);
      setUploadState("idle");
    },
    [multiple, validate, maxFiles, msg, onFiles]
  );
  function removeEntry(i) {
    setEntries((prev) => prev.filter((_, idx) => idx !== i));
    if (inputRef.current) inputRef.current.value = "";
    setGlobalError("");
  }
  async function handleUpload() {
    if (!onUpload) return;
    const validFiles = entries.filter((e) => !e.error).map((e) => e.file);
    if (validFiles.length === 0) return;
    setUploadState("uploading");
    setErrorMsg("");
    try {
      await onUpload(validFiles);
      setUploadState("success");
      setEntries([]);
      if (inputRef.current) inputRef.current.value = "";
    } catch (e) {
      setUploadState("error");
      setErrorMsg(e instanceof Error ? e.message : msg.uploadFailed);
    }
  }
  useEffect2(() => {
    if (!enablePaste || isDisabled) return;
    function onPaste(ev) {
      var _a;
      const root = rootRef.current;
      if (!root) return;
      const active = document.activeElement;
      const inside = active && (root === active || root.contains(active));
      if (!inside) return;
      const items = (_a = ev.clipboardData) == null ? void 0 : _a.items;
      if (!items || items.length === 0) return;
      const files = [];
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        if (it.kind === "file") {
          const f = it.getAsFile();
          if (f) {
            const named = f.name && f.name !== "image.png" ? f : new File([f], `pasted-${Date.now()}.${(f.type.split("/")[1] || "bin").replace("+xml", "")}`, {
              type: f.type,
              lastModified: Date.now()
            });
            files.push(named);
          }
        }
      }
      if (files.length > 0) {
        ev.preventDefault();
        addFiles(files);
      }
    }
    document.addEventListener("paste", onPaste);
    return () => document.removeEventListener("paste", onPaste);
  }, [enablePaste, isDisabled, addFiles]);
  const showError = globalError || (uploadState === "error" ? errorMsg : "");
  return /* @__PURE__ */ jsxs2("div", { ref: rootRef, className: cn("space-y-2", className), tabIndex: enablePaste ? -1 : void 0, children: [
    label && /* @__PURE__ */ jsxs2("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsx3("span", { className: "text-error", children: " *" })
    ] }),
    /* @__PURE__ */ jsxs2(
      "div",
      {
        className: cn(
          "relative rounded-lg border-2 border-dashed border-border bg-surface-base transition-colors",
          "flex flex-col items-center justify-center gap-2 px-6 py-8 text-center",
          dragging && "border-primary bg-primary-subtle",
          isDisabled && "opacity-50 cursor-not-allowed"
        ),
        onDragOver: (e) => {
          e.preventDefault();
          if (!isDisabled) setDragging(true);
        },
        onDragLeave: () => setDragging(false),
        onDrop: (e) => {
          e.preventDefault();
          setDragging(false);
          if (!isDisabled) addFiles(e.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ jsx3(FontAwesomeIcon, { icon: faFolderOpen, className: "w-8 h-8 text-text-disabled", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs2("p", { className: "text-sm text-text-secondary", children: [
            "Drag & drop files here, or",
            " ",
            /* @__PURE__ */ jsx3(
              "button",
              {
                type: "button",
                disabled: isDisabled,
                onClick: () => {
                  var _a;
                  return (_a = inputRef.current) == null ? void 0 : _a.click();
                },
                className: "text-primary underline underline-offset-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded disabled:cursor-not-allowed",
                children: "browse"
              }
            ),
            enablePaste && /* @__PURE__ */ jsxs2(Fragment, { children: [
              " ",
              "or paste"
            ] })
          ] }),
          hint && /* @__PURE__ */ jsx3("p", { className: "text-xs text-text-disabled", children: hint }),
          /* @__PURE__ */ jsx3(
            "input",
            {
              ref: inputRef,
              id,
              name,
              type: "file",
              multiple,
              accept,
              disabled: isDisabled,
              required,
              className: "sr-only",
              onChange: (e) => addFiles(e.target.files)
            }
          )
        ]
      }
    ),
    entries.length > 0 && /* @__PURE__ */ jsx3("ul", { className: "space-y-1.5", "aria-label": "Selected files", children: entries.map((entry, i) => /* @__PURE__ */ jsxs2(
      "li",
      {
        className: cn(
          "flex items-center gap-3 rounded-md border px-3 py-2 text-sm",
          entry.error ? "border-error bg-error-subtle text-error-fg" : "border-border bg-surface-raised text-text-primary"
        ),
        children: [
          /* @__PURE__ */ jsxs2("span", { className: "flex-1 truncate min-w-0", children: [
            /* @__PURE__ */ jsx3("span", { className: "font-medium", children: entry.file.name }),
            /* @__PURE__ */ jsx3("span", { className: "ml-2 text-xs text-text-secondary", children: formatBytes(entry.file.size) })
          ] }),
          entry.error && /* @__PURE__ */ jsx3("span", { className: "text-xs text-error shrink-0", children: entry.error }),
          /* @__PURE__ */ jsx3(
            "button",
            {
              type: "button",
              "aria-label": `Remove ${entry.file.name}`,
              onClick: () => removeEntry(i),
              className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: /* @__PURE__ */ jsx3(FontAwesomeIcon, { icon: faXmark, className: "w-3 h-3" })
            }
          )
        ]
      },
      i
    )) }),
    onUpload && entries.length > 0 && /* @__PURE__ */ jsx3("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx3(
      "button",
      {
        type: "button",
        onClick: handleUpload,
        disabled: uploadState === "uploading",
        className: cn(
          "rounded-md px-4 py-2 text-sm font-medium text-primary-fg bg-primary transition-colors",
          "hover:bg-primary-hover active:bg-primary-active",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        ),
        children: uploadState === "uploading" ? "Uploading\u2026" : uploadLabel
      }
    ) }),
    showError && /* @__PURE__ */ jsx3("p", { role: "alert", className: "text-sm text-error", children: showError }),
    uploadState === "success" && !showError && /* @__PURE__ */ jsx3("p", { role: "status", className: "text-sm text-success-fg", children: msg.uploadSuccess })
  ] });
}

// modules/ui/StarRating.tsx
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useState as useState2 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var sizeClasses = {
  sm: "w-3.5 h-3.5",
  md: "w-5 h-5",
  lg: "w-7 h-7"
};
var gapClasses = {
  sm: "gap-0.5",
  md: "gap-1",
  lg: "gap-1.5"
};
var TOTAL_STARS = 5;
function clampValue(value) {
  if (Number.isNaN(value)) return 0;
  if (value < 0) return 0;
  if (value > TOTAL_STARS) return TOTAL_STARS;
  return value;
}
function StarRating({
  value,
  size = "md",
  readonly = true,
  onChange,
  "aria-label": ariaLabel,
  caption,
  className
}) {
  const safeValue = clampValue(value);
  const [hoverValue, setHoverValue] = useState2(null);
  const isInteractive = !readonly && typeof onChange === "function";
  const displayValue = isInteractive && hoverValue !== null ? hoverValue : safeValue;
  const labelText = ariaLabel != null ? ariaLabel : `${safeValue.toFixed(1)} out of ${TOTAL_STARS} stars`;
  const starClass = sizeClasses[size];
  if (!isInteractive) {
    return /* @__PURE__ */ jsxs3(
      "span",
      {
        className: cn("inline-flex items-center", gapClasses[size], className),
        role: "img",
        "aria-label": labelText,
        children: [
          Array.from({ length: TOTAL_STARS }, (_, i) => {
            const starIndex = i + 1;
            const filled = displayValue >= starIndex;
            const half = !filled && displayValue >= starIndex - 0.5;
            return /* @__PURE__ */ jsx4(
              FontAwesomeIcon2,
              {
                icon: filled ? faStar : half ? faStarHalfStroke : faStarRegular,
                className: cn(starClass, filled || half ? "text-warning" : "text-text-disabled"),
                "aria-hidden": "true"
              },
              starIndex
            );
          }),
          caption && /* @__PURE__ */ jsx4("span", { className: "ml-2 text-sm text-text-secondary", children: caption })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs3(
    "span",
    {
      role: "radiogroup",
      "aria-label": ariaLabel != null ? ariaLabel : "Rating",
      className: cn("inline-flex items-center", gapClasses[size], className),
      onMouseLeave: () => setHoverValue(null),
      children: [
        Array.from({ length: TOTAL_STARS }, (_, i) => {
          const starIndex = i + 1;
          const filled = displayValue >= starIndex;
          const checked = safeValue === starIndex;
          return /* @__PURE__ */ jsx4(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": checked,
              "aria-label": `${starIndex} ${starIndex === 1 ? "star" : "stars"}`,
              onClick: () => onChange == null ? void 0 : onChange(starIndex),
              onMouseEnter: () => setHoverValue(starIndex),
              onFocus: () => setHoverValue(starIndex),
              onBlur: () => setHoverValue(null),
              className: cn(
                "rounded-sm transition-colors p-0.5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              ),
              children: /* @__PURE__ */ jsx4(
                FontAwesomeIcon2,
                {
                  icon: filled ? faStar : faStarRegular,
                  className: cn(starClass, filled ? "text-warning" : "text-text-disabled"),
                  "aria-hidden": "true"
                }
              )
            },
            starIndex
          );
        }),
        caption && /* @__PURE__ */ jsx4("span", { className: "ml-2 text-sm text-text-secondary", children: caption })
      ]
    }
  );
}

// modules/ui/StatCard.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function StatCard({ label, value, accent, className }) {
  return /* @__PURE__ */ jsxs4("div", { className: cn("bg-surface-raised border border-border rounded-xl px-5 py-4 flex flex-col gap-1", className), children: [
    /* @__PURE__ */ jsx5("span", { className: cn("text-2xl font-black tabular-nums", accent != null ? accent : "text-text-primary"), children: value }),
    /* @__PURE__ */ jsx5("span", { className: "text-xs text-text-secondary", children: label })
  ] });
}

// modules/ui/ButtonGroup.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var variantClasses = {
  primary: {
    base: "text-primary-fg",
    active: "bg-primary",
    inactive: "bg-primary/20 hover:bg-primary/40"
  },
  secondary: {
    base: "text-secondary-fg",
    active: "bg-secondary",
    inactive: "bg-secondary/20 hover:bg-secondary/40"
  },
  outline: {
    base: "border-y border-border text-text-primary",
    active: "bg-surface-overlay font-semibold",
    inactive: "bg-surface-base hover:bg-surface-overlay"
  },
  ghost: {
    base: "text-text-primary",
    active: "bg-surface-overlay font-semibold",
    inactive: "hover:bg-surface-overlay"
  }
};
var sizeClasses2 = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base"
};
function ButtonGroup({
  items,
  value,
  onChange,
  variant = "outline",
  size = "md",
  className
}) {
  const v = variantClasses[variant];
  return /* @__PURE__ */ jsx6(
    "div",
    {
      role: "group",
      className: cn(
        "inline-flex rounded-md overflow-hidden",
        variant === "outline" && "border border-border divide-x divide-border",
        className
      ),
      children: items.map((item, i) => {
        const active = item.value === value;
        return /* @__PURE__ */ jsx6(
          "button",
          {
            type: "button",
            disabled: item.disabled,
            "aria-pressed": active,
            onClick: () => onChange(item.value),
            className: cn(
              "font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border-focus",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              v.base,
              active ? v.active : v.inactive,
              sizeClasses2[size],
              i === 0 && variant !== "outline" && "rounded-l-md",
              i === items.length - 1 && variant !== "outline" && "rounded-r-md"
            ),
            children: item.label
          },
          item.value
        );
      })
    }
  );
}

// modules/ui/CheckboxGroup.tsx
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function CheckboxGroup({
  legend,
  options,
  selected,
  onChange,
  disabled,
  error,
  className
}) {
  function toggle(value, checked) {
    onChange(checked ? [...selected, value] : selected.filter((s) => s !== value));
  }
  return /* @__PURE__ */ jsxs5("fieldset", { className: cn("space-y-2", className), children: [
    /* @__PURE__ */ jsx7("legend", { className: "text-sm font-medium text-text-primary mb-2", children: legend }),
    /* @__PURE__ */ jsx7("div", { className: "flex flex-wrap gap-2", children: options.map(({ value, label }) => {
      const isSelected = selected.includes(value);
      return /* @__PURE__ */ jsxs5(
        "label",
        {
          className: cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-colors",
            "focus-within:ring-2 focus-within:ring-border-focus",
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            isSelected ? "bg-primary-subtle border-primary text-primary" : "bg-surface-base border-border text-text-primary hover:bg-surface-overlay"
          ),
          children: [
            /* @__PURE__ */ jsx7(
              "input",
              {
                type: "checkbox",
                checked: isSelected,
                disabled,
                onChange: (e) => toggle(value, e.target.checked),
                "data-testid": `checkboxgroup-${value}`,
                className: "sr-only"
              }
            ),
            isSelected && /* @__PURE__ */ jsx7(FontAwesomeIcon3, { icon: faCheck, className: "w-3 h-3", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx7("span", { children: label })
          ]
        },
        value
      );
    }) }),
    error && /* @__PURE__ */ jsx7("p", { className: "text-xs text-error mt-1", role: "alert", children: error })
  ] });
}

// modules/ui/ComboBox/index.tsx
import { useEffect as useEffect4, useMemo, useRef as useRef4, useState as useState4 } from "react";

// modules/ui/ComboBox/parts/Trigger.tsx
import { forwardRef } from "react";
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faXmark as faXmark2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var Trigger = forwardRef(function Trigger2({
  id,
  inputId,
  labelId,
  listboxId,
  describedBy,
  value,
  placeholder,
  disabled,
  required,
  error,
  clearable,
  open,
  highlightedIndex,
  showClear,
  onFocus,
  onChange,
  onKeyDown,
  onClick,
  onClear
}, ref) {
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      role: "combobox",
      "aria-expanded": open,
      "aria-haspopup": "listbox",
      "aria-controls": listboxId,
      "aria-labelledby": labelId,
      "aria-disabled": disabled,
      "aria-invalid": !!error,
      className: cn(
        "flex min-h-10 w-full items-center gap-2 rounded-md border bg-surface-base px-3 py-1.5 transition-colors",
        "focus-within:ring-2 focus-within:ring-border-focus",
        error ? "border-error ring-1 ring-error bg-error-subtle" : "border-border",
        disabled && "cursor-not-allowed bg-surface-sunken opacity-50"
      ),
      onClick,
      children: [
        /* @__PURE__ */ jsx8(
          "input",
          {
            ref,
            id: inputId,
            type: "text",
            role: "searchbox",
            disabled,
            required,
            value,
            placeholder,
            "aria-describedby": describedBy,
            "aria-autocomplete": "list",
            "aria-activedescendant": highlightedIndex >= 0 ? `${id}-option-${highlightedIndex}` : void 0,
            autoComplete: "off",
            className: cn(
              "w-full bg-transparent text-sm text-text-primary placeholder:text-text-disabled",
              "outline-none"
            ),
            onFocus,
            onChange: (event) => onChange(event.target.value),
            onKeyDown
          }
        ),
        clearable && showClear && !disabled && /* @__PURE__ */ jsx8(
          "button",
          {
            type: "button",
            "aria-label": "Clear selection",
            onClick: onClear,
            className: "rounded px-1 text-text-disabled transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            children: /* @__PURE__ */ jsx8(FontAwesomeIcon4, { icon: faXmark2, className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ jsx8(
          FontAwesomeIcon4,
          {
            "aria-hidden": "true",
            icon: open ? faChevronUp : faChevronDown,
            className: "h-3 w-3 select-none text-text-disabled"
          }
        )
      ]
    }
  );
});

// modules/ui/ComboBox/parts/Listbox.tsx
import { useEffect as useEffect3, useRef as useRef3, useState as useState3 } from "react";
import { Fragment as Fragment2, jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var ROW_HEIGHT = 36;
var OVERSCAN = 4;
var DEFAULT_THRESHOLD = 50;
function Listbox({
  id,
  listboxId,
  options,
  selectedValue,
  highlightedIndex,
  loading,
  loadingMore,
  noResultsText,
  virtualize,
  sentinelRef,
  onHighlight,
  onSelect
}) {
  const scrollRef = useRef3(null);
  const [scrollTop, setScrollTop] = useState3(0);
  const threshold = typeof virtualize === "number" ? virtualize : virtualize === true ? 0 : DEFAULT_THRESHOLD;
  const windowed = options.length > threshold;
  useEffect3(() => {
    if (highlightedIndex < 0 || !scrollRef.current) return;
    const top = highlightedIndex * ROW_HEIGHT;
    const bottom = top + ROW_HEIGHT;
    const el = scrollRef.current;
    if (top < el.scrollTop) el.scrollTop = top;
    else if (bottom > el.scrollTop + el.clientHeight) el.scrollTop = bottom - el.clientHeight;
  }, [highlightedIndex]);
  let visibleStart = 0;
  let visibleEnd = options.length;
  if (windowed) {
    const containerHeight = 240;
    visibleStart = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);
    visibleEnd = Math.min(
      options.length,
      Math.ceil((scrollTop + containerHeight) / ROW_HEIGHT) + OVERSCAN
    );
  }
  const topPad = windowed ? visibleStart * ROW_HEIGHT : 0;
  const bottomPad = windowed ? (options.length - visibleEnd) * ROW_HEIGHT : 0;
  return /* @__PURE__ */ jsx9(
    "ul",
    {
      ref: scrollRef,
      id: listboxId,
      role: "listbox",
      "data-combobox-list": true,
      onScroll: windowed ? (e) => setScrollTop(e.target.scrollTop) : void 0,
      className: "z-20 max-h-60 w-full overflow-y-auto rounded-md border border-border bg-surface-raised py-1 shadow-lg",
      children: loading ? (
        // Skeleton rows while async search is pending.
        /* @__PURE__ */ jsx9(Fragment2, { children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsx9("li", { className: "px-3 py-2", "aria-hidden": "true", children: /* @__PURE__ */ jsx9("div", { className: "h-3 w-full animate-pulse rounded bg-surface-overlay" }) }, `sk-${i}`)) })
      ) : options.length === 0 ? /* @__PURE__ */ jsx9("li", { className: "px-3 py-3 text-sm text-text-secondary", children: noResultsText }) : /* @__PURE__ */ jsxs7(Fragment2, { children: [
        topPad > 0 && /* @__PURE__ */ jsx9("li", { "aria-hidden": "true", style: { height: topPad } }),
        options.slice(visibleStart, visibleEnd).map((option, sliceIdx) => {
          const index = visibleStart + sliceIdx;
          const isSelected = option.value === selectedValue;
          const isHighlighted = index === highlightedIndex;
          return /* @__PURE__ */ jsx9(
            "li",
            {
              id: `${id}-option-${index}`,
              role: "option",
              "aria-selected": isSelected,
              children: /* @__PURE__ */ jsxs7(
                "button",
                {
                  type: "button",
                  disabled: option.disabled,
                  className: cn(
                    "flex w-full items-start gap-2 px-3 py-2 text-left text-sm transition-colors",
                    "focus-visible:outline-none",
                    isHighlighted ? "bg-surface-overlay" : "hover:bg-surface-overlay",
                    isSelected && "font-medium text-primary",
                    option.disabled && "cursor-not-allowed opacity-50"
                  ),
                  onMouseEnter: () => onHighlight(index),
                  onMouseDown: (event) => event.preventDefault(),
                  onClick: () => onSelect(option),
                  children: [
                    option.icon && /* @__PURE__ */ jsx9("span", { className: "mt-0.5 shrink-0", "aria-hidden": "true", children: option.icon }),
                    /* @__PURE__ */ jsxs7("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsx9("span", { className: "block truncate", children: option.label }),
                      option.description && /* @__PURE__ */ jsx9("span", { className: "block truncate text-xs text-text-secondary", children: option.description })
                    ] })
                  ]
                }
              )
            },
            option.value
          );
        }),
        bottomPad > 0 && /* @__PURE__ */ jsx9("li", { "aria-hidden": "true", style: { height: bottomPad } }),
        sentinelRef && /* @__PURE__ */ jsx9("li", { ref: sentinelRef, "aria-hidden": "true", "data-combobox-sentinel": true, className: "h-1" }),
        loadingMore && /* @__PURE__ */ jsx9("li", { className: "px-3 py-2 text-xs text-text-secondary", "aria-live": "polite", children: "Loading more\u2026" })
      ] })
    }
  );
}

// modules/ui/ComboBox/index.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function ComboBox({
  id,
  label,
  options,
  value,
  onChange,
  onSearch,
  onLoadMore,
  placeholder = "Search or select...",
  hint,
  error,
  disabled,
  required,
  clearable = true,
  noResultsText = "No results found.",
  className,
  debounceMs = 300,
  virtualize = false
}) {
  var _a;
  const rootRef = useRef4(null);
  const inputRef = useRef4(null);
  const sentinelRef = useRef4(null);
  const [open, setOpen] = useState4(false);
  const [query, setQuery] = useState4("");
  const [highlightedIndex, setHighlightedIndex] = useState4(-1);
  const [internalValue, setInternalValue] = useState4(value != null ? value : "");
  const selectedValue = value !== void 0 ? value : internalValue;
  const { results: asyncResults, loading, appendResults } = useAsync(
    open && !!onSearch,
    query,
    onSearch,
    debounceMs
  );
  const loadingMore = useLoadMore(open, sentinelRef, onLoadMore, appendResults);
  const sourceOptions = asyncResults != null ? asyncResults : options;
  const selectedOption = useMemo(
    () => {
      var _a2;
      return (_a2 = sourceOptions.find((opt) => opt.value === selectedValue)) != null ? _a2 : options.find((opt) => opt.value === selectedValue);
    },
    [options, selectedValue, sourceOptions]
  );
  const localFiltered = useFilter(sourceOptions, query);
  const filteredOptions = onSearch ? sourceOptions : localFiltered;
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const listboxId = `${id}-listbox`;
  const labelId = `${id}-label`;
  const inputId = `${id}-input`;
  useEffect4(() => {
    var _a2;
    if (!open) {
      setQuery((_a2 = selectedOption == null ? void 0 : selectedOption.label) != null ? _a2 : "");
      setHighlightedIndex(-1);
    }
  }, [open, selectedOption == null ? void 0 : selectedOption.label]);
  useEffect4(() => {
    function handleOutsideClick(event) {
      if (!rootRef.current || rootRef.current.contains(event.target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  function commitValue(next) {
    if (value === void 0) setInternalValue(next);
    onChange == null ? void 0 : onChange(next);
  }
  function handleSelect(option) {
    if (option.disabled) return;
    commitValue(option.value);
    setQuery(option.label);
    setOpen(false);
    setHighlightedIndex(-1);
  }
  function handleClear(event) {
    var _a2;
    event.stopPropagation();
    if (disabled) return;
    commitValue("");
    setQuery("");
    setOpen(false);
    setHighlightedIndex(-1);
    (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
  }
  function moveHighlight(direction) {
    var _a2;
    if (filteredOptions.length === 0) return;
    let idx = highlightedIndex;
    for (let i = 0; i < filteredOptions.length; i += 1) {
      idx = (idx + direction + filteredOptions.length) % filteredOptions.length;
      if (!((_a2 = filteredOptions[idx]) == null ? void 0 : _a2.disabled)) {
        setHighlightedIndex(idx);
        break;
      }
    }
  }
  function jumpHighlight(target) {
    var _a2, _b;
    if (filteredOptions.length === 0) return;
    if (target === "first") {
      for (let i = 0; i < filteredOptions.length; i += 1) {
        if (!((_a2 = filteredOptions[i]) == null ? void 0 : _a2.disabled)) {
          setHighlightedIndex(i);
          return;
        }
      }
    } else {
      for (let i = filteredOptions.length - 1; i >= 0; i -= 1) {
        if (!((_b = filteredOptions[i]) == null ? void 0 : _b.disabled)) {
          setHighlightedIndex(i);
          return;
        }
      }
    }
  }
  function handleKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) setOpen(true);
      moveHighlight(1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) setOpen(true);
      moveHighlight(-1);
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      if (!open) setOpen(true);
      jumpHighlight("first");
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      if (!open) setOpen(true);
      jumpHighlight("last");
      return;
    }
    if (event.key === "Enter") {
      if (!open || highlightedIndex < 0) return;
      event.preventDefault();
      const opt = filteredOptions[highlightedIndex];
      if (opt) handleSelect(opt);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      return;
    }
    if (event.key === "Tab") setOpen(false);
  }
  return /* @__PURE__ */ jsxs8("div", { ref: rootRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsxs8("label", { id: labelId, htmlFor: inputId, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsx10("span", { className: "ml-1 text-error", "aria-hidden": "true", children: "*" })
    ] }),
    /* @__PURE__ */ jsx10(
      Trigger,
      {
        ref: inputRef,
        id,
        inputId,
        labelId,
        listboxId,
        describedBy,
        value: open ? query : (_a = selectedOption == null ? void 0 : selectedOption.label) != null ? _a : query,
        placeholder,
        disabled,
        required,
        error,
        clearable,
        open,
        highlightedIndex,
        showClear: !!selectedValue,
        onFocus: () => {
          if (!disabled) setOpen(true);
        },
        onChange: (next) => {
          setQuery(next);
          setOpen(true);
          setHighlightedIndex(-1);
        },
        onKeyDown: handleKeyDown,
        onClick: () => {
          var _a2;
          if (disabled) return;
          (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
          setOpen(true);
        },
        onClear: handleClear
      }
    ),
    open && /* @__PURE__ */ jsx10(
      Listbox,
      {
        id,
        listboxId,
        options: filteredOptions,
        selectedValue,
        highlightedIndex,
        loading,
        loadingMore,
        noResultsText,
        virtualize,
        sentinelRef: onLoadMore ? sentinelRef : void 0,
        onHighlight: setHighlightedIndex,
        onSelect: handleSelect
      }
    ),
    hint && !error && /* @__PURE__ */ jsx10("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ jsx10("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/ui/ContentScoreBar.tsx
import { useMemo as useMemo2 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon5 } from "@fortawesome/react-fontawesome";
import { faCheck as faCheck2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var tierMap = {
  great: { bar: "bg-success", text: "text-success-fg", bg: "bg-success-subtle", border: "border-success", dot: "bg-success", label: "Good" },
  ok: { bar: "bg-warning", text: "text-warning-fg", bg: "bg-warning-subtle", border: "border-warning", dot: "bg-warning", label: "Fair" },
  poor: { bar: "bg-error", text: "text-error-fg", bg: "bg-error-subtle", border: "border-error", dot: "bg-error", label: "Poor" }
};
function ContentScoreBar({
  value,
  rules,
  label,
  className
}) {
  const { score, results } = useMemo2(() => {
    let earned = 0, total = 0;
    const results2 = rules.map((rule) => {
      const pass = rule.check(value);
      if (pass) earned += rule.points;
      total += rule.points;
      return { label: rule.label, pass, hint: rule.hint };
    });
    return { score: total > 0 ? Math.round(earned / total * 100) : 0, results: results2 };
  }, [value, rules]);
  const tier = score >= 70 ? "great" : score >= 40 ? "ok" : "poor";
  const t = tierMap[tier];
  const passCount = results.filter((r) => r.pass).length;
  return /* @__PURE__ */ jsxs9(
    "div",
    {
      className: cn(
        "rounded-lg border p-3 space-y-2 transition-colors duration-300",
        t.bg,
        t.border,
        className
      ),
      children: [
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx11("span", { className: cn("inline-block h-1.5 w-1.5 rounded-full shrink-0", t.dot), "aria-hidden": "true" }),
          label && /* @__PURE__ */ jsx11("span", { className: "text-xs font-semibold text-text-secondary uppercase tracking-wider", children: label }),
          /* @__PURE__ */ jsxs9("div", { className: "ml-auto flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx11("span", { className: cn("text-xs font-medium", t.text), children: t.label }),
            /* @__PURE__ */ jsxs9(
              "span",
              {
                className: cn("text-sm font-bold tabular-nums leading-none", t.text),
                "aria-label": `${label != null ? label : "Content score"}: ${score}%`,
                children: [
                  score,
                  "%"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx11("div", { className: "h-1.5 w-full rounded-full bg-surface-sunken overflow-hidden", children: /* @__PURE__ */ jsx11(
          "div",
          {
            className: cn("h-full rounded-full transition-all duration-500 ease-out", t.bar),
            style: { width: `${score}%` }
          }
        ) }),
        /* @__PURE__ */ jsx11("div", { className: "flex flex-wrap gap-1", children: results.map((r, i) => /* @__PURE__ */ jsxs9(
          "span",
          {
            title: r.hint,
            className: cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium cursor-default select-none transition-colors",
              r.pass ? cn(t.bg, t.text, "border", t.border) : "bg-surface-sunken text-text-disabled border border-border"
            ),
            children: [
              r.pass && /* @__PURE__ */ jsx11(FontAwesomeIcon5, { icon: faCheck2, className: "w-2.5 h-2.5", "aria-hidden": "true" }),
              r.label
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsxs9("p", { className: "text-xs text-text-secondary leading-none", children: [
          passCount,
          " / ",
          results.length,
          " rules passed"
        ] })
      ]
    }
  );
}

// modules/ui/PageHeader.tsx
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var variantMap = {
  primary: "bg-primary text-primary-fg hover:bg-primary-hover",
  secondary: "bg-secondary text-secondary-fg hover:bg-secondary-hover",
  outline: "border border-border text-text-primary hover:bg-surface-overlay",
  danger: "bg-error text-text-inverse hover:opacity-90",
  ghost: "bg-transparent text-text-primary hover:bg-surface-overlay"
};
function PageHeader({
  title,
  subtitle,
  badge,
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      className: cn(
        "flex items-start justify-between gap-4 pb-5 border-b border-border",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs10("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsx12("h1", { className: "text-2xl font-bold text-text-primary leading-tight", children: title }),
            badge
          ] }),
          subtitle && /* @__PURE__ */ jsx12("p", { className: "text-sm text-text-secondary mt-0.5", children: subtitle })
        ] }),
        actions && actions.length > 0 && /* @__PURE__ */ jsx12("div", { className: "flex items-center gap-2 shrink-0 flex-wrap justify-end", children: actions.map((action, i) => {
          var _a;
          const cls = cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            variantMap[(_a = action.variant) != null ? _a : "primary"]
          );
          if (action.href) {
            return /* @__PURE__ */ jsx12("a", { href: action.href, className: cls, children: action.label }, i);
          }
          return /* @__PURE__ */ jsx12(
            "button",
            {
              type: "button",
              onClick: action.onClick,
              disabled: action.disabled,
              className: cls,
              children: action.label
            },
            i
          );
        }) })
      ]
    }
  );
}

// modules/ui/Overlays/Popover/index.tsx
import { useRef as useRef5, useState as useState5 } from "react";

// modules/ui/Overlays/shared/useDismiss.ts
import { useEffect as useEffect5 } from "react";
function useDismiss({
  active,
  ref,
  onDismiss,
  escape = true,
  outsidePointer = true
}) {
  useEffect5(() => {
    if (!active) return;
    function onKey(e) {
      if (!escape) return;
      if (e.key !== "Escape") return;
      if (!isFocusTrapTopLayer(ref)) return;
      onDismiss();
    }
    function onPointer(e) {
      if (!outsidePointer) return;
      const root = ref.current;
      if (!root) return;
      if (root.contains(e.target)) return;
      if (!isFocusTrapTopLayer(ref)) return;
      onDismiss();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer, true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer, true);
    };
  }, [active, ref, onDismiss, escape, outsidePointer]);
}

// modules/ui/Overlays/shared/positioning.ts
var placementClasses = {
  bottom: "top-full left-0 mt-2",
  top: "bottom-full left-0 mb-2",
  left: "right-full top-0 mr-2",
  right: "left-full top-0 ml-2"
};

// modules/ui/Overlays/Popover/index.tsx
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function Popover({
  trigger,
  children,
  placement = "bottom",
  className,
  focusTrap = true
}) {
  const [open, setOpen] = useState5(false);
  const containerRef = useRef5(null);
  const panelRef = useRef5(null);
  useDismiss({
    active: open,
    ref: containerRef,
    onDismiss: () => setOpen(false)
  });
  useFocusTrap(panelRef, {
    active: open && focusTrap,
    onEscape: () => setOpen(false),
    // useDismiss already handles Escape — avoid double handling.
    handleEscape: false
  });
  return /* @__PURE__ */ jsxs11("div", { ref: containerRef, className: "relative inline-block", children: [
    /* @__PURE__ */ jsx13("div", { onClick: () => setOpen((o) => !o), children: trigger }),
    open && /* @__PURE__ */ jsx13(
      "div",
      {
        ref: panelRef,
        role: "dialog",
        tabIndex: -1,
        "data-state": open ? "open" : "closed",
        className: cn(
          "absolute z-[70] min-w-[12rem] rounded-lg border border-border bg-surface-raised shadow-xl",
          "focus-visible:outline-none",
          placementClasses[placement],
          className
        ),
        children
      }
    )
  ] });
}

// modules/ui/Slider/index.tsx
import { useCallback as useCallback3, useState as useState7 } from "react";

// modules/ui/Slider/parts/Track.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function Track({
  current,
  isDragging,
  offsetPx,
  pointerHandlers,
  children
}) {
  const baseTransform = `translateX(-${current * 100}%)`;
  const transform = offsetPx != null ? `${baseTransform} translateX(${offsetPx}px)` : baseTransform;
  return /* @__PURE__ */ jsx14(
    "div",
    __spreadProps(__spreadValues({
      className: cn(
        "flex ease-in-out will-change-transform",
        // While dragging we want zero animation; otherwise use the standard 350 ms snap.
        isDragging ? "transition-none" : "transition-transform duration-350",
        // `touch-pan-y` lets vertical page scrolls pass through but reserves
        // horizontal gestures for the slider drag handler.
        "touch-pan-y select-none",
        isDragging && "cursor-grabbing"
      ),
      style: { transform }
    }, pointerHandlers), {
      children
    })
  );
}

// modules/ui/Slider/parts/Slide.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function Slide({ index, total, isActive, className, children }) {
  return /* @__PURE__ */ jsx15(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "aria-label": `Slide ${index + 1} of ${total}`,
      "aria-hidden": !isActive,
      className: cn("w-full shrink-0", className),
      children
    }
  );
}

// modules/ui/Slider/parts/Arrows.tsx
import { FontAwesomeIcon as FontAwesomeIcon6 } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment as Fragment3, jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
var ARROW_BTN = cn(
  "absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full",
  "bg-black/40 hover:bg-black/60 text-white",
  "flex items-center justify-center transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
);
function Arrows({ canPrev, canNext, onPrev, onNext }) {
  return /* @__PURE__ */ jsxs12(Fragment3, { children: [
    canPrev && /* @__PURE__ */ jsx16(
      "button",
      {
        type: "button",
        onClick: onPrev,
        "aria-label": "Previous slide",
        className: cn(ARROW_BTN, "left-3"),
        children: /* @__PURE__ */ jsx16(FontAwesomeIcon6, { icon: faChevronLeft, className: "w-3 h-3", "aria-hidden": "true" })
      }
    ),
    canNext && /* @__PURE__ */ jsx16(
      "button",
      {
        type: "button",
        onClick: onNext,
        "aria-label": "Next slide",
        className: cn(ARROW_BTN, "right-3"),
        children: /* @__PURE__ */ jsx16(FontAwesomeIcon6, { icon: faChevronRight, className: "w-3 h-3", "aria-hidden": "true" })
      }
    )
  ] });
}

// modules/ui/Slider/parts/Dots.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function Dots({ total, current, onSelect }) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10",
      role: "tablist",
      "aria-label": "Slide indicators",
      children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ jsx17(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": i === current,
          "aria-label": `Go to slide ${i + 1}`,
          onClick: () => onSelect(i),
          className: cn(
            "h-2 rounded-full transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
            i === current ? "w-5 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
          )
        },
        i
      ))
    }
  );
}

// modules/ui/Slider/hooks/useDrag.ts
import { useCallback as useCallback2, useRef as useRef6, useState as useState6 } from "react";
var VELOCITY_PER_EXTRA_SLIDE = 0.5;
var EDGE_RESISTANCE = 0.4;
var VELOCITY_SAMPLE_WINDOW_MS = 100;
function useDrag({
  current,
  total,
  loop,
  dragThreshold,
  goTo
}) {
  const [dragState, setDragState] = useState6({
    offsetPx: null,
    trackWidth: 0,
    isDragging: false
  });
  const startXRef = useRef6(0);
  const startTimeRef = useRef6(0);
  const trackWidthRef = useRef6(0);
  const samplesRef = useRef6([]);
  const activePointerRef = useRef6(null);
  const onPointerDown = useCallback2(
    (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (total <= 1) return;
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      trackWidthRef.current = rect.width;
      startXRef.current = e.clientX;
      startTimeRef.current = e.timeStamp;
      samplesRef.current = [{ x: e.clientX, t: e.timeStamp }];
      activePointerRef.current = e.pointerId;
      try {
        target.setPointerCapture(e.pointerId);
      } catch (e2) {
      }
      setDragState({
        offsetPx: 0,
        trackWidth: rect.width,
        isDragging: true
      });
    },
    [total]
  );
  const onPointerMove = useCallback2(
    (e) => {
      if (activePointerRef.current !== e.pointerId) return;
      let delta = e.clientX - startXRef.current;
      if (!loop) {
        const atFirst = current === 0 && delta > 0;
        const atLast = current === total - 1 && delta < 0;
        if (atFirst || atLast) delta *= EDGE_RESISTANCE;
      }
      const now = e.timeStamp;
      samplesRef.current.push({ x: e.clientX, t: now });
      while (samplesRef.current.length > 1 && now - samplesRef.current[0].t > VELOCITY_SAMPLE_WINDOW_MS) {
        samplesRef.current.shift();
      }
      setDragState((s) => __spreadProps(__spreadValues({}, s), { offsetPx: delta }));
    },
    [current, loop, total]
  );
  const endDrag = useCallback2(
    (e) => {
      var _a, _b;
      if (activePointerRef.current !== e.pointerId) return;
      activePointerRef.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (e2) {
      }
      const samples = samplesRef.current;
      const last = (_a = samples[samples.length - 1]) != null ? _a : { x: e.clientX, t: e.timeStamp };
      const first = (_b = samples[0]) != null ? _b : last;
      const totalDelta = e.clientX - startXRef.current;
      const dt = Math.max(1, last.t - first.t);
      const velocity = (last.x - first.x) / dt;
      const distance = Math.abs(totalDelta);
      const direction = totalDelta < 0 ? 1 : -1;
      setDragState({ offsetPx: null, trackWidth: 0, isDragging: false });
      samplesRef.current = [];
      if (distance < dragThreshold && Math.abs(velocity) < VELOCITY_PER_EXTRA_SLIDE) {
        return;
      }
      let step = distance >= dragThreshold ? 1 : 0;
      const flickDir = velocity < 0 ? 1 : -1;
      const flickStep = Math.floor(Math.abs(velocity) / VELOCITY_PER_EXTRA_SLIDE);
      let signedStep = direction * step;
      if (flickStep > 0 && flickDir === direction) {
        signedStep = direction * (step + flickStep);
      } else if (flickStep > 0 && step === 0) {
        signedStep = flickDir * flickStep;
      }
      if (signedStep === 0) return;
      goTo(current + signedStep);
    },
    [current, dragThreshold, goTo]
  );
  return {
    dragState,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag
    }
  };
}

// modules/ui/Slider/hooks/useAutoPlay.ts
import { useEffect as useEffect6, useRef as useRef7 } from "react";
function useAutoPlay({ enabled, interval, total, onTick }) {
  const onTickRef = useRef7(onTick);
  useEffect6(() => {
    onTickRef.current = onTick;
  }, [onTick]);
  useEffect6(() => {
    if (!enabled || total <= 1) return;
    const id = setInterval(() => onTickRef.current(), interval);
    return () => clearInterval(id);
  }, [enabled, interval, total]);
}

// modules/ui/Slider/index.tsx
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
var TRANSITION_MS = 350;
function Slider({
  slides,
  autoPlay = false,
  autoPlayInterval = 4e3,
  showDots = true,
  showArrows = true,
  loop = true,
  dragThreshold = 50,
  className,
  slideClassName,
  ariaLabel = "Content slider"
}) {
  const [current, setCurrent] = useState7(0);
  const [isTransitioning, setIsTransitioning] = useState7(false);
  const total = slides.length;
  const goTo = useCallback3(
    (index) => {
      if (isTransitioning) return;
      const target = loop ? (index % total + total) % total : Math.max(0, Math.min(index, total - 1));
      if (target === current) return;
      setIsTransitioning(true);
      setCurrent(target);
      setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
    },
    [current, isTransitioning, loop, total]
  );
  const prev = useCallback3(() => goTo(current - 1), [current, goTo]);
  const next = useCallback3(() => goTo(current + 1), [current, goTo]);
  const { dragState, handlers: dragHandlers } = useDrag({
    current,
    total,
    loop,
    dragThreshold,
    goTo
  });
  useAutoPlay({
    enabled: autoPlay,
    interval: autoPlayInterval,
    total,
    onTick: useCallback3(() => {
      if (dragState.isDragging) return;
      setCurrent((c) => (c + 1) % total);
    }, [dragState.isDragging, total])
  });
  if (total === 0) return null;
  const canPrev = loop || current > 0;
  const canNext = loop || current < total - 1;
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      className: cn("relative overflow-hidden rounded-xl", className),
      role: "region",
      "aria-label": ariaLabel,
      "aria-roledescription": "carousel",
      children: [
        /* @__PURE__ */ jsx18(
          Track,
          {
            current,
            isDragging: dragState.isDragging,
            offsetPx: dragState.offsetPx,
            pointerHandlers: dragHandlers,
            children: slides.map((slide, i) => {
              const isObject = slide !== null && typeof slide === "object" && "content" in slide;
              const key = isObject ? slide.id : i;
              const content = isObject ? slide.content : slide;
              return /* @__PURE__ */ jsx18(
                Slide,
                {
                  index: i,
                  total,
                  isActive: i === current,
                  className: slideClassName,
                  children: content
                },
                key
              );
            })
          }
        ),
        showArrows && total > 1 && /* @__PURE__ */ jsx18(Arrows, { canPrev, canNext, onPrev: prev, onNext: next }),
        showDots && total > 1 && /* @__PURE__ */ jsx18(Dots, { total, current, onSelect: goTo })
      ]
    }
  );
}

// modules/ui/TabButton.tsx
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
function TabButton({ active, onClick, children, count, className }) {
  return /* @__PURE__ */ jsxs14(
    "button",
    {
      onClick,
      className: cn(
        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
        active ? "bg-primary text-primary-fg shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-surface-overlay",
        className
      ),
      children: [
        children,
        count !== void 0 && /* @__PURE__ */ jsx19(
          "span",
          {
            className: cn(
              "text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none",
              active ? "bg-primary-fg/20 text-primary-fg" : "bg-surface-sunken text-text-disabled"
            ),
            children: count
          }
        )
      ]
    }
  );
}

// modules/ui/TabGroup.tsx
import { useRef as useRef8, useState as useState8 } from "react";
import { jsx as jsx20, jsxs as jsxs15 } from "react/jsx-runtime";
function TabGroup({
  tabs,
  defaultTab,
  label = "Tabs",
  lazy = false,
  className
}) {
  var _a, _b, _c, _d;
  const [active, setActive] = useState8((_b = defaultTab != null ? defaultTab : (_a = tabs[0]) == null ? void 0 : _a.id) != null ? _b : "");
  const activated = useRef8(/* @__PURE__ */ new Set([(_d = defaultTab != null ? defaultTab : (_c = tabs[0]) == null ? void 0 : _c.id) != null ? _d : ""]));
  function activate(id) {
    setActive(id);
    activated.current.add(id);
  }
  function handleKeyDown(e, index) {
    let nextIdx = null;
    if (e.key === "ArrowRight") {
      nextIdx = (index + 1) % tabs.length;
      while (tabs[nextIdx].disabled && nextIdx !== index) nextIdx = (nextIdx + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIdx = (index - 1 + tabs.length) % tabs.length;
      while (tabs[nextIdx].disabled && nextIdx !== index) nextIdx = (nextIdx - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIdx = tabs.findIndex((t) => !t.disabled);
    } else if (e.key === "End") {
      nextIdx = tabs.length - 1 - [...tabs].reverse().findIndex((t) => !t.disabled);
    }
    if (nextIdx !== null && !tabs[nextIdx].disabled) {
      activate(tabs[nextIdx].id);
    }
  }
  return /* @__PURE__ */ jsxs15("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsx20("div", { role: "tablist", "aria-label": label, className: "flex border-b border-border pb-3", children: tabs.map((tab, i) => {
      const isActive = tab.id === active;
      return /* @__PURE__ */ jsxs15(
        "button",
        {
          role: "tab",
          id: `tab-btn-${tab.id}`,
          "aria-selected": isActive,
          "aria-controls": `tabpanel-${tab.id}`,
          "aria-disabled": tab.disabled,
          tabIndex: isActive ? 0 : -1,
          onClick: () => !tab.disabled && activate(tab.id),
          onKeyDown: (e) => handleKeyDown(e, i),
          className: cn(
            "inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            isActive ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary hover:border-border",
            tab.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
          ),
          children: [
            tab.icon && /* @__PURE__ */ jsx20("span", { "aria-hidden": "true", className: "shrink-0", children: tab.icon }),
            tab.label,
            tab.badge && /* @__PURE__ */ jsx20("span", { className: "shrink-0", children: tab.badge })
          ]
        },
        tab.id
      );
    }) }),
    tabs.map((tab) => {
      const isActive = tab.id === active;
      const everActivated = activated.current.has(tab.id);
      const shouldRender = !lazy || everActivated;
      return /* @__PURE__ */ jsx20(
        "div",
        {
          id: `tabpanel-${tab.id}`,
          role: "tabpanel",
          "aria-labelledby": `tab-btn-${tab.id}`,
          tabIndex: 0,
          hidden: !isActive,
          className: "py-4 focus-visible:outline-none",
          children: shouldRender ? tab.content : null
        },
        tab.id
      );
    })
  ] });
}

// modules/ui/TreeView/index.tsx
import { FontAwesomeIcon as FontAwesomeIcon8 } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp
} from "@fortawesome/free-solid-svg-icons";
import { useMemo as useMemo4 } from "react";

// modules/ui/TreeView/parts/Node.tsx
import { FontAwesomeIcon as FontAwesomeIcon7 } from "@fortawesome/react-fontawesome";
import { faChevronDown as faChevronDown2, faChevronRight as faChevronRight2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx21, jsxs as jsxs16 } from "react/jsx-runtime";
function TreeNodeRow({
  row,
  isSelected,
  isFocused,
  onActivate,
  onToggle,
  onFocus
}) {
  const { node, depth, hasChildren, expanded, level, posInSet, setSize } = row;
  return /* @__PURE__ */ jsx21(
    "li",
    {
      role: "treeitem",
      "aria-expanded": hasChildren ? expanded : void 0,
      "aria-selected": isSelected,
      "aria-level": level,
      "aria-posinset": posInSet,
      "aria-setsize": setSize,
      "data-tree-node-id": node.id,
      "data-has-children": hasChildren ? "true" : "false",
      children: /* @__PURE__ */ jsxs16(
        "div",
        {
          tabIndex: isFocused ? 0 : -1,
          "data-tree-row": true,
          onClick: (e) => {
            onFocus(node.id);
            onActivate(e, node.id);
          },
          onFocus: () => onFocus(node.id),
          style: { paddingLeft: `${depth * 1.25}rem` },
          className: cn(
            "flex items-center gap-1.5 px-2 py-1.5 text-sm rounded-md cursor-pointer select-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            "hover:bg-surface-overlay transition-colors",
            isSelected && "bg-primary-subtle text-primary font-medium"
          ),
          children: [
            hasChildren ? /* @__PURE__ */ jsx21(
              "span",
              {
                "aria-hidden": "true",
                "data-tree-chevron": true,
                onClick: (e) => {
                  e.stopPropagation();
                  onFocus(node.id);
                  onToggle(node.id);
                },
                className: "text-text-disabled w-3 shrink-0 flex items-center justify-center",
                children: /* @__PURE__ */ jsx21(
                  FontAwesomeIcon7,
                  {
                    icon: expanded ? faChevronDown2 : faChevronRight2,
                    className: "w-2.5 h-2.5"
                  }
                )
              }
            ) : /* @__PURE__ */ jsx21("span", { className: "w-3 shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx21("span", { children: node.label })
          ]
        }
      )
    }
  );
}

// modules/ui/TreeView/hooks/useTreeState.ts
import { useCallback as useCallback4, useMemo as useMemo3, useState as useState9 } from "react";
function collectAllIds(nodes, out = /* @__PURE__ */ new Set()) {
  for (const n of nodes) {
    out.add(n.id);
    if (n.children && n.children.length) collectAllIds(n.children, out);
  }
  return out;
}
function collectExpandableIds(nodes, out = /* @__PURE__ */ new Set()) {
  for (const n of nodes) {
    if (n.children && n.children.length) {
      out.add(n.id);
      collectExpandableIds(n.children, out);
    }
  }
  return out;
}
function flattenVisible(nodes, expanded, depth, parentId, out) {
  const setSize = nodes.length;
  nodes.forEach((node, idx) => {
    const hasChildren = !!(node.children && node.children.length);
    const isExpanded = hasChildren && expanded.has(node.id);
    out.push({
      node,
      depth,
      parentId,
      hasChildren,
      expanded: isExpanded,
      level: depth + 1,
      posInSet: idx + 1,
      setSize
    });
    if (isExpanded) {
      flattenVisible(node.children, expanded, depth + 1, node.id, out);
    }
  });
  return out;
}
function useTreeState({
  nodes,
  selectionMode,
  selectedIds: controlledSelectedIds,
  selectedId: controlledSelectedId,
  expandedIds: controlledExpandedIds,
  defaultExpandedIds,
  initialFocusId,
  onSelectionChange,
  onSelect,
  onExpand
}) {
  const [uncontrolledExpanded, setUncontrolledExpanded] = useState9(() => {
    if (defaultExpandedIds) return new Set(defaultExpandedIds);
    return collectExpandableIds(nodes);
  });
  const expanded = useMemo3(() => {
    if (controlledExpandedIds) return new Set(controlledExpandedIds);
    return uncontrolledExpanded;
  }, [controlledExpandedIds, uncontrolledExpanded]);
  const [uncontrolledSelected, setUncontrolledSelected] = useState9(() => {
    if (controlledSelectedIds && controlledSelectedIds.length) return new Set(controlledSelectedIds);
    if (controlledSelectedId) return /* @__PURE__ */ new Set([controlledSelectedId]);
    return /* @__PURE__ */ new Set();
  });
  const selected = useMemo3(() => {
    if (controlledSelectedIds) return new Set(controlledSelectedIds);
    if (controlledSelectedId !== void 0) return /* @__PURE__ */ new Set([controlledSelectedId]);
    return uncontrolledSelected;
  }, [controlledSelectedIds, controlledSelectedId, uncontrolledSelected]);
  const visibleRows = useMemo3(
    () => flattenVisible(nodes, expanded, 0, null, []),
    [nodes, expanded]
  );
  const [focusId, setFocusId] = useState9(
    () => {
      var _a;
      return initialFocusId != null ? initialFocusId : (_a = visibleRows[0]) == null ? void 0 : _a.node.id;
    }
  );
  const setExpanded = useCallback4(
    (id, next) => {
      onExpand == null ? void 0 : onExpand(id, next);
      if (!controlledExpandedIds) {
        setUncontrolledExpanded((prev) => {
          const out = new Set(prev);
          if (next) out.add(id);
          else out.delete(id);
          return out;
        });
      }
    },
    [controlledExpandedIds, onExpand]
  );
  const toggleExpanded = useCallback4(
    (id) => {
      const isOpen = expanded.has(id);
      setExpanded(id, !isOpen);
    },
    [expanded, setExpanded]
  );
  const expandAll = useCallback4(() => {
    const all = collectExpandableIds(nodes);
    if (!controlledExpandedIds) setUncontrolledExpanded(all);
    all.forEach((id) => {
      if (!expanded.has(id)) onExpand == null ? void 0 : onExpand(id, true);
    });
  }, [nodes, controlledExpandedIds, expanded, onExpand]);
  const collapseAll = useCallback4(() => {
    if (!controlledExpandedIds) setUncontrolledExpanded(/* @__PURE__ */ new Set());
    expanded.forEach((id) => onExpand == null ? void 0 : onExpand(id, false));
  }, [controlledExpandedIds, expanded, onExpand]);
  const commitSelection = useCallback4(
    (next) => {
      if (!controlledSelectedIds && controlledSelectedId === void 0) {
        setUncontrolledSelected(next);
      }
      const arr = Array.from(next);
      onSelectionChange == null ? void 0 : onSelectionChange(arr);
      if (arr.length) onSelect == null ? void 0 : onSelect(arr[arr.length - 1]);
      else if (selectionMode === "single") onSelect == null ? void 0 : onSelect("");
    },
    [controlledSelectedIds, controlledSelectedId, onSelectionChange, onSelect, selectionMode]
  );
  const selectSingle = useCallback4(
    (id) => {
      commitSelection(/* @__PURE__ */ new Set([id]));
    },
    [commitSelection]
  );
  const toggleSelection = useCallback4(
    (id) => {
      if (selectionMode === "single") {
        commitSelection(/* @__PURE__ */ new Set([id]));
        return;
      }
      const next = new Set(selected);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      commitSelection(next);
    },
    [selectionMode, selected, commitSelection]
  );
  const selectRange = useCallback4(
    (anchor, target) => {
      if (selectionMode === "single") {
        commitSelection(/* @__PURE__ */ new Set([target]));
        return;
      }
      const order = visibleRows.map((r) => r.node.id);
      const a = order.indexOf(anchor);
      const b = order.indexOf(target);
      if (a === -1 || b === -1) {
        commitSelection(/* @__PURE__ */ new Set([target]));
        return;
      }
      const [lo, hi] = a < b ? [a, b] : [b, a];
      const next = /* @__PURE__ */ new Set();
      for (let i = lo; i <= hi; i++) next.add(order[i]);
      commitSelection(next);
    },
    [selectionMode, visibleRows, commitSelection]
  );
  const moveFocus = useCallback4(
    (delta) => {
      if (!visibleRows.length) return;
      const idx = visibleRows.findIndex((r) => r.node.id === focusId);
      const safeIdx = idx === -1 ? 0 : idx;
      const next = Math.max(0, Math.min(visibleRows.length - 1, safeIdx + delta));
      setFocusId(visibleRows[next].node.id);
    },
    [visibleRows, focusId]
  );
  const focusFirst = useCallback4(() => {
    if (visibleRows.length) setFocusId(visibleRows[0].node.id);
  }, [visibleRows]);
  const focusLast = useCallback4(() => {
    if (visibleRows.length) setFocusId(visibleRows[visibleRows.length - 1].node.id);
  }, [visibleRows]);
  const findRow = useCallback4(
    (id) => visibleRows.find((r) => r.node.id === id),
    [visibleRows]
  );
  const selectAllVisible = useCallback4(() => {
    if (selectionMode !== "multi") return;
    commitSelection(new Set(visibleRows.map((r) => r.node.id)));
  }, [selectionMode, visibleRows, commitSelection]);
  return {
    expanded,
    selected,
    focusId,
    setFocusId,
    visibleRows,
    setExpanded,
    toggleExpanded,
    expandAll,
    collapseAll,
    selectSingle,
    toggleSelection,
    selectRange,
    selectAllVisible,
    moveFocus,
    focusFirst,
    focusLast,
    findRow,
    /** Util for unrelated callers (e.g. devtools). */
    collectAllIds: () => collectAllIds(nodes)
  };
}

// modules/ui/TreeView/hooks/useKeyboardNav.ts
import { useCallback as useCallback5, useRef as useRef9 } from "react";
var TYPE_AHEAD_RESET_MS = 500;
function useKeyboardNav({ state, onActivate }) {
  const {
    visibleRows,
    focusId,
    setFocusId,
    setExpanded,
    selected,
    selectSingle,
    toggleSelection,
    selectRange,
    selectAllVisible,
    moveFocus,
    focusFirst,
    focusLast,
    findRow
  } = state;
  const anchorRef = useRef9(focusId);
  const typeAheadRef = useRef9({
    buffer: "",
    lastAt: 0
  });
  const updateAnchorOnFocus = useCallback5(
    (id) => {
      anchorRef.current = id;
    },
    []
  );
  const jumpTypeAhead = useCallback5(
    (char) => {
      var _a, _b;
      const now = Date.now();
      const prev = typeAheadRef.current;
      const buffer = now - prev.lastAt > TYPE_AHEAD_RESET_MS ? char : prev.buffer + char;
      typeAheadRef.current = { buffer, lastAt: now };
      if (!visibleRows.length) return;
      const order = visibleRows;
      const currentIdx = Math.max(
        0,
        order.findIndex((r) => r.node.id === focusId)
      );
      const startOffset = buffer.length === 1 ? 1 : 0;
      const total = order.length;
      const needle = buffer.toLowerCase();
      for (let i = 0; i < total; i++) {
        const probe = order[(currentIdx + startOffset + i) % total];
        const label = (_b = (_a = probe.node.label) == null ? void 0 : _a.toLowerCase()) != null ? _b : "";
        if (label.startsWith(needle)) {
          setFocusId(probe.node.id);
          return;
        }
      }
    },
    [visibleRows, focusId, setFocusId]
  );
  const onKeyDown = useCallback5(
    (e) => {
      var _a, _b, _c, _d, _e;
      if (!focusId) return;
      const row = findRow(focusId);
      if (!row) return;
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && // Space is special — handled below for selection toggle.
      e.key !== " ") {
        e.preventDefault();
        jumpTypeAhead(e.key);
        return;
      }
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          moveFocus(1);
          if (e.shiftKey) {
            const nextIdx = Math.min(visibleRows.length - 1, indexOf(visibleRows, focusId) + 1);
            const target = (_a = visibleRows[nextIdx]) == null ? void 0 : _a.node.id;
            if (target) selectRange((_b = anchorRef.current) != null ? _b : focusId, target);
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          moveFocus(-1);
          if (e.shiftKey) {
            const prevIdx = Math.max(0, indexOf(visibleRows, focusId) - 1);
            const target = (_c = visibleRows[prevIdx]) == null ? void 0 : _c.node.id;
            if (target) selectRange((_d = anchorRef.current) != null ? _d : focusId, target);
          }
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          if (row.hasChildren && !row.expanded) {
            setExpanded(row.node.id, true);
          } else if (row.hasChildren && row.expanded) {
            const idx = indexOf(visibleRows, focusId);
            const child = visibleRows[idx + 1];
            if (child && child.depth > row.depth) setFocusId(child.node.id);
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          if (row.hasChildren && row.expanded) {
            setExpanded(row.node.id, false);
          } else if (row.parentId) {
            setFocusId(row.parentId);
          }
          break;
        }
        case "Home": {
          e.preventDefault();
          focusFirst();
          break;
        }
        case "End": {
          e.preventDefault();
          focusLast();
          break;
        }
        case " ": {
          e.preventDefault();
          if (e.shiftKey) {
            selectRange((_e = anchorRef.current) != null ? _e : focusId, focusId);
          } else if (e.ctrlKey || e.metaKey) {
            toggleSelection(focusId);
            anchorRef.current = focusId;
          } else {
            toggleSelection(focusId);
            anchorRef.current = focusId;
          }
          break;
        }
        case "Enter": {
          e.preventDefault();
          if (!selected.has(focusId)) selectSingle(focusId);
          anchorRef.current = focusId;
          onActivate == null ? void 0 : onActivate(focusId);
          break;
        }
        case "*": {
          e.preventDefault();
          visibleRows.forEach((r) => {
            if (r.parentId === row.parentId && r.hasChildren && !r.expanded) {
              setExpanded(r.node.id, true);
            }
          });
          break;
        }
        default: {
          if ((e.ctrlKey || e.metaKey) && (e.key === "a" || e.key === "A")) {
            e.preventDefault();
            selectAllVisible();
          }
        }
      }
    },
    [
      focusId,
      findRow,
      jumpTypeAhead,
      moveFocus,
      visibleRows,
      selectRange,
      setExpanded,
      setFocusId,
      focusFirst,
      focusLast,
      toggleSelection,
      selectSingle,
      selectAllVisible,
      selected,
      onActivate
    ]
  );
  return { onKeyDown, updateAnchorOnFocus, anchorRef };
}
function indexOf(rows, id) {
  if (!id) return -1;
  return rows.findIndex((r) => r.node.id === id);
}

// modules/ui/TreeView/types.ts
var DEFAULT_TREE_MESSAGES = {
  tree: "Tree",
  expandAll: "Expand all",
  collapseAll: "Collapse all"
};

// modules/ui/TreeView/index.tsx
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
function TreeView({
  nodes,
  selectedId,
  selectedIds,
  expandedIds,
  defaultExpandedIds,
  focusId: initialFocusId,
  selectionMode = "single",
  onSelect,
  onSelectionChange,
  onExpand,
  onActivate,
  label,
  className,
  hideToolbar = false,
  messages
}) {
  const msgs = useMemo4(
    () => __spreadValues(__spreadValues({}, DEFAULT_TREE_MESSAGES), messages),
    [messages]
  );
  const state = useTreeState({
    nodes,
    selectionMode,
    selectedIds,
    selectedId,
    expandedIds,
    defaultExpandedIds,
    initialFocusId,
    onSelectionChange,
    onSelect,
    onExpand
  });
  const {
    focusId,
    setFocusId,
    visibleRows,
    selected,
    toggleExpanded,
    expandAll,
    collapseAll,
    selectSingle,
    toggleSelection,
    selectRange
  } = state;
  const { onKeyDown, anchorRef } = useKeyboardNav({ state, onActivate });
  const handleActivate = (e, id) => {
    var _a;
    const row = state.findRow(id);
    if (!row) return;
    if (e.shiftKey) {
      selectRange((_a = anchorRef.current) != null ? _a : id, id);
      return;
    }
    if (e.metaKey || e.ctrlKey) {
      toggleSelection(id);
      anchorRef.current = id;
      return;
    }
    if (row.hasChildren) {
      toggleExpanded(id);
      if (selectionMode === "single") selectSingle(id);
      else if (!selected.has(id)) toggleSelection(id);
      anchorRef.current = id;
    } else {
      selectSingle(id);
      anchorRef.current = id;
    }
  };
  const showToolbar = !hideToolbar && visibleRows.some((r) => r.hasChildren);
  return /* @__PURE__ */ jsxs17("div", { className: cn("flex flex-col gap-1", className), children: [
    showToolbar && /* @__PURE__ */ jsxs17(
      "div",
      {
        "data-tree-toolbar": true,
        className: "flex items-center gap-1 px-1 pb-1 text-xs text-text-secondary",
        children: [
          /* @__PURE__ */ jsxs17(
            "button",
            {
              type: "button",
              "data-tree-action": "expand-all",
              onClick: () => expandAll(),
              className: cn(
                "inline-flex items-center gap-1 px-2 py-1 rounded-md",
                "hover:bg-surface-overlay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                "transition-colors"
              ),
              children: [
                /* @__PURE__ */ jsx22(FontAwesomeIcon8, { icon: faAngleDoubleDown, className: "w-3 h-3", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx22("span", { children: msgs.expandAll })
              ]
            }
          ),
          /* @__PURE__ */ jsxs17(
            "button",
            {
              type: "button",
              "data-tree-action": "collapse-all",
              onClick: () => collapseAll(),
              className: cn(
                "inline-flex items-center gap-1 px-2 py-1 rounded-md",
                "hover:bg-surface-overlay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                "transition-colors"
              ),
              children: [
                /* @__PURE__ */ jsx22(FontAwesomeIcon8, { icon: faAngleDoubleUp, className: "w-3 h-3", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx22("span", { children: msgs.collapseAll })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx22(
      "ul",
      {
        role: "tree",
        "aria-label": label != null ? label : msgs.tree,
        "aria-multiselectable": selectionMode === "multi" ? true : void 0,
        onKeyDown,
        className: cn("space-y-0.5"),
        children: visibleRows.map((row) => /* @__PURE__ */ jsx22(
          TreeNodeRow,
          {
            row,
            isSelected: selected.has(row.node.id),
            isFocused: focusId === row.node.id,
            onActivate: handleActivate,
            onToggle: toggleExpanded,
            onFocus: setFocusId
          },
          row.node.id
        ))
      }
    )
  ] });
}

// modules/ui/ViewToggle.tsx
import { FontAwesomeIcon as FontAwesomeIcon9 } from "@fortawesome/react-fontawesome";
import { faTableList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx23, jsxs as jsxs18 } from "react/jsx-runtime";
function ViewToggle({ value, onChange, labels, ariaLabel, className }) {
  var _a, _b;
  const hLabel = (_a = labels == null ? void 0 : labels.horizontal) != null ? _a : "Horizontal";
  const vLabel = (_b = labels == null ? void 0 : labels.vertical) != null ? _b : "Vertical";
  return /* @__PURE__ */ jsx23(
    "div",
    {
      className: cn("flex items-center gap-0.5 rounded-lg p-0.5 border border-border bg-surface-raised", className),
      role: "group",
      "aria-label": ariaLabel != null ? ariaLabel : "View options",
      children: ["horizontal", "vertical"].map((opt) => /* @__PURE__ */ jsx23(
        "button",
        {
          onClick: () => onChange(opt),
          "aria-pressed": value === opt,
          className: cn(
            "px-3 py-1.5 rounded-md text-xs font-semibold transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            value === opt ? "bg-primary text-primary-fg shadow-sm" : "text-text-secondary hover:text-text-primary"
          ),
          children: /* @__PURE__ */ jsxs18("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx23(
              FontAwesomeIcon9,
              {
                icon: opt === "horizontal" ? faTableList : faTableCells,
                className: "w-3.5 h-3.5",
                "aria-hidden": "true"
              }
            ),
            opt === "horizontal" ? hLabel : vLabel
          ] })
        },
        opt
      ))
    }
  );
}

// modules/ui/lazy.tsx
import dynamic from "next/dynamic";
import { jsx as jsx24 } from "react/jsx-runtime";
var LazyDataTable = dynamic(
  () => import("./DataTable-2G27T4E6.mjs").then((m) => m.DataTable),
  { loading: () => /* @__PURE__ */ jsx24(SkeletonTableRow, { cols: 4 }), ssr: false }
);
var LazyAdvancedDataTable = dynamic(
  () => import("./AdvancedDataTable-F3DNXDKX.mjs").then((m) => m.AdvancedDataTable),
  { loading: () => /* @__PURE__ */ jsx24(SkeletonTableRow, { cols: 4 }), ssr: false }
);
var LazyServerDataTable = dynamic(
  () => import("./ServerDataTable-RZV3K6KQ.mjs").then((m) => m.ServerDataTable),
  { loading: () => /* @__PURE__ */ jsx24(SkeletonTableRow, { cols: 4 }), ssr: false }
);
var LazyDateRangePicker = dynamic(
  () => import("./DateRangePicker-AL32QB6L.mjs").then((m) => m.DateRangePicker),
  { loading: () => /* @__PURE__ */ jsx24(SkeletonCard, {}), ssr: false }
);
var LazyMapView = dynamic(
  () => import("./MapView-FERKPCDB.mjs").then((m) => m.MapView),
  { loading: () => /* @__PURE__ */ jsx24(SkeletonCard, {}), ssr: false }
);
var LazyVideoPlayer = dynamic(
  () => import("./VideoPlayer-P3I6ESXJ.mjs").then((m) => m.VideoPlayer),
  { loading: () => /* @__PURE__ */ jsx24(SkeletonCard, {}), ssr: false }
);

export {
  BrandLogo,
  Checkbox,
  FileInput,
  StarRating,
  StatCard,
  ButtonGroup,
  CheckboxGroup,
  ComboBox,
  ContentScoreBar,
  PageHeader,
  Popover,
  Slider,
  TabButton,
  TabGroup,
  TreeView,
  ViewToggle,
  LazyDataTable,
  LazyAdvancedDataTable,
  LazyServerDataTable,
  LazyDateRangePicker,
  LazyMapView,
  LazyVideoPlayer
};
