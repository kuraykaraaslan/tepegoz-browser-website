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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
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

// libs/utils/cn.ts
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
var import_clsx, import_tailwind_merge;
var init_cn = __esm({
  "libs/utils/cn.ts"() {
    "use strict";
    import_clsx = require("clsx");
    import_tailwind_merge = require("tailwind-merge");
  }
});

// modules/ui/Button.tsx
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
        loading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full shrink-0", "aria-hidden": "true" }),
        !loading && iconLeft && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: iconLeft }),
        children,
        !loading && iconRight && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: iconRight })
      ]
    })
  );
}
var import_jsx_runtime4, variantClasses, sizeClasses, iconOnlySizeClasses;
var init_Button = __esm({
  "modules/ui/Button.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_jsx_runtime4 = require("react/jsx-runtime");
    variantClasses = {
      primary: "bg-primary text-primary-fg hover:bg-primary-hover",
      secondary: "bg-secondary text-secondary-fg hover:bg-secondary-hover",
      ghost: "bg-transparent text-text-primary hover:bg-surface-overlay",
      danger: "bg-error text-text-inverse hover:opacity-90",
      outline: "border border-border text-text-primary hover:bg-surface-overlay"
    };
    sizeClasses = {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
      xl: "px-6 py-3 text-lg"
    };
    iconOnlySizeClasses = {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm",
      md: "p-2 text-sm",
      lg: "p-2.5 text-base",
      xl: "p-3 text-lg"
    };
  }
});

// modules/ui/DatePicker/locale/en.ts
var enLocale;
var init_en = __esm({
  "modules/ui/DatePicker/locale/en.ts"() {
    "use strict";
    enLocale = {
      code: "en",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      // EN convention: Sunday-first week.
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weekStartsOn: 0,
      displayFormat: "MM/DD/YYYY",
      messages: {
        placeholder: "MM/DD/YYYY",
        prevMonth: "Previous month",
        nextMonth: "Next month",
        today: "Today",
        clear: "Clear date",
        dialogLabel: "Choose date",
        disabledDate: "Disabled date"
      }
    };
  }
});

// modules/ui/DatePicker/locale/tr.ts
var trLocale;
var init_tr = __esm({
  "modules/ui/DatePicker/locale/tr.ts"() {
    "use strict";
    trLocale = {
      code: "tr",
      months: [
        "Ocak",
        "\u015Eubat",
        "Mart",
        "Nisan",
        "May\u0131s",
        "Haziran",
        "Temmuz",
        "A\u011Fustos",
        "Eyl\xFCl",
        "Ekim",
        "Kas\u0131m",
        "Aral\u0131k"
      ],
      monthsShort: [
        "Oca",
        "\u015Eub",
        "Mar",
        "Nis",
        "May",
        "Haz",
        "Tem",
        "A\u011Fu",
        "Eyl",
        "Eki",
        "Kas",
        "Ara"
      ],
      // TR convention: Monday-first week.
      weekdaysShort: ["Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cmt", "Paz"],
      weekStartsOn: 1,
      displayFormat: "DD.MM.YYYY",
      messages: {
        placeholder: "GG.AA.YYYY",
        prevMonth: "\xD6nceki ay",
        nextMonth: "Sonraki ay",
        today: "Bug\xFCn",
        clear: "Tarihi temizle",
        dialogLabel: "Tarih se\xE7in",
        disabledDate: "Bu tarih se\xE7ilemez"
      }
    };
  }
});

// modules/ui/DatePicker/hooks/useDateFns.ts
function resolveLocale(code) {
  var _a;
  if (!code) return LOCALES.tr;
  return (_a = LOCALES[code]) != null ? _a : LOCALES.tr;
}
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
}
function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
}
function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function addMonths(d, n) {
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const target = new Date(year, month + n, 1);
  const maxDay = daysInMonth(target.getFullYear(), target.getMonth());
  target.setDate(Math.min(day, maxDay));
  return target;
}
function addYears(d, n) {
  return addMonths(d, n * 12);
}
function addDays(d, n) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}
function isSameDay(a, b) {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isSameMonth(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}
function isBefore(a, b) {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}
function isAfter(a, b) {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}
function clampToBounds(d, min, max) {
  if (min && isBefore(d, min)) return startOfDay(min);
  if (max && isAfter(d, max)) return startOfDay(max);
  return d;
}
function isWithinBounds(d, min, max) {
  if (min && isBefore(d, min)) return false;
  if (max && isAfter(d, max)) return false;
  return true;
}
function isDisabled(d, disabledDates, min, max) {
  if (!isWithinBounds(d, min, max)) return true;
  if (!disabledDates) return false;
  if (typeof disabledDates === "function") return disabledDates(d);
  return disabledDates.some((x) => isSameDay(x, d));
}
function buildMonthGrid(year, month, weekStartsOn) {
  const first = new Date(year, month, 1);
  const firstDow = first.getDay();
  const leading = (firstDow - weekStartsOn + 7) % 7;
  const gridStart = new Date(year, month, 1 - leading);
  const cells = [];
  for (let i = 0; i < 42; i++) {
    cells.push(addDays(gridStart, i));
  }
  return cells;
}
function pad2(n) {
  return n < 10 ? "0" + n : String(n);
}
function formatDate(d, format) {
  if (!d || isNaN(d.getTime())) return "";
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return format.replace(FORMAT_TOKEN, (token) => {
    switch (token) {
      case "YYYY":
        return String(year);
      case "YY":
        return String(year).slice(-2);
      case "MM":
        return pad2(month);
      case "M":
        return String(month);
      case "DD":
        return pad2(day);
      case "D":
        return String(day);
      default:
        return token;
    }
  });
}
function yearRange(center, radius = 10) {
  const out = [];
  for (let y = center - radius; y <= center + radius; y++) out.push(y);
  return out;
}
var LOCALES, FORMAT_TOKEN;
var init_useDateFns = __esm({
  "modules/ui/DatePicker/hooks/useDateFns.ts"() {
    "use strict";
    init_en();
    init_tr();
    LOCALES = {
      en: enLocale,
      tr: trLocale
    };
    FORMAT_TOKEN = /YYYY|YY|MM|M|DD|D/g;
  }
});

// modules/ui/DatePicker/hooks/useKeyboardNav.ts
function handleCalendarKey(e, opts) {
  const { current, weekStartsOn, min, max, disabledDates } = opts;
  let next = null;
  let shouldSelect = false;
  let shouldClose = false;
  switch (e.key) {
    case "ArrowLeft":
      next = addDays(current, -1);
      break;
    case "ArrowRight":
      next = addDays(current, 1);
      break;
    case "ArrowUp":
      next = addDays(current, -7);
      break;
    case "ArrowDown":
      next = addDays(current, 7);
      break;
    case "PageUp":
      next = e.shiftKey ? addYears(current, -1) : addMonths(current, -1);
      break;
    case "PageDown":
      next = e.shiftKey ? addYears(current, 1) : addMonths(current, 1);
      break;
    case "Home": {
      const dow = current.getDay();
      const offset = (dow - weekStartsOn + 7) % 7;
      next = addDays(current, -offset);
      break;
    }
    case "End": {
      const dow = current.getDay();
      const offset = 6 - (dow - weekStartsOn + 7) % 7;
      next = addDays(current, offset);
      break;
    }
    case "Enter":
    case " ":
    case "Spacebar":
      next = current;
      shouldSelect = !isDisabled(current, disabledDates, min, max);
      break;
    case "Escape":
    case "Esc":
      next = current;
      shouldClose = true;
      break;
    default:
      return null;
  }
  if (e.preventDefault) e.preventDefault();
  const clamped = clampToBounds(next, min, max);
  return {
    focus: clamped,
    monthChanged: clamped.getMonth() !== current.getMonth() || clamped.getFullYear() !== current.getFullYear(),
    shouldSelect,
    shouldClose
  };
}
var init_useKeyboardNav = __esm({
  "modules/ui/DatePicker/hooks/useKeyboardNav.ts"() {
    "use strict";
    init_useDateFns();
  }
});

// modules/ui/DatePicker/calendar/MonthSelect.tsx
function MonthSelect({ value, locale, onSelect }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grid grid-cols-3 gap-1.5 p-2", role: "listbox", "aria-label": "Month", children: locale.months.map((name, idx) => {
    const active = idx === value;
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        role: "option",
        "aria-selected": active,
        onClick: () => onSelect(idx),
        className: cn(
          "rounded-md px-2 py-1.5 text-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          active ? "bg-primary text-primary-fg" : "text-text-primary hover:bg-surface-overlay"
        ),
        children: locale.monthsShort[idx]
      },
      name
    );
  }) });
}
var import_jsx_runtime6;
var init_MonthSelect = __esm({
  "modules/ui/DatePicker/calendar/MonthSelect.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_jsx_runtime6 = require("react/jsx-runtime");
  }
});

// modules/ui/DatePicker/calendar/YearSelect.tsx
function YearSelect({ value, min, max, onSelect }) {
  const activeRef = (0, import_react2.useRef)(null);
  const years = yearRange(value, 10);
  (0, import_react2.useEffect)(() => {
    var _a;
    (_a = activeRef.current) == null ? void 0 : _a.scrollIntoView({ block: "center" });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      className: "max-h-56 overflow-y-auto p-2",
      role: "listbox",
      "aria-label": "Year",
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "grid grid-cols-3 gap-1.5", children: years.map((y) => {
        const disabled = min && y < min.getFullYear() || max && y > max.getFullYear();
        const active = y === value;
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            ref: active ? activeRef : void 0,
            type: "button",
            role: "option",
            "aria-selected": active,
            disabled: !!disabled,
            onClick: () => onSelect(y),
            className: cn(
              "rounded-md px-2 py-1.5 text-sm transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              active ? "bg-primary text-primary-fg" : "text-text-primary hover:bg-surface-overlay"
            ),
            children: y
          },
          y
        );
      }) })
    }
  );
}
var import_react2, import_jsx_runtime7;
var init_YearSelect = __esm({
  "modules/ui/DatePicker/calendar/YearSelect.tsx"() {
    "use strict";
    "use client";
    import_react2 = require("react");
    init_cn();
    init_useDateFns();
    import_jsx_runtime7 = require("react/jsx-runtime");
  }
});

// modules/ui/DatePicker/calendar/Calendar.tsx
function Calendar({
  month,
  selected,
  rangeStart,
  rangeEnd,
  onSelect,
  onMonthChange,
  locale,
  hidePrevButton,
  hideNextButton,
  min,
  max,
  disabledDates,
  ariaLabel,
  compact = true,
  className
}) {
  const today = startOfDay(/* @__PURE__ */ new Date());
  const [view, setView] = (0, import_react3.useState)("days");
  const [focus, setFocus] = (0, import_react3.useState)(() => clampToBounds(selected != null ? selected : month, min, max));
  const gridRef = (0, import_react3.useRef)(null);
  const captionId = (0, import_react3.useId)();
  (0, import_react3.useEffect)(() => {
    if (!isSameMonth(focus, month)) {
      setFocus(clampToBounds(new Date(month.getFullYear(), month.getMonth(), Math.min(focus.getDate(), 28)), min, max));
    }
  }, [month.getFullYear(), month.getMonth()]);
  const goMonth = (0, import_react3.useCallback)(
    (delta) => {
      const next = addMonths(month, delta);
      onMonthChange == null ? void 0 : onMonthChange(next);
    },
    [month, onMonthChange]
  );
  const grid = buildMonthGrid(month.getFullYear(), month.getMonth(), locale.weekStartsOn);
  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    weekdays.push(locale.weekdaysShort[(i + locale.weekStartsOn) % 7]);
  }
  function onKey(e) {
    const r = handleCalendarKey(e, {
      current: focus,
      weekStartsOn: locale.weekStartsOn,
      min,
      max,
      disabledDates
    });
    if (!r) return;
    setFocus(r.focus);
    if (r.monthChanged) onMonthChange == null ? void 0 : onMonthChange(r.focus);
    if (r.shouldSelect) onSelect(r.focus);
  }
  function renderHeader() {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center justify-between px-2 pt-2 pb-1", children: [
      !hidePrevButton ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          type: "button",
          onClick: () => goMonth(-1),
          "aria-label": locale.messages.prevMonth,
          className: cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-md",
            "text-text-secondary hover:bg-surface-overlay hover:text-text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faChevronLeft, className: "h-3.5 w-3.5", "aria-hidden": "true" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "h-7 w-7", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-1 text-sm font-medium text-text-primary", id: captionId, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setView(view === "months" ? "days" : "months"),
            className: cn(
              "rounded-md px-2 py-1 hover:bg-surface-overlay",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
              view === "months" && "bg-surface-overlay"
            ),
            "aria-haspopup": "listbox",
            "aria-expanded": view === "months",
            children: locale.months[month.getMonth()]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setView(view === "years" ? "days" : "years"),
            className: cn(
              "rounded-md px-2 py-1 hover:bg-surface-overlay",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
              view === "years" && "bg-surface-overlay"
            ),
            "aria-haspopup": "listbox",
            "aria-expanded": view === "years",
            children: month.getFullYear()
          }
        )
      ] }),
      !hideNextButton ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          type: "button",
          onClick: () => goMonth(1),
          "aria-label": locale.messages.nextMonth,
          className: cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-md",
            "text-text-secondary hover:bg-surface-overlay hover:text-text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faChevronRight, className: "h-3.5 w-3.5", "aria-hidden": "true" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "h-7 w-7", "aria-hidden": "true" })
    ] });
  }
  function renderGrid() {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        ref: gridRef,
        role: "grid",
        "aria-labelledby": captionId,
        "aria-label": ariaLabel != null ? ariaLabel : locale.messages.dialogLabel,
        tabIndex: 0,
        onKeyDown: onKey,
        className: cn(
          "px-2 pb-2 outline-none",
          "focus-visible:ring-2 focus-visible:ring-border-focus rounded-md"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grid grid-cols-7 gap-0.5", role: "row", children: weekdays.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "div",
            {
              role: "columnheader",
              className: "py-1 text-center text-[11px] font-medium uppercase tracking-wide text-text-secondary",
              children: w
            },
            `wd-${i}`
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: grid.map((d) => {
            const inMonth = isSameMonth(d, month);
            const disabled = isDisabled(d, disabledDates, min, max);
            const isSelected = isSameDay(d, selected);
            const isToday = isSameDay(d, today);
            const isFocus = isSameDay(d, focus) && inMonth;
            const isStart = isSameDay(d, rangeStart);
            const isEnd = isSameDay(d, rangeEnd);
            return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "button",
              {
                type: "button",
                role: "gridcell",
                "aria-selected": isSelected || isStart || isEnd,
                "aria-disabled": disabled,
                tabIndex: isFocus ? 0 : -1,
                disabled,
                onClick: () => {
                  if (disabled) return;
                  setFocus(d);
                  onSelect(d);
                },
                className: cn(
                  "relative inline-flex items-center justify-center rounded-md text-sm transition-colors",
                  compact ? "h-8 w-8" : "h-9 w-9",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                  !inMonth && "text-text-disabled",
                  inMonth && !disabled && !isSelected && !isStart && !isEnd && "text-text-primary hover:bg-surface-overlay",
                  disabled && "opacity-40 cursor-not-allowed",
                  (isSelected || isStart || isEnd) && "bg-primary text-primary-fg hover:bg-primary-hover",
                  isToday && !isSelected && !isStart && !isEnd && "ring-1 ring-inset ring-primary"
                ),
                children: d.getDate()
              },
              d.toISOString()
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-2 flex items-center justify-end px-1", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              type: "button",
              onClick: () => {
                const target = clampToBounds(today, min, max);
                if (!isWithinBounds(target, min, max)) return;
                setFocus(target);
                onMonthChange == null ? void 0 : onMonthChange(target);
                if (!isDisabled(target, disabledDates, min, max)) onSelect(target);
              },
              className: cn(
                "rounded-md px-2 py-1 text-xs font-medium text-primary",
                "hover:bg-primary-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: locale.messages.today
            }
          ) })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      className: cn(
        "select-none",
        compact ? "w-[15.5rem]" : "w-[18rem]",
        className
      ),
      children: [
        renderHeader(),
        view === "days" && renderGrid(),
        view === "months" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          MonthSelect,
          {
            value: month.getMonth(),
            locale,
            onSelect: (m) => {
              const next = new Date(month.getFullYear(), m, 1);
              onMonthChange == null ? void 0 : onMonthChange(next);
              setView("days");
            }
          }
        ),
        view === "years" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          YearSelect,
          {
            value: month.getFullYear(),
            min,
            max,
            onSelect: (y) => {
              const next = new Date(y, month.getMonth(), 1);
              onMonthChange == null ? void 0 : onMonthChange(next);
              setView("days");
            }
          }
        )
      ]
    }
  );
}
var import_react3, import_react_fontawesome2, import_free_solid_svg_icons2, import_jsx_runtime8;
var init_Calendar = __esm({
  "modules/ui/DatePicker/calendar/Calendar.tsx"() {
    "use strict";
    "use client";
    import_react3 = require("react");
    import_react_fontawesome2 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
    init_cn();
    init_useDateFns();
    init_useKeyboardNav();
    init_MonthSelect();
    init_YearSelect();
    import_jsx_runtime8 = require("react/jsx-runtime");
  }
});

// modules/ui/DatePicker/parts/PresetList.tsx
function PresetList({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      className: cn("hidden", className),
      "aria-hidden": "true",
      "data-preset-list-placeholder": true
    }
  );
}
var import_jsx_runtime9;
var init_PresetList = __esm({
  "modules/ui/DatePicker/parts/PresetList.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_jsx_runtime9 = require("react/jsx-runtime");
  }
});

// modules/ui/DatePicker/parts/Trigger.tsx
var import_react4, import_react_fontawesome3, import_free_solid_svg_icons3, import_jsx_runtime10, Trigger;
var init_Trigger = __esm({
  "modules/ui/DatePicker/parts/Trigger.tsx"() {
    "use strict";
    "use client";
    import_react4 = require("react");
    import_react_fontawesome3 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons");
    init_cn();
    import_jsx_runtime10 = require("react/jsx-runtime");
    Trigger = (0, import_react4.forwardRef)(function Trigger2({
      display,
      placeholder,
      open,
      disabled,
      invalid,
      showClear,
      clearLabel,
      onToggle,
      onClear,
      controlsId,
      ariaLabel,
      ariaDescribedBy,
      required,
      testId,
      className
    }, ref) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: cn(
            "group relative flex w-full items-center rounded-md border transition-colors",
            "bg-surface-base text-text-primary",
            "focus-within:ring-2 focus-within:ring-border-focus focus-within:border-border-focus",
            disabled && "opacity-50 cursor-not-allowed bg-surface-sunken",
            invalid ? "border-error ring-1 ring-error bg-error-subtle" : "border-border",
            className
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "button",
              {
                ref,
                type: "button",
                onClick: onToggle,
                disabled,
                "aria-haspopup": "dialog",
                "aria-expanded": open,
                "aria-controls": controlsId,
                "aria-label": ariaLabel,
                "aria-describedby": ariaDescribedBy,
                "aria-invalid": invalid || void 0,
                "aria-required": required || void 0,
                "data-testid": testId,
                className: cn(
                  "flex-1 text-left px-3 py-2 text-sm bg-transparent rounded-l-md",
                  "focus-visible:outline-none",
                  "disabled:cursor-not-allowed"
                ),
                children: display ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: display }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-text-disabled", children: placeholder })
              }
            ),
            showClear && !disabled ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "button",
              {
                type: "button",
                onClick: onClear,
                "aria-label": clearLabel,
                className: cn(
                  "inline-flex h-7 w-7 items-center justify-center rounded-md mr-1",
                  "text-text-secondary hover:bg-surface-overlay hover:text-text-primary",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faXmark, className: "h-3 w-3", "aria-hidden": "true" })
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "span",
              {
                className: cn(
                  "pointer-events-none mr-3 text-text-secondary",
                  disabled && "opacity-50"
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faCalendar, className: "h-3.5 w-3.5" })
              }
            )
          ]
        }
      );
    });
  }
});

// modules/ui/DatePicker/index.tsx
function mergeMessages(base2, override) {
  return override ? __spreadValues(__spreadValues({}, base2), override) : base2;
}
function useDismissOnOutside(ref, open, onClose) {
  (0, import_react5.useEffect)(() => {
    if (!open) return;
    function onDocClick(e) {
      const node = ref.current;
      if (!node) return;
      if (e.target instanceof Node && node.contains(e.target)) return;
      onClose();
    }
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, ref]);
}
function DatePicker({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  disabled,
  required,
  min,
  max,
  disabledDates,
  locale: localeCode,
  format,
  messages,
  variant = "popover",
  className,
  name
}) {
  const reactId = (0, import_react5.useId)();
  const baseId = id != null ? id : `dp-${reactId}`;
  const hintId = hint ? `${baseId}-hint` : void 0;
  const errorId = error ? `${baseId}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const popoverId = `${baseId}-popover`;
  const locale = resolveLocale(localeCode);
  const msgs = mergeMessages(locale.messages, messages);
  const fmt = format != null ? format : locale.displayFormat;
  const [open, setOpen] = (0, import_react5.useState)(false);
  const [visibleMonth, setVisibleMonth] = (0, import_react5.useState)(
    () => startOfMonth(value != null ? value : clampToBounds(/* @__PURE__ */ new Date(), min, max))
  );
  const wrapperRef = (0, import_react5.useRef)(null);
  useDismissOnOutside(wrapperRef, open, () => setOpen(false));
  (0, import_react5.useEffect)(() => {
    if (value && !isSameMonth(value, visibleMonth)) {
      setVisibleMonth(startOfMonth(value));
    }
  }, [value == null ? void 0 : value.getTime()]);
  const display = formatDate(value, fmt);
  const handleSelect = (0, import_react5.useCallback)(
    (d) => {
      if (isDisabled(d, disabledDates, min, max)) return;
      onChange(startOfDay(d));
      setOpen(false);
    },
    [disabledDates, min, max, onChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { ref: wrapperRef, className: cn("relative space-y-1", className), "data-testid": `datepicker-${baseId}`, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("label", { htmlFor: baseId, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sr-only", children: "(required)" })
      ] }) : null
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Trigger,
      {
        display,
        placeholder: msgs.placeholder,
        open,
        disabled,
        invalid: !!error,
        showClear: !!value,
        clearLabel: msgs.clear,
        onToggle: () => setOpen((o) => !o),
        onClear: () => onChange(null),
        controlsId: popoverId,
        ariaLabel: label,
        ariaDescribedBy: describedBy,
        required,
        testId: `datepicker-${baseId}-trigger`
      }
    ),
    name ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { type: "hidden", name, value: display }) : null,
    open && variant === "popover" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        id: popoverId,
        role: "dialog",
        "aria-modal": "false",
        "aria-label": msgs.dialogLabel,
        className: cn(
          "absolute z-30 mt-1 rounded-lg border border-border bg-surface-raised shadow-lg",
          "p-1"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PresetList, {}),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Calendar,
            {
              month: visibleMonth,
              selected: value != null ? value : null,
              onSelect: handleSelect,
              onMonthChange: (m) => setVisibleMonth(startOfMonth(m)),
              locale,
              min,
              max,
              disabledDates,
              ariaLabel: msgs.dialogLabel
            }
          )
        ]
      }
    ) : null,
    hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }) : null,
    error ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error }) : null
  ] });
}
function normaliseRange(r) {
  var _a, _b;
  return { start: (_a = r == null ? void 0 : r.start) != null ? _a : null, end: (_b = r == null ? void 0 : r.end) != null ? _b : null };
}
function DateRangePicker({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  disabled,
  required,
  min,
  max,
  disabledDates,
  locale: localeCode,
  format,
  messages,
  variant = "popover",
  className
}) {
  var _a, _b, _c, _d, _e, _f;
  const reactId = (0, import_react5.useId)();
  const baseId = id != null ? id : `dr-${reactId}`;
  const hintId = hint ? `${baseId}-hint` : void 0;
  const errorId = error ? `${baseId}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const popoverId = `${baseId}-popover`;
  const locale = resolveLocale(localeCode);
  const msgs = mergeMessages(locale.messages, messages);
  const fmt = format != null ? format : locale.displayFormat;
  const range = normaliseRange(value);
  const [open, setOpen] = (0, import_react5.useState)(false);
  const [leftMonth, setLeftMonth] = (0, import_react5.useState)(
    () => {
      var _a2;
      return startOfMonth((_a2 = range.start) != null ? _a2 : clampToBounds(/* @__PURE__ */ new Date(), min, max));
    }
  );
  const wrapperRef = (0, import_react5.useRef)(null);
  useDismissOnOutside(wrapperRef, open, () => setOpen(false));
  const rightMonth = (0, import_react5.useMemo)(() => addMonths(leftMonth, 1), [leftMonth]);
  const startStr = formatDate(range.start, fmt);
  const endStr = formatDate(range.end, fmt);
  const display = range.start || range.end ? `${startStr || msgs.placeholder}  \u2192  ${endStr || msgs.placeholder}` : "";
  const handleSelect = (0, import_react5.useCallback)(
    (d) => {
      if (isDisabled(d, disabledDates, min, max)) return;
      const day = startOfDay(d);
      if (!range.start || range.start && range.end) {
        onChange({ start: day, end: null });
        return;
      }
      if (isBefore(day, range.start)) {
        onChange({ start: day, end: null });
        return;
      }
      onChange({ start: range.start, end: day });
      setOpen(false);
    },
    [range.start, range.end, disabledDates, min, max, onChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { ref: wrapperRef, className: cn("relative space-y-1", className), "data-testid": `daterangepicker-${baseId}`, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "block text-sm font-medium text-text-primary", children: [
      label,
      required ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sr-only", children: "(required)" })
      ] }) : null
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Trigger,
      {
        display,
        placeholder: `${msgs.placeholder}  \u2192  ${msgs.placeholder}`,
        open,
        disabled,
        invalid: !!error,
        showClear: !!(range.start || range.end),
        clearLabel: msgs.clear,
        onToggle: () => setOpen((o) => !o),
        onClear: () => onChange({ start: null, end: null }),
        controlsId: popoverId,
        ariaLabel: label,
        ariaDescribedBy: describedBy,
        required,
        testId: `daterangepicker-${baseId}-trigger`
      }
    ),
    open && variant === "popover" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        id: popoverId,
        role: "dialog",
        "aria-modal": "false",
        "aria-label": msgs.dialogLabel,
        className: cn(
          "absolute z-30 mt-1 rounded-lg border border-border bg-surface-raised shadow-lg p-1",
          "flex"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PresetList, {}),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Calendar,
            {
              month: leftMonth,
              selected: (_a = range.start) != null ? _a : null,
              rangeStart: (_b = range.start) != null ? _b : null,
              rangeEnd: (_c = range.end) != null ? _c : null,
              onSelect: handleSelect,
              onMonthChange: (m) => setLeftMonth(startOfMonth(m)),
              locale,
              min,
              max,
              disabledDates,
              hideNextButton: true,
              ariaLabel: msgs.dialogLabel
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Calendar,
            {
              month: rightMonth,
              selected: (_d = range.end) != null ? _d : null,
              rangeStart: (_e = range.start) != null ? _e : null,
              rangeEnd: (_f = range.end) != null ? _f : null,
              onSelect: handleSelect,
              onMonthChange: (m) => setLeftMonth(startOfMonth(addMonths(m, -1))),
              locale,
              min,
              max,
              disabledDates,
              hidePrevButton: true,
              ariaLabel: msgs.dialogLabel
            }
          )
        ]
      }
    ) : null,
    hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }) : null,
    error ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error }) : null
  ] });
}
var import_react5, import_jsx_runtime11;
var init_DatePicker = __esm({
  "modules/ui/DatePicker/index.tsx"() {
    "use strict";
    "use client";
    import_react5 = require("react");
    init_cn();
    init_Calendar();
    init_PresetList();
    init_Trigger();
    init_useDateFns();
    import_jsx_runtime11 = require("react/jsx-runtime");
  }
});

