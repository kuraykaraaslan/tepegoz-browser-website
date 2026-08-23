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

// modules/app/index.ts
var app_exports = {};
__export(app_exports, {
  Announcer: () => Announcer,
  AnnouncerOutlet: () => AnnouncerOutlet,
  AppBreadcrumbs: () => AppBreadcrumbs,
  AppCommandBar: () => AppCommandBar,
  AppDrawer: () => AppDrawer,
  AppFooter: () => AppFooter,
  AppNav: () => AppNav,
  AppShell: () => AppShell,
  AppSidebar: () => AppSidebar,
  AppTopBar: () => AppTopBar,
  CommentThread: () => CommentThread,
  ContextMenu: () => ContextMenu,
  DetailHeader: () => DetailHeader,
  ErrorState: () => ErrorState,
  FileUploadSection: () => FileUploadSection,
  FilterBar: () => FilterBar,
  FocusTrap: () => FocusTrap,
  Form: () => Form,
  FormField: () => FormField,
  GlobalSearch: () => GlobalSearch,
  ImageGallery: () => ImageGallery,
  InlineAlert: () => InlineAlert,
  LiveRegion: () => LiveRegion,
  LoadingState: () => LoadingState,
  MaintenancePage: () => MaintenancePage,
  MentionPicker: () => MentionPicker,
  NavDrawer: () => NavDrawer,
  NoAccessState: () => NoAccessState,
  NotFoundPage: () => NotFoundPage,
  NotFoundState: () => NotFoundState,
  NotificationProvider: () => NotificationProvider,
  OnboardingWizard: () => OnboardingWizard,
  SectionCard: () => SectionCard,
  ShareDialog: () => ShareDialog,
  SkipLink: () => SkipLink,
  SplashScreen: () => SplashScreen,
  StepFlow: () => StepFlow,
  StepShell: () => StepShell,
  ThemeSwitcher: () => ThemeSwitcher,
  Tooltip: () => Tooltip,
  notify: () => notify,
  toast: () => toast,
  useAnnounce: () => useAnnounce
});
module.exports = __toCommonJS(app_exports);

// libs/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// modules/ui/Overlays/Drawer/index.tsx
var import_react5 = require("react");
var import_react_dom = require("react-dom");
var import_react_fontawesome = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");

// modules/ui/Overlays/shared/useFocusTrap.ts
var import_react = require("react");
var FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
var layerStack = [];
function isTopLayer(ref) {
  return layerStack[layerStack.length - 1] === ref;
}
function useFocusTrap(ref, { active, onEscape, handleEscape = true }) {
  (0, import_react.useEffect)(() => {
    if (!active) return;
    layerStack.push(ref);
    return () => {
      const idx = layerStack.lastIndexOf(ref);
      if (idx !== -1) layerStack.splice(idx, 1);
    };
  }, [active, ref]);
  (0, import_react.useEffect)(() => {
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
  const handleKeyDown = (0, import_react.useCallback)(
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
  (0, import_react.useEffect)(() => {
    if (!active) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, handleKeyDown]);
}

// modules/ui/Overlays/shared/useScrollLock.ts
var import_react2 = require("react");
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
  (0, import_react2.useEffect)(() => {
    if (!active) return;
    lock();
    return () => unlock();
  }, [active]);
}

// modules/ui/Overlays/shared/usePresence.ts
var import_react3 = require("react");
var EXIT_MS = 250;
function usePresence(open) {
  const [state, setState] = (0, import_react3.useState)(open ? "open" : "closed");
  (0, import_react3.useEffect)(() => {
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
var import_react4 = require("react");
function usePortal(target) {
  const [node, setNode] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
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
var import_jsx_runtime = require("react/jsx-runtime");
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
  const panelRef = (0, import_react5.useRef)(null);
  const { mounted, state } = usePresence(open);
  useFocusTrap(panelRef, { active: open, onEscape: onClose });
  useScrollLock(open);
  useRouteClose({ active: open, closeOnRouteChange, onClose });
  const portalNode = usePortal(portalTarget);
  if (!mounted) return null;
  const node = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-3 px-4 py-4 border-b border-border shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-base font-semibold text-text-primary", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close drawer",
                    className: "text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faXmark, className: "w-4 h-4", "aria-hidden": "true" })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 min-h-0 overflow-y-auto px-4 py-4", children }),
              footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "px-4 py-4 border-t border-border shrink-0", children: footer })
            ]
          }
        )
      ]
    }
  );
  if (!portalNode) return null;
  return (0, import_react_dom.createPortal)(node, portalNode);
}

// modules/app/AppShell.tsx
var import_react6 = require("react");
var import_react_fontawesome2 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const [mobileSidebarOpen, setMobileSidebarOpen] = (0, import_react6.useState)(false);
  const logoContent = sidebarCollapsed && compactLogo ? compactLogo : logo != null ? logo : compactLogo;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", __spreadProps(__spreadValues({ className: cn("flex h-screen overflow-hidden bg-surface-base", className) }, rest), { children: [
    sidebar && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("aside", { className: cn("relative hidden lg:flex flex-col h-full min-h-0 shrink-0 border-r border-border bg-surface-raised", asideClassName), children: [
      logoContent && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: cn(
        "absolute inset-x-0 top-0 z-10 flex items-center h-14 border-b border-border bg-surface-raised overflow-hidden",
        sidebarCollapsed && compactLogo ? "justify-center px-2" : "px-4"
      ), children: logoContent }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: cn("flex min-h-0 flex-1", logoContent && "pt-14"), children: sidebar })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-1 flex-col min-w-0 min-h-0", children: [
      topbar && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: cn("sticky top-0 z-30 flex items-center h-14 px-4 border-b border-border bg-surface-raised/90 backdrop-blur shrink-0", headerClassName), children: [
        sidebar && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setMobileSidebarOpen(true),
            "aria-label": "Open sidebar",
            className: "inline-flex lg:hidden items-center justify-center w-9 h-9 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_fontawesome2.FontAwesomeIcon, { icon: import_free_solid_svg_icons2.faBars, className: "w-4 h-4", "aria-hidden": "true" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex min-w-0 flex-1", children: topbar })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("main", { id: "main-content", className: cn("flex-1 overflow-y-auto p-4 sm:p-6", mainClassName), children })
    ] }),
    sidebar && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Drawer,
      {
        open: mobileSidebarOpen,
        onClose: () => setMobileSidebarOpen(false),
        title: mobileSidebarTitle,
        side: "left",
        className: "w-72",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "-mx-4 -my-4 h-[calc(100%+2rem)] flex flex-col", children: sidebar })
      }
    ) })
  ] }));
}

// modules/app/AppSidebar.tsx
var import_react7 = require("react");

// libs/utils/isBrowser.ts
var isBrowser = typeof window !== "undefined";

// modules/ui/Badge.tsx
var import_react_fontawesome3 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime3 = require("react/jsx-runtime");
var variantMap = {
  success: "bg-success-subtle text-success-fg",
  error: "bg-error-subtle text-error-fg",
  warning: "bg-warning-subtle text-warning-fg",
  info: "bg-info-subtle text-info-fg",
  neutral: "bg-surface-sunken text-text-secondary",
  primary: "bg-primary-subtle text-primary"
};
var sizeMap = {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    Tag,
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        variantMap[variant],
        sizeMap[size],
        className
      )
    }, rest), {
      children: [
        dot && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "span",
          {
            className: cn("h-1.5 w-1.5 rounded-full shrink-0", dotColorMap[variant]),
            "aria-hidden": "true"
          }
        ),
        children,
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Remove",
            onClick: onDismiss,
            className: "ml-0.5 leading-none hover:opacity-70 transition-opacity focus-visible:outline-none rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_fontawesome3.FontAwesomeIcon, { icon: import_free_solid_svg_icons3.faXmark, className: "w-2.5 h-2.5" })
          }
        )
      ]
    })
  );
}

// modules/app/AppSidebar.tsx
var import_react_fontawesome4 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons4 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  const [internalCollapsed, setInternalCollapsed] = (0, import_react7.useState)(defaultCollapsed);
  const [searchQuery, setSearchQuery] = (0, import_react7.useState)("");
  const [expandedGroups, setExpandedGroups] = (0, import_react7.useState)(() => {
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
  const [isDesktop, setIsDesktop] = (0, import_react7.useState)(() => {
    if (!isBrowser) {
      return true;
    }
    return window.matchMedia("(min-width: 1024px)").matches;
  });
  (0, import_react7.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      "data-collapsed": effectiveCollapsed ? "true" : "false",
      className: cn(
        "flex flex-col flex-1 min-h-0 transition-all duration-200",
        effectiveCollapsed ? "w-full lg:w-14" : "w-full lg:w-56",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("hidden lg:flex items-center px-2 py-2 border-b border-border shrink-0", effectiveCollapsed ? "justify-center" : "justify-end"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            type: "button",
            onClick: () => setCollapsed(!isCollapsed),
            "aria-label": isCollapsed ? "Expand sidebar" : "Collapse sidebar",
            className: "p-1.5 rounded text-text-secondary hover:text-text-primary hover:bg-surface-overlay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faChevronLeft, className: cn("w-4 h-4 transition-transform", isCollapsed ? "rotate-180" : ""), "aria-hidden": "true" })
          }
        ) }),
        searchable && !effectiveCollapsed && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-3 py-2 border-b border-border shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_fontawesome4.FontAwesomeIcon, { icon: import_free_solid_svg_icons4.faMagnifyingGlass, className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-text-disabled", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { className: "flex-1 min-h-0 overflow-y-auto px-2 py-3 space-y-4 sidebar-scrollbar-hover", "aria-label": "Sidebar navigation", children: groups.map((group, gi) => {
          var _a;
          const groupKey = (_a = group.label) != null ? _a : String(gi);
          const expanded = isGroupExpanded(group);
          const hasActive = group.items.some((i) => i.id === activeId);
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            group.label && !effectiveCollapsed && (group.collapsible ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-[10px] font-semibold uppercase tracking-widest", children: group.label }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    import_react_fontawesome4.FontAwesomeIcon,
                    {
                      icon: import_free_solid_svg_icons4.faChevronDown,
                      className: cn("w-3 h-3 transition-transform duration-200", expanded ? "rotate-0" : "-rotate-90"),
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[10px] font-semibold uppercase tracking-widest text-text-disabled px-3 mb-1", children: group.label })),
            expanded && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-0.5", children: group.items.map((item) => {
              const itemClassName = cn(
                "w-full flex items-center gap-2.5 rounded-lg text-sm transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                effectiveCollapsed ? "justify-center px-2 py-2" : "px-3 py-2 text-left",
                item.id === activeId ? "bg-primary-subtle text-primary font-medium" : "text-text-secondary hover:text-text-primary hover:bg-surface-overlay"
              );
              const itemContent = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "aria-hidden": "true", className: "shrink-0 w-5 text-center text-[15px] leading-none", children: item.icon }),
                !effectiveCollapsed && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "flex-1 truncate", children: item.label }),
                !effectiveCollapsed && item.badge != null && item.badge > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Badge, { variant: "primary", size: "sm", children: item.badge })
              ] });
              return item.href ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "a",
                {
                  href: item.href,
                  title: effectiveCollapsed ? item.label : void 0,
                  className: itemClassName,
                  children: itemContent
                },
                item.id
              ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        footerContent != null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("border-t border-border shrink-0", effectiveCollapsed ? "flex justify-center px-2 py-3" : ""), children: footerContent })
      ]
    }
  );
}

// modules/app/AppTopBar.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", __spreadProps(__spreadValues({ className: cn("flex items-center gap-3 flex-1", className) }, rest), { children: [
    logo && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "shrink-0", children: logo }),
    children
  ] }));
}

// modules/app/AppDrawer.tsx
var import_react9 = require("react");

// modules/ui/SearchBar.tsx
var import_react8 = require("react");
var import_react_fontawesome5 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons5 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime6 = require("react/jsx-runtime");
function SearchBar({
  id = "search",
  placeholder = "Search\u2026",
  value,
  onChange,
  onClear,
  className
}) {
  const [internal, setInternal] = (0, import_react8.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: cn("relative flex items-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute left-3 text-text-disabled pointer-events-none",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons5.faMagnifyingGlass, className: "w-3.5 h-3.5" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
    currentValue && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        onClick: handleClear,
        "aria-label": "Clear search",
        className: "absolute right-2 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_fontawesome5.FontAwesomeIcon, { icon: import_free_solid_svg_icons5.faXmark, className: "w-3 h-3" })
      }
    )
  ] });
}

