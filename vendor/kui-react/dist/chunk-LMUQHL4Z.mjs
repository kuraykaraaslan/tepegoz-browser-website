"use client";
import {
  Breadcrumb,
  Drawer,
  EmptyState,
  Modal,
  MultiSelect,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonLine,
  SkeletonTableRow,
  SkeletonText,
  Stepper,
  ToastProvider,
  Tooltip,
  toast,
  useFocusTrap
} from "./chunk-XA7J6PVJ.mjs";
import {
  isBrowser
} from "./chunk-45I3EDB2.mjs";
import {
  AlertBanner,
  Avatar,
  Badge,
  DropdownMenu,
  Select,
  TagInput
} from "./chunk-ZLYBRYWQ.mjs";
import {
  SearchBar,
  Spinner
} from "./chunk-5E2HXWFI.mjs";
import {
  DateRangePicker
} from "./chunk-KTEWZKNE.mjs";
import {
  Button
} from "./chunk-MTT5TKAJ.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/app/AppShell.tsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { jsx, jsxs } from "react/jsx-runtime";
function AppShell(_a) {
  var _b = _a, {
    logo,
    compactLogo,
    sidebarCollapsed = false,
    mobileSidebarTitle = "Navigation",
    sidebar,
    topbar,
    asideClassName,
    headerClassName,
    mainClassName,
    children,
    className
  } = _b, rest = __objRest(_b, [
    "logo",
    "compactLogo",
    "sidebarCollapsed",
    "mobileSidebarTitle",
    "sidebar",
    "topbar",
    "asideClassName",
    "headerClassName",
    "mainClassName",
    "children",
    "className"
  ]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const logoContent = sidebarCollapsed && compactLogo ? compactLogo : logo != null ? logo : compactLogo;
  return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ className: cn("flex h-screen overflow-hidden bg-surface-base", className) }, rest), { children: [
    sidebar && /* @__PURE__ */ jsxs("aside", { className: cn("relative hidden lg:flex flex-col h-full min-h-0 shrink-0 border-r border-border bg-surface-raised", asideClassName), children: [
      logoContent && /* @__PURE__ */ jsx("div", { className: cn(
        "absolute inset-x-0 top-0 z-10 flex items-center h-14 border-b border-border bg-surface-raised overflow-hidden",
        sidebarCollapsed && compactLogo ? "justify-center px-2" : "px-4"
      ), children: logoContent }),
      /* @__PURE__ */ jsx("div", { className: cn("flex min-h-0 flex-1", logoContent && "pt-14"), children: sidebar })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col min-w-0 min-h-0", children: [
      topbar && /* @__PURE__ */ jsxs("header", { className: cn("sticky top-0 z-30 flex items-center h-14 px-4 border-b border-border bg-surface-raised/90 backdrop-blur shrink-0", headerClassName), children: [
        sidebar && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setMobileSidebarOpen(true),
            "aria-label": "Open sidebar",
            className: "inline-flex lg:hidden items-center justify-center w-9 h-9 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBars, className: "w-4 h-4", "aria-hidden": "true" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex min-w-0 flex-1", children: topbar })
      ] }),
      /* @__PURE__ */ jsx("main", { id: "main-content", className: cn("flex-1 overflow-y-auto p-4 sm:p-6", mainClassName), children })
    ] }),
    sidebar && /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(
      Drawer,
      {
        open: mobileSidebarOpen,
        onClose: () => setMobileSidebarOpen(false),
        title: mobileSidebarTitle,
        side: "left",
        className: "w-72",
        children: /* @__PURE__ */ jsx("div", { className: "-mx-4 -my-4 h-[calc(100%+2rem)] flex flex-col", children: sidebar })
      }
    ) })
  ] }));
}

// modules/app/AppSidebar.tsx
import { useEffect, useState as useState2 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function AppSidebar({
  navGroups,
  navItems,
  activeId,
  onSelect,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  footer,
  searchable = true,
  className
}) {
  const [internalCollapsed, setInternalCollapsed] = useState2(defaultCollapsed);
  const [searchQuery, setSearchQuery] = useState2("");
  const [expandedGroups, setExpandedGroups] = useState2(() => {
    var _a;
    const resolvedGroups = navGroups != null ? navGroups : navItems ? [{ items: navItems }] : [];
    const initial = /* @__PURE__ */ new Set();
    for (const g of resolvedGroups) {
      if (!g.collapsible) continue;
      const key = (_a = g.label) != null ? _a : "";
      const containsActive = g.items.some((i) => i.id === activeId);
      if (containsActive || g.defaultExpanded) initial.add(key);
    }
    return initial;
  });
  const [isDesktop, setIsDesktop] = useState2(() => {
    if (!isBrowser) {
      return true;
    }
    return window.matchMedia("(min-width: 1024px)").matches;
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  const isCollapsed = collapsed != null ? collapsed : internalCollapsed;
  const effectiveCollapsed = isDesktop ? isCollapsed : false;
  const q = searchQuery.trim().toLowerCase();
  const rawGroups = navGroups != null ? navGroups : navItems ? [{ items: navItems }] : [];
  const groups = q ? rawGroups.map((g) => __spreadProps(__spreadValues({}, g), { items: g.items.filter((i) => i.label.toLowerCase().includes(q)) })).filter((g) => g.items.length > 0) : rawGroups;
  const footerContent = typeof footer === "function" ? footer({ collapsed: effectiveCollapsed }) : footer;
  const setCollapsed = (next) => {
    if (collapsed === void 0) {
      setInternalCollapsed(next);
    }
    onCollapsedChange == null ? void 0 : onCollapsedChange(next);
  };
  function toggleGroup(key) {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }
  function isGroupExpanded(group) {
    var _a;
    if (!group.collapsible || effectiveCollapsed) return true;
    return expandedGroups.has((_a = group.label) != null ? _a : "");
  }
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      "data-collapsed": effectiveCollapsed ? "true" : "false",
      className: cn(
        "flex flex-col flex-1 min-h-0 transition-all duration-200",
        effectiveCollapsed ? "w-full lg:w-14" : "w-full lg:w-56",
        className
      ),
      children: [
        /* @__PURE__ */ jsx2("div", { className: cn("hidden lg:flex items-center px-2 py-2 border-b border-border shrink-0", effectiveCollapsed ? "justify-center" : "justify-end"), children: /* @__PURE__ */ jsx2(
          "button",
          {
            type: "button",
            onClick: () => setCollapsed(!isCollapsed),
            "aria-label": isCollapsed ? "Expand sidebar" : "Collapse sidebar",
            className: "p-1.5 rounded text-text-secondary hover:text-text-primary hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            children: /* @__PURE__ */ jsx2(FontAwesomeIcon2, { icon: faChevronLeft, className: cn("w-4 h-4 transition-transform", isCollapsed ? "rotate-180" : ""), "aria-hidden": "true" })
          }
        ) }),
        searchable && !effectiveCollapsed && /* @__PURE__ */ jsx2("div", { className: "px-3 py-2 border-b border-border shrink-0", children: /* @__PURE__ */ jsxs2("div", { className: "relative", children: [
          /* @__PURE__ */ jsx2(FontAwesomeIcon2, { icon: faMagnifyingGlass, className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-text-disabled", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx2(
            "input",
            {
              type: "search",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              onKeyDown: (e) => e.key === "Escape" && setSearchQuery(""),
              placeholder: "Search\u2026",
              autoComplete: "off",
              "aria-label": "Search navigation",
              className: "w-full rounded-md border border-border bg-surface-base pl-7 pr-3 py-1.5 text-xs text-text-primary placeholder:text-text-disabled focus:outline-none focus:ring-2 focus:ring-border-focus"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx2("nav", { className: "flex-1 min-h-0 overflow-y-auto px-2 py-3 space-y-4 sidebar-scrollbar-hover", "aria-label": "Sidebar navigation", children: groups.map((group, gi) => {
          var _a;
          const groupKey = (_a = group.label) != null ? _a : String(gi);
          const expanded = isGroupExpanded(group);
          const hasActive = group.items.some((i) => i.id === activeId);
          return /* @__PURE__ */ jsxs2("div", { children: [
            group.label && !effectiveCollapsed && (group.collapsible ? /* @__PURE__ */ jsxs2(
              "button",
              {
                type: "button",
                onClick: () => toggleGroup(groupKey),
                "aria-expanded": expanded,
                className: cn(
                  "w-full flex items-center justify-between px-3 py-1 rounded-md mb-1 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                  hasActive ? "text-text-primary" : "text-text-disabled hover:text-text-secondary"
                ),
                children: [
                  /* @__PURE__ */ jsx2("span", { className: "text-[10px] font-semibold uppercase tracking-widest", children: group.label }),
                  /* @__PURE__ */ jsx2(
                    FontAwesomeIcon2,
                    {
                      icon: faChevronDown,
                      className: cn("w-3 h-3 transition-transform duration-200", expanded ? "rotate-0" : "-rotate-90"),
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsx2("p", { className: "text-[10px] font-semibold uppercase tracking-widest text-text-disabled px-3 mb-1", children: group.label })),
            expanded && /* @__PURE__ */ jsx2("div", { className: "space-y-0.5", children: group.items.map((item) => {
              const itemClassName = cn(
                "w-full flex items-center gap-2.5 rounded-lg text-sm transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                effectiveCollapsed ? "justify-center px-2 py-2" : "px-3 py-2 text-left",
                item.id === activeId ? "bg-primary-subtle text-primary font-medium" : "text-text-secondary hover:text-text-primary hover:bg-surface-overlay"
              );
              const itemContent = /* @__PURE__ */ jsxs2(Fragment, { children: [
                item.icon && /* @__PURE__ */ jsx2("span", { "aria-hidden": "true", className: "shrink-0 w-5 text-center text-[15px] leading-none", children: item.icon }),
                !effectiveCollapsed && /* @__PURE__ */ jsx2("span", { className: "flex-1 truncate", children: item.label }),
                !effectiveCollapsed && item.badge != null && item.badge > 0 && /* @__PURE__ */ jsx2(Badge, { variant: "primary", size: "sm", children: item.badge })
              ] });
              return item.href ? /* @__PURE__ */ jsx2(
                "a",
                {
                  href: item.href,
                  title: effectiveCollapsed ? item.label : void 0,
                  className: itemClassName,
                  children: itemContent
                },
                item.id
              ) : /* @__PURE__ */ jsx2(
                "button",
                {
                  type: "button",
                  "aria-current": item.id === activeId ? "page" : void 0,
                  title: effectiveCollapsed ? item.label : void 0,
                  onClick: () => onSelect == null ? void 0 : onSelect(item.id),
                  className: itemClassName,
                  children: itemContent
                },
                item.id
              );
            }) })
          ] }, groupKey);
        }) }),
        footerContent != null && /* @__PURE__ */ jsx2("div", { className: cn("border-t border-border shrink-0", effectiveCollapsed ? "flex justify-center px-2 py-3" : ""), children: footerContent })
      ]
    }
  );
}

// modules/app/AppTopBar.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function AppTopBar(_a) {
  var _b = _a, {
    logo,
    children,
    className
  } = _b, rest = __objRest(_b, [
    "logo",
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsxs3("div", __spreadProps(__spreadValues({ className: cn("flex items-center gap-3 flex-1", className) }, rest), { children: [
    logo && /* @__PURE__ */ jsx3("div", { className: "shrink-0", children: logo }),
    children
  ] }));
}

// modules/app/AppDrawer.tsx
import { useState as useState3 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faBars as faBars2 } from "@fortawesome/free-solid-svg-icons";
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function AppDrawer({
  navGroups,
  navItems,
  activeId,
  onSelect,
  header,
  footer,
  searchable = true,
  trigger,
  title = "Navigation",
  side = "left"
}) {
  const [open, setOpen] = useState3(false);
  const [query, setQuery] = useState3("");
  const groups = navGroups != null ? navGroups : navItems ? [{ items: navItems }] : [];
  const filtered = query.trim() ? groups.map((g) => __spreadProps(__spreadValues({}, g), {
    items: g.items.filter(
      (i) => i.label.toLowerCase().includes(query.toLowerCase())
    )
  })).filter((g) => g.items.length > 0) : groups;
  function handleSelect(id) {
    onSelect == null ? void 0 : onSelect(id);
    setOpen(false);
    setQuery("");
  }
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsx4("div", { role: "none", onClick: () => setOpen(true), children: trigger != null ? trigger : /* @__PURE__ */ jsx4(Button, { variant: "outline", size: "sm", iconLeft: /* @__PURE__ */ jsx4(FontAwesomeIcon3, { icon: faBars2, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: "Open Navigation" }) }),
    /* @__PURE__ */ jsxs4(
      Drawer,
      {
        open,
        onClose: () => {
          setOpen(false);
          setQuery("");
        },
        title,
        side,
        children: [
          header && /* @__PURE__ */ jsx4("div", { className: "mb-4", children: header }),
          searchable && /* @__PURE__ */ jsx4(
            SearchBar,
            {
              id: "app-drawer-search",
              placeholder: "Search navigation\u2026",
              value: query,
              onChange: setQuery,
              className: "mb-4"
            }
          ),
          /* @__PURE__ */ jsxs4("div", { className: "space-y-4", children: [
            filtered.map((group, gi) => {
              var _a;
              return /* @__PURE__ */ jsxs4("div", { children: [
                group.label && /* @__PURE__ */ jsx4("p", { className: "text-xs font-semibold text-text-disabled uppercase tracking-wider mb-1 px-1", children: group.label }),
                /* @__PURE__ */ jsx4("div", { className: "space-y-0.5", children: group.items.map((item) => /* @__PURE__ */ jsxs4(
                  "button",
                  {
                    type: "button",
                    "aria-current": item.id === activeId ? "page" : void 0,
                    onClick: () => handleSelect(item.id),
                    className: cn(
                      "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-sm",
                      "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                      item.id === activeId ? "bg-primary-subtle text-primary font-semibold" : "text-text-primary hover:bg-surface-overlay"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs4("span", { className: "flex items-center gap-2", children: [
                        item.icon && /* @__PURE__ */ jsx4("span", { "aria-hidden": "true", children: item.icon }),
                        item.label
                      ] }),
                      item.badge != null && item.badge > 0 && /* @__PURE__ */ jsx4(Badge, { variant: "neutral", size: "sm", children: item.badge })
                    ]
                  },
                  item.id
                )) })
              ] }, (_a = group.label) != null ? _a : gi);
            }),
            filtered.length === 0 && /* @__PURE__ */ jsxs4("p", { className: "text-sm text-text-secondary text-center py-4", children: [
              'No results for "',
              query,
              '"'
            ] })
          ] }),
          footer && /* @__PURE__ */ jsx4("div", { className: "mt-4 pt-4 border-t border-border", children: footer })
        ]
      }
    )
  ] });
}

// modules/app/AppFooter.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var STATUS_CONFIG = {
  operational: { variant: "success", label: "Operational", dot: true },
  degraded: { variant: "warning", label: "Degraded", dot: true },
  outage: { variant: "error", label: "Outage", dot: true }
};
function AppFooter({
  logo,
  nav,
  social,
  version,
  status,
  copyright,
  className
}) {
  const statusCfg = status ? STATUS_CONFIG[status] : null;
  return /* @__PURE__ */ jsxs5("footer", { className: cn("w-full border border-border rounded-xl bg-surface-raised overflow-hidden", className), children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-b border-border", children: [
      /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2", children: [
        logo,
        version && /* @__PURE__ */ jsxs5(Badge, { variant: "neutral", size: "md", children: [
          "v",
          version
        ] })
      ] }),
      nav && /* @__PURE__ */ jsx5("nav", { "aria-label": "Footer navigation", className: "flex items-center gap-1", children: nav }),
      statusCfg && /* @__PURE__ */ jsx5("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx5(Badge, { variant: statusCfg.variant, size: "md", dot: statusCfg.dot, children: statusCfg.label }) })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "flex flex-wrap items-center justify-between gap-4 px-5 py-3 bg-surface-base", children: [
      copyright && /* @__PURE__ */ jsx5("p", { className: "text-xs text-text-secondary", children: copyright }),
      social && /* @__PURE__ */ jsx5("div", { className: "flex items-center gap-1", children: social })
    ] })
  ] });
}

// modules/app/AppBreadcrumbs.tsx
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import { faHouse, faFile, faFolder, faChevronRight, faChevronDown as faChevronDown2 } from "@fortawesome/free-solid-svg-icons";
import { Fragment as Fragment3, jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function AppBreadcrumbs({
  items = [],
  title,
  description,
  badge,
  className
}) {
  const dropdownItems = items.map((item, i) => ({
    label: item.label,
    icon: i === 0 ? /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faHouse, className: "w-3 h-3" }) : i === items.length - 1 ? /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faFile, className: "w-3 h-3" }) : /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faFolder, className: "w-3 h-3" })
  }));
  return /* @__PURE__ */ jsxs6("div", { className: cn("w-full space-y-4 p-4 border border-border rounded-xl bg-surface-raised", className), children: [
    (title || badge || description) && /* @__PURE__ */ jsxs6("div", { children: [
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2 flex-wrap", children: [
        title && /* @__PURE__ */ jsx6("h1", { className: "text-2xl font-bold text-text-primary leading-tight", children: title }),
        badge
      ] }),
      description && /* @__PURE__ */ jsx6("p", { className: "text-sm text-text-secondary mt-0.5", children: description })
    ] }),
    items.length > 0 && /* @__PURE__ */ jsxs6(Fragment3, { children: [
      /* @__PURE__ */ jsx6("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx6("nav", { "aria-label": "Breadcrumb", className: "flex flex-wrap items-center gap-1 text-sm", children: items.map((item, i) => {
        const isLast = i === items.length - 1;
        const fullPath = items.slice(0, i + 1).map((b) => b.label).join(" \u203A ");
        return /* @__PURE__ */ jsxs6("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx6(Tooltip, { content: fullPath, placement: "bottom", arrow: true, children: isLast ? /* @__PURE__ */ jsx6("span", { className: "text-text-primary font-medium px-1", children: item.label }) : item.href ? /* @__PURE__ */ jsx6(
            "a",
            {
              href: item.href,
              className: "text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded px-1",
              children: item.label
            }
          ) : /* @__PURE__ */ jsx6("span", { className: "text-text-secondary px-1", children: item.label }) }),
          !isLast && /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faChevronRight, className: "w-2.5 h-2.5 text-text-disabled", "aria-hidden": "true" })
        ] }, i);
      }) }) }),
      /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2 sm:hidden", children: [
        /* @__PURE__ */ jsx6(Breadcrumb, { items: [items[0], { label: "\u2026" }, items[items.length - 1]] }),
        dropdownItems.length > 2 && /* @__PURE__ */ jsx6(
          DropdownMenu,
          {
            trigger: /* @__PURE__ */ jsxs6(Button, { variant: "ghost", size: "xs", "aria-label": "View full path", children: [
              "Full path ",
              /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faChevronDown2, className: "w-2.5 h-2.5 ml-0.5" })
            ] }),
            items: dropdownItems,
            align: "left"
          }
        )
      ] })
    ] })
  ] });
}

