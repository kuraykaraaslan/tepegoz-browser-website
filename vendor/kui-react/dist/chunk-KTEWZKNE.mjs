"use client";
import {
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/DatePicker/index.tsx
import { useCallback as useCallback2, useEffect as useEffect3, useId as useId2, useMemo, useRef as useRef3, useState as useState2 } from "react";

// modules/ui/DatePicker/calendar/Calendar.tsx
import { useCallback, useEffect as useEffect2, useId, useRef as useRef2, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// modules/ui/DatePicker/locale/en.ts
var enLocale = {
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

// modules/ui/DatePicker/locale/tr.ts
var trLocale = {
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

// modules/ui/DatePicker/hooks/useDateFns.ts
var LOCALES = {
  en: enLocale,
  tr: trLocale
};
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
var FORMAT_TOKEN = /YYYY|YY|MM|M|DD|D/g;
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

// modules/ui/DatePicker/calendar/MonthSelect.tsx
import { jsx } from "react/jsx-runtime";
function MonthSelect({ value, locale, onSelect }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1.5 p-2", role: "listbox", "aria-label": "Month", children: locale.months.map((name, idx) => {
    const active = idx === value;
    return /* @__PURE__ */ jsx(
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

// modules/ui/DatePicker/calendar/YearSelect.tsx
import { useEffect, useRef } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function YearSelect({ value, min, max, onSelect }) {
  const activeRef = useRef(null);
  const years = yearRange(value, 10);
  useEffect(() => {
    var _a;
    (_a = activeRef.current) == null ? void 0 : _a.scrollIntoView({ block: "center" });
  }, []);
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: "max-h-56 overflow-y-auto p-2",
      role: "listbox",
      "aria-label": "Year",
      children: /* @__PURE__ */ jsx2("div", { className: "grid grid-cols-3 gap-1.5", children: years.map((y) => {
        const disabled = min && y < min.getFullYear() || max && y > max.getFullYear();
        const active = y === value;
        return /* @__PURE__ */ jsx2(
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

// modules/ui/DatePicker/calendar/Calendar.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
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
  const [view, setView] = useState("days");
  const [focus, setFocus] = useState(() => clampToBounds(selected != null ? selected : month, min, max));
  const gridRef = useRef2(null);
  const captionId = useId();
  useEffect2(() => {
    if (!isSameMonth(focus, month)) {
      setFocus(clampToBounds(new Date(month.getFullYear(), month.getMonth(), Math.min(focus.getDate(), 28)), min, max));
    }
  }, [month.getFullYear(), month.getMonth()]);
  const goMonth = useCallback(
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
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-2 pt-2 pb-1", children: [
      !hidePrevButton ? /* @__PURE__ */ jsx3(
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
          children: /* @__PURE__ */ jsx3(FontAwesomeIcon, { icon: faChevronLeft, className: "h-3.5 w-3.5", "aria-hidden": "true" })
        }
      ) : /* @__PURE__ */ jsx3("span", { className: "h-7 w-7", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm font-medium text-text-primary", id: captionId, children: [
        /* @__PURE__ */ jsx3(
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
        /* @__PURE__ */ jsx3(
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
      !hideNextButton ? /* @__PURE__ */ jsx3(
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
          children: /* @__PURE__ */ jsx3(FontAwesomeIcon, { icon: faChevronRight, className: "h-3.5 w-3.5", "aria-hidden": "true" })
        }
      ) : /* @__PURE__ */ jsx3("span", { className: "h-7 w-7", "aria-hidden": "true" })
    ] });
  }
  function renderGrid() {
    return /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx3("div", { className: "grid grid-cols-7 gap-0.5", role: "row", children: weekdays.map((w, i) => /* @__PURE__ */ jsx3(
            "div",
            {
              role: "columnheader",
              className: "py-1 text-center text-[11px] font-medium uppercase tracking-wide text-text-secondary",
              children: w
            },
            `wd-${i}`
          )) }),
          /* @__PURE__ */ jsx3("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: grid.map((d) => {
            const inMonth = isSameMonth(d, month);
            const disabled = isDisabled(d, disabledDates, min, max);
            const isSelected = isSameDay(d, selected);
            const isToday = isSameDay(d, today);
            const isFocus = isSameDay(d, focus) && inMonth;
            const isStart = isSameDay(d, rangeStart);
            const isEnd = isSameDay(d, rangeEnd);
            return /* @__PURE__ */ jsx3(
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
          /* @__PURE__ */ jsx3("div", { className: "mt-2 flex items-center justify-end px-1", children: /* @__PURE__ */ jsx3(
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
  return /* @__PURE__ */ jsxs(
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
        view === "months" && /* @__PURE__ */ jsx3(
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
        view === "years" && /* @__PURE__ */ jsx3(
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

// modules/ui/DatePicker/parts/PresetList.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function PresetList({ className }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: cn("hidden", className),
      "aria-hidden": "true",
      "data-preset-list-placeholder": true
    }
  );
}

// modules/ui/DatePicker/parts/Trigger.tsx
import { forwardRef } from "react";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faCalendar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Trigger = forwardRef(function Trigger2({
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
  return /* @__PURE__ */ jsxs2(
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
        /* @__PURE__ */ jsx5(
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
            children: display ? /* @__PURE__ */ jsx5("span", { children: display }) : /* @__PURE__ */ jsx5("span", { className: "text-text-disabled", children: placeholder })
          }
        ),
        showClear && !disabled ? /* @__PURE__ */ jsx5(
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
            children: /* @__PURE__ */ jsx5(FontAwesomeIcon2, { icon: faXmark, className: "h-3 w-3", "aria-hidden": "true" })
          }
        ) : null,
        /* @__PURE__ */ jsx5(
          "span",
          {
            className: cn(
              "pointer-events-none mr-3 text-text-secondary",
              disabled && "opacity-50"
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx5(FontAwesomeIcon2, { icon: faCalendar, className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
});

// modules/ui/DatePicker/index.tsx
import { Fragment, jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function mergeMessages(base, override) {
  return override ? __spreadValues(__spreadValues({}, base), override) : base;
}
function useDismissOnOutside(ref, open, onClose) {
  useEffect3(() => {
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
  const reactId = useId2();
  const baseId = id != null ? id : `dp-${reactId}`;
  const hintId = hint ? `${baseId}-hint` : void 0;
  const errorId = error ? `${baseId}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const popoverId = `${baseId}-popover`;
  const locale = resolveLocale(localeCode);
  const msgs = mergeMessages(locale.messages, messages);
  const fmt = format != null ? format : locale.displayFormat;
  const [open, setOpen] = useState2(false);
  const [visibleMonth, setVisibleMonth] = useState2(
    () => startOfMonth(value != null ? value : clampToBounds(/* @__PURE__ */ new Date(), min, max))
  );
  const wrapperRef = useRef3(null);
  useDismissOnOutside(wrapperRef, open, () => setOpen(false));
  useEffect3(() => {
    if (value && !isSameMonth(value, visibleMonth)) {
      setVisibleMonth(startOfMonth(value));
    }
  }, [value == null ? void 0 : value.getTime()]);
  const display = formatDate(value, fmt);
  const handleSelect = useCallback2(
    (d) => {
      if (isDisabled(d, disabledDates, min, max)) return;
      onChange(startOfDay(d));
      setOpen(false);
    },
    [disabledDates, min, max, onChange]
  );
  return /* @__PURE__ */ jsxs3("div", { ref: wrapperRef, className: cn("relative space-y-1", className), "data-testid": `datepicker-${baseId}`, children: [
    label ? /* @__PURE__ */ jsxs3("label", { htmlFor: baseId, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required ? /* @__PURE__ */ jsxs3(Fragment, { children: [
        /* @__PURE__ */ jsx6("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "(required)" })
      ] }) : null
    ] }) : null,
    /* @__PURE__ */ jsx6(
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
    name ? /* @__PURE__ */ jsx6("input", { type: "hidden", name, value: display }) : null,
    open && variant === "popover" ? /* @__PURE__ */ jsxs3(
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
          /* @__PURE__ */ jsx6(PresetList, {}),
          /* @__PURE__ */ jsx6(
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
    hint && !error ? /* @__PURE__ */ jsx6("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }) : null,
    error ? /* @__PURE__ */ jsx6("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error }) : null
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
  const reactId = useId2();
  const baseId = id != null ? id : `dr-${reactId}`;
  const hintId = hint ? `${baseId}-hint` : void 0;
  const errorId = error ? `${baseId}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const popoverId = `${baseId}-popover`;
  const locale = resolveLocale(localeCode);
  const msgs = mergeMessages(locale.messages, messages);
  const fmt = format != null ? format : locale.displayFormat;
  const range = normaliseRange(value);
  const [open, setOpen] = useState2(false);
  const [leftMonth, setLeftMonth] = useState2(
    () => {
      var _a2;
      return startOfMonth((_a2 = range.start) != null ? _a2 : clampToBounds(/* @__PURE__ */ new Date(), min, max));
    }
  );
  const wrapperRef = useRef3(null);
  useDismissOnOutside(wrapperRef, open, () => setOpen(false));
  const rightMonth = useMemo(() => addMonths(leftMonth, 1), [leftMonth]);
  const startStr = formatDate(range.start, fmt);
  const endStr = formatDate(range.end, fmt);
  const display = range.start || range.end ? `${startStr || msgs.placeholder}  \u2192  ${endStr || msgs.placeholder}` : "";
  const handleSelect = useCallback2(
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
  return /* @__PURE__ */ jsxs3("div", { ref: wrapperRef, className: cn("relative space-y-1", className), "data-testid": `daterangepicker-${baseId}`, children: [
    label ? /* @__PURE__ */ jsxs3("span", { className: "block text-sm font-medium text-text-primary", children: [
      label,
      required ? /* @__PURE__ */ jsxs3(Fragment, { children: [
        /* @__PURE__ */ jsx6("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "(required)" })
      ] }) : null
    ] }) : null,
    /* @__PURE__ */ jsx6(
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
    open && variant === "popover" ? /* @__PURE__ */ jsxs3(
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
          /* @__PURE__ */ jsx6(PresetList, {}),
          /* @__PURE__ */ jsx6(
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
          /* @__PURE__ */ jsx6(
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
    hint && !error ? /* @__PURE__ */ jsx6("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }) : null,
    error ? /* @__PURE__ */ jsx6("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error }) : null
  ] });
}

// modules/ui/DateRangePicker.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs4("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsxs4("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ jsxs4(Fragment2, { children: [
        /* @__PURE__ */ jsx7("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ jsx7("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ jsx7(
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
    hint && !error && /* @__PURE__ */ jsx7("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ jsx7("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

export {
  DatePicker,
  DateRangePicker,
  TimePicker
};