// modules/ui/Button.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var variantClasses = {
  primary: "bg-primary text-primary-fg hover:bg-primary-hover",
  secondary: "bg-secondary text-secondary-fg hover:bg-secondary-hover",
  ghost: "bg-transparent text-text-primary hover:bg-surface-overlay",
  danger: "bg-error text-text-inverse hover:opacity-90",
  outline: "border border-border text-text-primary hover:bg-surface-overlay"
};
var sizeClasses = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
  xl: "px-6 py-3 text-lg"
};
var iconOnlySizeClasses = {
  xs: "p-1 text-xs",
  sm: "p-1.5 text-sm",
  md: "p-2 text-sm",
  lg: "p-2.5 text-base",
  xl: "p-3 text-lg"
};
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
        loading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full shrink-0", "aria-hidden": "true" }),
        !loading && iconLeft && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: iconLeft }),
        children,
        !loading && iconRight && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: iconRight })
      ]
    })
  );
}

// modules/app/AppDrawer.tsx
var import_react_fontawesome6 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons6 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  const [open, setOpen] = (0, import_react9.useState)(false);
  const [query, setQuery] = (0, import_react9.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { role: "none", onClick: () => setOpen(true), children: trigger != null ? trigger : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "outline", size: "sm", iconLeft: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_fontawesome6.FontAwesomeIcon, { icon: import_free_solid_svg_icons6.faBars, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: "Open Navigation" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
          header && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mb-4", children: header }),
          searchable && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            SearchBar,
            {
              id: "app-drawer-search",
              placeholder: "Search navigation\u2026",
              value: query,
              onChange: setQuery,
              className: "mb-4"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-4", children: [
            filtered.map((group, gi) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
                group.label && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs font-semibold text-text-disabled uppercase tracking-wider mb-1 px-1", children: group.label }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "space-y-0.5", children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "flex items-center gap-2", children: [
                        item.icon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { "aria-hidden": "true", children: item.icon }),
                        item.label
                      ] }),
                      item.badge != null && item.badge > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Badge, { variant: "neutral", size: "sm", children: item.badge })
                    ]
                  },
                  item.id
                )) })
              ] }, (_a = group.label) != null ? _a : gi);
            }),
            filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "text-sm text-text-secondary text-center py-4", children: [
              'No results for "',
              query,
              '"'
            ] })
          ] }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-4 pt-4 border-t border-border", children: footer })
        ]
      }
    )
  ] });
}

// modules/app/AppFooter.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("footer", { className: cn("w-full border border-border rounded-xl bg-surface-raised overflow-hidden", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-b border-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-2", children: [
        logo,
        version && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Badge, { variant: "neutral", size: "md", children: [
          "v",
          version
        ] })
      ] }),
      nav && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("nav", { "aria-label": "Footer navigation", className: "flex items-center gap-1", children: nav }),
      statusCfg && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Badge, { variant: statusCfg.variant, size: "md", dot: statusCfg.dot, children: statusCfg.label }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-4 px-5 py-3 bg-surface-base", children: [
      copyright && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-xs text-text-secondary", children: copyright }),
      social && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex items-center gap-1", children: social })
    ] })
  ] });
}

