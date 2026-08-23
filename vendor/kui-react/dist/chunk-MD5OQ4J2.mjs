"use client";
import {
  Button
} from "./chunk-MTT5TKAJ.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/MapView/index.tsx
import { useCallback as useCallback2, useState as useState5 } from "react";

// modules/ui/Card.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
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
      children: loading ? /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 space-y-3 animate-pulse", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-surface-sunken rounded w-2/3" }),
        /* @__PURE__ */ jsx("div", { className: "h-3 bg-surface-sunken rounded w-full" }),
        /* @__PURE__ */ jsx("div", { className: "h-3 bg-surface-sunken rounded w-4/5" }),
        /* @__PURE__ */ jsx("div", { className: "h-3 bg-surface-sunken rounded w-1/2" })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        (title || headerRight) && /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3 px-6 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            title && /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-text-primary", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "text-xs text-text-secondary mt-0.5", children: subtitle })
          ] }),
          headerRight && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: headerRight })
        ] }),
        children && /* @__PURE__ */ jsx("div", { className: "px-6 py-4", children }),
        footer && /* @__PURE__ */ jsx("div", { className: "px-6 py-3 border-t border-border bg-surface-base", children: footer })
      ] })
    })
  );
}

// modules/ui/MapView/parts/LeafletCanvas.tsx
import { useEffect as useEffect3, useState as useState2 } from "react";

// modules/ui/MapView/providers/leaflet.ts
var LEAFLET_TILES = {
  light: {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  },
  dark: {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
};
var _cached = null;
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

// modules/ui/MapView/hooks/useDarkMode.ts
import { useEffect, useState } from "react";
function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
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

// modules/ui/MapView/hooks/useFitBounds.ts
import { useEffect as useEffect2 } from "react";
function useFitBounds(map, L, markers, padding) {
  useEffect2(() => {
    if (!map || !L || padding === void 0) return;
    if (!markers.length) return;
    const bounds = L.latLngBounds(markers.map((m) => m.position));
    if (!bounds.isValid()) return;
    map.fitBounds(bounds, { padding: [padding, padding] });
  }, [map, L, padding, markers.length]);
}

// modules/ui/MapView/parts/Popup.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Popup({ tooltip }) {
  var _a, _b;
  const hasMeta = Boolean(tooltip.description) || Boolean((_a = tooltip.fields) == null ? void 0 : _a.length);
  return /* @__PURE__ */ jsxs2("div", { style: { minWidth: 130, maxWidth: 220 }, children: [
    /* @__PURE__ */ jsx2("p", { style: {
      fontWeight: 600,
      fontSize: 13,
      color: "#111827",
      marginBottom: hasMeta ? 3 : 0
    }, children: tooltip.title }),
    tooltip.description && /* @__PURE__ */ jsx2("p", { style: {
      fontSize: 11,
      color: "#6b7280",
      marginBottom: ((_b = tooltip.fields) == null ? void 0 : _b.length) ? 4 : 0,
      lineHeight: 1.4
    }, children: tooltip.description }),
    tooltip.fields && tooltip.fields.length > 0 && /* @__PURE__ */ jsx2("table", { style: { width: "100%", borderCollapse: "collapse", marginTop: 2 }, children: /* @__PURE__ */ jsx2("tbody", { children: tooltip.fields.map((f, i) => /* @__PURE__ */ jsxs2("tr", { children: [
      /* @__PURE__ */ jsx2("td", { style: { fontSize: 11, color: "#6b7280", paddingRight: 6, paddingTop: 1, whiteSpace: "nowrap" }, children: f.label }),
      /* @__PURE__ */ jsx2("td", { style: { fontSize: 11, color: "#111827", fontWeight: 500, paddingTop: 1 }, children: f.value })
    ] }, i)) }) })
  ] });
}