// modules/app/SectionCard.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function SectionCard({ title, children, className }) {
  return /* @__PURE__ */ jsxs7("div", { className: `rounded-xl border border-border bg-surface-raised p-6 space-y-4 ${className != null ? className : ""}`, children: [
    /* @__PURE__ */ jsx7("h3", { className: "text-sm font-semibold text-text-primary border-b border-border pb-3", children: title }),
    children
  ] });
}

// modules/app/NavDrawer.tsx
import { useState as useState4 } from "react";
import { Fragment as Fragment4, jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function NavDrawer({
  trigger,
  title = "Menu",
  side = "left",
  footer,
  children,
  className
}) {
  const [open, setOpen] = useState4(false);
  return /* @__PURE__ */ jsxs8(Fragment4, { children: [
    /* @__PURE__ */ jsx8(
      "div",
      {
        role: "none",
        onClick: () => setOpen(true),
        className: cn("inline-flex", className),
        children: trigger
      }
    ),
    /* @__PURE__ */ jsx8(
      Drawer,
      {
        open,
        onClose: () => setOpen(false),
        title,
        side,
        footer,
        children
      }
    )
  ] });
}

// modules/app/AppNav.tsx
import { FontAwesomeIcon as FontAwesomeIcon5 } from "@fortawesome/react-fontawesome";
import { faBars as faBars3 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function AppNav(_a) {
  var _b = _a, {
    logo,
    navItems = [],
    children,
    sticky = false,
    bordered = true,
    className
  } = _b, rest = __objRest(_b, [
    "logo",
    "navItems",
    "children",
    "sticky",
    "bordered",
    "className"
  ]);
  return /* @__PURE__ */ jsxs9(
    "header",
    __spreadProps(__spreadValues({
      className: cn(
        "w-full flex items-center gap-3 px-4 py-3 bg-surface-raised",
        bordered && "border-b border-border",
        sticky && "sticky top-0 z-40",
        className
      )
    }, rest), {
      children: [
        /* @__PURE__ */ jsx9("div", { className: "md:hidden", children: /* @__PURE__ */ jsx9(
          NavDrawer,
          {
            title: "Navigation",
            side: "left",
            trigger: /* @__PURE__ */ jsx9(Button, { variant: "ghost", size: "sm", iconOnly: true, "aria-label": "Open navigation menu", children: /* @__PURE__ */ jsx9(FontAwesomeIcon5, { icon: faBars3, className: "w-4 h-4", "aria-hidden": "true" }) }),
            children: /* @__PURE__ */ jsx9("nav", { className: "flex flex-col gap-0.5 pt-1", "aria-label": "Mobile navigation", children: navItems.map((item) => {
              var _a2;
              return /* @__PURE__ */ jsx9(
                "a",
                {
                  href: (_a2 = item.href) != null ? _a2 : "#",
                  "aria-current": item.active ? "page" : void 0,
                  className: cn(
                    "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    item.active ? "bg-primary-subtle text-primary" : "text-text-primary hover:bg-surface-overlay"
                  ),
                  children: item.label
                },
                item.label
              );
            }) })
          }
        ) }),
        logo && /* @__PURE__ */ jsx9("div", { className: "shrink-0", children: logo }),
        /* @__PURE__ */ jsx9("nav", { className: "hidden md:flex items-center gap-0.5 flex-1", "aria-label": "Main navigation", children: navItems.map((item) => {
          var _a2;
          return /* @__PURE__ */ jsx9(
            "a",
            {
              href: (_a2 = item.href) != null ? _a2 : "#",
              "aria-current": item.active ? "page" : void 0,
              className: cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                item.active ? "bg-primary-subtle text-primary" : "text-text-secondary hover:text-text-primary hover:bg-surface-overlay"
              ),
              children: item.label
            },
            item.label
          );
        }) }),
        children && /* @__PURE__ */ jsx9("div", { className: "flex items-center gap-2 ml-auto shrink-0", children })
      ]
    })
  );
}

// modules/app/GlobalSearch.tsx
import { useEffect as useEffect2, useRef, useState as useState5 } from "react";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function GlobalSearch({
  placeholder = "Search\u2026",
  results = [],
  onSearch,
  onSelect,
  loading = false,
  className
}) {
  const [query, setQuery] = useState5("");
  const [open, setOpen] = useState5(false);
  const containerRef = useRef(null);
  const [highlighted, setHighlighted] = useState5(-1);
  useEffect2(() => {
    function onOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);
  function handleChange(v) {
    setQuery(v);
    setHighlighted(-1);
    onSearch(v);
    setOpen(v.trim().length > 0);
  }
  function handleSelect(r) {
    onSelect(r);
    setQuery("");
    setOpen(false);
  }
  function handleKeyDown(e) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter" && highlighted >= 0) {
      e.preventDefault();
      handleSelect(results[highlighted]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }
  const grouped = results.reduce((acc, r) => {
    var _a;
    const cat = (_a = r.category) != null ? _a : "Results";
    acc[cat] = acc[cat] ? [...acc[cat], r] : [r];
    return acc;
  }, {});
  return /* @__PURE__ */ jsxs10("div", { ref: containerRef, className: cn("relative w-full max-w-md", className), children: [
    /* @__PURE__ */ jsx10("div", { onKeyDown: handleKeyDown, role: "combobox", "aria-expanded": open, "aria-haspopup": "listbox", children: /* @__PURE__ */ jsx10(
      SearchBar,
      {
        value: query,
        onChange: handleChange,
        placeholder
      }
    ) }),
    open && /* @__PURE__ */ jsx10(
      "div",
      {
        role: "listbox",
        "aria-label": "Search results",
        className: "absolute top-full mt-1.5 left-0 right-0 z-50 rounded-lg border border-border bg-surface-raised shadow-xl overflow-hidden max-h-72 overflow-y-auto",
        children: loading ? /* @__PURE__ */ jsx10("div", { className: "px-4 py-6 text-center text-sm text-text-secondary animate-pulse", children: "Searching\u2026" }) : results.length === 0 ? /* @__PURE__ */ jsxs10("div", { className: "px-4 py-6 text-center text-sm text-text-secondary", children: [
          "No results for ",
          /* @__PURE__ */ jsxs10("strong", { className: "text-text-primary", children: [
            '"',
            query,
            '"'
          ] })
        ] }) : Object.entries(grouped).map(([cat, items]) => /* @__PURE__ */ jsxs10("div", { children: [
          /* @__PURE__ */ jsx10("p", { className: "px-3 pt-2 pb-1 text-[10px] font-semibold text-text-disabled uppercase tracking-wider", children: cat }),
          items.map((r) => {
            const idx = results.indexOf(r);
            return /* @__PURE__ */ jsxs10(
              "button",
              {
                type: "button",
                role: "option",
                "aria-selected": idx === highlighted,
                onClick: () => handleSelect(r),
                onMouseEnter: () => setHighlighted(idx),
                className: cn(
                  "flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors",
                  "focus-visible:outline-none",
                  idx === highlighted ? "bg-primary-subtle text-primary" : "hover:bg-surface-overlay text-text-primary"
                ),
                children: [
                  r.icon && /* @__PURE__ */ jsx10("span", { "aria-hidden": "true", className: "shrink-0 text-text-disabled", children: r.icon }),
                  /* @__PURE__ */ jsxs10("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx10("p", { className: "text-sm font-medium truncate", children: r.label }),
                    r.description && /* @__PURE__ */ jsx10("p", { className: "text-xs text-text-secondary truncate", children: r.description })
                  ] })
                ]
              },
              r.id
            );
          })
        ] }, cat))
      }
    )
  ] });
}

// modules/app/CommandPalette/index.tsx
import { useId, useMemo as useMemo3, useRef as useRef2, useState as useState6 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon7 } from "@fortawesome/react-fontawesome";
import {
  faHouse as faHouse2,
  faFolder as faFolder2,
  faUsers,
  faGear,
  faChartBar,
  faPlus,
  faEnvelope,
  faFileExport,
  faLock,
  faClock
} from "@fortawesome/free-solid-svg-icons";

// modules/app/CommandPalette/hooks/useFuzzySearch.tsx
import { useMemo } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
function scoreString(haystack, needle) {
  if (!needle) return { score: 0, matches: [] };
  const hay = haystack.toLowerCase();
  const need = needle.toLowerCase();
  let score = 0;
  let lastMatch = -1;
  const matches = [];
  let h = 0;
  for (let n = 0; n < need.length; n++) {
    const ch = need[n];
    let found = -1;
    for (let i = h; i < hay.length; i++) {
      if (hay[i] === ch) {
        found = i;
        break;
      }
    }
    if (found === -1) return null;
    if (found === 0) score += 100;
    else if (hay[found - 1] === " " || hay[found - 1] === "-" || hay[found - 1] === "/" || hay[found - 1] === "_") {
      score += 30;
    }
    if (lastMatch !== -1 && found === lastMatch + 1) score += 10;
    if (lastMatch !== -1) score -= found - lastMatch - 1;
    matches.push(found);
    lastMatch = found;
    h = found + 1;
  }
  return { score, matches };
}
function scoreCommand(item, query) {
  var _a;
  if (!query.trim()) {
    return { item, score: 0, matches: [] };
  }
  const labelScore = scoreString(item.label, query);
  if (labelScore) {
    return { item, score: labelScore.score, matches: labelScore.matches };
  }
  if ((_a = item.keywords) == null ? void 0 : _a.length) {
    for (const kw of item.keywords) {
      const s = scoreString(kw, query);
      if (s) return { item, score: s.score * 0.5, matches: [] };
    }
  }
  const catScore = scoreString(item.category, query);
  if (catScore) {
    return { item, score: catScore.score * 0.25, matches: [] };
  }
  return null;
}
function useFuzzySearch(items, query) {
  return useMemo(() => {
    if (!query.trim()) {
      return items.map((item) => ({ item, score: 0, matches: [] }));
    }
    const out = [];
    for (const item of items) {
      const s = scoreCommand(item, query);
      if (s) out.push(s);
    }
    return out.sort((a, b) => b.score - a.score);
  }, [items, query]);
}
function highlightMatches(label, matches) {
  if (!matches.length) return [label];
  const set = new Set(matches);
  const out = [];
  let buf = "";
  for (let i = 0; i < label.length; i++) {
    if (set.has(i)) {
      if (buf) {
        out.push(buf);
        buf = "";
      }
      out.push(
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ jsx11("mark", { className: "bg-warning-subtle text-text-primary rounded-sm px-0.5", children: label[i] }, `m-${i}`)
      );
    } else {
      buf += label[i];
    }
  }
  if (buf) out.push(buf);
  return out;
}

// modules/app/CommandPalette/hooks/useCommandStore.ts
import { useEffect as useEffect3, useMemo as useMemo2, useSyncExternalStore } from "react";
var registry = /* @__PURE__ */ new Map();
var listeners = /* @__PURE__ */ new Set();
function subscribe(fn) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
function getSnapshot() {
  return Array.from(registry.values());
}
function getServerSnapshot() {
  return [];
}
function commandKey(cmd) {
  var _a;
  return (_a = cmd.id) != null ? _a : `${cmd.category}::${cmd.label}`;
}
function useCommandStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
function useMergedCommands(defaults) {
  const dynamic = useCommandStore();
  return useMemo2(() => {
    const seen = /* @__PURE__ */ new Map();
    for (const c of defaults) seen.set(commandKey(c), c);
    for (const c of dynamic) seen.set(commandKey(c), c);
    return Array.from(seen.values());
  }, [defaults, dynamic]);
}