// modules/ui/Breadcrumb.tsx
var import_react_fontawesome7 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons7 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Breadcrumb({
  items,
  separator,
  maxItems,
  className
}) {
  const sep = separator != null ? separator : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_fontawesome7.FontAwesomeIcon, { icon: import_free_solid_svg_icons7.faChevronRight, className: "w-2.5 h-2.5 text-text-disabled", "aria-hidden": "true" });
  let displayed = items;
  let truncated = false;
  if (maxItems && items.length > maxItems) {
    truncated = true;
    displayed = [items[0], { label: "\u2026", href: void 0 }, ...items.slice(-(maxItems - 1))];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("nav", { "aria-label": "Breadcrumb", className, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ol", { className: "flex flex-wrap items-center gap-1 text-sm", children: displayed.map((item, i) => {
    const isLast = i === displayed.length - 1;
    const isEllipsis = item.label === "\u2026" && truncated;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { className: "flex items-center gap-1", children: !isLast && item.href ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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

// modules/ui/Tooltip.tsx
var import_react10 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  const [visible, setVisible] = (0, import_react10.useState)(false);
  const timer = (0, import_react10.useRef)(null);
  const id = (0, import_react10.useRef)(`tooltip-${Math.random().toString(36).slice(2)}`).current;
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "span",
    {
      className: cn("relative inline-flex items-center", className),
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { "aria-describedby": id, children }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
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
              arrow && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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

// modules/ui/DropdownMenu.tsx
var import_react11 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function DropdownMenu({
  trigger,
  items,
  header,
  align = "left",
  className
}) {
  const [open, setOpen] = (0, import_react11.useState)(false);
  const containerRef = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ref: containerRef, className: cn("relative inline-block", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        onClick: () => setOpen((p) => !p),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        children: trigger
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        role: "menu",
        className: cn(
          "absolute z-[60] mt-1 min-w-[10rem] rounded-lg border border-border bg-surface-raised shadow-lg py-1",
          align === "right" ? "right-0" : "left-0"
        ),
        children: [
          header && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "border-b border-border mb-1", children: header }),
          items.map((item, i) => {
            if (item.type === "separator") {
              return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { role: "separator", className: "my-1 border-t border-border" }, i);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
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
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { "aria-hidden": "true", children: item.icon }),
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

// modules/app/AppBreadcrumbs.tsx
var import_react_fontawesome8 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons8 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime13 = require("react/jsx-runtime");
function AppBreadcrumbs({
  items = [],
  title,
  description,
  badge,
  className
}) {
  const dropdownItems = items.map((item, i) => ({
    label: item.label,
    icon: i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faHouse, className: "w-3 h-3" }) : i === items.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faFile, className: "w-3 h-3" }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faFolder, className: "w-3 h-3" })
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn("w-full space-y-4 p-4 border border-border rounded-xl bg-surface-raised", className), children: [
    (title || badge || description) && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-2xl font-bold text-text-primary leading-tight", children: title }),
        badge
      ] }),
      description && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-text-secondary mt-0.5", children: description })
    ] }),
    items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { "aria-label": "Breadcrumb", className: "flex flex-wrap items-center gap-1 text-sm", children: items.map((item, i) => {
        const isLast = i === items.length - 1;
        const fullPath = items.slice(0, i + 1).map((b) => b.label).join(" \u203A ");
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Tooltip, { content: fullPath, placement: "bottom", arrow: true, children: isLast ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-text-primary font-medium px-1", children: item.label }) : item.href ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "a",
            {
              href: item.href,
              className: "text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded px-1",
              children: item.label
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-text-secondary px-1", children: item.label }) }),
          !isLast && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faChevronRight, className: "w-2.5 h-2.5 text-text-disabled", "aria-hidden": "true" })
        ] }, i);
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-2 sm:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Breadcrumb, { items: [items[0], { label: "\u2026" }, items[items.length - 1]] }),
        dropdownItems.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DropdownMenu,
          {
            trigger: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Button, { variant: "ghost", size: "xs", "aria-label": "View full path", children: [
              "Full path ",
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_fontawesome8.FontAwesomeIcon, { icon: import_free_solid_svg_icons8.faChevronDown, className: "w-2.5 h-2.5 ml-0.5" })
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
var import_jsx_runtime14 = require("react/jsx-runtime");
function SectionCard({ title, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `rounded-xl border border-border bg-surface-raised p-6 space-y-4 ${className != null ? className : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-sm font-semibold text-text-primary border-b border-border pb-3", children: title }),
    children
  ] });
}

// modules/app/NavDrawer.tsx
var import_react12 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
function NavDrawer({
  trigger,
  title = "Menu",
  side = "left",
  footer,
  children,
  className
}) {
  const [open, setOpen] = (0, import_react12.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        role: "none",
        onClick: () => setOpen(true),
        className: cn("inline-flex", className),
        children: trigger
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_react_fontawesome9 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons9 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime16 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          NavDrawer,
          {
            title: "Navigation",
            side: "left",
            trigger: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Button, { variant: "ghost", size: "sm", iconOnly: true, "aria-label": "Open navigation menu", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_fontawesome9.FontAwesomeIcon, { icon: import_free_solid_svg_icons9.faBars, className: "w-4 h-4", "aria-hidden": "true" }) }),
            children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("nav", { className: "flex flex-col gap-0.5 pt-1", "aria-label": "Mobile navigation", children: navItems.map((item) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
        logo && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "shrink-0", children: logo }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("nav", { className: "hidden md:flex items-center gap-0.5 flex-1", "aria-label": "Main navigation", children: navItems.map((item) => {
          var _a2;
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
        children && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center gap-2 ml-auto shrink-0", children })
      ]
    })
  );
}

// modules/app/GlobalSearch.tsx
var import_react13 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function GlobalSearch({
  placeholder = "Search\u2026",
  results = [],
  onSearch,
  onSelect,
  loading = false,
  className
}) {
  const [query, setQuery] = (0, import_react13.useState)("");
  const [open, setOpen] = (0, import_react13.useState)(false);
  const containerRef = (0, import_react13.useRef)(null);
  const [highlighted, setHighlighted] = (0, import_react13.useState)(-1);
  (0, import_react13.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { ref: containerRef, className: cn("relative w-full max-w-md", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { onKeyDown: handleKeyDown, role: "combobox", "aria-expanded": open, "aria-haspopup": "listbox", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      SearchBar,
      {
        value: query,
        onChange: handleChange,
        placeholder
      }
    ) }),
    open && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        role: "listbox",
        "aria-label": "Search results",
        className: "absolute top-full mt-1.5 left-0 right-0 z-50 rounded-lg border border-border bg-surface-raised shadow-xl overflow-hidden max-h-72 overflow-y-auto",
        children: loading ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "px-4 py-6 text-center text-sm text-text-secondary animate-pulse", children: "Searching\u2026" }) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "px-4 py-6 text-center text-sm text-text-secondary", children: [
          "No results for ",
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("strong", { className: "text-text-primary", children: [
            '"',
            query,
            '"'
          ] })
        ] }) : Object.entries(grouped).map(([cat, items]) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "px-3 pt-2 pb-1 text-[10px] font-semibold text-text-disabled uppercase tracking-wider", children: cat }),
          items.map((r) => {
            const idx = results.indexOf(r);
            return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
                  r.icon && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { "aria-hidden": "true", className: "shrink-0 text-text-disabled", children: r.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm font-medium truncate", children: r.label }),
                    r.description && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-xs text-text-secondary truncate", children: r.description })
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
var import_react20 = require("react");

// modules/ui/Overlays/Modal/index.tsx
var import_react14 = require("react");
var import_react_dom2 = require("react-dom");
var import_react_fontawesome10 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons10 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime18 = require("react/jsx-runtime");
var sizeMap2 = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" };
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
  const panelRef = (0, import_react14.useRef)(null);
  const titleId = "modal-title";
  const descId = description ? "modal-desc" : void 0;
  const { mounted, state } = usePresence(open);
  useFocusTrap(panelRef, { active: open, onEscape: onClose });
  useScrollLock(open);
  useRouteClose({ active: open, closeOnRouteChange, onClose });
  const portalNode = usePortal(portalTarget);
  if (!mounted) return null;
  const sizeClass = sizeMap2[size];
  const node = /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "div",
          {
            className: "absolute inset-0 bg-black/50",
            onClick: closeOnBackdropClick ? onClose : void 0,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-start justify-between gap-3 px-6 py-4 border-b border-border shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { id: titleId, className: "text-base font-semibold text-text-primary", children: title }),
                  description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { id: descId, className: "text-sm text-text-secondary mt-0.5", children: description })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close dialog",
                    className: "shrink-0 text-text-disabled hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
                    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react_fontawesome10.FontAwesomeIcon, { icon: import_free_solid_svg_icons10.faXmark, className: "w-4 h-4", "aria-hidden": "true" })
                  }
                )
              ] }),
              children && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: cn("px-6 py-4 flex-1", scrollable && "overflow-y-auto"), children }),
              footer && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "px-6 py-4 border-t border-border flex justify-end gap-2 shrink-0", children: footer })
            ]
          }
        )
      ]
    }
  );
  if (!portalNode) return null;
  return (0, import_react_dom2.createPortal)(node, portalNode);
}

// modules/ui/AlertBanner.tsx
var import_react15 = require("react");
var import_react_fontawesome11 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons11 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime19 = require("react/jsx-runtime");
var variantMap2 = {
  success: { container: "bg-success-subtle border-success text-success-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faCircleCheck, className: "w-4 h-4" }) },
  warning: { container: "bg-warning-subtle border-warning text-warning-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faTriangleExclamation, className: "w-4 h-4" }) },
  error: { container: "bg-error-subtle border-error text-error-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faCircleXmark, className: "w-4 h-4" }) },
  info: { container: "bg-info-subtle border-info text-info-fg", defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faCircleInfo, className: "w-4 h-4" }) }
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
  const [dismissed, setDismissed] = (0, import_react15.useState)(false);
  if (dismissed) return null;
  const { container, defaultIcon } = variantMap2[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "div",
    {
      role: "alert",
      className: cn(
        "flex items-start gap-3 rounded-lg border p-4",
        container,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { "aria-hidden": "true", className: "mt-0.5 shrink-0 font-bold", children: icon != null ? icon : defaultIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex-1 text-sm min-w-0", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: cn(title && "mt-0.5"), children: message }),
          action && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mt-2", children: action.href ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "a",
            {
              href: action.href,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "button",
            {
              type: "button",
              onClick: action.onClick,
              className: "text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
              children: action.label
            }
          ) })
        ] }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss",
            onClick: () => setDismissed(true),
            className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_fontawesome11.FontAwesomeIcon, { icon: import_free_solid_svg_icons11.faXmark, className: "w-4 h-4" })
          }
        )
      ]
    }
  );
}

// modules/app/CommandPalette/index.tsx
var import_react_fontawesome13 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons13 = require("@fortawesome/free-solid-svg-icons");

// modules/app/CommandPalette/hooks/useFuzzySearch.tsx
var import_react16 = require("react");
var import_jsx_runtime20 = (
  // eslint-disable-next-line react/no-array-index-key
  require("react/jsx-runtime")
);
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
  return (0, import_react16.useMemo)(() => {
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
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("mark", { className: "bg-warning-subtle text-text-primary rounded-sm px-0.5", children: label[i] }, `m-${i}`)
      );
    } else {
      buf += label[i];
    }
  }
  if (buf) out.push(buf);
  return out;
}

// modules/app/CommandPalette/hooks/useCommandStore.ts
var import_react17 = require("react");
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
  return (0, import_react17.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}
function useMergedCommands(defaults) {
  const dynamic = useCommandStore();
  return (0, import_react17.useMemo)(() => {
    const seen = /* @__PURE__ */ new Map();
    for (const c of defaults) seen.set(commandKey(c), c);
    for (const c of dynamic) seen.set(commandKey(c), c);
    return Array.from(seen.values());
  }, [defaults, dynamic]);
}

// modules/app/CommandPalette/hooks/useShortcuts.ts
var import_react18 = require("react");
function useShortcuts({ isOpen, onOpen, onClose }) {
  (0, import_react18.useEffect)(() => {
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
var import_react19 = require("react");
var import_react_fontawesome12 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons12 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime21 = require("react/jsx-runtime");
var CommandPaletteInput = (0, import_react19.forwardRef)(
  function CommandPaletteInput2({ id, value, onChange, onKeyDown, placeholder, listboxId, activeDescendantId }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute left-3 text-text-disabled pointer-events-none text-sm",
          children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_fontawesome12.FontAwesomeIcon, { icon: import_free_solid_svg_icons12.faMagnifyingGlass, className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_jsx_runtime22 = require("react/jsx-runtime");
function ResultItem({ id, scored, active, onSelect, onHover }) {
  const { item, matches } = scored;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "flex items-center gap-2 min-w-0", children: [
          item.icon && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { "aria-hidden": "true", className: "shrink-0", children: item.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "truncate", children: highlightMatches(item.label, matches) }),
          item.description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-text-secondary text-xs truncate", children: item.description })
        ] }),
        item.shortcut && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Badge, { variant: "neutral", size: "sm", children: item.shortcut })
      ]
    }
  );
}

// modules/app/CommandPalette/parts/ResultList.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function ResultList({
  listboxId,
  itemIdPrefix,
  groups,
  flat,
  activeIndex,
  onSelect,
  onHover
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { id: listboxId, role: "listbox", className: "max-h-72 overflow-y-auto space-y-3", children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Badge, { variant: "neutral", size: "sm", children: group.category }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "space-y-0.5", children: group.items.map((scored) => {
      var _a;
      const flatIndex = flat.indexOf(scored);
      const itemId = `${itemIdPrefix}-${flatIndex}`;
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_jsx_runtime24 = require("react/jsx-runtime");
function EmptyState({ query, suggestions, onSelect }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "py-4 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("p", { className: "text-sm text-text-secondary", children: [
      'No commands found for "',
      query,
      '"'
    ] }),
    suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "mt-3 text-xs text-text-disabled", children: "Try one of these instead:" }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-2 flex flex-wrap justify-center gap-1.5", children: suggestions.map((cmd) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
var import_jsx_runtime25 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center gap-4 border-t border-border pt-3 text-[10px] text-text-disabled", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("kbd", { className: "rounded border border-border px-1 py-0.5 font-mono text-[9px]", children: "\u2191\u2193" }),
      " ",
      "Navigate"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("kbd", { className: "rounded border border-border px-1 py-0.5 font-mono text-[9px]", children: "\u21B5" }),
      " ",
      "Select"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("kbd", { className: "rounded border border-border px-1 py-0.5 font-mono text-[9px]", children: "Esc" }),
      " ",
      "Close"
    ] })
  ] });
}

// modules/app/CommandPalette/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var DEFAULT_COMMANDS = [
  { id: "nav-dashboard", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faHouse, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Dashboard", shortcut: "G D", category: "Navigation" },
  { id: "nav-projects", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faFolder, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Projects", shortcut: "G P", category: "Navigation" },
  { id: "nav-team", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faUsers, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Team", shortcut: "G T", category: "Navigation" },
  { id: "nav-settings", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faGear, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Settings", shortcut: "G S", category: "Navigation" },
  { id: "nav-analytics", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faChartBar, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Go to Analytics", shortcut: "G A", category: "Navigation" },
  { id: "act-new-project", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faPlus, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "New Project", shortcut: "\u2318N", category: "Actions" },
  { id: "act-invite", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faEnvelope, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Send Invite", shortcut: "\u2318I", category: "Actions" },
  { id: "act-export", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faFileExport, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Export Data", shortcut: "\u2318E", category: "Actions" },
  { id: "act-lock", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faLock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Lock Screen", shortcut: "\u2318L", category: "Actions" },
  { id: "rec-alpha", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faClock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Project Alpha", category: "Recent" },
  { id: "rec-q3", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faClock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Q3 Report", category: "Recent" },
  { id: "rec-review", icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_fontawesome13.FontAwesomeIcon, { icon: import_free_solid_svg_icons13.faClock, className: "w-3.5 h-3.5", "aria-hidden": "true" }), label: "Design Review", category: "Recent" }
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
  const [open, setOpen] = (0, import_react20.useState)(false);
  const [query, setQuery] = (0, import_react20.useState)("");
  const [activeIndex, setActiveIndex] = (0, import_react20.useState)(0);
  const inputRef = (0, import_react20.useRef)(null);
  const reactId = (0, import_react20.useId)();
  const listboxId = `${reactId}-list`;
  const itemIdPrefix = `${reactId}-opt`;
  const inputId = `${reactId}-input`;
  const merged = useMergedCommands(items);
  const scored = useFuzzySearch(merged, query);
  const groups = (0, import_react20.useMemo)(() => groupByCategory(scored), [scored]);
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
  const suggestions = (0, import_react20.useMemo)(() => merged.slice(0, 4), [merged]);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { role: "none", onClick: () => setOpen(true), children: trigger != null ? trigger : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      Button,
      {
        variant: "outline",
        size: "sm",
        iconRight: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Badge, { variant: "neutral", size: "sm", children: "\u2318K" }),
        children: "Quick actions\u2026"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            AlertBanner,
            {
              variant: "info",
              message: "Pro tip: Press \u2318K from anywhere to open this palette."
            }
          ),
          hasResults ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
          ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
            EmptyState,
            {
              query,
              suggestions,
              onSelect: handleSelect
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Footer, {})
        ] })
      }
    )
  ] });
}
var AppCommandBar = CommandPalette;

// modules/app/ThemeSwitcher.tsx
var import_react21 = require("react");
var import_react_fontawesome14 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons14 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime27 = require("react/jsx-runtime");
function readStoredTheme() {
  if (typeof window === "undefined") return "system";
  const t = window.localStorage.getItem("theme");
  return t === "light" || t === "dark" || t === "system" ? t : "system";
}
function ThemeSwitcher() {
  const [theme, setTheme] = (0, import_react21.useState)(readStoredTheme);
  (0, import_react21.useEffect)(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const icon = theme === "light" ? import_free_solid_svg_icons14.faSun : theme === "dark" ? import_free_solid_svg_icons14.faMoon : import_free_solid_svg_icons14.faDisplay;
  const label = theme.charAt(0).toUpperCase() + theme.slice(1);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    DropdownMenu,
    {
      trigger: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Button, { variant: "outline", size: "sm", className: "gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "w-4 flex items-center justify-center shrink-0", "aria-hidden": "true", suppressHydrationWarning: true, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon, className: "w-4 h-4" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "inline-block min-w-[3.5rem] text-left", suppressHydrationWarning: true, children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faChevronDown, className: "w-3 h-3 text-text-disabled" })
      ] }),
      items: [
        { type: "item", label: "Light", icon: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faSun }), onClick: () => setTheme("light") },
        { type: "item", label: "Dark", icon: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faMoon }), onClick: () => setTheme("dark") },
        { type: "item", label: "System", icon: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_fontawesome14.FontAwesomeIcon, { icon: import_free_solid_svg_icons14.faDisplay }), onClick: () => setTheme("system") }
      ]
    }
  );
}

// modules/app/ContextMenu.tsx
var import_react22 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  const [menu, setMenu] = (0, import_react22.useState)(null);
  const [focusedActionIdx, setFocusedActionIdx] = (0, import_react22.useState)(-1);
  const menuRef = (0, import_react22.useRef)(null);
  const labelId = (0, import_react22.useId)();
  const isOpen = menu !== null;
  const open = (0, import_react22.useCallback)(
    (clientX, clientY) => {
      setMenu({ rawX: clientX, rawY: clientY, adjX: clientX, adjY: clientY, measured: false });
      setFocusedActionIdx(-1);
      onOpenChange == null ? void 0 : onOpenChange(true);
    },
    [onOpenChange]
  );
  const close = (0, import_react22.useCallback)(() => {
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
  (0, import_react22.useEffect)(() => {
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
  (0, import_react22.useEffect)(() => {
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
  (0, import_react22.useEffect)(() => {
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
  (0, import_react22.useEffect)(() => {
    if (!menuRef.current || focusedActionIdx < 0) return;
    const btn = menuRef.current.querySelector(
      `[data-item-index="${focusedActionIdx}"]`
    );
    btn == null ? void 0 : btn.focus({ preventScroll: true });
  }, [focusedActionIdx]);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    "div",
    {
      className: cn("relative", className),
      onContextMenu: handleContextMenu,
      children: [
        children,
        menu && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
                return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
                return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
              return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
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
                    item.icon != null && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "flex-1 truncate", children: item.label }),
                    item.shortcut && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("kbd", { className: "shrink-0 ml-6 text-[11px] font-mono text-text-disabled", children: item.shortcut })
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
var import_react26 = require("react");

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
var import_react_fontawesome15 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons15 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime29 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
        reorderable && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute top-1.5 left-1.5 z-10 w-6 h-6 flex items-center justify-center rounded bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react_fontawesome15.FontAwesomeIcon, { icon: import_free_solid_svg_icons15.faGripVertical, className: "w-3 h-3" })
          }
        ),
        lightbox && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                import_react_fontawesome15.FontAwesomeIcon,
                {
                  icon: import_free_solid_svg_icons15.faExpand,
                  "aria-hidden": "true",
                  className: "text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
                }
              ),
              image.caption && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-white text-xs font-medium px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 drop-shadow-md", children: image.caption })
            ]
          }
        ),
        showCaptions && image.caption && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs px-2 py-1 line-clamp-1 pointer-events-none", children: image.caption })
      ]
    }
  );
}

// modules/app/ImageGallery/parts/GalleryGrid.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      className: cn("grid", columnClasses[columns], gapClasses[gap], className),
      role: "list",
      "aria-label": "Image gallery",
      children: images.map((img, i) => {
        const isDragging = dragFrom === i;
        const isDropTarget = dragOver === i && dragFrom !== null && dragFrom !== i;
        const tile = /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
        return reorderable ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ContextMenu, { items: buildMenuItems(i), children: tile }, `${img.src}-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { children: tile }, `${img.src}-${i}`);
      })
    }
  );
}

// modules/app/ImageGallery/parts/Lightbox.tsx
var import_react_fontawesome16 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons16 = require("@fortawesome/free-solid-svg-icons");

