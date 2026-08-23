"use client";
import {
  SearchBar,
  Spinner
} from "./chunk-5E2HXWFI.mjs";
import {
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/Table/Table.tsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faSort } from "@fortawesome/free-solid-svg-icons";

// modules/ui/Table/core/columnHelpers.ts
var alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
};
function headerClassFor(col, base) {
  const parts = [base];
  if (col.align === "center") parts.push(alignClass.center);
  else if (col.align === "right") parts.push(alignClass.right);
  else parts.push(alignClass.left);
  if (col.thClass) parts.push(col.thClass);
  return parts.join(" ");
}
function cellClassFor(col, base) {
  const parts = [base];
  if (col.align === "center") parts.push(alignClass.center);
  else if (col.align === "right") parts.push(alignClass.right);
  if (col.tdClass) parts.push(col.tdClass);
  return parts.join(" ");
}

// modules/ui/Table/Table.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Table({
  columns,
  rows,
  caption,
  emptyMessage = "No results found.",
  defaultSortKey,
  defaultSortDir,
  className
}) {
  const [sortKey, setSortKey] = useState(defaultSortKey != null ? defaultSortKey : "");
  const [sortDir, setSortDir] = useState(
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "w-full overflow-x-auto rounded-lg border border-border",
        className
      ),
      children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
        caption && /* @__PURE__ */ jsx("caption", { className: "sr-only", children: caption }),
        /* @__PURE__ */ jsx("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ jsx("tr", { children: columns.map((col) => {
          const isSorted = sortKey === String(col.key);
          const dir = isSorted ? sortDir : null;
          return /* @__PURE__ */ jsx(
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
              children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                col.header,
                col.sortable && /* @__PURE__ */ jsx(
                  FontAwesomeIcon,
                  {
                    icon: dir === "asc" ? faChevronUp : dir === "desc" ? faChevronDown : faSort,
                    className: "w-2.5 h-2.5",
                    "aria-hidden": "true"
                  }
                )
              ] })
            },
            String(col.key)
          );
        }) }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border bg-surface-base", children: sorted.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
          "td",
          {
            colSpan: columns.length,
            className: "px-4 py-8 text-center text-text-secondary",
            children: emptyMessage
          }
        ) }) : sorted.map((row, i) => /* @__PURE__ */ jsx(
          "tr",
          {
            className: "hover:bg-surface-overlay transition-colors",
            children: columns.map((col) => {
              var _a;
              return /* @__PURE__ */ jsx(
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

// modules/ui/Pagination.tsx
import { useState as useState2 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var sizeMap = {
  sm: { page: "w-7 h-7 text-xs", nav: "px-2 py-1 text-xs" },
  md: { page: "w-9 h-9 text-sm", nav: "px-3 py-1.5 text-sm" },
  lg: { page: "w-10 h-10 text-base", nav: "px-4 py-2 text-base" }
};
function Pagination({
  page,
  totalPages,
  onPageChange,
  size = "md",
  showFirstLast = false,
  showJumpTo = false,
  className
}) {
  const [jumpValue, setJumpValue] = useState2("");
  const s = sizeMap[size];
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
  return /* @__PURE__ */ jsxs2("nav", { "aria-label": "Pagination", className: cn("flex items-center gap-1 flex-wrap", className), children: [
    showFirstLast && /* @__PURE__ */ jsx2(
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
    /* @__PURE__ */ jsx2(
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
      (item, i) => item === "ellipsis" ? /* @__PURE__ */ jsx2("span", { className: cn("text-text-disabled", s.nav), children: "\u2026" }, `e-${i}`) : /* @__PURE__ */ jsx2(
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
    /* @__PURE__ */ jsx2(
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
    showFirstLast && /* @__PURE__ */ jsx2(
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
    showJumpTo && /* @__PURE__ */ jsxs2("form", { onSubmit: handleJump, className: "flex items-center gap-1.5 ml-2", children: [
      /* @__PURE__ */ jsx2("label", { htmlFor: "pagination-jump", className: "text-xs text-text-secondary whitespace-nowrap", children: "Go to" }),
      /* @__PURE__ */ jsx2(
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
      /* @__PURE__ */ jsx2(
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

// modules/ui/Table/DataTable.tsx
import { useId, useState as useState6 } from "react";

// modules/ui/Table/parts/HeaderCell.tsx
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import {
  faChevronUp as faChevronUp2,
  faChevronDown as faChevronDown2,
  faSort as faSort2
} from "@fortawesome/free-solid-svg-icons";

// modules/ui/Table/parts/FilterPopover.tsx
import { useEffect, useRef, useState as useState3 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function FilterPopover({
  column,
  value,
  onChange
}) {
  var _a, _b, _c, _d, _e;
  const [open, setOpen] = useState3(false);
  const wrapperRef = useRef(null);
  const [draft, setDraft] = useState3(value);
  useEffect(() => {
    setDraft(value);
  }, [value]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs3("span", { ref: wrapperRef, className: "relative inline-flex", children: [
    /* @__PURE__ */ jsx3(
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
        children: /* @__PURE__ */ jsx3(FontAwesomeIcon2, { icon: faFilter, className: "w-2.5 h-2.5", "aria-hidden": "true" })
      }
    ),
    open && /* @__PURE__ */ jsxs3(
      "div",
      {
        role: "dialog",
        "aria-label": `Filter ${column.header}`,
        onClick: (e) => e.stopPropagation(),
        className: cn(
          "absolute top-full left-0 mt-1 z-[70] min-w-[12rem] rounded-lg border border-border bg-surface-raised shadow-xl p-3"
        ),
        children: [
          ((_a = column.filter) == null ? void 0 : _a.kind) === "select" ? /* @__PURE__ */ jsxs3(
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
                /* @__PURE__ */ jsx3("option", { value: "", children: "All" }),
                ((_c = (_b = column.filter) == null ? void 0 : _b.options) != null ? _c : []).map((opt) => /* @__PURE__ */ jsx3("option", { value: opt.value, children: opt.label }, opt.value))
              ]
            }
          ) : /* @__PURE__ */ jsx3(
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
          /* @__PURE__ */ jsxs3("div", { className: "mt-2 flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsx3(
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
            /* @__PURE__ */ jsx3(
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

// modules/ui/Table/parts/HeaderCell.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx4(
    "th",
    {
      scope: "col",
      "aria-sort": ariaSort,
      className: cn(
        headerClass,
        column.sortable && "cursor-pointer select-none hover:text-text-primary transition-colors"
      ),
      onClick: column.sortable ? (e) => onToggleSort(key, e.shiftKey) : void 0,
      children: /* @__PURE__ */ jsxs4("span", { className: "inline-flex items-center gap-1", children: [
        column.header,
        column.sortable && /* @__PURE__ */ jsx4(
          FontAwesomeIcon3,
          {
            icon: dir === "asc" ? faChevronUp2 : dir === "desc" ? faChevronDown2 : faSort2,
            className: "w-2.5 h-2.5",
            "aria-hidden": "true"
          }
        ),
        sortOrder !== null && /* @__PURE__ */ jsx4(
          "span",
          {
            "aria-hidden": "true",
            className: "ml-0.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-fg px-1",
            children: sortOrder
          }
        ),
        column.filter && /* @__PURE__ */ jsx4(
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

// modules/ui/Table/parts/BodyRow.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function BodyRow({
  row,
  columns,
  onClick
}) {
  return /* @__PURE__ */ jsx5(
    "tr",
    {
      onClick: onClick ? () => onClick(row) : void 0,
      className: cn(
        "hover:bg-surface-overlay transition-colors",
        onClick && "cursor-pointer"
      ),
      children: columns.map((col) => {
        var _a;
        return /* @__PURE__ */ jsx5(
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

// modules/ui/Table/parts/Toolbar.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs5("div", { className: cn("flex items-center gap-2 flex-wrap", className), children: [
    searchable && /* @__PURE__ */ jsx6(
      SearchBar,
      {
        id: id ? `${id}-search` : "dt-search",
        value: searchValue,
        onChange: onSearchChange,
        placeholder: searchPlaceholder,
        className: "flex-1 min-w-40"
      }
    ),
    pageSizeOptions && onPageSizeChange && pageSize !== void 0 && /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ jsx6(
        "label",
        {
          htmlFor: id ? `${id}-pagesize` : "dt-pagesize",
          className: "text-xs text-text-secondary whitespace-nowrap",
          children: rowsPerPageLabel != null ? rowsPerPageLabel : "Rows per page:"
        }
      ),
      /* @__PURE__ */ jsx6(
        "select",
        {
          id: id ? `${id}-pagesize` : "dt-pagesize",
          value: pageSize,
          onChange: (e) => onPageSizeChange(Number(e.target.value)),
          className: cn(
            "rounded-md border border-border bg-surface-base px-2 py-1.5 text-sm text-text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          ),
          children: pageSizeOptions.map((s) => /* @__PURE__ */ jsx6("option", { value: s, children: s }, s))
        }
      )
    ] })
  ] });
}

// modules/ui/Table/parts/EmptyState.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function StateRow({
  state,
  colSpan,
  message
}) {
  if (state === "loading") {
    return /* @__PURE__ */ jsx7("tr", { children: /* @__PURE__ */ jsx7(
      "td",
      {
        colSpan,
        className: "px-4 py-10 text-center text-sm text-text-secondary",
        children: /* @__PURE__ */ jsxs6("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsx7(Spinner, { size: "sm" }),
          message
        ] })
      }
    ) });
  }
  if (state === "error") {
    return /* @__PURE__ */ jsx7("tr", { children: /* @__PURE__ */ jsx7(
      "td",
      {
        colSpan,
        className: "px-4 py-10 text-center text-sm text-error-fg bg-error-subtle",
        children: message
      }
    ) });
  }
  return /* @__PURE__ */ jsx7("tr", { children: /* @__PURE__ */ jsx7(
    "td",
    {
      colSpan,
      className: "px-4 py-10 text-center text-sm text-text-secondary",
      children: message
    }
  ) });
}

// modules/ui/Table/core/useTable.ts
import { useCallback, useMemo, useState as useState4 } from "react";
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
  const [sort, setSort] = useState4(initialSort);
  const [page, setPage] = useState4(1);
  const [pageSize, setPageSize] = useState4(initialPageSize);
  const [search, setSearch] = useState4(initialSearch);
  const [filters, setFilters] = useState4(initialFilters);
  const filtered = useMemo(
    () => applyColumnFilters(applySearch(rows, columns, search), columns, filters),
    [rows, columns, search, filters]
  );
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort]);
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const toggleSort = useCallback(
    (key, shiftKey) => {
      setSort((curr) => nextSortState(curr, key, shiftKey));
      setPage(1);
    },
    []
  );
  const setColumnFilter = useCallback(
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
  const setGlobalSearch = useCallback((v) => {
    setSearch(v);
    setPage(1);
  }, []);
  const changePageSize = useCallback((n) => {
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

// modules/ui/Table/core/useServerTable.ts
import { useCallback as useCallback2, useEffect as useEffect2, useRef as useRef2, useState as useState5 } from "react";
function useServerTable({
  fetchPage,
  initialPageSize = 10,
  initialSort = [],
  initialSearch = "",
  initialFilters = {},
  externalError = null
}) {
  const [rows, setRows] = useState5([]);
  const [total, setTotal] = useState5(0);
  const [sort, setSort] = useState5(initialSort);
  const [page, setPage] = useState5(1);
  const [pageSize, setPageSize] = useState5(initialPageSize);
  const [search, setSearch] = useState5(initialSearch);
  const [filters, setFilters] = useState5(initialFilters);
  const [loading, setLoading] = useState5(false);
  const [error, setError] = useState5(externalError);
  const fetchRef = useRef2(fetchPage);
  fetchRef.current = fetchPage;
  const reqIdRef = useRef2(0);
  useEffect2(() => {
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
  useEffect2(() => {
    setError(externalError);
  }, [externalError]);
  const toggleSort = useCallback2((key, shiftKey) => {
    setSort((curr) => nextSortState(curr, key, shiftKey));
    setPage(1);
  }, []);
  const setColumnFilter = useCallback2((key, value) => {
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
  const setGlobalSearch = useCallback2((v) => {
    setSearch(v);
    setPage(1);
  }, []);
  const changePageSize = useCallback2((n) => {
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

// modules/ui/Table/DataTable.tsx
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import {
  faChevronDown as faChevronDown3,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

// modules/ui/Table/types.ts
var DEFAULT_MESSAGES = {
  empty: "No results found.",
  loading: "Loading\u2026",
  error: "Something went wrong.",
  searchPlaceholder: "Search\u2026",
  rowsPerPage: "Rows per page:",
  filter: "Filter",
  clearFilter: "Clear",
  apply: "Apply"
};

// modules/ui/Table/DataTable.tsx
import { Fragment, jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function DataTable(props) {
  var _a, _b;
  const generatedId = useId();
  const id = (_a = props.id) != null ? _a : `dt-${generatedId.replace(/:/g, "")}`;
  if (props.legacyAdvancedRows !== void 0) {
    return /* @__PURE__ */ jsx8(LegacyAdvancedView, __spreadProps(__spreadValues({}, props), { id }));
  }
  if (props.serverControlled) {
    return /* @__PURE__ */ jsx8(LegacyServerView, __spreadProps(__spreadValues({}, props), { id }));
  }
  const mode = (_b = props.mode) != null ? _b : "paginated";
  if (mode === "server") {
    return /* @__PURE__ */ jsx8(ServerView, __spreadProps(__spreadValues({}, props), { id }));
  }
  return /* @__PURE__ */ jsx8(ClientView, __spreadProps(__spreadValues({}, props), { mode, id }));
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
  const msgs = __spreadValues(__spreadValues({}, DEFAULT_MESSAGES), messages);
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
  return /* @__PURE__ */ jsxs7("div", { className: cn("space-y-3", className), "data-dt-id": id, children: [
    (searchable || !isStatic && searchable) && /* @__PURE__ */ jsx8(
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
    /* @__PURE__ */ jsx8("div", { className: "w-full overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ jsxs7("table", { className: "w-full text-sm", children: [
      caption && /* @__PURE__ */ jsx8("caption", { className: "sr-only", children: caption }),
      /* @__PURE__ */ jsx8("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ jsx8("tr", { children: columns.map((col) => {
        var _a;
        return /* @__PURE__ */ jsx8(
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
      /* @__PURE__ */ jsx8("tbody", { className: "divide-y divide-border bg-surface-base", children: resolvedState !== "ready" ? /* @__PURE__ */ jsx8(
        StateRow,
        {
          state: resolvedState,
          colSpan: columns.length,
          message: resolvedState === "loading" ? loadingMessage != null ? loadingMessage : msgs.loading : resolvedState === "error" ? errorMessage != null ? errorMessage : msgs.error : table.search && total === 0 ? `No results for "${table.search}"` : emptyMessage != null ? emptyMessage : msgs.empty
        }
      ) : pageRows.map((row, i) => /* @__PURE__ */ jsx8(
        BodyRow,
        {
          row,
          columns,
          onClick: onRowClick
        },
        i
      )) })
    ] }) }),
    !isStatic && /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsx8("p", { className: "text-xs text-text-secondary", children: total === 0 ? "No results" : `Showing ${start}\u2013${end} of ${total}${table.search ? ` (filtered from ${rows.length})` : ""}` }),
      /* @__PURE__ */ jsx8(
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
  const msgs = __spreadValues(__spreadValues({}, DEFAULT_MESSAGES), messages);
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
  return /* @__PURE__ */ jsxs7("div", { className: cn("space-y-3", className), "data-dt-id": id, children: [
    /* @__PURE__ */ jsx8(
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
    /* @__PURE__ */ jsx8("div", { className: "w-full overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ jsxs7("table", { className: "w-full text-sm", children: [
      caption && /* @__PURE__ */ jsx8("caption", { className: "sr-only", children: caption }),
      /* @__PURE__ */ jsx8("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ jsx8("tr", { children: columns.map((col) => {
        var _a2;
        return /* @__PURE__ */ jsx8(
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
      /* @__PURE__ */ jsx8("tbody", { className: "divide-y divide-border bg-surface-base", children: resolvedState !== "ready" ? /* @__PURE__ */ jsx8(
        StateRow,
        {
          state: resolvedState,
          colSpan: columns.length,
          message: resolvedState === "loading" ? loadingMessage != null ? loadingMessage : msgs.loading : resolvedState === "error" ? (_a = errorMessage != null ? errorMessage : table.error) != null ? _a : msgs.error : emptyMessage != null ? emptyMessage : msgs.empty
        }
      ) : table.rows.map((row, i) => /* @__PURE__ */ jsx8(
        BodyRow,
        {
          row,
          columns,
          onClick: onRowClick
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsx8("p", { className: "text-xs text-text-secondary", children: table.total === 0 ? "No results" : `Showing ${start}\u2013${end} of ${table.total}` }),
      /* @__PURE__ */ jsx8(
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
  const [selected, setSelected] = useState6(/* @__PURE__ */ new Set());
  const [expanded, setExpanded] = useState6(/* @__PURE__ */ new Set());
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
  return /* @__PURE__ */ jsxs7("div", { className: cn("space-y-2", className), children: [
    selectable && selected.size > 0 && /* @__PURE__ */ jsxs7("p", { className: "text-xs text-text-secondary", children: [
      selected.size,
      " of ",
      legacyAdvancedRows.length,
      " row",
      legacyAdvancedRows.length !== 1 ? "s" : "",
      " selected"
    ] }),
    /* @__PURE__ */ jsx8(
      "div",
      {
        className: cn(
          "w-full rounded-lg border border-border",
          stickyHeader && "overflow-auto max-h-80"
        ),
        children: /* @__PURE__ */ jsxs7("table", { className: "w-full text-sm", children: [
          caption && /* @__PURE__ */ jsx8("caption", { className: "sr-only", children: caption }),
          /* @__PURE__ */ jsx8(
            "thead",
            {
              className: cn(
                "bg-surface-sunken border-b border-border",
                stickyHeader && "sticky top-0 z-10"
              ),
              children: /* @__PURE__ */ jsxs7("tr", { children: [
                selectable && /* @__PURE__ */ jsx8("th", { scope: "col", className: "w-10 px-4 py-3", children: /* @__PURE__ */ jsx8(
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
                hasAnyExpand && /* @__PURE__ */ jsx8("th", { scope: "col", className: "w-10 px-4 py-3", "aria-label": "Expand" }),
                columns.map((col) => /* @__PURE__ */ jsx8(
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
          /* @__PURE__ */ jsx8("tbody", { className: "divide-y divide-border bg-surface-base", children: legacyAdvancedRows.length === 0 ? /* @__PURE__ */ jsx8("tr", { children: /* @__PURE__ */ jsx8(
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
            return /* @__PURE__ */ jsx8(
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
  return /* @__PURE__ */ jsxs7(Fragment, { children: [
    /* @__PURE__ */ jsxs7(
      "tr",
      {
        className: cn(
          "hover:bg-surface-overlay transition-colors",
          isSelected && "bg-primary-subtle"
        ),
        children: [
          selectable && /* @__PURE__ */ jsx8("td", { className: "w-10 px-4 py-3", children: /* @__PURE__ */ jsx8(
            "input",
            {
              type: "checkbox",
              "aria-label": `Select row ${rowIndex + 1}`,
              checked: isSelected,
              onChange: () => onToggleRow(rowIndex),
              className: "h-4 w-4 rounded border-border text-primary focus-visible:ring-2 focus-visible:ring-border-focus"
            }
          ) }),
          hasExpand && /* @__PURE__ */ jsx8("td", { className: "w-10 px-4 py-3", children: /* @__PURE__ */ jsx8(
            "button",
            {
              type: "button",
              "aria-label": isExpanded ? "Collapse row" : "Expand row",
              "aria-expanded": isExpanded,
              onClick: () => onToggleExpand(rowIndex),
              className: "text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: /* @__PURE__ */ jsx8(
                FontAwesomeIcon4,
                {
                  icon: isExpanded ? faChevronDown3 : faChevronRight,
                  className: "w-2.5 h-2.5",
                  "aria-hidden": "true"
                }
              )
            }
          ) }),
          !hasExpand && hasAnyExpand && /* @__PURE__ */ jsx8("td", { className: "w-10 px-4 py-3" }),
          columns.map((col) => {
            var _a;
            return /* @__PURE__ */ jsx8(
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
    hasExpand && isExpanded && /* @__PURE__ */ jsx8("tr", { className: "bg-surface-sunken", children: /* @__PURE__ */ jsx8(
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
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: cn(
        "rounded-xl border border-border bg-surface-raised shadow-sm overflow-hidden",
        className
      ),
      children: [
        (title || headerRight) && /* @__PURE__ */ jsxs7("div", { className: "flex items-start justify-between gap-3 px-6 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxs7("div", { children: [
            title && /* @__PURE__ */ jsx8("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
            subtitle && /* @__PURE__ */ jsx8("p", { className: "text-xs text-text-secondary mt-0.5", children: subtitle })
          ] }),
          headerRight && /* @__PURE__ */ jsx8("div", { className: "shrink-0", children: headerRight })
        ] }),
        toolbar && /* @__PURE__ */ jsx8("div", { className: "px-6 pt-4 pb-0", children: toolbar }),
        loading ? /* @__PURE__ */ jsx8("div", { className: "flex justify-center py-12", children: /* @__PURE__ */ jsx8("span", { className: "inline-block h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" }) }) : /* @__PURE__ */ jsx8("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs7("table", { className: "w-full text-sm", children: [
          caption && /* @__PURE__ */ jsx8("caption", { className: "sr-only", children: caption }),
          /* @__PURE__ */ jsx8("thead", { children: /* @__PURE__ */ jsx8("tr", { className: "border-b border-border bg-surface-sunken", children: columns.map((col) => /* @__PURE__ */ jsx8(
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
          /* @__PURE__ */ jsx8("tbody", { className: "divide-y divide-border bg-surface-base", children: rows.length === 0 ? /* @__PURE__ */ jsx8("tr", { children: /* @__PURE__ */ jsx8(
            "td",
            {
              colSpan: columns.length,
              className: "px-6 py-10 text-center text-sm text-text-secondary",
              children: emptyMessage
            }
          ) }) : rows.map((row) => /* @__PURE__ */ jsx8(
            "tr",
            {
              onClick: () => onRowClick == null ? void 0 : onRowClick(row),
              className: cn(
                "hover:bg-surface-overlay transition-colors",
                onRowClick && "cursor-pointer"
              ),
              children: columns.map((col) => {
                var _a;
                return /* @__PURE__ */ jsx8(
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
        !loading && /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between gap-4 px-6 py-4 border-t border-border flex-wrap", children: [
          /* @__PURE__ */ jsx8("p", { className: "text-xs text-text-secondary", children: total !== void 0 && rangeStart !== null && rangeEnd !== null ? `Showing ${rangeStart}\u2013${rangeEnd} of ${total}` : total !== void 0 ? `${total} result${total !== 1 ? "s" : ""}` : null }),
          /* @__PURE__ */ jsx8(
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

// modules/ui/Table/index.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function AdvancedDataTable(props) {
  return /* @__PURE__ */ jsx9(
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
  return /* @__PURE__ */ jsx9(
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

export {
  Table,
  Pagination,
  DataTable,
  AdvancedDataTable,
  ServerDataTable
};