// modules/ui/Spinner.tsx
function Spinner({
  size = "md",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: cn(
          "inline-block rounded-full border-border border-t-primary animate-spin",
          sizeMap3[size],
          className
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "sr-only", children: "Loading\u2026" })
  ] });
}
var import_jsx_runtime16, sizeMap3;
var init_Spinner = __esm({
  "modules/ui/Spinner.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_jsx_runtime16 = require("react/jsx-runtime");
    sizeMap3 = {
      xs: "h-3 w-3 border",
      sm: "h-4 w-4 border-2",
      md: "h-6 w-6 border-2",
      lg: "h-8 w-8 border-[3px]",
      xl: "h-12 w-12 border-4"
    };
  }
});

// modules/ui/Table/core/columnHelpers.ts
function headerClassFor(col, base2) {
  const parts = [base2];
  if (col.align === "center") parts.push(alignClass.center);
  else if (col.align === "right") parts.push(alignClass.right);
  else parts.push(alignClass.left);
  if (col.thClass) parts.push(col.thClass);
  return parts.join(" ");
}
function cellClassFor(col, base2) {
  const parts = [base2];
  if (col.align === "center") parts.push(alignClass.center);
  else if (col.align === "right") parts.push(alignClass.right);
  if (col.tdClass) parts.push(col.tdClass);
  return parts.join(" ");
}
var alignClass;
var init_columnHelpers = __esm({
  "modules/ui/Table/core/columnHelpers.ts"() {
    "use strict";
    alignClass = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    };
  }
});

// modules/ui/Table/Table.tsx
function Table({
  columns,
  rows,
  caption,
  emptyMessage = "No results found.",
  defaultSortKey,
  defaultSortDir,
  className
}) {
  const [sortKey, setSortKey] = (0, import_react11.useState)(defaultSortKey != null ? defaultSortKey : "");
  const [sortDir, setSortDir] = (0, import_react11.useState)(
    defaultSortDir != null ? defaultSortDir : null
  );
  function handleSort(key) {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
      return;
    }
    if (sortDir === "asc") {
      setSortDir("desc");
      return;
    }
    setSortDir(null);
    setSortKey("");
  }
  const sorted = sortKey && sortDir ? [...rows].sort((a, b) => {
    var _a, _b;
    const av = (_a = a[sortKey]) != null ? _a : "";
    const bv = (_b = b[sortKey]) != null ? _b : "";
    const cmp = String(av).localeCompare(String(bv), void 0, {
      numeric: true
    });
    return sortDir === "asc" ? cmp : -cmp;
  }) : rows;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "div",
    {
      className: cn(
        "w-full overflow-x-auto rounded-lg border border-border",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("table", { className: "w-full text-sm", children: [
        caption && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("caption", { className: "sr-only", children: caption }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: columns.map((col) => {
          const isSorted = sortKey === String(col.key);
          const dir = isSorted ? sortDir : null;
          return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "th",
            {
              scope: "col",
              "aria-sort": col.sortable ? isSorted && dir === "asc" ? "ascending" : isSorted && dir === "desc" ? "descending" : "none" : void 0,
              className: cn(
                headerClassFor(
                  col,
                  "px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider"
                ),
                col.sortable && "cursor-pointer select-none hover:text-text-primary transition-colors"
              ),
              onClick: col.sortable ? () => handleSort(String(col.key)) : void 0,
              children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "inline-flex items-center gap-1", children: [
                col.header,
                col.sortable && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  import_react_fontawesome8.FontAwesomeIcon,
                  {
                    icon: dir === "asc" ? import_free_solid_svg_icons8.faChevronUp : dir === "desc" ? import_free_solid_svg_icons8.faChevronDown : import_free_solid_svg_icons8.faSort,
                    className: "w-2.5 h-2.5",
                    "aria-hidden": "true"
                  }
                )
              ] })
            },
            String(col.key)
          );
        }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tbody", { className: "divide-y divide-border bg-surface-base", children: sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          "td",
          {
            colSpan: columns.length,
            className: "px-4 py-8 text-center text-text-secondary",
            children: emptyMessage
          }
        ) }) : sorted.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          "tr",
          {
            className: "hover:bg-surface-overlay transition-colors",
            children: columns.map((col) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "td",
                {
                  className: cellClassFor(col, "px-4 py-3 text-text-primary"),
                  children: col.render ? col.render(row) : String((_a = row[col.key]) != null ? _a : "")
                },
                String(col.key)
              );
            })
          },
          i
        )) })
      ] })
    }
  );
}
var import_react11, import_react_fontawesome8, import_free_solid_svg_icons8, import_jsx_runtime21;
var init_Table = __esm({
  "modules/ui/Table/Table.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react11 = require("react");
    import_react_fontawesome8 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons8 = require("@fortawesome/free-solid-svg-icons");
    init_columnHelpers();
    import_jsx_runtime21 = require("react/jsx-runtime");
  }
});