// modules/app/ImageGallery/hooks/useLightboxKeyboard.ts
var import_react23 = require("react");
function useLightboxKeyboard({ open, onClose, onPrev, onNext }) {
  (0, import_react23.useEffect)(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);
  (0, import_react23.useEffect)(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
}

// modules/app/ImageGallery/parts/Lightbox.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Image lightbox",
      className: "fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex items-center justify-between px-4 py-3 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("span", { className: "text-white/70 text-sm tabular-nums select-none", children: [
            activeIndex + 1,
            " / ",
            images.length
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "button",
              {
                onClick: onToggleZoom,
                "aria-label": zoomed ? "Zoom out" : "Zoom in",
                className: "w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
                  import_react_fontawesome16.FontAwesomeIcon,
                  {
                    icon: zoomed ? import_free_solid_svg_icons16.faMagnifyingGlassMinus : import_free_solid_svg_icons16.faMagnifyingGlassPlus,
                    "aria-hidden": "true"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "button",
              {
                onClick: onClose,
                "aria-label": "Close lightbox",
                className: "w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faXmark, "aria-hidden": "true" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "relative flex-1 flex items-center justify-center overflow-hidden px-14", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
          images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "button",
              {
                onClick: onPrev,
                "aria-label": "Previous image",
                className: "absolute left-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faChevronLeft, "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              "button",
              {
                onClick: onNext,
                "aria-label": "Next image",
                className: "absolute right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_fontawesome16.FontAwesomeIcon, { icon: import_free_solid_svg_icons16.faChevronRight, "aria-hidden": "true" })
              }
            )
          ] })
        ] }),
        activeImage.caption && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "shrink-0 text-center text-white/80 text-sm px-6 py-2", children: activeImage.caption }),
        images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "shrink-0 flex gap-2 overflow-x-auto px-4 py-3 justify-center", children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
var import_react24 = require("react");
function useReorder({ images, setImages, onReorder }) {
  const [dragFrom, setDragFrom] = (0, import_react24.useState)(null);
  const [dragOver, setDragOver] = (0, import_react24.useState)(null);
  const onDragStart = (0, import_react24.useCallback)((i) => setDragFrom(i), []);
  const onDragOver = (0, import_react24.useCallback)(
    (e, i) => {
      e.preventDefault();
      if (i !== dragFrom) setDragOver(i);
    },
    [dragFrom]
  );
  const onDragLeave = (0, import_react24.useCallback)(() => setDragOver(null), []);
  const onDrop = (0, import_react24.useCallback)(
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
  const onDragEnd = (0, import_react24.useCallback)(() => {
    setDragFrom(null);
    setDragOver(null);
  }, []);
  const moveToIndex = (0, import_react24.useCallback)(
    (from, to) => {
      const next = [...images];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      setImages(next);
      onReorder == null ? void 0 : onReorder(next);
    },
    [images, onReorder, setImages]
  );
  const removeAt = (0, import_react24.useCallback)(
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
var import_react25 = require("react");
var import_react_fontawesome17 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons17 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime32 = require("react/jsx-runtime");
function useContextMenu({
  images,
  openLightbox,
  moveToIndex,
  removeAt
}) {
  const copyUrl = (0, import_react25.useCallback)((src) => {
    var _a;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(src).catch(() => {
    });
  }, []);
  const buildItems = (0, import_react25.useCallback)(
    (i) => [
      {
        label: "Open in lightbox",
        icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faExpand, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        onClick: () => openLightbox(i)
      },
      {
        label: "Copy image URL",
        icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faCopy, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        shortcut: "\u2318C",
        onClick: () => copyUrl(images[i].src)
      },
      { type: "separator" },
      { type: "group", label: "Reorder" },
      {
        label: "Move to first",
        icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faAnglesLeft, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        disabled: i === 0,
        onClick: () => moveToIndex(i, 0)
      },
      {
        label: "Move to last",
        icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faAnglesRight, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        disabled: i === images.length - 1,
        onClick: () => moveToIndex(i, images.length - 1)
      },
      { type: "separator" },
      {
        label: "Remove",
        icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_fontawesome17.FontAwesomeIcon, { icon: import_free_solid_svg_icons17.faTrash, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
        danger: true,
        onClick: () => removeAt(i)
      }
    ],
    [images, openLightbox, moveToIndex, removeAt, copyUrl]
  );
  return { buildItems };
}

// modules/app/ImageGallery/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  const [images, setImages] = (0, import_react26.useState)(imagesProp);
  (0, import_react26.useEffect)(() => {
    setImages(imagesProp);
  }, [imagesProp]);
  const [activeIndex, setActiveIndex] = (0, import_react26.useState)(null);
  const [zoomed, setZoomed] = (0, import_react26.useState)(false);
  const isOpen = activeIndex !== null;
  const openLightbox = (0, import_react26.useCallback)((i) => {
    setActiveIndex(i);
    setZoomed(false);
  }, []);
  const closeLightbox = (0, import_react26.useCallback)(() => {
    setActiveIndex(null);
    setZoomed(false);
  }, []);
  const prevImage = (0, import_react26.useCallback)(() => {
    setActiveIndex((i) => i === null ? null : (i - 1 + images.length) % images.length);
    setZoomed(false);
  }, [images.length]);
  const nextImage = (0, import_react26.useCallback)(() => {
    setActiveIndex((i) => i === null ? null : (i + 1) % images.length);
    setZoomed(false);
  }, [images.length]);
  const selectIndex = (0, import_react26.useCallback)((i) => {
    setActiveIndex(i);
    setZoomed(false);
  }, []);
  const toggleZoom = (0, import_react26.useCallback)(() => setZoomed((z) => !z), []);
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
    lightbox && isOpen && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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

// modules/app/Form.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    "form",
    {
      onSubmit,
      noValidate: true,
      className: cn("space-y-6", className),
      children: [
        (title || description) && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h2", { className: "text-lg font-semibold text-text-primary", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-sm text-text-secondary mt-0.5", children: description })
        ] }),
        error && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(AlertBanner, { variant: "error", message: error }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: cn(
          "grid gap-4",
          columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"
        ), children }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex items-center justify-end gap-3 pt-2 border-t border-border", children: actions })
      ]
    }
  );
}

// modules/app/FormField.tsx
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime35 = require("react/jsx-runtime");
function FormField({
  name,
  label,
  hint,
  required,
  rules,
  className,
  children
}) {
  const { register, formState: { errors } } = (0, import_react_hook_form.useFormContext)();
  const error = errors[name];
  const errorMessage = typeof (error == null ? void 0 : error.message) === "string" ? error.message : void 0;
  const hintId = hint ? `${name}-hint` : void 0;
  const errorId = errorMessage ? `${name}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  void register(name, rules);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: cn("flex flex-col gap-1.5", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
    hint && !errorMessage && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    errorMessage && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { id: errorId, role: "alert", className: "text-xs text-error", children: errorMessage })
  ] });
}

// modules/ui/Select.tsx
var import_react27 = require("react");
var import_react_fontawesome18 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons18 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime36 = require("react/jsx-runtime");
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
  const [open, setOpen] = (0, import_react27.useState)(false);
  const [search, setSearch] = (0, import_react27.useState)("");
  const containerRef = (0, import_react27.useRef)(null);
  const searchRef = (0, import_react27.useRef)(null);
  const hintId = hint ? `${id}-hint` : void 0;
  const errorId = error ? `${id}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const selected = options.find((o) => o.value === value);
  const filtered = searchable && search ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase())) : options;
  (0, import_react27.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { ref: containerRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("label", { id: `${id}-label`, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
          (selected == null ? void 0 : selected.icon) && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "shrink-0", children: selected.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: cn("flex-1", !selected && "text-text-disabled"), children: selected ? selected.label : placeholder != null ? placeholder : "Select\u2026" }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_fontawesome18.FontAwesomeIcon, { icon: open ? import_free_solid_svg_icons18.faChevronUp : import_free_solid_svg_icons18.faChevronDown, className: "w-3 h-3 text-text-disabled", "aria-hidden": "true" })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "z-20 w-full rounded-md border border-border bg-surface-raised shadow-lg overflow-hidden", children: [
      searchable && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("ul", { role: "listbox", "aria-labelledby": `${id}-label`, className: "py-1 max-h-48 overflow-y-auto", children: [
        placeholder && !search && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
        filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("li", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: "No results found." }) : filtered.map((opt) => {
          const active = opt.value === value;
          return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
                opt.icon && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "shrink-0", "aria-hidden": "true", children: opt.icon }),
                opt.label,
                active && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_fontawesome18.FontAwesomeIcon, { icon: import_free_solid_svg_icons18.faCheck, className: "ml-auto w-3 h-3 text-primary", "aria-hidden": "true" })
              ]
            },
            opt.value
          );
        })
      ] })
    ] }),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}
var Select = (0, import_react27.forwardRef)(function Select2(_a, ref) {
  var _b = _a, { id, label, options, placeholder, hint, error, disabled, required, searchable, className } = _b, props = __objRest(_b, ["id", "label", "options", "placeholder", "hint", "error", "disabled", "required", "searchable", "className"]);
  const hasIcons = options.some((o) => o.icon);
  if (hasIcons || searchable) {
    const _a2 = props, { value, onChange } = _a2, rest = __objRest(_a2, ["value", "onChange"]);
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "sr-only", children: "(required)" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
          placeholder && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("option", { value: "", children: placeholder }),
          options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
        ]
      })
    ),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
});

// modules/ui/MultiSelect.tsx
var import_react31 = require("react");
var import_react_fontawesome19 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons19 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/ComboBox/hooks/useFilter.ts
var import_react28 = require("react");
function filterOptions(options, query) {
  const q = query.trim().toLowerCase();
  if (!q) return options;
  return options.filter((opt) => opt.label.toLowerCase().includes(q) || (opt.description ? opt.description.toLowerCase().includes(q) : false));
}
function useFilter(options, query) {
  return (0, import_react28.useMemo)(() => filterOptions(options, query), [options, query]);
}

