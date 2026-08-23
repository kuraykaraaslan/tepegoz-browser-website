import * as react from 'react';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type DateValue = Date | null;
type DateRange = {
    start: Date | null;
    end: Date | null;
};
type LocaleCode = 'tr' | 'en';
type DisabledDates = Date[] | ((d: Date) => boolean);
type DatePickerMessages = {
    /** Trigger placeholder when no date selected. */
    placeholder: string;
    /** Aria-label for the chevron-left (previous month) button. */
    prevMonth: string;
    /** Aria-label for the chevron-right (next month) button. */
    nextMonth: string;
    /** Button label that jumps to today. */
    today: string;
    /** Aria-label for the clear (×) button on the trigger. */
    clear: string;
    /** Aria-label for the calendar dialog. */
    dialogLabel: string;
    /** Visible label when the user reaches a disabled day via keyboard. */
    disabledDate: string;
};
type CommonPickerProps = {
    id?: string;
    label?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    min?: Date;
    max?: Date;
    disabledDates?: DisabledDates;
    /** Locale code — defaults to 'tr'. */
    locale?: LocaleCode;
    /** Override the locale-default display format. */
    format?: string;
    /** Override individual messages (placeholder, today, …). */
    messages?: Partial<DatePickerMessages>;
    /** Popover (default) is the only M1 variant. */
    variant?: 'popover';
    className?: string;
    /** Pass-through name attribute for native form submission. */
    name?: string;
};
type DatePickerProps = CommonPickerProps & {
    value: DateValue;
    onChange: (d: Date | null) => void;
};
type DateRangePickerProps = CommonPickerProps & {
    value: DateRange | null;
    onChange: (r: DateRange) => void;
};

type SelectOption = {
    value: string;
    label: string;
    icon?: React.ReactNode;
};
type BaseProps = {
    id: string;
    label: string;
    options: SelectOption[];
    placeholder?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    searchable?: boolean;
    className?: string;
};
declare const Select: react.ForwardRefExoticComponent<BaseProps & Omit<react.SelectHTMLAttributes<HTMLSelectElement>, "id"> & react.RefAttributes<HTMLSelectElement>>;

