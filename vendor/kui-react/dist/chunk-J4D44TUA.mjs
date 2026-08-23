"use client";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  cn
} from "./chunk-RBDK7MWQ.mjs";

// modules/ui/VideoPlayer/index.tsx
import { useCallback as useCallback5, useEffect as useEffect6, useRef as useRef3, useState as useState5 } from "react";

// modules/ui/VideoPlayer/format.ts
function formatTime(seconds) {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

// modules/ui/VideoPlayer/parts/ControlRow.tsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
  faExpand,
  faCompress,
  faRotateLeft,
  faRotateRight,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { faChromecast } from "@fortawesome/free-brands-svg-icons";

// modules/ui/VideoPlayer/parts/CtrlBtn.tsx
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
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

// modules/ui/VideoPlayer/parts/ControlRow.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const volumeIcon = muted || volume === 0 ? faVolumeOff : volume < 0.5 ? faVolumeLow : faVolumeHigh;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx2(CtrlBtn, { onClick: () => onSeekBy(-10), "aria-label": "Rewind 10 seconds", children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: faRotateLeft, className: "text-sm", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsx2(CtrlBtn, { onClick: onPlay, "aria-label": playing ? "Pause" : "Play", primary: true, children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: playing ? faPause : faPlay, className: "text-base", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsx2(CtrlBtn, { onClick: () => onSeekBy(10), "aria-label": "Forward 10 seconds", children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: faRotateRight, className: "text-sm", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center gap-1.5",
        onMouseEnter: () => setShowVolumeSlider(true),
        onMouseLeave: () => setShowVolumeSlider(false),
        children: [
          /* @__PURE__ */ jsx2(CtrlBtn, { onClick: onToggleMute, "aria-label": muted ? "Unmute" : "Mute", children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: volumeIcon, className: "text-sm", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx2(
            "div",
            {
              className: cn(
                "overflow-hidden transition-all duration-200 ease-out",
                showVolumeSlider ? "w-20 opacity-100" : "w-0 opacity-0"
              ),
              children: /* @__PURE__ */ jsx2(
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
    /* @__PURE__ */ jsxs("span", { className: "text-white/70 text-xs tabular-nums flex-1 pl-1 select-none", children: [
      formatTime(currentTime),
      /* @__PURE__ */ jsx2("span", { className: "text-white/30 mx-0.5", children: "/" }),
      formatTime(duration)
    ] }),
    /* @__PURE__ */ jsx2(
      CtrlBtn,
      {
        onClick: onToggleSettings,
        "aria-label": "Settings",
        "aria-expanded": showSettings,
        active: showSettings,
        children: /* @__PURE__ */ jsx2(
          FontAwesomeIcon,
          {
            icon: faGear,
            className: cn("text-sm transition-transform duration-300", showSettings && "rotate-[30deg]"),
            "aria-hidden": "true"
          }
        )
      }
    ),
    enableCast && castState !== "unavailable" && /* @__PURE__ */ jsx2(
      CtrlBtn,
      {
        onClick: onToggleCast,
        "aria-label": castState === "connected" ? "Stop casting" : "Cast to device",
        "aria-pressed": castState === "connected",
        active: castState === "connected" || castState === "connecting",
        children: /* @__PURE__ */ jsx2(
          FontAwesomeIcon,
          {
            icon: faChromecast,
            className: cn("text-sm", castState === "connecting" && "animate-pulse"),
            "aria-hidden": "true"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx2(
      CtrlBtn,
      {
        onClick: onToggleFullscreen,
        "aria-label": isFullscreen ? "Exit fullscreen" : "Enter fullscreen",
        children: /* @__PURE__ */ jsx2(FontAwesomeIcon, { icon: isFullscreen ? faCompress : faExpand, className: "text-sm", "aria-hidden": "true" })
      }
    )
  ] });
}

// modules/ui/VideoPlayer/parts/ProgressBar.tsx
import { forwardRef } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var ProgressBar = forwardRef(function ProgressBar2({ progress, buffered, seekHoverX, seekHoverPct, hoverTime, onSeek, onSeekMouseMove, onSeekLeave }, ref) {
  return /* @__PURE__ */ jsxs2(
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
        /* @__PURE__ */ jsx3(
          "div",
          {
            className: "absolute inset-y-0 left-0 rounded-full bg-white/25",
            style: { width: `${buffered}%` }
          }
        ),
        /* @__PURE__ */ jsx3(
          "div",
          {
            className: "absolute inset-y-0 left-0 rounded-full bg-primary transition-all",
            style: { width: `${progress}%` }
          }
        ),
        seekHoverPct !== null && /* @__PURE__ */ jsx3(
          "div",
          {
            className: "absolute inset-y-0 left-0 rounded-full bg-white/15",
            style: { width: `${seekHoverPct}%` }
          }
        ),
        /* @__PURE__ */ jsx3(
          "div",
          {
            className: "absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md opacity-0 group-hover/seek:opacity-100 transition-opacity",
            style: { left: `calc(${progress}% - 7px)` }
          }
        ),
        hoverTime && seekHoverX !== null && /* @__PURE__ */ jsx3(
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

// modules/ui/VideoPlayer/parts/SettingsPanel.tsx
import { forwardRef as forwardRef2 } from "react";
import { FontAwesomeIcon as FontAwesomeIcon5 } from "@fortawesome/react-fontawesome";
import { faGear as faGear2 } from "@fortawesome/free-solid-svg-icons";

// modules/ui/VideoPlayer/parts/SettingsRow.tsx
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function SettingsRow({ label, value, onClick }) {
  return /* @__PURE__ */ jsxs3(
    "button",
    {
      type: "button",
      onClick,
      className: "w-full flex items-center justify-between px-4 py-2.5 hover:bg-white/10 transition-colors group",
      children: [
        /* @__PURE__ */ jsx4("span", { className: "text-white/85 text-sm", children: label }),
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-1.5 text-white/45 text-xs group-hover:text-white/65 transition-colors", children: [
          /* @__PURE__ */ jsx4("span", { children: value }),
          /* @__PURE__ */ jsx4(FontAwesomeIcon2, { icon: faChevronRight, className: "text-[10px]", "aria-hidden": "true" })
        ] })
      ]
    }
  );
}

// modules/ui/VideoPlayer/parts/SettingsSubMenu.tsx
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function SettingsSubMenu({ title, onBack, children }) {
  return /* @__PURE__ */ jsxs4("div", { children: [
    /* @__PURE__ */ jsxs4(
      "button",
      {
        type: "button",
        onClick: onBack,
        className: "w-full flex items-center gap-2.5 px-3 py-2.5 border-b border-white/10 hover:bg-white/5 transition-colors",
        children: [
          /* @__PURE__ */ jsx5(FontAwesomeIcon3, { icon: faChevronLeft, className: "text-white/50 text-xs", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx5("span", { className: "text-white text-sm font-semibold", children: title })
        ]
      }
    ),
    /* @__PURE__ */ jsx5("div", { className: "py-1", children })
  ] });
}

// modules/ui/VideoPlayer/parts/SettingsOption.tsx
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function SettingsOption({ label, sublabel, selected, onClick }) {
  return /* @__PURE__ */ jsxs5(
    "button",
    {
      type: "button",
      onClick,
      className: cn(
        "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-white/10",
        selected ? "text-primary font-semibold" : "text-white/80"
      ),
      children: [
        /* @__PURE__ */ jsxs5("span", { className: "flex flex-col items-start gap-0.5", children: [
          /* @__PURE__ */ jsx6("span", { children: label }),
          sublabel && /* @__PURE__ */ jsx6("span", { className: "text-xs text-white/35 font-normal", children: sublabel })
        ] }),
        selected && /* @__PURE__ */ jsx6(FontAwesomeIcon4, { icon: faCheck, className: "text-primary text-xs shrink-0", "aria-hidden": "true" })
      ]
    }
  );
}

// modules/ui/VideoPlayer/constants.ts
var SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
var SUBTITLE_SIZES = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.3rem",
  xl: "1.65rem"
};
var SUBTITLE_SIZE_LABELS = {
  sm: "K\xFC\xE7\xFCk",
  md: "Orta",
  lg: "B\xFCy\xFCk",
  xl: "\xC7ok B\xFCy\xFCk"
};

// modules/ui/VideoPlayer/parts/SettingsPanel.tsx
import { Fragment, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var SettingsPanel = forwardRef2(function SettingsPanel2({
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
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      ref,
      className: "absolute bottom-14 right-4 w-60 bg-black/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden z-20",
      children: [
        view === "main" && /* @__PURE__ */ jsxs6(Fragment, { children: [
          /* @__PURE__ */ jsxs6("div", { className: "px-4 py-2.5 border-b border-white/10 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx7(FontAwesomeIcon5, { icon: faGear2, className: "text-white/50 text-xs", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx7("p", { className: "text-white/70 text-xs font-semibold uppercase tracking-wider", children: "Ayarlar" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { className: "py-1", children: [
            qualities && qualities.length > 0 && /* @__PURE__ */ jsx7(
              SettingsRow,
              {
                label: "Kalite",
                value: currentQualityLabel,
                onClick: () => onChangeView("quality")
              }
            ),
            /* @__PURE__ */ jsx7(
              SettingsRow,
              {
                label: "Oynatma H\u0131z\u0131",
                value: speed === 1 ? "Normal" : `${speed}\xD7`,
                onClick: () => onChangeView("speed")
              }
            ),
            subtitles && subtitles.length > 0 && /* @__PURE__ */ jsxs6(Fragment, { children: [
              /* @__PURE__ */ jsx7(
                SettingsRow,
                {
                  label: "Altyaz\u0131",
                  value: currentSubtitleLabel,
                  onClick: () => onChangeView("subtitles")
                }
              ),
              /* @__PURE__ */ jsx7(
                SettingsRow,
                {
                  label: "Altyaz\u0131 Boyutu",
                  value: SUBTITLE_SIZE_LABELS[subtitleFontSize],
                  onClick: () => onChangeView("subtitle-size")
                }
              )
            ] }),
            audioTracks && audioTracks.length > 1 && /* @__PURE__ */ jsx7(
              SettingsRow,
              {
                label: "Ses Dili",
                value: currentAudioLabel,
                onClick: () => onChangeView("language")
              }
            )
          ] })
        ] }),
        view === "quality" && qualities && /* @__PURE__ */ jsx7(SettingsSubMenu, { title: "Kalite", onBack: () => onChangeView("main"), children: qualities.map((q) => /* @__PURE__ */ jsx7(
          SettingsOption,
          {
            label: q.label,
            selected: selectedQuality === q.value,
            onClick: () => applyQuality(q.value)
          },
          q.value
        )) }),
        view === "speed" && /* @__PURE__ */ jsx7(SettingsSubMenu, { title: "Oynatma H\u0131z\u0131", onBack: () => onChangeView("main"), children: SPEEDS.map((s) => /* @__PURE__ */ jsx7(
          SettingsOption,
          {
            label: s === 1 ? "1\xD7 (Normal)" : `${s}\xD7`,
            selected: speed === s,
            onClick: () => applySpeed(s)
          },
          s
        )) }),
        view === "subtitles" && subtitles && /* @__PURE__ */ jsxs6(SettingsSubMenu, { title: "Altyaz\u0131", onBack: () => onChangeView("main"), children: [
          /* @__PURE__ */ jsx7(
            SettingsOption,
            {
              label: "Kapal\u0131",
              selected: selectedSubtitle === null,
              onClick: () => applySubtitle(null)
            }
          ),
          subtitles.map((sub, i) => /* @__PURE__ */ jsx7(
            SettingsOption,
            {
              label: sub.label,
              selected: selectedSubtitle === i,
              onClick: () => applySubtitle(i)
            },
            i
          ))
        ] }),
        view === "subtitle-size" && /* @__PURE__ */ jsx7(SettingsSubMenu, { title: "Altyaz\u0131 Boyutu", onBack: () => onChangeView("main"), children: Object.entries(SUBTITLE_SIZE_LABELS).map(
          ([key, label]) => /* @__PURE__ */ jsx7(
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
        view === "language" && audioTracks && /* @__PURE__ */ jsx7(SettingsSubMenu, { title: "Ses Dili", onBack: () => onChangeView("main"), children: audioTracks.map((track, i) => /* @__PURE__ */ jsx7(
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

// modules/ui/VideoPlayer/parts/Overlays.tsx
import { FontAwesomeIcon as FontAwesomeIcon6 } from "@fortawesome/react-fontawesome";
import { faPlay as faPlay2, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faChromecast as faChromecast2 } from "@fortawesome/free-brands-svg-icons";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function CastOverlay({
  castDeviceName,
  title
}) {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 gap-3 text-center px-6",
      style: {
        background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0) 100%)"
      },
      children: [
        /* @__PURE__ */ jsx8(
          FontAwesomeIcon6,
          {
            icon: faChromecast2,
            className: "text-white text-5xl drop-shadow-lg",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx8("p", { className: "text-white/90 text-sm font-medium", children: castDeviceName ? `${castDeviceName} cihaz\u0131na yay\u0131nlan\u0131yor` : "Cihaza yay\u0131nlan\u0131yor" }),
        title && /* @__PURE__ */ jsx8("p", { className: "text-white/60 text-xs max-w-[90%] truncate", children: title })
      ]
    }
  );
}
function LoadingOverlay() {
  return /* @__PURE__ */ jsx8("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none", children: /* @__PURE__ */ jsx8(
    FontAwesomeIcon6,
    {
      icon: faSpinner,
      className: "text-white text-4xl animate-spin drop-shadow-lg",
      "aria-hidden": "true"
    }
  ) });
}
function CenterPlayOverlay({ playing }) {
  return /* @__PURE__ */ jsx8(
    "div",
    {
      className: cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        "transition-opacity duration-300 ease-out",
        playing ? "opacity-0" : "opacity-100"
      ),
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx8(
        "div",
        {
          className: cn(
            "w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm",
            "flex items-center justify-center shadow-2xl ring-2 ring-white/20",
            "transition-transform duration-300 ease-out",
            playing ? "scale-125" : "scale-100"
          ),
          children: /* @__PURE__ */ jsx8(FontAwesomeIcon6, { icon: faPlay2, className: "text-white text-2xl ml-1" })
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
  return /* @__PURE__ */ jsx8(
    "div",
    {
      className: cn(
        "absolute left-0 right-0 flex justify-center px-6 pointer-events-none z-10 transition-all duration-300",
        effectiveControls ? "bottom-[4.5rem]" : "bottom-4"
      ),
      children: /* @__PURE__ */ jsx8(
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

// modules/ui/VideoPlayer/hooks/useControlsVisibility.ts
import { useCallback, useEffect, useRef, useState as useState2 } from "react";
function useControlsVisibility({
  controlsVisible,
  autoHideControls,
  isCasting,
  playing,
  onChange
}) {
  const [showControls, setShowControls] = useState2(true);
  const hideTimerRef = useRef(null);
  const isControlled = controlsVisible !== void 0;
  const effectiveControls = isCasting ? true : isControlled ? controlsVisible : showControls;
  useEffect(() => {
    onChange == null ? void 0 : onChange(effectiveControls);
  }, [effectiveControls, onChange]);
  const scheduleHide = useCallback(
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
  const resetHideTimer = useCallback(() => {
    scheduleHide(playing);
  }, [playing, scheduleHide]);
  const forceShow = useCallback(() => {
    if (!isControlled) setShowControls(true);
  }, [isControlled]);
  const hideIfPlaying = useCallback(() => {
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

// modules/ui/VideoPlayer/hooks/useVideoEvents.ts
import { useEffect as useEffect2 } from "react";
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
  useEffect2(() => {
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

// modules/ui/VideoPlayer/hooks/useSubtitleCues.ts
import { useEffect as useEffect3, useState as useState3 } from "react";
function useSubtitleCues({ videoRef, selectedSubtitle, subtitles }) {
  const [cueText, setCueText] = useState3(null);
  useEffect3(() => {
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

// modules/ui/VideoPlayer/hooks/useGoogleCast.ts
import { useCallback as useCallback2, useEffect as useEffect4, useRef as useRef2, useState as useState4 } from "react";
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
  const [castState, setCastState] = useState4("unavailable");
  const [castDeviceName, setCastDeviceName] = useState4(null);
  const remotePlayerRef = useRef2(null);
  const remoteControllerRef = useRef2(null);
  useEffect4(() => {
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
  useEffect4(() => {
    onCastStateChange == null ? void 0 : onCastStateChange(castState);
  }, [castState, onCastStateChange]);
  const toggleCast = useCallback2(async () => {
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

// modules/ui/VideoPlayer/hooks/useFullscreen.ts
import { useCallback as useCallback3 } from "react";
function useFullscreen(containerRef) {
  const toggleFullscreen = useCallback3(() => {
    const c = containerRef.current;
    if (!c) return;
    if (!document.fullscreenElement) c.requestFullscreen();
    else document.exitFullscreen();
  }, [containerRef]);
  return { toggleFullscreen };
}

// modules/ui/VideoPlayer/hooks/useKeyboardShortcuts.ts
import { useEffect as useEffect5 } from "react";
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
  useEffect5(() => {
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

// modules/ui/VideoPlayer/hooks/usePlayerActions.ts
import { useCallback as useCallback4 } from "react";
function usePlayerActions({
  isCasting,
  videoRef,
  progressRef,
  remotePlayerRef,
  remoteControllerRef,
  setVolume,
  setMuted
}) {
  const togglePlay = useCallback4(() => {
    if (isCasting && remoteControllerRef.current) {
      remoteControllerRef.current.playOrPause();
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  }, [isCasting, remoteControllerRef, videoRef]);
  const seekBy = useCallback4(
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
  const toggleMute = useCallback4(() => {
    if (isCasting && remoteControllerRef.current) {
      remoteControllerRef.current.muteOrUnmute();
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, [isCasting, remoteControllerRef, videoRef, setMuted]);
  const handleVolumeChange = useCallback4(
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
  const handleSeek = useCallback4(
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

// modules/ui/VideoPlayer/index.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
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
  const videoRef = useRef3(null);
  const containerRef = useRef3(null);
  const progressRef = useRef3(null);
  const settingsPanelRef = useRef3(null);
  const [playing, setPlaying] = useState5(false);
  const [currentTime, setCurrentTime] = useState5(0);
  const [duration, setDuration] = useState5(0);
  const [buffered, setBuffered] = useState5(0);
  const [volume, setVolume] = useState5(1);
  const [muted, setMuted] = useState5(startMuted);
  const [speed, setSpeed] = useState5(1);
  const [isFullscreen, setIsFullscreen] = useState5(false);
  const [loading, setLoading] = useState5(true);
  const [seekHoverX, setSeekHoverX] = useState5(null);
  const [selectedQuality, setSelectedQuality] = useState5((_b = defaultQuality != null ? defaultQuality : (_a = qualities == null ? void 0 : qualities[0]) == null ? void 0 : _a.value) != null ? _b : "");
  const [selectedSubtitle, setSelectedSubtitle] = useState5(null);
  const [selectedAudioTrack, setSelectedAudioTrack] = useState5(0);
  const [subtitleFontSize, setSubtitleFontSize] = useState5("md");
  const [showSettings, setShowSettings] = useState5(false);
  const [settingsView, setSettingsView] = useState5("main");
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
  const closeSettings = useCallback5(() => {
    setShowSettings(false);
    setSettingsView("main");
  }, []);
  const applySpeed = useCallback5((s) => {
    const v = videoRef.current;
    if (v) v.playbackRate = s;
    setSpeed(s);
    closeSettings();
  }, [closeSettings]);
  const applyQuality = useCallback5((value) => {
    setSelectedQuality(value);
    onQualityChange == null ? void 0 : onQualityChange(value);
    closeSettings();
  }, [onQualityChange, closeSettings]);
  const applySubtitle = useCallback5((index) => {
    setSelectedSubtitle(index);
    closeSettings();
  }, [closeSettings]);
  const applyAudioTrack = useCallback5((index) => {
    setSelectedAudioTrack(index);
    onAudioTrackChange == null ? void 0 : onAudioTrackChange(index);
    closeSettings();
  }, [onAudioTrackChange, closeSettings]);
  const applySubtitleSize = useCallback5((size) => {
    setSubtitleFontSize(size);
    setSettingsView("main");
  }, []);
  useKeyboardShortcuts({ containerRef, videoRef, togglePlay, seekBy, toggleMute, handleVolumeChange, toggleFullscreen, volume, showSettings, closeSettings });
  useEffect6(() => {
    if (!showSettings) return;
    const handler = (e) => {
      var _a2;
      if (!((_a2 = settingsPanelRef.current) == null ? void 0 : _a2.contains(e.target))) closeSettings();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showSettings, closeSettings]);
  const handleSeekMouseMove = useCallback5((e) => {
    const bar = progressRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    setSeekHoverX(Math.max(0, Math.min(rect.width, e.clientX - rect.left)));
  }, []);
  const progress = duration > 0 ? currentTime / duration * 100 : 0;
  const seekHoverPct = seekHoverX !== null && progressRef.current ? seekHoverX / progressRef.current.getBoundingClientRect().width * 100 : null;
  const hoverTime = seekHoverPct !== null ? formatTime(seekHoverPct / 100 * duration) : null;
  return /* @__PURE__ */ jsxs8(
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
        /* @__PURE__ */ jsxs8(
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
              sources.map((s, i) => typeof s === "string" ? /* @__PURE__ */ jsx9("source", { src: s }, i) : /* @__PURE__ */ jsx9("source", { src: s.src, type: s.type }, i)),
              subtitles == null ? void 0 : subtitles.map((sub, i) => /* @__PURE__ */ jsx9("track", { kind: "subtitles", label: sub.label, srcLang: sub.srclang, src: sub.src }, i))
            ]
          }
        ),
        isCasting && /* @__PURE__ */ jsx9(CastOverlay, { castDeviceName, title }),
        loading && /* @__PURE__ */ jsx9(LoadingOverlay, {}),
        !loading && /* @__PURE__ */ jsx9(CenterPlayOverlay, { playing }),
        cueText && /* @__PURE__ */ jsx9(SubtitleOverlay, { cueText, effectiveControls, subtitleFontSize }),
        /* @__PURE__ */ jsxs8(
          "div",
          {
            className: cn("absolute inset-0 flex flex-col justify-end transition-opacity duration-300 z-20", effectiveControls ? "opacity-100" : "opacity-0 pointer-events-none"),
            onClick: (e) => {
              if (e.target === e.currentTarget && !isCasting) togglePlay();
            },
            children: [
              /* @__PURE__ */ jsx9("div", { className: "absolute inset-0 pointer-events-none", style: { background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)" } }),
              showSettings && /* @__PURE__ */ jsx9(
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
              /* @__PURE__ */ jsxs8("div", { className: "relative px-4 pb-3 pt-6 space-y-2.5", children: [
                title && /* @__PURE__ */ jsx9("p", { className: "text-white/90 text-sm font-medium truncate leading-tight", children: title }),
                /* @__PURE__ */ jsx9(
                  ProgressBar,
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
                /* @__PURE__ */ jsx9(
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

export {
  VideoPlayer
};