// modules/ui/ComboBox/hooks/useAsync.ts
var import_react29 = require("react");
var TTL_MS = 5 * 60 * 1e3;
function useAsync(enabled, query, onSearch, debounceMs = 300) {
  const [results, setResults] = (0, import_react29.useState)(null);
  const [loading, setLoading] = (0, import_react29.useState)(false);
  const cacheRef = (0, import_react29.useRef)(/* @__PURE__ */ new Map());
  const abortRef = (0, import_react29.useRef)(null);
  const debounceRef = (0, import_react29.useRef)(null);
  const cacheKey = query.trim().toLowerCase();
  (0, import_react29.useEffect)(() => {
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
  (0, import_react29.useEffect)(() => {
    if (!enabled) {
      setResults(null);
      setLoading(false);
    }
  }, [enabled]);
  const appendResults = (0, import_react29.useCallback)((next) => {
    setResults((prev) => {
      const merged = prev ? [...prev, ...next] : next;
      cacheRef.current.set(cacheKey, { ts: Date.now(), data: merged });
      return merged;
    });
  }, [cacheKey]);
  return (0, import_react29.useMemo)(() => ({ results, loading, appendResults }), [results, loading, appendResults]);
}

// modules/ui/ComboBox/hooks/useLoadMore.ts
var import_react30 = require("react");
function useLoadMore(open, sentinelRef, onLoadMore, onAppend) {
  const [loadingMore, setLoadingMore] = (0, import_react30.useState)(false);
  const inFlightRef = (0, import_react30.useRef)(false);
  (0, import_react30.useEffect)(() => {
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
var import_jsx_runtime37 = require("react/jsx-runtime");
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
  const [internal, setInternal] = (0, import_react31.useState)(value != null ? value : []);
  const [open, setOpen] = (0, import_react31.useState)(false);
  const [search, setSearch] = (0, import_react31.useState)("");
  const containerRef = (0, import_react31.useRef)(null);
  const searchRef = (0, import_react31.useRef)(null);
  const sentinelRef = (0, import_react31.useRef)(null);
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
  (0, import_react31.useEffect)(() => {
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
  const optionsById = (0, import_react31.useMemo)(() => {
    const m = /* @__PURE__ */ new Map();
    for (const o of options) m.set(o.value, o);
    for (const o of sourceOptions) if (!m.has(o.value)) m.set(o.value, o);
    return m;
  }, [options, sourceOptions]);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { ref: containerRef, className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("label", { id: `${id}-label`, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
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
            selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "text-text-disabled", children: placeholder }) : selected.map((v) => {
              var _a, _b;
              const opt = optionsById.get(v);
              return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
                "span",
                {
                  className: "inline-flex items-center gap-1 rounded-full bg-primary-subtle text-primary text-xs font-medium px-2 py-0.5",
                  children: [
                    (opt == null ? void 0 : opt.icon) && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "shrink-0", children: opt.icon }),
                    (_a = opt == null ? void 0 : opt.label) != null ? _a : v,
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${(_b = opt == null ? void 0 : opt.label) != null ? _b : v}`,
                        onClick: (e) => remove(v, e),
                        className: "hover:opacity-70 focus-visible:outline-none",
                        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons19.faXmark, className: "w-2.5 h-2.5" })
                      }
                    )
                  ]
                },
                v
              );
            }),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              import_react_fontawesome19.FontAwesomeIcon,
              {
                icon: open ? import_free_solid_svg_icons19.faChevronUp : import_free_solid_svg_icons19.faChevronDown,
                className: "ml-auto w-3 h-3 text-text-disabled",
                "aria-hidden": "true"
              }
            )
          ]
        }
      ),
      open && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "absolute z-20 w-full rounded-md border border-border bg-surface-raised shadow-lg overflow-hidden top-full left-0 mt-1", children: [
        (searchable || onSearch) && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            import_react_fontawesome19.FontAwesomeIcon,
            {
              icon: import_free_solid_svg_icons19.faMagnifyingGlass,
              "aria-hidden": "true",
              className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-text-disabled"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "ul",
          {
            id: listboxId,
            role: "listbox",
            "aria-labelledby": `${id}-label`,
            "aria-multiselectable": "true",
            "data-combobox-list": true,
            className: "py-1 max-h-48 overflow-y-auto",
            children: loading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { className: "px-3 py-2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "h-3 w-full animate-pulse rounded bg-surface-overlay" }) }, `sk-${i}`)) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: "No results found." }) : /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
              filtered.map((opt) => {
                const checked = selected.includes(opt.value);
                return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                        "span",
                        {
                          "aria-hidden": "true",
                          className: cn(
                            "h-4 w-4 rounded border-2 flex items-center justify-center shrink-0 text-[10px]",
                            checked ? "bg-primary border-primary text-primary-fg" : "border-border bg-surface-base"
                          ),
                          children: checked && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react_fontawesome19.FontAwesomeIcon, { icon: import_free_solid_svg_icons19.faCheck, className: "w-2.5 h-2.5" })
                        }
                      ),
                      opt.icon && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "shrink-0", "aria-hidden": "true", children: opt.icon }),
                      opt.label
                    ]
                  },
                  opt.value
                );
              }),
              onLoadMore && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { ref: sentinelRef, "aria-hidden": "true", "data-combobox-sentinel": true, className: "h-1" }),
              loadingMore && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { className: "px-3 py-2 text-xs text-text-secondary", "aria-live": "polite", children: "Loading more\u2026" })
            ] })
          }
        )
      ] })
    ] }),
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    error && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/ui/DatePicker/index.tsx
var import_react35 = require("react");

// modules/ui/DatePicker/calendar/Calendar.tsx
var import_react33 = require("react");
var import_react_fontawesome20 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons20 = require("@fortawesome/free-solid-svg-icons");

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
var import_jsx_runtime38 = require("react/jsx-runtime");
function MonthSelect({ value, locale, onSelect }) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid grid-cols-3 gap-1.5 p-2", role: "listbox", "aria-label": "Month", children: locale.months.map((name, idx) => {
    const active = idx === value;
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
var import_react32 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
function YearSelect({ value, min, max, onSelect }) {
  const activeRef = (0, import_react32.useRef)(null);
  const years = yearRange(value, 10);
  (0, import_react32.useEffect)(() => {
    var _a;
    (_a = activeRef.current) == null ? void 0 : _a.scrollIntoView({ block: "center" });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    "div",
    {
      className: "max-h-56 overflow-y-auto p-2",
      role: "listbox",
      "aria-label": "Year",
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "grid grid-cols-3 gap-1.5", children: years.map((y) => {
        const disabled = min && y < min.getFullYear() || max && y > max.getFullYear();
        const active = y === value;
        return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
var import_jsx_runtime40 = require("react/jsx-runtime");
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
  const [view, setView] = (0, import_react33.useState)("days");
  const [focus, setFocus] = (0, import_react33.useState)(() => clampToBounds(selected != null ? selected : month, min, max));
  const gridRef = (0, import_react33.useRef)(null);
  const captionId = (0, import_react33.useId)();
  (0, import_react33.useEffect)(() => {
    if (!isSameMonth(focus, month)) {
      setFocus(clampToBounds(new Date(month.getFullYear(), month.getMonth(), Math.min(focus.getDate(), 28)), min, max));
    }
  }, [month.getFullYear(), month.getMonth()]);
  const goMonth = (0, import_react33.useCallback)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex items-center justify-between px-2 pt-2 pb-1", children: [
      !hidePrevButton ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
          children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome20.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faChevronLeft, className: "h-3.5 w-3.5", "aria-hidden": "true" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "h-7 w-7", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex items-center gap-1 text-sm font-medium text-text-primary", id: captionId, children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
      !hideNextButton ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
          children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_fontawesome20.FontAwesomeIcon, { icon: import_free_solid_svg_icons20.faChevronRight, className: "h-3.5 w-3.5", "aria-hidden": "true" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "h-7 w-7", "aria-hidden": "true" })
    ] });
  }
  function renderGrid() {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "grid grid-cols-7 gap-0.5", role: "row", children: weekdays.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
            "div",
            {
              role: "columnheader",
              className: "py-1 text-center text-[11px] font-medium uppercase tracking-wide text-text-secondary",
              children: w
            },
            `wd-${i}`
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: grid.map((d) => {
            const inMonth = isSameMonth(d, month);
            const disabled = isDisabled(d, disabledDates, min, max);
            const isSelected = isSameDay(d, selected);
            const isToday = isSameDay(d, today);
            const isFocus = isSameDay(d, focus) && inMonth;
            const isStart = isSameDay(d, rangeStart);
            const isEnd = isSameDay(d, rangeEnd);
            return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "mt-2 flex items-center justify-end px-1", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
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
        view === "months" && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
        view === "years" && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
var import_jsx_runtime41 = require("react/jsx-runtime");
function PresetList({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "div",
    {
      className: cn("hidden", className),
      "aria-hidden": "true",
      "data-preset-list-placeholder": true
    }
  );
}

// modules/ui/DatePicker/parts/Trigger.tsx
var import_react34 = require("react");
var import_react_fontawesome21 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons21 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Trigger = (0, import_react34.forwardRef)(function Trigger2({
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
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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
            children: display ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: display }) : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "text-text-disabled", children: placeholder })
          }
        ),
        showClear && !disabled ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faXmark, className: "h-3 w-3", "aria-hidden": "true" })
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          "span",
          {
            className: cn(
              "pointer-events-none mr-3 text-text-secondary",
              disabled && "opacity-50"
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react_fontawesome21.FontAwesomeIcon, { icon: import_free_solid_svg_icons21.faCalendar, className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
});

// modules/ui/DatePicker/index.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
function mergeMessages(base2, override) {
  return override ? __spreadValues(__spreadValues({}, base2), override) : base2;
}
function useDismissOnOutside(ref, open, onClose) {
  (0, import_react35.useEffect)(() => {
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
  const reactId = (0, import_react35.useId)();
  const baseId = id != null ? id : `dr-${reactId}`;
  const hintId = hint ? `${baseId}-hint` : void 0;
  const errorId = error ? `${baseId}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const popoverId = `${baseId}-popover`;
  const locale = resolveLocale(localeCode);
  const msgs = mergeMessages(locale.messages, messages);
  const fmt = format != null ? format : locale.displayFormat;
  const range = normaliseRange(value);
  const [open, setOpen] = (0, import_react35.useState)(false);
  const [leftMonth, setLeftMonth] = (0, import_react35.useState)(
    () => {
      var _a2;
      return startOfMonth((_a2 = range.start) != null ? _a2 : clampToBounds(/* @__PURE__ */ new Date(), min, max));
    }
  );
  const wrapperRef = (0, import_react35.useRef)(null);
  useDismissOnOutside(wrapperRef, open, () => setOpen(false));
  const rightMonth = (0, import_react35.useMemo)(() => addMonths(leftMonth, 1), [leftMonth]);
  const startStr = formatDate(range.start, fmt);
  const endStr = formatDate(range.end, fmt);
  const display = range.start || range.end ? `${startStr || msgs.placeholder}  \u2192  ${endStr || msgs.placeholder}` : "";
  const handleSelect = (0, import_react35.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { ref: wrapperRef, className: cn("relative space-y-1", className), "data-testid": `daterangepicker-${baseId}`, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("span", { className: "block text-sm font-medium text-text-primary", children: [
      label,
      required ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_jsx_runtime43.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-error ml-1", "aria-hidden": "true", children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "sr-only", children: "(required)" })
      ] }) : null
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
    open && variant === "popover" ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(PresetList, {}),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
    hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }) : null,
    error ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error }) : null
  ] });
}

// modules/ui/DateRangePicker.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");

// modules/ui/TagInput.tsx
var import_react36 = require("react");
var import_react_fontawesome22 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons22 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime45 = require("react/jsx-runtime");
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
  const [input, setInput] = (0, import_react36.useState)("");
  const [editingIdx, setEditingIdx] = (0, import_react36.useState)(null);
  const [editValue, setEditValue] = (0, import_react36.useState)("");
  const inputRef = (0, import_react36.useRef)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("label", { htmlFor: id, className: "block text-sm font-medium text-text-primary", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
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
            (tag, i) => editingIdx === i ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
            ) : /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
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
                  !disabled && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        removeTag(i);
                      },
                      "aria-label": `Remove ${tag}`,
                      className: "hover:opacity-70 focus-visible:outline-none rounded-full",
                      children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_fontawesome22.FontAwesomeIcon, { icon: import_free_solid_svg_icons22.faXmark, className: "w-2.5 h-2.5" })
                    }
                  )
                ]
              },
              i
            )
          ),
          !disabled && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
    hint && !error && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { id: hintId, className: "text-xs text-text-secondary", children: hint }),
    !hint && !error && value.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-xs text-text-disabled", children: "Double-click a tag to edit it" }),
    error && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { id: errorId, className: "text-xs text-error", role: "alert", children: error })
  ] });
}

// modules/app/FilterBar.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: cn("flex flex-wrap items-end gap-3 p-4 bg-surface-raised border border-border rounded-xl", className), children: [
    fields.map((f) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (f.type === "select") {
        return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "min-w-36 flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "min-w-44 flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "min-w-56 flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "min-w-44 flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "flex items-center gap-2 shrink-0 self-end pb-0.5", children: [
      onReset && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Button, { variant: "ghost", size: "sm", onClick: onReset, children: resetLabel }),
      onApply && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Button, { variant: "primary", size: "sm", onClick: onApply, children: applyLabel })
    ] })
  ] });
}

// modules/app/StepFlow.tsx
var import_react37 = require("react");

// modules/ui/Stepper.tsx
var import_react_fontawesome23 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons23 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime47 = require("react/jsx-runtime");
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
  if (state === "complete") return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome23.FontAwesomeIcon, { icon: import_free_solid_svg_icons23.faCheck, className: "w-3.5 h-3.5", "aria-hidden": "true" });
  if (state === "error") return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react_fontawesome23.FontAwesomeIcon, { icon: import_free_solid_svg_icons23.faXmark, className: "w-3.5 h-3.5", "aria-hidden": "true" });
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { children: index + 1 });
}
function Stepper({
  steps,
  orientation = "horizontal",
  className
}) {
  if (orientation === "vertical") {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("ol", { className: cn("flex flex-col gap-0", className), children: steps.map((step, i) => {
      var _a;
      const state = (_a = step.state) != null ? _a : "pending";
      const s = stateStyles[state];
      const isLast = i === steps.length - 1;
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("li", { className: "flex gap-3 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex flex-col items-center shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            "div",
            {
              className: cn(
                "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0",
                s.circle
              ),
              "aria-label": `Step ${i + 1}: ${step.label} \u2014 ${state}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(StepIcon, { state, index: i })
            }
          ),
          !isLast && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: cn("w-0.5 flex-1 min-h-[2rem] mt-1", s.line), "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: cn("pb-6", isLast && "pb-0"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: cn("text-sm", s.text), children: step.label }),
          step.description && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-xs text-text-secondary mt-0.5", children: step.description })
        ] })
      ] }, i);
    }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("ol", { className: cn("flex items-center", className), children: steps.map((step, i) => {
    var _a, _b;
    const state = (_a = step.state) != null ? _a : "pending";
    const s = stateStyles[state];
    const isLast = i === steps.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("li", { className: cn("flex items-center", !isLast && "flex-1"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex flex-col items-center gap-1 shrink-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          "div",
          {
            className: cn(
              "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold",
              s.circle
            ),
            "aria-label": `Step ${i + 1}: ${step.label} \u2014 ${state}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(StepIcon, { state, index: i })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: cn("text-xs whitespace-nowrap", s.text), children: step.label }),
          step.description && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text-xs text-text-secondary", children: step.description })
        ] })
      ] }),
      !isLast && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "div",
        {
          className: cn("h-0.5 flex-1 mx-2 mt-[-1.25rem]", stateStyles[(_b = steps[i].state) != null ? _b : "pending"].line),
          "aria-hidden": "true"
        }
      )
    ] }, i);
  }) });
}

