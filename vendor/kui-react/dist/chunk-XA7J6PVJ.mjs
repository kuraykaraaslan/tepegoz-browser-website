"use client";
import {
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/SkipLink.tsx
import { jsx } from "react/jsx-runtime";
function SkipLink({
  href = "#main-content",
  label = "Skip to main content",
  className
}) {
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(LiveRegion, { message, politeness });
}

// modules/ui/Breadcrumb.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function Breadcrumb({
  items,
  separator,
  maxItems,
  className
}) {
  const sep = separator != null ? separator : /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: faChevronRight, className: "w-2.5 h-2.5 text-text-disabled", "aria-hidden": "true" });
  let displayed = items;
  let truncated = false;
  if (maxItems && items.length > maxItems) {
    truncated = true;
    displayed = [items[0], { label: "\u2026", href: void 0 }, ...items.slice(-(maxItems - 1))];
  }
  return /* @__PURE__ */ jsx2("nav", { "aria-label": "Breadcrumb", className, children: /* @__PURE__ */ jsx2("ol", { className: "flex flex-wrap items-center gap-1 text-sm", children: displayed.map((item, i) => {
    const isLast = i === displayed.length - 1;
    const isEllipsis = item.label === "\u2026" && truncated;
    return /* @__PURE__ */ jsx2("li", { className: "flex items-center gap-1", children: !isLast && item.href ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx2(
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
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx2(
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

// modules/ui/Overlays/Drawer/index.tsx
import { useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// modules/ui/Overlays/shared/useFocusTrap.ts
import { useEffect, useCallback } from "react";
var FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
var layerStack = [];
function isTopLayer(ref) {
  return layerStack[layerStack.length - 1] === ref;
}
function useFocusTrap(ref, { active, onEscape, handleEscape = true }) {
  useEffect(() => {
    if (!active) return;
    layerStack.push(ref);
    return () => {
      const idx = layerStack.lastIndexOf(ref);
      if (idx !== -1) layerStack.splice(idx, 1);
    };
  }, [active, ref]);
  useEffect(() => {
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
  const handleKeyDown = useCallback(
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
  useEffect(() => {
    if (!active) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, handleKeyDown]);
}
function isFocusTrapTopLayer(ref) {
  return isTopLayer(ref);
}

// modules/ui/Overlays/shared/useScrollLock.ts
import { useEffect as useEffect2 } from "react";
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
  useEffect2(() => {
    if (!active) return;
    lock();
    return () => unlock();
  }, [active]);
}

// modules/ui/Overlays/shared/usePresence.ts
import { useEffect as useEffect3, useState } from "react";
var EXIT_MS = 250;
function usePresence(open) {
  const [state, setState] = useState(open ? "open" : "closed");
  useEffect3(() => {
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
import { useEffect as useEffect4, useState as useState2 } from "react";
function usePortal(target) {
  const [node, setNode] = useState2(null);
  useEffect4(() => {
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const panelRef = useRef(null);
  const { mounted, state } = usePresence(open);
  useFocusTrap(panelRef, { active: open, onEscape: onClose });
  useScrollLock(open);
  useRouteClose({ active: open, closeOnRouteChange, onClose });
  const portalNode = usePortal(portalTarget);
  if (!mounted) return null;
  const node = /* @__PURE__ */ jsxs2(
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
        /* @__PURE__ */ jsx3(
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
        /* @__PURE__ */ jsxs2(
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
              /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between gap-3 px-4 py-4 border-b border-border shrink-0", children: [
                /* @__PURE__ */ jsx3("h2", { className: "text-base font-semibold text-text-primary", children: title }),
                /* @__PURE__ */ jsx3(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close drawer",
                    className: "text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                    children: /* @__PURE__ */ jsx3(FontAwesomeIcon2, { icon: faXmark, className: "w-4 h-4", "aria-hidden": "true" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx3("div", { className: "flex-1 min-h-0 overflow-y-auto px-4 py-4", children }),
              footer && /* @__PURE__ */ jsx3("div", { className: "px-4 py-4 border-t border-border shrink-0", children: footer })
            ]
          }
        )
      ]
    }
  );
  if (!portalNode) return null;
  return createPortal(node, portalNode);
}

// modules/ui/EmptyState.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function EmptyState({
  icon,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center text-center py-16 px-6",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx4("div", { className: "h-12 w-12 rounded-full bg-surface-sunken flex items-center justify-center text-text-disabled text-2xl mb-4", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsx4("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
        description && /* @__PURE__ */ jsx4("p", { className: "mt-1 text-sm text-text-secondary max-w-xs", children: description }),
        action && /* @__PURE__ */ jsx4("div", { className: "mt-4", children: action })
      ]
    }
  );
}

// modules/ui/Overlays/Modal/index.tsx
import { useRef as useRef2 } from "react";
import { createPortal as createPortal2 } from "react-dom";
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faXmark as faXmark2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var sizeMap = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" };
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
  const panelRef = useRef2(null);
  const titleId = "modal-title";
  const descId = description ? "modal-desc" : void 0;
  const { mounted, state } = usePresence(open);
  useFocusTrap(panelRef, { active: open, onEscape: onClose });
  useScrollLock(open);
  useRouteClose({ active: open, closeOnRouteChange, onClose });
  const portalNode = usePortal(portalTarget);
  if (!mounted) return null;
  const sizeClass = sizeMap[size];
  const node = /* @__PURE__ */ jsxs4(
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
        /* @__PURE__ */ jsx5(
          "div",
          {
            className: "absolute inset-0 bg-black/50",
            onClick: closeOnBackdropClick ? onClose : void 0,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs4(
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
              /* @__PURE__ */ jsxs4("div", { className: "flex items-start justify-between gap-3 px-6 py-4 border-b border-border shrink-0", children: [
                /* @__PURE__ */ jsxs4("div", { children: [
                  /* @__PURE__ */ jsx5("h2", { id: titleId, className: "text-base font-semibold text-text-primary", children: title }),
                  description && /* @__PURE__ */ jsx5("p", { id: descId, className: "text-sm text-text-secondary mt-0.5", children: description })
                ] }),
                /* @__PURE__ */ jsx5(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close dialog",
                    className: "shrink-0 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                    children: /* @__PURE__ */ jsx5(FontAwesomeIcon3, { icon: faXmark2, className: "w-4 h-4", "aria-hidden": "true" })
                  }
                )
              ] }),
              children && /* @__PURE__ */ jsx5("div", { className: cn("px-6 py-4 flex-1", scrollable && "overflow-y-auto"), children }),
              footer && /* @__PURE__ */ jsx5("div", { className: "px-6 py-4 border-t border-border flex justify-end gap-2 shrink-0", children: footer })
            ]
          }
        )
      ]
    }
  );
  if (!portalNode) return null;
  return createPortal2(node, portalNode);
}

// modules/ui/MultiSelect.tsx
import { useEffect as useEffect7, useMemo as useMemo3, useRef as useRef5, useState as useState5 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faCheck, faXmark as faXmark3, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// modules/ui/ComboBox/hooks/useFilter.ts
import { useMemo } from "react";
function filterOptions(options, query) {
  const q = query.trim().toLowerCase();
  if (!q) return options;
  return options.filter((opt) => opt.label.toLowerCase().includes(q) || (opt.description ? opt.description.toLowerCase().includes(q) : false));
}
function useFilter(options, query) {
  return useMemo(() => filterOptions(options, query), [options, query]);
}

// modules/ui/ComboBox/hooks/useAsync.ts
import { useCallback as useCallback2, useEffect as useEffect5, useMemo as useMemo2, useRef as useRef3, useState as useState3 } from "react";
var TTL_MS = 5 * 60 * 1e3;
function useAsync(enabled, query, onSearch, debounceMs = 300) {
  const [results, setResults] = useState3(null);
  const [loading, setLoading] = useState3(false);
  const cacheRef = useRef3(/* @__PURE__ */ new Map());
  const abortRef = useRef3(null);
  const debounceRef = useRef3(null);
  const cacheKey = query.trim().toLowerCase();
  useEffect5(() => {
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
  useEffect5(() => {
    if (!enabled) {
      setResults(null);
      setLoading(false);
    }
  }, [enabled]);
  const appendResults = useCallback2((next) => {
    setResults((prev) => {
      const merged = prev ? [...prev, ...next] : next;
      cacheRef.current.set(cacheKey, { ts: Date.now(), data: merged });
      return merged;
    });
  }, [cacheKey]);
  return useMemo2(() => ({ results, loading, appendResults }), [results, loading, appendResults]);
}

// modules/ui/ComboBox/hooks/useLoadMore.ts
import { useEffect as useEffect6, useRef as useRef4, useState as useState4 } from "react";
function useLoadMore(open, sentinelRef, onLoadMore, onAppend) {
  const [loadingMore, setLoadingMore] = useState4(false);
  const inFlightRef = useRef4(false);
  useEffect6(() => {
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

// modules/ui/MultiSelect.tsx
import { Fragment as Fragment2, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
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
  const [internal, setInternal] = useState5(value != null ? value : []);
  const [open, setOpen] = useState5(false);
  const [search, setSearch] = useState5("");
  const containerRef = useRef5(null);
  const searchRef = useRef5(null);
  const sentinelRef = useRef5(null);
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
  useEffect7(() => {
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
  const optionsById = useMemo3(() => {
    const m = /* @__PURE__ */ new Map();
    for (const o of options) m.set(o.value, o);
    for (const o of sourceOptions) if (!m.has(o.value)) m.set(o.value, o);
    return m;
  }, [options, sourceOptions]);
  return /* @__PURE__ */ jsxs5("div", { ref: containerRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsx6("label", { id: `${id}-label`, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ jsxs5("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs5(
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
            selected.length === 0 ? /* @__PURE__ */ jsx6("span", { className: "text-text-disabled", children: placeholder }) : selected.map((v) => {
              var _a, _b;
              const opt = optionsById.get(v);
              return /* @__PURE__ */ jsxs5(
                "span",
                {
                  className: "inline-flex items-center gap-1 rounded-full bg-primary-subtle text-primary text-xs font-medium px-2 py-0.5",
                  children: [
                    (opt == null ? void 0 : opt.icon) && /* @__PURE__ */ jsx6("span", { className: "shrink-0", children: opt.icon }),
                    (_a = opt == null ? void 0 : opt.label) != null ? _a : v,
                    /* @__PURE__ */ jsx6(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${(_b = opt == null ? void 0 : opt.label) != null ? _b : v}`,
                        onClick: (e) => remove(v, e),
                        className: "hover:opacity-70 focus-visible:outline-none",
                        children: /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faXmark3, className: "w-2.5 h-2.5" })
                      }
                    )
                  ]
                },
                v
              );
            }),
            /* @__PURE__ */ jsx6(
              FontAwesomeIcon4,
              {
                icon: open ? faChevronUp : faChevronDown,
                className: "ml-auto w-3 h-3 text-text-disabled",
                "aria-hidden": "true"
              }
            )
          ]
        }
      ),
      open && /* @__PURE__ */ jsxs5("div", { className: "absolute z-20 w-full rounded-md border border-border bg-surface-raised shadow-lg overflow-hidden top-full left-0 mt-1", children: [
        (searchable || onSearch) && /* @__PURE__ */ jsx6("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ jsxs5("div", { className: "relative", children: [
          /* @__PURE__ */ jsx6(
            FontAwesomeIcon4,
            {
              icon: faMagnifyingGlass,
              "aria-hidden": "true",
              className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-text-disabled"
            }
          ),
          /* @__PURE__ */ jsx6(
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
        /* @__PURE__ */ jsx6(
          "ul",
          {
            id: listboxId,
            role: "listbox",
            "aria-labelledby": `${id}-label`,
            "aria-multiselectable": "true",
            "data-combobox-list": true,
            className: "py-1 max-h-48 overflow-y-auto",
            children: loading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsx6("li", { className: "px-3 py-2", "aria-hidden": "true", children: /* @__PURE__ */ jsx6("div", { className: "h-3 w-full animate-pulse rounded bg-surface-overlay" }) }, `sk-${i}`)) : filtered.length === 0 ? /* @__PURE__ */ jsx6("li", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: "No results found." }) : /* @__PURE__ */ jsxs5(Fragment2, { children: [
              filtered.map((opt) => {
                const checked = selected.includes(opt.value);
                return /* @__PURE__ */ jsxs5(
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
                      /* @__PURE__ */ jsx6(
                        "span",
                        {
                          "aria-hidden": "true",
                          className: cn(
                            "h-4 w-4 rounded border-2 flex items-center justify-center shrink-0 text-[10px]",
                            checked ? "bg-primary border-primary text-primary-fg" : "border-border bg-surface-base"
                          ),
                          children: checked && /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faCheck, className: "w-2.5 h-2.5" })
                        }
                      ),
                      opt.icon && /* @__PURE__ */ jsx6("span", { className: "shrink-0", "aria-hidden": "true", children: opt.icon }),
                      opt.label
                    ]
                  },
                  opt.value
                );
              }),
              onLoadMore && /* @__PURE__ */ jsx6("li", { ref: sentinelRef, "aria-hidden": "true", "data-combobox-sentinel": true, className: "h-1" }),
              loadingMore && /* @__PURE__ */ jsx6("li", { className: "px-3 py-2 text-xs text-text-secondary", "aria-live": "polite", children: "Loading more\u2026" })
            ] })
          }
        )
      ] })
    ] }),
    hint && !error && /* @__PURE__ */ jsx6("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ jsx6("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/ui/Skeleton.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var base = "animate-pulse bg-surface-sunken";
function SkeletonLine({ width = "w-full", className }) {
  return /* @__PURE__ */ jsx7("div", { className: cn(base, "h-3 rounded", width, className) });
}
function SkeletonAvatar({ size = "md", className }) {
  const s = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" }[size];
  return /* @__PURE__ */ jsx7("div", { className: cn(base, "rounded-full shrink-0", s, className) });
}
function SkeletonText({ lines = 3, className }) {
  return /* @__PURE__ */ jsx7("div", { className: cn("space-y-2", className), "aria-busy": "true", "aria-label": "Loading content", children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx7(SkeletonLine, { width: i === lines - 1 ? "w-4/5" : "w-full" }, i)) });
}
function SkeletonCard({ className }) {
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: cn("bg-surface-raised border border-border rounded-xl p-6 space-y-4", className),
      "aria-busy": "true",
      "aria-label": "Loading content",
      children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx7(SkeletonAvatar, {}),
          /* @__PURE__ */ jsxs6("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsx7(SkeletonLine, { width: "w-2/3" }),
            /* @__PURE__ */ jsx7(SkeletonLine, { width: "w-1/2" })
          ] })
        ] }),
        /* @__PURE__ */ jsx7(SkeletonText, { lines: 3 }),
        /* @__PURE__ */ jsxs6("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx7("div", { className: cn(base, "h-6 w-16 rounded") }),
          /* @__PURE__ */ jsx7("div", { className: cn(base, "h-6 w-20 rounded") })
        ] })
      ]
    }
  );
}
function SkeletonTableRow({ cols = 4, className }) {
  const widths = ["w-28", "w-40", "w-20", "w-16"];
  return /* @__PURE__ */ jsx7("tr", { className: cn("border-b border-border", className), children: Array.from({ length: cols }).map((_, i) => {
    var _a;
    return /* @__PURE__ */ jsx7("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx7("div", { className: cn(base, "h-4 rounded", (_a = widths[i]) != null ? _a : "w-24") }) }, i);
  }) });
}

// modules/ui/Stepper.tsx
import { FontAwesomeIcon as FontAwesomeIcon5 } from "@fortawesome/react-fontawesome";
import { faCheck as faCheck2, faXmark as faXmark4 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
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
  if (state === "complete") return /* @__PURE__ */ jsx8(FontAwesomeIcon5, { icon: faCheck2, className: "w-3.5 h-3.5", "aria-hidden": "true" });
  if (state === "error") return /* @__PURE__ */ jsx8(FontAwesomeIcon5, { icon: faXmark4, className: "w-3.5 h-3.5", "aria-hidden": "true" });
  return /* @__PURE__ */ jsx8("span", { children: index + 1 });
}
function Stepper({
  steps,
  orientation = "horizontal",
  className
}) {
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx8("ol", { className: cn("flex flex-col gap-0", className), children: steps.map((step, i) => {
      var _a;
      const state = (_a = step.state) != null ? _a : "pending";
      const s = stateStyles[state];
      const isLast = i === steps.length - 1;
      return /* @__PURE__ */ jsxs7("li", { className: "flex gap-3 items-start", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center shrink-0", children: [
          /* @__PURE__ */ jsx8(
            "div",
            {
              className: cn(
                "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0",
                s.circle
              ),
              "aria-label": `Step ${i + 1}: ${step.label} \u2014 ${state}`,
              children: /* @__PURE__ */ jsx8(StepIcon, { state, index: i })
            }
          ),
          !isLast && /* @__PURE__ */ jsx8("div", { className: cn("w-0.5 flex-1 min-h-[2rem] mt-1", s.line), "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: cn("pb-6", isLast && "pb-0"), children: [
          /* @__PURE__ */ jsx8("p", { className: cn("text-sm", s.text), children: step.label }),
          step.description && /* @__PURE__ */ jsx8("p", { className: "text-xs text-text-secondary mt-0.5", children: step.description })
        ] })
      ] }, i);
    }) });
  }
  return /* @__PURE__ */ jsx8("ol", { className: cn("flex items-center", className), children: steps.map((step, i) => {
    var _a, _b;
    const state = (_a = step.state) != null ? _a : "pending";
    const s = stateStyles[state];
    const isLast = i === steps.length - 1;
    return /* @__PURE__ */ jsxs7("li", { className: cn("flex items-center", !isLast && "flex-1"), children: [
      /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center gap-1 shrink-0", children: [
        /* @__PURE__ */ jsx8(
          "div",
          {
            className: cn(
              "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold",
              s.circle
            ),
            "aria-label": `Step ${i + 1}: ${step.label} \u2014 ${state}`,
            children: /* @__PURE__ */ jsx8(StepIcon, { state, index: i })
          }
        ),
        /* @__PURE__ */ jsxs7("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx8("p", { className: cn("text-xs whitespace-nowrap", s.text), children: step.label }),
          step.description && /* @__PURE__ */ jsx8("p", { className: "text-xs text-text-secondary", children: step.description })
        ] })
      ] }),
      !isLast && /* @__PURE__ */ jsx8(
        "div",
        {
          className: cn("h-0.5 flex-1 mx-2 mt-[-1.25rem]", stateStyles[(_b = steps[i].state) != null ? _b : "pending"].line),
          "aria-hidden": "true"
        }
      )
    ] }, i);
  }) });
}

// modules/ui/Toast/hooks/useToastStore.ts
import { create } from "zustand";
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
var useToastStore = create((set) => ({
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

// modules/ui/Toast/index.tsx
import { useEffect as useEffect9, useMemo as useMemo4 } from "react";

// modules/ui/Toast/parts/ToastItem.tsx
import { useCallback as useCallback3, useEffect as useEffect8, useRef as useRef6, useState as useState6 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon6 } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faCircleInfo,
  faSpinner,
  faXmark as faXmark5
} from "@fortawesome/free-solid-svg-icons";

// modules/ui/Toast/parts/ProgressBar.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function ProgressBar({ progress, colorClass }) {
  return /* @__PURE__ */ jsx9("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-black/5", children: /* @__PURE__ */ jsx9(
    "div",
    {
      className: cn("h-full rounded-full transition-none", colorClass),
      style: { width: `${progress}%`, opacity: 0.5 },
      "aria-hidden": "true"
    }
  ) });
}

// modules/ui/Toast/parts/ToastItem.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var variantMap = {
  success: {
    container: "bg-success-subtle border-success",
    iconColor: "text-success-fg",
    progressColor: "bg-success",
    defaultIcon: /* @__PURE__ */ jsx10(FontAwesomeIcon6, { icon: faCircleCheck, className: "size-4 shrink-0" })
  },
  warning: {
    container: "bg-warning-subtle border-warning",
    iconColor: "text-warning",
    progressColor: "bg-warning",
    defaultIcon: /* @__PURE__ */ jsx10(FontAwesomeIcon6, { icon: faTriangleExclamation, className: "size-4 shrink-0" })
  },
  error: {
    container: "bg-error-subtle border-error",
    iconColor: "text-error",
    progressColor: "bg-error",
    defaultIcon: /* @__PURE__ */ jsx10(FontAwesomeIcon6, { icon: faCircleXmark, className: "size-4 shrink-0" })
  },
  info: {
    container: "bg-info-subtle border-info",
    iconColor: "text-info",
    progressColor: "bg-info",
    defaultIcon: /* @__PURE__ */ jsx10(FontAwesomeIcon6, { icon: faCircleInfo, className: "size-4 shrink-0" })
  },
  loading: {
    container: "bg-surface-raised border-border",
    iconColor: "text-text-secondary",
    progressColor: "bg-primary",
    defaultIcon: /* @__PURE__ */ jsx10(FontAwesomeIcon6, { icon: faSpinner, className: "size-4 shrink-0 animate-spin" })
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
  const [progress, setProgress] = useState6(100);
  const [paused, setPaused] = useState6(false);
  const [show, setShow] = useState6(reducedMotion);
  const [exiting, setExiting] = useState6(false);
  const remainingRef = useRef6(duration != null ? duration : 0);
  const lastTickRef = useRef6(0);
  useEffect8(() => {
    if (reducedMotion) return;
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, [reducedMotion]);
  const dismiss = useCallback3(() => {
    setExiting(true);
    setTimeout(onRemove, reducedMotion ? 0 : EXIT_MS2);
  }, [onRemove, reducedMotion]);
  useEffect8(() => {
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
  useEffect8(() => {
    if (!hasDuration) return;
    const handler = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [hasDuration]);
  useEffect8(() => {
    remainingRef.current = duration != null ? duration : 0;
    setProgress(100);
    setExiting(false);
  }, [duration]);
  const { container, iconColor, progressColor, defaultIcon } = variantMap[item.variant];
  const icon = (_a = item.icon) != null ? _a : defaultIcon;
  const showClose = item.closeButton !== false;
  const { role, live } = ariaFor(item.variant);
  return /* @__PURE__ */ jsxs8(
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
        /* @__PURE__ */ jsxs8("div", { className: "flex items-start gap-3 px-4 pt-4 pb-3", children: [
          /* @__PURE__ */ jsx10("span", { className: cn("mt-0.5", iconColor), "aria-hidden": "true", children: icon }),
          /* @__PURE__ */ jsxs8("div", { className: "flex-1 min-w-0", children: [
            item.title && /* @__PURE__ */ jsx10("p", { className: "text-sm font-semibold text-text-primary leading-snug", children: item.title }),
            /* @__PURE__ */ jsx10("p", { className: cn("text-sm text-text-secondary leading-snug", item.title && "mt-0.5"), children: item.message }),
            item.actions && item.actions.length > 0 && /* @__PURE__ */ jsx10("div", { className: "flex flex-wrap gap-x-3 gap-y-1 mt-2.5", children: item.actions.map((action, i) => /* @__PURE__ */ jsx10(
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
          showClose && /* @__PURE__ */ jsx10(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              onClick: dismiss,
              className: cn(
                "shrink-0 mt-0.5 rounded text-text-secondary hover:text-text-primary transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: /* @__PURE__ */ jsx10(FontAwesomeIcon6, { icon: faXmark5, className: "size-3.5" })
            }
          )
        ] }),
        hasDuration && /* @__PURE__ */ jsx10(ProgressBar, { progress, colorClass: progressColor })
      ]
    }
  );
}

// modules/ui/Toast/parts/Region.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx11(
    "div",
    {
      className: cn(
        "fixed z-[90] flex flex-col pointer-events-none",
        positionMap[position],
        className
      ),
      style: { gap: `${gap * 0.25}rem` },
      children: ordered.map((t) => /* @__PURE__ */ jsx11(
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
import { Fragment as Fragment3, jsx as jsx12 } from "react/jsx-runtime";
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
  useEffect9(() => {
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
  return /* @__PURE__ */ jsx12(Fragment3, { children: Array.from(buckets.entries()).map(([pos, items]) => /* @__PURE__ */ jsx12(
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
  return /* @__PURE__ */ jsx12(
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
  useEffect9(() => {
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
import { useRef as useRef7, useState as useState7 } from "react";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
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
  const [visible, setVisible] = useState7(false);
  const timer = useRef7(null);
  const id = useRef7(`tooltip-${Math.random().toString(36).slice(2)}`).current;
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
  return /* @__PURE__ */ jsxs9(
    "span",
    {
      className: cn("relative inline-flex items-center", className),
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        /* @__PURE__ */ jsx13("span", { "aria-describedby": id, children }),
        /* @__PURE__ */ jsxs9(
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
              arrow && /* @__PURE__ */ jsx13(
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

export {
  SkipLink,
  LiveRegion,
  Announcer,
  Breadcrumb,
  useFilter,
  useAsync,
  useLoadMore,
  useFocusTrap,
  isFocusTrapTopLayer,
  Drawer,
  EmptyState,
  Modal,
  MultiSelect,
  SkeletonLine,
  SkeletonAvatar,
  SkeletonText,
  SkeletonCard,
  SkeletonTableRow,
  Stepper,
  getEffectiveDuration,
  useToastStore,
  toast,
  ToastProvider,
  ToastRegion,
  Toast,
  Tooltip
};