// modules/ui/Pagination.tsx
function Pagination({
  page,
  totalPages,
  onPageChange,
  size = "md",
  showFirstLast = false,
  showJumpTo = false,
  className
}) {
  const [jumpValue, setJumpValue] = (0, import_react12.useState)("");
  const s = sizeMap5[size];
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1
  );
  const withEllipsis = [];
  let prev = null;
  for (const p of visiblePages) {
    if (prev !== null && p - prev > 1) withEllipsis.push("ellipsis");
    withEllipsis.push(p);
    prev = p;
  }
  function navBtnClass(disabled) {
    return cn(
      "rounded-md font-medium border transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
      s.nav,
      disabled ? "border-border text-text-disabled cursor-not-allowed opacity-50" : "border-border text-text-secondary hover:bg-surface-overlay hover:text-text-primary"
    );
  }
  function handleJump(e) {
    e.preventDefault();
    const n = parseInt(jumpValue, 10);
    if (!isNaN(n) && n >= 1 && n <= totalPages) {
      onPageChange(n);
      setJumpValue("");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("nav", { "aria-label": "Pagination", className: cn("flex items-center gap-1 flex-wrap", className), children: [
    showFirstLast && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        type: "button",
        onClick: () => onPageChange(1),
        disabled: page <= 1,
        "aria-label": "First page",
        className: navBtnClass(page <= 1),
        children: "\xAB"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        type: "button",
        onClick: () => onPageChange(page - 1),
        disabled: page <= 1,
        "aria-label": "Previous page",
        className: navBtnClass(page <= 1),
        children: "\u2039"
      }
    ),
    withEllipsis.map(
      (item, i) => item === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: cn("text-text-disabled", s.nav), children: "\u2026" }, `e-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(item),
          "aria-label": `Page ${item}`,
          "aria-current": item === page ? "page" : void 0,
          className: cn(
            "rounded-md font-medium border transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            s.page,
            item === page ? "bg-primary text-primary-fg border-primary" : "border-border text-text-secondary hover:bg-surface-overlay hover:text-text-primary"
          ),
          children: item
        },
        item
      )
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        type: "button",
        onClick: () => onPageChange(page + 1),
        disabled: page >= totalPages,
        "aria-label": "Next page",
        className: navBtnClass(page >= totalPages),
        children: "\u203A"
      }
    ),
    showFirstLast && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        type: "button",
        onClick: () => onPageChange(totalPages),
        disabled: page >= totalPages,
        "aria-label": "Last page",
        className: navBtnClass(page >= totalPages),
        children: "\xBB"
      }
    ),
    showJumpTo && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("form", { onSubmit: handleJump, className: "flex items-center gap-1.5 ml-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("label", { htmlFor: "pagination-jump", className: "text-xs text-text-secondary whitespace-nowrap", children: "Go to" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "input",
        {
          id: "pagination-jump",
          type: "number",
          min: 1,
          max: totalPages,
          value: jumpValue,
          onChange: (e) => setJumpValue(e.target.value),
          "aria-label": `Jump to page, 1\u2013${totalPages}`,
          className: cn(
            "w-14 rounded-md border border-border bg-surface-base text-center text-sm text-text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            "py-1 px-1"
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "button",
        {
          type: "submit",
          className: cn(
            "rounded-md border border-border text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            "px-2 py-1 text-text-secondary hover:bg-surface-overlay hover:text-text-primary"
          ),
          children: "Go"
        }
      )
    ] })
  ] });
}
var import_react12, import_jsx_runtime22, sizeMap5;
var init_Pagination = __esm({
  "modules/ui/Pagination.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react12 = require("react");
    import_jsx_runtime22 = require("react/jsx-runtime");
    sizeMap5 = {
      sm: { page: "w-7 h-7 text-xs", nav: "px-2 py-1 text-xs" },
      md: { page: "w-9 h-9 text-sm", nav: "px-3 py-1.5 text-sm" },
      lg: { page: "w-10 h-10 text-base", nav: "px-4 py-2 text-base" }
    };
  }
});

// modules/ui/Table/parts/FilterPopover.tsx
function FilterPopover({
  column,
  value,
  onChange
}) {
  var _a, _b, _c, _d, _e;
  const [open, setOpen] = (0, import_react13.useState)(false);
  const wrapperRef = (0, import_react13.useRef)(null);
  const [draft, setDraft] = (0, import_react13.useState)(value);
  (0, import_react13.useEffect)(() => {
    setDraft(value);
  }, [value]);
  (0, import_react13.useEffect)(() => {
    if (!open) return;
    function onOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
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
  const active = !!value;
  function apply() {
    onChange(draft.trim());
    setOpen(false);
  }
  function clear() {
    setDraft("");
    onChange("");
    setOpen(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { ref: wrapperRef, className: "relative inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "button",
      {
        type: "button",
        "aria-label": active ? `Edit filter on ${column.header}` : `Filter ${column.header}`,
        "aria-expanded": open,
        onClick: (e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        },
        className: cn(
          "inline-flex items-center justify-center rounded p-1 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          active ? "text-primary hover:text-primary-hover" : "text-text-disabled hover:text-text-primary"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons9.faFilter, className: "w-2.5 h-2.5", "aria-hidden": "true" })
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      "div",
      {
        role: "dialog",
        "aria-label": `Filter ${column.header}`,
        onClick: (e) => e.stopPropagation(),
        className: cn(
          "absolute top-full left-0 mt-1 z-[70] min-w-[12rem] rounded-lg border border-border bg-surface-raised shadow-xl p-3"
        ),
        children: [
          ((_a = column.filter) == null ? void 0 : _a.kind) === "select" ? /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
            "select",
            {
              autoFocus: true,
              value: draft,
              onChange: (e) => setDraft(e.target.value),
              className: cn(
                "w-full rounded-md border border-border bg-surface-base px-2 py-1.5 text-sm text-text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("option", { value: "", children: "All" }),
                ((_c = (_b = column.filter) == null ? void 0 : _b.options) != null ? _c : []).map((opt) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
              ]
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            "input",
            {
              autoFocus: true,
              type: "text",
              value: draft,
              placeholder: (_e = (_d = column.filter) == null ? void 0 : _d.placeholder) != null ? _e : "Contains\u2026",
              onChange: (e) => setDraft(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") apply();
              },
              className: cn(
                "w-full rounded-md border border-border bg-surface-base px-2 py-1.5 text-sm text-text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "mt-2 flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "button",
              {
                type: "button",
                onClick: clear,
                className: cn(
                  "rounded-md px-2 py-1 text-xs font-medium text-text-secondary",
                  "hover:bg-surface-overlay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                ),
                children: "Clear"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              "button",
              {
                type: "button",
                onClick: apply,
                className: cn(
                  "rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-fg",
                  "hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                ),
                children: "Apply"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
var import_react13, import_react_fontawesome9, import_free_solid_svg_icons9, import_jsx_runtime23;
var init_FilterPopover = __esm({
  "modules/ui/Table/parts/FilterPopover.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react13 = require("react");
    import_react_fontawesome9 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons9 = require("@fortawesome/free-solid-svg-icons");
    import_jsx_runtime23 = require("react/jsx-runtime");
  }
});

// modules/ui/Table/parts/HeaderCell.tsx
function HeaderCell({
  column,
  sort,
  filterValue,
  onToggleSort,
  onSetFilter
}) {
  var _a;
  const key = String(column.key);
  const sortEntry = sort.find((s) => s.key === key);
  const dir = (_a = sortEntry == null ? void 0 : sortEntry.dir) != null ? _a : null;
  const ariaSort = column.sortable ? dir === "asc" ? "ascending" : dir === "desc" ? "descending" : "none" : void 0;
  const sortOrder = sortEntry && sort.length > 1 ? sort.findIndex((s) => s.key === key) + 1 : null;
  const headerClass = headerClassFor(
    column,
    "px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "th",
    {
      scope: "col",
      "aria-sort": ariaSort,
      className: cn(
        headerClass,
        column.sortable && "cursor-pointer select-none hover:text-text-primary transition-colors"
      ),
      onClick: column.sortable ? (e) => onToggleSort(key, e.shiftKey) : void 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "inline-flex items-center gap-1", children: [
        column.header,
        column.sortable && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          import_react_fontawesome10.FontAwesomeIcon,
          {
            icon: dir === "asc" ? import_free_solid_svg_icons10.faChevronUp : dir === "desc" ? import_free_solid_svg_icons10.faChevronDown : import_free_solid_svg_icons10.faSort,
            className: "w-2.5 h-2.5",
            "aria-hidden": "true"
          }
        ),
        sortOrder !== null && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "span",
          {
            "aria-hidden": "true",
            className: "ml-0.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-fg px-1",
            children: sortOrder
          }
        ),
        column.filter && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          FilterPopover,
          {
            column,
            value: filterValue,
            onChange: (v) => onSetFilter(key, v)
          }
        )
      ] })
    }
  );
}
var import_react_fontawesome10, import_free_solid_svg_icons10, import_jsx_runtime24;
var init_HeaderCell = __esm({
  "modules/ui/Table/parts/HeaderCell.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react_fontawesome10 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons10 = require("@fortawesome/free-solid-svg-icons");
    init_columnHelpers();
    init_FilterPopover();
    import_jsx_runtime24 = require("react/jsx-runtime");
  }
});

// modules/ui/Table/parts/BodyRow.tsx
function BodyRow({
  row,
  columns,
  onClick
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "tr",
    {
      onClick: onClick ? () => onClick(row) : void 0,
      className: cn(
        "hover:bg-surface-overlay transition-colors",
        onClick && "cursor-pointer"
      ),
      children: columns.map((col) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "td",
          {
            className: cellClassFor(col, "px-4 py-3 text-text-primary"),
            children: col.render ? col.render(row) : String((_a = row[col.key]) != null ? _a : "")
          },
          String(col.key)
        );
      })
    }
  );
}
var import_jsx_runtime25;
var init_BodyRow = __esm({
  "modules/ui/Table/parts/BodyRow.tsx"() {
    "use strict";
    "use client";
    init_cn();
    init_columnHelpers();
    import_jsx_runtime25 = require("react/jsx-runtime");
  }
});

// modules/ui/SearchBar.tsx
function SearchBar({
  id = "search",
  placeholder = "Search\u2026",
  value,
  onChange,
  onClear,
  className
}) {
  const [internal, setInternal] = (0, import_react14.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: cn("relative flex items-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute left-3 text-text-disabled pointer-events-none",
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faMagnifyingGlass, className: "w-3.5 h-3.5" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
    currentValue && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "button",
      {
        type: "button",
        onClick: handleClear,
        "aria-label": "Clear search",
        className: "absolute right-2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faXmark, className: "w-3 h-3" })
      }
    )
  ] });
}
var import_react14, import_react_fontawesome11, import_free_solid_svg_icons11, import_jsx_runtime26;
var init_SearchBar = __esm({
  "modules/ui/SearchBar.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react14 = require("react");
    import_react_fontawesome11 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons11 = require("@fortawesome/free-solid-svg-icons");
    import_jsx_runtime26 = require("react/jsx-runtime");
  }
});

// modules/ui/Table/parts/Toolbar.tsx
function Toolbar({
  searchable,
  searchValue,
  searchPlaceholder,
  onSearchChange,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
  rowsPerPageLabel,
  className,
  id
}) {
  if (!searchable && !pageSizeOptions) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: cn("flex items-center gap-2 flex-wrap", className), children: [
    searchable && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      SearchBar,
      {
        id: id ? `${id}-search` : "dt-search",
        value: searchValue,
        onChange: onSearchChange,
        placeholder: searchPlaceholder,
        className: "flex-1 min-w-40"
      }
    ),
    pageSizeOptions && onPageSizeChange && pageSize !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "label",
        {
          htmlFor: id ? `${id}-pagesize` : "dt-pagesize",
          className: "text-xs text-text-secondary whitespace-nowrap",
          children: rowsPerPageLabel != null ? rowsPerPageLabel : "Rows per page:"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "select",
        {
          id: id ? `${id}-pagesize` : "dt-pagesize",
          value: pageSize,
          onChange: (e) => onPageSizeChange(Number(e.target.value)),
          className: cn(
            "rounded-md border border-border bg-surface-base px-2 py-1.5 text-sm text-text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          ),
          children: pageSizeOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: s, children: s }, s))
        }
      )
    ] })
  ] });
}
var import_jsx_runtime27;
var init_Toolbar = __esm({
  "modules/ui/Table/parts/Toolbar.tsx"() {
    "use strict";
    "use client";
    init_cn();
    init_SearchBar();
    import_jsx_runtime27 = require("react/jsx-runtime");
  }
});

// modules/ui/Table/parts/EmptyState.tsx
function StateRow({
  state,
  colSpan,
  message
}) {
  if (state === "loading") {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "td",
      {
        colSpan,
        className: "px-4 py-10 text-center text-sm text-text-secondary",
        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Spinner, { size: "sm" }),
          message
        ] })
      }
    ) });
  }
  if (state === "error") {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "td",
      {
        colSpan,
        className: "px-4 py-10 text-center text-sm text-error-fg bg-error-subtle",
        children: message
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "td",
    {
      colSpan,
      className: "px-4 py-10 text-center text-sm text-text-secondary",
      children: message
    }
  ) });
}
var import_jsx_runtime28;
var init_EmptyState = __esm({
  "modules/ui/Table/parts/EmptyState.tsx"() {
    "use strict";
    "use client";
    init_Spinner();
    import_jsx_runtime28 = require("react/jsx-runtime");
  }
});

// modules/ui/Table/core/useTable.ts
function compareValues(a, b) {
  const av = a === void 0 || a === null ? "" : a;
  const bv = b === void 0 || b === null ? "" : b;
  return String(av).localeCompare(String(bv), void 0, { numeric: true });
}
function applySort(rows, sort) {
  if (!sort.length) return rows;
  return [...rows].sort((a, b) => {
    for (const s of sort) {
      const cmp = compareValues(a[s.key], b[s.key]);
      if (cmp !== 0) return s.dir === "asc" ? cmp : -cmp;
    }
    return 0;
  });
}
function applySearch(rows, columns, query) {
  const q = query.trim().toLowerCase();
  if (!q) return rows;
  return rows.filter(
    (row) => columns.some((col) => {
      var _a;
      if (col.render) {
        const raw = row[col.key];
        if (raw === void 0 || raw === null) return false;
        return String(raw).toLowerCase().includes(q);
      }
      return String((_a = row[col.key]) != null ? _a : "").toLowerCase().includes(q);
    })
  );
}
function applyColumnFilters(rows, columns, filters) {
  const active = columns.filter((c) => c.filter && filters[String(c.key)]);
  if (active.length === 0) return rows;
  return rows.filter(
    (row) => active.every((col) => {
      var _a, _b, _c, _d;
      const key = String(col.key);
      const target = String((_a = row[col.key]) != null ? _a : "").toLowerCase();
      const filterValue = (_c = (_b = filters[key]) == null ? void 0 : _b.toLowerCase()) != null ? _c : "";
      if (!filterValue) return true;
      if (((_d = col.filter) == null ? void 0 : _d.kind) === "select") return target === filterValue;
      return target.includes(filterValue);
    })
  );
}
function nextSortState(current, key, shiftKey) {
  const idx = current.findIndex((s) => s.key === key);
  if (!shiftKey) {
    if (idx < 0) return [{ key, dir: "asc" }];
    const existing2 = current[idx];
    if (existing2.dir === "asc") return [{ key, dir: "desc" }];
    return [];
  }
  const next = [...current];
  if (idx < 0) {
    next.push({ key, dir: "asc" });
    return next;
  }
  const existing = next[idx];
  if (existing.dir === "asc") {
    next[idx] = { key, dir: "desc" };
    return next;
  }
  next.splice(idx, 1);
  return next;
}
function useTable({
  rows,
  columns,
  initialSort = [],
  initialPageSize = 10,
  initialFilters = {},
  initialSearch = ""
}) {
  const [sort, setSort] = (0, import_react15.useState)(initialSort);
  const [page, setPage] = (0, import_react15.useState)(1);
  const [pageSize, setPageSize] = (0, import_react15.useState)(initialPageSize);
  const [search, setSearch] = (0, import_react15.useState)(initialSearch);
  const [filters, setFilters] = (0, import_react15.useState)(initialFilters);
  const filtered = (0, import_react15.useMemo)(
    () => applyColumnFilters(applySearch(rows, columns, search), columns, filters),
    [rows, columns, search, filters]
  );
  const sorted = (0, import_react15.useMemo)(() => applySort(filtered, sort), [filtered, sort]);
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const toggleSort = (0, import_react15.useCallback)(
    (key, shiftKey) => {
      setSort((curr) => nextSortState(curr, key, shiftKey));
      setPage(1);
    },
    []
  );
  const setColumnFilter = (0, import_react15.useCallback)(
    (key, value) => {
      setFilters((curr) => {
        if (!value) {
          const next = __spreadValues({}, curr);
          delete next[key];
          return next;
        }
        return __spreadProps(__spreadValues({}, curr), { [key]: value });
      });
      setPage(1);
    },
    []
  );
  const setGlobalSearch = (0, import_react15.useCallback)((v) => {
    setSearch(v);
    setPage(1);
  }, []);
  const changePageSize = (0, import_react15.useCallback)((n) => {
    setPageSize(n);
    setPage(1);
  }, []);
  return {
    // State
    sort,
    page: safePage,
    pageSize,
    search,
    filters,
    // Derived
    rows: sorted,
    total,
    totalPages,
    // Actions
    toggleSort,
    setColumnFilter,
    setGlobalSearch,
    changePageSize,
    setPage,
    setSort,
    setFilters
  };
}
var import_react15;
var init_useTable = __esm({
  "modules/ui/Table/core/useTable.ts"() {
    "use strict";
    "use client";
    import_react15 = require("react");
  }
});

// modules/ui/Table/core/useServerTable.ts
function useServerTable({
  fetchPage,
  initialPageSize = 10,
  initialSort = [],
  initialSearch = "",
  initialFilters = {},
  externalError = null
}) {
  const [rows, setRows] = (0, import_react16.useState)([]);
  const [total, setTotal] = (0, import_react16.useState)(0);
  const [sort, setSort] = (0, import_react16.useState)(initialSort);
  const [page, setPage] = (0, import_react16.useState)(1);
  const [pageSize, setPageSize] = (0, import_react16.useState)(initialPageSize);
  const [search, setSearch] = (0, import_react16.useState)(initialSearch);
  const [filters, setFilters] = (0, import_react16.useState)(initialFilters);
  const [loading, setLoading] = (0, import_react16.useState)(false);
  const [error, setError] = (0, import_react16.useState)(externalError);
  const fetchRef = (0, import_react16.useRef)(fetchPage);
  fetchRef.current = fetchPage;
  const reqIdRef = (0, import_react16.useRef)(0);
  (0, import_react16.useEffect)(() => {
    const id = ++reqIdRef.current;
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchRef.current({ page, pageSize, sort, search, filters }).then((res) => {
      if (cancelled || id !== reqIdRef.current) return;
      setRows(res.rows);
      setTotal(res.total);
    }).catch((err) => {
      if (cancelled || id !== reqIdRef.current) return;
      setError(err instanceof Error ? err.message : "Fetch failed");
    }).finally(() => {
      if (cancelled || id !== reqIdRef.current) return;
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [page, pageSize, sort, search, filters]);
  (0, import_react16.useEffect)(() => {
    setError(externalError);
  }, [externalError]);
  const toggleSort = (0, import_react16.useCallback)((key, shiftKey) => {
    setSort((curr) => nextSortState(curr, key, shiftKey));
    setPage(1);
  }, []);
  const setColumnFilter = (0, import_react16.useCallback)((key, value) => {
    setFilters((curr) => {
      if (!value) {
        const next = __spreadValues({}, curr);
        delete next[key];
        return next;
      }
      return __spreadProps(__spreadValues({}, curr), { [key]: value });
    });
    setPage(1);
  }, []);
  const setGlobalSearch = (0, import_react16.useCallback)((v) => {
    setSearch(v);
    setPage(1);
  }, []);
  const changePageSize = (0, import_react16.useCallback)((n) => {
    setPageSize(n);
    setPage(1);
  }, []);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return {
    rows,
    total,
    totalPages,
    page,
    pageSize,
    sort,
    search,
    filters,
    loading,
    error,
    toggleSort,
    setColumnFilter,
    setGlobalSearch,
    changePageSize,
    setPage,
    setSort,
    setFilters
  };
}
var import_react16;
var init_useServerTable = __esm({
  "modules/ui/Table/core/useServerTable.ts"() {
    "use strict";
    "use client";
    import_react16 = require("react");
    init_useTable();
  }
});

// modules/ui/Table/types.ts
var DEFAULT_MESSAGES2;
var init_types = __esm({
  "modules/ui/Table/types.ts"() {
    "use strict";
    DEFAULT_MESSAGES2 = {
      empty: "No results found.",
      loading: "Loading\u2026",
      error: "Something went wrong.",
      searchPlaceholder: "Search\u2026",
      rowsPerPage: "Rows per page:",
      filter: "Filter",
      clearFilter: "Clear",
      apply: "Apply"
    };
  }
});

// modules/ui/Table/DataTable.tsx
function DataTable(props) {
  var _a, _b;
  const generatedId = (0, import_react17.useId)();
  const id = (_a = props.id) != null ? _a : `dt-${generatedId.replace(/:/g, "")}`;
  if (props.legacyAdvancedRows !== void 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(LegacyAdvancedView, __spreadProps(__spreadValues({}, props), { id }));
  }
  if (props.serverControlled) {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(LegacyServerView, __spreadProps(__spreadValues({}, props), { id }));
  }
  const mode = (_b = props.mode) != null ? _b : "paginated";
  if (mode === "server") {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ServerView, __spreadProps(__spreadValues({}, props), { id }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ClientView, __spreadProps(__spreadValues({}, props), { mode, id }));
}
function ClientView(props) {
  const {
    columns,
    rows = [],
    caption,
    searchable: searchableProp,
    searchPlaceholder,
    pageSize: defaultPageSize = 10,
    pageSizeOptions = [5, 10, 25, 50],
    emptyMessage,
    state,
    loadingMessage,
    errorMessage,
    onRowClick,
    messages,
    initialSort = [],
    className,
    mode,
    id
  } = props;
  const msgs = __spreadValues(__spreadValues({}, DEFAULT_MESSAGES2), messages);
  const searchable = searchableProp != null ? searchableProp : true;
  const isStatic = mode === "static";
  const table = useTable({
    rows,
    columns,
    initialSort,
    initialPageSize: isStatic ? Math.max(rows.length, defaultPageSize) : defaultPageSize
  });
  const total = table.total;
  const pageRows = isStatic ? table.rows : table.rows.slice(
    (table.page - 1) * table.pageSize,
    table.page * table.pageSize
  );
  const start = total === 0 ? 0 : (table.page - 1) * table.pageSize + 1;
  const end = Math.min(table.page * table.pageSize, total);
  const resolvedState = state != null ? state : pageRows.length === 0 ? "empty" : "ready";
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: cn("space-y-3", className), "data-dt-id": id, children: [
    (searchable || !isStatic && searchable) && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      Toolbar,
      {
        id,
        searchable,
        searchValue: table.search,
        searchPlaceholder: searchPlaceholder != null ? searchPlaceholder : msgs.searchPlaceholder,
        onSearchChange: table.setGlobalSearch,
        pageSize: isStatic ? void 0 : table.pageSize,
        pageSizeOptions: isStatic ? void 0 : pageSizeOptions,
        onPageSizeChange: isStatic ? void 0 : table.changePageSize,
        rowsPerPageLabel: msgs.rowsPerPage
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "w-full overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("table", { className: "w-full text-sm", children: [
      caption && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("caption", { className: "sr-only", children: caption }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { children: columns.map((col) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          HeaderCell,
          {
            column: col,
            sort: table.sort,
            filterValue: (_a = table.filters[String(col.key)]) != null ? _a : "",
            onToggleSort: table.toggleSort,
            onSetFilter: table.setColumnFilter
          },
          String(col.key)
        );
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tbody", { className: "divide-y divide-border bg-surface-base", children: resolvedState !== "ready" ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        StateRow,
        {
          state: resolvedState,
          colSpan: columns.length,
          message: resolvedState === "loading" ? loadingMessage != null ? loadingMessage : msgs.loading : resolvedState === "error" ? errorMessage != null ? errorMessage : msgs.error : table.search && total === 0 ? `No results for "${table.search}"` : emptyMessage != null ? emptyMessage : msgs.empty
        }
      ) : pageRows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        BodyRow,
        {
          row,
          columns,
          onClick: onRowClick
        },
        i
      )) })
    ] }) }),
    !isStatic && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-xs text-text-secondary", children: total === 0 ? "No results" : `Showing ${start}\u2013${end} of ${total}${table.search ? ` (filtered from ${rows.length})` : ""}` }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        Pagination,
        {
          page: table.page,
          totalPages: table.totalPages,
          onPageChange: table.setPage
        }
      )
    ] })
  ] });
}
function ServerView(props) {
  var _a;
  const {
    columns,
    fetchPage,
    caption,
    searchable: searchableProp,
    searchPlaceholder,
    pageSize: defaultPageSize = 10,
    pageSizeOptions = [5, 10, 25, 50],
    emptyMessage,
    state: stateOverride,
    loadingMessage,
    errorMessage,
    onRowClick,
    messages,
    initialSort = [],
    className,
    id
  } = props;
  const msgs = __spreadValues(__spreadValues({}, DEFAULT_MESSAGES2), messages);
  const searchable = searchableProp != null ? searchableProp : true;
  if (!fetchPage) {
    throw new Error('DataTable mode="server" requires a `fetchPage` prop.');
  }
  const table = useServerTable({
    fetchPage,
    initialPageSize: defaultPageSize,
    initialSort
  });
  const resolvedState = stateOverride != null ? stateOverride : table.loading ? "loading" : table.error ? "error" : table.rows.length === 0 ? "empty" : "ready";
  const start = table.total === 0 ? 0 : (table.page - 1) * table.pageSize + 1;
  const end = Math.min(table.page * table.pageSize, table.total);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: cn("space-y-3", className), "data-dt-id": id, children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      Toolbar,
      {
        id,
        searchable,
        searchValue: table.search,
        searchPlaceholder: searchPlaceholder != null ? searchPlaceholder : msgs.searchPlaceholder,
        onSearchChange: table.setGlobalSearch,
        pageSize: table.pageSize,
        pageSizeOptions,
        onPageSizeChange: table.changePageSize,
        rowsPerPageLabel: msgs.rowsPerPage
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "w-full overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("table", { className: "w-full text-sm", children: [
      caption && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("caption", { className: "sr-only", children: caption }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { children: columns.map((col) => {
        var _a2;
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          HeaderCell,
          {
            column: col,
            sort: table.sort,
            filterValue: (_a2 = table.filters[String(col.key)]) != null ? _a2 : "",
            onToggleSort: table.toggleSort,
            onSetFilter: table.setColumnFilter
          },
          String(col.key)
        );
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tbody", { className: "divide-y divide-border bg-surface-base", children: resolvedState !== "ready" ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        StateRow,
        {
          state: resolvedState,
          colSpan: columns.length,
          message: resolvedState === "loading" ? loadingMessage != null ? loadingMessage : msgs.loading : resolvedState === "error" ? (_a = errorMessage != null ? errorMessage : table.error) != null ? _a : msgs.error : emptyMessage != null ? emptyMessage : msgs.empty
        }
      ) : table.rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        BodyRow,
        {
          row,
          columns,
          onClick: onRowClick
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-xs text-text-secondary", children: table.total === 0 ? "No results" : `Showing ${start}\u2013${end} of ${table.total}` }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        Pagination,
        {
          page: table.page,
          totalPages: table.totalPages,
          onPageChange: table.setPage
        }
      )
    ] })
  ] });
}
function LegacyAdvancedView(props) {
  const {
    columns,
    legacyAdvancedRows = [],
    caption,
    selectable = false,
    stickyHeader = false,
    emptyMessage = "No results found.",
    onSelectionChange,
    className
  } = props;
  const [selected, setSelected] = (0, import_react17.useState)(/* @__PURE__ */ new Set());
  const [expanded, setExpanded] = (0, import_react17.useState)(/* @__PURE__ */ new Set());
  function toggleRow(i) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      onSelectionChange == null ? void 0 : onSelectionChange([...next]);
      return next;
    });
  }
  function toggleAll() {
    if (selected.size === legacyAdvancedRows.length) {
      setSelected(/* @__PURE__ */ new Set());
      onSelectionChange == null ? void 0 : onSelectionChange([]);
    } else {
      const all = new Set(legacyAdvancedRows.map((_, i) => i));
      setSelected(all);
      onSelectionChange == null ? void 0 : onSelectionChange([...all]);
    }
  }
  function toggleExpand(i) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }
  const allSelected = legacyAdvancedRows.length > 0 && selected.size === legacyAdvancedRows.length;
  const someSelected = selected.size > 0 && selected.size < legacyAdvancedRows.length;
  const hasAnyExpand = legacyAdvancedRows.some((r) => r._expanded !== void 0);
  const totalCols = columns.length + (selectable ? 1 : 0) + (hasAnyExpand ? 1 : 0);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: cn("space-y-2", className), children: [
    selectable && selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { className: "text-xs text-text-secondary", children: [
      selected.size,
      " of ",
      legacyAdvancedRows.length,
      " row",
      legacyAdvancedRows.length !== 1 ? "s" : "",
      " selected"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      "div",
      {
        className: cn(
          "w-full rounded-lg border border-border",
          stickyHeader && "overflow-auto max-h-80"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("table", { className: "w-full text-sm", children: [
          caption && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("caption", { className: "sr-only", children: caption }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "thead",
            {
              className: cn(
                "bg-surface-sunken border-b border-border",
                stickyHeader && "sticky top-0 z-10"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("tr", { children: [
                selectable && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("th", { scope: "col", className: "w-10 px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  "input",
                  {
                    type: "checkbox",
                    "aria-label": "Select all rows",
                    checked: allSelected,
                    ref: (el) => {
                      if (el) el.indeterminate = someSelected;
                    },
                    onChange: toggleAll,
                    className: "h-4 w-4 rounded border-border text-primary focus-visible:ring-2 focus-visible:ring-border-focus"
                  }
                ) }),
                hasAnyExpand && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("th", { scope: "col", className: "w-10 px-4 py-3", "aria-label": "Expand" }),
                columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  "th",
                  {
                    scope: "col",
                    className: cn(
                      "px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider",
                      col.align === "center" && "text-center",
                      col.align === "right" && "text-right",
                      !col.align && "text-left"
                    ),
                    children: col.header
                  },
                  String(col.key)
                ))
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tbody", { className: "divide-y divide-border bg-surface-base", children: legacyAdvancedRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "td",
            {
              colSpan: totalCols,
              className: "px-4 py-10 text-center text-sm text-text-secondary",
              children: emptyMessage
            }
          ) }) : legacyAdvancedRows.map((row, i) => {
            const isSelected = selected.has(i);
            const isExpanded = expanded.has(i);
            const hasExpand = row._expanded !== void 0;
            return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              LegacyAdvancedRow,
              {
                row,
                rowIndex: i,
                columns,
                selectable,
                isSelected,
                isExpanded,
                hasExpand,
                hasAnyExpand,
                totalCols,
                onToggleRow: toggleRow,
                onToggleExpand: toggleExpand
              },
              i
            );
          }) })
        ] })
      }
    )
  ] });
}
function LegacyAdvancedRow({
  row,
  rowIndex,
  columns,
  selectable,
  isSelected,
  isExpanded,
  hasExpand,
  hasAnyExpand,
  totalCols,
  onToggleRow,
  onToggleExpand
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "tr",
      {
        className: cn(
          "hover:bg-surface-overlay transition-colors",
          isSelected && "bg-primary-subtle"
        ),
        children: [
          selectable && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { className: "w-10 px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "input",
            {
              type: "checkbox",
              "aria-label": `Select row ${rowIndex + 1}`,
              checked: isSelected,
              onChange: () => onToggleRow(rowIndex),
              className: "h-4 w-4 rounded border-border text-primary focus-visible:ring-2 focus-visible:ring-border-focus"
            }
          ) }),
          hasExpand && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { className: "w-10 px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "button",
            {
              type: "button",
              "aria-label": isExpanded ? "Collapse row" : "Expand row",
              "aria-expanded": isExpanded,
              onClick: () => onToggleExpand(rowIndex),
              className: "text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                import_react_fontawesome12.FontAwesomeIcon,
                {
                  icon: isExpanded ? import_free_solid_svg_icons12.faChevronDown : import_free_solid_svg_icons12.faChevronRight,
                  className: "w-2.5 h-2.5",
                  "aria-hidden": "true"
                }
              )
            }
          ) }),
          !hasExpand && hasAnyExpand && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("td", { className: "w-10 px-4 py-3" }),
          columns.map((col) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "td",
              {
                className: cellClassFor(col, "px-4 py-3 text-text-primary"),
                children: col.render ? col.render(row) : String((_a = row[col.key]) != null ? _a : "")
              },
              String(col.key)
            );
          })
        ]
      }
    ),
    hasExpand && isExpanded && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { className: "bg-surface-sunken", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      "td",
      {
        colSpan: totalCols,
        className: "px-6 py-3 text-sm text-text-secondary",
        children: row._expanded
      }
    ) })
  ] });
}
function LegacyServerView(props) {
  const {
    columns,
    rows = [],
    caption,
    emptyMessage = "No results found.",
    onRowClick,
    className,
    serverControlled
  } = props;
  if (!serverControlled) return null;
  const {
    page,
    totalPages,
    total,
    pageSize,
    onPageChange,
    getRowKey,
    loading = false,
    title,
    subtitle,
    headerRight,
    toolbar
  } = serverControlled;
  const safeTotalPages = Math.max(1, totalPages);
  const rangeStart = total !== void 0 && pageSize ? (page - 1) * pageSize + 1 : null;
  const rangeEnd = total !== void 0 && pageSize ? Math.min(page * pageSize, total) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "div",
    {
      className: cn(
        "rounded-xl border border-border bg-surface-raised shadow-sm overflow-hidden",
        className
      ),
      children: [
        (title || headerRight) && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-start justify-between gap-3 px-6 py-4 border-b border-border", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-xs text-text-secondary mt-0.5", children: subtitle })
          ] }),
          headerRight && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "shrink-0", children: headerRight })
        ] }),
        toolbar && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "px-6 pt-4 pb-0", children: toolbar }),
        loading ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex justify-center py-12", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "inline-block h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" }) }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("table", { className: "w-full text-sm", children: [
          caption && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("caption", { className: "sr-only", children: caption }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { className: "border-b border-border bg-surface-sunken", children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "th",
            {
              scope: "col",
              className: cn(
                "px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider",
                col.align === "center" && "text-center",
                col.align === "right" && "text-right",
                !col.align && "text-left"
              ),
              children: col.header
            },
            String(col.key)
          )) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tbody", { className: "divide-y divide-border bg-surface-base", children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "td",
            {
              colSpan: columns.length,
              className: "px-6 py-10 text-center text-sm text-text-secondary",
              children: emptyMessage
            }
          ) }) : rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            "tr",
            {
              onClick: () => onRowClick == null ? void 0 : onRowClick(row),
              className: cn(
                "hover:bg-surface-overlay transition-colors",
                onRowClick && "cursor-pointer"
              ),
              children: columns.map((col) => {
                var _a;
                return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  "td",
                  {
                    className: cn(
                      "px-6 py-4 text-text-primary",
                      col.align === "center" && "text-center",
                      col.align === "right" && "text-right"
                    ),
                    children: col.render ? col.render(row) : String((_a = row[col.key]) != null ? _a : "\u2014")
                  },
                  String(col.key)
                );
              })
            },
            getRowKey(row)
          )) })
        ] }) }),
        !loading && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-between gap-4 px-6 py-4 border-t border-border flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-xs text-text-secondary", children: total !== void 0 && rangeStart !== null && rangeEnd !== null ? `Showing ${rangeStart}\u2013${rangeEnd} of ${total}` : total !== void 0 ? `${total} result${total !== 1 ? "s" : ""}` : null }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            Pagination,
            {
              page,
              totalPages: safeTotalPages,
              onPageChange,
              showFirstLast: true
            }
          )
        ] })
      ]
    }
  );
}
var import_react17, import_react_fontawesome12, import_free_solid_svg_icons12, import_jsx_runtime29;
var init_DataTable = __esm({
  "modules/ui/Table/DataTable.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react17 = require("react");
    init_Pagination();
    init_HeaderCell();
    init_BodyRow();
    init_Toolbar();
    init_EmptyState();
    init_useTable();
    init_useServerTable();
    init_columnHelpers();
    import_react_fontawesome12 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons12 = require("@fortawesome/free-solid-svg-icons");
    init_types();
    import_jsx_runtime29 = require("react/jsx-runtime");
  }
});

// modules/ui/Table/index.tsx
function AdvancedDataTable(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    DataTable,
    {
      columns: props.columns,
      legacyAdvancedRows: props.rows,
      caption: props.caption,
      selectable: props.selectable,
      stickyHeader: props.stickyHeader,
      emptyMessage: props.emptyMessage,
      onSelectionChange: props.onSelectionChange,
      className: props.className
    }
  );
}
function ServerDataTable(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    DataTable,
    {
      columns: props.columns,
      rows: props.rows,
      caption: props.caption,
      emptyMessage: props.emptyMessage,
      onRowClick: props.onRowClick,
      className: props.className,
      serverControlled: {
        page: props.page,
        totalPages: props.totalPages,
        total: props.total,
        pageSize: props.pageSize,
        onPageChange: props.onPageChange,
        getRowKey: props.getRowKey,
        loading: props.loading,
        title: props.title,
        subtitle: props.subtitle,
        headerRight: props.headerRight,
        toolbar: props.toolbar
      }
    }
  );
}
var import_jsx_runtime30;
var init_Table2 = __esm({
  "modules/ui/Table/index.tsx"() {
    "use strict";
    "use client";
    init_Table();
    init_DataTable();
    init_DataTable();
    import_jsx_runtime30 = require("react/jsx-runtime");
  }
});

// modules/ui/AdvancedDataTable.tsx
var AdvancedDataTable_exports = {};
__export(AdvancedDataTable_exports, {
  AdvancedDataTable: () => AdvancedDataTable
});
var init_AdvancedDataTable = __esm({
  "modules/ui/AdvancedDataTable.tsx"() {
    "use strict";
    "use client";
    init_Table2();
  }
});

// modules/ui/Card.tsx
function Card(_a) {
  var _b = _a, {
    as,
    title,
    subtitle,
    headerRight,
    footer,
    children,
    variant = "raised",
    onClick,
    hoverable,
    loading = false,
    className
  } = _b, rest = __objRest(_b, [
    "as",
    "title",
    "subtitle",
    "headerRight",
    "footer",
    "children",
    "variant",
    "onClick",
    "hoverable",
    "loading",
    "className"
  ]);
  const isInteractive = !!onClick;
  const isHoverable = hoverable || isInteractive;
  const Tag = as != null ? as : isInteractive ? "button" : "div";
  const isButton = Tag === "button";
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    Tag,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, isButton && { type: "button" }), {
      onClick,
      className: cn(
        "rounded-xl border border-border overflow-hidden text-left",
        variant === "raised" && "bg-surface-raised shadow-sm",
        variant === "flat" && "bg-surface-base",
        variant === "outline" && "bg-transparent",
        isHoverable && "transition-shadow hover:shadow-md hover:border-border-focus cursor-pointer",
        isInteractive && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus w-full",
        loading && "pointer-events-none",
        className
      )
    }), rest), {
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "px-6 py-4 space-y-3 animate-pulse", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-4 bg-surface-sunken rounded w-2/3" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-3 bg-surface-sunken rounded w-full" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-3 bg-surface-sunken rounded w-4/5" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "h-3 bg-surface-sunken rounded w-1/2" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
        (title || headerRight) && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex items-start justify-between gap-3 px-6 py-4 border-b border-border", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-xs text-text-secondary mt-0.5", children: subtitle })
          ] }),
          headerRight && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "shrink-0", children: headerRight })
        ] }),
        children && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "px-6 py-4", children }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "px-6 py-3 border-t border-border bg-surface-base", children: footer })
      ] })
    })
  );
}
var import_jsx_runtime34;
var init_Card = __esm({
  "modules/ui/Card.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_jsx_runtime34 = require("react/jsx-runtime");
  }
});

// modules/ui/DataTable.tsx
var DataTable_exports = {};
__export(DataTable_exports, {
  DataTable: () => DataTable
});
var init_DataTable2 = __esm({
  "modules/ui/DataTable.tsx"() {
    "use strict";
    "use client";
    init_Table2();
  }
});

// modules/ui/DateRangePicker.tsx
var DateRangePicker_exports = {};
__export(DateRangePicker_exports, {
  DateRangePicker: () => DateRangePicker,
  TimePicker: () => TimePicker
});
function TimePicker({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  disabled,
  required,
  step = 60,
  className
}) {
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "input",
      {
        id,
        type: "time",
        value: value != null ? value : "",
        step,
        onChange: (e) => onChange(e.target.value),
        disabled,
        required,
        "aria-describedby": describedBy,
        "aria-invalid": !!error,
        className: cn(
          "block w-full rounded-md border px-3 py-2 text-sm transition-colors",
          "text-text-primary bg-surface-base",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-sunken",
          error ? "border-error ring-1 ring-error bg-error-subtle" : "border-border"
        )
      }
    ),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}
var import_jsx_runtime40;
var init_DateRangePicker = __esm({
  "modules/ui/DateRangePicker.tsx"() {
    "use strict";
    "use client";
    init_cn();
    init_DatePicker();
    import_jsx_runtime40 = require("react/jsx-runtime");
  }
});

// modules/ui/MapView/providers/leaflet.ts
function loadLeaflet() {
  if (_cached) return _cached;
  _cached = (async () => {
    const [rl, leaflet] = await Promise.all([
      import("react-leaflet"),
      import("leaflet")
    ]);
    return {
      MapContainer: rl.MapContainer,
      TileLayer: rl.TileLayer,
      Marker: rl.Marker,
      Tooltip: rl.Tooltip,
      Polygon: rl.Polygon,
      Polyline: rl.Polyline,
      useMap: rl.useMap,
      useMapEvents: rl.useMapEvents,
      L: leaflet
    };
  })();
  return _cached;
}
var LEAFLET_TILES, _cached;
var init_leaflet = __esm({
  "modules/ui/MapView/providers/leaflet.ts"() {
    "use strict";
    LEAFLET_TILES = {
      light: {
        url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      },
      dark: {
        url: "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }
    };
    _cached = null;
  }
});

// modules/ui/MapView/hooks/useDarkMode.ts
function useDarkMode() {
  const [isDark, setIsDark] = (0, import_react32.useState)(false);
  (0, import_react32.useEffect)(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const read = () => setIsDark(root.classList.contains("dark"));
    read();
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);
  return isDark;
}
var import_react32;
var init_useDarkMode = __esm({
  "modules/ui/MapView/hooks/useDarkMode.ts"() {
    "use strict";
    "use client";
    import_react32 = require("react");
  }
});

// modules/ui/MapView/hooks/useFitBounds.ts
function useFitBounds(map, L, markers, padding) {
  (0, import_react33.useEffect)(() => {
    if (!map || !L || padding === void 0) return;
    if (!markers.length) return;
    const bounds = L.latLngBounds(markers.map((m) => m.position));
    if (!bounds.isValid()) return;
    map.fitBounds(bounds, { padding: [padding, padding] });
  }, [map, L, padding, markers.length]);
}
var import_react33;
var init_useFitBounds = __esm({
  "modules/ui/MapView/hooks/useFitBounds.ts"() {
    "use strict";
    "use client";
    import_react33 = require("react");
  }
});

// modules/ui/MapView/parts/Popup.tsx
function Popup({ tooltip }) {
  var _a, _b;
  const hasMeta = Boolean(tooltip.description) || Boolean((_a = tooltip.fields) == null ? void 0 : _a.length);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { style: { minWidth: 130, maxWidth: 220 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { style: {
      fontWeight: 600,
      fontSize: 13,
      color: "#111827",
      marginBottom: hasMeta ? 3 : 0
    }, children: tooltip.title }),
    tooltip.description && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { style: {
      fontSize: 11,
      color: "#6b7280",
      marginBottom: ((_b = tooltip.fields) == null ? void 0 : _b.length) ? 4 : 0,
      lineHeight: 1.4
    }, children: tooltip.description }),
    tooltip.fields && tooltip.fields.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("table", { style: { width: "100%", borderCollapse: "collapse", marginTop: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("tbody", { children: tooltip.fields.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { style: { fontSize: 11, color: "#6b7280", paddingRight: 6, paddingTop: 1, whiteSpace: "nowrap" }, children: f.label }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("td", { style: { fontSize: 11, color: "#111827", fontWeight: 500, paddingTop: 1 }, children: f.value })
    ] }, i)) }) })
  ] });
}
var import_jsx_runtime44;
var init_Popup = __esm({
  "modules/ui/MapView/parts/Popup.tsx"() {
    "use strict";
    "use client";
    import_jsx_runtime44 = require("react/jsx-runtime");
  }
});

// modules/ui/MapView/types.ts
function markerSvg(color) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36" style="filter:drop-shadow(0 2px 3px rgba(0,0,0,0.35))">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 3.143 1.204 5.997 3.17 8.126L12 36l8.83-15.874A11.945 11.945 0 0 0 24 12C24 5.373 18.627 0 12 0z" fill="${color}"/>
      <circle cx="12" cy="12" r="4.5" fill="white" opacity="0.9"/>
    </svg>`;
}
var VARIANT_HEX, VARIANT_FILL;
var init_types2 = __esm({
  "modules/ui/MapView/types.ts"() {
    "use strict";
    VARIANT_HEX = {
      primary: "#3b82f6",
      success: "#22c55e",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#06b6d4",
      neutral: "#6b7280"
    };
    VARIANT_FILL = {
      primary: "#3b82f620",
      success: "#22c55e20",
      warning: "#f59e0b20",
      error: "#ef444420",
      info: "#06b6d420",
      neutral: "#6b728020"
    };
  }
});

// modules/ui/MapView/parts/Marker.tsx
function MarkerPart({ marker, L, RLMarker, RLTooltip, onMarkerClick }) {
  var _a;
  const variant = (_a = marker.variant) != null ? _a : "primary";
  const color = VARIANT_HEX[variant];
  const icon = L.divIcon({
    html: markerSvg(color),
    className: "",
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    tooltipAnchor: [0, -38]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
    RLMarker,
    {
      position: marker.position,
      icon,
      eventHandlers: { click: () => onMarkerClick == null ? void 0 : onMarkerClick(marker.id) },
      children: [
        marker.tooltip && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(RLTooltip, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Popup, { tooltip: marker.tooltip }) }),
        !marker.tooltip && marker.label && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(RLTooltip, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { style: { fontSize: 12, fontWeight: 600 }, children: marker.label }) })
      ]
    }
  );
}
var import_jsx_runtime45;
var init_Marker = __esm({
  "modules/ui/MapView/parts/Marker.tsx"() {
    "use strict";
    "use client";
    init_Popup();
    init_types2();
    import_jsx_runtime45 = require("react/jsx-runtime");
  }
});

// modules/ui/MapView/parts/Shapes.tsx
function ZoneShape({ zone, Polygon, Tooltip: Tooltip2 }) {
  var _a, _b;
  const variant = (_a = zone.variant) != null ? _a : "primary";
  const strokeColor = VARIANT_HEX[variant];
  const fillColor = VARIANT_FILL[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    Polygon,
    {
      positions: zone.positions,
      pathOptions: {
        color: strokeColor,
        fillColor,
        fillOpacity: (_b = zone.fillOpacity) != null ? _b : 0.25,
        weight: 2
      },
      children: zone.label && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Tooltip2, { sticky: true, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { style: { fontWeight: 600, fontSize: 12, color: strokeColor }, children: zone.label }) })
    }
  );
}
function RouteShape({ route, Polyline, Tooltip: Tooltip2 }) {
  var _a, _b;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    Polyline,
    {
      positions: route.positions,
      pathOptions: {
        color: (_a = route.color) != null ? _a : VARIANT_HEX.primary,
        weight: (_b = route.weight) != null ? _b : 3,
        dashArray: route.dashed ? "8 6" : void 0
      },
      children: route.label && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Tooltip2, { sticky: true, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { style: { fontWeight: 600, fontSize: 12 }, children: route.label }) })
    }
  );
}
var import_jsx_runtime46;
var init_Shapes = __esm({
  "modules/ui/MapView/parts/Shapes.tsx"() {
    "use strict";
    "use client";
    init_types2();
    import_jsx_runtime46 = require("react/jsx-runtime");
  }
});