// modules/app/CommandPalette/hooks/useShortcuts.ts
import { useEffect as useEffect4 } from "react";
function useShortcuts({ isOpen, onOpen, onClose }) {
  useEffect4(() => {
    function handler(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpen();
        return;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onOpen, onClose]);
}

// modules/app/CommandPalette/parts/Input.tsx
import { forwardRef } from "react";
import { FontAwesomeIcon as FontAwesomeIcon6 } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as faMagnifyingGlass2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var CommandPaletteInput = forwardRef(
  function CommandPaletteInput2({ id, value, onChange, onKeyDown, placeholder, listboxId, activeDescendantId }, ref) {
    return /* @__PURE__ */ jsxs11("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ jsx12(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute left-3 text-text-disabled pointer-events-none text-sm",
          children: /* @__PURE__ */ jsx12(FontAwesomeIcon6, { icon: faMagnifyingGlass2, className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ jsx12(
        "input",
        {
          ref,
          id,
          type: "search",
          role: "combobox",
          "aria-expanded": "true",
          "aria-autocomplete": "list",
          "aria-controls": listboxId,
          "aria-activedescendant": activeDescendantId,
          value,
          onChange: (e) => onChange(e.target.value),
          onKeyDown,
          placeholder,
          autoComplete: "off",
          className: cn(
            "block w-full rounded-md border border-border bg-surface-base pl-9 pr-3 py-2 text-sm",
            "text-text-primary placeholder:text-text-disabled",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:border-border-focus",
            "transition-colors"
          )
        }
      )
    ] });
  }
);

// modules/app/CommandPalette/parts/ResultItem.tsx
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
function ResultItem({ id, scored, active, onSelect, onHover }) {
  const { item, matches } = scored;
  return /* @__PURE__ */ jsxs12(
    "button",
    {
      id,
      type: "button",
      role: "option",
      "aria-selected": active,
      tabIndex: -1,
      onClick: onSelect,
      onMouseEnter: onHover,
      className: cn(
        "w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm text-text-primary",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
        active ? "bg-surface-overlay" : "hover:bg-surface-overlay"
      ),
      children: [
        /* @__PURE__ */ jsxs12("span", { className: "flex items-center gap-2 min-w-0", children: [
          item.icon && /* @__PURE__ */ jsx13("span", { "aria-hidden": "true", className: "shrink-0", children: item.icon }),
          /* @__PURE__ */ jsx13("span", { className: "truncate", children: highlightMatches(item.label, matches) }),
          item.description && /* @__PURE__ */ jsx13("span", { className: "text-text-secondary text-xs truncate", children: item.description })
        ] }),
        item.shortcut && /* @__PURE__ */ jsx13(Badge, { variant: "neutral", size: "sm", children: item.shortcut })
      ]
    }
  );
}

// modules/app/CommandPalette/parts/ResultList.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function ResultList({
  listboxId,
  itemIdPrefix,
  groups,
  flat,
  activeIndex,
  onSelect,
  onHover
}) {
  return /* @__PURE__ */ jsx14("div", { id: listboxId, role: "listbox", className: "max-h-72 overflow-y-auto space-y-3", children: groups.map((group) => /* @__PURE__ */ jsxs13("div", { children: [
    /* @__PURE__ */ jsx14("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsx14(Badge, { variant: "neutral", size: "sm", children: group.category }) }),
    /* @__PURE__ */ jsx14("div", { className: "space-y-0.5", children: group.items.map((scored) => {
      var _a;
      const flatIndex = flat.indexOf(scored);
      const itemId = `${itemIdPrefix}-${flatIndex}`;
      return /* @__PURE__ */ jsx14(
        ResultItem,
        {
          id: itemId,
          scored,
          active: flatIndex === activeIndex,
          onSelect: () => onSelect(scored),
          onHover: () => onHover(flatIndex)
        },
        ((_a = scored.item.id) != null ? _a : scored.item.label) + "::" + group.category
      );
    }) })
  ] }, group.category)) });
}

// modules/app/CommandPalette/parts/EmptyState.tsx
import { Fragment as Fragment5, jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
function EmptyState2({ query, suggestions, onSelect }) {
  return /* @__PURE__ */ jsxs14("div", { className: "py-4 text-center", children: [
    /* @__PURE__ */ jsxs14("p", { className: "text-sm text-text-secondary", children: [
      'No commands found for "',
      query,
      '"'
    ] }),
    suggestions.length > 0 && /* @__PURE__ */ jsxs14(Fragment5, { children: [
      /* @__PURE__ */ jsx15("p", { className: "mt-3 text-xs text-text-disabled", children: "Try one of these instead:" }),
      /* @__PURE__ */ jsx15("div", { className: "mt-2 flex flex-wrap justify-center gap-1.5", children: suggestions.map((cmd) => {
        var _a;
        return /* @__PURE__ */ jsx15(
          "button",
          {
            type: "button",
            onClick: () => onSelect(cmd),
            className: cn(
              "rounded-full border border-border bg-surface-raised px-2.5 py-1 text-xs",
              "text-text-secondary hover:bg-surface-overlay transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            ),
            children: cmd.label
          },
          (_a = cmd.id) != null ? _a : cmd.label
        );
      }) })
    ] })
  ] });
}

// modules/app/CommandPalette/parts/Footer.tsx
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsxs15("div", { className: "flex items-center gap-4 border-t border-border pt-3 text-[10px] text-text-disabled", children: [
    /* @__PURE__ */ jsxs15("span", { children: [
      /* @__PURE__ */ jsx16("kbd", { className: "rounded border border-border px-1 py-0.5 font-mono text-[9px]", children: "\u2191\u2193" }),
      " ",
      "Navigate"
    ] }),
    /* @__PURE__ */ jsxs15("span", { children: [
      /* @__PURE__ */ jsx16("kbd", { className: "rounded border border-border px-1 py-0.5 font-mono text-[9px]", children: "\u21B5" }),
      " ",
      "Select"
    ] }),
    /* @__PURE__ */ jsxs15("span", { children: [
      /* @__PURE__ */ jsx16("kbd", { className: "rounded border border-border px-1 py-0.5 font-mono text-[9px]", children: "Esc" }),
      " ",
      "Close"
    ] })
  ] });
}

// modules/app/CommandPalette/index.tsx
import { Fragment as Fragment6, jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
var DEFAULT_COMMANDS = [
  { id: "nav-dashboard", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faHouse2, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Dashboard", shortcut: "G D", category: "Navigation" },
  { id: "nav-projects", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faFolder2, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Projects", shortcut: "G P", category: "Navigation" },
  { id: "nav-team", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faUsers, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Team", shortcut: "G T", category: "Navigation" },
  { id: "nav-settings", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faGear, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Settings", shortcut: "G S", category: "Navigation" },
  { id: "nav-analytics", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faChartBar, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Analytics", shortcut: "G A", category: "Navigation" },
  { id: "act-new-project", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faPlus, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "New Project", shortcut: "\u2318N", category: "Actions" },
  { id: "act-invite", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faEnvelope, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Send Invite", shortcut: "\u2318I", category: "Actions" },
  { id: "act-export", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faFileExport, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Export Data", shortcut: "\u2318E", category: "Actions" },
  { id: "act-lock", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faLock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Lock Screen", shortcut: "\u2318L", category: "Actions" },
  { id: "rec-alpha", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faClock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Project Alpha", category: "Recent" },
  { id: "rec-q3", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faClock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Q3 Report", category: "Recent" },
  { id: "rec-review", icon: /* @__PURE__ */ jsx17(FontAwesomeIcon7, { icon: faClock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Design Review", category: "Recent" }
];
function groupByCategory(scored) {
  const order = [];
  const map = /* @__PURE__ */ new Map();
  for (const s of scored) {
    if (!map.has(s.item.category)) {
      order.push(s.item.category);
      map.set(s.item.category, []);
    }
    map.get(s.item.category).push(s);
  }
  return order.map((category) => ({ category, items: map.get(category) }));
}
function CommandPalette({
  items = DEFAULT_COMMANDS,
  onSelect,
  trigger,
  placeholder = "Type a command or search\u2026"
}) {
  const [open, setOpen] = useState6(false);
  const [query, setQuery] = useState6("");
  const [activeIndex, setActiveIndex] = useState6(0);
  const inputRef = useRef2(null);
  const reactId = useId();
  const listboxId = `${reactId}-list`;
  const itemIdPrefix = `${reactId}-opt`;
  const inputId = `${reactId}-input`;
  const merged = useMergedCommands(items);
  const scored = useFuzzySearch(merged, query);
  const groups = useMemo3(() => groupByCategory(scored), [scored]);
  const flat = scored;
  const hasResults = flat.length > 0;
  const activeDescendantId = hasResults ? `${itemIdPrefix}-${activeIndex}` : void 0;
  useShortcuts({
    isOpen: open,
    onOpen: () => setOpen(true),
    onClose: () => {
      setOpen(false);
      setQuery("");
      setActiveIndex(0);
    }
  });
  function handleSelect(cmd) {
    var _a;
    (_a = cmd.onClick) == null ? void 0 : _a.call(cmd);
    onSelect == null ? void 0 : onSelect(cmd);
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }
  function handleKeyDown(e) {
    if (!hasResults) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % flat.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + flat.length) % flat.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(flat.length - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const picked = flat[activeIndex];
      if (picked) handleSelect(picked.item);
    }
  }
  function handleQueryChange(next) {
    setQuery(next);
    setActiveIndex(0);
  }
  const suggestions = useMemo3(() => merged.slice(0, 4), [merged]);
  return /* @__PURE__ */ jsxs16(Fragment6, { children: [
    /* @__PURE__ */ jsx17("div", { role: "none", onClick: () => setOpen(true), children: trigger != null ? trigger : /* @__PURE__ */ jsx17(
      Button,
      {
        variant: "outline",
        size: "sm",
        iconRight: /* @__PURE__ */ jsx17(Badge, { variant: "neutral", size: "sm", children: "\u2318K" }),
        children: "Quick actions\u2026"
      }
    ) }),
    /* @__PURE__ */ jsx17(
      Modal,
      {
        open,
        onClose: () => {
          setOpen(false);
          setQuery("");
          setActiveIndex(0);
        },
        title: "Command Palette",
        description: "Search for actions, navigate, or run recent commands.",
        size: "lg",
        scrollable: true,
        children: /* @__PURE__ */ jsxs16("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx17(
            CommandPaletteInput,
            {
              ref: inputRef,
              id: inputId,
              value: query,
              onChange: handleQueryChange,
              onKeyDown: handleKeyDown,
              placeholder,
              listboxId,
              activeDescendantId
            }
          ),
          /* @__PURE__ */ jsx17(
            AlertBanner,
            {
              variant: "info",
              message: "Pro tip: Press \u2318K from anywhere to open this palette."
            }
          ),
          hasResults ? /* @__PURE__ */ jsx17(
            ResultList,
            {
              listboxId,
              itemIdPrefix,
              groups,
              flat,
              activeIndex,
              onSelect: (s) => handleSelect(s.item),
              onHover: (i) => setActiveIndex(i)
            }
          ) : /* @__PURE__ */ jsx17(
            EmptyState2,
            {
              query,
              suggestions,
              onSelect: handleSelect
            }
          ),
          /* @__PURE__ */ jsx17(Footer, {})
        ] })
      }
    )
  ] });
}
var AppCommandBar = CommandPalette;

// modules/app/ContextMenu.tsx
import { useState as useState7, useEffect as useEffect5, useRef as useRef3, useCallback, useId as useId2 } from "react";
import { jsx as jsx18, jsxs as jsxs17 } from "react/jsx-runtime";
function getActionItems(items) {
  return items.reduce((acc, item, i) => {
    if ((!item.type || item.type === "item") && !item.disabled) acc.push(i);
    return acc;
  }, []);
}
function ContextMenu({
  items,
  children,
  disabled = false,
  className,
  onOpenChange
}) {
  const [menu, setMenu] = useState7(null);
  const [focusedActionIdx, setFocusedActionIdx] = useState7(-1);
  const menuRef = useRef3(null);
  const labelId = useId2();
  const isOpen = menu !== null;
  const open = useCallback(
    (clientX, clientY) => {
      setMenu({ rawX: clientX, rawY: clientY, adjX: clientX, adjY: clientY, measured: false });
      setFocusedActionIdx(-1);
      onOpenChange == null ? void 0 : onOpenChange(true);
    },
    [onOpenChange]
  );
  const close = useCallback(() => {
    setMenu(null);
    setFocusedActionIdx(-1);
    onOpenChange == null ? void 0 : onOpenChange(false);
  }, [onOpenChange]);
  const handleContextMenu = (e) => {
    if (disabled) return;
    e.preventDefault();
    e.stopPropagation();
    open(e.clientX, e.clientY);
  };
  useEffect5(() => {
    if (!menu || menu.measured || !menuRef.current) return;
    const el = menuRef.current;
    const { width, height } = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const GAP = 8;
    const adjX = menu.rawX + width > vw - GAP ? Math.max(GAP, menu.rawX - width) : menu.rawX;
    const adjY = menu.rawY + height > vh - GAP ? Math.max(GAP, menu.rawY - height) : menu.rawY;
    setMenu((m) => m ? __spreadProps(__spreadValues({}, m), { adjX, adjY, measured: true }) : null);
  }, [menu]);
  useEffect5(() => {
    if (!isOpen) return;
    const onPointer = (e) => {
      var _a;
      if (!((_a = menuRef.current) == null ? void 0 : _a.contains(e.target))) close();
    };
    const onScroll = () => close();
    document.addEventListener("mousedown", onPointer);
    window.addEventListener("scroll", onScroll, { capture: true, passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointer);
      window.removeEventListener("scroll", onScroll, { capture: true });
    };
  }, [isOpen, close]);
  useEffect5(() => {
    if (!isOpen) return;
    const actionIndices = getActionItems(items);
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedActionIdx((idx) => {
          var _a;
          const next = actionIndices.indexOf(idx) + 1;
          return (_a = actionIndices[next < actionIndices.length ? next : 0]) != null ? _a : -1;
        });
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedActionIdx((idx) => {
          var _a;
          const pos = actionIndices.indexOf(idx);
          const prev = pos <= 0 ? actionIndices.length - 1 : pos - 1;
          return (_a = actionIndices[prev]) != null ? _a : -1;
        });
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const item = items[focusedActionIdx];
        if (item && (!item.type || item.type === "item") && item.onClick) {
          item.onClick();
          close();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, items, focusedActionIdx, close]);
  useEffect5(() => {
    if (!menuRef.current || focusedActionIdx < 0) return;
    const btn = menuRef.current.querySelector(
      `[data-item-index="${focusedActionIdx}"]`
    );
    btn == null ? void 0 : btn.focus({ preventScroll: true });
  }, [focusedActionIdx]);
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      className: cn("relative", className),
      onContextMenu: handleContextMenu,
      children: [
        children,
        menu && /* @__PURE__ */ jsx18(
          "div",
          {
            ref: menuRef,
            role: "menu",
            "aria-labelledby": labelId,
            style: {
              position: "fixed",
              top: menu.adjY,
              left: menu.adjX,
              visibility: menu.measured ? "visible" : "hidden",
              zIndex: 9999
            },
            className: cn(
              "min-w-[13rem] rounded-xl border border-border bg-surface-raised shadow-2xl py-1.5",
              "outline-none",
              // Subtle enter animation (opacity only, no layout shift)
              menu.measured && "animate-in fade-in-0 zoom-in-95 duration-100"
            ),
            children: items.map((item, i) => {
              if (item.type === "separator") {
                return /* @__PURE__ */ jsx18(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "horizontal",
                    className: "my-1 mx-2 border-t border-border"
                  },
                  i
                );
              }
              if (item.type === "group") {
                return /* @__PURE__ */ jsx18(
                  "p",
                  {
                    role: "presentation",
                    className: "px-3 pt-2 pb-0.5 text-[11px] font-semibold uppercase tracking-widest text-text-disabled select-none",
                    children: item.label
                  },
                  i
                );
              }
              const isActive = i === focusedActionIdx;
              return /* @__PURE__ */ jsxs17(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  tabIndex: isActive ? 0 : -1,
                  "data-item-index": i,
                  disabled: item.disabled,
                  onClick: () => {
                    var _a;
                    if (!item.disabled) {
                      (_a = item.onClick) == null ? void 0 : _a.call(item);
                      close();
                    }
                  },
                  onMouseEnter: () => setFocusedActionIdx(i),
                  onMouseLeave: () => setFocusedActionIdx(-1),
                  className: cn(
                    "flex w-full items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors select-none",
                    "focus-visible:outline-none",
                    item.danger ? "text-error hover:bg-error-subtle focus-visible:bg-error-subtle" : "text-text-primary hover:bg-surface-overlay focus-visible:bg-surface-overlay",
                    item.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
                  ),
                  children: [
                    item.icon != null && /* @__PURE__ */ jsx18(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: cn(
                          "w-4 flex items-center justify-center shrink-0",
                          item.danger ? "text-error" : "text-text-secondary"
                        ),
                        children: item.icon
                      }
                    ),
                    /* @__PURE__ */ jsx18("span", { className: "flex-1 truncate", children: item.label }),
                    item.shortcut && /* @__PURE__ */ jsx18("kbd", { className: "shrink-0 ml-6 text-[11px] font-mono text-text-disabled", children: item.shortcut })
                  ]
                },
                i
              );
            })
          }
        )
      ]
    }
  );
}

// modules/app/ImageGallery/index.tsx
import { useState as useState9, useEffect as useEffect7, useCallback as useCallback4 } from "react";

// modules/app/ImageGallery/constants.ts
var columnClasses = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
};
var gapClasses = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-4"
};
var aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  auto: ""
};

// modules/app/ImageGallery/parts/GalleryItem.tsx
import { FontAwesomeIcon as FontAwesomeIcon8 } from "@fortawesome/react-fontawesome";
import { faExpand, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx19, jsxs as jsxs18 } from "react/jsx-runtime";
function GalleryItem({
  image,
  index,
  aspectClass,
  aspectIsAuto,
  reorderable,
  isDragging,
  isDropTarget,
  lightbox,
  showCaptions,
  onOpenLightbox,
  dragHandlers
}) {
  return /* @__PURE__ */ jsxs18(
    "div",
    {
      role: "listitem",
      draggable: reorderable,
      onDragStart: reorderable ? () => dragHandlers.onDragStart(index) : void 0,
      onDragOver: reorderable ? (e) => dragHandlers.onDragOver(e, index) : void 0,
      onDragLeave: reorderable ? dragHandlers.onDragLeave : void 0,
      onDrop: reorderable ? () => dragHandlers.onDrop(index) : void 0,
      onDragEnd: reorderable ? dragHandlers.onDragEnd : void 0,
      className: cn(
        "group relative overflow-hidden rounded-lg bg-surface-sunken transition-all duration-200",
        !aspectIsAuto && aspectClass,
        reorderable && "cursor-grab active:cursor-grabbing",
        isDragging && "opacity-40 scale-95 ring-2 ring-[var(--primary)] ring-inset",
        isDropTarget && "ring-2 ring-[var(--primary)] shadow-lg scale-[1.02]"
      ),
      children: [
        /* @__PURE__ */ jsx19(
          "img",
          {
            src: image.src,
            alt: image.alt,
            loading: "lazy",
            draggable: false,
            className: cn(
              "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
              aspectIsAuto && "aspect-square",
              isDragging && "pointer-events-none"
            )
          }
        ),
        reorderable && /* @__PURE__ */ jsx19(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute top-1.5 left-1.5 z-10 w-6 h-6 flex items-center justify-center rounded bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            children: /* @__PURE__ */ jsx19(FontAwesomeIcon8, { icon: faGripVertical, className: "w-3 h-3" })
          }
        ),
        lightbox && /* @__PURE__ */ jsxs18(
          "button",
          {
            onClick: () => onOpenLightbox(index),
            "aria-label": `Open ${image.alt} in lightbox`,
            className: cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-2",
              "bg-black/0 group-hover:bg-black/40 transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-inset"
            ),
            children: [
              /* @__PURE__ */ jsx19(
                FontAwesomeIcon8,
                {
                  icon: faExpand,
                  "aria-hidden": "true",
                  className: "text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
                }
              ),
              image.caption && /* @__PURE__ */ jsx19("span", { className: "text-white text-xs font-medium px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 drop-shadow-md", children: image.caption })
            ]
          }
        ),
        showCaptions && image.caption && /* @__PURE__ */ jsx19("p", { className: "absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs px-2 py-1 line-clamp-1 pointer-events-none", children: image.caption })
      ]
    }
  );
}

// modules/app/ImageGallery/parts/GalleryGrid.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function GalleryGrid({
  images,
  columns,
  aspect,
  gap,
  reorderable,
  lightbox,
  showCaptions,
  dragFrom,
  dragOver,
  dragHandlers,
  onOpenLightbox,
  buildMenuItems,
  className
}) {
  const aspectIsAuto = aspect === "auto";
  return /* @__PURE__ */ jsx20(
    "div",
    {
      className: cn("grid", columnClasses[columns], gapClasses[gap], className),
      role: "list",
      "aria-label": "Image gallery",
      children: images.map((img, i) => {
        const isDragging = dragFrom === i;
        const isDropTarget = dragOver === i && dragFrom !== null && dragFrom !== i;
        const tile = /* @__PURE__ */ jsx20(
          GalleryItem,
          {
            image: img,
            index: i,
            aspectClass: aspectClasses[aspect],
            aspectIsAuto,
            reorderable,
            isDragging,
            isDropTarget,
            lightbox,
            showCaptions,
            onOpenLightbox,
            dragHandlers
          }
        );
        return reorderable ? /* @__PURE__ */ jsx20(ContextMenu, { items: buildMenuItems(i), children: tile }, `${img.src}-${i}`) : /* @__PURE__ */ jsx20("div", { children: tile }, `${img.src}-${i}`);
      })
    }
  );
}

// modules/app/ImageGallery/parts/Lightbox.tsx
import { FontAwesomeIcon as FontAwesomeIcon9 } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft as faChevronLeft2,
  faChevronRight as faChevronRight2,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus
} from "@fortawesome/free-solid-svg-icons";