// modules/ui/MapView/types.ts
var VARIANT_HEX = {
  primary: "#3b82f6",
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#06b6d4",
  neutral: "#6b7280"
};
var VARIANT_FILL = {
  primary: "#3b82f620",
  success: "#22c55e20",
  warning: "#f59e0b20",
  error: "#ef444420",
  info: "#06b6d420",
  neutral: "#6b728020"
};
function markerSvg(color) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36" style="filter:drop-shadow(0 2px 3px rgba(0,0,0,0.35))">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 3.143 1.204 5.997 3.17 8.126L12 36l8.83-15.874A11.945 11.945 0 0 0 24 12C24 5.373 18.627 0 12 0z" fill="${color}"/>
      <circle cx="12" cy="12" r="4.5" fill="white" opacity="0.9"/>
    </svg>`;
}

// modules/ui/MapView/parts/Marker.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs3(
    RLMarker,
    {
      position: marker.position,
      icon,
      eventHandlers: { click: () => onMarkerClick == null ? void 0 : onMarkerClick(marker.id) },
      children: [
        marker.tooltip && /* @__PURE__ */ jsx3(RLTooltip, { children: /* @__PURE__ */ jsx3(Popup, { tooltip: marker.tooltip }) }),
        !marker.tooltip && marker.label && /* @__PURE__ */ jsx3(RLTooltip, { children: /* @__PURE__ */ jsx3("span", { style: { fontSize: 12, fontWeight: 600 }, children: marker.label }) })
      ]
    }
  );
}

// modules/ui/MapView/parts/Shapes.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function ZoneShape({ zone, Polygon, Tooltip }) {
  var _a, _b;
  const variant = (_a = zone.variant) != null ? _a : "primary";
  const strokeColor = VARIANT_HEX[variant];
  const fillColor = VARIANT_FILL[variant];
  return /* @__PURE__ */ jsx4(
    Polygon,
    {
      positions: zone.positions,
      pathOptions: {
        color: strokeColor,
        fillColor,
        fillOpacity: (_b = zone.fillOpacity) != null ? _b : 0.25,
        weight: 2
      },
      children: zone.label && /* @__PURE__ */ jsx4(Tooltip, { sticky: true, children: /* @__PURE__ */ jsx4("span", { style: { fontWeight: 600, fontSize: 12, color: strokeColor }, children: zone.label }) })
    }
  );
}
function RouteShape({ route, Polyline, Tooltip }) {
  var _a, _b;
  return /* @__PURE__ */ jsx4(
    Polyline,
    {
      positions: route.positions,
      pathOptions: {
        color: (_a = route.color) != null ? _a : VARIANT_HEX.primary,
        weight: (_b = route.weight) != null ? _b : 3,
        dashArray: route.dashed ? "8 6" : void 0
      },
      children: route.label && /* @__PURE__ */ jsx4(Tooltip, { sticky: true, children: /* @__PURE__ */ jsx4("span", { style: { fontWeight: 600, fontSize: 12 }, children: route.label }) })
    }
  );
}

// modules/ui/MapView/parts/LeafletCanvas.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function LeafletCanvas(props) {
  const [bundle, setBundle] = useState2(null);
  useEffect3(() => {
    let alive = true;
    loadLeaflet().then((b) => {
      if (alive) setBundle(b);
    });
    return () => {
      alive = false;
    };
  }, []);
  if (!bundle) {
    return /* @__PURE__ */ jsx5("div", { className: "w-full h-full flex items-center justify-center bg-surface-raised", children: /* @__PURE__ */ jsx5("span", { className: "text-sm text-text-secondary", children: "Harita y\xFCkleniyor\u2026" }) });
  }
  return /* @__PURE__ */ jsx5(InnerMap, __spreadProps(__spreadValues({}, props), { bundle }));
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
  const { MapContainer, TileLayer, Marker, Tooltip, Polygon, Polyline, useMap, useMapEvents, L } = bundle;
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
  return /* @__PURE__ */ jsxs4(
    MapContainer,
    {
      center,
      zoom,
      style: { width: "100%", height: "100%" },
      className: addMode ? "cursor-crosshair" : "",
      children: [
        /* @__PURE__ */ jsx5(TileLayer, { attribution: tiles.attribution, url: tiles.url }, isDark ? "dark" : "light"),
        /* @__PURE__ */ jsx5(ClickHandler, {}),
        /* @__PURE__ */ jsx5(FitBounds, {}),
        showZones && zones.map((zone) => /* @__PURE__ */ jsx5(ZoneShape, { zone, Polygon, Tooltip }, zone.id)),
        showRoutes && routes.map((route) => /* @__PURE__ */ jsx5(RouteShape, { route, Polyline, Tooltip }, route.id)),
        markers.map((marker) => /* @__PURE__ */ jsx5(
          MarkerPart,
          {
            marker,
            L,
            RLMarker: Marker,
            RLTooltip: Tooltip,
            onMarkerClick
          },
          marker.id
        ))
      ]
    }
  );
}

// modules/ui/MapView/parts/Toolbar.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faRoute,
  faLayerGroup,
  faPlus,
  faXmark,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Toolbar({
  addMode,
  onToggleAddMode,
  hasZones,
  showZones,
  onToggleZones,
  hasRoutes,
  showRoutes,
  onToggleRoutes
}) {
  return /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2 flex-wrap", children: [
    /* @__PURE__ */ jsx6(
      Button,
      {
        size: "xs",
        variant: addMode ? "primary" : "outline",
        title: addMode ? "\u0130\u015Faret\xE7i eklemeyi iptal et" : "Haritaya i\u015Faret\xE7i ekle",
        onClick: onToggleAddMode,
        iconLeft: /* @__PURE__ */ jsx6(FontAwesomeIcon, { icon: addMode ? faXmark : faPlus, "aria-hidden": "true" }),
        iconRight: /* @__PURE__ */ jsx6(FontAwesomeIcon, { icon: faLocationDot, "aria-hidden": "true" }),
        children: addMode ? "\u0130ptal" : "\u0130\u015Faret\xE7i Ekle"
      }
    ),
    hasZones && /* @__PURE__ */ jsx6(
      Button,
      {
        size: "xs",
        variant: showZones ? "primary" : "outline",
        title: showZones ? "B\xF6lgeleri gizle" : "B\xF6lgeleri g\xF6ster",
        onClick: onToggleZones,
        iconLeft: /* @__PURE__ */ jsx6(FontAwesomeIcon, { icon: showZones ? faEye : faEyeSlash, "aria-hidden": "true" }),
        iconRight: /* @__PURE__ */ jsx6(FontAwesomeIcon, { icon: faLayerGroup, "aria-hidden": "true" }),
        children: "B\xF6lgeler"
      }
    ),
    hasRoutes && /* @__PURE__ */ jsx6(
      Button,
      {
        size: "xs",
        variant: showRoutes ? "primary" : "outline",
        title: showRoutes ? "Rotalar\u0131 gizle" : "Rotalar\u0131 g\xF6ster",
        onClick: onToggleRoutes,
        iconLeft: /* @__PURE__ */ jsx6(FontAwesomeIcon, { icon: showRoutes ? faEye : faEyeSlash, "aria-hidden": "true" }),
        iconRight: /* @__PURE__ */ jsx6(FontAwesomeIcon, { icon: faRoute, "aria-hidden": "true" }),
        children: "Rotalar"
      }
    ),
    addMode && /* @__PURE__ */ jsx6("span", { className: "text-xs text-primary font-medium animate-pulse", children: "Haritaya t\u0131klayarak i\u015Faret\xE7i ekleyin" })
  ] });
}

// modules/ui/MapView/hooks/useInViewport.ts
import { useEffect as useEffect4, useRef, useState as useState3 } from "react";
function useInViewport(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState3(false);
  useEffect4(() => {
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

// modules/ui/MapView/hooks/useAutoMarkers.ts
import { useCallback, useRef as useRef2, useState as useState4 } from "react";
function useAutoMarkers(onMarkerAdd) {
  const [extras, setExtras] = useState4([]);
  const counter = useRef2(0);
  const handleMapClick = useCallback((lat, lng) => {
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

// modules/ui/MapView/index.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
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
  const [addMode, setAddMode] = useState5(false);
  const [showZones, setShowZones] = useState5(true);
  const [showRoutes, setShowRoutes] = useState5(true);
  const { extras, handleMapClick } = useAutoMarkers(onMarkerAdd);
  const onMapClick = useCallback2((lat, lng) => {
    handleMapClick(lat, lng);
    setAddMode(false);
  }, [handleMapClick]);
  if (provider !== "leaflet") {
    throw new Error(`MapView provider "${provider}" is not yet implemented \u2014 TODO M1+`);
  }
  const cssHeight = typeof height === "number" ? `${height}px` : height;
  return /* @__PURE__ */ jsx7(Card, { variant: "raised", className: cn("overflow-hidden", className), children: /* @__PURE__ */ jsxs6("div", { className: "-mx-6 -my-4 flex flex-col", ref, children: [
    /* @__PURE__ */ jsx7("div", { className: "px-4 py-2.5 bg-surface-raised border-b border-border", children: /* @__PURE__ */ jsx7(
      Toolbar,
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
    /* @__PURE__ */ jsx7("div", { style: { height: cssHeight, isolation: "isolate" }, children: !visible ? /* @__PURE__ */ jsx7("div", { className: "w-full h-full flex items-center justify-center bg-surface-raised", children: /* @__PURE__ */ jsx7("span", { className: "text-sm text-text-secondary", children: "Harita y\xFCkleniyor\u2026" }) }) : /* @__PURE__ */ jsx7(
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

export {
  Card,
  MapView
};