// modules/ui/MapView/parts/LeafletCanvas.tsx
function LeafletCanvas(props) {
  const [bundle, setBundle] = (0, import_react34.useState)(null);
  (0, import_react34.useEffect)(() => {
    let alive = true;
    loadLeaflet().then((b) => {
      if (alive) setBundle(b);
    });
    return () => {
      alive = false;
    };
  }, []);
  if (!bundle) {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "w-full h-full flex items-center justify-center bg-surface-raised", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "text-sm text-text-secondary", children: "Harita y\xFCkleniyor\u2026" }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(InnerMap, __spreadProps(__spreadValues({}, props), { bundle }));
}
function InnerMap({
  center,
  zoom,
  markers,
  zones,
  routes,
  showZones,
  showRoutes,
  addMode,
  fitBoundsPadding,
  onMapClick,
  onMarkerClick,
  bundle
}) {
  const { MapContainer, TileLayer, Marker, Tooltip: Tooltip2, Polygon, Polyline, useMap, useMapEvents, L } = bundle;
  const isDark = useDarkMode();
  const tiles = isDark ? LEAFLET_TILES.dark : LEAFLET_TILES.light;
  function ClickHandler() {
    useMapEvents({
      click(e) {
        if (addMode) onMapClick(e.latlng.lat, e.latlng.lng);
      }
    });
    return null;
  }
  function FitBounds() {
    const map = useMap();
    useFitBounds(map, L, markers, fitBoundsPadding);
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    MapContainer,
    {
      center,
      zoom,
      style: { width: "100%", height: "100%" },
      className: addMode ? "cursor-crosshair" : "",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(TileLayer, { attribution: tiles.attribution, url: tiles.url }, isDark ? "dark" : "light"),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ClickHandler, {}),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FitBounds, {}),
        showZones && zones.map((zone) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ZoneShape, { zone, Polygon, Tooltip: Tooltip2 }, zone.id)),
        showRoutes && routes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(RouteShape, { route, Polyline, Tooltip: Tooltip2 }, route.id)),
        markers.map((marker) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          MarkerPart,
          {
            marker,
            L,
            RLMarker: Marker,
            RLTooltip: Tooltip2,
            onMarkerClick
          },
          marker.id
        ))
      ]
    }
  );
}
var import_react34, import_jsx_runtime47;
var init_LeafletCanvas = __esm({
  "modules/ui/MapView/parts/LeafletCanvas.tsx"() {
    "use strict";
    "use client";
    import_react34 = require("react");
    init_leaflet();
    init_useDarkMode();
    init_useFitBounds();
    init_Marker();
    init_Shapes();
    import_jsx_runtime47 = require("react/jsx-runtime");
  }
});

// modules/ui/MapView/parts/Toolbar.tsx
function Toolbar2({
  addMode,
  onToggleAddMode,
  hasZones,
  showZones,
  onToggleZones,
  hasRoutes,
  showRoutes,
  onToggleRoutes
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      Button,
      {
        size: "xs",
        variant: addMode ? "primary" : "outline",
        title: addMode ? "\u0130\u015Faret\xE7i eklemeyi iptal et" : "Haritaya i\u015Faret\xE7i ekle",
        onClick: onToggleAddMode,
        iconLeft: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: addMode ? import_free_solid_svg_icons19.faXmark : import_free_solid_svg_icons19.faPlus, "aria-hidden": "true" }),
        iconRight: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons19.faLocationDot, "aria-hidden": "true" }),
        children: addMode ? "\u0130ptal" : "\u0130\u015Faret\xE7i Ekle"
      }
    ),
    hasZones && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      Button,
      {
        size: "xs",
        variant: showZones ? "primary" : "outline",
        title: showZones ? "B\xF6lgeleri gizle" : "B\xF6lgeleri g\xF6ster",
        onClick: onToggleZones,
        iconLeft: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: showZones ? import_free_solid_svg_icons19.faEye : import_free_solid_svg_icons19.faEyeSlash, "aria-hidden": "true" }),
        iconRight: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons19.faLayerGroup, "aria-hidden": "true" }),
        children: "B\xF6lgeler"
      }
    ),
    hasRoutes && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      Button,
      {
        size: "xs",
        variant: showRoutes ? "primary" : "outline",
        title: showRoutes ? "Rotalar\u0131 gizle" : "Rotalar\u0131 g\xF6ster",
        onClick: onToggleRoutes,
        iconLeft: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: showRoutes ? import_free_solid_svg_icons19.faEye : import_free_solid_svg_icons19.faEyeSlash, "aria-hidden": "true" }),
        iconRight: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons19.faRoute, "aria-hidden": "true" }),
        children: "Rotalar"
      }
    ),
    addMode && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("span", { className: "text-xs text-primary font-medium animate-pulse", children: "Haritaya t\u0131klayarak i\u015Faret\xE7i ekleyin" })
  ] });
}
var import_react_fontawesome19, import_free_solid_svg_icons19, import_jsx_runtime48;
var init_Toolbar2 = __esm({
  "modules/ui/MapView/parts/Toolbar.tsx"() {
    "use strict";
    "use client";
    init_Button();
    import_react_fontawesome19 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons19 = require("@fortawesome/free-solid-svg-icons");
    import_jsx_runtime48 = require("react/jsx-runtime");
  }
});

// modules/ui/MapView/hooks/useInViewport.ts
function useInViewport(options) {
  const ref = (0, import_react35.useRef)(null);
  const [visible, setVisible] = (0, import_react35.useState)(false);
  (0, import_react35.useEffect)(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      __spreadValues({ rootMargin: "200px", threshold: 0.01 }, options)
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, options]);
  return { ref, visible };
}
var import_react35;
var init_useInViewport = __esm({
  "modules/ui/MapView/hooks/useInViewport.ts"() {
    "use strict";
    "use client";
    import_react35 = require("react");
  }
});

// modules/ui/MapView/hooks/useAutoMarkers.ts
function useAutoMarkers(onMarkerAdd) {
  const [extras, setExtras] = (0, import_react36.useState)([]);
  const counter = (0, import_react36.useRef)(0);
  const handleMapClick = (0, import_react36.useCallback)((lat, lng) => {
    const pos = [lat, lng];
    if (onMarkerAdd) {
      onMarkerAdd(pos);
      return;
    }
    counter.current += 1;
    setExtras((prev) => [
      ...prev,
      {
        id: `auto-${counter.current}`,
        position: pos,
        variant: "primary",
        tooltip: {
          title: `\u0130\u015Faret\xE7i ${counter.current}`,
          fields: [
            { label: "Enlem", value: lat.toFixed(5) },
            { label: "Boylam", value: lng.toFixed(5) }
          ]
        }
      }
    ]);
  }, [onMarkerAdd]);
  return { extras, handleMapClick };
}
var import_react36;
var init_useAutoMarkers = __esm({
  "modules/ui/MapView/hooks/useAutoMarkers.ts"() {
    "use strict";
    "use client";
    import_react36 = require("react");
  }
});

// modules/ui/MapView/index.tsx
var MapView_exports = {};
__export(MapView_exports, {
  MapView: () => MapView
});
function MapView({
  provider = "leaflet",
  center = [39.9334, 32.8597],
  zoom = 6,
  markers = [],
  zones = [],
  routes = [],
  fitBoundsPadding,
  onMarkerAdd,
  onMarkerClick,
  height = 480,
  className
}) {
  const { ref, visible } = useInViewport();
  const [addMode, setAddMode] = (0, import_react37.useState)(false);
  const [showZones, setShowZones] = (0, import_react37.useState)(true);
  const [showRoutes, setShowRoutes] = (0, import_react37.useState)(true);
  const { extras, handleMapClick } = useAutoMarkers(onMarkerAdd);
  const onMapClick = (0, import_react37.useCallback)((lat, lng) => {
    handleMapClick(lat, lng);
    setAddMode(false);
  }, [handleMapClick]);
  if (provider !== "leaflet") {
    throw new Error(`MapView provider "${provider}" is not yet implemented \u2014 TODO M1+`);
  }
  const cssHeight = typeof height === "number" ? `${height}px` : height;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Card, { variant: "raised", className: cn("overflow-hidden", className), children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "-mx-6 -my-4 flex flex-col", ref, children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "px-4 py-2.5 bg-surface-raised border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      Toolbar2,
      {
        addMode,
        onToggleAddMode: () => setAddMode((v) => !v),
        hasZones: zones.length > 0,
        showZones,
        onToggleZones: () => setShowZones((v) => !v),
        hasRoutes: routes.length > 0,
        showRoutes,
        onToggleRoutes: () => setShowRoutes((v) => !v)
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { style: { height: cssHeight, isolation: "isolate" }, children: !visible ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "w-full h-full flex items-center justify-center bg-surface-raised", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-sm text-text-secondary", children: "Harita y\xFCkleniyor\u2026" }) }) : /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      LeafletCanvas,
      {
        center,
        zoom,
        markers: [...markers, ...extras],
        zones,
        routes,
        showZones,
        showRoutes,
        addMode,
        fitBoundsPadding,
        onMapClick,
        onMarkerClick
      }
    ) })
  ] }) });
}
var import_react37, import_jsx_runtime49;
var init_MapView = __esm({
  "modules/ui/MapView/index.tsx"() {
    "use strict";
    "use client";
    import_react37 = require("react");
    init_cn();
    init_Card();
    init_LeafletCanvas();
    init_Toolbar2();
    init_useInViewport();
    init_useAutoMarkers();
    import_jsx_runtime49 = require("react/jsx-runtime");
  }
});

// modules/ui/ServerDataTable.tsx
var ServerDataTable_exports = {};
__export(ServerDataTable_exports, {
  ServerDataTable: () => ServerDataTable
});
var init_ServerDataTable = __esm({
  "modules/ui/ServerDataTable.tsx"() {
    "use strict";
    "use client";
    init_Table2();
  }
});

// modules/ui/VideoPlayer/format.ts
function formatTime(seconds) {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}
var init_format = __esm({
  "modules/ui/VideoPlayer/format.ts"() {
    "use strict";
  }
});

// modules/ui/VideoPlayer/parts/CtrlBtn.tsx
function CtrlBtn(_a) {
  var _b = _a, {
    onClick,
    children,
    primary,
    active,
    className
  } = _b, rest = __objRest(_b, [
    "onClick",
    "children",
    "primary",
    "active",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
    "button",
    __spreadProps(__spreadValues({
      type: "button",
      onClick,
      className: cn(
        "flex items-center justify-center rounded transition-colors",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
        primary ? "w-9 h-9 text-white hover:text-primary" : "w-8 h-8",
        !primary && active && "text-primary",
        !primary && !active && "text-white/80 hover:text-white",
        className
      )
    }, rest), {
      children
    })
  );
}
var import_jsx_runtime72;
var init_CtrlBtn = __esm({
  "modules/ui/VideoPlayer/parts/CtrlBtn.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_jsx_runtime72 = require("react/jsx-runtime");
  }
});

// modules/ui/VideoPlayer/parts/ControlRow.tsx
function ControlRow({
  playing,
  muted,
  volume,
  currentTime,
  duration,
  isFullscreen,
  showSettings,
  enableCast,
  castState,
  onPlay,
  onSeekBy,
  onToggleMute,
  onVolumeChange,
  onToggleSettings,
  onToggleCast,
  onToggleFullscreen
}) {
  const [showVolumeSlider, setShowVolumeSlider] = (0, import_react53.useState)(false);
  const volumeIcon = muted || volume === 0 ? import_free_solid_svg_icons28.faVolumeOff : volume < 0.5 ? import_free_solid_svg_icons28.faVolumeLow : import_free_solid_svg_icons28.faVolumeHigh;
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(CtrlBtn, { onClick: () => onSeekBy(-10), "aria-label": "Rewind 10 seconds", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons28.faRotateLeft, className: "text-sm", "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(CtrlBtn, { onClick: onPlay, "aria-label": playing ? "Pause" : "Play", primary: true, children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: playing ? import_free_solid_svg_icons28.faPause : import_free_solid_svg_icons28.faPlay, className: "text-base", "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(CtrlBtn, { onClick: () => onSeekBy(10), "aria-label": "Forward 10 seconds", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: import_free_solid_svg_icons28.faRotateRight, className: "text-sm", "aria-hidden": "true" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
      "div",
      {
        className: "flex items-center gap-1.5",
        onMouseEnter: () => setShowVolumeSlider(true),
        onMouseLeave: () => setShowVolumeSlider(false),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(CtrlBtn, { onClick: onToggleMute, "aria-label": muted ? "Unmute" : "Mute", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: volumeIcon, className: "text-sm", "aria-hidden": "true" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
            "div",
            {
              className: cn(
                "overflow-hidden transition-all duration-200 ease-out",
                showVolumeSlider ? "w-20 opacity-100" : "w-0 opacity-0"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
                "input",
                {
                  type: "range",
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: muted ? 0 : volume,
                  onChange: (e) => onVolumeChange(parseFloat(e.target.value)),
                  "aria-label": "Volume",
                  className: "w-full h-1 cursor-pointer accent-primary"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("span", { className: "text-white/70 text-xs tabular-nums flex-1 pl-1 select-none", children: [
      formatTime(currentTime),
      /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("span", { className: "text-white/30 mx-0.5", children: "/" }),
      formatTime(duration)
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
      CtrlBtn,
      {
        onClick: onToggleSettings,
        "aria-label": "Settings",
        "aria-expanded": showSettings,
        active: showSettings,
        children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_react_fontawesome28.FontAwesomeIcon,
          {
            icon: import_free_solid_svg_icons28.faGear,
            className: cn("text-sm transition-transform duration-300", showSettings && "rotate-[30deg]"),
            "aria-hidden": "true"
          }
        )
      }
    ),
    enableCast && castState !== "unavailable" && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
      CtrlBtn,
      {
        onClick: onToggleCast,
        "aria-label": castState === "connected" ? "Stop casting" : "Cast to device",
        "aria-pressed": castState === "connected",
        active: castState === "connected" || castState === "connecting",
        children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          import_react_fontawesome28.FontAwesomeIcon,
          {
            icon: import_free_brands_svg_icons.faChromecast,
            className: cn("text-sm", castState === "connecting" && "animate-pulse"),
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
      CtrlBtn,
      {
        onClick: onToggleFullscreen,
        "aria-label": isFullscreen ? "Exit fullscreen" : "Enter fullscreen",
        children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: isFullscreen ? import_free_solid_svg_icons28.faCompress : import_free_solid_svg_icons28.faExpand, className: "text-sm", "aria-hidden": "true" })
      }
    )
  ] });
}
var import_react53, import_react_fontawesome28, import_free_solid_svg_icons28, import_free_brands_svg_icons, import_jsx_runtime73;
var init_ControlRow = __esm({
  "modules/ui/VideoPlayer/parts/ControlRow.tsx"() {
    "use strict";
    "use client";
    import_react53 = require("react");
    init_cn();
    import_react_fontawesome28 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons28 = require("@fortawesome/free-solid-svg-icons");
    import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons");
    init_CtrlBtn();
    init_format();
    import_jsx_runtime73 = require("react/jsx-runtime");
  }
});

// modules/ui/VideoPlayer/parts/ProgressBar.tsx
var import_react54, import_jsx_runtime74, ProgressBar2;
var init_ProgressBar = __esm({
  "modules/ui/VideoPlayer/parts/ProgressBar.tsx"() {
    "use strict";
    "use client";
    import_react54 = require("react");
    import_jsx_runtime74 = require("react/jsx-runtime");
    ProgressBar2 = (0, import_react54.forwardRef)(function ProgressBar3({ progress, buffered, seekHoverX, seekHoverPct, hoverTime, onSeek, onSeekMouseMove, onSeekLeave }, ref) {
      return /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(
        "div",
        {
          ref,
          role: "slider",
          "aria-label": "Seek",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": Math.round(progress),
          tabIndex: 0,
          className: "relative h-1.5 rounded-full bg-white/20 cursor-pointer group/seek hover:h-2 transition-all",
          onClick: onSeek,
          onMouseMove: onSeekMouseMove,
          onMouseLeave: onSeekLeave,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
              "div",
              {
                className: "absolute inset-y-0 left-0 rounded-full bg-white/25",
                style: { width: `${buffered}%` }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
              "div",
              {
                className: "absolute inset-y-0 left-0 rounded-full bg-primary transition-all",
                style: { width: `${progress}%` }
              }
            ),
            seekHoverPct !== null && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
              "div",
              {
                className: "absolute inset-y-0 left-0 rounded-full bg-white/15",
                style: { width: `${seekHoverPct}%` }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
              "div",
              {
                className: "absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md opacity-0 group-hover/seek:opacity-100 transition-opacity",
                style: { left: `calc(${progress}% - 7px)` }
              }
            ),
            hoverTime && seekHoverX !== null && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
              "div",
              {
                className: "absolute -top-8 -translate-x-1/2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded pointer-events-none whitespace-nowrap",
                style: { left: seekHoverX },
                children: hoverTime
              }
            )
          ]
        }
      );
    });
  }
});

// modules/ui/VideoPlayer/parts/SettingsRow.tsx
function SettingsRow({ label, value, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(
    "button",
    {
      type: "button",
      onClick,
      className: "w-full flex items-center justify-between px-4 py-2.5 hover:bg-white/10 transition-colors group",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { className: "text-white/85 text-sm", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)("div", { className: "flex items-center gap-1.5 text-white/45 text-xs group-hover:text-white/65 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { children: value }),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faChevronRight, className: "text-[10px]", "aria-hidden": "true" })
        ] })
      ]
    }
  );
}
var import_react_fontawesome29, import_free_solid_svg_icons29, import_jsx_runtime75;
var init_SettingsRow = __esm({
  "modules/ui/VideoPlayer/parts/SettingsRow.tsx"() {
    "use strict";
    "use client";
    import_react_fontawesome29 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons29 = require("@fortawesome/free-solid-svg-icons");
    import_jsx_runtime75 = require("react/jsx-runtime");
  }
});

// modules/ui/VideoPlayer/parts/SettingsSubMenu.tsx
function SettingsSubMenu({ title, onBack, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(
      "button",
      {
        type: "button",
        onClick: onBack,
        className: "w-full flex items-center gap-2.5 px-3 py-2.5 border-b border-white/10 hover:bg-white/5 transition-colors",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_react_fontawesome30.FontAwesomeIcon, { icon: import_free_solid_svg_icons30.faChevronLeft, className: "text-white/50 text-xs", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("span", { className: "text-white text-sm font-semibold", children: title })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: "py-1", children })
  ] });
}
var import_react_fontawesome30, import_free_solid_svg_icons30, import_jsx_runtime76;
var init_SettingsSubMenu = __esm({
  "modules/ui/VideoPlayer/parts/SettingsSubMenu.tsx"() {
    "use strict";
    "use client";
    import_react_fontawesome30 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons30 = require("@fortawesome/free-solid-svg-icons");
    import_jsx_runtime76 = require("react/jsx-runtime");
  }
});

// modules/ui/VideoPlayer/parts/SettingsOption.tsx
function SettingsOption({ label, sublabel, selected, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
    "button",
    {
      type: "button",
      onClick,
      className: cn(
        "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-white/10",
        selected ? "text-primary font-semibold" : "text-white/80"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("span", { className: "flex flex-col items-start gap-0.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: label }),
          sublabel && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { className: "text-xs text-white/35 font-normal", children: sublabel })
        ] }),
        selected && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faCheck, className: "text-primary text-xs shrink-0", "aria-hidden": "true" })
      ]
    }
  );
}
var import_react_fontawesome31, import_free_solid_svg_icons31, import_jsx_runtime77;
var init_SettingsOption = __esm({
  "modules/ui/VideoPlayer/parts/SettingsOption.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react_fontawesome31 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons31 = require("@fortawesome/free-solid-svg-icons");
    import_jsx_runtime77 = require("react/jsx-runtime");
  }
});

// modules/ui/VideoPlayer/constants.ts
var SPEEDS, SUBTITLE_SIZES, SUBTITLE_SIZE_LABELS;
var init_constants = __esm({
  "modules/ui/VideoPlayer/constants.ts"() {
    "use strict";
    SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    SUBTITLE_SIZES = {
      sm: "0.8rem",
      md: "1rem",
      lg: "1.3rem",
      xl: "1.65rem"
    };
    SUBTITLE_SIZE_LABELS = {
      sm: "K\xFC\xE7\xFCk",
      md: "Orta",
      lg: "B\xFCy\xFCk",
      xl: "\xC7ok B\xFCy\xFCk"
    };
  }
});

// modules/ui/VideoPlayer/parts/SettingsPanel.tsx
var import_react55, import_react_fontawesome32, import_free_solid_svg_icons32, import_jsx_runtime78, SettingsPanel;
var init_SettingsPanel = __esm({
  "modules/ui/VideoPlayer/parts/SettingsPanel.tsx"() {
    "use strict";
    "use client";
    import_react55 = require("react");
    import_react_fontawesome32 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons32 = require("@fortawesome/free-solid-svg-icons");
    init_SettingsRow();
    init_SettingsSubMenu();
    init_SettingsOption();
    init_constants();
    import_jsx_runtime78 = require("react/jsx-runtime");
    SettingsPanel = (0, import_react55.forwardRef)(function SettingsPanel2({
      view,
      onChangeView,
      qualities,
      subtitles,
      audioTracks,
      selectedQuality,
      selectedSubtitle,
      selectedAudioTrack,
      speed,
      subtitleFontSize,
      applyQuality,
      applySpeed,
      applySubtitle,
      applySubtitleSize,
      applyAudioTrack
    }, ref) {
      var _a, _b, _c, _d, _e, _f;
      const currentQualityLabel = (_b = (_a = qualities == null ? void 0 : qualities.find((q) => q.value === selectedQuality)) == null ? void 0 : _a.label) != null ? _b : "Auto";
      const currentSubtitleLabel = selectedSubtitle !== null ? (_d = (_c = subtitles == null ? void 0 : subtitles[selectedSubtitle]) == null ? void 0 : _c.label) != null ? _d : "Kapal\u0131" : "Kapal\u0131";
      const currentAudioLabel = (_f = (_e = audioTracks == null ? void 0 : audioTracks[selectedAudioTrack]) == null ? void 0 : _e.label) != null ? _f : "";
      return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
        "div",
        {
          ref,
          className: "absolute bottom-14 right-4 w-60 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden z-20",
          children: [
            view === "main" && /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_jsx_runtime78.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "px-4 py-2.5 border-b border-white/10 flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_react_fontawesome32.FontAwesomeIcon, { icon: import_free_solid_svg_icons32.faGear, className: "text-white/50 text-xs", "aria-hidden": "true" }),
                /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("p", { className: "text-white/70 text-xs font-semibold uppercase tracking-wider", children: "Ayarlar" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "py-1", children: [
                qualities && qualities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                  SettingsRow,
                  {
                    label: "Kalite",
                    value: currentQualityLabel,
                    onClick: () => onChangeView("quality")
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                  SettingsRow,
                  {
                    label: "Oynatma H\u0131z\u0131",
                    value: speed === 1 ? "Normal" : `${speed}\xD7`,
                    onClick: () => onChangeView("speed")
                  }
                ),
                subtitles && subtitles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_jsx_runtime78.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                    SettingsRow,
                    {
                      label: "Altyaz\u0131",
                      value: currentSubtitleLabel,
                      onClick: () => onChangeView("subtitles")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                    SettingsRow,
                    {
                      label: "Altyaz\u0131 Boyutu",
                      value: SUBTITLE_SIZE_LABELS[subtitleFontSize],
                      onClick: () => onChangeView("subtitle-size")
                    }
                  )
                ] }),
                audioTracks && audioTracks.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                  SettingsRow,
                  {
                    label: "Ses Dili",
                    value: currentAudioLabel,
                    onClick: () => onChangeView("language")
                  }
                )
              ] })
            ] }),
            view === "quality" && qualities && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(SettingsSubMenu, { title: "Kalite", onBack: () => onChangeView("main"), children: qualities.map((q) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
              SettingsOption,
              {
                label: q.label,
                selected: selectedQuality === q.value,
                onClick: () => applyQuality(q.value)
              },
              q.value
            )) }),
            view === "speed" && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(SettingsSubMenu, { title: "Oynatma H\u0131z\u0131", onBack: () => onChangeView("main"), children: SPEEDS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
              SettingsOption,
              {
                label: s === 1 ? "1\xD7 (Normal)" : `${s}\xD7`,
                selected: speed === s,
                onClick: () => applySpeed(s)
              },
              s
            )) }),
            view === "subtitles" && subtitles && /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(SettingsSubMenu, { title: "Altyaz\u0131", onBack: () => onChangeView("main"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                SettingsOption,
                {
                  label: "Kapal\u0131",
                  selected: selectedSubtitle === null,
                  onClick: () => applySubtitle(null)
                }
              ),
              subtitles.map((sub, i) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                SettingsOption,
                {
                  label: sub.label,
                  selected: selectedSubtitle === i,
                  onClick: () => applySubtitle(i)
                },
                i
              ))
            ] }),
            view === "subtitle-size" && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(SettingsSubMenu, { title: "Altyaz\u0131 Boyutu", onBack: () => onChangeView("main"), children: Object.entries(SUBTITLE_SIZE_LABELS).map(
              ([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                SettingsOption,
                {
                  label,
                  sublabel: SUBTITLE_SIZES[key],
                  selected: subtitleFontSize === key,
                  onClick: () => applySubtitleSize(key)
                },
                key
              )
            ) }),
            view === "language" && audioTracks && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(SettingsSubMenu, { title: "Ses Dili", onBack: () => onChangeView("main"), children: audioTracks.map((track, i) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
              SettingsOption,
              {
                label: track.label,
                sublabel: track.language,
                selected: selectedAudioTrack === i,
                onClick: () => applyAudioTrack(i)
              },
              i
            )) })
          ]
        }
      );
    });
  }
});

// modules/ui/VideoPlayer/parts/Overlays.tsx
function CastOverlay({
  castDeviceName,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
    "div",
    {
      className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 gap-3 text-center px-6",
      style: {
        background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0) 100%)"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
          import_react_fontawesome33.FontAwesomeIcon,
          {
            icon: import_free_brands_svg_icons2.faChromecast,
            className: "text-white text-5xl drop-shadow-lg",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("p", { className: "text-white/90 text-sm font-medium", children: castDeviceName ? `${castDeviceName} cihaz\u0131na yay\u0131nlan\u0131yor` : "Cihaza yay\u0131nlan\u0131yor" }),
        title && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("p", { className: "text-white/60 text-xs max-w-[90%] truncate", children: title })
      ]
    }
  );
}
function LoadingOverlay() {
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    import_react_fontawesome33.FontAwesomeIcon,
    {
      icon: import_free_solid_svg_icons33.faSpinner,
      className: "text-white text-4xl animate-spin drop-shadow-lg",
      "aria-hidden": "true"
    }
  ) });
}
function CenterPlayOverlay({ playing }) {
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    "div",
    {
      className: cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        "transition-opacity duration-300 ease-out",
        playing ? "opacity-0" : "opacity-100"
      ),
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
        "div",
        {
          className: cn(
            "w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm",
            "flex items-center justify-center shadow-2xl ring-2 ring-white/20",
            "transition-transform duration-300 ease-out",
            playing ? "scale-125" : "scale-100"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_react_fontawesome33.FontAwesomeIcon, { icon: import_free_solid_svg_icons33.faPlay, className: "text-white text-2xl ml-1" })
        }
      )
    }
  );
}
function SubtitleOverlay({
  cueText,
  effectiveControls,
  subtitleFontSize
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    "div",
    {
      className: cn(
        "absolute left-0 right-0 flex justify-center px-6 pointer-events-none z-10 transition-all duration-300",
        effectiveControls ? "bottom-[4.5rem]" : "bottom-4"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
        "span",
        {
          className: "bg-black/80 text-white px-3 py-1 rounded-md text-center max-w-[85%] whitespace-pre-line leading-snug font-medium",
          style: { fontSize: SUBTITLE_SIZES[subtitleFontSize] },
          children: cueText
        }
      )
    }
  );
}
var import_react_fontawesome33, import_free_solid_svg_icons33, import_free_brands_svg_icons2, import_jsx_runtime79;
var init_Overlays = __esm({
  "modules/ui/VideoPlayer/parts/Overlays.tsx"() {
    "use strict";
    "use client";
    init_cn();
    import_react_fontawesome33 = require("@fortawesome/react-fontawesome");
    import_free_solid_svg_icons33 = require("@fortawesome/free-solid-svg-icons");
    import_free_brands_svg_icons2 = require("@fortawesome/free-brands-svg-icons");
    init_constants();
    import_jsx_runtime79 = require("react/jsx-runtime");
  }
});