// modules/app/ImageGallery/hooks/useLightboxKeyboard.ts
import { useEffect as useEffect6 } from "react";
function useLightboxKeyboard({ open, onClose, onPrev, onNext }) {
  useEffect6(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);
  useEffect6(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
}

// modules/app/ImageGallery/parts/Lightbox.tsx
import { Fragment as Fragment7, jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
function Lightbox({
  images,
  activeIndex,
  zoomed,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
  onToggleZoom
}) {
  useLightboxKeyboard({ open: true, onClose, onPrev, onNext });
  const activeImage = images[activeIndex];
  if (!activeImage) return null;
  return /* @__PURE__ */ jsxs19(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Image lightbox",
      className: "fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm",
      children: [
        /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between px-4 py-3 shrink-0", children: [
          /* @__PURE__ */ jsxs19("span", { className: "text-white/70 text-sm tabular-nums select-none", children: [
            activeIndex + 1,
            " / ",
            images.length
          ] }),
          /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx21(
              "button",
              {
                onClick: onToggleZoom,
                "aria-label": zoomed ? "Zoom out" : "Zoom in",
                className: "w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ jsx21(
                  FontAwesomeIcon9,
                  {
                    icon: zoomed ? faMagnifyingGlassMinus : faMagnifyingGlassPlus,
                    "aria-hidden": "true"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx21(
              "button",
              {
                onClick: onClose,
                "aria-label": "Close lightbox",
                className: "w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ jsx21(FontAwesomeIcon9, { icon: faXmark, "aria-hidden": "true" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs19("div", { className: "relative flex-1 flex items-center justify-center overflow-hidden px-14", children: [
          /* @__PURE__ */ jsx21(
            "img",
            {
              src: activeImage.src,
              alt: activeImage.alt,
              className: cn(
                "max-h-full max-w-full object-contain transition-transform duration-300 select-none",
                zoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              ),
              onClick: onToggleZoom,
              draggable: false
            }
          ),
          images.length > 1 && /* @__PURE__ */ jsxs19(Fragment7, { children: [
            /* @__PURE__ */ jsx21(
              "button",
              {
                onClick: onPrev,
                "aria-label": "Previous image",
                className: "absolute left-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ jsx21(FontAwesomeIcon9, { icon: faChevronLeft2, "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ jsx21(
              "button",
              {
                onClick: onNext,
                "aria-label": "Next image",
                className: "absolute right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ jsx21(FontAwesomeIcon9, { icon: faChevronRight2, "aria-hidden": "true" })
              }
            )
          ] })
        ] }),
        activeImage.caption && /* @__PURE__ */ jsx21("p", { className: "shrink-0 text-center text-white/80 text-sm px-6 py-2", children: activeImage.caption }),
        images.length > 1 && /* @__PURE__ */ jsx21("div", { className: "shrink-0 flex gap-2 overflow-x-auto px-4 py-3 justify-center", children: images.map((img, i) => /* @__PURE__ */ jsx21(
          "button",
          {
            onClick: () => onSelectIndex(i),
            "aria-label": `View ${img.alt}`,
            "aria-pressed": i === activeIndex,
            className: cn(
              "shrink-0 w-12 h-12 rounded overflow-hidden transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
              i === activeIndex ? "ring-2 ring-white opacity-100 scale-105" : "opacity-40 hover:opacity-70"
            ),
            children: /* @__PURE__ */ jsx21(
              "img",
              {
                src: img.src,
                alt: img.alt,
                className: "w-full h-full object-cover",
                draggable: false
              }
            )
          },
          i
        )) }),
        /* @__PURE__ */ jsx21(
          "button",
          {
            onClick: onClose,
            "aria-label": "Close lightbox",
            className: "absolute inset-0 -z-10 cursor-default focus-visible:outline-none",
            tabIndex: -1
          }
        )
      ]
    }
  );
}

// modules/app/ImageGallery/hooks/useReorder.ts
import { useState as useState8, useCallback as useCallback2 } from "react";
function useReorder({ images, setImages, onReorder }) {
  const [dragFrom, setDragFrom] = useState8(null);
  const [dragOver, setDragOver] = useState8(null);
  const onDragStart = useCallback2((i) => setDragFrom(i), []);
  const onDragOver = useCallback2(
    (e, i) => {
      e.preventDefault();
      if (i !== dragFrom) setDragOver(i);
    },
    [dragFrom]
  );
  const onDragLeave = useCallback2(() => setDragOver(null), []);
  const onDrop = useCallback2(
    (dropIdx) => {
      if (dragFrom === null || dragFrom === dropIdx) {
        setDragFrom(null);
        setDragOver(null);
        return;
      }
      const next = [...images];
      const [moved] = next.splice(dragFrom, 1);
      next.splice(dropIdx, 0, moved);
      setImages(next);
      onReorder == null ? void 0 : onReorder(next);
      setDragFrom(null);
      setDragOver(null);
    },
    [dragFrom, images, onReorder, setImages]
  );
  const onDragEnd = useCallback2(() => {
    setDragFrom(null);
    setDragOver(null);
  }, []);
  const moveToIndex = useCallback2(
    (from, to) => {
      const next = [...images];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      setImages(next);
      onReorder == null ? void 0 : onReorder(next);
    },
    [images, onReorder, setImages]
  );
  const removeAt = useCallback2(
    (i, onRemove) => {
      onRemove == null ? void 0 : onRemove(i, images[i]);
      const next = images.filter((_, idx) => idx !== i);
      setImages(next);
      onReorder == null ? void 0 : onReorder(next);
    },
    [images, onReorder, setImages]
  );
  return {
    dragFrom,
    dragOver,
    handlers: { onDragStart, onDragOver, onDragLeave, onDrop, onDragEnd },
    moveToIndex,
    removeAt
  };
}

// modules/app/ImageGallery/hooks/useContextMenu.tsx
import { useCallback as useCallback3 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon10 } from "@fortawesome/react-fontawesome";
import {
  faExpand as faExpand2,
  faCopy,
  faAnglesLeft,
  faAnglesRight,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx22 } from "react/jsx-runtime";
function useContextMenu({
  images,
  openLightbox,
  moveToIndex,
  removeAt
}) {
  const copyUrl = useCallback3((src) => {
    var _a;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(src).catch(() => {
    });
  }, []);
  const buildItems = useCallback3(
    (i) => [
      {
        label: "Open in lightbox",
        icon: /* @__PURE__ */ jsx22(FontAwesomeIcon10, { icon: faExpand2, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        onClick: () => openLightbox(i)
      },
      {
        label: "Copy image URL",
        icon: /* @__PURE__ */ jsx22(FontAwesomeIcon10, { icon: faCopy, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        shortcut: "\u2318C",
        onClick: () => copyUrl(images[i].src)
      },
      { type: "separator" },
      { type: "group", label: "Reorder" },
      {
        label: "Move to first",
        icon: /* @__PURE__ */ jsx22(FontAwesomeIcon10, { icon: faAnglesLeft, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        disabled: i === 0,
        onClick: () => moveToIndex(i, 0)
      },
      {
        label: "Move to last",
        icon: /* @__PURE__ */ jsx22(FontAwesomeIcon10, { icon: faAnglesRight, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        disabled: i === images.length - 1,
        onClick: () => moveToIndex(i, images.length - 1)
      },
      { type: "separator" },
      {
        label: "Remove",
        icon: /* @__PURE__ */ jsx22(FontAwesomeIcon10, { icon: faTrash, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        danger: true,
        onClick: () => removeAt(i)
      }
    ],
    [images, openLightbox, moveToIndex, removeAt, copyUrl]
  );
  return { buildItems };
}

// modules/app/ImageGallery/index.tsx
import { Fragment as Fragment8, jsx as jsx23, jsxs as jsxs20 } from "react/jsx-runtime";
function ImageGallery({
  images: imagesProp,
  columns = 3,
  aspect = "square",
  gap = "md",
  lightbox = true,
  showCaptions = false,
  reorderable = false,
  onReorder,
  onRemove,
  className
}) {
  const [images, setImages] = useState9(imagesProp);
  useEffect7(() => {
    setImages(imagesProp);
  }, [imagesProp]);
  const [activeIndex, setActiveIndex] = useState9(null);
  const [zoomed, setZoomed] = useState9(false);
  const isOpen = activeIndex !== null;
  const openLightbox = useCallback4((i) => {
    setActiveIndex(i);
    setZoomed(false);
  }, []);
  const closeLightbox = useCallback4(() => {
    setActiveIndex(null);
    setZoomed(false);
  }, []);
  const prevImage = useCallback4(() => {
    setActiveIndex((i) => i === null ? null : (i - 1 + images.length) % images.length);
    setZoomed(false);
  }, [images.length]);
  const nextImage = useCallback4(() => {
    setActiveIndex((i) => i === null ? null : (i + 1) % images.length);
    setZoomed(false);
  }, [images.length]);
  const selectIndex = useCallback4((i) => {
    setActiveIndex(i);
    setZoomed(false);
  }, []);
  const toggleZoom = useCallback4(() => setZoomed((z) => !z), []);
  const { dragFrom, dragOver, handlers, moveToIndex, removeAt } = useReorder({
    images,
    setImages,
    onReorder
  });
  const { buildItems } = useContextMenu({
    images,
    openLightbox,
    moveToIndex,
    removeAt: (i) => removeAt(i, onRemove)
  });
  return /* @__PURE__ */ jsxs20(Fragment8, { children: [
    /* @__PURE__ */ jsx23(
      GalleryGrid,
      {
        images,
        columns,
        aspect,
        gap,
        reorderable,
        lightbox,
        showCaptions,
        dragFrom,
        dragOver,
        dragHandlers: handlers,
        onOpenLightbox: openLightbox,
        buildMenuItems: buildItems,
        className
      }
    ),
    lightbox && isOpen && /* @__PURE__ */ jsx23(
      Lightbox,
      {
        images,
        activeIndex,
        zoomed,
        onClose: closeLightbox,
        onPrev: prevImage,
        onNext: nextImage,
        onSelectIndex: selectIndex,
        onToggleZoom: toggleZoom
      }
    )
  ] });
}

// modules/app/FormField.tsx
import { useFormContext } from "react-hook-form";
import { jsx as jsx24, jsxs as jsxs21 } from "react/jsx-runtime";
function FormField({
  name,
  label,
  hint,
  required,
  rules,
  className,
  children
}) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];
  const errorMessage = typeof (error == null ? void 0 : error.message) === "string" ? error.message : void 0;
  const hintId = hint ? `${name}-hint` : void 0;
  const errorId = errorMessage ? `${name}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  void register(name, rules);
  return /* @__PURE__ */ jsxs21("div", { className: cn("flex flex-col gap-1.5", className), children: [
    /* @__PURE__ */ jsx24(
      "label",
      {
        htmlFor: name,
        className: cn(
          "text-sm font-medium text-text-primary",
          required && "after:content-['*'] after:ml-0.5 after:text-error"
        ),
        children: label
      }
    ),
    children({
      id: name,
      "aria-describedby": describedBy,
      "aria-invalid": !!errorMessage
    }),
    hint && !errorMessage && /* @__PURE__ */ jsx24("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    errorMessage && /* @__PURE__ */ jsx24("p", { id: errorId, role: "alert", className: "text-xs text-error", children: errorMessage })
  ] });
}

// modules/app/FilterBar.tsx
import { jsx as jsx25, jsxs as jsxs22 } from "react/jsx-runtime";
function FilterBar({
  fields,
  values,
  onChange,
  onApply,
  onReset,
  applyLabel = "Apply",
  resetLabel = "Reset",
  className
}) {
  return /* @__PURE__ */ jsxs22("div", { className: cn("flex flex-wrap items-end gap-3 p-4 bg-surface-raised border border-border rounded-xl", className), children: [
    fields.map((f) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (f.type === "select") {
        return /* @__PURE__ */ jsx25("div", { className: "min-w-36 flex-1", children: /* @__PURE__ */ jsx25(
          Select,
          {
            id: `filter-${f.id}`,
            label: f.label,
            options: f.options,
            placeholder: (_a = f.placeholder) != null ? _a : "All",
            value: (_b = values[f.id]) != null ? _b : "",
            onChange: (e) => onChange(f.id, e.target.value)
          }
        ) }, f.id);
      }
      if (f.type === "multiselect") {
        return /* @__PURE__ */ jsx25("div", { className: "min-w-44 flex-1", children: /* @__PURE__ */ jsx25(
          MultiSelect,
          {
            id: `filter-${f.id}`,
            label: f.label,
            options: f.options,
            value: (_c = values[f.id]) != null ? _c : [],
            onChange: (v) => onChange(f.id, v),
            placeholder: (_d = f.placeholder) != null ? _d : "Any"
          }
        ) }, f.id);
      }
      if (f.type === "daterange") {
        return /* @__PURE__ */ jsx25("div", { className: "min-w-56 flex-1", children: /* @__PURE__ */ jsx25(
          DateRangePicker,
          {
            id: `filter-${f.id}`,
            label: f.label,
            value: (_e = values[f.id]) != null ? _e : { start: null, end: null },
            onChange: (v) => onChange(f.id, v)
          }
        ) }, f.id);
      }
      if (f.type === "tags") {
        return /* @__PURE__ */ jsx25("div", { className: "min-w-44 flex-1", children: /* @__PURE__ */ jsx25(
          TagInput,
          {
            id: `filter-${f.id}`,
            label: f.label,
            value: (_f = values[f.id]) != null ? _f : [],
            onChange: (v) => onChange(f.id, v),
            placeholder: (_g = f.placeholder) != null ? _g : "Add tag\u2026"
          }
        ) }, f.id);
      }
      return null;
    }),
    /* @__PURE__ */ jsxs22("div", { className: "flex items-center gap-2 shrink-0 self-end pb-0.5", children: [
      onReset && /* @__PURE__ */ jsx25(Button, { variant: "ghost", size: "sm", onClick: onReset, children: resetLabel }),
      onApply && /* @__PURE__ */ jsx25(Button, { variant: "primary", size: "sm", onClick: onApply, children: applyLabel })
    ] })
  ] });
}

// modules/app/StepFlow.tsx
import { useState as useState10 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon11 } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx26, jsxs as jsxs23 } from "react/jsx-runtime";
function StepFlow({
  steps,
  onComplete,
  onCancel,
  completeLabel = "Finish",
  cancelLabel = "Cancel",
  nextLabel = "Next",
  prevLabel = "Back",
  initialValues = {},
  className
}) {
  const [current, setCurrent] = useState10(0);
  const [values, setValues] = useState10(initialValues);
  const [stepError, setStepError] = useState10();
  const [completing, setCompleting] = useState10(false);
  function onChange(key, value) {
    setValues((v) => __spreadProps(__spreadValues({}, v), { [key]: value }));
    setStepError(void 0);
  }
  function handleNext() {
    var _a;
    const step = steps[current];
    const err = (_a = step.validate) == null ? void 0 : _a.call(step, values);
    if (err) {
      setStepError(err);
      return;
    }
    setStepError(void 0);
    setCurrent((c) => Math.min(c + 1, steps.length - 1));
  }
  async function handleComplete() {
    var _a;
    const step = steps[current];
    const err = (_a = step.validate) == null ? void 0 : _a.call(step, values);
    if (err) {
      setStepError(err);
      return;
    }
    setCompleting(true);
    try {
      await onComplete(values);
    } finally {
      setCompleting(false);
    }
  }
  function handlePrev() {
    setStepError(void 0);
    setCurrent((c) => Math.max(c - 1, 0));
  }
  const stepperItems = steps.map((s, i) => ({
    label: s.label,
    description: s.description,
    state: i < current ? "complete" : i === current ? "active" : "pending"
  }));
  const isLast = current === steps.length - 1;
  return /* @__PURE__ */ jsxs23("div", { className: cn("space-y-6", className), children: [
    /* @__PURE__ */ jsx26(Stepper, { steps: stepperItems }),
    /* @__PURE__ */ jsx26("div", { className: "min-h-[12rem]", children: steps[current].content({ values, onChange, error: stepError }) }),
    stepError && /* @__PURE__ */ jsx26(AlertBanner, { variant: "error", message: stepError }),
    /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between gap-3 pt-4 border-t border-border", children: [
      /* @__PURE__ */ jsxs23("div", { children: [
        onCancel && current === 0 && /* @__PURE__ */ jsx26(Button, { variant: "ghost", onClick: onCancel, children: cancelLabel }),
        current > 0 && /* @__PURE__ */ jsx26(Button, { variant: "outline", onClick: handlePrev, children: prevLabel })
      ] }),
      /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs23("span", { className: "text-xs text-text-disabled", children: [
          current + 1,
          " / ",
          steps.length
        ] }),
        isLast ? /* @__PURE__ */ jsx26(Button, { variant: "primary", onClick: handleComplete, loading: completing, children: completeLabel }) : /* @__PURE__ */ jsx26(Button, { variant: "primary", onClick: handleNext, iconRight: /* @__PURE__ */ jsx26(FontAwesomeIcon11, { icon: faArrowRight, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: nextLabel })
      ] })
    ] })
  ] });
}

// modules/app/StepShell.tsx
import { FontAwesomeIcon as FontAwesomeIcon12 } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx27, jsxs as jsxs24 } from "react/jsx-runtime";
function StepShell({
  number,
  title,
  active,
  done,
  onEdit,
  summary,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: cn(
        "rounded-2xl border transition-all bg-surface-raised overflow-hidden",
        active ? "border-primary shadow-sm" : "border-border",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-3 px-5 py-4", children: [
          /* @__PURE__ */ jsx27(
            "span",
            {
              className: cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                done ? "bg-success text-white" : active ? "bg-primary text-primary-fg" : "bg-surface-overlay text-text-disabled"
              ),
              children: done ? /* @__PURE__ */ jsx27(FontAwesomeIcon12, { icon: faCheck, className: "w-3 h-3", "aria-hidden": "true" }) : number
            }
          ),
          /* @__PURE__ */ jsx27(
            "h2",
            {
              className: cn(
                "flex-1 text-sm font-semibold",
                active ? "text-text-primary" : done ? "text-text-secondary" : "text-text-disabled"
              ),
              dangerouslySetInnerHTML: { __html: title }
            }
          ),
          done && onEdit && /* @__PURE__ */ jsx27(Button, { variant: "ghost", size: "xs", onClick: onEdit, className: "text-primary shrink-0", children: "Edit" })
        ] }),
        done && summary && /* @__PURE__ */ jsx27("div", { className: "px-5 pb-4 border-t border-border pt-3 opacity-70", children: summary }),
        active && children && /* @__PURE__ */ jsx27("div", { className: "px-5 pb-5 border-t border-border pt-4", children })
      ]
    }
  );
}

// modules/app/FileUploadSection/index.tsx
import { useId as useId3, useMemo as useMemo4, useRef as useRef5, useState as useState11, useCallback as useCallback5 } from "react";

// modules/app/FileUploadSection/parts/DropZone.tsx
import { useRef as useRef4 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon13 } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx28, jsxs as jsxs25 } from "react/jsx-runtime";
function DropZone({
  id,
  accept,
  multiple,
  disabled,
  dragging,
  hint,
  dropHint,
  browseLabel,
  pasteHint,
  showPasteHint,
  onFiles,
  onDragOver,
  onDragLeave,
  onDrop
}) {
  const inputRef = useRef4(null);
  return /* @__PURE__ */ jsxs25(
    "div",
    {
      className: cn(
        "relative rounded-lg border-2 border-dashed border-border bg-surface-base transition-colors",
        "flex flex-col items-center justify-center gap-2 px-6 py-8 text-center",
        dragging && "border-primary bg-primary-subtle",
        disabled && "opacity-50 cursor-not-allowed"
      ),
      onDragOver: (e) => {
        e.preventDefault();
        if (!disabled) onDragOver();
      },
      onDragLeave: () => onDragLeave(),
      onDrop: (e) => {
        e.preventDefault();
        if (!disabled) onDrop(e.dataTransfer);
      },
      children: [
        /* @__PURE__ */ jsx28(FontAwesomeIcon13, { icon: faFolderOpen, className: "w-8 h-8 text-text-disabled", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs25("p", { className: "text-sm text-text-secondary", children: [
          dropHint,
          " ",
          /* @__PURE__ */ jsx28(
            "button",
            {
              type: "button",
              disabled,
              onClick: () => {
                var _a;
                return (_a = inputRef.current) == null ? void 0 : _a.click();
              },
              className: "text-primary underline underline-offset-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded disabled:cursor-not-allowed",
              children: browseLabel
            }
          )
        ] }),
        showPasteHint && pasteHint && /* @__PURE__ */ jsx28("p", { className: "text-xs text-text-disabled", children: pasteHint }),
        hint && /* @__PURE__ */ jsx28("p", { className: "text-xs text-text-disabled", children: hint }),
        /* @__PURE__ */ jsx28(
          "input",
          {
            ref: inputRef,
            id,
            type: "file",
            multiple,
            accept,
            disabled,
            className: "sr-only",
            onChange: (e) => onFiles(e.target.files)
          }
        )
      ]
    }
  );
}

// modules/app/FileUploadSection/parts/FileRow.tsx
import { FontAwesomeIcon as FontAwesomeIcon14 } from "@fortawesome/react-fontawesome";
import { faXmark as faXmark2, faImage } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx29, jsxs as jsxs26 } from "react/jsx-runtime";
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function FileRow({ item, removeLabel, onRemove }) {
  const isImage = item.file.type.startsWith("image/");
  return /* @__PURE__ */ jsxs26(
    "li",
    {
      className: cn(
        "flex items-center gap-3 rounded-md border px-3 py-2 text-sm",
        item.error ? "border-error bg-error-subtle text-error-fg" : "border-border bg-surface-raised text-text-primary"
      ),
      children: [
        isImage && /* @__PURE__ */ jsx29(FontAwesomeIcon14, { icon: faImage, className: "w-4 h-4 text-text-secondary shrink-0", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs26("span", { className: "flex-1 truncate min-w-0", children: [
          /* @__PURE__ */ jsx29("span", { className: "font-medium", children: item.file.name }),
          /* @__PURE__ */ jsx29("span", { className: "ml-2 text-xs text-text-secondary", children: formatBytes(item.file.size) })
        ] }),
        item.error && /* @__PURE__ */ jsx29("span", { className: "text-xs text-error shrink-0", children: item.error }),
        /* @__PURE__ */ jsx29(
          "button",
          {
            type: "button",
            "aria-label": `${removeLabel} ${item.file.name}`,
            onClick: onRemove,
            className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
            children: /* @__PURE__ */ jsx29(FontAwesomeIcon14, { icon: faXmark2, className: "w-3 h-3" })
          }
        )
      ]
    }
  );
}

// modules/app/FileUploadSection/hooks/usePaste.ts
import { useEffect as useEffect8 } from "react";
function usePaste(rootRef, enabled, onFiles) {
  useEffect8(() => {
    if (!enabled) return;
    const handler = (ev) => {
      var _a;
      const root = rootRef.current;
      if (!root) return;
      const active = document.activeElement;
      const inside = active && (root === active || root.contains(active));
      if (!inside) return;
      const items = (_a = ev.clipboardData) == null ? void 0 : _a.items;
      if (!items || items.length === 0) return;
      const out = [];
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        if (it.kind === "file") {
          const f = it.getAsFile();
          if (f) {
            const named = f.name && f.name !== "image.png" ? f : new File(
              [f],
              `pasted-${Date.now()}.${(f.type.split("/")[1] || "bin").replace("+xml", "")}`,
              { type: f.type, lastModified: Date.now() }
            );
            out.push(named);
          }
        }
      }
      if (out.length > 0) {
        ev.preventDefault();
        onFiles(out);
      }
    };
    document.addEventListener("paste", handler);
    return () => document.removeEventListener("paste", handler);
  }, [enabled, rootRef, onFiles]);
}

// modules/app/FileUploadSection/types.ts
var DEFAULT_FUS_MESSAGES = {
  dropHint: "Drag & drop files here, or",
  browseLabel: "browse",
  pasteHint: "or paste from clipboard",
  invalidSize: (limit) => `File exceeds ${limit} limit`,
  invalidType: "File type not allowed",
  tooMany: (max) => `Too many files \u2014 limit is ${max}`,
  emptyState: "No files selected yet.",
  remove: "Remove"
};

// modules/app/FileUploadSection/index.tsx
import { jsx as jsx30, jsxs as jsxs27 } from "react/jsx-runtime";
function formatBytes2(bytes) {
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
    if (p.endsWith("/*")) return mime.startsWith(p.slice(0, -1));
    return mime === p;
  });
}
function makeId(file) {
  return `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`;
}
function FileUploadSection({
  files,
  onFilesChange,
  accept,
  multiple = true,
  maxSizeBytes,
  maxFiles,
  disabled,
  enablePaste = false,
  title,
  hint,
  className,
  messages
}) {
  const autoId = useId3();
  const inputId = `fus-${autoId}`;
  const rootRef = useRef5(null);
  const [internalFiles, setInternalFiles] = useState11([]);
  const isControlled = files !== void 0;
  const items = isControlled ? files : internalFiles;
  const [dragging, setDragging] = useState11(false);
  const [globalError, setGlobalError] = useState11("");
  const msg = useMemo4(
    () => __spreadValues(__spreadValues({}, DEFAULT_FUS_MESSAGES), messages),
    [messages]
  );
  const setItems = useCallback5(
    (next) => {
      if (!isControlled) setInternalFiles(next);
      onFilesChange == null ? void 0 : onFilesChange(next);
    },
    [isControlled, onFilesChange]
  );
  const validate = useCallback5(
    (file) => {
      if (maxSizeBytes && file.size > maxSizeBytes) {
        return msg.invalidSize(formatBytes2(maxSizeBytes));
      }
      if (accept && !matchesAccept(file, accept)) {
        return msg.invalidType;
      }
      return void 0;
    },
    [maxSizeBytes, accept, msg]
  );
  const addFiles = useCallback5(
    (incoming) => {
      if (!incoming) return;
      const arr = Array.from(incoming);
      if (arr.length === 0) return;
      const newItems = arr.map((file) => ({
        id: makeId(file),
        file,
        status: "idle",
        progress: 0,
        error: validate(file)
      }));
      const combined = multiple ? [...items, ...newItems] : newItems;
      if (maxFiles && combined.length > maxFiles) {
        setGlobalError(msg.tooMany(maxFiles));
        setItems(combined.slice(0, maxFiles));
        return;
      }
      setGlobalError("");
      setItems(combined);
    },
    [items, multiple, maxFiles, validate, msg, setItems]
  );
  function removeItem(id) {
    setItems(items.filter((it) => it.id !== id));
    setGlobalError("");
  }
  usePaste(rootRef, enablePaste && !disabled, addFiles);
  return /* @__PURE__ */ jsxs27(
    "section",
    {
      ref: rootRef,
      className: cn("space-y-3", className),
      tabIndex: enablePaste ? -1 : void 0,
      "aria-label": title || "File upload",
      children: [
        title && /* @__PURE__ */ jsx30("h3", { className: "text-sm font-medium text-text-primary", children: title }),
        /* @__PURE__ */ jsx30(
          DropZone,
          {
            id: inputId,
            accept,
            multiple,
            disabled,
            dragging,
            hint,
            dropHint: msg.dropHint,
            browseLabel: msg.browseLabel,
            pasteHint: msg.pasteHint,
            showPasteHint: enablePaste,
            onFiles: addFiles,
            onDragOver: () => setDragging(true),
            onDragLeave: () => setDragging(false),
            onDrop: (dt) => {
              setDragging(false);
              addFiles(dt.files);
            }
          }
        ),
        items.length === 0 ? /* @__PURE__ */ jsx30("p", { className: "text-xs text-text-disabled", children: msg.emptyState }) : /* @__PURE__ */ jsx30("ul", { className: "space-y-1.5", "aria-label": "Selected files", children: items.map((item) => /* @__PURE__ */ jsx30(
          FileRow,
          {
            item,
            removeLabel: msg.remove,
            onRemove: () => removeItem(item.id)
          },
          item.id
        )) }),
        globalError && /* @__PURE__ */ jsx30("p", { role: "alert", className: "text-sm text-error", children: globalError })
      ]
    }
  );
}

// modules/app/DetailHeader.tsx
import { useState as useState12 } from "react";
import { jsx as jsx31, jsxs as jsxs28 } from "react/jsx-runtime";
function DetailHeader({
  title,
  subtitle,
  status,
  statusVariant = "neutral",
  badge,
  children,
  tabs,
  defaultTab,
  onTabChange,
  className
}) {
  var _a, _b;
  const [activeTab, setActiveTab] = useState12((_b = defaultTab != null ? defaultTab : (_a = tabs == null ? void 0 : tabs[0]) == null ? void 0 : _a.value) != null ? _b : "");
  function handleTab(v) {
    setActiveTab(v);
    onTabChange == null ? void 0 : onTabChange(v);
  }
  return /* @__PURE__ */ jsx31("div", { className: cn("border-b border-border bg-surface-raised", className), children: /* @__PURE__ */ jsxs28("div", { className: "px-6 pt-6 pb-0", children: [
    /* @__PURE__ */ jsxs28("div", { className: "flex items-start justify-between gap-4 pb-4", children: [
      /* @__PURE__ */ jsxs28("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxs28("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsx31("h1", { className: "text-2xl font-bold text-text-primary leading-tight", children: title }),
          status && /* @__PURE__ */ jsx31(Badge, { variant: statusVariant, children: status }),
          badge
        ] }),
        subtitle && /* @__PURE__ */ jsx31("p", { className: "text-sm text-text-secondary mt-0.5", children: subtitle })
      ] }),
      children && /* @__PURE__ */ jsx31("div", { className: "flex items-center gap-2 shrink-0 flex-wrap justify-end", children })
    ] }),
    tabs && tabs.length > 0 && /* @__PURE__ */ jsx31("div", { role: "tablist", "aria-label": "Detail navigation", className: "flex -mb-px", children: tabs.map((tab) => {
      const isActive = tab.value === activeTab;
      return /* @__PURE__ */ jsx31(
        "button",
        {
          role: "tab",
          "aria-selected": isActive,
          "aria-disabled": tab.disabled,
          onClick: () => !tab.disabled && handleTab(tab.value),
          className: cn(
            "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            isActive ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary hover:border-border-strong",
            tab.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
          ),
          children: tab.label
        },
        tab.value
      );
    }) })
  ] }) });
}

// modules/app/InlineAlert.tsx
import { FontAwesomeIcon as FontAwesomeIcon15 } from "@fortawesome/react-fontawesome";
import { faCheck as faCheck2, faXmark as faXmark3, faCircleInfo, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx32, jsxs as jsxs29 } from "react/jsx-runtime";
var variantClasses = {
  success: "bg-success-subtle border-success text-success-fg",
  error: "bg-error-subtle border-error text-error",
  warning: "bg-warning-subtle border-warning text-text-primary",
  info: "bg-info-subtle border-info text-text-primary"
};
var variantIcons = {
  success: faCheck2,
  error: faXmark3,
  warning: faTriangleExclamation,
  info: faCircleInfo
};
function InlineAlert({ variant = "success", message, className }) {
  return /* @__PURE__ */ jsxs29(
    "div",
    {
      className: cn(
        "rounded-lg border px-4 py-2.5 text-sm font-medium flex items-center gap-1.5",
        variantClasses[variant],
        className
      ),
      children: [
        /* @__PURE__ */ jsx32(FontAwesomeIcon15, { icon: variantIcons[variant], className: "w-3.5 h-3.5 shrink-0", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx32("span", { children: message })
      ]
    }
  );
}

// modules/app/LoadingState.tsx
import { jsx as jsx33, jsxs as jsxs30 } from "react/jsx-runtime";
function LoadingState({
  variant = "spinner",
  rows = 5,
  cols = 4,
  cards = 3,
  className
}) {
  if (variant === "spinner") {
    return /* @__PURE__ */ jsx33("div", { className: cn("flex items-center justify-center py-16", className), children: /* @__PURE__ */ jsx33(Spinner, { size: "lg" }) });
  }
  if (variant === "table") {
    return /* @__PURE__ */ jsx33("div", { className: cn("w-full overflow-x-auto rounded-lg border border-border", className), "aria-busy": "true", "aria-label": "Loading table", children: /* @__PURE__ */ jsxs30("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsx33("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ jsx33("tr", { children: Array.from({ length: cols }, (_, i) => /* @__PURE__ */ jsx33("th", { className: "px-4 py-3", children: /* @__PURE__ */ jsx33("div", { className: "h-3 rounded bg-surface-sunken animate-pulse w-16" }) }, i)) }) }),
      /* @__PURE__ */ jsx33("tbody", { className: "divide-y divide-border bg-surface-base", children: Array.from({ length: rows }, (_, i) => /* @__PURE__ */ jsx33(SkeletonTableRow, { cols }, i)) })
    ] }) });
  }
  if (variant === "cards") {
    return /* @__PURE__ */ jsx33("div", { className: cn("grid gap-4", cards >= 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2", className), children: Array.from({ length: cards }, (_, i) => /* @__PURE__ */ jsx33(SkeletonCard, {}, i)) });
  }
  if (variant === "list") {
    return /* @__PURE__ */ jsx33("ul", { className: cn("divide-y divide-border", className), "aria-busy": "true", "aria-label": "Loading list", children: Array.from({ length: rows }, (_, i) => /* @__PURE__ */ jsxs30("li", { className: "flex items-center gap-3 py-3 px-4", children: [
      /* @__PURE__ */ jsx33(SkeletonAvatar, {}),
      /* @__PURE__ */ jsxs30("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsx33(SkeletonLine, { width: "w-1/3" }),
        /* @__PURE__ */ jsx33(SkeletonLine, { width: "w-2/3" })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "h-4 w-12 rounded bg-surface-sunken animate-pulse" })
    ] }, i)) });
  }
  if (variant === "detail") {
    return /* @__PURE__ */ jsxs30("div", { className: cn("space-y-6", className), "aria-busy": "true", "aria-label": "Loading detail", children: [
      /* @__PURE__ */ jsxs30("div", { className: "pb-4 border-b border-border space-y-3", children: [
        /* @__PURE__ */ jsx33(SkeletonLine, { width: "w-1/4" }),
        /* @__PURE__ */ jsx33(SkeletonLine, { width: "w-1/2" }),
        /* @__PURE__ */ jsx33("div", { className: "flex gap-2", children: Array.from({ length: 3 }, (_, i) => /* @__PURE__ */ jsx33("div", { className: "h-6 w-16 rounded-full bg-surface-sunken animate-pulse" }, i)) })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "grid sm:grid-cols-2 gap-4", children: Array.from({ length: 4 }, (_, i) => /* @__PURE__ */ jsxs30("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx33(SkeletonLine, { width: "w-1/4" }),
        /* @__PURE__ */ jsx33(SkeletonLine, { width: "w-full" })
      ] }, i)) }),
      /* @__PURE__ */ jsx33(SkeletonText, { lines: 4 })
    ] });
  }
  if (variant === "form") {
    return /* @__PURE__ */ jsxs30("div", { className: cn("space-y-5", className), "aria-busy": "true", "aria-label": "Loading form", children: [
      Array.from({ length: rows }, (_, i) => /* @__PURE__ */ jsxs30("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx33(SkeletonLine, { width: "w-1/4" }),
        /* @__PURE__ */ jsx33("div", { className: "h-9 rounded-md bg-surface-sunken animate-pulse w-full" })
      ] }, i)),
      /* @__PURE__ */ jsxs30("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsx33("div", { className: "h-9 w-20 rounded-md bg-surface-sunken animate-pulse" }),
        /* @__PURE__ */ jsx33("div", { className: "h-9 w-24 rounded-md bg-surface-sunken animate-pulse" })
      ] })
    ] });
  }
  return null;
}

// modules/app/EmptyErrorState.tsx
import { FontAwesomeIcon as FontAwesomeIcon16 } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation as faTriangleExclamation2, faMagnifyingGlass as faMagnifyingGlass3, faLock as faLock2, faArrowLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx34, jsxs as jsxs31 } from "react/jsx-runtime";
function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
  retryLabel = "Try again",
  className
}) {
  return /* @__PURE__ */ jsxs31("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ jsx34(
      AlertBanner,
      {
        variant: "error",
        title,
        message,
        action: onRetry ? { label: retryLabel, onClick: onRetry } : void 0
      }
    ),
    onRetry && /* @__PURE__ */ jsx34("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx34(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsx34(FontAwesomeIcon16, { icon: faTriangleExclamation2, className: "w-5 h-5", "aria-hidden": "true" }),
        title: "Unable to load data",
        description: "There was a problem loading this content.",
        action: /* @__PURE__ */ jsx34(Button, { variant: "outline", size: "sm", onClick: onRetry, iconLeft: /* @__PURE__ */ jsx34(FontAwesomeIcon16, { icon: faRotateRight, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: retryLabel })
      }
    ) })
  ] });
}
function NotFoundState({
  title = "Page not found",
  description = "The page you're looking for doesn't exist or has been moved.",
  onGoBack,
  goBackLabel = "Go back",
  className
}) {
  return /* @__PURE__ */ jsx34(
    EmptyState,
    {
      icon: /* @__PURE__ */ jsx34(FontAwesomeIcon16, { icon: faMagnifyingGlass3, className: "w-5 h-5", "aria-hidden": "true" }),
      title,
      description,
      action: onGoBack ? /* @__PURE__ */ jsx34(Button, { variant: "outline", size: "sm", onClick: onGoBack, iconLeft: /* @__PURE__ */ jsx34(FontAwesomeIcon16, { icon: faArrowLeft, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: goBackLabel }) : void 0,
      className
    }
  );
}
function NoAccessState({
  title = "Access denied",
  description = "You don't have permission to view this content.",
  onRequestAccess,
  className
}) {
  return /* @__PURE__ */ jsx34(
    EmptyState,
    {
      icon: /* @__PURE__ */ jsx34(FontAwesomeIcon16, { icon: faLock2, className: "w-5 h-5", "aria-hidden": "true" }),
      title,
      description,
      action: onRequestAccess ? /* @__PURE__ */ jsx34(Button, { variant: "primary", size: "sm", onClick: onRequestAccess, children: "Request access" }) : void 0,
      className
    }
  );
}

// modules/app/NotFoundPage.tsx
import Link from "next/link";
import { FontAwesomeIcon as FontAwesomeIcon17 } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass as faMagnifyingGlass4, faArrowLeft as faArrowLeft2 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx35, jsxs as jsxs32 } from "react/jsx-runtime";
function NotFoundPage({
  title = "Sayfa Bulunamad\u0131",
  description = "Arad\u0131\u011F\u0131n\u0131z sayfa kald\u0131r\u0131lm\u0131\u015F, ta\u015F\u0131nm\u0131\u015F ya da hi\xE7 var olmam\u0131\u015F olabilir.",
  homeHref = "/",
  homeLabel = "Ana Sayfa",
  backLabel = "Geri D\xF6n",
  icon = /* @__PURE__ */ jsx35(FontAwesomeIcon17, { icon: faMagnifyingGlass4, className: "w-8 h-8 text-primary-fg", "aria-hidden": "true" }),
  className
}) {
  return /* @__PURE__ */ jsxs32("div", { className: cn("min-h-screen flex flex-col items-center justify-center px-4 bg-surface-base", className), children: [
    /* @__PURE__ */ jsx35(
      "div",
      {
        className: "select-none text-[120px] sm:text-[180px] font-black leading-none tabular-nums",
        style: {
          background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: 0.15
        },
        children: "404"
      }
    ),
    /* @__PURE__ */ jsx35(
      "div",
      {
        className: "flex h-20 w-20 -mt-8 mb-6 items-center justify-center rounded-2xl text-4xl shadow-lg",
        style: {
          background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
          boxShadow: "0 8px 32px color-mix(in srgb, var(--primary) 30%, transparent)"
        },
        children: icon
      }
    ),
    /* @__PURE__ */ jsx35("h1", { className: "text-2xl sm:text-3xl font-bold text-text-primary text-center", children: title }),
    /* @__PURE__ */ jsx35("p", { className: "mt-3 max-w-md text-center text-text-secondary text-sm sm:text-base leading-relaxed", children: description }),
    /* @__PURE__ */ jsxs32("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxs32(
        Link,
        {
          href: homeHref,
          className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-primary-fg transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          style: {
            background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
            boxShadow: "0 4px 16px color-mix(in srgb, var(--primary) 30%, transparent)"
          },
          children: [
            /* @__PURE__ */ jsx35(FontAwesomeIcon17, { icon: faArrowLeft2, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            homeLabel
          ]
        }
      ),
      /* @__PURE__ */ jsx35(
        "button",
        {
          onClick: () => history.back(),
          className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-text-primary border border-border transition-colors hover:bg-surface-overlay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          children: backLabel
        }
      )
    ] }),
    /* @__PURE__ */ jsx35("div", { className: "mt-16 flex items-center gap-2 opacity-20", "aria-hidden": true, children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx35(
      "span",
      {
        className: "rounded-full bg-primary",
        style: {
          width: i === 2 ? 10 : i === 1 || i === 3 ? 7 : 5,
          height: i === 2 ? 10 : i === 1 || i === 3 ? 7 : 5
        }
      },
      i
    )) })
  ] });
}

// modules/app/SplashScreen.tsx
import { jsx as jsx36, jsxs as jsxs33 } from "react/jsx-runtime";
function SplashScreen({
  visible = true,
  logo,
  message,
  progress,
  className
}) {
  return /* @__PURE__ */ jsxs33(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "aria-label": message != null ? message : "Loading",
      "aria-busy": visible,
      className: cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center gap-6",
        "bg-surface-base transition-opacity duration-500",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        className
      ),
      children: [
        logo ? /* @__PURE__ */ jsx36("div", { className: "flex items-center justify-center", children: logo }) : /* @__PURE__ */ jsx36(Spinner, { size: "xl" }),
        logo && /* @__PURE__ */ jsx36(Spinner, { size: "lg" }),
        progress !== void 0 && /* @__PURE__ */ jsx36("div", { className: "w-48 h-1 rounded-full bg-surface-sunken overflow-hidden", children: /* @__PURE__ */ jsx36(
          "div",
          {
            className: "h-full rounded-full bg-primary transition-all duration-300 ease-out",
            style: { width: `${Math.min(100, Math.max(0, progress))}%` },
            "aria-valuenow": progress,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            role: "progressbar"
          }
        ) }),
        message && /* @__PURE__ */ jsx36("p", { className: "text-sm text-text-secondary animate-pulse", children: message })
      ]
    }
  );
}

// modules/app/NotificationSystem.tsx
import { Fragment as Fragment9, jsx as jsx37, jsxs as jsxs34 } from "react/jsx-runtime";
var notify = {
  success: (message, opts) => toast.success(message, opts),
  error: (message, opts) => toast.error(message, opts),
  warning: (message, opts) => toast.warning(message, opts),
  info: (message, opts) => toast.info(message, opts),
  loading: (message, opts) => toast.loading(message, opts),
  dismiss: (id) => toast.dismiss(id)
};
function NotificationProvider({
  children,
  position = "top-right"
}) {
  return /* @__PURE__ */ jsxs34(Fragment9, { children: [
    children,
    /* @__PURE__ */ jsx37(ToastProvider, { position })
  ] });
}

// modules/app/AccessibilityKit.tsx
import { useCallback as useCallback6, useEffect as useEffect9, useRef as useRef6, useState as useState13 } from "react";
import { createPortal } from "react-dom";
import { Fragment as Fragment10, jsx as jsx38, jsxs as jsxs35 } from "react/jsx-runtime";
function FocusTrap({ active = true, onEscape, className, children }) {
  const ref = useRef6(null);
  useFocusTrap(ref, { active, onEscape });
  return /* @__PURE__ */ jsx38("div", { ref, tabIndex: -1, className, children });
}
var listeners2 = /* @__PURE__ */ new Set();
var queue = { polite: "", assertive: "" };
function setQueue(next) {
  queue = next;
  for (const fn of listeners2) fn(next);
}
function useAnnounce() {
  return useCallback6((message, politeness = "polite") => {
    setQueue(__spreadProps(__spreadValues({}, queue), { [politeness]: "" }));
    window.setTimeout(() => {
      setQueue(__spreadProps(__spreadValues({}, queue), { [politeness]: message }));
    }, 16);
  }, []);
}
function AnnouncerOutlet() {
  const [{ polite, assertive }, setLocal] = useState13(queue);
  const [mounted, setMounted] = useState13(false);
  useEffect9(() => {
    setMounted(true);
    listeners2.add(setLocal);
    return () => {
      listeners2.delete(setLocal);
    };
  }, []);
  if (!mounted) return null;
  return createPortal(
    /* @__PURE__ */ jsxs35(Fragment10, { children: [
      /* @__PURE__ */ jsx38("div", { role: "status", "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: polite }),
      /* @__PURE__ */ jsx38("div", { role: "alert", "aria-live": "assertive", "aria-atomic": "true", className: "sr-only", children: assertive })
    ] }),
    document.body
  );
}

// modules/app/MaintenancePage.tsx
import { useEffect as useEffect10, useState as useState14 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon18 } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faClock as faClock2, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx39, jsxs as jsxs36 } from "react/jsx-runtime";
function formatRemaining(targetMs, nowMs) {
  const ms = targetMs - nowMs;
  if (ms <= 0) return "00:00:00";
  const totalSec = Math.floor(ms / 1e3);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor(totalSec % 3600 / 60);
  const s = totalSec % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}
function MaintenancePage({
  title = "System Maintenance",
  description = "We're performing a short maintenance to improve service quality. We'll be back shortly.",
  eta,
  statusUrl,
  statusLabel = "Status Page",
  icon,
  className
}) {
  const etaMs = eta ? new Date(eta).getTime() : null;
  const [nowMs, setNowMs] = useState14(() => Date.now());
  useEffect10(() => {
    if (etaMs === null) return;
    const id = window.setInterval(() => setNowMs(Date.now()), 1e3);
    return () => window.clearInterval(id);
  }, [etaMs]);
  const remaining = etaMs !== null ? formatRemaining(etaMs, nowMs) : null;
  return /* @__PURE__ */ jsxs36(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: cn(
        "min-h-screen flex flex-col items-center justify-center px-4 bg-surface-base",
        className
      ),
      children: [
        /* @__PURE__ */ jsx39(
          "div",
          {
            className: "flex h-20 w-20 mb-6 items-center justify-center rounded-2xl text-4xl shadow-lg",
            style: {
              background: "linear-gradient(135deg, var(--warning) 0%, var(--primary) 100%)",
              boxShadow: "0 8px 32px color-mix(in srgb, var(--warning) 30%, transparent)"
            },
            children: icon != null ? icon : /* @__PURE__ */ jsx39(
              FontAwesomeIcon18,
              {
                icon: faScrewdriverWrench,
                className: "w-8 h-8 text-text-inverse",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx39("h1", { className: "text-2xl sm:text-3xl font-bold text-text-primary text-center", children: title }),
        /* @__PURE__ */ jsx39("p", { className: "mt-3 max-w-md text-center text-text-secondary text-sm sm:text-base leading-relaxed", children: description }),
        remaining && /* @__PURE__ */ jsxs36("div", { className: "mt-6 flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx39("span", { className: "text-xs uppercase tracking-wide text-text-disabled", children: "Estimated Return" }),
          /* @__PURE__ */ jsxs36(Badge, { variant: "warning", size: "lg", children: [
            /* @__PURE__ */ jsx39(FontAwesomeIcon18, { icon: faClock2, className: "w-3 h-3", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx39("span", { className: "font-mono tabular-nums", children: remaining })
          ] })
        ] }),
        statusUrl && /* @__PURE__ */ jsxs36(
          "a",
          {
            href: statusUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: cn(
              "mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold",
              "text-text-primary border border-border transition-colors hover:bg-surface-overlay",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            ),
            children: [
              statusLabel,
              /* @__PURE__ */ jsx39(
                FontAwesomeIcon18,
                {
                  icon: faArrowUpRightFromSquare,
                  className: "w-3.5 h-3.5",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx39("div", { className: "mt-16 flex items-center gap-2 opacity-20", "aria-hidden": true, children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx39(
          "span",
          {
            className: "rounded-full bg-warning",
            style: {
              width: i === 2 ? 10 : i === 1 || i === 3 ? 7 : 5,
              height: i === 2 ? 10 : i === 1 || i === 3 ? 7 : 5
            }
          },
          i
        )) })
      ]
    }
  );
}

// modules/app/ShareDialog.tsx
import { useId as useId4, useMemo as useMemo5, useState as useState15 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon19 } from "@fortawesome/react-fontawesome";
import {
  faCopy as faCopy2,
  faCheck as faCheck3,
  faPaperPlane,
  faXmark as faXmark4,
  faLink,
  faEnvelope as faEnvelope2
} from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx40, jsxs as jsxs37 } from "react/jsx-runtime";
var DEFAULT_PERMISSIONS = [
  { value: "viewer", label: "Viewer" },
  { value: "commenter", label: "Commenter" },
  { value: "editor", label: "Editor" }
];
var permissionBadgeClass = {
  viewer: "bg-surface-sunken text-text-secondary",
  commenter: "bg-info-subtle text-info-fg",
  editor: "bg-primary-subtle text-primary",
  owner: "bg-warning-subtle text-warning-fg"
};
function ShareDialog({
  open,
  onClose,
  title = "Share",
  description = "Invite people or copy the link.",
  shareUrl,
  invitees = [],
  permissions = DEFAULT_PERMISSIONS,
  defaultPermission = "viewer",
  onInvite,
  onRemove,
  onPermissionChange,
  portalTarget
}) {
  const linkId = useId4();
  const emailId = useId4();
  const permId = useId4();
  const [email, setEmail] = useState15("");
  const [permission, setPermission] = useState15(defaultPermission);
  const [copied, setCopied] = useState15(false);
  const [inviting, setInviting] = useState15(false);
  const [error, setError] = useState15(null);
  const emailValid = useMemo5(() => /.+@.+\..+/.test(email.trim()), [email]);
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setError("Couldn't copy link.");
    }
  }
  async function handleInvite() {
    if (!emailValid) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setInviting(true);
    try {
      await (onInvite == null ? void 0 : onInvite(email.trim(), permission));
      setEmail("");
    } finally {
      setInviting(false);
    }
  }
  return /* @__PURE__ */ jsx40(Modal, { open, onClose, title, description, size: "lg", portalTarget, children: /* @__PURE__ */ jsxs37("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxs37("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsx40("label", { htmlFor: linkId, className: "block text-sm font-medium text-text-primary", children: "Shareable Link" }),
      /* @__PURE__ */ jsxs37("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxs37("div", { className: "flex flex-1 items-center gap-2 rounded-md border border-border bg-surface-base px-3 py-2 text-sm", children: [
          /* @__PURE__ */ jsx40(
            FontAwesomeIcon19,
            {
              icon: faLink,
              className: "w-3.5 h-3.5 text-text-disabled shrink-0",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx40(
            "input",
            {
              id: linkId,
              type: "text",
              value: shareUrl,
              readOnly: true,
              onFocus: (e) => e.currentTarget.select(),
              className: "flex-1 bg-transparent text-text-primary focus-visible:outline-none truncate"
            }
          )
        ] }),
        /* @__PURE__ */ jsx40(
          Button,
          {
            variant: copied ? "secondary" : "primary",
            onClick: copyLink,
            iconLeft: /* @__PURE__ */ jsx40(
              FontAwesomeIcon19,
              {
                icon: copied ? faCheck3 : faCopy2,
                className: "w-3.5 h-3.5",
                "aria-hidden": "true"
              }
            ),
            children: copied ? "Copied" : "Copy"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs37("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx40("label", { htmlFor: emailId, className: "block text-sm font-medium text-text-primary", children: "Invite People" }),
      /* @__PURE__ */ jsxs37("div", { className: "flex items-center gap-2 rounded-md border border-border bg-surface-base px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-border-focus", children: [
        /* @__PURE__ */ jsx40(
          FontAwesomeIcon19,
          {
            icon: faEnvelope2,
            className: "w-3.5 h-3.5 text-text-disabled shrink-0",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx40(
          "input",
          {
            id: emailId,
            type: "email",
            value: email,
            onChange: (e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            },
            placeholder: "name@example.com",
            "aria-invalid": !!error,
            "aria-describedby": error ? `${emailId}-error` : void 0,
            className: "w-full bg-transparent text-text-primary placeholder:text-text-disabled focus-visible:outline-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs37("div", { className: "flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsx40(
          "select",
          {
            id: permId,
            value: permission,
            onChange: (e) => setPermission(e.target.value),
            "aria-label": "Select permission",
            className: cn(
              "rounded-md border border-border bg-surface-base px-3 py-2 text-sm text-text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            ),
            children: permissions.map((p) => /* @__PURE__ */ jsx40("option", { value: p.value, children: p.label }, p.value))
          }
        ),
        /* @__PURE__ */ jsx40(
          Button,
          {
            onClick: handleInvite,
            loading: inviting,
            disabled: !emailValid || inviting,
            iconLeft: /* @__PURE__ */ jsx40(FontAwesomeIcon19, { icon: faPaperPlane, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: "Invite"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx40("p", { id: `${emailId}-error`, className: "text-xs text-error", role: "alert", children: error })
    ] }),
    invitees.length > 0 && /* @__PURE__ */ jsxs37("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs37("p", { className: "text-xs uppercase tracking-wide text-text-disabled font-medium", children: [
        "People with access (",
        invitees.length,
        ")"
      ] }),
      /* @__PURE__ */ jsx40("ul", { className: "divide-y divide-border rounded-md border border-border bg-surface-base", children: invitees.map((inv) => {
        var _a;
        return /* @__PURE__ */ jsxs37("li", { className: "flex items-center gap-3 px-3 py-2", children: [
          /* @__PURE__ */ jsx40(Avatar, { src: (_a = inv.avatarUrl) != null ? _a : void 0, name: inv.name, size: "sm" }),
          /* @__PURE__ */ jsxs37("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx40("p", { className: "text-sm font-medium text-text-primary truncate", children: inv.name }),
            /* @__PURE__ */ jsx40("p", { className: "text-xs text-text-secondary truncate", children: inv.email })
          ] }),
          inv.permission === "owner" ? /* @__PURE__ */ jsx40(
            "span",
            {
              className: cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                permissionBadgeClass.owner
              ),
              children: "Owner"
            }
          ) : /* @__PURE__ */ jsx40(
            "select",
            {
              value: inv.permission,
              onChange: (e) => onPermissionChange == null ? void 0 : onPermissionChange(inv.id, e.target.value),
              "aria-label": `Permission for ${inv.name}`,
              className: cn(
                "rounded-md border border-border bg-surface-base px-2 py-1 text-xs text-text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: permissions.map((p) => /* @__PURE__ */ jsx40("option", { value: p.value, children: p.label }, p.value))
            }
          ),
          inv.permission !== "owner" && onRemove && /* @__PURE__ */ jsx40(
            "button",
            {
              type: "button",
              onClick: () => onRemove(inv.id),
              "aria-label": `Remove ${inv.name}'s access`,
              className: cn(
                "shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md text-text-disabled",
                "hover:text-error hover:bg-error-subtle transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: /* @__PURE__ */ jsx40(FontAwesomeIcon19, { icon: faXmark4, className: "w-3 h-3", "aria-hidden": "true" })
            }
          )
        ] }, inv.id);
      }) })
    ] })
  ] }) });
}