declare function SkipLink({ href, label, className, }: {
    href?: string;
    label?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function LiveRegion({ message, politeness, className, }: {
    message?: string;
    politeness?: 'polite' | 'assertive';
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function Announcer({ message, politeness, }: {
    message: string;
    politeness?: 'polite' | 'assertive';
}): react_jsx_runtime.JSX.Element;

type BreadcrumbItem = {
    label: string;
    href?: string;
};
declare function Breadcrumb({ items, separator, maxItems, className, }: {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    maxItems?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type ComboBoxOption = {
    value: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
};
type LoadMoreFn = () => Promise<ComboBoxOption[]>;
type ComboBoxProps = {
    id: string;
    label: string;
    options: ComboBoxOption[];
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (query: string, signal?: AbortSignal) => ComboBoxOption[] | Promise<ComboBoxOption[]>;
    onLoadMore?: LoadMoreFn;
    placeholder?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    clearable?: boolean;
    noResultsText?: string;
    className?: string;
    debounceMs?: number;
    virtualize?: boolean | number;
};

type MultiSelectOption = ComboBoxOption;
type MultiSelectProps = {
    id: string;
    label: string;
    options: MultiSelectOption[];
    value?: string[];
    onChange?: (values: string[]) => void;
    placeholder?: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    searchable?: boolean;
    className?: string;
    onSearch?: (q: string, signal?: AbortSignal) => MultiSelectOption[] | Promise<MultiSelectOption[]>;
    onLoadMore?: () => Promise<MultiSelectOption[]>;
    debounceMs?: number;
};
declare function MultiSelect({ id, label, options, value, onChange, placeholder, hint, error, disabled, searchable, className, onSearch, onLoadMore, debounceMs, }: MultiSelectProps): react_jsx_runtime.JSX.Element;

type ToastVariant = 'success' | 'warning' | 'error' | 'info' | 'loading';
type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
type ToastItemAction = {
    label: string;
    /** Receives a `dismiss` callback so actions can optionally close the toast. */
    onClick: (dismiss: () => void) => void;
    variant?: 'default' | 'danger';
};
type ToastItem = {
    id: string;
    variant: ToastVariant;
    message: string;
    title?: string;
    icon?: ReactNode;
    /** ms — undefined = variant default; 0 = persistent */
    duration?: number;
    actions?: ToastItemAction[];
    /** Show the × close button (default: true) */
    closeButton?: boolean;
    /** Per-toast position override (M1) — falls back to <Toaster position>. */
    position?: ToastPosition;
};
/** Options accepted by `toast(message, opts)` and `toast.success(...)` etc. */
type ToastOptions = Partial<Omit<ToastItem, 'id' | 'variant' | 'message'>>;
/** Customisable copy strings for built-in toaster UI (M2+ extends this). */
type ToastMessages = {
    dismiss?: string;
};
/** Imperative API surface — keep in sync with `toast` object. */
type ToastApi = {
    (message: string, opts?: ToastOptions): string;
    success: (message: string, opts?: ToastOptions) => string;
    error: (message: string, opts?: ToastOptions) => string;
    warning: (message: string, opts?: ToastOptions) => string;
    info: (message: string, opts?: ToastOptions) => string;
    loading: (message: string, opts?: ToastOptions) => string;
    promise: <T>(promise: Promise<T>, messages: {
        loading: string;
        success: string | ((data: T) => string);
        error: string | ((err: unknown) => string);
    }, opts?: ToastOptions) => string;
    update: (id: string, patch: Partial<Omit<ToastItem, 'id'>>) => void;
    dismiss: (id: string) => void;
    clear: () => void;
};
/** @deprecated Pre-directory-split alias. Prefer ToastItemAction. */
type ToastAction = {
    label: string;
    onClick: () => void;
};

declare const toast: ToastApi;
type ToasterProps = {
    /** Default position for toasts that don't specify their own. */
    position?: ToastPosition;
    /** Maximum concurrent toasts (default 5). Older toasts dismiss FIFO. */
    max?: number;
    /** Tailwind gap unit between stacked toasts (default 2 = 0.5rem). */
    gap?: number;
    /** Skip enter/exit animation. M3 will auto-detect `prefers-reduced-motion`. */
    reducedMotion?: boolean;
    /** Localisable copy. TODO M2: pipe into close button / action labels. */
    messages?: ToastMessages;
};
declare function Toaster({ position, max, gap, reducedMotion, messages: _messages, }?: ToasterProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use `<Toaster />` — kept for back-compat with the pre-split API. */
declare const ToastProvider: typeof Toaster;
/** @deprecated Use `<Toaster />` instead. Static region without store wiring. */
declare function ToastRegion({ children, position, className, }: {
    children?: React.ReactNode;
    position?: ToastPosition;
    className?: string;
}): react_jsx_runtime.JSX.Element;
/** @deprecated Mount `<Toaster />` and call `toast.success(...)` instead. */
declare function Toast({ variant, message, duration, onDismiss, action, }: {
    variant?: ToastItem['variant'];
    message: string;
    duration?: number;
    onDismiss?: () => void;
    action?: {
        label: string;
        onClick: () => void;
    };
}): null;

type TooltipTheme = 'default' | 'dark' | 'light';
type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
declare function Tooltip({ content, placement, theme, arrow, delay, children, className, }: {
    content: React.ReactNode;
    placement?: TooltipPlacement;
    theme?: TooltipTheme;
    arrow?: boolean;
    delay?: number;
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { Announcer as A, Breadcrumb as B, type ComboBoxOption as C, type DateRange as D, LiveRegion as L, MultiSelect as M, Select as S, Toast as T, type BreadcrumbItem as a, type MultiSelectOption as b, type SelectOption as c, SkipLink as d, type ToastAction as e, type ToastItem as f, type ToastItemAction as g, type ToastPosition as h, ToastProvider as i, ToastRegion as j, type ToastVariant as k, Tooltip as l, type DatePickerProps as m, type DateRangePickerProps as n, type ComboBoxProps as o, toast as t };