// modules/ui/VideoPlayer/hooks/useControlsVisibility.ts
function useControlsVisibility({
  controlsVisible,
  autoHideControls,
  isCasting,
  playing,
  onChange
}) {
  const [showControls, setShowControls] = (0, import_react56.useState)(true);
  const hideTimerRef = (0, import_react56.useRef)(null);
  const isControlled = controlsVisible !== void 0;
  const effectiveControls = isCasting ? true : isControlled ? controlsVisible : showControls;
  (0, import_react56.useEffect)(() => {
    onChange == null ? void 0 : onChange(effectiveControls);
  }, [effectiveControls, onChange]);
  const scheduleHide = (0, import_react56.useCallback)(
    (isPlaying) => {
      if (isControlled) return;
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setShowControls(true);
      if (isCasting) return;
      if (isPlaying && autoHideControls) {
        hideTimerRef.current = setTimeout(() => setShowControls(false), 3e3);
      }
    },
    [isControlled, autoHideControls, isCasting]
  );
  const resetHideTimer = (0, import_react56.useCallback)(() => {
    scheduleHide(playing);
  }, [playing, scheduleHide]);
  const forceShow = (0, import_react56.useCallback)(() => {
    if (!isControlled) setShowControls(true);
  }, [isControlled]);
  const hideIfPlaying = (0, import_react56.useCallback)(() => {
    if (!isControlled && autoHideControls && playing) setShowControls(false);
  }, [isControlled, autoHideControls, playing]);
  return {
    showControls,
    setShowControls,
    effectiveControls,
    isControlled,
    scheduleHide,
    resetHideTimer,
    forceShow,
    hideIfPlaying
  };
}
var import_react56;
var init_useControlsVisibility = __esm({
  "modules/ui/VideoPlayer/hooks/useControlsVisibility.ts"() {
    "use strict";
    "use client";
    import_react56 = require("react");
  }
});

// modules/ui/VideoPlayer/hooks/useVideoEvents.ts
function useVideoEvents({
  videoRef,
  setCurrentTime,
  setDuration,
  setBuffered,
  setLoading,
  setPlaying,
  setIsFullscreen,
  scheduleHide,
  forceShow
}) {
  (0, import_react57.useEffect)(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onDurationChange = () => setDuration(video.duration || 0);
    const onProgress = () => {
      if (video.buffered.length > 0 && video.duration) {
        setBuffered(video.buffered.end(video.buffered.length - 1) / video.duration * 100);
      }
    };
    const onWaiting = () => setLoading(true);
    const onCanPlay = () => setLoading(false);
    const onPlay = () => {
      setPlaying(true);
      scheduleHide(true);
    };
    const onPause = () => {
      setPlaying(false);
      forceShow();
    };
    const onEnded = () => {
      setPlaying(false);
      forceShow();
    };
    const onFSChange = () => setIsFullscreen(!!document.fullscreenElement);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("durationchange", onDurationChange);
    video.addEventListener("progress", onProgress);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    document.addEventListener("fullscreenchange", onFSChange);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("durationchange", onDurationChange);
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("fullscreenchange", onFSChange);
    };
  }, [
    videoRef,
    setCurrentTime,
    setDuration,
    setBuffered,
    setLoading,
    setPlaying,
    setIsFullscreen,
    scheduleHide,
    forceShow
  ]);
}
var import_react57;
var init_useVideoEvents = __esm({
  "modules/ui/VideoPlayer/hooks/useVideoEvents.ts"() {
    "use strict";
    "use client";
    import_react57 = require("react");
  }
});

// modules/ui/VideoPlayer/hooks/useSubtitleCues.ts
function useSubtitleCues({ videoRef, selectedSubtitle, subtitles }) {
  const [cueText, setCueText] = (0, import_react58.useState)(null);
  (0, import_react58.useEffect)(() => {
    const video = videoRef.current;
    if (!video) return;
    Array.from(video.textTracks).forEach((t) => {
      t.mode = "disabled";
    });
    setCueText(null);
    if (selectedSubtitle === null || !(subtitles == null ? void 0 : subtitles[selectedSubtitle])) return;
    const track = video.textTracks[selectedSubtitle];
    if (!track) return;
    track.mode = "hidden";
    const onCueChange = () => {
      const active = track.activeCues;
      if (!active || active.length === 0) {
        setCueText(null);
        return;
      }
      const text = Array.from(active).map((c) => c.text.replace(/<[^>]+>/g, "")).join("\n");
      setCueText(text || null);
    };
    track.addEventListener("cuechange", onCueChange);
    return () => track.removeEventListener("cuechange", onCueChange);
  }, [videoRef, selectedSubtitle, subtitles]);
  return cueText;
}
var import_react58;
var init_useSubtitleCues = __esm({
  "modules/ui/VideoPlayer/hooks/useSubtitleCues.ts"() {
    "use strict";
    "use client";
    import_react58 = require("react");
  }
});

// modules/ui/VideoPlayer/hooks/useGoogleCast.ts
function mapState(s) {
  if (s === "CONNECTED") return "connected";
  if (s === "CONNECTING") return "connecting";
  if (s === "NO_DEVICES_AVAILABLE") return "unavailable";
  return "available";
}
function useGoogleCast({
  enableCast,
  videoRef,
  src,
  title,
  poster,
  setPlaying,
  setCurrentTime,
  setDuration,
  setVolume,
  setMuted,
  onCastStateChange
}) {
  const [castState, setCastState] = (0, import_react59.useState)("unavailable");
  const [castDeviceName, setCastDeviceName] = (0, import_react59.useState)(null);
  const remotePlayerRef = (0, import_react59.useRef)(null);
  const remoteControllerRef = (0, import_react59.useRef)(null);
  (0, import_react59.useEffect)(() => {
    var _a;
    if (!enableCast || typeof window === "undefined") return;
    const w = window;
    let cleanupListener;
    const init = () => {
      var _a2, _b;
      const framework = (_a2 = w.cast) == null ? void 0 : _a2.framework;
      const chromeCast = (_b = w.chrome) == null ? void 0 : _b.cast;
      if (!framework || !chromeCast) return;
      const context = framework.CastContext.getInstance();
      context.setOptions({
        receiverApplicationId: chromeCast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
        autoJoinPolicy: chromeCast.AutoJoinPolicy.ORIGIN_SCOPED
      });
      const sync = () => {
        var _a3, _b2;
        const next = mapState(context.getCastState());
        setCastState(next);
        const session = context.getCurrentSession();
        setCastDeviceName(
          next === "connected" ? (_b2 = (_a3 = session == null ? void 0 : session.getCastDevice()) == null ? void 0 : _a3.friendlyName) != null ? _b2 : null : null
        );
      };
      const handler = () => sync();
      context.addEventListener(framework.CastContextEventType.CAST_STATE_CHANGED, handler);
      sync();
      const remotePlayer = new framework.RemotePlayer();
      const remoteController = new framework.RemotePlayerController(remotePlayer);
      remotePlayerRef.current = remotePlayer;
      remoteControllerRef.current = remoteController;
      const syncRemote = () => {
        if (!remotePlayer.isConnected) return;
        setPlaying(!remotePlayer.isPaused);
        if (isFinite(remotePlayer.currentTime)) setCurrentTime(remotePlayer.currentTime);
        if (remotePlayer.duration > 0) setDuration(remotePlayer.duration);
        setVolume(remotePlayer.volumeLevel);
        setMuted(remotePlayer.isMuted);
      };
      remoteController.addEventListener(framework.RemotePlayerEventType.ANY_CHANGE, syncRemote);
      cleanupListener = () => {
        context.removeEventListener(framework.CastContextEventType.CAST_STATE_CHANGED, handler);
        remoteController.removeEventListener(
          framework.RemotePlayerEventType.ANY_CHANGE,
          syncRemote
        );
      };
    };
    if ((_a = w.cast) == null ? void 0 : _a.framework) {
      init();
    } else {
      const SCRIPT_ID = "google-cast-sdk";
      w.__onGCastApiAvailable = (available) => {
        if (available) init();
      };
      if (!document.getElementById(SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
        script.async = true;
        document.head.appendChild(script);
      }
    }
    return () => {
      cleanupListener == null ? void 0 : cleanupListener();
    };
  }, [enableCast, setPlaying, setCurrentTime, setDuration, setVolume, setMuted]);
  (0, import_react59.useEffect)(() => {
    onCastStateChange == null ? void 0 : onCastStateChange(castState);
  }, [castState, onCastStateChange]);
  const toggleCast = (0, import_react59.useCallback)(async () => {
    var _a, _b, _c;
    if (typeof window === "undefined") return;
    const w = window;
    const framework = (_a = w.cast) == null ? void 0 : _a.framework;
    const chromeCast = (_b = w.chrome) == null ? void 0 : _b.cast;
    if (!framework || !chromeCast) return;
    const context = framework.CastContext.getInstance();
    if (castState === "connected") {
      context.endCurrentSession(true);
      return;
    }
    try {
      await context.requestSession();
      const session = context.getCurrentSession();
      const v = videoRef.current;
      if (!session || !v) return;
      const first = Array.isArray(src) ? src[0] : src;
      const videoSrc = v.currentSrc || (typeof first === "string" ? first : first.src);
      const contentType = typeof first === "string" ? "video/mp4" : (_c = first.type) != null ? _c : "video/mp4";
      const mediaInfo = new chromeCast.media.MediaInfo(videoSrc, contentType);
      const metadata = new chromeCast.media.GenericMediaMetadata();
      if (title) metadata.title = title;
      if (poster) metadata.images = [new chromeCast.Image(poster)];
      mediaInfo.metadata = metadata;
      const request = new chromeCast.media.LoadRequest(mediaInfo);
      request.currentTime = v.currentTime;
      await session.loadMedia(request);
      v.pause();
    } catch (e) {
    }
  }, [castState, src, title, poster, videoRef]);
  return {
    castState,
    castDeviceName,
    remotePlayerRef,
    remoteControllerRef,
    toggleCast
  };
}
var import_react59;
var init_useGoogleCast = __esm({
  "modules/ui/VideoPlayer/hooks/useGoogleCast.ts"() {
    "use strict";
    "use client";
    import_react59 = require("react");
  }
});

// modules/ui/VideoPlayer/hooks/useFullscreen.ts
function useFullscreen(containerRef) {
  const toggleFullscreen = (0, import_react60.useCallback)(() => {
    const c = containerRef.current;
    if (!c) return;
    if (!document.fullscreenElement) c.requestFullscreen();
    else document.exitFullscreen();
  }, [containerRef]);
  return { toggleFullscreen };
}
var import_react60;
var init_useFullscreen = __esm({
  "modules/ui/VideoPlayer/hooks/useFullscreen.ts"() {
    "use strict";
    "use client";
    import_react60 = require("react");
  }
});

// modules/ui/VideoPlayer/hooks/useKeyboardShortcuts.ts
function useKeyboardShortcuts({
  containerRef,
  videoRef,
  togglePlay,
  seekBy,
  toggleMute,
  handleVolumeChange,
  toggleFullscreen,
  volume,
  showSettings,
  closeSettings
}) {
  (0, import_react61.useEffect)(() => {
    const handler = (e) => {
      const c = containerRef.current;
      if (!c) return;
      const focused = document.activeElement;
      if (!c.contains(focused) && focused !== c) return;
      const v = videoRef.current;
      if (!v) return;
      switch (e.key) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowLeft":
          e.preventDefault();
          seekBy(-10);
          break;
        case "ArrowRight":
          e.preventDefault();
          seekBy(10);
          break;
        case "ArrowUp":
          e.preventDefault();
          handleVolumeChange(volume + 0.1);
          break;
        case "ArrowDown":
          e.preventDefault();
          handleVolumeChange(volume - 0.1);
          break;
        case "m":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "Escape":
          if (showSettings) {
            e.preventDefault();
            closeSettings();
          }
          break;
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [
    containerRef,
    videoRef,
    togglePlay,
    seekBy,
    toggleMute,
    handleVolumeChange,
    toggleFullscreen,
    volume,
    showSettings,
    closeSettings
  ]);
}
var import_react61;
var init_useKeyboardShortcuts = __esm({
  "modules/ui/VideoPlayer/hooks/useKeyboardShortcuts.ts"() {
    "use strict";
    "use client";
    import_react61 = require("react");
  }
});

// modules/ui/VideoPlayer/hooks/usePlayerActions.ts
function usePlayerActions({
  isCasting,
  videoRef,
  progressRef,
  remotePlayerRef,
  remoteControllerRef,
  setVolume,
  setMuted
}) {
  const togglePlay = (0, import_react62.useCallback)(() => {
    if (isCasting && remoteControllerRef.current) {
      remoteControllerRef.current.playOrPause();
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }, [isCasting, remoteControllerRef, videoRef]);
  const seekBy = (0, import_react62.useCallback)(
    (delta) => {
      if (isCasting && remotePlayerRef.current && remoteControllerRef.current) {
        const rp = remotePlayerRef.current;
        rp.currentTime = Math.max(0, Math.min(rp.duration || 0, rp.currentTime + delta));
        remoteControllerRef.current.seek();
        return;
      }
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = Math.max(0, Math.min(v.duration, v.currentTime + delta));
    },
    [isCasting, remotePlayerRef, remoteControllerRef, videoRef]
  );
  const toggleMute = (0, import_react62.useCallback)(() => {
    if (isCasting && remoteControllerRef.current) {
      remoteControllerRef.current.muteOrUnmute();
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, [isCasting, remoteControllerRef, videoRef, setMuted]);
  const handleVolumeChange = (0, import_react62.useCallback)(
    (val) => {
      const c = Math.max(0, Math.min(1, val));
      if (isCasting && remotePlayerRef.current && remoteControllerRef.current) {
        remotePlayerRef.current.volumeLevel = c;
        remoteControllerRef.current.setVolumeLevel();
        setVolume(c);
        setMuted(c === 0);
        return;
      }
      const v = videoRef.current;
      if (!v) return;
      v.volume = c;
      v.muted = c === 0;
      setVolume(c);
      setMuted(c === 0);
    },
    [isCasting, remotePlayerRef, remoteControllerRef, videoRef, setVolume, setMuted]
  );
  const handleSeek = (0, import_react62.useCallback)(
    (e) => {
      const bar = progressRef.current;
      if (!bar) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (isCasting && remotePlayerRef.current && remoteControllerRef.current) {
        const rp = remotePlayerRef.current;
        if (!rp.duration) return;
        rp.currentTime = ratio * rp.duration;
        remoteControllerRef.current.seek();
        return;
      }
      const v = videoRef.current;
      if (!v || !v.duration) return;
      v.currentTime = ratio * v.duration;
    },
    [isCasting, remotePlayerRef, remoteControllerRef, videoRef, progressRef]
  );
  return { togglePlay, seekBy, toggleMute, handleVolumeChange, handleSeek };
}
var import_react62;
var init_usePlayerActions = __esm({
  "modules/ui/VideoPlayer/hooks/usePlayerActions.ts"() {
    "use strict";
    "use client";
    import_react62 = require("react");
  }
});

// modules/ui/VideoPlayer/index.tsx
var VideoPlayer_exports = {};
__export(VideoPlayer_exports, {
  VideoPlayer: () => VideoPlayer
});
function VideoPlayer({
  src,
  poster,
  title,
  autoPlay = false,
  loop = false,
  startMuted = false,
  qualities,
  defaultQuality,
  subtitles,
  audioTracks,
  onQualityChange,
  onAudioTrackChange,
  controlsVisible,
  autoHideControls = true,
  onControlsVisibilityChange,
  enableCast = true,
  onCastStateChange,
  className
}) {
  var _a, _b;
  const videoRef = (0, import_react63.useRef)(null);
  const containerRef = (0, import_react63.useRef)(null);
  const progressRef = (0, import_react63.useRef)(null);
  const settingsPanelRef = (0, import_react63.useRef)(null);
  const [playing, setPlaying] = (0, import_react63.useState)(false);
  const [currentTime, setCurrentTime] = (0, import_react63.useState)(0);
  const [duration, setDuration] = (0, import_react63.useState)(0);
  const [buffered, setBuffered] = (0, import_react63.useState)(0);
  const [volume, setVolume] = (0, import_react63.useState)(1);
  const [muted, setMuted] = (0, import_react63.useState)(startMuted);
  const [speed, setSpeed] = (0, import_react63.useState)(1);
  const [isFullscreen, setIsFullscreen] = (0, import_react63.useState)(false);
  const [loading, setLoading] = (0, import_react63.useState)(true);
  const [seekHoverX, setSeekHoverX] = (0, import_react63.useState)(null);
  const [selectedQuality, setSelectedQuality] = (0, import_react63.useState)((_b = defaultQuality != null ? defaultQuality : (_a = qualities == null ? void 0 : qualities[0]) == null ? void 0 : _a.value) != null ? _b : "");
  const [selectedSubtitle, setSelectedSubtitle] = (0, import_react63.useState)(null);
  const [selectedAudioTrack, setSelectedAudioTrack] = (0, import_react63.useState)(0);
  const [subtitleFontSize, setSubtitleFontSize] = (0, import_react63.useState)("md");
  const [showSettings, setShowSettings] = (0, import_react63.useState)(false);
  const [settingsView, setSettingsView] = (0, import_react63.useState)("main");
  const sources = Array.isArray(src) ? src : [src];
  const { castState, castDeviceName, remotePlayerRef, remoteControllerRef, toggleCast } = useGoogleCast({
    enableCast,
    videoRef,
    src,
    title,
    poster,
    setPlaying,
    setCurrentTime,
    setDuration,
    setVolume,
    setMuted,
    onCastStateChange
  });
  const isCasting = castState === "connected";
  const { effectiveControls, scheduleHide, resetHideTimer, forceShow, hideIfPlaying } = useControlsVisibility({
    controlsVisible,
    autoHideControls,
    isCasting,
    playing,
    onChange: onControlsVisibilityChange
  });
  useVideoEvents({ videoRef, setCurrentTime, setDuration, setBuffered, setLoading, setPlaying, setIsFullscreen, scheduleHide, forceShow });
  const cueText = useSubtitleCues({ videoRef, selectedSubtitle, subtitles });
  const { toggleFullscreen } = useFullscreen(containerRef);
  const { togglePlay, seekBy, toggleMute, handleVolumeChange, handleSeek } = usePlayerActions({
    isCasting,
    videoRef,
    progressRef,
    remotePlayerRef,
    remoteControllerRef,
    setVolume,
    setMuted
  });
  const closeSettings = (0, import_react63.useCallback)(() => {
    setShowSettings(false);
    setSettingsView("main");
  }, []);
  const applySpeed = (0, import_react63.useCallback)((s) => {
    const v = videoRef.current;
    if (v) v.playbackRate = s;
    setSpeed(s);
    closeSettings();
  }, [closeSettings]);
  const applyQuality = (0, import_react63.useCallback)((value) => {
    setSelectedQuality(value);
    onQualityChange == null ? void 0 : onQualityChange(value);
    closeSettings();
  }, [onQualityChange, closeSettings]);
  const applySubtitle = (0, import_react63.useCallback)((index) => {
    setSelectedSubtitle(index);
    closeSettings();
  }, [closeSettings]);
  const applyAudioTrack = (0, import_react63.useCallback)((index) => {
    setSelectedAudioTrack(index);
    onAudioTrackChange == null ? void 0 : onAudioTrackChange(index);
    closeSettings();
  }, [onAudioTrackChange, closeSettings]);
  const applySubtitleSize = (0, import_react63.useCallback)((size) => {
    setSubtitleFontSize(size);
    setSettingsView("main");
  }, []);
  useKeyboardShortcuts({ containerRef, videoRef, togglePlay, seekBy, toggleMute, handleVolumeChange, toggleFullscreen, volume, showSettings, closeSettings });
  (0, import_react63.useEffect)(() => {
    if (!showSettings) return;
    const handler = (e) => {
      var _a2;
      if (!((_a2 = settingsPanelRef.current) == null ? void 0 : _a2.contains(e.target))) closeSettings();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showSettings, closeSettings]);
  const handleSeekMouseMove = (0, import_react63.useCallback)((e) => {
    const bar = progressRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    setSeekHoverX(Math.max(0, Math.min(rect.width, e.clientX - rect.left)));
  }, []);
  const progress = duration > 0 ? currentTime / duration * 100 : 0;
  const seekHoverPct = seekHoverX !== null && progressRef.current ? seekHoverX / progressRef.current.getBoundingClientRect().width * 100 : null;
  const hoverTime = seekHoverPct !== null ? formatTime(seekHoverPct / 100 * duration) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(
    "div",
    {
      ref: containerRef,
      tabIndex: 0,
      "aria-label": title ? `Video: ${title}` : "Video player",
      className: cn(
        "relative bg-black rounded-xl overflow-hidden select-none outline-none",
        "aspect-video min-h-[10rem]",
        "focus-visible:ring-2 focus-visible:ring-border-focus",
        className
      ),
      onMouseMove: resetHideTimer,
      onMouseLeave: hideIfPlaying,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(
          "video",
          {
            ref: videoRef,
            poster,
            autoPlay,
            loop,
            muted: startMuted,
            crossOrigin: "anonymous",
            className: "w-full h-full object-contain block",
            onClick: togglePlay,
            style: { cursor: "pointer" },
            children: [
              sources.map((s, i) => typeof s === "string" ? /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("source", { src: s }, i) : /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("source", { src: s.src, type: s.type }, i)),
              subtitles == null ? void 0 : subtitles.map((sub, i) => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("track", { kind: "subtitles", label: sub.label, srcLang: sub.srclang, src: sub.src }, i))
            ]
          }
        ),
        isCasting && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(CastOverlay, { castDeviceName, title }),
        loading && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(LoadingOverlay, {}),
        !loading && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(CenterPlayOverlay, { playing }),
        cueText && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(SubtitleOverlay, { cueText, effectiveControls, subtitleFontSize }),
        /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(
          "div",
          {
            className: cn("absolute inset-0 flex flex-col justify-end transition-opacity duration-300 z-20", effectiveControls ? "opacity-100" : "opacity-0 pointer-events-none"),
            onClick: (e) => {
              if (e.target === e.currentTarget && !isCasting) togglePlay();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: "absolute inset-0 pointer-events-none", style: { background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)" } }),
              showSettings && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                SettingsPanel,
                {
                  ref: settingsPanelRef,
                  view: settingsView,
                  onChangeView: setSettingsView,
                  qualities,
                  subtitles,
                  audioTracks,
                  selectedQuality,
                  selectedSubtitle,
                  selectedAudioTrack,
                  speed,
                  subtitleFontSize,
                  applyQuality,
                  applySpeed,
                  applySubtitle,
                  applySubtitleSize,
                  applyAudioTrack
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: "relative px-4 pb-3 pt-6 space-y-2.5", children: [
                title && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("p", { className: "text-white/90 text-sm font-medium truncate leading-tight", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                  ProgressBar2,
                  {
                    ref: progressRef,
                    progress,
                    buffered,
                    seekHoverX,
                    seekHoverPct,
                    hoverTime,
                    onSeek: handleSeek,
                    onSeekMouseMove: handleSeekMouseMove,
                    onSeekLeave: () => setSeekHoverX(null)
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                  ControlRow,
                  {
                    playing,
                    muted,
                    volume,
                    currentTime,
                    duration,
                    isFullscreen,
                    showSettings,
                    enableCast,
                    castState,
                    onPlay: togglePlay,
                    onSeekBy: seekBy,
                    onToggleMute: toggleMute,
                    onVolumeChange: handleVolumeChange,
                    onToggleSettings: () => {
                      setShowSettings((v) => !v);
                      setSettingsView("main");
                    },
                    onToggleCast: toggleCast,
                    onToggleFullscreen: toggleFullscreen
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
var import_react63, import_jsx_runtime80;
var init_VideoPlayer = __esm({
  "modules/ui/VideoPlayer/index.tsx"() {
    "use strict";
    "use client";
    import_react63 = require("react");
    init_cn();
    init_format();
    init_ControlRow();
    init_ProgressBar();
    init_SettingsPanel();
    init_Overlays();
    init_useControlsVisibility();
    init_useVideoEvents();
    init_useSubtitleCues();
    init_useGoogleCast();
    init_useFullscreen();
    init_useKeyboardShortcuts();
    init_usePlayerActions();
    import_jsx_runtime80 = require("react/jsx-runtime");
  }
});

// modules/ui/index.ts
var ui_exports = {};
__export(ui_exports, {
  AdvancedDataTable: () => AdvancedDataTable,
  AlertBanner: () => AlertBanner,
  Announcer: () => Announcer,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  Badge: () => Badge,
  BrandLogo: () => BrandLogo,
  Breadcrumb: () => Breadcrumb,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Card: () => Card,
  Checkbox: () => Checkbox,
  CheckboxGroup: () => CheckboxGroup,
  ComboBox: () => ComboBox,
  ContentScoreBar: () => ContentScoreBar,
  DataTable: () => DataTable,
  DatePicker: () => DatePicker,
  DateRangePicker: () => DateRangePicker,
  Drawer: () => Drawer,
  DropdownMenu: () => DropdownMenu,
  EmptyState: () => EmptyState,
  FileInput: () => FileInput,
  Input: () => Input,
  LazyAdvancedDataTable: () => LazyAdvancedDataTable,
  LazyDataTable: () => LazyDataTable,
  LazyDateRangePicker: () => LazyDateRangePicker,
  LazyMapView: () => LazyMapView,
  LazyServerDataTable: () => LazyServerDataTable,
  LazyVideoPlayer: () => LazyVideoPlayer,
  LiveRegion: () => LiveRegion,
  MapView: () => MapView,
  Modal: () => Modal,
  MultiSelect: () => MultiSelect,
  PageHeader: () => PageHeader,
  Pagination: () => Pagination,
  Popover: () => Popover,
  RadioGroup: () => RadioGroup,
  SearchBar: () => SearchBar,
  Select: () => Select,
  ServerDataTable: () => ServerDataTable,
  SkeletonAvatar: () => SkeletonAvatar,
  SkeletonCard: () => SkeletonCard,
  SkeletonLine: () => SkeletonLine,
  SkeletonTableRow: () => SkeletonTableRow,
  SkeletonText: () => SkeletonText,
  SkipLink: () => SkipLink,
  Slider: () => Slider,
  Spinner: () => Spinner,
  StarRating: () => StarRating,
  StatCard: () => StatCard,
  Stepper: () => Stepper,
  TabButton: () => TabButton,
  TabGroup: () => TabGroup,
  Table: () => Table,
  TagInput: () => TagInput,
  Textarea: () => Textarea,
  TimePicker: () => TimePicker,
  Toast: () => Toast,
  ToastProvider: () => ToastProvider,
  ToastRegion: () => ToastRegion,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip,
  TreeView: () => TreeView,
  VideoPlayer: () => VideoPlayer,
  ViewToggle: () => ViewToggle,
  getEffectiveDuration: () => getEffectiveDuration,
  toast: () => toast,
  useToastStore: () => useToastStore
});
module.exports = __toCommonJS(ui_exports);

// modules/ui/Avatar.tsx
init_cn();
var import_jsx_runtime = (
  // eslint-disable-next-line @next/next/no-img-element
  require("react/jsx-runtime")
);
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
  const inner = src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      src,
      alt: name,
      className: cn(sizeClass, "rounded-full object-cover border border-border shrink-0", className)
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "relative inline-flex shrink-0", children: [
    inner,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex -space-x-2", "aria-label": `${avatars.length} users`, children: [
    visible.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, __spreadProps(__spreadValues({}, a), { size, className: "ring-2 ring-surface-base" }), i)),
    overflow > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
init_cn();
var import_react_fontawesome = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
        dot && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "span",
          {
            className: cn("h-1.5 w-1.5 rounded-full shrink-0", dotColorMap[variant]),
            "aria-hidden": "true"
          }
        ),
        children,
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Remove",
            onClick: onDismiss,
            className: "ml-0.5 leading-none hover:opacity-70 transition-opacity focus-visible:outline-none rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faXmark, className: "w-2.5 h-2.5" })
          }
        )
      ]
    })
  );
}

// modules/ui/BrandLogo.tsx
init_cn();
var import_jsx_runtime3 = require("react/jsx-runtime");
function BrandLogo({ children, size = "md", className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// modules/ui/index.ts
init_Button();

// modules/ui/Checkbox.tsx
init_cn();
var import_react = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  const ref = (0, import_react.useRef)(null);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  (0, import_react.useEffect)(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: cn("flex items-start gap-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { htmlFor: id, className: cn("text-sm font-medium", disabled ? "text-text-disabled" : "text-text-primary"), children: label }),
      hint && !error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: hintId, className: "text-xs text-text-secondary mt-0.5", children: hint }),
      error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: errorId, className: "text-xs text-error mt-0.5", role: "alert", children: error })
    ] })
  ] });
}

// modules/ui/DatePicker.tsx
init_DatePicker();

// modules/ui/FileInput/index.tsx
var import_react6 = require("react");
init_cn();
var import_react_fontawesome4 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/FileInput/types.ts
var DEFAULT_MESSAGES = {
  invalidSize: (limit) => `File exceeds ${limit} limit`,
  invalidType: "File type not allowed",
  tooMany: (max) => `Too many files \u2014 limit is ${max}`,
  uploadFailed: "Upload failed. Please try again.",
  uploadSuccess: "Files uploaded successfully."
};

// modules/ui/FileInput/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  const inputRef = (0, import_react6.useRef)(null);
  const rootRef = (0, import_react6.useRef)(null);
  const [entries, setEntries] = (0, import_react6.useState)([]);
  const [dragging, setDragging] = (0, import_react6.useState)(false);
  const [uploadState, setUploadState] = (0, import_react6.useState)("idle");
  const [errorMsg, setErrorMsg] = (0, import_react6.useState)("");
  const [globalError, setGlobalError] = (0, import_react6.useState)("");
  const isDisabled2 = disabled || uploadState === "uploading";
  const msg = __spreadValues(__spreadValues({}, DEFAULT_MESSAGES), messages);
  const validate = (0, import_react6.useCallback)(
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
  const addFiles = (0, import_react6.useCallback)(
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
  (0, import_react6.useEffect)(() => {
    if (!enablePaste || isDisabled2) return;
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
  }, [enablePaste, isDisabled2, addFiles]);
  const showError = globalError || (uploadState === "error" ? errorMsg : "");
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ref: rootRef, className: cn("space-y-2", className), tabIndex: enablePaste ? -1 : void 0, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-error", children: " *" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: cn(
          "relative rounded-lg border-2 border-dashed border-border bg-surface-base transition-colors",
          "flex flex-col items-center justify-center gap-2 px-6 py-8 text-center",
          dragging && "border-primary bg-primary-subtle",
          isDisabled2 && "opacity-50 cursor-not-allowed"
        ),
        onDragOver: (e) => {
          e.preventDefault();
          if (!isDisabled2) setDragging(true);
        },
        onDragLeave: () => setDragging(false),
        onDrop: (e) => {
          e.preventDefault();
          setDragging(false);
          if (!isDisabled2) addFiles(e.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faFolderOpen, className: "w-8 h-8 text-text-disabled", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-sm text-text-secondary", children: [
            "Drag & drop files here, or",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              "button",
              {
                type: "button",
                disabled: isDisabled2,
                onClick: () => {
                  var _a;
                  return (_a = inputRef.current) == null ? void 0 : _a.click();
                },
                className: "text-primary underline underline-offset-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded disabled:cursor-not-allowed",
                children: "browse"
              }
            ),
            enablePaste && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
              " ",
              "or paste"
            ] })
          ] }),
          hint && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs text-text-disabled", children: hint }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "input",
            {
              ref: inputRef,
              id,
              name,
              type: "file",
              multiple,
              accept,
              disabled: isDisabled2,
              required,
              className: "sr-only",
              onChange: (e) => addFiles(e.target.files)
            }
          )
        ]
      }
    ),
    entries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "space-y-1.5", "aria-label": "Selected files", children: entries.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "li",
      {
        className: cn(
          "flex items-center gap-3 rounded-md border px-3 py-2 text-sm",
          entry.error ? "border-error bg-error-subtle text-error-fg" : "border-border bg-surface-raised text-text-primary"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "flex-1 truncate min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "font-medium", children: entry.file.name }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "ml-2 text-xs text-text-secondary", children: formatBytes(entry.file.size) })
          ] }),
          entry.error && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-xs text-error shrink-0", children: entry.error }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "button",
            {
              type: "button",
              "aria-label": `Remove ${entry.file.name}`,
              onClick: () => removeEntry(i),
              className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faXmark, className: "w-3 h-3" })
            }
          )
        ]
      },
      i
    )) }),
    onUpload && entries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
    showError && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { role: "alert", className: "text-sm text-error", children: showError }),
    uploadState === "success" && !showError && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { role: "status", className: "text-sm text-success-fg", children: msg.uploadSuccess })
  ] });
}