// modules/app/StepFlow.tsx
var import_react_fontawesome24 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons24 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime48 = require("react/jsx-runtime");
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
  const [current, setCurrent] = (0, import_react37.useState)(0);
  const [values, setValues] = (0, import_react37.useState)(initialValues);
  const [stepError, setStepError] = (0, import_react37.useState)();
  const [completing, setCompleting] = (0, import_react37.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: cn("space-y-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Stepper, { steps: stepperItems }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "min-h-[12rem]", children: steps[current].content({ values, onChange, error: stepError }) }),
    stepError && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(AlertBanner, { variant: "error", message: stepError }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-center justify-between gap-3 pt-4 border-t border-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { children: [
        onCancel && current === 0 && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Button, { variant: "ghost", onClick: onCancel, children: cancelLabel }),
        current > 0 && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Button, { variant: "outline", onClick: handlePrev, children: prevLabel })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("span", { className: "text-xs text-text-disabled", children: [
          current + 1,
          " / ",
          steps.length
        ] }),
        isLast ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Button, { variant: "primary", onClick: handleComplete, loading: completing, children: completeLabel }) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Button, { variant: "primary", onClick: handleNext, iconRight: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_fontawesome24.FontAwesomeIcon, { icon: import_free_solid_svg_icons24.faArrowRight, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: nextLabel })
      ] })
    ] })
  ] });
}

// modules/app/StepShell.tsx
var import_react_fontawesome25 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons25 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime49 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    "div",
    {
      className: cn(
        "rounded-2xl border transition-all bg-surface-raised overflow-hidden",
        active ? "border-primary shadow-sm" : "border-border",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex items-center gap-3 px-5 py-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            "span",
            {
              className: cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                done ? "bg-success text-white" : active ? "bg-primary text-primary-fg" : "bg-surface-overlay text-text-disabled"
              ),
              children: done ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_fontawesome25.FontAwesomeIcon, { icon: import_free_solid_svg_icons25.faCheck, className: "w-3 h-3", "aria-hidden": "true" }) : number
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            "h2",
            {
              className: cn(
                "flex-1 text-sm font-semibold",
                active ? "text-text-primary" : done ? "text-text-secondary" : "text-text-disabled"
              ),
              dangerouslySetInnerHTML: { __html: title }
            }
          ),
          done && onEdit && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Button, { variant: "ghost", size: "xs", onClick: onEdit, className: "text-primary shrink-0", children: "Edit" })
        ] }),
        done && summary && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "px-5 pb-4 border-t border-border pt-3 opacity-70", children: summary }),
        active && children && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "px-5 pb-5 border-t border-border pt-4", children })
      ]
    }
  );
}

// modules/app/FileUploadSection/index.tsx
var import_react40 = require("react");

// modules/app/FileUploadSection/parts/DropZone.tsx
var import_react38 = require("react");
var import_react_fontawesome26 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons26 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime50 = require("react/jsx-runtime");
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
  const inputRef = (0, import_react38.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react_fontawesome26.FontAwesomeIcon, { icon: import_free_solid_svg_icons26.faFolderOpen, className: "w-8 h-8 text-text-disabled", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("p", { className: "text-sm text-text-secondary", children: [
          dropHint,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
        showPasteHint && pasteHint && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-xs text-text-disabled", children: pasteHint }),
        hint && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text-xs text-text-disabled", children: hint }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
var import_react_fontawesome27 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons27 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime51 = require("react/jsx-runtime");
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function FileRow({ item, removeLabel, onRemove }) {
  const isImage = item.file.type.startsWith("image/");
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
    "li",
    {
      className: cn(
        "flex items-center gap-3 rounded-md border px-3 py-2 text-sm",
        item.error ? "border-error bg-error-subtle text-error-fg" : "border-border bg-surface-raised text-text-primary"
      ),
      children: [
        isImage && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faImage, className: "w-4 h-4 text-text-secondary shrink-0", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("span", { className: "flex-1 truncate min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "font-medium", children: item.file.name }),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "ml-2 text-xs text-text-secondary", children: formatBytes(item.file.size) })
        ] }),
        item.error && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "text-xs text-error shrink-0", children: item.error }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          "button",
          {
            type: "button",
            "aria-label": `${removeLabel} ${item.file.name}`,
            onClick: onRemove,
            className: "shrink-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded",
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_fontawesome27.FontAwesomeIcon, { icon: import_free_solid_svg_icons27.faXmark, className: "w-3 h-3" })
          }
        )
      ]
    }
  );
}

// modules/app/FileUploadSection/hooks/usePaste.ts
var import_react39 = require("react");
function usePaste(rootRef, enabled, onFiles) {
  (0, import_react39.useEffect)(() => {
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
var import_jsx_runtime52 = require("react/jsx-runtime");
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
  const autoId = (0, import_react40.useId)();
  const inputId = `fus-${autoId}`;
  const rootRef = (0, import_react40.useRef)(null);
  const [internalFiles, setInternalFiles] = (0, import_react40.useState)([]);
  const isControlled = files !== void 0;
  const items = isControlled ? files : internalFiles;
  const [dragging, setDragging] = (0, import_react40.useState)(false);
  const [globalError, setGlobalError] = (0, import_react40.useState)("");
  const msg = (0, import_react40.useMemo)(
    () => __spreadValues(__spreadValues({}, DEFAULT_FUS_MESSAGES), messages),
    [messages]
  );
  const setItems = (0, import_react40.useCallback)(
    (next) => {
      if (!isControlled) setInternalFiles(next);
      onFilesChange == null ? void 0 : onFilesChange(next);
    },
    [isControlled, onFilesChange]
  );
  const validate = (0, import_react40.useCallback)(
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
  const addFiles = (0, import_react40.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
    "section",
    {
      ref: rootRef,
      className: cn("space-y-3", className),
      tabIndex: enablePaste ? -1 : void 0,
      "aria-label": title || "File upload",
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h3", { className: "text-sm font-medium text-text-primary", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
        items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text-xs text-text-disabled", children: msg.emptyState }) : /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("ul", { className: "space-y-1.5", "aria-label": "Selected files", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
          FileRow,
          {
            item,
            removeLabel: msg.remove,
            onRemove: () => removeItem(item.id)
          },
          item.id
        )) }),
        globalError && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { role: "alert", className: "text-sm text-error", children: globalError })
      ]
    }
  );
}

// modules/app/DetailHeader.tsx
var import_react41 = require("react");
var import_jsx_runtime53 = require("react/jsx-runtime");
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
  const [activeTab, setActiveTab] = (0, import_react41.useState)((_b = defaultTab != null ? defaultTab : (_a = tabs == null ? void 0 : tabs[0]) == null ? void 0 : _a.value) != null ? _b : "");
  function handleTab(v) {
    setActiveTab(v);
    onTabChange == null ? void 0 : onTabChange(v);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: cn("border-b border-border bg-surface-raised", className), children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "px-6 pt-6 pb-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-start justify-between gap-4 pb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { className: "text-2xl font-bold text-text-primary leading-tight", children: title }),
          status && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Badge, { variant: statusVariant, children: status }),
          badge
        ] }),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "text-sm text-text-secondary mt-0.5", children: subtitle })
      ] }),
      children && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "flex items-center gap-2 shrink-0 flex-wrap justify-end", children })
    ] }),
    tabs && tabs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { role: "tablist", "aria-label": "Detail navigation", className: "flex -mb-px", children: tabs.map((tab) => {
      const isActive = tab.value === activeTab;
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
var import_react_fontawesome28 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons28 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime54 = require("react/jsx-runtime");
var variantClasses2 = {
  success: "bg-success-subtle border-success text-success-fg",
  error: "bg-error-subtle border-error text-error",
  warning: "bg-warning-subtle border-warning text-text-primary",
  info: "bg-info-subtle border-info text-text-primary"
};
var variantIcons = {
  success: import_free_solid_svg_icons28.faCheck,
  error: import_free_solid_svg_icons28.faXmark,
  warning: import_free_solid_svg_icons28.faTriangleExclamation,
  info: import_free_solid_svg_icons28.faCircleInfo
};
function InlineAlert({ variant = "success", message, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(
    "div",
    {
      className: cn(
        "rounded-lg border px-4 py-2.5 text-sm font-medium flex items-center gap-1.5",
        variantClasses2[variant],
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react_fontawesome28.FontAwesomeIcon, { icon: variantIcons[variant], className: "w-3.5 h-3.5 shrink-0", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { children: message })
      ]
    }
  );
}

// modules/ui/Skeleton.tsx
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

// modules/ui/Spinner.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
var sizeMap3 = {
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "sr-only", children: "Loading\u2026" })
  ] });
}

// modules/app/LoadingState.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
function LoadingState({
  variant = "spinner",
  rows = 5,
  cols = 4,
  cards = 3,
  className
}) {
  if (variant === "spinner") {
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: cn("flex items-center justify-center py-16", className), children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Spinner, { size: "lg" }) });
  }
  if (variant === "table") {
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: cn("w-full overflow-x-auto rounded-lg border border-border", className), "aria-busy": "true", "aria-label": "Loading table", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("thead", { className: "bg-surface-sunken border-b border-border", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("tr", { children: Array.from({ length: cols }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("th", { className: "px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "h-3 rounded bg-surface-sunken animate-pulse w-16" }) }, i)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("tbody", { className: "divide-y divide-border bg-surface-base", children: Array.from({ length: rows }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonTableRow, { cols }, i)) })
    ] }) });
  }
  if (variant === "cards") {
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: cn("grid gap-4", cards >= 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2", className), children: Array.from({ length: cards }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonCard, {}, i)) });
  }
  if (variant === "list") {
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("ul", { className: cn("divide-y divide-border", className), "aria-busy": "true", "aria-label": "Loading list", children: Array.from({ length: rows }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("li", { className: "flex items-center gap-3 py-3 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonAvatar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonLine, { width: "w-1/3" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonLine, { width: "w-2/3" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "h-4 w-12 rounded bg-surface-sunken animate-pulse" })
    ] }, i)) });
  }
  if (variant === "detail") {
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: cn("space-y-6", className), "aria-busy": "true", "aria-label": "Loading detail", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "pb-4 border-b border-border space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonLine, { width: "w-1/4" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonLine, { width: "w-1/2" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "flex gap-2", children: Array.from({ length: 3 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "h-6 w-16 rounded-full bg-surface-sunken animate-pulse" }, i)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "grid sm:grid-cols-2 gap-4", children: Array.from({ length: 4 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonLine, { width: "w-1/4" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonLine, { width: "w-full" })
      ] }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonText, { lines: 4 })
    ] });
  }
  if (variant === "form") {
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: cn("space-y-5", className), "aria-busy": "true", "aria-label": "Loading form", children: [
      Array.from({ length: rows }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(SkeletonLine, { width: "w-1/4" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "h-9 rounded-md bg-surface-sunken animate-pulse w-full" })
      ] }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "h-9 w-20 rounded-md bg-surface-sunken animate-pulse" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "h-9 w-24 rounded-md bg-surface-sunken animate-pulse" })
      ] })
    ] });
  }
  return null;
}

// modules/ui/EmptyState.tsx
var import_jsx_runtime58 = require("react/jsx-runtime");
function EmptyState2({
  icon,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center text-center py-16 px-6",
        className
      ),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "h-12 w-12 rounded-full bg-surface-sunken flex items-center justify-center text-text-disabled text-2xl mb-4", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "mt-1 text-sm text-text-secondary max-w-xs", children: description }),
        action && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "mt-4", children: action })
      ]
    }
  );
}

