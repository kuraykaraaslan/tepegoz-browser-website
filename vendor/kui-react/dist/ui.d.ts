import * as react_jsx_runtime from 'react/jsx-runtime';
import { m as DatePickerProps, n as DateRangePickerProps, o as ComboBoxProps, f as ToastItem } from './Tooltip-Bof5GvOc.js';
export { A as Announcer, B as Breadcrumb, a as BreadcrumbItem, C as ComboBoxOption, D as DateRange, L as LiveRegion, M as MultiSelect, b as MultiSelectOption, S as Select, c as SelectOption, d as SkipLink, T as Toast, e as ToastAction, g as ToastItemAction, h as ToastPosition, i as ToastProvider, j as ToastRegion, k as ToastVariant, l as Tooltip, t as toast } from './Tooltip-Bof5GvOc.js';
import * as react from 'react';
import react__default, { ReactNode, ComponentType } from 'react';
export { D as DropdownItem, a as DropdownMenu } from './DropdownMenu-f5yV9dzM.js';
import * as zustand from 'zustand';

declare const sizeMap$1: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare const statusColorMap: {
    online: string;
    offline: string;
    away: string;
    busy: string;
};
declare function Avatar({ src, name, size, status, className, }: {
    src?: string | null;
    name: string;
    size?: keyof typeof sizeMap$1;
    status?: keyof typeof statusColorMap;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function AvatarGroup({ avatars, max, size, }: {
    avatars: {
        src?: string | null;
        name: string;
    }[];
    max?: number;
    size?: keyof typeof sizeMap$1;
}): react_jsx_runtime.JSX.Element;

/**
 * Merges a component's own props with the native props of the element/component
 * specified by the `as` prop, with own props taking precedence on conflicts.
 *
 * Usage:
 *   type ButtonOwnProps = { variant?: 'primary' | 'secondary' };
 *   export function Button<C extends React.ElementType = 'button'>({
 *     as, ...rest
 *   }: PolymorphicProps<C, ButtonOwnProps>) { ... }
 */
type PolymorphicProps<C extends React.ElementType, OwnProps = {}> = OwnProps & Omit<React.ComponentPropsWithRef<C>, keyof OwnProps> & {
    as?: C;
};

type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral' | 'primary';
type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeOwnProps = {
    children: React.ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
};
declare function Badge<C extends React.ElementType = 'span'>({ as, children, variant, size, dot, dismissible, onDismiss, className, ...rest }: PolymorphicProps<C, BadgeOwnProps>): react_jsx_runtime.JSX.Element;

type BrandLogoProps = {
    children?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    className?: string;
};
declare function BrandLogo({ children, size, className }: BrandLogoProps): react_jsx_runtime.JSX.Element;

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonOwnProps = {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconOnly?: boolean;
    fullWidth?: boolean;
    selected?: boolean;
    type?: 'button' | 'submit' | 'reset';
    'data-testid'?: string;
    className?: string;
};
declare function Button<C extends React.ElementType = 'button'>({ as, children, variant, size, loading, iconLeft, iconRight, iconOnly, fullWidth, selected, type, 'data-testid': testId, className, ...rest }: PolymorphicProps<C, ButtonOwnProps>): react_jsx_runtime.JSX.Element;

declare function Checkbox({ id, label, hint, error, disabled, indeterminate, className, ...props }: {
    id: string;
    label: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'type'>): react_jsx_runtime.JSX.Element;

declare function DatePicker({ id, label, hint, error, value, onChange, disabled, required, min, max, disabledDates, locale: localeCode, format, messages, variant, className, name, }: DatePickerProps): react_jsx_runtime.JSX.Element;
declare function DateRangePicker({ id, label, hint, error, value, onChange, disabled, required, min, max, disabledDates, locale: localeCode, format, messages, variant, className, }: DateRangePickerProps): react_jsx_runtime.JSX.Element;

/** User-facing messages for validation and status. Allows i18n overrides. */
type FileInputMessages = {
    /** Shown when a file exceeds `maxSizeBytes`. Receives the limit (formatted). */
    invalidSize: (limit: string) => string;
    /** Shown when a file type is not in `allowedTypes` or does not match `accept`. */
    invalidType: string;
    /** Shown when more files are selected than `maxFiles`. */
    tooMany: (max: number) => string;
    /** Default upload failure message. */
    uploadFailed: string;
    /** Default upload success message. */
    uploadSuccess: string;
};
type FileInputProps = {
    id: string;
    label?: string;
    hint?: string;
    multiple?: boolean;
    accept?: string;
    maxSizeBytes?: number;
    /** Optional cap on total selected count. */
    maxFiles?: number;
    /** Explicit MIME whitelist (overrides loose `accept` pattern matching). */
    allowedTypes?: string[];
    disabled?: boolean;
    required?: boolean;
    name?: string;
    /** When true, listens for paste-from-clipboard (image bytes). M1. */
    enablePaste?: boolean;
    /** Optional callback fired with the validated File[] (no internal upload). */
    onFiles?: (files: File[]) => void;
    /** Optional upload action; when set, renders an upload button. */
    onUpload?: (files: File[]) => Promise<void>;
    uploadLabel?: string;
    className?: string;
    /** i18n / copy overrides for validation + status messages. */
    messages?: Partial<FileInputMessages>;
};

declare function FileInput({ id, label, hint, multiple, accept, maxSizeBytes, maxFiles, allowedTypes, disabled, required, name, enablePaste, onFiles, onUpload, uploadLabel, className, messages, }: FileInputProps): react_jsx_runtime.JSX.Element;

declare const Input: react.ForwardRefExoticComponent<{
    id: string;
    label: string;
    hint?: string;
    error?: string;
    success?: string;
    required?: boolean;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    clearable?: boolean;
    onClear?: () => void;
    showCount?: boolean;
    maxLength?: number;
    className?: string;
} & react.InputHTMLAttributes<HTMLInputElement> & react.RefAttributes<HTMLInputElement>>;

declare const sizeMap: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
declare function Spinner({ size, className, }: {
    size?: keyof typeof sizeMap;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type StarRatingSize = 'sm' | 'md' | 'lg';
type StarRatingProps = {
    /** Current rating value (0–5, decimals supported when readonly). */
    value: number;
    /** Visual size of each star. Defaults to 'md'. */
    size?: StarRatingSize;
    /**
     * When true (default) the component is purely presentational.
     * When false, supply `onChange` to let users pick a whole-star rating.
     */
    readonly?: boolean;
    /** Called with the new (whole-star) value when interactive. */
    onChange?: (value: number) => void;
    /**
     * Accessible label override. When omitted a sensible default is generated
     * such as "4.5 out of 5 stars".
     */
    'aria-label'?: string;
    /** Optional caption shown next to the stars (e.g. "(312 reviews)"). */
    caption?: React.ReactNode;
    className?: string;
};
declare function StarRating({ value, size, readonly, onChange, 'aria-label': ariaLabel, caption, className, }: StarRatingProps): react_jsx_runtime.JSX.Element;

type StatCardProps = {
    label: string;
    value: number | string;
    accent?: string;
    className?: string;
};
declare function StatCard({ label, value, accent, className }: StatCardProps): react_jsx_runtime.JSX.Element;

declare const Textarea: react.ForwardRefExoticComponent<{
    id: string;
    label: string;
    hint?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    rows?: number;
    className?: string;
} & Omit<react.TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "rows"> & react.RefAttributes<HTMLTextAreaElement>>;

declare function Toggle({ id, label, description, checked, onChange, disabled, size, className, }: {
    id: string;
    label: string;
    description?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}): react_jsx_runtime.JSX.Element;

type SortDirection = 'asc' | 'desc';
type SortState = {
    /** Column key. */
    key: string;
    /** Direction. */
    dir: SortDirection;
};
type ColumnFilterKind = 'text' | 'select';
type ColumnFilterConfig = {
    /** Filter kind — M1 only supports 'text' and 'select'. */
    kind: ColumnFilterKind;
    /** Placeholder text for text inputs. */
    placeholder?: string;
    /** Options for 'select' kind. */
    options?: {
        label: string;
        value: string;
    }[];
};
type FilterState = Record<string, string>;
/**
 * Column definition shared by every table mode.
 * Backwards compatible with the legacy `TableColumn<T>` shape.
 */
type Column<T> = {
    key: keyof T | string;
    /**
     * Column heading.
     *
     * Widened from `string` to `ReactNode` so a header can carry a control —
     * a select-all checkbox, a help tooltip — without the consumer overlaying
     * one absolutely and hoping the alignment holds. Every existing `string`
     * header keeps working unchanged.
     */
    header: ReactNode;
    render?: (row: T) => ReactNode;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    /** M1: per-column filter popover config. Set to truthy to enable. */
    filter?: ColumnFilterConfig;
    /** Optional CSS class for the `<th>`. */
    thClass?: string;
    /** Optional CSS class for the `<td>`. */
    tdClass?: string;
};
/**
 * Backwards-compatible alias preserved so legacy `TableColumn<T>` imports
 * keep working without source changes.
 */
type TableColumn<T> = Column<T>;
type DataTableMode = 'static' | 'paginated' | 'server';
type DataTableStateValue = 'empty' | 'loading' | 'error' | 'ready';
type DataTableFetchArgs = {
    page: number;
    pageSize: number;
    sort: SortState[];
    search: string;
    filters: FilterState;
};
type DataTableFetchResult<T> = {
    rows: T[];
    total: number;
    cursor?: string;
};
type DataTableMessages = {
    empty: string;
    loading: string;
    error: string;
    searchPlaceholder: string;
    rowsPerPage: string;
    filter: string;
    clearFilter: string;
    apply: string;
};

declare function Table<T extends Record<string, unknown>>({ columns, rows, caption, emptyMessage, defaultSortKey, defaultSortDir, className, }: {
    columns: Column<T>[];
    rows: T[];
    caption?: string;
    emptyMessage?: string;
    defaultSortKey?: string;
    defaultSortDir?: SortDirection;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type DataTableProps<T extends Record<string, unknown>> = {
    /** Column descriptors. */
    columns: Column<T>[];
    /** Rows — required for `mode="static" | "paginated"`. Ignored for `mode="server"` (use `fetchPage`). */
    rows?: T[];
    /** Table mode — defaults to `paginated` for backwards compatibility with the legacy `<DataTable />`. */
    mode?: DataTableMode;
    /**
     * Server-side fetcher. Required when `mode="server"`.
     * Called whenever sort / filter / search / pagination changes.
     */
    fetchPage?: (args: DataTableFetchArgs) => Promise<DataTableFetchResult<T>>;
    /** Caption — visually hidden, exposed to screen readers. */
    caption?: string;
    /** Render a search bar above the table. */
    searchable?: boolean;
    /** Placeholder for the search bar. */
    searchPlaceholder?: string;
    /** Default rows-per-page. */
    pageSize?: number;
    /** Page size options shown in the toolbar select. */
    pageSizeOptions?: number[];
    /** Custom empty-state message. */
    emptyMessage?: string;
    /** Custom loading message. */
    loadingMessage?: string;
    /** Custom error message. Takes precedence over `errorMessage` from `fetchPage` rejection. */
    errorMessage?: string;
    /**
     * Manual override of the data state. Useful when the consumer owns the
     * fetch lifecycle and wants to show loading/error skeletons.
     */
    state?: DataTableStateValue;
    /** Click handler for individual rows. */
    onRowClick?: (row: T) => void;
    /** Optional message bundle for i18n. */
    messages?: Partial<DataTableMessages>;
    /** Initial sort. */
    initialSort?: SortState[];
    className?: string;
    /** Stable id used as a prefix for child element ids — falls back to React.useId(). */
    id?: string;
    /**
     * Legacy `AdvancedDataTable` props — preserved so the deprecated alias keeps
     * working without source changes. Will move to dedicated props in M4/M5.
     * @deprecated Use selection / expandable props (coming in M4/M5).
     */
    legacyAdvancedRows?: AdvancedDataTableRow<T>[];
    /** @deprecated Will be replaced by `selectable: 'single' | 'multi'` in M4. */
    selectable?: boolean;
    /** @deprecated Will be replaced by `enableStickyHeader` plugin in M2. */
    stickyHeader?: boolean;
    /** @deprecated Will be replaced by typed selection state in M4. */
    onSelectionChange?: (selected: number[]) => void;
    /**
     * Legacy ServerDataTable props.
     * @deprecated Server-controlled props — prefer the unified `mode="server"` + `fetchPage` flow.
     */
    serverControlled?: {
        page: number;
        totalPages: number;
        total?: number;
        pageSize?: number;
        onPageChange: (page: number) => void;
        getRowKey: (row: T) => string;
        loading?: boolean;
        title?: string;
        subtitle?: string;
        headerRight?: React.ReactNode;
        toolbar?: React.ReactNode;
    };
};
/**
 * Legacy advanced-table row shape — accepts an `_expanded` slot for
 * expandable detail rows.
 */
type AdvancedDataTableRow<T> = T & {
    _expanded?: React.ReactNode;
};
declare function DataTable<T extends Record<string, unknown>>(props: DataTableProps<T>): react_jsx_runtime.JSX.Element;

/**
 * @deprecated Use `<DataTable />` with selection / expandable props (coming in M4/M5).
 * Will be removed in a future major. Kept as a thin re-export over the unified
 * implementation so existing consumers keep working.
 */
declare function AdvancedDataTable<T extends Record<string, unknown>>(props: {
    columns: Column<T>[];
    rows: AdvancedDataTableRow<T>[];
    caption?: string;
    selectable?: boolean;
    stickyHeader?: boolean;
    emptyMessage?: string;
    onSelectionChange?: (selected: number[]) => void;
    className?: string;
}): react_jsx_runtime.JSX.Element;
/**
 * @deprecated Use `<DataTable mode="server" fetchPage={...} />`. Kept as a thin
 * wrapper for source-compatible migration.
 */
declare function ServerDataTable<T extends Record<string, unknown>>(props: {
    columns: Column<T>[];
    rows: T[];
    getRowKey: (row: T) => string;
    page: number;
    totalPages: number;
    total?: number;
    pageSize?: number;
    onPageChange: (page: number) => void;
    onRowClick?: (row: T) => void;
    loading?: boolean;
    emptyMessage?: string;
    title?: string;
    subtitle?: string;
    headerRight?: ReactNode;
    toolbar?: ReactNode;
    className?: string;
    caption?: string;
}): react_jsx_runtime.JSX.Element;

type AlertVariant = 'success' | 'warning' | 'error' | 'info';
type AlertAction = {
    label: string;
    href?: string;
    onClick?: () => void;
};
declare function AlertBanner({ variant, title, message, dismissible, action, icon, className, }: {
    variant?: AlertVariant;
    title?: string;
    message: string;
    dismissible?: boolean;
    action?: AlertAction;
    icon?: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element | null;

type ButtonGroupVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonGroupSize = 'xs' | 'sm' | 'md' | 'lg';
type ButtonGroupItem = {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
};
declare function ButtonGroup({ items, value, onChange, variant, size, className, }: {
    items: ButtonGroupItem[];
    value: string;
    onChange: (value: string) => void;
    variant?: ButtonGroupVariant;
    size?: ButtonGroupSize;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type CardProps = {
    as?: React.ElementType;
    title?: string;
    subtitle?: string;
    headerRight?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    variant?: 'raised' | 'flat' | 'outline';
    onClick?: () => void;
    hoverable?: boolean;
    loading?: boolean;
    className?: string;
} & Record<string, unknown>;
declare function Card({ as, title, subtitle, headerRight, footer, children, variant, onClick, hoverable, loading, className, ...rest }: CardProps): react_jsx_runtime.JSX.Element;

type CheckboxOption = {
    value: string;
    label: string;
};
declare function CheckboxGroup({ legend, options, selected, onChange, disabled, error, className, }: {
    legend: string;
    options: CheckboxOption[];
    selected: string[];
    onChange: (next: string[]) => void;
    disabled?: boolean;
    error?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function ComboBox({ id, label, options, value, onChange, onSearch, onLoadMore, placeholder, hint, error, disabled, required, clearable, noResultsText, className, debounceMs, virtualize, }: ComboBoxProps): react_jsx_runtime.JSX.Element;

type ScoreRule = {
    label: string;
    check: (value: string) => boolean;
    points: number;
    hint?: string;
};
declare function ContentScoreBar({ value, rules, label, className, }: {
    value: string;
    rules: ScoreRule[];
    label?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function TimePicker({ id, label, hint, error, value, onChange, disabled, required, step, className, }: {
    id: string;
    label: string;
    hint?: string;
    error?: string;
    value?: string;
    onChange: (time: string) => void;
    disabled?: boolean;
    required?: boolean;
    step?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    side?: 'left' | 'right';
    children?: React.ReactNode;
    footer?: React.ReactNode;
    /**
     * TODO M6: when true, close on Next.js route change. Drawer use case
     * is typical: closes when the user navigates from a nav drawer.
     * Accepted in M1 but currently a no-op (see useRouteClose stub).
     */
    closeOnRouteChange?: boolean;
    /** TODO M5: respect prefers-reduced-motion when true. */
    reducedMotion?: boolean;
    /** Portal mount target — defaults to document.body. */
    portalTarget?: Element | string | null;
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
};
declare function Drawer({ open, onClose, title, side, children, footer, closeOnRouteChange, reducedMotion: _reducedMotion, portalTarget, className, ref, }: DrawerProps): react.ReactPortal | null;

declare function EmptyState({ icon, title, description, action, className, }: {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type MapVariant = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
type MapTooltipField = {
    label: string;
    value: string;
};
type MapTooltipData = {
    title: string;
    description?: string;
    fields?: MapTooltipField[];
};
type MapMarker = {
    id: string;
    position: [number, number];
    variant?: MapVariant;
    tooltip?: MapTooltipData;
    label?: string;
};
type MapZone = {
    id: string;
    positions: [number, number][];
    label?: string;
    variant?: MapVariant;
    fillOpacity?: number;
};
type MapRoute = {
    id: string;
    positions: [number, number][];
    label?: string;
    color?: string;
    weight?: number;
    dashed?: boolean;
};
type MapProviderId = 'leaflet' | 'mapbox' | 'google';
type MapViewProps = {
    /** Map provider implementation. Default: 'leaflet'. */
    provider?: MapProviderId;
    /** Provider API key (mapbox/google). Ignored by leaflet. */
    apiKey?: string;
    center?: [number, number];
    zoom?: number;
    markers?: MapMarker[];
    zones?: MapZone[];
    routes?: MapRoute[];
    /** When set, the map auto-fits to marker bounds with this padding (px). */
    fitBoundsPadding?: number;
    onMarkerAdd?: (position: [number, number]) => void;
    onMarkerClick?: (id: string) => void;
    height?: string | number;
    className?: string;
};

/**
 * MapView — provider-agnostic interactive map.
 *
 * M1: leaflet provider with token-aware tiles (CartoDB Voyager / Dark Matter),
 * fit-to-bounds, and IntersectionObserver-driven lazy loading. mapbox / google
 * adapters are stubbed — switching providers throws until M1+.
 */
declare function MapView({ provider, center, zoom, markers, zones, routes, fitBoundsPadding, onMarkerAdd, onMarkerClick, height, className, }: MapViewProps): react_jsx_runtime.JSX.Element;

type ModalProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    fullscreen?: boolean;
    scrollable?: boolean;
    closeOnBackdropClick?: boolean;
    /**
     * TODO M6: when true, close on Next.js route change.
     * Accepted in M1 but currently a no-op (see useRouteClose stub).
     */
    closeOnRouteChange?: boolean;
    /** TODO M5: respect prefers-reduced-motion when true. */
    reducedMotion?: boolean;
    /** Portal mount target — defaults to document.body. */
    portalTarget?: Element | string | null;
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
};
declare function Modal({ open, onClose, title, description, children, footer, size, fullscreen, scrollable, closeOnBackdropClick, closeOnRouteChange, reducedMotion: _reducedMotion, portalTarget, className, ref, }: ModalProps): react.ReactPortal | null;

type ActionVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
type PageHeaderAction = {
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: ActionVariant;
    disabled?: boolean;
};
declare function PageHeader({ title, subtitle, badge, actions, className, }: {
    title: string;
    subtitle?: string;
    badge?: React.ReactNode;
    actions?: PageHeaderAction[];
    className?: string;
}): react_jsx_runtime.JSX.Element;

type PaginationSize = 'sm' | 'md' | 'lg';
declare function Pagination({ page, totalPages, onPageChange, size, showFirstLast, showJumpTo, className, }: {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    size?: PaginationSize;
    showFirstLast?: boolean;
    showJumpTo?: boolean;
    className?: string;
}): react_jsx_runtime.JSX.Element;

/**
 * Anchor positioning utilities for Popover-like overlays.
 *
 * TODO M4: Integrate `@floating-ui/react` (lazy-loaded) for
 * auto-placement, collision detection (flip / shift), arrow positioning
 * and virtual-element anchors (context menus). For M1 we expose only
 * the static Tailwind class table currently used by Popover so the
 * import surface is stable when M4 lands.
 */
type Placement = 'top' | 'bottom' | 'left' | 'right';

type PopoverProps = {
    trigger: React.ReactNode;
    children: React.ReactNode;
    placement?: Placement;
    className?: string;
    /**
     * Built-in focus trap on the panel (M1). For M4 this will be
     * conditional on the `as` prop (no trap for tooltips).
     */
    focusTrap?: boolean;
};
declare function Popover({ trigger, children, placement, className, focusTrap, }: PopoverProps): react_jsx_runtime.JSX.Element;

type RadioOption = {
    value: string;
    label: string;
    hint?: string;
    icon?: ReactNode;
};
type RadioGroupVariant = 'default' | 'card';
type RadioGroupColumns = 1 | 2 | 3;
declare function RadioGroup({ name, legend, options, value, onChange, error, disabled, className, optionClassName, variant, columns, }: {
    name: string;
    legend: string;
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
    disabled?: boolean;
    className?: string;
    optionClassName?: string;
    variant?: RadioGroupVariant;
    columns?: RadioGroupColumns;
}): react_jsx_runtime.JSX.Element;

declare function SearchBar({ id, placeholder, value, onChange, onClear, className, }: {
    id?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onClear?: () => void;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function SkeletonLine({ width, className }: {
    width?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonAvatar({ size, className }: {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonText({ lines, className }: {
    lines?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonCard({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonTableRow({ cols, className }: {
    cols?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type Slide = react__default.ReactNode | {
    id: string;
    content: react__default.ReactNode;
};
type SliderProps = {
    /** Slides to render. Plain ReactNodes (key auto) or objects with explicit id. */
    slides: Slide[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showDots?: boolean;
    showArrows?: boolean;
    loop?: boolean;
    /**
     * Minimum horizontal pointer travel (in px) required to count as a swipe.
     * Below this threshold the gesture is treated as a tap/no-op and the
     * track snaps back to the current slide. Default 50.
     */
    dragThreshold?: number;
    className?: string;
    slideClassName?: string;
    ariaLabel?: string;
};

declare function Slider({ slides, autoPlay, autoPlayInterval, showDots, showArrows, loop, dragThreshold, className, slideClassName, ariaLabel, }: SliderProps): react_jsx_runtime.JSX.Element | null;

type StepState = 'complete' | 'active' | 'error' | 'pending';
type StepItem = {
    label: string;
    description?: string;
    state?: StepState;
};
declare function Stepper({ steps, orientation, className, }: {
    steps: StepItem[];
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}): react_jsx_runtime.JSX.Element;

type TabButtonProps = {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    count?: number;
    className?: string;
};
declare function TabButton({ active, onClick, children, count, className }: TabButtonProps): react_jsx_runtime.JSX.Element;

type Tab = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    disabled?: boolean;
    content: React.ReactNode;
};
declare function TabGroup({ tabs, defaultTab, label, lazy, className, }: {
    tabs: Tab[];
    defaultTab?: string;
    label?: string;
    lazy?: boolean;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function TagInput({ id, label, hint, error, value, onChange, placeholder, disabled, className, }: {
    id: string;
    label: string;
    hint?: string;
    error?: string;
    value: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}): react_jsx_runtime.JSX.Element;

/**
 * Resolve the effective duration for a queued toast.
 * - `duration === 0`  → persistent
 * - `duration` set    → use as-is
 * - otherwise         → variant default
 */
declare function getEffectiveDuration(item: Pick<ToastItem, 'variant' | 'duration'>): number | null;
type ToastStore = {
    toasts: ToastItem[];
    add: (item: Omit<ToastItem, 'id'>) => string;
    update: (id: string, patch: Partial<Omit<ToastItem, 'id'>>) => void;
    remove: (id: string) => void;
    clear: () => void;
    /**
     * Maximum number of concurrent toasts kept in the queue. When the queue
     * grows past this, the oldest entries are dropped (FIFO).
     */
    max: number;
    setMax: (max: number) => void;
};
declare const useToastStore: zustand.UseBoundStore<zustand.StoreApi<ToastStore>>;

type NodeId = string;
type TreeNode<T = unknown> = {
    id: NodeId;
    label: string;
    children?: TreeNode<T>[];
    /** Optional user payload — preserved by the tree but never inspected. */
    data?: T;
};
type SelectionMode = 'single' | 'multi';
type TreeViewMessages = {
    /** aria-label fallback when no `label` prop is supplied. */
    tree: string;
    expandAll: string;
    collapseAll: string;
};
type TreeViewProps = {
    nodes: TreeNode[];
    /** Single-selection (legacy). When `selectionMode === 'multi'`, prefer `selectedIds`. */
    selectedId?: NodeId;
    selectedIds?: NodeId[];
    /** Controlled expanded set. Uncontrolled defaults to "all expanded" (legacy behaviour). */
    expandedIds?: NodeId[];
    defaultExpandedIds?: NodeId[];
    /** Initially focused row. Defaults to the first visible node. */
    focusId?: NodeId;
    selectionMode?: SelectionMode;
    onSelect?: (id: NodeId) => void;
    onSelectionChange?: (ids: NodeId[]) => void;
    onExpand?: (id: NodeId, expanded: boolean) => void;
    /** Fired on Enter — distinct from `onSelect` which fires on every selection change. */
    onActivate?: (id: NodeId) => void;
    label?: string;
    className?: string;
    /** Hide the "Expand all / Collapse all" toolbar. */
    hideToolbar?: boolean;
    messages?: Partial<TreeViewMessages>;
};

declare function TreeView({ nodes, selectedId, selectedIds, expandedIds, defaultExpandedIds, focusId: initialFocusId, selectionMode, onSelect, onSelectionChange, onExpand, onActivate, label, className, hideToolbar, messages, }: TreeViewProps): react_jsx_runtime.JSX.Element;

type QualityOption = {
    label: string;
    value: string;
};
type SubtitleTrack = {
    label: string;
    srclang?: string;
    src: string;
};
type AudioTrackOption = {
    label: string;
    language?: string;
};
type VideoSource = {
    src: string;
    type?: string;
};
type CastState = 'unavailable' | 'available' | 'connecting' | 'connected';
type VideoPlayerProps = {
    src: string | VideoSource | (string | VideoSource)[];
    poster?: string;
    title?: string;
    autoPlay?: boolean;
    loop?: boolean;
    startMuted?: boolean;
    /** Video quality options — switching is delegated to onQualityChange */
    qualities?: QualityOption[];
    defaultQuality?: string;
    /** WebVTT subtitle tracks rendered as a custom overlay (supports font-size) */
    subtitles?: SubtitleTrack[];
    /** Audio language options — actual switching via onAudioTrackChange */
    audioTracks?: AudioTrackOption[];
    onQualityChange?: (value: string) => void;
    onAudioTrackChange?: (index: number) => void;
    /**
     * Controlled visibility of the controls overlay.
     * When provided, the component ignores internal auto-hide logic.
     */
    controlsVisible?: boolean;
    /** When false, controls stay visible while playing (no auto-hide). Default: true */
    autoHideControls?: boolean;
    /** Fired whenever the controls overlay visibility changes */
    onControlsVisibilityChange?: (visible: boolean) => void;
    /** Enable Google Cast (Chromecast) integration. Loads the Cast SDK on mount. Default: true */
    enableCast?: boolean;
    /** Fired when cast session state changes */
    onCastStateChange?: (state: CastState) => void;
    className?: string;
};

declare function VideoPlayer({ src, poster, title, autoPlay, loop, startMuted, qualities, defaultQuality, subtitles, audioTracks, onQualityChange, onAudioTrackChange, controlsVisible, autoHideControls, onControlsVisibilityChange, enableCast, onCastStateChange, className, }: VideoPlayerProps): react_jsx_runtime.JSX.Element;

type ViewOrientation = 'horizontal' | 'vertical';
type ViewToggleProps = {
    value: ViewOrientation;
    onChange: (v: ViewOrientation) => void;
    labels?: {
        horizontal?: string;
        vertical?: string;
    };
    ariaLabel?: string;
    className?: string;
};
declare function ViewToggle({ value, onChange, labels, ariaLabel, className }: ViewToggleProps): react_jsx_runtime.JSX.Element;

declare const LazyDataTable: ComponentType<any>;
declare const LazyAdvancedDataTable: ComponentType<any>;
declare const LazyServerDataTable: ComponentType<any>;
declare const LazyDateRangePicker: ComponentType<any>;
declare const LazyMapView: ComponentType<any>;
declare const LazyVideoPlayer: ComponentType<any>;

/**
 * A table with row selection and a bulk-action bar.
 *
 * `DataTable` accepts a `selectable` prop, but it is only read inside the
 * deprecated `LegacyAdvancedView` and keys selection **by array index** — which
 * silently selects the wrong rows the moment anything sorts, filters or
 * paginates. This component is the id-keyed replacement; `Table/`'s own
 * `TODO M4` remains for whoever retrofits the full DataTable.
 *
 * ## Selection is by id, and "select all" is honest
 *
 * The header checkbox selects the rows currently rendered, and the bar says so.
 * "Select all 40 on this page" and "select all 1,240 matching" are different
 * operations, and conflating them is how a bulk enrich spends credits on twelve
 * hundred companies nobody chose. When more rows match than are shown, the bar
 * offers the wider selection explicitly rather than assuming it.
 */
type BulkAction<Id> = {
    /** Stable key, used for React and for telemetry. */
    key: string;
    label: string;
    icon?: ReactNode;
    /** Rendered in a way that reads as destructive. */
    destructive?: boolean;
    onAction: (ids: Id[]) => void;
    /** Disable for the current selection, with a reason for the tooltip. */
    disabled?: (ids: Id[]) => string | false;
};
type BulkActionTableProps<T extends Record<string, unknown>, Id extends string | number> = {
    columns: Column<T>[];
    rows: T[];
    /** Stable identity for a row. Never the array index. */
    rowId: (row: T) => Id;
    selected: readonly Id[];
    onSelectedChange: (ids: Id[]) => void;
    actions?: BulkAction<Id>[];
    /**
     * Total rows matching the current filter, when more exist than are rendered.
     * Supplying it turns on the "select all N matching" affordance.
     */
    totalMatching?: number;
    /** Called when the user asks for every matching row, not just this page. */
    onSelectAllMatching?: () => void;
    /** Rows that cannot be selected, with the reason shown on the checkbox. */
    isRowSelectable?: (row: T) => string | true;
    caption?: string;
    emptyMessage?: string;
    className?: string;
    labels?: Partial<typeof DEFAULT_LABELS>;
};
declare const DEFAULT_LABELS: {
    selectRow: string;
    selectAllOnPage: string;
    selectedCount: (n: number) => string;
    selectAllMatching: (n: number) => string;
    clear: string;
};
declare function BulkActionTable<T extends Record<string, unknown>, Id extends string | number>({ columns, rows, rowId, selected, onSelectedChange, actions, totalMatching, onSelectAllMatching, isRowSelectable, caption, emptyMessage, className, labels: labelOverrides, }: BulkActionTableProps<T, Id>): react_jsx_runtime.JSX.Element;

/**
 * A chronological activity feed.
 *
 * There was no timeline at the `ui` or `app` layer. The only timeline-shaped
 * code lived in unexported domain verticals (`domains/food/order`,
 * `domains/iot/alert`, `domains/nft/activity`, `domains/travel/itinerary`),
 * none of which is reachable from the published package — four
 * implementations, zero available to a consumer.
 *
 * ## Grouping is by the viewer's local day
 *
 * An event at 23:50 UTC belongs to a different day depending on who is looking.
 * Grouping on the raw ISO date puts it under the wrong heading for anyone east
 * or west of the server, which reads as "the app lost my note" rather than as a
 * timezone bug. The grouping key comes from `Intl.DateTimeFormat` in the given
 * `timeZone` — the viewer's own by default.
 */
type TimelineItem = {
    /** Stable identity. Never the array index. */
    id: string;
    /** When it happened. A Date, or anything `new Date()` accepts. */
    at: Date | string | number;
    /** Short label — the verb. */
    title: ReactNode;
    /** The detail, if there is any worth showing inline. */
    body?: ReactNode;
    /** Small leading marker: an icon, an avatar, a coloured dot. */
    icon?: ReactNode;
    /** Tone of the marker. */
    tone?: 'default' | 'success' | 'warning' | 'error' | 'info';
    /** Rendered at the right of the header row — a status chip, a menu. */
    meta?: ReactNode;
};
type TimelineProps = {
    items: TimelineItem[];
    /**
     * IANA zone used for day grouping and time display.
     * Defaults to the viewer's own.
     */
    timeZone?: string;
    /** BCP 47 tag for the date and time formatting. */
    locale?: string;
    /** Hide the sticky day headings. */
    groupByDay?: boolean;
    emptyMessage?: string;
    className?: string;
};
declare function Timeline({ items, timeZone, locale, groupByDay, emptyMessage, className, }: TimelineProps): react_jsx_runtime.JSX.Element;

export { AdvancedDataTable, type AlertAction, AlertBanner, type AudioTrackOption, Avatar, AvatarGroup, Badge, BrandLogo, type BulkAction, BulkActionTable, type BulkActionTableProps, Button, ButtonGroup, type ButtonGroupItem, Card, Checkbox, CheckboxGroup, ComboBox, ContentScoreBar, DataTable, DatePicker, DateRangePicker, Drawer, EmptyState, FileInput, Input, LazyAdvancedDataTable, LazyDataTable, LazyDateRangePicker, LazyMapView, LazyServerDataTable, LazyVideoPlayer, type MapMarker, type MapRoute, type MapTooltipData, type MapTooltipField, type MapVariant, MapView, type MapZone, Modal, PageHeader, type PageHeaderAction, Pagination, Popover, type QualityOption, RadioGroup, type RadioOption, type ScoreRule, SearchBar, ServerDataTable, SkeletonAvatar, SkeletonCard, SkeletonLine, SkeletonTableRow, SkeletonText, Slider, Spinner, StarRating, StatCard, type StepItem, Stepper, type SubtitleTrack, type Tab, TabButton, TabGroup, Table, type TableColumn, TagInput, Textarea, TimePicker, Timeline, type TimelineItem, type TimelineProps, ToastItem, Toggle, type TreeNode, TreeView, VideoPlayer, type ViewOrientation, ViewToggle, getEffectiveDuration, useToastStore };