// modules/ui/Input.tsx
init_cn();
var import_react7 = require("react");
var import_react_fontawesome5 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons5 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Input = (0, import_react7.forwardRef)(function Input2(_a, ref) {
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
  const [showPassword, setShowPassword] = (0, import_react7.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "sr-only", children: "(required)" })
      ] }),
      readOnly && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ml-2 text-xs font-normal text-text-disabled", children: "(read-only)" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative", children: [
      prefixIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-disabled pointer-events-none", children: prefixIcon }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      isPassword && !readOnly && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "button",
        {
          type: "button",
          "aria-label": showPassword ? "Hide password" : "Show password",
          onClick: () => setShowPassword((v) => !v),
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none text-sm",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: showPassword ? import_free_solid_svg_icons5.faEyeSlash : import_free_solid_svg_icons5.faEye, className: "w-3.5 h-3.5" })
        }
      ),
      clearable && value && !readOnly && !isPassword && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "button",
        {
          type: "button",
          "aria-label": "Clear",
          onClick: onClear,
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons5.faXmark, className: "w-3 h-3" })
        }
      ),
      suffixIcon && !clearable && !isPassword && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-disabled pointer-events-none", children: suffixIcon }),
      isNumber && !readOnly && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "absolute right-0 top-0 h-full flex flex-col border-l border-border overflow-hidden rounded-r-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Increment",
            onClick: increment,
            tabIndex: -1,
            className: "flex-1 px-2 text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none border-b border-border leading-none flex items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons5.faChevronUp, className: "w-2 h-2" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Decrement",
            onClick: decrement,
            tabIndex: -1,
            className: "flex-1 px-2 text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors focus-visible:outline-none leading-none flex items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons5.faChevronDown, className: "w-2 h-2" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex-1", children: [
        hint && !error && !success && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { id: `${id}-hint`, className: "text-xs text-text-secondary", children: hint }),
        error && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { id: `${id}-error`, className: "text-xs text-error", role: "alert", children: error }),
        success && !error && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { id: `${id}-success`, className: "text-xs text-success-fg", children: success })
      ] }),
      showCount && maxLength && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("p", { className: cn("text-xs shrink-0", charCount >= maxLength ? "text-error" : "text-text-disabled"), children: [
        charCount,
        "/",
        maxLength
      ] })
    ] })
  ] });
});

// modules/ui/Select.tsx
init_cn();
var import_react8 = require("react");
var import_react_fontawesome6 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons6 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  const [open, setOpen] = (0, import_react8.useState)(false);
  const [search, setSearch] = (0, import_react8.useState)("");
  const containerRef = (0, import_react8.useRef)(null);
  const searchRef = (0, import_react8.useRef)(null);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const selected = options.find((o) => o.value === value);
  const filtered = searchable && search ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase())) : options;
  (0, import_react8.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { ref: containerRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { id: `${id}-label`, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
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
          (selected == null ? void 0 : selected.icon) && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "shrink-0", children: selected.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: cn("flex-1", !selected && "text-text-disabled"), children: selected ? selected.label : placeholder != null ? placeholder : "Select\u2026" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: open ? import_free_solid_svg_icons6.faChevronUp : import_free_solid_svg_icons6.faChevronDown, className: "w-3 h-3 text-text-disabled", "aria-hidden": "true" })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "z-20 w-full rounded-md border border-border bg-surface-raised shadow-lg overflow-hidden", children: [
      searchable && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("ul", { role: "listbox", "aria-labelledby": `${id}-label`, className: "py-1 max-h-48 overflow-y-auto", children: [
        placeholder && !search && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
        filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: "No results found." }) : filtered.map((opt) => {
          const active = opt.value === value;
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
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
                opt.icon && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "shrink-0", "aria-hidden": "true", children: opt.icon }),
                opt.label,
                active && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: import_free_solid_svg_icons6.faCheck, className: "ml-auto w-3 h-3 text-primary", "aria-hidden": "true" })
              ]
            },
            opt.value
          );
        })
      ] })
    ] }),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}
var Select = (0, import_react8.forwardRef)(function Select2(_a, ref) {
  var _b = _a, { id, label, options, placeholder, hint, error, disabled, required, searchable, className } = _b, props = __objRest(_b, ["id", "label", "options", "placeholder", "hint", "error", "disabled", "required", "searchable", "className"]);
  const hasIcons = options.some((o) => o.icon);
  if (hasIcons || searchable) {
    const _a2 = props, { value, onChange } = _a2, rest = __objRest(_a2, ["value", "onChange"]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
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
          placeholder && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("option", { value: "", children: placeholder }),
          options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
        ]
      })
    ),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
});

// modules/ui/SkipLink.tsx
init_cn();
var import_jsx_runtime15 = require("react/jsx-runtime");
function SkipLink({
  href = "#main-content",
  label = "Skip to main content",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "a",
    {
      href,
      className: cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]",
        "px-4 py-2 rounded-md text-sm font-medium",
        "bg-primary text-primary-fg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
        className
      ),
      children: label
    }
  );
}
function LiveRegion({
  message,
  politeness = "polite",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    {
      role: "status",
      "aria-live": politeness,
      "aria-atomic": "true",
      className: cn("sr-only", className),
      children: message
    }
  );
}
function Announcer({
  message,
  politeness = "polite"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(LiveRegion, { message, politeness });
}

// modules/ui/index.ts
init_Spinner();

// modules/ui/StarRating.tsx
init_cn();
var import_react_fontawesome7 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons7 = require("@fortawesome/free-solid-svg-icons");
var import_free_regular_svg_icons = require("@fortawesome/free-regular-svg-icons");
var import_react9 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var sizeClasses2 = {
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
  const [hoverValue, setHoverValue] = (0, import_react9.useState)(null);
  const isInteractive = !readonly && typeof onChange === "function";
  const displayValue = isInteractive && hoverValue !== null ? hoverValue : safeValue;
  const labelText = ariaLabel != null ? ariaLabel : `${safeValue.toFixed(1)} out of ${TOTAL_STARS} stars`;
  const starClass = sizeClasses2[size];
  if (!isInteractive) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
            return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              import_react_fontawesome7.FontAwesomeIcon,
              {
                icon: filled ? import_free_solid_svg_icons7.faStar : half ? import_free_solid_svg_icons7.faStarHalfStroke : import_free_regular_svg_icons.faStar,
                className: cn(starClass, filled || half ? "text-warning" : "text-text-disabled"),
                "aria-hidden": "true"
              },
              starIndex
            );
          }),
          caption && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "ml-2 text-sm text-text-secondary", children: caption })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                import_react_fontawesome7.FontAwesomeIcon,
                {
                  icon: filled ? import_free_solid_svg_icons7.faStar : import_free_regular_svg_icons.faStar,
                  className: cn(starClass, filled ? "text-warning" : "text-text-disabled"),
                  "aria-hidden": "true"
                }
              )
            },
            starIndex
          );
        }),
        caption && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "ml-2 text-sm text-text-secondary", children: caption })
      ]
    }
  );
}

// modules/ui/StatCard.tsx
init_cn();
var import_jsx_runtime18 = require("react/jsx-runtime");
function StatCard({ label, value, accent, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: cn("bg-surface-raised border border-border rounded-xl px-5 py-4 flex flex-col gap-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: cn("text-2xl font-black tabular-nums", accent != null ? accent : "text-text-primary"), children: value }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-xs text-text-secondary", children: label })
  ] });
}

// modules/ui/Textarea.tsx
init_cn();
var import_react10 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Textarea = (0, import_react10.forwardRef)(function Textarea2(_a, ref) {
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
});

// modules/ui/Toggle.tsx
init_cn();
var import_jsx_runtime20 = require("react/jsx-runtime");
var sizeMap4 = {
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
  const { track, thumb, on } = sizeMap4[size];
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "label",
    {
      htmlFor: id,
      className: cn(
        "flex items-start gap-3",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "relative shrink-0 mt-0.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "div",
            {
              className: cn(
                "rounded-full transition-colors duration-200",
                track,
                checked ? "bg-primary" : "bg-surface-sunken border border-border"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-sm font-medium text-text-primary", children: label }),
          description && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-xs text-text-secondary mt-0.5", children: description })
        ] })
      ]
    }
  );
}

// modules/ui/index.ts
init_AdvancedDataTable();

// modules/ui/AlertBanner.tsx
init_cn();
var import_react18 = require("react");
var import_react_fontawesome13 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons13 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime31 = require("react/jsx-runtime");
var variantMap2 = {
  success: { container: "bg-success-subtle border-success text-success-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCircleCheck, className: "w-4 h-4" }) },
  warning: { container: "bg-warning-subtle border-warning text-warning-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faTriangleExclamation, className: "w-4 h-4" }) },
  error: { container: "bg-error-subtle border-error text-error-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCircleXmark, className: "w-4 h-4" }) },
  info: { container: "bg-info-subtle border-info text-info-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faCircleInfo, className: "w-4 h-4" }) }
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
  const [dismissed, setDismissed] = (0, import_react18.useState)(false);
  if (dismissed) return null;
  const { container, defaultIcon } = variantMap2[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "div",
    {
      role: "alert",
      className: cn(
        "flex items-start gap-3 rounded-lg border p-4",
        container,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { "aria-hidden": "true", className: "mt-0.5 shrink-0 font-bold", children: icon != null ? icon : defaultIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex-1 text-sm min-w-0", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: cn(title && "mt-0.5"), children: message }),
          action && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "mt-2", children: action.href ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "a",
            {
              href: action.href,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "button",
            {
              type: "button",
              onClick: action.onClick,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) })
        ] }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss",
            onClick: () => setDismissed(true),
            className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
            children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faXmark, className: "w-4 h-4" })
          }
        )
      ]
    }
  );
}

// modules/ui/Breadcrumb.tsx
init_cn();
var import_react_fontawesome14 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons14 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime32 = require("react/jsx-runtime");
function Breadcrumb({
  items,
  separator,
  maxItems,
  className
}) {
  const sep = separator != null ? separator : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faChevronRight, className: "w-2.5 h-2.5 text-text-disabled", "aria-hidden": "true" });
  let displayed = items;
  let truncated = false;
  if (maxItems && items.length > maxItems) {
    truncated = true;
    displayed = [items[0], { label: "\u2026", href: void 0 }, ...items.slice(-(maxItems - 1))];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("nav", { "aria-label": "Breadcrumb", className, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("ol", { className: "flex flex-wrap items-center gap-1 text-sm", children: displayed.map((item, i) => {
    const isLast = i === displayed.length - 1;
    const isEllipsis = item.label === "\u2026" && truncated;
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("li", { className: "flex items-center gap-1", children: !isLast && item.href ? /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "a",
        {
          href: item.href,
          className: cn(
            "text-text-secondary hover:text-text-primary transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded"
          ),
          children: item.label
        }
      ),
      sep
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "span",
        {
          className: cn(
            isLast ? "text-text-primary font-medium" : "text-text-secondary",
            isEllipsis && "select-none"
          ),
          "aria-current": isLast ? "page" : void 0,
          "aria-hidden": isEllipsis ? "true" : void 0,
          children: item.label
        }
      ),
      !isLast && sep
    ] }) }, i);
  }) }) });
}

// modules/ui/ButtonGroup.tsx
init_cn();
var import_jsx_runtime33 = require("react/jsx-runtime");
var variantClasses2 = {
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
var sizeClasses3 = {
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
  const v = variantClasses2[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
              sizeClasses3[size],
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

// modules/ui/index.ts
init_Card();

// modules/ui/CheckboxGroup.tsx
init_cn();
var import_react_fontawesome15 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons15 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime35 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("fieldset", { className: cn("space-y-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("legend", { className: "text-sm font-medium text-text-primary mb-2", children: legend }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "flex flex-wrap gap-2", children: options.map(({ value, label }) => {
      const isSelected = selected.includes(value);
      return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
        "label",
        {
          className: cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-colors",
            "focus-within:ring-2 focus-within:ring-border-focus",
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            isSelected ? "bg-primary-subtle border-primary text-primary" : "bg-surface-base border-border text-text-primary hover:bg-surface-overlay"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
            isSelected && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_fontawesome15.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faCheck, className: "w-3 h-3", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { children: label })
          ]
        },
        value
      );
    }) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-xs text-error mt-1", role: "alert", children: error })
  ] });
}

// modules/ui/ComboBox/index.tsx
var import_react24 = require("react");
init_cn();

// modules/ui/ComboBox/parts/Trigger.tsx
var import_react19 = require("react");
init_cn();
var import_react_fontawesome16 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons16 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Trigger3 = (0, import_react19.forwardRef)(function Trigger4({
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
        clearable && showClear && !disabled && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Clear selection",
            onClick: onClear,
            className: "rounded px-1 text-text-disabled transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faXmark, className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          import_react_fontawesome16.FontAwesomeIcon,
          {
            "aria-hidden": "true",
            icon: open ? import_free_solid_svg_icons16.faChevronUp : import_free_solid_svg_icons16.faChevronDown,
            className: "h-3 w-3 select-none text-text-disabled"
          }
        )
      ]
    }
  );
});

// modules/ui/ComboBox/parts/Listbox.tsx
var import_react20 = require("react");
init_cn();
var import_jsx_runtime37 = (
  // Skeleton rows while async search is pending.
  require("react/jsx-runtime")
);
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
  const scrollRef = (0, import_react20.useRef)(null);
  const [scrollTop, setScrollTop] = (0, import_react20.useState)(0);
  const threshold = typeof virtualize === "number" ? virtualize : virtualize === true ? 0 : DEFAULT_THRESHOLD;
  const windowed = options.length > threshold;
  (0, import_react20.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "ul",
    {
      ref: scrollRef,
      id: listboxId,
      role: "listbox",
      "data-combobox-list": true,
      onScroll: windowed ? (e) => setScrollTop(e.target.scrollTop) : void 0,
      className: "z-20 max-h-60 w-full overflow-y-auto rounded-md border border-border bg-surface-raised py-1 shadow-lg",
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { className: "px-3 py-2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "h-3 w-full animate-pulse rounded bg-surface-overlay" }) }, `sk-${i}`)) }) : options.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { className: "px-3 py-3 text-sm text-text-secondary", children: noResultsText }) : /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
        topPad > 0 && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { "aria-hidden": "true", style: { height: topPad } }),
        options.slice(visibleStart, visibleEnd).map((option, sliceIdx) => {
          const index = visibleStart + sliceIdx;
          const isSelected = option.value === selectedValue;
          const isHighlighted = index === highlightedIndex;
          return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            "li",
            {
              id: `${id}-option-${index}`,
              role: "option",
              "aria-selected": isSelected,
              children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
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
                    option.icon && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "mt-0.5 shrink-0", "aria-hidden": "true", children: option.icon }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "block truncate", children: option.label }),
                      option.description && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "block truncate text-xs text-text-secondary", children: option.description })
                    ] })
                  ]
                }
              )
            },
            option.value
          );
        }),
        bottomPad > 0 && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { "aria-hidden": "true", style: { height: bottomPad } }),
        sentinelRef && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { ref: sentinelRef, "aria-hidden": "true", "data-combobox-sentinel": true, className: "h-1" }),
        loadingMore && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { className: "px-3 py-2 text-xs text-text-secondary", "aria-live": "polite", children: "Loading more\u2026" })
      ] })
    }
  );
}

// modules/ui/ComboBox/hooks/useFilter.ts
var import_react21 = require("react");
function filterOptions(options, query) {
  const q = query.trim().toLowerCase();
  if (!q) return options;
  return options.filter((opt) => opt.label.toLowerCase().includes(q) || (opt.description ? opt.description.toLowerCase().includes(q) : false));
}
function useFilter(options, query) {
  return (0, import_react21.useMemo)(() => filterOptions(options, query), [options, query]);
}

// modules/ui/ComboBox/hooks/useAsync.ts
var import_react22 = require("react");
var TTL_MS = 5 * 60 * 1e3;
function useAsync(enabled, query, onSearch, debounceMs = 300) {
  const [results, setResults] = (0, import_react22.useState)(null);
  const [loading, setLoading] = (0, import_react22.useState)(false);
  const cacheRef = (0, import_react22.useRef)(/* @__PURE__ */ new Map());
  const abortRef = (0, import_react22.useRef)(null);
  const debounceRef = (0, import_react22.useRef)(null);
  const cacheKey = query.trim().toLowerCase();
  (0, import_react22.useEffect)(() => {
    var _a;
    if (!enabled || !onSearch) return;
    const hit = cacheRef.current.get(cacheKey);
    if (hit && Date.now() - hit.ts < TTL_MS) {
      setResults(hit.data);
      setLoading(false);
      return;
    }
    (_a = abortRef.current) == null ? void 0 : _a.abort();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    debounceRef.current = setTimeout(() => {
      let value;
      try {
        value = onSearch(query.trim(), controller.signal);
      } catch (err) {
        if (!controller.signal.aborted) {
          setResults([]);
          setLoading(false);
        }
        return;
      }
      Promise.resolve(value).then((next) => {
        if (controller.signal.aborted) return;
        cacheRef.current.set(cacheKey, { ts: Date.now(), data: next });
        setResults(next);
      }).catch((err) => {
        if (controller.signal.aborted) return;
        const name = err == null ? void 0 : err.name;
        if (name === "AbortError") return;
        setResults([]);
      }).finally(() => {
        if (controller.signal.aborted) return;
        setLoading(false);
      });
    }, debounceMs);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      controller.abort();
    };
  }, [enabled, cacheKey, query, onSearch, debounceMs]);
  (0, import_react22.useEffect)(() => {
    if (!enabled) {
      setResults(null);
      setLoading(false);
    }
  }, [enabled]);
  const appendResults = (0, import_react22.useCallback)((next) => {
    setResults((prev) => {
      const merged = prev ? [...prev, ...next] : next;
      cacheRef.current.set(cacheKey, { ts: Date.now(), data: merged });
      return merged;
    });
  }, [cacheKey]);
  return (0, import_react22.useMemo)(() => ({ results, loading, appendResults }), [results, loading, appendResults]);
}

// modules/ui/ComboBox/hooks/useLoadMore.ts
var import_react23 = require("react");
function useLoadMore(open, sentinelRef, onLoadMore, onAppend) {
  const [loadingMore, setLoadingMore] = (0, import_react23.useState)(false);
  const inFlightRef = (0, import_react23.useRef)(false);
  (0, import_react23.useEffect)(() => {
    var _a;
    if (!open || !onLoadMore) return;
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!(entry == null ? void 0 : entry.isIntersecting) || inFlightRef.current) return;
        inFlightRef.current = true;
        setLoadingMore(true);
        Promise.resolve(onLoadMore()).then((next) => {
          if (next && next.length > 0) onAppend(next);
        }).catch(() => {
        }).finally(() => {
          inFlightRef.current = false;
          setLoadingMore(false);
        });
      },
      { root: (_a = node.closest("[data-combobox-list]")) != null ? _a : null, rootMargin: "40px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [open, onLoadMore, onAppend, sentinelRef]);
  return loadingMore;
}

// modules/ui/ComboBox/index.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
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
  const rootRef = (0, import_react24.useRef)(null);
  const inputRef = (0, import_react24.useRef)(null);
  const sentinelRef = (0, import_react24.useRef)(null);
  const [open, setOpen] = (0, import_react24.useState)(false);
  const [query, setQuery] = (0, import_react24.useState)("");
  const [highlightedIndex, setHighlightedIndex] = (0, import_react24.useState)(-1);
  const [internalValue, setInternalValue] = (0, import_react24.useState)(value != null ? value : "");
  const selectedValue = value !== void 0 ? value : internalValue;
  const { results: asyncResults, loading, appendResults } = useAsync(
    open && !!onSearch,
    query,
    onSearch,
    debounceMs
  );
  const loadingMore = useLoadMore(open, sentinelRef, onLoadMore, appendResults);
  const sourceOptions = asyncResults != null ? asyncResults : options;
  const selectedOption = (0, import_react24.useMemo)(
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
  (0, import_react24.useEffect)(() => {
    var _a2;
    if (!open) {
      setQuery((_a2 = selectedOption == null ? void 0 : selectedOption.label) != null ? _a2 : "");
      setHighlightedIndex(-1);
    }
  }, [open, selectedOption == null ? void 0 : selectedOption.label]);
  (0, import_react24.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { ref: rootRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("label", { id: labelId, htmlFor: inputId, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "ml-1 text-error", "aria-hidden": "true", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      Trigger3,
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
    open && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/ui/ContentScoreBar.tsx
init_cn();
var import_react25 = require("react");
var import_react_fontawesome17 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons17 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime39 = require("react/jsx-runtime");
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
  const { score, results } = (0, import_react25.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "div",
    {
      className: cn(
        "rounded-lg border p-3 space-y-2 transition-colors duration-300",
        t.bg,
        t.border,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: cn("inline-block h-1.5 w-1.5 rounded-full shrink-0", t.dot), "aria-hidden": "true" }),
          label && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "text-xs font-semibold text-text-secondary uppercase tracking-wider", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "ml-auto flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: cn("text-xs font-medium", t.text), children: t.label }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "h-1.5 w-full rounded-full bg-surface-sunken overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          "div",
          {
            className: cn("h-full rounded-full transition-all duration-500 ease-out", t.bar),
            style: { width: `${score}%` }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "flex flex-wrap gap-1", children: results.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
          "span",
          {
            title: r.hint,
            className: cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium cursor-default select-none transition-colors",
              r.pass ? cn(t.bg, t.text, "border", t.border) : "bg-surface-sunken text-text-disabled border border-border"
            ),
            children: [
              r.pass && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faCheck, className: "w-2.5 h-2.5", "aria-hidden": "true" }),
              r.label
            ]
          },
          i
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text-xs text-text-secondary leading-none", children: [
          passCount,
          " / ",
          results.length,
          " rules passed"
        ] })
      ]
    }
  );
}

// modules/ui/index.ts
init_DataTable2();
init_DateRangePicker();

