"use client";
import {
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/Spinner.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var sizeMap = {
  xs: "h-3 w-3 border",
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
  xl: "h-12 w-12 border-4"
};
function Spinner({
  size = "md",
  className
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": "true",
        className: cn(
          "inline-block rounded-full border-border border-t-primary animate-spin",
          sizeMap[size],
          className
        )
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Loading\u2026" })
  ] });
}

// modules/ui/SearchBar.tsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function SearchBar({
  id = "search",
  placeholder = "Search\u2026",
  value,
  onChange,
  onClear,
  className
}) {
  const [internal, setInternal] = useState("");
  const controlled = value !== void 0;
  const currentValue = controlled ? value : internal;
  function handleChange(e) {
    if (!controlled) setInternal(e.target.value);
    onChange == null ? void 0 : onChange(e.target.value);
  }
  function handleClear() {
    if (!controlled) setInternal("");
    onChange == null ? void 0 : onChange("");
    onClear == null ? void 0 : onClear();
  }
  return /* @__PURE__ */ jsxs2("div", { className: cn("relative flex items-center", className), children: [
    /* @__PURE__ */ jsx2(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute left-3 text-text-disabled pointer-events-none",
        children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: faMagnifyingGlass, className: "w-3.5 h-3.5" })
      }
    ),
    /* @__PURE__ */ jsx2(
      "input",
      {
        id,
        type: "text",
        role: "searchbox",
        value: currentValue,
        onChange: handleChange,
        placeholder,
        autoComplete: "off",
        "data-testid": `searchbar-${id}`,
        className: cn(
          "block w-full rounded-md border border-border bg-surface-base px-3 py-2 pl-8 text-sm",
          "text-text-primary placeholder:text-text-disabled",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:border-border-focus",
          "transition-colors",
          currentValue && "pr-8"
        )
      }
    ),
    currentValue && /* @__PURE__ */ jsx2(
      "button",
      {
        type: "button",
        onClick: handleClear,
        "aria-label": "Clear search",
        className: "absolute right-2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
        children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: faXmark, className: "w-3 h-3" })
      }
    )
  ] });
}

export {
  Spinner,
  SearchBar
};
