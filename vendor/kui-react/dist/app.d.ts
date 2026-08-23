import * as react_jsx_runtime from 'react/jsx-runtime';
import { a as BreadcrumbItem, c as SelectOption, b as MultiSelectOption, D as DateRange, h as ToastPosition, t as toast } from './Tooltip-Bof5GvOc.js';
export { A as Announcer, L as LiveRegion, d as SkipLink, l as Tooltip } from './Tooltip-Bof5GvOc.js';
import { FieldValues, Path, RegisterOptions } from 'react-hook-form';
import * as react from 'react';

type AppShellProps = {
    logo?: React.ReactNode;
    compactLogo?: React.ReactNode;
    sidebarCollapsed?: boolean;
    mobileSidebarTitle?: string;
    sidebar?: React.ReactNode;
    topbar?: React.ReactNode;
    asideClassName?: string;
    headerClassName?: string;
    mainClassName?: string;
    children?: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare function AppShell({ logo, compactLogo, sidebarCollapsed, mobileSidebarTitle, sidebar, topbar, asideClassName, headerClassName, mainClassName, children, className, ...rest }: AppShellProps): react_jsx_runtime.JSX.Element;

type AppSidebarNavItem = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: number;
    href?: string;
};
type AppSidebarNavGroup = {
    label?: string;
    items: AppSidebarNavItem[];
    collapsible?: boolean;
    defaultExpanded?: boolean;
};
type AppSidebarFooterRenderContext = {
    collapsed: boolean;
};
type AppSidebarFooter = React.ReactNode | ((context: AppSidebarFooterRenderContext) => React.ReactNode);
type AppSidebarProps = {
    navGroups?: AppSidebarNavGroup[];
    navItems?: AppSidebarNavItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    footer?: AppSidebarFooter;
    searchable?: boolean;
    className?: string;
};
declare function AppSidebar({ navGroups, navItems, activeId, onSelect, collapsed, defaultCollapsed, onCollapsedChange, footer, searchable, className, }: AppSidebarProps): react_jsx_runtime.JSX.Element;

type AppTopBarProps = {
    logo?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare function AppTopBar({ logo, children, className, ...rest }: AppTopBarProps): react_jsx_runtime.JSX.Element;

type AppDrawerProps = {
    navGroups?: AppSidebarNavGroup[];
    navItems?: AppSidebarNavItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    searchable?: boolean;
    trigger?: React.ReactNode;
    title?: string;
    side?: 'left' | 'right';
};
declare function AppDrawer({ navGroups, navItems, activeId, onSelect, header, footer, searchable, trigger, title, side, }: AppDrawerProps): react_jsx_runtime.JSX.Element;

type AppFooterProps = {
    logo?: React.ReactNode;
    nav?: React.ReactNode;
    social?: React.ReactNode;
    version?: string;
    status?: 'operational' | 'degraded' | 'outage';
    copyright?: string;
    className?: string;
};
declare function AppFooter({ logo, nav, social, version, status, copyright, className, }: AppFooterProps): react_jsx_runtime.JSX.Element;

type AppBreadcrumbsProps = {
    items?: BreadcrumbItem[];
    title?: string;
    description?: string;
    badge?: React.ReactNode;
    className?: string;
};
declare function AppBreadcrumbs({ items, title, description, badge, className, }: AppBreadcrumbsProps): react_jsx_runtime.JSX.Element;

type SectionCardProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
};
declare function SectionCard({ title, children, className }: SectionCardProps): react_jsx_runtime.JSX.Element;

type AppNavItem = {
    label: string;
    href?: string;
    active?: boolean;
};
type AppNavProps = {
    logo?: React.ReactNode;
    navItems?: AppNavItem[];
    children?: React.ReactNode;
    sticky?: boolean;
    bordered?: boolean;
    className?: string;
} & React.HTMLAttributes<HTMLElement>;
declare function AppNav({ logo, navItems, children, sticky, bordered, className, ...rest }: AppNavProps): react_jsx_runtime.JSX.Element;

type NavDrawerProps = {
    trigger: React.ReactNode;
    title?: string;
    side?: 'left' | 'right';
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};
declare function NavDrawer({ trigger, title, side, footer, children, className, }: NavDrawerProps): react_jsx_runtime.JSX.Element;