// modules/ui/Overlays/Drawer/index.tsx
init_cn();
var import_react30 = require("react");
var import_react_dom = require("react-dom");
var import_react_fontawesome18 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons18 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/Overlays/shared/useFocusTrap.ts
var import_react26 = require("react");
var FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
var layerStack = [];
function isTopLayer(ref) {
  return layerStack[layerStack.length - 1] === ref;
}
function useFocusTrap(ref, { active, onEscape, handleEscape = true }) {
  (0, import_react26.useEffect)(() => {
    if (!active) return;
    layerStack.push(ref);
    return () => {
      const idx = layerStack.lastIndexOf(ref);
      if (idx !== -1) layerStack.splice(idx, 1);
    };
  }, [active, ref]);
  (0, import_react26.useEffect)(() => {
    if (!active) return;
    const prev = document.activeElement;
    const t = window.setTimeout(() => {
      const root = ref.current;
      if (!root) return;
      const firstFocusable = root.querySelector(FOCUSABLE);
      (firstFocusable != null ? firstFocusable : root).focus();
    }, 0);
    return () => {
      var _a;
      window.clearTimeout(t);
      (_a = prev == null ? void 0 : prev.focus) == null ? void 0 : _a.call(prev);
    };
  }, [active, ref]);
  const handleKeyDown = (0, import_react26.useCallback)(
    (e) => {
      if (!isTopLayer(ref)) return;
      if (handleEscape && e.key === "Escape") {
        onEscape == null ? void 0 : onEscape();
        return;
      }
      if (e.key !== "Tab") return;
      const container = ref.current;
      if (!container) return;
      const focusable = Array.from(
        container.querySelectorAll(FOCUSABLE)
      ).filter((el) => el.dataset.focusGuard !== "true");
      if (focusable.length === 0) {
        e.preventDefault();
        container.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first || !container.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [ref, onEscape, handleEscape]
  );
  (0, import_react26.useEffect)(() => {
    if (!active) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, handleKeyDown]);
}
function isFocusTrapTopLayer(ref) {
  return isTopLayer(ref);
}

// modules/ui/Overlays/shared/useScrollLock.ts
var import_react27 = require("react");
var lockCount = 0;
var originalBodyStyle = {
  overflow: "",
  paddingRight: "",
  position: "",
  top: "",
  width: ""
};
var savedScrollY = 0;
function isIOS() {
  if (typeof navigator === "undefined") return false;
  return /iP(ad|hone|od)/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function lock() {
  if (lockCount === 0) {
    const body = document.body;
    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    originalBodyStyle = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width
    };
    if (isIOS()) {
      savedScrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${savedScrollY}px`;
      body.style.width = "100%";
    } else {
      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        const currentPad = parseFloat(getComputedStyle(body).paddingRight) || 0;
        body.style.paddingRight = `${currentPad + scrollbarWidth}px`;
      }
    }
  }
  lockCount += 1;
}
function unlock() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    const body = document.body;
    const wasIOS = body.style.position === "fixed";
    body.style.overflow = originalBodyStyle.overflow;
    body.style.paddingRight = originalBodyStyle.paddingRight;
    body.style.position = originalBodyStyle.position;
    body.style.top = originalBodyStyle.top;
    body.style.width = originalBodyStyle.width;
    if (wasIOS) {
      window.scrollTo(0, savedScrollY);
    }
  }
}
function useScrollLock(active) {
  (0, import_react27.useEffect)(() => {
    if (!active) return;
    lock();
    return () => unlock();
  }, [active]);
}

// modules/ui/Overlays/shared/usePresence.ts
var import_react28 = require("react");
var EXIT_MS = 250;
function usePresence(open) {
  const [state, setState] = (0, import_react28.useState)(open ? "open" : "closed");
  (0, import_react28.useEffect)(() => {
    if (open) {
      setState("open");
      return;
    }
    setState((prev) => prev === "closed" ? "closed" : "closing");
    const t = window.setTimeout(() => setState("closed"), EXIT_MS);
    return () => window.clearTimeout(t);
  }, [open]);
  return {
    mounted: state !== "closed",
    state
  };
}

// modules/ui/Overlays/shared/usePortal.ts
var import_react29 = require("react");
function usePortal(target) {
  const [node, setNode] = (0, import_react29.useState)(null);
  (0, import_react29.useEffect)(() => {
    if (typeof document === "undefined") return;
    if (target instanceof Element) {
      setNode(target);
      return;
    }
    if (typeof target === "string") {
      setNode(document.querySelector(target));
      return;
    }
    setNode(document.body);
  }, [target]);
  return node;
}

// modules/ui/Overlays/shared/useRouteClose.ts
function useRouteClose(_opts) {
}

// modules/ui/Overlays/Drawer/index.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function Drawer({
  open,
  onClose,
  title,
  side = "right",
  children,
  footer,
  closeOnRouteChange,
  // TODO M5: reducedMotion
  reducedMotion: _reducedMotion,
  portalTarget,
  className,
  ref
}) {
  const panelRef = (0, import_react30.useRef)(null);
  const { mounted, state } = usePresence(open);
  useFocusTrap(panelRef, { active: open, onEscape: onClose });
  useScrollLock(open);
  useRouteClose({ active: open, closeOnRouteChange, onClose });
  const portalNode = usePortal(portalTarget);
  if (!mounted) return null;
  const node = /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    "div",
    {
      className: cn(
        "fixed inset-0 z-[100] flex",
        state !== "open" && "pointer-events-none"
      ),
      "aria-modal": "true",
      role: "dialog",
      "aria-label": title,
      "data-state": state,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "div",
          {
            className: cn(
              "absolute inset-0 bg-black/50 transition-opacity duration-200",
              state === "open" ? "opacity-100" : "opacity-0"
            ),
            onClick: onClose,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
          "div",
          {
            ref: (node2) => {
              panelRef.current = node2;
              if (typeof ref === "function") ref(node2);
              else if (ref) ref.current = node2;
            },
            tabIndex: -1,
            "data-state": state,
            className: cn(
              "relative z-[101] flex flex-col w-80 max-w-full h-full bg-surface-raised border-border shadow-xl",
              "transition-transform duration-200 focus-visible:outline-none",
              side === "right" ? "ml-auto border-l" : "mr-auto border-r",
              state === "open" ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full",
              className
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "flex items-center justify-between gap-3 px-4 py-4 border-b border-border shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("h2", { className: "text-base font-semibold text-text-primary", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close drawer",
                    className: "text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                    children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react_fontawesome18.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faXmark, className: "w-4 h-4", "aria-hidden": "true" })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "flex-1 min-h-0 overflow-y-auto px-4 py-4", children }),
              footer && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "px-4 py-4 border-t border-border shrink-0", children: footer })
            ]
          }
        )
      ]
    }
  );
  if (!portalNode) return null;
  return (0, import_react_dom.createPortal)(node, portalNode);
}

// modules/ui/DropdownMenu.tsx
init_cn();
var import_react31 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
function DropdownMenu({
  trigger,
  items,
  header,
  align = "left",
  className
}) {
  const [open, setOpen] = (0, import_react31.useState)(false);
  const containerRef = (0, import_react31.useRef)(null);
  (0, import_react31.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { ref: containerRef, className: cn("relative inline-block", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "div",
      {
        onClick: () => setOpen((p) => !p),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        children: trigger
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
      "div",
      {
        role: "menu",
        className: cn(
          "absolute z-[60] mt-1 min-w-[10rem] rounded-lg border border-border bg-surface-raised shadow-lg py-1",
          align === "right" ? "right-0" : "left-0"
        ),
        children: [
          header && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "border-b border-border mb-1", children: header }),
          items.map((item, i) => {
            if (item.type === "separator") {
              return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { role: "separator", className: "my-1 border-t border-border" }, i);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
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
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { "aria-hidden": "true", children: item.icon }),
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

// modules/ui/EmptyState.tsx
init_cn();
var import_jsx_runtime43 = require("react/jsx-runtime");
function EmptyState({
  icon,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center text-center py-16 px-6",
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "h-12 w-12 rounded-full bg-surface-sunken flex items-center justify-center text-text-disabled text-2xl mb-4", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { className: "mt-1 text-sm text-text-secondary max-w-xs", children: description }),
        action && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "mt-4", children: action })
      ]
    }
  );
}

// modules/ui/index.ts
init_MapView();

// modules/ui/Overlays/Modal/index.tsx
init_cn();
var import_react38 = require("react");
var import_react_dom2 = require("react-dom");
var import_react_fontawesome20 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons20 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime50 = require("react/jsx-runtime");
var sizeMap6 = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" };
function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  fullscreen = false,
  scrollable = false,
  closeOnBackdropClick = true,
  closeOnRouteChange,
  // TODO M5: reducedMotion
  reducedMotion: _reducedMotion,
  portalTarget,
  className,
  ref
}) {
  const panelRef = (0, import_react38.useRef)(null);
  const titleId = "modal-title";
  const descId = description ? "modal-desc" : void 0;
  const { mounted, state } = usePresence(open);
  useFocusTrap(panelRef, { active: open, onEscape: onClose });
  useScrollLock(open);
  useRouteClose({ active: open, closeOnRouteChange, onClose });
  const portalNode = usePortal(portalTarget);
  if (!mounted) return null;
  const sizeClass = sizeMap6[size];
  const node = /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    "div",
    {
      className: cn(
        "fixed inset-0 z-[100] flex p-4 transition-opacity duration-200",
        fullscreen ? "items-stretch justify-stretch" : "items-center justify-center",
        state === "open" ? "opacity-100" : "opacity-0"
      ),
      "aria-modal": "true",
      role: "dialog",
      "aria-labelledby": titleId,
      "aria-describedby": descId,
      "data-state": state,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "div",
          {
            className: "absolute inset-0 bg-black/50",
            onClick: closeOnBackdropClick ? onClose : void 0,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
          "div",
          {
            ref: (node2) => {
              panelRef.current = node2;
              if (typeof ref === "function") ref(node2);
              else if (ref) ref.current = node2;
            },
            tabIndex: -1,
            "data-state": state,
            className: cn(
              "relative z-[101] w-full border border-border bg-surface-raised shadow-xl flex flex-col",
              "transition-all duration-200 focus-visible:outline-none",
              state === "open" ? "scale-100 opacity-100" : "scale-95 opacity-0",
              fullscreen ? "rounded-none max-w-none max-h-none h-full" : cn("rounded-xl", sizeClass),
              className
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-start justify-between gap-3 px-6 py-4 border-b border-border shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h2", { id: titleId, className: "text-base font-semibold text-text-primary", children: title }),
                  description && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { id: descId, className: "text-sm text-text-secondary mt-0.5", children: description })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close dialog",
                    className: "shrink-0 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                    children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react_fontawesome20.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faXmark, className: "w-4 h-4", "aria-hidden": "true" })
                  }
                )
              ] }),
              children && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: cn("px-6 py-4 flex-1", scrollable && "overflow-y-auto"), children }),
              footer && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "px-6 py-4 border-t border-border flex justify-end gap-2 shrink-0", children: footer })
            ]
          }
        )
      ]
    }
  );
  if (!portalNode) return null;
  return (0, import_react_dom2.createPortal)(node, portalNode);
}

// modules/ui/MultiSelect.tsx
var import_react39 = require("react");
init_cn();
var import_react_fontawesome21 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons21 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime51 = require("react/jsx-runtime");
function MultiSelect({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = "Select\u2026",
  hint,
  error,
  disabled,
  searchable,
  className,
  onSearch,
  onLoadMore,
  debounceMs = 300
}) {
  const [internal, setInternal] = (0, import_react39.useState)(value != null ? value : []);
  const [open, setOpen] = (0, import_react39.useState)(false);
  const [search, setSearch] = (0, import_react39.useState)("");
  const containerRef = (0, import_react39.useRef)(null);
  const searchRef = (0, import_react39.useRef)(null);
  const sentinelRef = (0, import_react39.useRef)(null);
  const selected = value !== void 0 ? value : internal;
  const { results: asyncResults, loading, appendResults } = useAsync(
    open && !!onSearch,
    search,
    onSearch,
    debounceMs
  );
  const loadingMore = useLoadMore(open, sentinelRef, onLoadMore, appendResults);
  const sourceOptions = asyncResults != null ? asyncResults : options;
  const localFiltered = useFilter(sourceOptions, searchable ? search : "");
  const filtered = onSearch ? sourceOptions : searchable ? localFiltered : sourceOptions;
  function toggle(v) {
    const next = selected.includes(v) ? selected.filter((s) => s !== v) : [...selected, v];
    if (value === void 0) setInternal(next);
    onChange == null ? void 0 : onChange(next);
  }
  function remove(v, e) {
    e.stopPropagation();
    toggle(v);
  }
  (0, import_react39.useEffect)(() => {
    if (!open) {
      setSearch("");
      return;
    }
    if (searchable || onSearch) setTimeout(() => {
      var _a;
      return (_a = searchRef.current) == null ? void 0 : _a.focus();
    }, 30);
    function onOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open, searchable, onSearch]);
  function onKeyDown(e) {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((o) => !o);
    }
  }
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const listboxId = `${id}-listbox`;
  const optionsById = (0, import_react39.useMemo)(() => {
    const m = /* @__PURE__ */ new Map();
    for (const o of options) m.set(o.value, o);
    for (const o of sourceOptions) if (!m.has(o.value)) m.set(o.value, o);
    return m;
  }, [options, sourceOptions]);
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { ref: containerRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("label", { id: `${id}-label`, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
        "div",
        {
          role: "combobox",
          tabIndex: disabled ? -1 : 0,
          "aria-haspopup": "listbox",
          "aria-expanded": open,
          "aria-controls": listboxId,
          "aria-autocomplete": "list",
          "aria-labelledby": `${id}-label`,
          "aria-describedby": describedBy,
          "aria-disabled": disabled,
          id,
          onClick: () => !disabled && setOpen((o) => !o),
          onKeyDown,
          className: cn(
            "min-h-[2.5rem] w-full rounded-md border px-3 py-1.5 text-sm transition-colors cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            "flex flex-wrap gap-1 items-center",
            error ? "border-error ring-1 ring-error bg-error-subtle" : "border-border bg-surface-base",
            disabled && "opacity-50 cursor-not-allowed bg-surface-sunken"
          ),
          children: [
            selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "text-text-disabled", children: placeholder }) : selected.map((v) => {
              var _a, _b;
              const opt = optionsById.get(v);
              return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                "span",
                {
                  className: "inline-flex items-center gap-1 rounded-full bg-primary-subtle text-primary text-xs font-medium px-2 py-0.5",
                  children: [
                    (opt == null ? void 0 : opt.icon) && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "shrink-0", children: opt.icon }),
                    (_a = opt == null ? void 0 : opt.label) != null ? _a : v,
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${(_b = opt == null ? void 0 : opt.label) != null ? _b : v}`,
                        onClick: (e) => remove(v, e),
                        className: "hover:opacity-70 focus-visible:outline-none",
                        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faXmark, className: "w-2.5 h-2.5" })
                      }
                    )
                  ]
                },
                v
              );
            }),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              import_react_fontawesome21.FontAwesomeIcon,
              {
                icon: open ? import_free_solid_svg_icons21.faChevronUp : import_free_solid_svg_icons21.faChevronDown,
                className: "ml-auto w-3 h-3 text-text-disabled",
                "aria-hidden": "true"
              }
            )
          ]
        }
      ),
      open && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "absolute z-20 w-full rounded-md border border-border bg-surface-raised shadow-lg overflow-hidden top-full left-0 mt-1", children: [
        (searchable || onSearch) && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            import_react_fontawesome21.FontAwesomeIcon,
            {
              icon: import_free_solid_svg_icons21.faMagnifyingGlass,
              "aria-hidden": "true",
              className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-text-disabled"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            "input",
            {
              ref: searchRef,
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search\u2026",
              "aria-autocomplete": "list",
              "aria-controls": listboxId,
              className: cn(
                "block w-full rounded-md border border-border bg-surface-base pl-7 pr-3 py-1.5 text-sm",
                "text-text-primary placeholder:text-text-disabled",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              )
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          "ul",
          {
            id: listboxId,
            role: "listbox",
            "aria-labelledby": `${id}-label`,
            "aria-multiselectable": "true",
            "data-combobox-list": true,
            className: "py-1 max-h-48 overflow-y-auto",
            children: loading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { className: "px-3 py-2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "h-3 w-full animate-pulse rounded bg-surface-overlay" }) }, `sk-${i}`)) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: "No results found." }) : /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
              filtered.map((opt) => {
                const checked = selected.includes(opt.value);
                return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                  "li",
                  {
                    role: "option",
                    "aria-selected": checked,
                    "aria-disabled": opt.disabled,
                    onClick: () => !opt.disabled && toggle(opt.value),
                    onKeyDown: (e) => {
                      if ((e.key === "Enter" || e.key === " ") && !opt.disabled) {
                        e.preventDefault();
                        toggle(opt.value);
                      }
                    },
                    tabIndex: opt.disabled ? -1 : 0,
                    className: cn(
                      "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer select-none",
                      "hover:bg-surface-overlay transition-colors",
                      "focus-visible:outline-none focus-visible:bg-surface-overlay",
                      checked && "text-primary font-medium",
                      opt.disabled && "opacity-50 cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                        "span",
                        {
                          "aria-hidden": "true",
                          className: cn(
                            "h-4 w-4 rounded border-2 flex items-center justify-center shrink-0 text-[10px]",
                            checked ? "bg-primary border-primary text-primary-fg" : "border-border bg-surface-base"
                          ),
                          children: checked && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faCheck, className: "w-2.5 h-2.5" })
                        }
                      ),
                      opt.icon && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "shrink-0", "aria-hidden": "true", children: opt.icon }),
                      opt.label
                    ]
                  },
                  opt.value
                );
              }),
              onLoadMore && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { ref: sentinelRef, "aria-hidden": "true", "data-combobox-sentinel": true, className: "h-1" }),
              loadingMore && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { className: "px-3 py-2 text-xs text-text-secondary", "aria-live": "polite", children: "Loading more\u2026" })
            ] })
          }
        )
      ] })
    ] }),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/ui/PageHeader.tsx
init_cn();
var import_jsx_runtime52 = require("react/jsx-runtime");
var variantMap3 = {
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
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
    "div",
    {
      className: cn(
        "flex items-start justify-between gap-4 pb-5 border-b border-border",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { className: "text-2xl font-bold text-text-primary leading-tight", children: title }),
            badge
          ] }),
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-sm text-text-secondary mt-0.5", children: subtitle })
        ] }),
        actions && actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "flex items-center gap-2 shrink-0 flex-wrap justify-end", children: actions.map((action, i) => {
          var _a;
          const cls = cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            variantMap3[(_a = action.variant) != null ? _a : "primary"]
          );
          if (action.href) {
            return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("a", { href: action.href, className: cls, children: action.label }, i);
          }
          return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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

// modules/ui/index.ts
init_Pagination();

// modules/ui/Overlays/Popover/index.tsx
init_cn();
var import_react41 = require("react");

// modules/ui/Overlays/shared/useDismiss.ts
var import_react40 = require("react");
function useDismiss({
  active,
  ref,
  onDismiss,
  escape = true,
  outsidePointer = true
}) {
  (0, import_react40.useEffect)(() => {
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
var import_jsx_runtime53 = require("react/jsx-runtime");
function Popover({
  trigger,
  children,
  placement = "bottom",
  className,
  focusTrap = true
}) {
  const [open, setOpen] = (0, import_react41.useState)(false);
  const containerRef = (0, import_react41.useRef)(null);
  const panelRef = (0, import_react41.useRef)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { ref: containerRef, className: "relative inline-block", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { onClick: () => setOpen((o) => !o), children: trigger }),
    open && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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

// modules/ui/RadioGroup.tsx
init_cn();
var import_jsx_runtime54 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("fieldset", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("legend", { className: "mb-2 text-sm font-medium text-text-primary", children: legend }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex items-center gap-2", children: [
                    opt.icon && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "text-lg leading-none text-text-secondary", children: opt.icon }),
                    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { className: "text-sm text-text-primary", children: opt.label })
                  ] }),
                  opt.hint && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "mt-0.5 text-xs text-text-secondary", children: opt.hint })
                ] })
              ]
            },
            opt.value
          );
        })
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { className: "mt-1 text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/ui/index.ts
init_SearchBar();
init_ServerDataTable();

// modules/ui/Skeleton.tsx
init_cn();
var import_jsx_runtime55 = require("react/jsx-runtime");
var base = "animate-pulse bg-surface-sunken";
function SkeletonLine({ width = "w-full", className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: cn(base, "h-3 rounded", width, className) });
}
function SkeletonAvatar({ size = "md", className }) {
  const s = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" }[size];
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: cn(base, "rounded-full shrink-0", s, className) });
}
function SkeletonText({ lines = 3, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: cn("space-y-2", className), "aria-busy": "true", "aria-label": "Loading content", children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(SkeletonLine, { width: i === lines - 1 ? "w-4/5" : "w-full" }, i)) });
}
function SkeletonCard({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    "div",
    {
      className: cn("bg-surface-raised border border-border rounded-xl p-6 space-y-4", className),
      "aria-busy": "true",
      "aria-label": "Loading content",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(SkeletonAvatar, {}),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(SkeletonLine, { width: "w-2/3" }),
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(SkeletonLine, { width: "w-1/2" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(SkeletonText, { lines: 3 }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: cn(base, "h-6 w-16 rounded") }),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: cn(base, "h-6 w-20 rounded") })
        ] })
      ]
    }
  );
}
function SkeletonTableRow({ cols = 4, className }) {
  const widths = ["w-28", "w-40", "w-20", "w-16"];
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("tr", { className: cn("border-b border-border", className), children: Array.from({ length: cols }).map((_, i) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("td", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: cn(base, "h-4 rounded", (_a = widths[i]) != null ? _a : "w-24") }) }, i);
  }) });
}

// modules/ui/Slider/index.tsx
var import_react44 = require("react");
init_cn();

// modules/ui/Slider/parts/Track.tsx
init_cn();
var import_jsx_runtime56 = require("react/jsx-runtime");
function Track({
  current,
  isDragging,
  offsetPx,
  pointerHandlers,
  children
}) {
  const baseTransform = `translateX(-${current * 100}%)`;
  const transform = offsetPx != null ? `${baseTransform} translateX(${offsetPx}px)` : baseTransform;
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
init_cn();
var import_jsx_runtime57 = require("react/jsx-runtime");
function Slide({ index, total, isActive, className, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
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
init_cn();
var import_react_fontawesome22 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons22 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime58 = require("react/jsx-runtime");
var ARROW_BTN = cn(
  "absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full",
  "bg-black/40 hover:bg-black/60 text-white",
  "flex items-center justify-center transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
);
function Arrows({ canPrev, canNext, onPrev, onNext }) {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    canPrev && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      "button",
      {
        type: "button",
        onClick: onPrev,
        "aria-label": "Previous slide",
        className: cn(ARROW_BTN, "left-3"),
        children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react_fontawesome22.FontAwesomeIcon, { icon: import_free_solid_svg_icons22.faChevronLeft, className: "w-3 h-3", "aria-hidden": "true" })
      }
    ),
    canNext && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      "button",
      {
        type: "button",
        onClick: onNext,
        "aria-label": "Next slide",
        className: cn(ARROW_BTN, "right-3"),
        children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react_fontawesome22.FontAwesomeIcon, { icon: import_free_solid_svg_icons22.faChevronRight, className: "w-3 h-3", "aria-hidden": "true" })
      }
    )
  ] });
}

// modules/ui/Slider/parts/Dots.tsx
init_cn();
var import_jsx_runtime59 = require("react/jsx-runtime");
function Dots({ total, current, onSelect }) {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    "div",
    {
      className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10",
      role: "tablist",
      "aria-label": "Slide indicators",
      children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
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
var import_react42 = require("react");
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
  const [dragState, setDragState] = (0, import_react42.useState)({
    offsetPx: null,
    trackWidth: 0,
    isDragging: false
  });
  const startXRef = (0, import_react42.useRef)(0);
  const startTimeRef = (0, import_react42.useRef)(0);
  const trackWidthRef = (0, import_react42.useRef)(0);
  const samplesRef = (0, import_react42.useRef)([]);
  const activePointerRef = (0, import_react42.useRef)(null);
  const onPointerDown = (0, import_react42.useCallback)(
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
  const onPointerMove = (0, import_react42.useCallback)(
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
  const endDrag = (0, import_react42.useCallback)(
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
var import_react43 = require("react");
function useAutoPlay({ enabled, interval, total, onTick }) {
  const onTickRef = (0, import_react43.useRef)(onTick);
  (0, import_react43.useEffect)(() => {
    onTickRef.current = onTick;
  }, [onTick]);
  (0, import_react43.useEffect)(() => {
    if (!enabled || total <= 1) return;
    const id = setInterval(() => onTickRef.current(), interval);
    return () => clearInterval(id);
  }, [enabled, interval, total]);
}

// modules/ui/Slider/index.tsx
var import_jsx_runtime60 = require("react/jsx-runtime");
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
  const [current, setCurrent] = (0, import_react44.useState)(0);
  const [isTransitioning, setIsTransitioning] = (0, import_react44.useState)(false);
  const total = slides.length;
  const goTo = (0, import_react44.useCallback)(
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
  const prev = (0, import_react44.useCallback)(() => goTo(current - 1), [current, goTo]);
  const next = (0, import_react44.useCallback)(() => goTo(current + 1), [current, goTo]);
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
    onTick: (0, import_react44.useCallback)(() => {
      if (dragState.isDragging) return;
      setCurrent((c) => (c + 1) % total);
    }, [dragState.isDragging, total])
  });
  if (total === 0) return null;
  const canPrev = loop || current > 0;
  const canNext = loop || current < total - 1;
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
    "div",
    {
      className: cn("relative overflow-hidden rounded-xl", className),
      role: "region",
      "aria-label": ariaLabel,
      "aria-roledescription": "carousel",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
              return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
        showArrows && total > 1 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Arrows, { canPrev, canNext, onPrev: prev, onNext: next }),
        showDots && total > 1 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Dots, { total, current, onSelect: goTo })
      ]
    }
  );
}