// modules/app/CommentThread.tsx
import { useState as useState16, useId as useId5 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon20 } from "@fortawesome/react-fontawesome";
import {
  faReply,
  faHeart,
  faTrash as faTrash2,
  faPaperPlane as faPaperPlane2,
  faXmark as faXmark5
} from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx41, jsxs as jsxs38 } from "react/jsx-runtime";
function defaultFormat(value) {
  const date = value instanceof Date ? value : new Date(value);
  const diff = (Date.now() - date.getTime()) / 1e3;
  if (diff < 60) return `${Math.floor(diff)}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return date.toLocaleDateString();
}
function CommentNode({
  comment,
  depth,
  maxDepth,
  currentUserId,
  onReply,
  onDelete,
  onLike,
  formatTimestamp,
  placeholder
}) {
  var _a, _b;
  const [replying, setReplying] = useState16(false);
  const [draft, setDraft] = useState16("");
  const [submitting, setSubmitting] = useState16(false);
  const replyId = useId5();
  const canReply = onReply && depth < maxDepth;
  const isOwn = currentUserId && comment.author.id === currentUserId;
  async function submitReply() {
    if (!draft.trim() || !onReply) return;
    setSubmitting(true);
    try {
      await onReply(comment.id, draft.trim());
      setDraft("");
      setReplying(false);
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxs38("li", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsx41(Avatar, { src: (_a = comment.author.avatarUrl) != null ? _a : void 0, name: comment.author.name, size: "sm" }),
    /* @__PURE__ */ jsxs38("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxs38("div", { className: "rounded-lg bg-surface-overlay px-3 py-2", children: [
        /* @__PURE__ */ jsxs38("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx41("span", { className: "text-sm font-semibold text-text-primary truncate", children: comment.author.name }),
          /* @__PURE__ */ jsx41(
            "time",
            {
              dateTime: comment.createdAt instanceof Date ? comment.createdAt.toISOString() : String(comment.createdAt),
              className: "text-xs text-text-disabled shrink-0",
              children: formatTimestamp(comment.createdAt)
            }
          )
        ] }),
        /* @__PURE__ */ jsx41("p", { className: "mt-1 text-sm text-text-primary whitespace-pre-wrap break-words", children: comment.body })
      ] }),
      /* @__PURE__ */ jsxs38("div", { className: "mt-1 flex items-center gap-3 px-1 text-xs text-text-secondary", children: [
        onLike && /* @__PURE__ */ jsxs38(
          "button",
          {
            type: "button",
            onClick: () => onLike(comment.id, !comment.likedByMe),
            "aria-pressed": !!comment.likedByMe,
            className: cn(
              "inline-flex items-center gap-1 transition-colors hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              comment.likedByMe && "text-primary"
            ),
            children: [
              /* @__PURE__ */ jsx41(FontAwesomeIcon20, { icon: faHeart, className: "w-3 h-3", "aria-hidden": "true" }),
              (_b = comment.likeCount) != null ? _b : 0
            ]
          }
        ),
        canReply && /* @__PURE__ */ jsxs38(
          "button",
          {
            type: "button",
            onClick: () => setReplying((v) => !v),
            "aria-expanded": replying,
            className: cn(
              "inline-flex items-center gap-1 transition-colors hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded"
            ),
            children: [
              /* @__PURE__ */ jsx41(FontAwesomeIcon20, { icon: faReply, className: "w-3 h-3", "aria-hidden": "true" }),
              "Reply"
            ]
          }
        ),
        isOwn && onDelete && /* @__PURE__ */ jsxs38(
          "button",
          {
            type: "button",
            onClick: () => onDelete(comment.id),
            className: cn(
              "inline-flex items-center gap-1 ml-auto transition-colors hover:text-error",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded"
            ),
            children: [
              /* @__PURE__ */ jsx41(FontAwesomeIcon20, { icon: faTrash2, className: "w-3 h-3", "aria-hidden": "true" }),
              "Delete"
            ]
          }
        )
      ] }),
      replying && /* @__PURE__ */ jsxs38("div", { className: "mt-2 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs38("label", { htmlFor: replyId, className: "sr-only", children: [
          "Reply to ",
          comment.author.name
        ] }),
        /* @__PURE__ */ jsx41(
          "textarea",
          {
            id: replyId,
            value: draft,
            onChange: (e) => setDraft(e.target.value),
            placeholder,
            rows: 2,
            className: cn(
              "block w-full rounded-md border border-border bg-surface-base px-3 py-2 text-sm text-text-primary",
              "placeholder:text-text-disabled resize-y",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:border-border-focus"
            )
          }
        ),
        /* @__PURE__ */ jsxs38("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ jsx41(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                setReplying(false);
                setDraft("");
              },
              iconLeft: /* @__PURE__ */ jsx41(FontAwesomeIcon20, { icon: faXmark5, className: "w-3 h-3", "aria-hidden": "true" }),
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx41(
            Button,
            {
              size: "sm",
              onClick: submitReply,
              loading: submitting,
              disabled: !draft.trim() || submitting,
              iconLeft: /* @__PURE__ */ jsx41(FontAwesomeIcon20, { icon: faPaperPlane2, className: "w-3 h-3", "aria-hidden": "true" }),
              children: "Reply"
            }
          )
        ] })
      ] }),
      comment.replies && comment.replies.length > 0 && /* @__PURE__ */ jsx41("ul", { className: "mt-3 space-y-3 border-l border-border pl-4", children: comment.replies.map((child) => /* @__PURE__ */ jsx41(
        CommentNode,
        {
          comment: child,
          depth: depth + 1,
          maxDepth,
          currentUserId,
          onReply,
          onDelete,
          onLike,
          formatTimestamp,
          placeholder
        },
        child.id
      )) })
    ] })
  ] });
}
function CommentThread({
  comments,
  currentUserId,
  maxDepth = 3,
  onReply,
  onDelete,
  onLike,
  formatTimestamp = defaultFormat,
  emptyMessage = "No comments yet. Be the first to comment.",
  placeholder = "Write a comment\u2026",
  className
}) {
  const [draft, setDraft] = useState16("");
  const [submitting, setSubmitting] = useState16(false);
  const rootId = useId5();
  async function submitRoot() {
    if (!draft.trim() || !onReply) return;
    setSubmitting(true);
    try {
      await onReply(null, draft.trim());
      setDraft("");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxs38("section", { className: cn("space-y-4", className), "aria-label": "Comments", children: [
    onReply && /* @__PURE__ */ jsxs38("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx41("label", { htmlFor: rootId, className: "sr-only", children: "New comment" }),
      /* @__PURE__ */ jsx41(
        "textarea",
        {
          id: rootId,
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          placeholder,
          rows: 3,
          className: cn(
            "block w-full rounded-md border border-border bg-surface-base px-3 py-2 text-sm text-text-primary",
            "placeholder:text-text-disabled resize-y",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:border-border-focus"
          )
        }
      ),
      /* @__PURE__ */ jsx41("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx41(
        Button,
        {
          onClick: submitRoot,
          loading: submitting,
          disabled: !draft.trim() || submitting,
          iconLeft: /* @__PURE__ */ jsx41(FontAwesomeIcon20, { icon: faPaperPlane2, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
          children: "Post Comment"
        }
      ) })
    ] }),
    comments.length === 0 ? /* @__PURE__ */ jsx41("p", { className: "rounded-md border border-dashed border-border bg-surface-base px-4 py-6 text-center text-sm text-text-secondary", children: emptyMessage }) : /* @__PURE__ */ jsx41("ul", { className: "space-y-4", children: comments.map((c) => /* @__PURE__ */ jsx41(
      CommentNode,
      {
        comment: c,
        depth: 0,
        maxDepth,
        currentUserId,
        onReply,
        onDelete,
        onLike,
        formatTimestamp,
        placeholder
      },
      c.id
    )) })
  ] });
}

// modules/app/MentionPicker.tsx
import { useEffect as useEffect11, useMemo as useMemo6, useRef as useRef7, useState as useState17 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon21 } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx42, jsxs as jsxs39 } from "react/jsx-runtime";
function defaultFilter(user, query) {
  var _a;
  if (!query) return true;
  const q = query.toLowerCase();
  return user.name.toLowerCase().includes(q) || ((_a = user.handle) != null ? _a : "").toLowerCase().includes(q);
}
function MentionPicker({
  users,
  query = "",
  open = true,
  position,
  maxItems = 6,
  emptyMessage = "No matching users",
  onSelect,
  onCancel,
  filter = defaultFilter,
  className
}) {
  const [active, setActive] = useState17(0);
  const containerRef = useRef7(null);
  const itemRefs = useRef7([]);
  const filtered = useMemo6(
    () => users.filter((u) => filter(u, query)).slice(0, maxItems),
    [users, query, filter, maxItems]
  );
  const safeActive = filtered.length === 0 ? 0 : Math.min(active, filtered.length - 1);
  useEffect11(() => {
    var _a;
    (_a = itemRefs.current[safeActive]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }, [safeActive]);
  useEffect11(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => filtered.length ? (a + 1) % filtered.length : 0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => filtered.length ? (a - 1 + filtered.length) % filtered.length : 0);
      } else if (e.key === "Enter" || e.key === "Tab") {
        if (filtered.length > 0) {
          e.preventDefault();
          const idx = Math.min(safeActive, filtered.length - 1);
          onSelect(filtered[idx]);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onCancel == null ? void 0 : onCancel();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, safeActive, onSelect, onCancel]);
  useEffect11(() => {
    if (!open || !onCancel) return;
    function onClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onCancel == null ? void 0 : onCancel();
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, onCancel]);
  if (!open) return null;
  const style = position ? { position: "absolute", top: position.top, left: position.left } : void 0;
  return /* @__PURE__ */ jsxs39(
    "div",
    {
      ref: containerRef,
      role: "listbox",
      "aria-label": "Users to mention",
      style,
      className: cn(
        "z-50 w-72 rounded-lg border border-border bg-surface-raised shadow-lg overflow-hidden",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs39("div", { className: "flex items-center gap-2 border-b border-border px-3 py-2 text-xs text-text-secondary", children: [
          /* @__PURE__ */ jsx42(FontAwesomeIcon21, { icon: faAt, className: "w-3 h-3 text-text-disabled", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx42("span", { className: "font-medium", children: query ? `"${query}"` : "Mention\u2026" })
        ] }),
        filtered.length === 0 ? /* @__PURE__ */ jsx42("p", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: emptyMessage }) : /* @__PURE__ */ jsx42("ul", { className: "max-h-64 overflow-y-auto py-1", children: filtered.map((user, i) => {
          var _a, _b;
          const isActive = i === safeActive;
          return /* @__PURE__ */ jsxs39(
            "li",
            {
              ref: (node) => {
                itemRefs.current[i] = node;
              },
              role: "option",
              "aria-selected": isActive,
              onMouseEnter: () => setActive(i),
              onMouseDown: (e) => {
                e.preventDefault();
                onSelect(user);
              },
              className: cn(
                "flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors",
                isActive ? "bg-surface-overlay" : "hover:bg-surface-overlay"
              ),
              children: [
                /* @__PURE__ */ jsx42(Avatar, { src: (_a = user.avatarUrl) != null ? _a : void 0, name: user.name, size: "sm" }),
                /* @__PURE__ */ jsxs39("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx42("p", { className: "text-sm font-medium text-text-primary truncate", children: user.name }),
                  /* @__PURE__ */ jsx42("p", { className: "text-xs text-text-secondary truncate", children: user.handle ? `@${user.handle}` : (_b = user.subtitle) != null ? _b : "" })
                ] })
              ]
            },
            user.id
          );
        }) })
      ]
    }
  );
}

// modules/app/OnboardingWizard.tsx
import { useState as useState18 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon22 } from "@fortawesome/react-fontawesome";
import { faArrowRight as faArrowRight2, faArrowLeft as faArrowLeft3, faCheck as faCheck4, faXmark as faXmark6 } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx43, jsxs as jsxs40 } from "react/jsx-runtime";
function ProgressBar({ value, total }) {
  const pct = total > 0 ? Math.min(100, Math.max(0, (value + 1) / total * 100)) : 0;
  return /* @__PURE__ */ jsx43(
    "div",
    {
      className: "h-1 w-full rounded-full bg-surface-sunken overflow-hidden",
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": total,
      "aria-valuenow": value + 1,
      children: /* @__PURE__ */ jsx43(
        "div",
        {
          className: "h-full bg-primary transition-[width] duration-300",
          style: { width: `${pct}%` }
        }
      )
    }
  );
}
function ProgressDots({ value, total }) {
  return /* @__PURE__ */ jsx43(
    "div",
    {
      className: "flex items-center gap-2",
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": total,
      "aria-valuenow": value + 1,
      children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ jsx43(
        "span",
        {
          className: cn(
            "h-2 rounded-full transition-all",
            i === value ? "w-6 bg-primary" : i < value ? "w-2 bg-primary" : "w-2 bg-surface-sunken"
          ),
          "aria-hidden": "true"
        },
        i
      ))
    }
  );
}
function OnboardingWizard({
  steps,
  mode = "page",
  open = true,
  initialStep = 0,
  title = "Welcome",
  allowSkip = true,
  onStepChange,
  onComplete,
  onSkip,
  onClose,
  nextLabel = "Next",
  prevLabel = "Back",
  skipLabel = "Skip",
  completeLabel = "Finish",
  indicator = "dots",
  className
}) {
  const [current, setCurrent] = useState18(Math.min(Math.max(initialStep, 0), steps.length - 1));
  const [completing, setCompleting] = useState18(false);
  function setStep(next) {
    const clamped = Math.min(Math.max(next, 0), steps.length - 1);
    setCurrent(clamped);
    onStepChange == null ? void 0 : onStepChange(clamped);
  }
  function goNext() {
    setStep(current + 1);
  }
  function goPrev() {
    setStep(current - 1);
  }
  async function complete() {
    setCompleting(true);
    try {
      await (onComplete == null ? void 0 : onComplete());
    } finally {
      setCompleting(false);
    }
  }
  const step = steps[current];
  if (!step) return null;
  const isLast = current === steps.length - 1;
  const isFirst = current === 0;
  const body = /* @__PURE__ */ jsxs40("div", { className: cn("flex flex-col gap-6", className), children: [
    /* @__PURE__ */ jsxs40("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxs40("span", { className: "text-xs uppercase tracking-wide text-text-disabled font-medium shrink-0", children: [
        current + 1,
        " / ",
        steps.length
      ] }),
      /* @__PURE__ */ jsx43("div", { className: "flex-1", children: indicator === "bar" ? /* @__PURE__ */ jsx43(ProgressBar, { value: current, total: steps.length }) : /* @__PURE__ */ jsx43(ProgressDots, { value: current, total: steps.length }) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsx43("h2", { className: "text-lg font-semibold text-text-primary", children: step.title }),
      step.description && /* @__PURE__ */ jsx43("p", { className: "mt-1 text-sm text-text-secondary", children: step.description })
    ] }),
    /* @__PURE__ */ jsx43("div", { className: "min-h-[8rem]", children: typeof step.content === "function" ? step.content({ goNext, goPrev }) : step.content }),
    /* @__PURE__ */ jsxs40("div", { className: "flex items-center justify-between gap-3 pt-4 border-t border-border", children: [
      /* @__PURE__ */ jsx43("div", { children: !isFirst && /* @__PURE__ */ jsx43(
        Button,
        {
          variant: "outline",
          onClick: goPrev,
          iconLeft: /* @__PURE__ */ jsx43(FontAwesomeIcon22, { icon: faArrowLeft3, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
          children: prevLabel
        }
      ) }),
      /* @__PURE__ */ jsxs40("div", { className: "flex items-center gap-2", children: [
        allowSkip && !isLast && /* @__PURE__ */ jsx43(
          Button,
          {
            variant: "ghost",
            onClick: () => onSkip == null ? void 0 : onSkip(),
            iconLeft: /* @__PURE__ */ jsx43(FontAwesomeIcon22, { icon: faXmark6, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: skipLabel
          }
        ),
        isLast ? /* @__PURE__ */ jsx43(
          Button,
          {
            onClick: complete,
            loading: completing,
            iconLeft: /* @__PURE__ */ jsx43(FontAwesomeIcon22, { icon: faCheck4, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: completeLabel
          }
        ) : /* @__PURE__ */ jsx43(
          Button,
          {
            onClick: goNext,
            iconRight: /* @__PURE__ */ jsx43(FontAwesomeIcon22, { icon: faArrowRight2, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: nextLabel
          }
        )
      ] })
    ] })
  ] });
  if (mode === "modal") {
    return /* @__PURE__ */ jsx43(
      Modal,
      {
        open,
        onClose: onClose != null ? onClose : (() => void 0),
        title,
        size: "lg",
        closeOnBackdropClick: false,
        children: body
      }
    );
  }
  return /* @__PURE__ */ jsx43("div", { className: "mx-auto w-full max-w-2xl rounded-xl border border-border bg-surface-raised p-6 shadow-sm", children: body });
}

export {
  AppShell,
  AppSidebar,
  AppTopBar,
  AppDrawer,
  AppFooter,
  AppBreadcrumbs,
  SectionCard,
  NavDrawer,
  AppNav,
  GlobalSearch,
  AppCommandBar,
  ContextMenu,
  ImageGallery,
  FormField,
  FilterBar,
  StepFlow,
  StepShell,
  FileUploadSection,
  DetailHeader,
  InlineAlert,
  LoadingState,
  ErrorState,
  NotFoundState,
  NoAccessState,
  NotFoundPage,
  SplashScreen,
  notify,
  NotificationProvider,
  FocusTrap,
  useAnnounce,
  AnnouncerOutlet,
  MaintenancePage,
  ShareDialog,
  CommentThread,
  MentionPicker,
  OnboardingWizard
};