// modules/app/EmptyErrorState.tsx
var import_react_fontawesome29 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons29 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime59 = require("react/jsx-runtime");
function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
  retryLabel = "Try again",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
      AlertBanner,
      {
        variant: "error",
        title,
        message,
        action: onRetry ? { label: retryLabel, onClick: onRetry } : void 0
      }
    ),
    onRetry && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
      EmptyState2,
      {
        icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faTriangleExclamation, className: "w-5 h-5", "aria-hidden": "true" }),
        title: "Unable to load data",
        description: "There was a problem loading this content.",
        action: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Button, { variant: "outline", size: "sm", onClick: onRetry, iconLeft: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faRotateRight, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: retryLabel })
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
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    EmptyState2,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faMagnifyingGlass, className: "w-5 h-5", "aria-hidden": "true" }),
      title,
      description,
      action: onGoBack ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Button, { variant: "outline", size: "sm", onClick: onGoBack, iconLeft: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faArrowLeft, className: "w-3.5 h-3.5", "aria-hidden": "true" }), children: goBackLabel }) : void 0,
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
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    EmptyState2,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_react_fontawesome29.FontAwesomeIcon, { icon: import_free_solid_svg_icons29.faLock, className: "w-5 h-5", "aria-hidden": "true" }),
      title,
      description,
      action: onRequestAccess ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Button, { variant: "primary", size: "sm", onClick: onRequestAccess, children: "Request access" }) : void 0,
      className
    }
  );
}

// modules/app/NotFoundPage.tsx
var import_link = __toESM(require("next/link"));
var import_react_fontawesome30 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons30 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime60 = require("react/jsx-runtime");
function NotFoundPage({
  title = "Sayfa Bulunamad\u0131",
  description = "Arad\u0131\u011F\u0131n\u0131z sayfa kald\u0131r\u0131lm\u0131\u015F, ta\u015F\u0131nm\u0131\u015F ya da hi\xE7 var olmam\u0131\u015F olabilir.",
  homeHref = "/",
  homeLabel = "Ana Sayfa",
  backLabel = "Geri D\xF6n",
  icon = /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react_fontawesome30.FontAwesomeIcon, { icon: import_free_solid_svg_icons30.faMagnifyingGlass, className: "w-8 h-8 text-primary-fg", "aria-hidden": "true" }),
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: cn("min-h-screen flex flex-col items-center justify-center px-4 bg-surface-base", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h1", { className: "text-2xl sm:text-3xl font-bold text-text-primary text-center", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { className: "mt-3 max-w-md text-center text-text-secondary text-sm sm:text-base leading-relaxed", children: description }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
        import_link.default,
        {
          href: homeHref,
          className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-primary-fg transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          style: {
            background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
            boxShadow: "0 4px 16px color-mix(in srgb, var(--primary) 30%, transparent)"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react_fontawesome30.FontAwesomeIcon, { icon: import_free_solid_svg_icons30.faArrowLeft, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            homeLabel
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        "button",
        {
          onClick: () => history.back(),
          className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-text-primary border border-border transition-colors hover:bg-surface-overlay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
          children: backLabel
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "mt-16 flex items-center gap-2 opacity-20", "aria-hidden": true, children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
var import_jsx_runtime61 = require("react/jsx-runtime");
function SplashScreen({
  visible = true,
  logo,
  message,
  progress,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
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
        logo ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "flex items-center justify-center", children: logo }) : /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Spinner, { size: "xl" }),
        logo && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Spinner, { size: "lg" }),
        progress !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "w-48 h-1 rounded-full bg-surface-sunken overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
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
        message && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "text-sm text-text-secondary animate-pulse", children: message })
      ]
    }
  );
}

// modules/ui/Toast/index.tsx
var import_react43 = require("react");

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

// modules/ui/Toast/parts/ToastItem.tsx
var import_react42 = require("react");
var import_react_fontawesome31 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons31 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/Toast/parts/ProgressBar.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
function ProgressBar({ progress, colorClass }) {
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-black/5", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    "div",
    {
      className: cn("h-full rounded-full transition-none", colorClass),
      style: { width: `${progress}%`, opacity: 0.5 },
      "aria-hidden": "true"
    }
  ) });
}

// modules/ui/Toast/parts/ToastItem.tsx
var import_jsx_runtime63 = require("react/jsx-runtime");
var variantMap3 = {
  success: {
    container: "bg-success-subtle border-success",
    iconColor: "text-success-fg",
    progressColor: "bg-success",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faCircleCheck, className: "size-4 shrink-0" })
  },
  warning: {
    container: "bg-warning-subtle border-warning",
    iconColor: "text-warning",
    progressColor: "bg-warning",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faTriangleExclamation, className: "size-4 shrink-0" })
  },
  error: {
    container: "bg-error-subtle border-error",
    iconColor: "text-error",
    progressColor: "bg-error",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faCircleXmark, className: "size-4 shrink-0" })
  },
  info: {
    container: "bg-info-subtle border-info",
    iconColor: "text-info",
    progressColor: "bg-info",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faCircleInfo, className: "size-4 shrink-0" })
  },
  loading: {
    container: "bg-surface-raised border-border",
    iconColor: "text-text-secondary",
    progressColor: "bg-primary",
    defaultIcon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faSpinner, className: "size-4 shrink-0 animate-spin" })
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
  const [progress, setProgress] = (0, import_react42.useState)(100);
  const [paused, setPaused] = (0, import_react42.useState)(false);
  const [show, setShow] = (0, import_react42.useState)(reducedMotion);
  const [exiting, setExiting] = (0, import_react42.useState)(false);
  const remainingRef = (0, import_react42.useRef)(duration != null ? duration : 0);
  const lastTickRef = (0, import_react42.useRef)(0);
  (0, import_react42.useEffect)(() => {
    if (reducedMotion) return;
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, [reducedMotion]);
  const dismiss = (0, import_react42.useCallback)(() => {
    setExiting(true);
    setTimeout(onRemove, reducedMotion ? 0 : EXIT_MS2);
  }, [onRemove, reducedMotion]);
  (0, import_react42.useEffect)(() => {
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
  (0, import_react42.useEffect)(() => {
    if (!hasDuration) return;
    const handler = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [hasDuration]);
  (0, import_react42.useEffect)(() => {
    remainingRef.current = duration != null ? duration : 0;
    setProgress(100);
    setExiting(false);
  }, [duration]);
  const { container, iconColor, progressColor, defaultIcon } = variantMap3[item.variant];
  const icon = (_a = item.icon) != null ? _a : defaultIcon;
  const showClose = item.closeButton !== false;
  const { role, live } = ariaFor(item.variant);
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex items-start gap-3 px-4 pt-4 pb-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("span", { className: cn("mt-0.5", iconColor), "aria-hidden": "true", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex-1 min-w-0", children: [
            item.title && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("p", { className: "text-sm font-semibold text-text-primary leading-snug", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("p", { className: cn("text-sm text-text-secondary leading-snug", item.title && "mt-0.5"), children: item.message }),
            item.actions && item.actions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "flex flex-wrap gap-x-3 gap-y-1 mt-2.5", children: item.actions.map((action, i) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
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
          showClose && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss",
              onClick: dismiss,
              className: cn(
                "shrink-0 mt-0.5 rounded text-text-secondary hover:text-text-primary transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_react_fontawesome31.FontAwesomeIcon, { icon: import_free_solid_svg_icons31.faXmark, className: "size-3.5" })
            }
          )
        ] }),
        hasDuration && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(ProgressBar, { progress, colorClass: progressColor })
      ]
    }
  );
}

// modules/ui/Toast/parts/Region.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    "div",
    {
      className: cn(
        "fixed z-[90] flex flex-col pointer-events-none",
        positionMap[position],
        className
      ),
      style: { gap: `${gap * 0.25}rem` },
      children: ordered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
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
var import_jsx_runtime65 = require("react/jsx-runtime");
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
  (0, import_react43.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_jsx_runtime65.Fragment, { children: Array.from(buckets.entries()).map(([pos, items]) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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

// modules/app/NotificationSystem.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ToastProvider, { position })
  ] });
}

// modules/app/AccessibilityKit.tsx
var import_react44 = require("react");
var import_react_dom3 = require("react-dom");

// modules/ui/SkipLink.tsx
var import_jsx_runtime67 = require("react/jsx-runtime");
function SkipLink({
  href = "#main-content",
  label = "Skip to main content",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(LiveRegion, { message, politeness });
}

// modules/app/AccessibilityKit.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
function FocusTrap({ active = true, onEscape, className, children }) {
  const ref = (0, import_react44.useRef)(null);
  useFocusTrap(ref, { active, onEscape });
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { ref, tabIndex: -1, className, children });
}
var listeners2 = /* @__PURE__ */ new Set();
var queue = { polite: "", assertive: "" };
function setQueue(next) {
  queue = next;
  for (const fn of listeners2) fn(next);
}
function useAnnounce() {
  return (0, import_react44.useCallback)((message, politeness = "polite") => {
    setQueue(__spreadProps(__spreadValues({}, queue), { [politeness]: "" }));
    window.setTimeout(() => {
      setQueue(__spreadProps(__spreadValues({}, queue), { [politeness]: message }));
    }, 16);
  }, []);
}
function AnnouncerOutlet() {
  const [{ polite, assertive }, setLocal] = (0, import_react44.useState)(queue);
  const [mounted, setMounted] = (0, import_react44.useState)(false);
  (0, import_react44.useEffect)(() => {
    setMounted(true);
    listeners2.add(setLocal);
    return () => {
      listeners2.delete(setLocal);
    };
  }, []);
  if (!mounted) return null;
  return (0, import_react_dom3.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(import_jsx_runtime68.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { role: "status", "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: polite }),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { role: "alert", "aria-live": "assertive", "aria-atomic": "true", className: "sr-only", children: assertive })
    ] }),
    document.body
  );
}

// modules/app/MaintenancePage.tsx
var import_react45 = require("react");
var import_react_fontawesome32 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons32 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime69 = require("react/jsx-runtime");
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
  const [nowMs, setNowMs] = (0, import_react45.useState)(() => Date.now());
  (0, import_react45.useEffect)(() => {
    if (etaMs === null) return;
    const id = window.setInterval(() => setNowMs(Date.now()), 1e3);
    return () => window.clearInterval(id);
  }, [etaMs]);
  const remaining = etaMs !== null ? formatRemaining(etaMs, nowMs) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: cn(
        "min-h-screen flex flex-col items-center justify-center px-4 bg-surface-base",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          "div",
          {
            className: "flex h-20 w-20 mb-6 items-center justify-center rounded-2xl text-4xl shadow-lg",
            style: {
              background: "linear-gradient(135deg, var(--warning) 0%, var(--primary) 100%)",
              boxShadow: "0 8px 32px color-mix(in srgb, var(--warning) 30%, transparent)"
            },
            children: icon != null ? icon : /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
              import_react_fontawesome32.FontAwesomeIcon,
              {
                icon: import_free_solid_svg_icons32.faScrewdriverWrench,
                className: "w-8 h-8 text-text-inverse",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("h1", { className: "text-2xl sm:text-3xl font-bold text-text-primary text-center", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("p", { className: "mt-3 max-w-md text-center text-text-secondary text-sm sm:text-base leading-relaxed", children: description }),
        remaining && /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "mt-6 flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("span", { className: "text-xs uppercase tracking-wide text-text-disabled", children: "Estimated Return" }),
          /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(Badge, { variant: "warning", size: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_react_fontawesome32.FontAwesomeIcon, { icon: import_free_solid_svg_icons32.faClock, className: "w-3 h-3", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("span", { className: "font-mono tabular-nums", children: remaining })
          ] })
        ] }),
        statusUrl && /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
                import_react_fontawesome32.FontAwesomeIcon,
                {
                  icon: import_free_solid_svg_icons32.faArrowUpRightFromSquare,
                  className: "w-3.5 h-3.5",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: "mt-16 flex items-center gap-2 opacity-20", "aria-hidden": true, children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
var import_react46 = require("react");
var import_react_fontawesome33 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons33 = require("@fortawesome/free-solid-svg-icons");

// modules/ui/Avatar.tsx
var import_jsx_runtime70 = (
  // eslint-disable-next-line @next/next/no-img-element
  require("react/jsx-runtime")
);
var sizeMap4 = {
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
  const sizeClass = sizeMap4[size];
  const inner = src ? /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    "img",
    {
      src,
      alt: name,
      className: cn(sizeClass, "rounded-full object-cover border border-border shrink-0", className)
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)("span", { className: "relative inline-flex shrink-0", children: [
    inner,
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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

// modules/app/ShareDialog.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
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
  const linkId = (0, import_react46.useId)();
  const emailId = (0, import_react46.useId)();
  const permId = (0, import_react46.useId)();
  const [email, setEmail] = (0, import_react46.useState)("");
  const [permission, setPermission] = (0, import_react46.useState)(defaultPermission);
  const [copied, setCopied] = (0, import_react46.useState)(false);
  const [inviting, setInviting] = (0, import_react46.useState)(false);
  const [error, setError] = (0, import_react46.useState)(null);
  const emailValid = (0, import_react46.useMemo)(() => /.+@.+\..+/.test(email.trim()), [email]);
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Modal, { open, onClose, title, description, size: "lg", portalTarget, children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { htmlFor: linkId, className: "block text-sm font-medium text-text-primary", children: "Shareable Link" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "flex flex-1 items-center gap-2 rounded-md border border-border bg-surface-base px-3 py-2 text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            import_react_fontawesome33.FontAwesomeIcon,
            {
              icon: import_free_solid_svg_icons33.faLink,
              className: "w-3.5 h-3.5 text-text-disabled shrink-0",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
          Button,
          {
            variant: copied ? "secondary" : "primary",
            onClick: copyLink,
            iconLeft: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
              import_react_fontawesome33.FontAwesomeIcon,
              {
                icon: copied ? import_free_solid_svg_icons33.faCheck : import_free_solid_svg_icons33.faCopy,
                className: "w-3.5 h-3.5",
                "aria-hidden": "true"
              }
            ),
            children: copied ? "Copied" : "Copy"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("label", { htmlFor: emailId, className: "block text-sm font-medium text-text-primary", children: "Invite People" }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "flex items-center gap-2 rounded-md border border-border bg-surface-base px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-border-focus", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
          import_react_fontawesome33.FontAwesomeIcon,
          {
            icon: import_free_solid_svg_icons33.faEnvelope,
            className: "w-3.5 h-3.5 text-text-disabled shrink-0",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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
            children: permissions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: p.value, children: p.label }, p.value))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
          Button,
          {
            onClick: handleInvite,
            loading: inviting,
            disabled: !emailValid || inviting,
            iconLeft: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react_fontawesome33.FontAwesomeIcon, { icon: import_free_solid_svg_icons33.faPaperPlane, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: "Invite"
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { id: `${emailId}-error`, className: "text-xs text-error", role: "alert", children: error })
    ] }),
    invitees.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("p", { className: "text-xs uppercase tracking-wide text-text-disabled font-medium", children: [
        "People with access (",
        invitees.length,
        ")"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("ul", { className: "divide-y divide-border rounded-md border border-border bg-surface-base", children: invitees.map((inv) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("li", { className: "flex items-center gap-3 px-3 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Avatar, { src: (_a = inv.avatarUrl) != null ? _a : void 0, name: inv.name, size: "sm" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { className: "text-sm font-medium text-text-primary truncate", children: inv.name }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("p", { className: "text-xs text-text-secondary truncate", children: inv.email })
          ] }),
          inv.permission === "owner" ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            "span",
            {
              className: cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                permissionBadgeClass.owner
              ),
              children: "Owner"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            "select",
            {
              value: inv.permission,
              onChange: (e) => onPermissionChange == null ? void 0 : onPermissionChange(inv.id, e.target.value),
              "aria-label": `Permission for ${inv.name}`,
              className: cn(
                "rounded-md border border-border bg-surface-base px-2 py-1 text-xs text-text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              ),
              children: permissions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("option", { value: p.value, children: p.label }, p.value))
            }
          ),
          inv.permission !== "owner" && onRemove && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_react_fontawesome33.FontAwesomeIcon, { icon: import_free_solid_svg_icons33.faXmark, className: "w-3 h-3", "aria-hidden": "true" })
            }
          )
        ] }, inv.id);
      }) })
    ] })
  ] }) });
}