// modules/ui/Stepper.tsx
init_cn();
var import_react_fontawesome23 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons23 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime61 = require("react/jsx-runtime");
var stateStyles = {
  complete: {
    circle: "bg-success text-text-inverse border-success",
    text: "text-text-primary",
    line: "bg-success"
  },
  active: {
    circle: "bg-primary text-primary-fg border-primary",
    text: "text-text-primary font-semibold",
    line: "bg-border"
  },
  error: {
    circle: "bg-error text-text-inverse border-error",
    text: "text-error-fg",
    line: "bg-border"
  },
  pending: {
    circle: "bg-surface-base text-text-disabled border-border",
    text: "text-text-disabled",
    line: "bg-border"
  }
};
function StepIcon({ state, index }) {
  if (state === "complete") return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react_fontawesome23.FontAwesomeIcon, { icon: import_free_solid_svg_icons23.faCheck, className: "w-3.5 h-3.5", "aria-hidden": "true" });
  if (state === "error") return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react_fontawesome23.FontAwesomeIcon, { icon: import_free_solid_svg_icons23.faXmark, className: "w-3.5 h-3.5", "aria-hidden": "true" });
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: index + 1 });
}
function Stepper({
  steps,
  orientation = "horizontal",
  className
}) {
  if (orientation === "vertical") {
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("ol", { className: cn("flex flex-col gap-0", className), children: steps.map((step, i) => {
      var _a;
      const state = (_a = step.state) != null ? _a : "pending";
      const s = stateStyles[state];
      const isLast = i === steps.length - 1;
      return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("li", { className: "flex gap-3 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex flex-col items-center shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
            "div",
            {
              className: cn(
                "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0",
                s.circle
              ),
              "aria-label": `Step ${i + 1}: ${step.label} \u2014 ${state}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(StepIcon, { state, index: i })
            }
          ),
          !isLast && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: cn("w-0.5 flex-1 min-h-[2rem] mt-1", s.line), "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: cn("pb-6", isLast && "pb-0"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: cn("text-sm", s.text), children: step.label }),
          step.description && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "text-xs text-text-secondary mt-0.5", children: step.description })
        ] })
      ] }, i);
    }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("ol", { className: cn("flex items-center", className), children: steps.map((step, i) => {
    var _a, _b;
    const state = (_a = step.state) != null ? _a : "pending";
    const s = stateStyles[state];
    const isLast = i === steps.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("li", { className: cn("flex items-center", !isLast && "flex-1"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex flex-col items-center gap-1 shrink-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "div",
          {
            className: cn(
              "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold",
              s.circle
            ),
            "aria-label": `Step ${i + 1}: ${step.label} \u2014 ${state}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(StepIcon, { state, index: i })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: cn("text-xs whitespace-nowrap", s.text), children: step.label }),
          step.description && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "text-xs text-text-secondary", children: step.description })
        ] })
      ] }),
      !isLast && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        "div",
        {
          className: cn("h-0.5 flex-1 mx-2 mt-[-1.25rem]", stateStyles[(_b = steps[i].state) != null ? _b : "pending"].line),
          "aria-hidden": "true"
        }
      )
    ] }, i);
  }) });
}

// modules/ui/TabButton.tsx
init_cn();
var import_jsx_runtime62 = require("react/jsx-runtime");
function TabButton({ active, onClick, children, count, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
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
        count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
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
init_cn();
var import_react45 = require("react");
var import_jsx_runtime63 = require("react/jsx-runtime");
function TabGroup({
  tabs,
  defaultTab,
  label = "Tabs",
  lazy = false,
  className
}) {
  var _a, _b, _c, _d;
  const [active, setActive] = (0, import_react45.useState)((_b = defaultTab != null ? defaultTab : (_a = tabs[0]) == null ? void 0 : _a.id) != null ? _b : "");
  const activated = (0, import_react45.useRef)(/* @__PURE__ */ new Set([(_d = defaultTab != null ? defaultTab : (_c = tabs[0]) == null ? void 0 : _c.id) != null ? _d : ""]));
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
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { role: "tablist", "aria-label": label, className: "flex border-b border-border pb-3", children: tabs.map((tab, i) => {
      const isActive = tab.id === active;
      return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
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
            tab.icon && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: tab.icon }),
            tab.label,
            tab.badge && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("span", { className: "shrink-0", children: tab.badge })
          ]
        },
        tab.id
      );
    }) }),
    tabs.map((tab) => {
      const isActive = tab.id === active;
      const everActivated = activated.current.has(tab.id);
      const shouldRender = !lazy || everActivated;
      return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
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

// modules/ui/Table.tsx
init_Table2();

// modules/ui/TagInput.tsx
init_cn();
var import_react46 = require("react");
var import_react_fontawesome24 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons24 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime64 = require("react/jsx-runtime");
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
  const [input, setInput] = (0, import_react46.useState)("");
  const [editingIdx, setEditingIdx] = (0, import_react46.useState)(null);
  const [editValue, setEditValue] = (0, import_react46.useState)("");
  const inputRef = (0, import_react46.useRef)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(
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
            (tag, i) => editingIdx === i ? /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
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
            ) : /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(
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
                  !disabled && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        removeTag(i);
                      },
                      "aria-label": `Remove ${tag}`,
                      className: "hover:opacity-70 focus-visible:outline-none rounded-full",
                      children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react_fontawesome24.FontAwesomeIcon, { icon: import_free_solid_svg_icons24.faXmark, className: "w-2.5 h-2.5" })
                    }
                  )
                ]
              },
              i
            )
          ),
          !disabled && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
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
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    !hint && !error && value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("p", { className: "text-xs text-text-disabled", children: "Double-click a tag to edit it" }),
    error && /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/ui/Toast/index.tsx
var import_react48 = require("react");

// modules/ui/Toast/hooks/useToastStore.ts
var import_zustand = require("zustand");
var VARIANT_DURATION = {
  success: 5e3,
  info: 5e3,
  warning: 5e3,
  error: null,
  // persistent — user must dismiss / be replaced via promise()
  loading: null
  // persistent — resolves via toast.promise / toast.update
};
function getEffectiveDuration(item) {
  if (item.duration === 0) return null;
  if (item.duration !== void 0) return item.duration;
  return VARIANT_DURATION[item.variant];
}
var useToastStore = (0, import_zustand.create)((set) => ({
  toasts: [],
  max: 5,
  add: (item) => {
    const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    set((s) => {
      const next = [...s.toasts, __spreadProps(__spreadValues({ closeButton: true }, item), { id })];
      while (next.length > s.max) next.shift();
      return { toasts: next };
    });
    return id;
  },
  update: (id, patch) => set((s) => ({
    toasts: s.toasts.map((t) => t.id === id ? __spreadValues(__spreadValues({}, t), patch) : t)
  })),
  remove: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  clear: () => set({ toasts: [] }),
  setMax: (max) => set({ max: Math.max(1, max) })
}));

// modules/ui/Toast/parts/Region.tsx
init_cn();

// modules/ui/Toast/parts/ToastItem.tsx
var import_react47 = require("react");
init_cn();
var import_react_fontawesome25 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons25 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/Toast/parts/ProgressBar.tsx
init_cn();
var import_jsx_runtime65 = require("react/jsx-runtime");
function ProgressBar({ progress, colorClass }) {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-black/5", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
    "div",
    {
      className: cn("h-full rounded-full transition-none", colorClass),
      style: { width: `${progress}%`, opacity: 0.5 },
      "aria-hidden": "true"
    }
  ) });
}

// modules/ui/Toast/parts/ToastItem.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
var variantMap4 = {
  success: {
    container: "bg-success-subtle border-success",
    iconColor: "text-success-fg",
    progressColor: "bg-success",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faCircleCheck, className: "size-4 shrink-0" })
  },
  warning: {
    container: "bg-warning-subtle border-warning",
    iconColor: "text-warning",
    progressColor: "bg-warning",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faTriangleExclamation, className: "size-4 shrink-0" })
  },
  error: {
    container: "bg-error-subtle border-error",
    iconColor: "text-error",
    progressColor: "bg-error",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faCircleXmark, className: "size-4 shrink-0" })
  },
  info: {
    container: "bg-info-subtle border-info",
    iconColor: "text-info",
    progressColor: "bg-info",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faCircleInfo, className: "size-4 shrink-0" })
  },
  loading: {
    container: "bg-surface-raised border-border",
    iconColor: "text-text-secondary",
    progressColor: "bg-primary",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faSpinner, className: "size-4 shrink-0 animate-spin" })
  }
};
function ariaFor(variant) {
  if (variant === "warning" || variant === "error") return { role: "alert", live: "assertive" };
  return { role: "status", live: "polite" };
}
var TICK_MS = 50;
var EXIT_MS2 = 250;
function ToastItem({ item, onRemove, reducedMotion = false }) {
  var _a;
  const duration = getEffectiveDuration(item);
  const hasDuration = duration !== null;
  const [progress, setProgress] = (0, import_react47.useState)(100);
  const [paused, setPaused] = (0, import_react47.useState)(false);
  const [show, setShow] = (0, import_react47.useState)(reducedMotion);
  const [exiting, setExiting] = (0, import_react47.useState)(false);
  const remainingRef = (0, import_react47.useRef)(duration != null ? duration : 0);
  const lastTickRef = (0, import_react47.useRef)(0);
  (0, import_react47.useEffect)(() => {
    if (reducedMotion) return;
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, [reducedMotion]);
  const dismiss = (0, import_react47.useCallback)(() => {
    setExiting(true);
    setTimeout(onRemove, reducedMotion ? 0 : EXIT_MS2);
  }, [onRemove, reducedMotion]);
  (0, import_react47.useEffect)(() => {
    if (!hasDuration || paused || exiting) return;
    lastTickRef.current = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - lastTickRef.current;
      lastTickRef.current = Date.now();
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
      setProgress(remainingRef.current / duration * 100);
      if (remainingRef.current <= 0) {
        clearInterval(id);
        dismiss();
      }
    }, TICK_MS);
    return () => clearInterval(id);
  }, [hasDuration, paused, exiting, duration, dismiss]);
  (0, import_react47.useEffect)(() => {
    if (!hasDuration) return;
    const handler = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [hasDuration]);
  (0, import_react47.useEffect)(() => {
    remainingRef.current = duration != null ? duration : 0;
    setProgress(100);
    setExiting(false);
  }, [duration]);
  const { container, iconColor, progressColor, defaultIcon } = variantMap4[item.variant];
  const icon = (_a = item.icon) != null ? _a : defaultIcon;
  const showClose = item.closeButton !== false;
  const { role, live } = ariaFor(item.variant);
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
    "div",
    {
      role,
      "aria-live": live,
      onMouseEnter: () => hasDuration && setPaused(true),
      onMouseLeave: () => hasDuration && setPaused(false),
      className: cn(
        "relative w-80 rounded-xl border shadow-lg overflow-hidden pointer-events-auto",
        reducedMotion ? "" : "transition-all duration-250 ease-out",
        show && !exiting ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95",
        container
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex items-start gap-3 px-4 pt-4 pb-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: cn("mt-0.5", iconColor), "aria-hidden": "true", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("div", { className: "flex-1 min-w-0", children: [
            item.title && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: "text-sm font-semibold text-text-primary leading-snug", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("p", { className: cn("text-sm text-text-secondary leading-snug", item.title && "mt-0.5"), children: item.message }),
            item.actions && item.actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "flex flex-wrap gap-x-3 gap-y-1 mt-2.5", children: item.actions.map((action, i) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
              "button",
              {
                type: "button",
                onClick: () => action.onClick(dismiss),
                className: cn(
                  "text-xs font-semibold rounded transition-opacity hover:opacity-70",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                  action.variant === "danger" ? "text-error" : "text-text-primary underline underline-offset-2"
                ),
                children: action.label
              },
              i
            )) })
          ] }),
          showClose && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              onClick: dismiss,
              className: cn(
                "shrink-0 mt-0.5 rounded text-text-secondary hover:text-text-primary transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faXmark, className: "size-3.5" })
            }
          )
        ] }),
        hasDuration && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ProgressBar, { progress, colorClass: progressColor })
      ]
    }
  );
}

// modules/ui/Toast/parts/Region.tsx
var import_jsx_runtime67 = require("react/jsx-runtime");
var positionMap = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
};
function Region({
  position,
  items,
  onRemove,
  gap = 2,
  reducedMotion,
  className
}) {
  const ordered = position.startsWith("bottom") ? [...items].reverse() : items;
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
    "div",
    {
      className: cn(
        "fixed z-[90] flex flex-col pointer-events-none",
        positionMap[position],
        className
      ),
      style: { gap: `${gap * 0.25}rem` },
      children: ordered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        ToastItem,
        {
          item: t,
          position,
          reducedMotion,
          onRemove: () => onRemove(t.id)
        },
        t.id
      ))
    }
  );
}

// modules/ui/Toast/index.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
function _add(item) {
  return useToastStore.getState().add(item);
}
function _base(message, opts) {
  return _add(__spreadValues({ variant: "info", message }, opts));
}
var _toast = _base;
_toast.success = (message, opts) => _add(__spreadValues({ variant: "success", message }, opts));
_toast.error = (message, opts) => _add(__spreadValues({ variant: "error", message }, opts));
_toast.warning = (message, opts) => _add(__spreadValues({ variant: "warning", message }, opts));
_toast.info = (message, opts) => _add(__spreadValues({ variant: "info", message }, opts));
_toast.loading = (message, opts) => _add(__spreadValues({ variant: "loading", message }, opts));
_toast.update = (id, patch) => useToastStore.getState().update(id, patch);
_toast.dismiss = (id) => useToastStore.getState().remove(id);
_toast.clear = () => useToastStore.getState().clear();
_toast.promise = (promise, messages, opts) => {
  const id = _add(__spreadValues({ variant: "loading", message: messages.loading }, opts));
  promise.then((data) => useToastStore.getState().update(id, {
    variant: "success",
    message: typeof messages.success === "function" ? messages.success(data) : messages.success,
    // Reset to variant default duration when resolving from loading.
    duration: void 0
  })).catch((err) => useToastStore.getState().update(id, {
    variant: "error",
    message: typeof messages.error === "function" ? messages.error(err) : messages.error,
    duration: void 0
  }));
  return id;
};
var toast = _toast;
function Toaster({
  position = "top-right",
  max = 5,
  gap = 2,
  reducedMotion = false,
  messages: _messages
} = {}) {
  var _a;
  const toasts = useToastStore((s) => s.toasts);
  const remove = useToastStore((s) => s.remove);
  const setMax = useToastStore((s) => s.setMax);
  (0, import_react48.useEffect)(() => {
    setMax(max);
  }, [max, setMax]);
  const buckets = /* @__PURE__ */ new Map();
  for (const t of toasts) {
    const pos = (_a = t.position) != null ? _a : position;
    const bucket = buckets.get(pos);
    if (bucket) bucket.push(t);
    else buckets.set(pos, [t]);
  }
  if (!buckets.has(position)) buckets.set(position, []);
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_jsx_runtime68.Fragment, { children: Array.from(buckets.entries()).map(([pos, items]) => /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    Region,
    {
      position: pos,
      items,
      gap,
      reducedMotion,
      onRemove: remove
    },
    pos
  )) });
}
var ToastProvider = Toaster;
function ToastRegion({
  children,
  position = "top-right",
  className
}) {
  const positionClass = {
    "top-right": "top-4 right-4 items-end",
    "top-left": "top-4 left-4 items-start",
    "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-4 right-4 items-end",
    "bottom-left": "bottom-4 left-4 items-start",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    "div",
    {
      className: [
        "fixed z-50 flex flex-col gap-2 pointer-events-none",
        positionClass[position],
        className != null ? className : ""
      ].filter(Boolean).join(" "),
      children
    }
  );
}
function Toast({
  variant = "info",
  message,
  duration,
  onDismiss,
  action
}) {
  (0, import_react48.useEffect)(() => {
    const id = useToastStore.getState().add({
      variant,
      message,
      duration,
      actions: action ? [{ label: action.label, onClick: (d) => {
        action.onClick();
        d();
      } }] : void 0
    });
    if (!onDismiss) return;
    const eff = getEffectiveDuration({ variant, duration });
    if (eff === null) return;
    const timer = setTimeout(onDismiss, eff);
    return () => clearTimeout(timer);
  }, []);
  return null;
}

// modules/ui/Tooltip.tsx
init_cn();
var import_react49 = require("react");
var import_jsx_runtime69 = require("react/jsx-runtime");
var themeMap = {
  default: "bg-surface-overlay text-text-primary border border-border",
  dark: "bg-gray-900 text-white border-transparent",
  light: "bg-white text-gray-900 border border-border shadow-md"
};
var arrowBaseClass = "absolute w-2 h-2 rotate-45 border border-border";
var arrowPlacementClass = {
  top: "bottom-[-5px] left-1/2 -translate-x-1/2 border-t-0 border-l-0",
  bottom: "top-[-5px] left-1/2 -translate-x-1/2 border-b-0 border-r-0",
  left: "right-[-5px] top-1/2 -translate-y-1/2 border-l-0 border-b-0",
  right: "left-[-5px] top-1/2 -translate-y-1/2 border-r-0 border-t-0"
};
var arrowThemeMap = {
  default: "bg-surface-overlay",
  dark: "bg-gray-900 border-transparent",
  light: "bg-white"
};
var placementClass = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function Tooltip({
  content,
  placement = "top",
  theme = "default",
  arrow = false,
  delay = 0,
  children,
  className
}) {
  const [visible, setVisible] = (0, import_react49.useState)(false);
  const timer = (0, import_react49.useRef)(null);
  const id = (0, import_react49.useRef)(`tooltip-${Math.random().toString(36).slice(2)}`).current;
  function show() {
    if (delay > 0) {
      timer.current = setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(true);
    }
  }
  function hide() {
    if (timer.current) clearTimeout(timer.current);
    setVisible(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(
    "span",
    {
      className: cn("relative inline-flex items-center", className),
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("span", { "aria-describedby": id, children }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(
          "span",
          {
            id,
            role: "tooltip",
            className: cn(
              "absolute z-[80] whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium shadow-md",
              "transition-opacity duration-150 pointer-events-none",
              themeMap[theme],
              placementClass[placement],
              visible ? "opacity-100" : "opacity-0"
            ),
            children: [
              content,
              arrow && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
                "span",
                {
                  "aria-hidden": "true",
                  className: cn(
                    arrowBaseClass,
                    arrowPlacementClass[placement],
                    arrowThemeMap[theme]
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// modules/ui/TreeView/index.tsx
init_cn();
var import_react_fontawesome27 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons27 = require("@fortawesome/free-solid-svg-icons");
var import_react52 = require("react");

// modules/ui/TreeView/parts/Node.tsx
init_cn();
var import_react_fontawesome26 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons26 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime70 = require("react/jsx-runtime");
function TreeNodeRow({
  row,
  isSelected,
  isFocused,
  onActivate,
  onToggle,
  onFocus
}) {
  const { node, depth, hasChildren, expanded, level, posInSet, setSize } = row;
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
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
            hasChildren ? /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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
                children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
                  import_react_fontawesome26.FontAwesomeIcon,
                  {
                    icon: expanded ? import_free_solid_svg_icons26.faChevronDown : import_free_solid_svg_icons26.faChevronRight,
                    className: "w-2.5 h-2.5"
                  }
                )
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("span", { className: "w-3 shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("span", { children: node.label })
          ]
        }
      )
    }
  );
}

// modules/ui/TreeView/hooks/useTreeState.ts
var import_react50 = require("react");
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
  const [uncontrolledExpanded, setUncontrolledExpanded] = (0, import_react50.useState)(() => {
    if (defaultExpandedIds) return new Set(defaultExpandedIds);
    return collectExpandableIds(nodes);
  });
  const expanded = (0, import_react50.useMemo)(() => {
    if (controlledExpandedIds) return new Set(controlledExpandedIds);
    return uncontrolledExpanded;
  }, [controlledExpandedIds, uncontrolledExpanded]);
  const [uncontrolledSelected, setUncontrolledSelected] = (0, import_react50.useState)(() => {
    if (controlledSelectedIds && controlledSelectedIds.length) return new Set(controlledSelectedIds);
    if (controlledSelectedId) return /* @__PURE__ */ new Set([controlledSelectedId]);
    return /* @__PURE__ */ new Set();
  });
  const selected = (0, import_react50.useMemo)(() => {
    if (controlledSelectedIds) return new Set(controlledSelectedIds);
    if (controlledSelectedId !== void 0) return /* @__PURE__ */ new Set([controlledSelectedId]);
    return uncontrolledSelected;
  }, [controlledSelectedIds, controlledSelectedId, uncontrolledSelected]);
  const visibleRows = (0, import_react50.useMemo)(
    () => flattenVisible(nodes, expanded, 0, null, []),
    [nodes, expanded]
  );
  const [focusId, setFocusId] = (0, import_react50.useState)(
    () => {
      var _a;
      return initialFocusId != null ? initialFocusId : (_a = visibleRows[0]) == null ? void 0 : _a.node.id;
    }
  );
  const setExpanded = (0, import_react50.useCallback)(
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
  const toggleExpanded = (0, import_react50.useCallback)(
    (id) => {
      const isOpen = expanded.has(id);
      setExpanded(id, !isOpen);
    },
    [expanded, setExpanded]
  );
  const expandAll = (0, import_react50.useCallback)(() => {
    const all = collectExpandableIds(nodes);
    if (!controlledExpandedIds) setUncontrolledExpanded(all);
    all.forEach((id) => {
      if (!expanded.has(id)) onExpand == null ? void 0 : onExpand(id, true);
    });
  }, [nodes, controlledExpandedIds, expanded, onExpand]);
  const collapseAll = (0, import_react50.useCallback)(() => {
    if (!controlledExpandedIds) setUncontrolledExpanded(/* @__PURE__ */ new Set());
    expanded.forEach((id) => onExpand == null ? void 0 : onExpand(id, false));
  }, [controlledExpandedIds, expanded, onExpand]);
  const commitSelection = (0, import_react50.useCallback)(
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
  const selectSingle = (0, import_react50.useCallback)(
    (id) => {
      commitSelection(/* @__PURE__ */ new Set([id]));
    },
    [commitSelection]
  );
  const toggleSelection = (0, import_react50.useCallback)(
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
  const selectRange = (0, import_react50.useCallback)(
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
  const moveFocus = (0, import_react50.useCallback)(
    (delta) => {
      if (!visibleRows.length) return;
      const idx = visibleRows.findIndex((r) => r.node.id === focusId);
      const safeIdx = idx === -1 ? 0 : idx;
      const next = Math.max(0, Math.min(visibleRows.length - 1, safeIdx + delta));
      setFocusId(visibleRows[next].node.id);
    },
    [visibleRows, focusId]
  );
  const focusFirst = (0, import_react50.useCallback)(() => {
    if (visibleRows.length) setFocusId(visibleRows[0].node.id);
  }, [visibleRows]);
  const focusLast = (0, import_react50.useCallback)(() => {
    if (visibleRows.length) setFocusId(visibleRows[visibleRows.length - 1].node.id);
  }, [visibleRows]);
  const findRow = (0, import_react50.useCallback)(
    (id) => visibleRows.find((r) => r.node.id === id),
    [visibleRows]
  );
  const selectAllVisible = (0, import_react50.useCallback)(() => {
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
var import_react51 = require("react");
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
  const anchorRef = (0, import_react51.useRef)(focusId);
  const typeAheadRef = (0, import_react51.useRef)({
    buffer: "",
    lastAt: 0
  });
  const updateAnchorOnFocus = (0, import_react51.useCallback)(
    (id) => {
      anchorRef.current = id;
    },
    []
  );
  const jumpTypeAhead = (0, import_react51.useCallback)(
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
  const onKeyDown = (0, import_react51.useCallback)(
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
var import_jsx_runtime71 = require("react/jsx-runtime");
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
  const msgs = (0, import_react52.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: cn("flex flex-col gap-1", className), children: [
    showToolbar && /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
      "div",
      {
        "data-tree-toolbar": true,
        className: "flex items-center gap-1 px-1 pb-1 text-xs text-text-secondary",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faAngleDoubleDown, className: "w-3 h-3", "aria-hidden": "true" }),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { children: msgs.expandAll })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faAngleDoubleUp, className: "w-3 h-3", "aria-hidden": "true" }),
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { children: msgs.collapseAll })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
      "ul",
      {
        role: "tree",
        "aria-label": label != null ? label : msgs.tree,
        "aria-multiselectable": selectionMode === "multi" ? true : void 0,
        onKeyDown,
        className: cn("space-y-0.5"),
        children: visibleRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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

// modules/ui/index.ts
init_VideoPlayer();

// modules/ui/ViewToggle.tsx
init_cn();
var import_react_fontawesome34 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons34 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime81 = require("react/jsx-runtime");
function ViewToggle({ value, onChange, labels, ariaLabel, className }) {
  var _a, _b;
  const hLabel = (_a = labels == null ? void 0 : labels.horizontal) != null ? _a : "Horizontal";
  const vLabel = (_b = labels == null ? void 0 : labels.vertical) != null ? _b : "Vertical";
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
    "div",
    {
      className: cn("flex items-center gap-0.5 rounded-lg p-0.5 border border-border bg-surface-raised", className),
      role: "group",
      "aria-label": ariaLabel != null ? ariaLabel : "View options",
      children: ["horizontal", "vertical"].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
        "button",
        {
          onClick: () => onChange(opt),
          "aria-pressed": value === opt,
          className: cn(
            "px-3 py-1.5 rounded-md text-xs font-semibold transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            value === opt ? "bg-primary text-primary-fg shadow-sm" : "text-text-secondary hover:text-text-primary"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
              import_react_fontawesome34.FontAwesomeIcon,
              {
                icon: opt === "horizontal" ? import_free_solid_svg_icons34.faTableList : import_free_solid_svg_icons34.faTableCells,
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
var import_dynamic = __toESM(require("next/dynamic"));
var import_jsx_runtime82 = require("react/jsx-runtime");
var LazyDataTable = (0, import_dynamic.default)(
  () => Promise.resolve().then(() => (init_DataTable2(), DataTable_exports)).then((m) => m.DataTable),
  { loading: () => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(SkeletonTableRow, { cols: 4 }), ssr: false }
);
var LazyAdvancedDataTable = (0, import_dynamic.default)(
  () => Promise.resolve().then(() => (init_AdvancedDataTable(), AdvancedDataTable_exports)).then((m) => m.AdvancedDataTable),
  { loading: () => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(SkeletonTableRow, { cols: 4 }), ssr: false }
);
var LazyServerDataTable = (0, import_dynamic.default)(
  () => Promise.resolve().then(() => (init_ServerDataTable(), ServerDataTable_exports)).then((m) => m.ServerDataTable),
  { loading: () => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(SkeletonTableRow, { cols: 4 }), ssr: false }
);
var LazyDateRangePicker = (0, import_dynamic.default)(
  () => Promise.resolve().then(() => (init_DateRangePicker(), DateRangePicker_exports)).then((m) => m.DateRangePicker),
  { loading: () => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(SkeletonCard, {}), ssr: false }
);
var LazyMapView = (0, import_dynamic.default)(
  () => Promise.resolve().then(() => (init_MapView(), MapView_exports)).then((m) => m.MapView),
  { loading: () => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(SkeletonCard, {}), ssr: false }
);
var LazyVideoPlayer = (0, import_dynamic.default)(
  () => Promise.resolve().then(() => (init_VideoPlayer(), VideoPlayer_exports)).then((m) => m.VideoPlayer),
  { loading: () => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(SkeletonCard, {}), ssr: false }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdvancedDataTable,
  AlertBanner,
  Announcer,
  Avatar,
  AvatarGroup,
  Badge,
  BrandLogo,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CheckboxGroup,
  ComboBox,
  ContentScoreBar,
  DataTable,
  DatePicker,
  DateRangePicker,
  Drawer,
  DropdownMenu,
  EmptyState,
  FileInput,
  Input,
  LazyAdvancedDataTable,
  LazyDataTable,
  LazyDateRangePicker,
  LazyMapView,
  LazyServerDataTable,
  LazyVideoPlayer,
  LiveRegion,
  MapView,
  Modal,
  MultiSelect,
  PageHeader,
  Pagination,
  Popover,
  RadioGroup,
  SearchBar,
  Select,
  ServerDataTable,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonLine,
  SkeletonTableRow,
  SkeletonText,
  SkipLink,
  Slider,
  Spinner,
  StarRating,
  StatCard,
  Stepper,
  TabButton,
  TabGroup,
  Table,
  TagInput,
  Textarea,
  TimePicker,
  Toast,
  ToastProvider,
  ToastRegion,
  Toggle,
  Tooltip,
  TreeView,
  VideoPlayer,
  ViewToggle,
  getEffectiveDuration,
  toast,
  useToastStore
});
