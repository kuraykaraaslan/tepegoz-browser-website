"use client";
import {
  AlertBanner,
  DropdownMenu
} from "./chunk-ZLYBRYWQ.mjs";
import {
  Button
} from "./chunk-MTT5TKAJ.mjs";
import {
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/app/ThemeSwitcher.tsx
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDisplay, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { jsx, jsxs } from "react/jsx-runtime";
function readStoredTheme() {
  if (typeof window === "undefined") return "system";
  const t = window.localStorage.getItem("theme");
  return t === "light" || t === "dark" || t === "system" ? t : "system";
}
function ThemeSwitcher() {
  const [theme, setTheme] = useState(readStoredTheme);
  useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const icon = theme === "light" ? faSun : theme === "dark" ? faMoon : faDisplay;
  const label = theme.charAt(0).toUpperCase() + theme.slice(1);
  return /* @__PURE__ */ jsx(
    DropdownMenu,
    {
      trigger: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-4 flex items-center justify-center shrink-0", "aria-hidden": "true", suppressHydrationWarning: true, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon, className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsx("span", { className: "inline-block min-w-[3.5rem] text-left", suppressHydrationWarning: true, children: label }),
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faChevronDown, className: "w-3 h-3 text-text-disabled" })
      ] }),
      items: [
        { type: "item", label: "Light", icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSun }), onClick: () => setTheme("light") },
        { type: "item", label: "Dark", icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMoon }), onClick: () => setTheme("dark") },
        { type: "item", label: "System", icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faDisplay }), onClick: () => setTheme("system") }
      ]
    }
  );
}

// modules/app/Form.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(
    "form",
    {
      onSubmit,
      noValidate: true,
      className: cn("space-y-6", className),
      children: [
        (title || description) && /* @__PURE__ */ jsxs2("div", { children: [
          title && /* @__PURE__ */ jsx2("h2", { className: "text-lg font-semibold text-text-primary", children: title }),
          description && /* @__PURE__ */ jsx2("p", { className: "text-sm text-text-secondary mt-0.5", children: description })
        ] }),
        error && /* @__PURE__ */ jsx2(AlertBanner, { variant: "error", message: error }),
        /* @__PURE__ */ jsx2("div", { className: cn(
          "grid gap-4",
          columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
        ), children }),
        actions && /* @__PURE__ */ jsx2("div", { className: "flex items-center justify-end gap-3 pt-2 border-t border-border", children: actions })
      ]
    }
  );
}

// libs/utils/isBrowser.ts
var isBrowser = typeof window !== "undefined";

export {
  isBrowser,
  ThemeSwitcher,
  Form
};