// modules/app/CommentThread.tsx
var import_react47 = require("react");
var import_react_fontawesome34 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons34 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime72 = require("react/jsx-runtime");
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
  const [replying, setReplying] = (0, import_react47.useState)(false);
  const [draft, setDraft] = (0, import_react47.useState)("");
  const [submitting, setSubmitting] = (0, import_react47.useState)(false);
  const replyId = (0, import_react47.useId)();
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
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("li", { className: "flex gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(Avatar, { src: (_a = comment.author.avatarUrl) != null ? _a : void 0, name: comment.author.name, size: "sm" }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "rounded-lg bg-surface-overlay px-3 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("span", { className: "text-sm font-semibold text-text-primary truncate", children: comment.author.name }),
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            "time",
            {
              dateTime: comment.createdAt instanceof Date ? comment.createdAt.toISOString() : String(comment.createdAt),
              className: "text-xs text-text-disabled shrink-0",
              children: formatTimestamp(comment.createdAt)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("p", { className: "mt-1 text-sm text-text-primary whitespace-pre-wrap break-words", children: comment.body })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "mt-1 flex items-center gap-3 px-1 text-xs text-text-secondary", children: [
        onLike && /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome34.FontAwesomeIcon, { icon: import_free_solid_svg_icons34.faHeart, className: "w-3 h-3", "aria-hidden": "true" }),
              (_b = comment.likeCount) != null ? _b : 0
            ]
          }
        ),
        canReply && /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome34.FontAwesomeIcon, { icon: import_free_solid_svg_icons34.faReply, className: "w-3 h-3", "aria-hidden": "true" }),
              "Reply"
            ]
          }
        ),
        isOwn && onDelete && /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(
          "button",
          {
            type: "button",
            onClick: () => onDelete(comment.id),
            className: cn(
              "inline-flex items-center gap-1 ml-auto transition-colors hover:text-error",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus rounded"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome34.FontAwesomeIcon, { icon: import_free_solid_svg_icons34.faTrash, className: "w-3 h-3", "aria-hidden": "true" }),
              "Delete"
            ]
          }
        )
      ] }),
      replying && /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "mt-2 flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("label", { htmlFor: replyId, className: "sr-only", children: [
          "Reply to ",
          comment.author.name
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                setReplying(false);
                setDraft("");
              },
              iconLeft: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome34.FontAwesomeIcon, { icon: import_free_solid_svg_icons34.faXmark, className: "w-3 h-3", "aria-hidden": "true" }),
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            Button,
            {
              size: "sm",
              onClick: submitReply,
              loading: submitting,
              disabled: !draft.trim() || submitting,
              iconLeft: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome34.FontAwesomeIcon, { icon: import_free_solid_svg_icons34.faPaperPlane, className: "w-3 h-3", "aria-hidden": "true" }),
              children: "Reply"
            }
          )
        ] })
      ] }),
      comment.replies && comment.replies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("ul", { className: "mt-3 space-y-3 border-l border-border pl-4", children: comment.replies.map((child) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
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
  const [draft, setDraft] = (0, import_react47.useState)("");
  const [submitting, setSubmitting] = (0, import_react47.useState)(false);
  const rootId = (0, import_react47.useId)();
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
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("section", { className: cn("space-y-4", className), "aria-label": "Comments", children: [
    onReply && /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("label", { htmlFor: rootId, className: "sr-only", children: "New comment" }),
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
        Button,
        {
          onClick: submitRoot,
          loading: submitting,
          disabled: !draft.trim() || submitting,
          iconLeft: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_react_fontawesome34.FontAwesomeIcon, { icon: import_free_solid_svg_icons34.faPaperPlane, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
          children: "Post Comment"
        }
      ) })
    ] }),
    comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("p", { className: "rounded-md border border-dashed border-border bg-surface-base px-4 py-6 text-center text-sm text-text-secondary", children: emptyMessage }) : /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("ul", { className: "space-y-4", children: comments.map((c) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
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
var import_react48 = require("react");
var import_react_fontawesome35 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons35 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime73 = require("react/jsx-runtime");
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
  const [active, setActive] = (0, import_react48.useState)(0);
  const containerRef = (0, import_react48.useRef)(null);
  const itemRefs = (0, import_react48.useRef)([]);
  const filtered = (0, import_react48.useMemo)(
    () => users.filter((u) => filter(u, query)).slice(0, maxItems),
    [users, query, filter, maxItems]
  );
  const safeActive = filtered.length === 0 ? 0 : Math.min(active, filtered.length - 1);
  (0, import_react48.useEffect)(() => {
    var _a;
    (_a = itemRefs.current[safeActive]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }, [safeActive]);
  (0, import_react48.useEffect)(() => {
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
  (0, import_react48.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex items-center gap-2 border-b border-border px-3 py-2 text-xs text-text-secondary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_react_fontawesome35.FontAwesomeIcon, { icon: import_free_solid_svg_icons35.faAt, className: "w-3 h-3 text-text-disabled", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("span", { className: "font-medium", children: query ? `"${query}"` : "Mention\u2026" })
        ] }),
        filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("p", { className: "px-3 py-4 text-sm text-center text-text-secondary", children: emptyMessage }) : /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("ul", { className: "max-h-64 overflow-y-auto py-1", children: filtered.map((user, i) => {
          var _a, _b;
          const isActive = i === safeActive;
          return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Avatar, { src: (_a = user.avatarUrl) != null ? _a : void 0, name: user.name, size: "sm" }),
                /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("p", { className: "text-sm font-medium text-text-primary truncate", children: user.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("p", { className: "text-xs text-text-secondary truncate", children: user.handle ? `@${user.handle}` : (_b = user.subtitle) != null ? _b : "" })
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
var import_react49 = require("react");
var import_react_fontawesome36 = require("@fortawesome/react-fontawesome");
var import_free_solid_svg_icons36 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_runtime74 = require("react/jsx-runtime");
function ProgressBar2({ value, total }) {
  const pct = total > 0 ? Math.min(100, Math.max(0, (value + 1) / total * 100)) : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    "div",
    {
      className: "h-1 w-full rounded-full bg-surface-sunken overflow-hidden",
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": total,
      "aria-valuenow": value + 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    "div",
    {
      className: "flex items-center gap-2",
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": total,
      "aria-valuenow": value + 1,
      children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
  const [current, setCurrent] = (0, import_react49.useState)(Math.min(Math.max(initialStep, 0), steps.length - 1));
  const [completing, setCompleting] = (0, import_react49.useState)(false);
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
  const body = /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: cn("flex flex-col gap-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("span", { className: "text-xs uppercase tracking-wide text-text-disabled font-medium shrink-0", children: [
        current + 1,
        " / ",
        steps.length
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "flex-1", children: indicator === "bar" ? /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(ProgressBar2, { value: current, total: steps.length }) : /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(ProgressDots, { value: current, total: steps.length }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("h2", { className: "text-lg font-semibold text-text-primary", children: step.title }),
      step.description && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("p", { className: "mt-1 text-sm text-text-secondary", children: step.description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "min-h-[8rem]", children: typeof step.content === "function" ? step.content({ goNext, goPrev }) : step.content }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: "flex items-center justify-between gap-3 pt-4 border-t border-border", children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { children: !isFirst && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
        Button,
        {
          variant: "outline",
          onClick: goPrev,
          iconLeft: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_react_fontawesome36.FontAwesomeIcon, { icon: import_free_solid_svg_icons36.faArrowLeft, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
          children: prevLabel
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)("div", { className: "flex items-center gap-2", children: [
        allowSkip && !isLast && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
          Button,
          {
            variant: "ghost",
            onClick: () => onSkip == null ? void 0 : onSkip(),
            iconLeft: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_react_fontawesome36.FontAwesomeIcon, { icon: import_free_solid_svg_icons36.faXmark, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: skipLabel
          }
        ),
        isLast ? /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
          Button,
          {
            onClick: complete,
            loading: completing,
            iconLeft: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_react_fontawesome36.FontAwesomeIcon, { icon: import_free_solid_svg_icons36.faCheck, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: completeLabel
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
          Button,
          {
            onClick: goNext,
            iconRight: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_react_fontawesome36.FontAwesomeIcon, { icon: import_free_solid_svg_icons36.faArrowRight, className: "w-3.5 h-3.5", "aria-hidden": "true" }),
            children: nextLabel
          }
        )
      ] })
    ] })
  ] });
  if (mode === "modal") {
    return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "mx-auto w-full max-w-2xl rounded-xl border border-border bg-surface-raised p-6 shadow-sm", children: body });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Announcer,
  AnnouncerOutlet,
  AppBreadcrumbs,
  AppCommandBar,
  AppDrawer,
  AppFooter,
  AppNav,
  AppShell,
  AppSidebar,
  AppTopBar,
  CommentThread,
  ContextMenu,
  DetailHeader,
  ErrorState,
  FileUploadSection,
  FilterBar,
  FocusTrap,
  Form,
  FormField,
  GlobalSearch,
  ImageGallery,
  InlineAlert,
  LiveRegion,
  LoadingState,
  MaintenancePage,
  MentionPicker,
  NavDrawer,
  NoAccessState,
  NotFoundPage,
  NotFoundState,
  NotificationProvider,
  OnboardingWizard,
  SectionCard,
  ShareDialog,
  SkipLink,
  SplashScreen,
  StepFlow,
  StepShell,
  ThemeSwitcher,
  Tooltip,
  notify,
  toast,
  useAnnounce
});