type SearchResult = {
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    category?: string;
};
declare function GlobalSearch({ placeholder, results, onSearch, onSelect, loading, className, }: {
    placeholder?: string;
    results?: SearchResult[];
    onSearch: (query: string) => void;
    onSelect: (result: SearchResult) => void;
    loading?: boolean;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type CommandItem = {
    /** Optional leading icon (FontAwesome React element recommended). */
    icon?: React.ReactNode;
    /** Human-readable label, used for fuzzy matching + highlighting. */
    label: string;
    /** Keyboard shortcut hint (e.g. "G D", "⌘N"). */
    shortcut?: string;
    /** Group / category header. */
    category: string;
    /** Click handler invoked on select. */
    onClick?: () => void;
    /** Extra keywords boosted during fuzzy match. */
    keywords?: string[];
    /** Optional description shown after the label. */
    description?: string;
    /** Stable id (auto-derived from label if omitted). */
    id?: string;
};
type CommandPaletteProps = {
    /** Initial commands. Merged with the dynamic store registry. */
    items?: CommandItem[];
    /** Fires when the user selects a command. */
    onSelect?: (item: CommandItem) => void;
    /** Custom trigger element. Falls back to a default "Quick actions…" button. */
    trigger?: React.ReactNode;
    /** Search input placeholder. */
    placeholder?: string;
};

declare function CommandPalette({ items, onSelect, trigger, placeholder, }: CommandPaletteProps): react_jsx_runtime.JSX.Element;
/**
 * Backwards-compatible alias for existing imports:
 *   import { AppCommandBar } from '@/modules/app/AppCommandBar';
 *   import { AppCommandBar } from '@/modules/app/CommandPalette';
 */
declare const AppCommandBar: typeof CommandPalette;

declare function ThemeSwitcher(): react_jsx_runtime.JSX.Element;

type ContextMenuItem = {
    type?: 'item';
    label: string;
    icon?: React.ReactNode;
    /** Keyboard shortcut displayed on the right, e.g. "⌘C" */
    shortcut?: string;
    onClick?: () => void;
    danger?: boolean;
    disabled?: boolean;
} | {
    type: 'separator';
} | {
    type: 'group';
    label: string;
};
type ContextMenuProps = {
    /** Menu item definitions */
    items: ContextMenuItem[];
    /** The element that receives the right-click / long-press */
    children: React.ReactNode;
    /** Suppress the context menu entirely */
    disabled?: boolean;
    /** Extra className on the trigger wrapper */
    className?: string;
    /** Called when the menu opens or closes */
    onOpenChange?: (open: boolean) => void;
};
declare function ContextMenu({ items, children, disabled, className, onOpenChange, }: ContextMenuProps): react_jsx_runtime.JSX.Element;

type ImageGalleryImage = {
    src: string;
    alt: string;
    caption?: string;
};
type GalleryColumns = 2 | 3 | 4;
type GalleryAspect = 'square' | 'video' | 'portrait' | 'auto';
type GalleryGap = 'sm' | 'md' | 'lg';
type ImageGalleryProps = {
    images: ImageGalleryImage[];
    columns?: GalleryColumns;
    aspect?: GalleryAspect;
    gap?: GalleryGap;
    lightbox?: boolean;
    showCaptions?: boolean;
    /** Enable drag-to-reorder and right-click context menu */
    reorderable?: boolean;
    /** Called with the new image array whenever order changes */
    onReorder?: (images: ImageGalleryImage[]) => void;
    /** Called when a user removes an image via the context menu */
    onRemove?: (index: number, image: ImageGalleryImage) => void;
    className?: string;
};

declare function ImageGallery({ images: imagesProp, columns, aspect, gap, lightbox, showCaptions, reorderable, onReorder, onRemove, className, }: ImageGalleryProps): react_jsx_runtime.JSX.Element;

type FormProps = {
    title?: string;
    description?: string;
    error?: string;
    columns?: 1 | 2;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    className?: string;
};
declare function Form({ title, description, error, columns, actions, children, onSubmit, className, }: FormProps): react_jsx_runtime.JSX.Element;

type FormFieldProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    hint?: string;
    required?: boolean;
    rules?: RegisterOptions<T>;
    className?: string;
    children: (props: {
        id: string;
        'aria-describedby': string | undefined;
        'aria-invalid': boolean;
    }) => React.ReactNode;
};
declare function FormField<T extends FieldValues>({ name, label, hint, required, rules, className, children, }: FormFieldProps<T>): react_jsx_runtime.JSX.Element;

type FilterField = {
    type: 'select';
    id: string;
    label: string;
    options: SelectOption[];
    placeholder?: string;
} | {
    type: 'multiselect';
    id: string;
    label: string;
    options: MultiSelectOption[];
    placeholder?: string;
} | {
    type: 'daterange';
    id: string;
    label: string;
} | {
    type: 'tags';
    id: string;
    label: string;
    placeholder?: string;
};
type FilterValues = Record<string, string | string[] | DateRange | null>;
declare function FilterBar({ fields, values, onChange, onApply, onReset, applyLabel, resetLabel, className, }: {
    fields: FilterField[];
    values: FilterValues;
    onChange: (id: string, value: FilterValues[string]) => void;
    onApply?: () => void;
    onReset?: () => void;
    applyLabel?: string;
    resetLabel?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type StepFlowStep = {
    id: string;
    label: string;
    description?: string;
    content: (props: {
        values: Record<string, unknown>;
        onChange: (key: string, value: unknown) => void;
        error?: string;
    }) => React.ReactNode;
    validate?: (values: Record<string, unknown>) => string | undefined;
    optional?: boolean;
};
declare function StepFlow({ steps, onComplete, onCancel, completeLabel, cancelLabel, nextLabel, prevLabel, initialValues, className, }: {
    steps: StepFlowStep[];
    onComplete: (values: Record<string, unknown>) => void | Promise<void>;
    onCancel?: () => void;
    completeLabel?: string;
    cancelLabel?: string;
    nextLabel?: string;
    prevLabel?: string;
    initialValues?: Record<string, unknown>;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type StepShellProps = {
    number: number;
    title: string;
    active: boolean;
    done: boolean;
    onEdit?: () => void;
    summary?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
};
declare function StepShell({ number, title, active, done, onEdit, summary, children, className, }: StepShellProps): react_jsx_runtime.JSX.Element;

/** Lifecycle for a single file inside FileUploadSection. */
type UploadStatus = 'idle' | 'uploading' | 'paused' | 'success' | 'error' | 'cancelled';
/** A single file row inside the section. */
type FileItem = {
    /** Stable id (e.g. `${name}-${size}-${lastModified}`). */
    id: string;
    file: File;
    status: UploadStatus;
    /** 0..100 percent. */
    progress: number;
    /** Optional status / error message line. */
    message?: string;
    /** Validation error from MIME / size / count checks. */
    error?: string;
};
type FileUploadSectionMessages = {
    dropHint: string;
    browseLabel: string;
    pasteHint: string;
    invalidSize: (limit: string) => string;
    invalidType: string;
    tooMany: (max: number) => string;
    emptyState: string;
    remove: string;
};
type FileUploadSectionProps = {
    /** Controlled file list (optional). Uncontrolled if omitted. */
    files?: FileItem[];
    onFilesChange?: (files: FileItem[]) => void;
    accept?: string;
    multiple?: boolean;
    maxSizeBytes?: number;
    maxFiles?: number;
    disabled?: boolean;
    enablePaste?: boolean;
    /** Title shown above the drop zone. */
    title?: string;
    /** Hint shown beneath the drop zone copy. */
    hint?: string;
    className?: string;
    messages?: Partial<FileUploadSectionMessages>;
};

declare function FileUploadSection({ files, onFilesChange, accept, multiple, maxSizeBytes, maxFiles, disabled, enablePaste, title, hint, className, messages, }: FileUploadSectionProps): react_jsx_runtime.JSX.Element;

type DetailTab = {
    value: string;
    label: string;
    disabled?: boolean;
};
declare function DetailHeader({ title, subtitle, status, statusVariant, badge, children, tabs, defaultTab, onTabChange, className, }: {
    title: string;
    subtitle?: string;
    status?: string;
    statusVariant?: 'success' | 'error' | 'warning' | 'info' | 'neutral' | 'primary';
    badge?: React.ReactNode;
    children?: React.ReactNode;
    tabs?: DetailTab[];
    defaultTab?: string;
    onTabChange?: (value: string) => void;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type InlineAlertVariant = 'success' | 'error' | 'warning' | 'info';
type InlineAlertProps = {
    variant?: InlineAlertVariant;
    message: React.ReactNode;
    className?: string;
};
declare function InlineAlert({ variant, message, className }: InlineAlertProps): react_jsx_runtime.JSX.Element;

type LoadingVariant = 'table' | 'form' | 'cards' | 'list' | 'detail' | 'spinner';
declare function LoadingState({ variant, rows, cols, cards, className, }: {
    variant?: LoadingVariant;
    rows?: number;
    cols?: number;
    cards?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element | null;

declare function ErrorState({ title, message, onRetry, retryLabel, className, }: {
    title?: string;
    message: string;
    onRetry?: () => void;
    retryLabel?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function NotFoundState({ title, description, onGoBack, goBackLabel, className, }: {
    title?: string;
    description?: string;
    onGoBack?: () => void;
    goBackLabel?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function NoAccessState({ title, description, onRequestAccess, className, }: {
    title?: string;
    description?: string;
    onRequestAccess?: () => void;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type NotFoundPageProps = {
    title?: string;
    description?: string;
    homeHref?: string;
    homeLabel?: string;
    backLabel?: string;
    icon?: React.ReactNode;
    className?: string;
};
declare function NotFoundPage({ title, description, homeHref, homeLabel, backLabel, icon, className, }: NotFoundPageProps): react_jsx_runtime.JSX.Element;

type SplashScreenProps = {
    visible?: boolean;
    logo?: React.ReactNode;
    message?: string;
    progress?: number;
    className?: string;
};
declare function SplashScreen({ visible, logo, message, progress, className, }: SplashScreenProps): react_jsx_runtime.JSX.Element;

declare const notify: {
    readonly success: (message: string, opts?: Parameters<typeof toast.success>[1]) => string;
    readonly error: (message: string, opts?: Parameters<typeof toast.error>[1]) => string;
    readonly warning: (message: string, opts?: Parameters<typeof toast.warning>[1]) => string;
    readonly info: (message: string, opts?: Parameters<typeof toast.info>[1]) => string;
    readonly loading: (message: string, opts?: Parameters<typeof toast.loading>[1]) => string;
    readonly dismiss: (id: string) => void;
};
declare function NotificationProvider({ children, position, }: {
    children: React.ReactNode;
    position?: ToastPosition;
}): react_jsx_runtime.JSX.Element;

type FocusTrapProps = {
    /** When false the trap is dormant — children render but focus is unmanaged. */
    active?: boolean;
    /** Optional Escape handler. Receives no args; just react and (usually) deactivate. */
    onEscape?: () => void;
    /** Forwarded to the outer wrapper for layout / styling. */
    className?: string;
    children: React.ReactNode;
};
/**
 * Wraps `useFocusTrap` as a drop-in component for app-layer surfaces that own
 * their own DOM container (custom dialogs, inline editors, command-palette
 * style panels). For Modal / Drawer / Popover you usually do not need this —
 * those primitives wire the hook themselves.
 */
declare function FocusTrap({ active, onEscape, className, children }: FocusTrapProps): react_jsx_runtime.JSX.Element;
type Politeness = 'polite' | 'assertive';
/**
 * Imperative announcer. Returns a function that pushes a message into a
 * page-level `aria-live` region (one polite + one assertive, mounted by
 * `<AnnouncerOutlet />`). The same string can be re-announced — the region
 * is cleared first so screen readers re-read it.
 *
 *   const announce = useAnnounce();
 *   announce('Saved', 'polite');
 */
declare function useAnnounce(): (message: string, politeness?: Politeness) => void;
/**
 * Mount once near the root (e.g. in `AppShell`) so `useAnnounce()` has a
 * destination. Renders two visually-hidden live regions via a portal so the
 * outlet is unaffected by parent overflow / transforms.
 */
declare function AnnouncerOutlet(): react.ReactPortal | null;

type MaintenancePageProps = {
    title?: string;
    description?: string;
    eta?: Date | string | number | null;
    statusUrl?: string;
    statusLabel?: string;
    icon?: React.ReactNode;
    className?: string;
};
declare function MaintenancePage({ title, description, eta, statusUrl, statusLabel, icon, className, }: MaintenancePageProps): react_jsx_runtime.JSX.Element;

type SharePermission = 'viewer' | 'commenter' | 'editor' | 'owner';
type ShareInvitee = {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    permission: SharePermission;
};
type ShareDialogProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    shareUrl: string;
    invitees?: ShareInvitee[];
    permissions?: {
        value: SharePermission;
        label: string;
    }[];
    defaultPermission?: SharePermission;
    onInvite?: (email: string, permission: SharePermission) => void | Promise<void>;
    onRemove?: (id: string) => void;
    onPermissionChange?: (id: string, permission: SharePermission) => void;
    portalTarget?: Element | string | null;
};
declare function ShareDialog({ open, onClose, title, description, shareUrl, invitees, permissions, defaultPermission, onInvite, onRemove, onPermissionChange, portalTarget, }: ShareDialogProps): react_jsx_runtime.JSX.Element;

type CommentThreadItem = {
    id: string;
    author: {
        id: string;
        name: string;
        avatarUrl?: string | null;
    };
    body: string;
    createdAt: string | Date;
    likeCount?: number;
    likedByMe?: boolean;
    replies?: CommentThreadItem[];
};
type CommentThreadProps = {
    comments: CommentThreadItem[];
    currentUserId?: string;
    maxDepth?: number;
    onReply?: (parentId: string | null, body: string) => void | Promise<void>;
    onDelete?: (id: string) => void;
    onLike?: (id: string, liked: boolean) => void;
    formatTimestamp?: (value: string | Date) => string;
    emptyMessage?: string;
    placeholder?: string;
    className?: string;
};
declare function CommentThread({ comments, currentUserId, maxDepth, onReply, onDelete, onLike, formatTimestamp, emptyMessage, placeholder, className, }: CommentThreadProps): react_jsx_runtime.JSX.Element;

type MentionPickerUser = {
    id: string;
    name: string;
    handle?: string;
    avatarUrl?: string | null;
    subtitle?: string;
};
type MentionPickerProps = {
    users: MentionPickerUser[];
    query?: string;
    open?: boolean;
    position?: {
        top: number;
        left: number;
    };
    maxItems?: number;
    emptyMessage?: string;
    onSelect: (user: MentionPickerUser) => void;
    onCancel?: () => void;
    filter?: (user: MentionPickerUser, query: string) => boolean;
    className?: string;
};
declare function MentionPicker({ users, query, open, position, maxItems, emptyMessage, onSelect, onCancel, filter, className, }: MentionPickerProps): react_jsx_runtime.JSX.Element | null;

type OnboardingStep = {
    id: string;
    title: string;
    description?: string;
    content: React.ReactNode | ((ctx: {
        goNext: () => void;
        goPrev: () => void;
    }) => React.ReactNode);
    optional?: boolean;
};
type OnboardingWizardProps = {
    steps: OnboardingStep[];
    mode?: 'page' | 'modal';
    open?: boolean;
    initialStep?: number;
    title?: string;
    allowSkip?: boolean;
    onStepChange?: (index: number) => void;
    onComplete?: () => void | Promise<void>;
    onSkip?: () => void;
    onClose?: () => void;
    nextLabel?: string;
    prevLabel?: string;
    skipLabel?: string;
    completeLabel?: string;
    indicator?: 'dots' | 'bar';
    className?: string;
};
declare function OnboardingWizard({ steps, mode, open, initialStep, title, allowSkip, onStepChange, onComplete, onSkip, onClose, nextLabel, prevLabel, skipLabel, completeLabel, indicator, className, }: OnboardingWizardProps): react_jsx_runtime.JSX.Element | null;

export { AnnouncerOutlet, AppBreadcrumbs, AppCommandBar, AppDrawer, AppFooter, AppNav, type AppNavItem, AppShell, AppSidebar, type AppSidebarFooterRenderContext, type AppSidebarNavGroup, type AppSidebarNavItem, AppTopBar, type CommandItem, CommentThread, type CommentThreadItem, type CommentThreadProps, ContextMenu, type ContextMenuItem, type ContextMenuProps, DetailHeader, type DetailTab, ErrorState, type FileItem, FileUploadSection, type FileUploadSectionMessages, type FileUploadSectionProps, FilterBar, type FilterField, type FilterValues, FocusTrap, Form, FormField, GlobalSearch, ImageGallery, type ImageGalleryImage, type ImageGalleryProps, InlineAlert, LoadingState, MaintenancePage, type MaintenancePageProps, MentionPicker, type MentionPickerProps, type MentionPickerUser, NavDrawer, NoAccessState, NotFoundPage, NotFoundState, NotificationProvider, type OnboardingStep, OnboardingWizard, type OnboardingWizardProps, type SearchResult, SectionCard, ShareDialog, type ShareDialogProps, type ShareInvitee, type SharePermission, SplashScreen, StepFlow, type StepFlowStep, StepShell, ThemeSwitcher, notify, toast, useAnnounce };
