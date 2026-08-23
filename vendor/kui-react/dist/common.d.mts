import { z } from 'zod';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { D as DropdownItem } from './DropdownMenu-f5yV9dzM.mjs';
import 'react';

declare const IdSchema: z.ZodString;
declare const UuidSchema: z.ZodUUID;
declare const SlugSchema: z.ZodString;
declare const DateSchema: z.ZodCoercedDate<unknown>;
declare const NullableDateSchema: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
declare const EmailSchema: z.ZodEmail;
declare const PasswordSchema: z.ZodString;
declare const SortOrderEnum: z.ZodEnum<{
    desc: "desc";
    asc: "asc";
}>;
declare const StatusEnum: z.ZodEnum<{
    ACTIVE: "ACTIVE";
    INACTIVE: "INACTIVE";
    DRAFT: "DRAFT";
    PUBLISHED: "PUBLISHED";
    ARCHIVED: "ARCHIVED";
}>;
declare const BaseEntitySchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
declare const PaginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const ApiSuccessSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const ApiErrorSchema: z.ZodObject<{
    success: z.ZodLiteral<false>;
    message: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const ApiResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    success: z.ZodLiteral<true>;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    success: z.ZodLiteral<false>;
    message: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>]>;
declare const UserRoleEnum: z.ZodEnum<{
    ADMIN: "ADMIN";
    AUTHOR: "AUTHOR";
    USER: "USER";
}>;
declare const UserStatusEnum: z.ZodEnum<{
    ACTIVE: "ACTIVE";
    INACTIVE: "INACTIVE";
    BANNED: "BANNED";
}>;
declare const ThemeEnum: z.ZodEnum<{
    LIGHT: "LIGHT";
    DARK: "DARK";
    SYSTEM: "SYSTEM";
}>;
declare const LanguageEnum: z.ZodEnum<{
    en: "en";
}>;
declare const UserPreferencesSchema: z.ZodObject<{
    theme: z.ZodDefault<z.ZodEnum<{
        LIGHT: "LIGHT";
        DARK: "DARK";
        SYSTEM: "SYSTEM";
    }>>;
    language: z.ZodDefault<z.ZodEnum<{
        [x: string]: string;
    }>>;
    emailNotifications: z.ZodDefault<z.ZodBoolean>;
    pushNotifications: z.ZodDefault<z.ZodBoolean>;
    newsletter: z.ZodDefault<z.ZodBoolean>;
    timezone: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
declare const UserProfileSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    biography: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profilePicture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
declare const UserSchema: z.ZodObject<{
    userId: z.ZodString;
    email: z.ZodEmail;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    password: z.ZodString;
    userRole: z.ZodDefault<z.ZodEnum<{
        ADMIN: "ADMIN";
        AUTHOR: "AUTHOR";
        USER: "USER";
    }>>;
    userStatus: z.ZodDefault<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BANNED: "BANNED";
    }>>;
    userPreferences: z.ZodOptional<z.ZodObject<{
        theme: z.ZodDefault<z.ZodEnum<{
            LIGHT: "LIGHT";
            DARK: "DARK";
            SYSTEM: "SYSTEM";
        }>>;
        language: z.ZodDefault<z.ZodEnum<{
            [x: string]: string;
        }>>;
        emailNotifications: z.ZodDefault<z.ZodBoolean>;
        pushNotifications: z.ZodDefault<z.ZodBoolean>;
        newsletter: z.ZodDefault<z.ZodBoolean>;
        timezone: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>;
    userProfile: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        biography: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        profilePicture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
declare const SafeUserSchema: z.ZodObject<{
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodEmail;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    deletedAt: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    userId: z.ZodString;
    userRole: z.ZodDefault<z.ZodEnum<{
        ADMIN: "ADMIN";
        AUTHOR: "AUTHOR";
        USER: "USER";
    }>>;
    userStatus: z.ZodDefault<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BANNED: "BANNED";
    }>>;
    userPreferences: z.ZodOptional<z.ZodObject<{
        theme: z.ZodDefault<z.ZodEnum<{
            LIGHT: "LIGHT";
            DARK: "DARK";
            SYSTEM: "SYSTEM";
        }>>;
        language: z.ZodDefault<z.ZodEnum<{
            [x: string]: string;
        }>>;
        emailNotifications: z.ZodDefault<z.ZodBoolean>;
        pushNotifications: z.ZodDefault<z.ZodBoolean>;
        newsletter: z.ZodDefault<z.ZodBoolean>;
        timezone: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>;
    userProfile: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        biography: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        profilePicture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const LoginRequestSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
declare const RegisterRequestSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;
declare const ChangePasswordSchema: z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;
declare const AuthSessionSchema: z.ZodObject<{
    sessionId: z.ZodString;
    userId: z.ZodString;
    token: z.ZodString;
    refreshToken: z.ZodOptional<z.ZodString>;
    expiresAt: z.ZodCoercedDate<unknown>;
    createdAt: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
declare const AuthResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    token: z.ZodOptional<z.ZodString>;
    refreshToken: z.ZodOptional<z.ZodString>;
    user: z.ZodOptional<z.ZodObject<{
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodEmail;
        updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        deletedAt: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
        createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        userId: z.ZodString;
        userRole: z.ZodDefault<z.ZodEnum<{
            ADMIN: "ADMIN";
            AUTHOR: "AUTHOR";
            USER: "USER";
        }>>;
        userStatus: z.ZodDefault<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            INACTIVE: "INACTIVE";
            BANNED: "BANNED";
        }>>;
        userPreferences: z.ZodOptional<z.ZodObject<{
            theme: z.ZodDefault<z.ZodEnum<{
                LIGHT: "LIGHT";
                DARK: "DARK";
                SYSTEM: "SYSTEM";
            }>>;
            language: z.ZodDefault<z.ZodEnum<{
                [x: string]: string;
            }>>;
            emailNotifications: z.ZodDefault<z.ZodBoolean>;
            pushNotifications: z.ZodDefault<z.ZodBoolean>;
            newsletter: z.ZodDefault<z.ZodBoolean>;
            timezone: z.ZodDefault<z.ZodString>;
        }, z.core.$strip>>;
        userProfile: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            username: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            biography: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            profilePicture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const OAuthProviderEnum: z.ZodEnum<{
    GOOGLE: "GOOGLE";
    GITHUB: "GITHUB";
    DISCORD: "DISCORD";
    MICROSOFT: "MICROSOFT";
}>;
declare const OAuthCallbackSchema: z.ZodObject<{
    code: z.ZodString;
    state: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<{
        GOOGLE: "GOOGLE";
        GITHUB: "GITHUB";
        DISCORD: "DISCORD";
        MICROSOFT: "MICROSOFT";
    }>;
}, z.core.$strip>;
type Id = z.infer<typeof IdSchema>;
type Pagination = z.infer<typeof PaginationSchema>;
type ApiResponse = z.infer<typeof ApiResponseSchema>;
type User = z.infer<typeof UserSchema>;
type SafeUser = z.infer<typeof SafeUserSchema>;
type UserRole = z.infer<typeof UserRoleEnum>;
type UserStatus = z.infer<typeof UserStatusEnum>;
type UserPreferences = z.infer<typeof UserPreferencesSchema>;
type UserProfile = z.infer<typeof UserProfileSchema>;
type LoginRequest = z.infer<typeof LoginRequestSchema>;
type RegisterRequest = z.infer<typeof RegisterRequestSchema>;
type ChangePassword = z.infer<typeof ChangePasswordSchema>;
type AuthSession = z.infer<typeof AuthSessionSchema>;
type AuthResponse = z.infer<typeof AuthResponseSchema>;
type OAuthCallback = z.infer<typeof OAuthCallbackSchema>;

declare const AddressSchema: z.ZodObject<{
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    addressLine1: z.ZodString;
    addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type Address = z.infer<typeof AddressSchema>;

type AddressCardProps = {
    address: Address;
    onEdit?: () => void;
    onDelete?: () => void;
    selected?: boolean;
    className?: string;
};
declare function AddressCard({ address, onEdit, onDelete, selected, className }: AddressCardProps): react_jsx_runtime.JSX.Element;

type AddressFormProps = {
    initial?: Partial<Address>;
    onSubmit: (values: Address) => Promise<void> | void;
    onCancel?: () => void;
    submitLabel?: string;
    className?: string;
};
declare function AddressForm({ initial, onSubmit, onCancel, submitLabel, className }: AddressFormProps): react_jsx_runtime.JSX.Element;

type AddressSelectorProps = {
    addresses: Address[];
    selectedIndex?: number;
    onSelect: (index: number, address: Address) => void;
    onAdd?: () => void;
    onEdit?: (index: number, address: Address) => void;
    onDelete?: (index: number, address: Address) => void;
    className?: string;
};
declare function AddressSelector({ addresses, selectedIndex, onSelect, onAdd, onEdit, onDelete, className, }: AddressSelectorProps): react_jsx_runtime.JSX.Element;

type ChangePasswordFormProps = {
    onSubmit: (values: ChangePassword) => Promise<void> | void;
    error?: string;
    className?: string;
};
declare function ChangePasswordForm({ onSubmit, error, className }: ChangePasswordFormProps): react_jsx_runtime.JSX.Element;

type ForgotPasswordFormProps = {
    onSubmit: (email: string) => Promise<void> | void;
    error?: string;
    className?: string;
};
declare function ForgotPasswordForm({ onSubmit, error, className }: ForgotPasswordFormProps): react_jsx_runtime.JSX.Element;

type LoginFormValues = LoginRequest & {
    rememberMe: boolean;
};
type LoginFormProps = {
    onSubmit: (values: LoginFormValues) => Promise<void> | void;
    error?: string;
    className?: string;
};
declare function LoginForm({ onSubmit, error, className }: LoginFormProps): react_jsx_runtime.JSX.Element;

type OAuthProvider = OAuthCallback['provider'];
type OAuthButtonsProps = {
    providers?: OAuthProvider[];
    onProvider: (provider: OAuthProvider) => Promise<void> | void;
    className?: string;
};
declare function OAuthButtons({ providers, onProvider, className, }: OAuthButtonsProps): react_jsx_runtime.JSX.Element;

type RegisterFormProps = {
    onSubmit: (values: Omit<RegisterRequest, 'confirmPassword'>) => Promise<void> | void;
    error?: string;
    className?: string;
};
declare function RegisterForm({ onSubmit, error, className }: RegisterFormProps): react_jsx_runtime.JSX.Element;

type SessionExpiredBannerProps = {
    onSignIn?: () => void;
    message?: string;
    className?: string;
};
declare function SessionExpiredBanner({ onSignIn, message, className, }: SessionExpiredBannerProps): react_jsx_runtime.JSX.Element;

declare const CartItemSchema: z.ZodObject<{
    cartItemId: z.ZodString;
    productId: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    variant: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    quantity: z.ZodNumber;
    maxQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
declare const CartSchema: z.ZodObject<{
    cartId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        cartItemId: z.ZodString;
        productId: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        variant: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        price: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
        quantity: z.ZodNumber;
        maxQuantity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
    totals: z.ZodObject<{
        subtotal: z.ZodNumber;
        discountTotal: z.ZodDefault<z.ZodNumber>;
        taxTotal: z.ZodDefault<z.ZodNumber>;
        serviceFee: z.ZodDefault<z.ZodNumber>;
        shippingTotal: z.ZodDefault<z.ZodNumber>;
        total: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
type CartItem$1 = z.infer<typeof CartItemSchema>;
type Cart = z.infer<typeof CartSchema>;

type CartBadgeProps = {
    cart: Cart;
    onClick?: () => void;
    className?: string;
};
declare function CartBadge({ cart, onClick, className }: CartBadgeProps): react_jsx_runtime.JSX.Element;

type CartItemProps = {
    item: CartItem$1;
    onQuantityChange?: (id: string, qty: number) => void;
    onRemove?: (id: string) => void;
    compact?: boolean;
    className?: string;
};
declare function CartItem({ item, onQuantityChange, onRemove, compact, className, }: CartItemProps): react_jsx_runtime.JSX.Element;

type CartPreviewProps = {
    cart: Cart;
    defaultOpen?: boolean;
    className?: string;
};
declare function CartPreview({ cart, defaultOpen, className }: CartPreviewProps): react_jsx_runtime.JSX.Element;

type CartSummaryProps = {
    cart: Cart;
    onQuantityChange?: (id: string, qty: number) => void;
    onRemove?: (id: string) => void;
    onCouponApply?: (code: string) => Promise<{
        success: boolean;
        message?: string;
    }>;
    onCouponRemove?: () => void;
    appliedCoupon?: string;
    onCheckout?: () => void;
    checkoutLabel?: string;
    showTotals?: boolean;
    showCoupon?: boolean;
    className?: string;
};
declare function CartSummary({ cart, onQuantityChange, onRemove, onCouponApply, onCouponRemove, appliedCoupon, onCheckout, checkoutLabel, showTotals, showCoupon, className, }: CartSummaryProps): react_jsx_runtime.JSX.Element;

declare function RevenueBarChart({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function UserActivityLineChart({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function SalesByCategoryDoughnut({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function ProductComparisonRadar({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function RegionalSalesPolar({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

type ChatMessage = {
    id: string;
    role: 'user' | 'agent';
    text: string;
    timestamp?: string;
};
type ChatBoxProps = {
    title?: string;
    subtitle?: string;
    placeholder?: string;
    initialMessages?: ChatMessage[];
    onSend?: (text: string) => Promise<string> | string;
    className?: string;
};
declare function ChatBox({ title, subtitle, placeholder, initialMessages, onSend, className, }: ChatBoxProps): react_jsx_runtime.JSX.Element;

type CouponInputProps = {
    onApply: (code: string) => Promise<{
        success: boolean;
        message?: string;
    }> | {
        success: boolean;
        message?: string;
    };
    onRemove?: () => void;
    appliedCode?: string;
    className?: string;
};
declare function CouponInput({ onApply, onRemove, appliedCode, className }: CouponInputProps): react_jsx_runtime.JSX.Element;

declare const DiscountTypeEnum: z.ZodEnum<{
    PERCENTAGE: "PERCENTAGE";
    FIXED: "FIXED";
    FREE_SHIPPING: "FREE_SHIPPING";
}>;
type DiscountType = z.infer<typeof DiscountTypeEnum>;

type DiscountBadgeProps = {
    discountType: DiscountType;
    discountValue: number;
    currency?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};
declare function DiscountBadge({ discountType, discountValue, currency, size, className }: DiscountBadgeProps): react_jsx_runtime.JSX.Element;

declare const AppLanguageEnum: z.ZodEnum<{
    [x: string]: string;
}>;
type AppLanguage = z.infer<typeof AppLanguageEnum>;

type DirectionContextValue = {
    lang: AppLanguage;
    dir: 'ltr' | 'rtl';
    isRTL: boolean;
};
declare function useDirection(): DirectionContextValue;
type DirectionProviderProps = {
    lang: AppLanguage;
    children: React.ReactNode;
    applyToDocument?: boolean;
};
declare function DirectionProvider({ lang, children, applyToDocument }: DirectionProviderProps): react_jsx_runtime.JSX.Element;

type LanguageSwitcherProps = {
    value?: AppLanguage;
    onChange?: (lang: AppLanguage) => void;
    languages?: AppLanguage[];
    className?: string;
};
declare function LanguageSwitcher({ value, onChange, languages, className, }: LanguageSwitcherProps): react_jsx_runtime.JSX.Element;

type CountrySelectorProps = {
    value: string;
    onChange: (iso2: string) => void;
    id?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    hint?: string;
    error?: string;
    required?: boolean;
    className?: string;
};
declare function CountrySelector({ value, onChange, id: idProp, label, placeholder, disabled, hint, error, required, className, }: CountrySelectorProps): react_jsx_runtime.JSX.Element;

declare const GeoPointSchema: z.ZodObject<{
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
}, z.core.$strip>;
declare const LocationSchema: z.ZodObject<{
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type GeoPoint = z.infer<typeof GeoPointSchema>;
type Location = z.infer<typeof LocationSchema>;

type GeoPointDisplayProps = {
    point: GeoPoint;
    label?: string;
    showMapLink?: boolean;
    precision?: number;
    className?: string;
};
declare function GeoPointDisplay({ point, label, showMapLink, precision, className, }: GeoPointDisplayProps): react_jsx_runtime.JSX.Element;

type LocationPickerProps = {
    initial?: Partial<Location>;
    onSubmit: (location: Location) => Promise<void> | void;
    onCancel?: () => void;
    error?: string;
    className?: string;
};
declare function LocationPicker({ initial, onSubmit, onCancel, error, className }: LocationPickerProps): react_jsx_runtime.JSX.Element;

type CurrencySelectorProps = {
    value: string;
    onChange: (currency: string) => void;
    id?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
};
declare function CurrencySelector({ value, onChange, id, label, disabled, className, }: CurrencySelectorProps): react_jsx_runtime.JSX.Element;

declare const OrderTotalsSchema: z.ZodObject<{
    subtotal: z.ZodNumber;
    discountTotal: z.ZodDefault<z.ZodNumber>;
    taxTotal: z.ZodDefault<z.ZodNumber>;
    serviceFee: z.ZodDefault<z.ZodNumber>;
    shippingTotal: z.ZodDefault<z.ZodNumber>;
    total: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
type OrderTotals = z.infer<typeof OrderTotalsSchema>;

type OrderTotalsCardProps = {
    totals: OrderTotals;
    locale?: string;
    className?: string;
};
declare function OrderTotalsCard({ totals, locale, className }: OrderTotalsCardProps): react_jsx_runtime.JSX.Element;

type PriceDisplayProps = {
    amount: number;
    currency?: string;
    locale?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    strikethrough?: boolean;
    className?: string;
};
declare function PriceDisplay({ amount, currency, locale, size, strikethrough, className, }: PriceDisplayProps): react_jsx_runtime.JSX.Element;

type NotificationItem = {
    id: string;
    title: string;
    description?: string;
    timestamp: string;
    read: boolean;
    variant?: 'info' | 'success' | 'warning' | 'error';
    onClick?: () => void;
};
type NotificationMenuProps = {
    items: NotificationItem[];
    onMarkAllRead?: () => void;
    onViewAll?: () => void;
    align?: 'left' | 'right';
    className?: string;
};
declare function NotificationMenu({ items, onMarkAllRead, onViewAll, align, className, }: NotificationMenuProps): react_jsx_runtime.JSX.Element;

declare const PaymentStatusEnum: z.ZodEnum<{
    FAILED: "FAILED";
    PENDING: "PENDING";
    AUTHORIZED: "AUTHORIZED";
    PAID: "PAID";
    CANCELLED: "CANCELLED";
    REFUNDED: "REFUNDED";
}>;
declare const PaymentMethodEnum: z.ZodEnum<{
    CREDIT_CARD: "CREDIT_CARD";
    DEBIT_CARD: "DEBIT_CARD";
    BANK_TRANSFER: "BANK_TRANSFER";
    CASH: "CASH";
    WALLET: "WALLET";
    CRYPTO: "CRYPTO";
}>;
declare const PaymentBaseSchema: z.ZodObject<{
    paymentId: z.ZodString;
    provider: z.ZodString;
    providerPaymentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    method: z.ZodOptional<z.ZodEnum<{
        CREDIT_CARD: "CREDIT_CARD";
        DEBIT_CARD: "DEBIT_CARD";
        BANK_TRANSFER: "BANK_TRANSFER";
        CASH: "CASH";
        WALLET: "WALLET";
        CRYPTO: "CRYPTO";
    }>>;
    status: z.ZodDefault<z.ZodEnum<{
        FAILED: "FAILED";
        PENDING: "PENDING";
        AUTHORIZED: "AUTHORIZED";
        PAID: "PAID";
        CANCELLED: "CANCELLED";
        REFUNDED: "REFUNDED";
    }>>;
    amount: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
declare const CardBrandEnum: z.ZodEnum<{
    VISA: "VISA";
    MASTERCARD: "MASTERCARD";
    AMEX: "AMEX";
    DISCOVER: "DISCOVER";
    TROY: "TROY";
    MIR: "MIR";
    UNIONPAY: "UNIONPAY";
    JCB: "JCB";
    UNKNOWN: "UNKNOWN";
}>;
declare const CreditCardInputSchema: z.ZodObject<{
    cardholderName: z.ZodString;
    cardNumber: z.ZodString;
    expiryMonth: z.ZodString;
    expiryYear: z.ZodString;
    cvv: z.ZodString;
}, z.core.$strip>;
declare const SavedCardSchema: z.ZodObject<{
    cardId: z.ZodString;
    last4: z.ZodString;
    brand: z.ZodEnum<{
        VISA: "VISA";
        MASTERCARD: "MASTERCARD";
        AMEX: "AMEX";
        DISCOVER: "DISCOVER";
        TROY: "TROY";
        MIR: "MIR";
        UNIONPAY: "UNIONPAY";
        JCB: "JCB";
        UNKNOWN: "UNKNOWN";
    }>;
    cardholderName: z.ZodString;
    expiryMonth: z.ZodString;
    expiryYear: z.ZodString;
    isDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
type PaymentStatus = z.infer<typeof PaymentStatusEnum>;
type PaymentMethod = z.infer<typeof PaymentMethodEnum>;
type PaymentBase = z.infer<typeof PaymentBaseSchema>;
type CardBrand = z.infer<typeof CardBrandEnum>;
type CreditCardInput = z.infer<typeof CreditCardInputSchema>;
type SavedCard = z.infer<typeof SavedCardSchema>;

type CheckoutSuccessStateProps = {
    payment: PaymentBase;
    address?: Address;
    onReset?: () => void;
    locale?: string;
};
declare function CheckoutSuccessState({ payment, address, onReset, locale, }: CheckoutSuccessStateProps): react_jsx_runtime.JSX.Element;

declare function detectBrand(number: string): CardBrand;
type CreditCardFormProps = {
    onSubmit: (values: CreditCardInput) => Promise<void> | void;
    onCancel?: () => void;
    error?: string;
    className?: string;
};
declare function CreditCardForm({ onSubmit, onCancel, error, className }: CreditCardFormProps): react_jsx_runtime.JSX.Element;

type CreditCardVisualProps = {
    cardNumber?: string;
    cardholderName?: string;
    expiryMonth?: string;
    expiryYear?: string;
    cvv?: string;
    brand?: CardBrand;
    flipped?: boolean;
    className?: string;
};
declare function CreditCardVisual({ cardNumber, cardholderName, expiryMonth, expiryYear, cvv, brand, flipped, className, }: CreditCardVisualProps): react_jsx_runtime.JSX.Element;

type PaymentMethodSelectorProps = {
    value?: PaymentMethod;
    onChange?: (method: PaymentMethod) => void;
    disabled?: boolean;
    className?: string;
};
declare function PaymentMethodSelector({ value, onChange, disabled, className, }: PaymentMethodSelectorProps): react_jsx_runtime.JSX.Element;

type PaymentStatusBadgeProps = {
    status: PaymentStatus;
    size?: 'sm' | 'md' | 'lg';
    dot?: boolean;
};
declare function PaymentStatusBadge({ status, size, dot }: PaymentStatusBadgeProps): react_jsx_runtime.JSX.Element;

type PaymentSummaryCardProps = {
    payment: PaymentBase;
    className?: string;
};
declare function PaymentSummaryCard({ payment, className }: PaymentSummaryCardProps): react_jsx_runtime.JSX.Element;

type SavedCardSelectorProps = {
    cards: SavedCard[];
    selectedCardId?: string;
    onSelect: (cardId: string, card: SavedCard) => void;
    onRemove?: (cardId: string) => void;
    onAddNew?: () => void;
    className?: string;
};
declare function SavedCardSelector({ cards, selectedCardId, onSelect, onRemove, onAddNew, className, }: SavedCardSelectorProps): react_jsx_runtime.JSX.Element;

declare const SeoFieldsSchema: z.ZodObject<{
    seoTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seoDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    keywords: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
type SeoFields = z.infer<typeof SeoFieldsSchema>;

type SeoFormProps = {
    initial?: Partial<SeoFields>;
    onSubmit: (values: SeoFields) => Promise<void> | void;
    onCancel?: () => void;
    error?: string;
    className?: string;
};
declare function SeoForm({ initial, onSubmit, onCancel, error, className }: SeoFormProps): react_jsx_runtime.JSX.Element;

type SeoPreviewProps = {
    seo: SeoFields;
    url?: string;
    siteName?: string;
    className?: string;
};
declare function SeoPreview({ seo, url, siteName, className }: SeoPreviewProps): react_jsx_runtime.JSX.Element;

declare const VisibilityEnum: z.ZodEnum<{
    PUBLIC: "PUBLIC";
    PRIVATE: "PRIVATE";
    UNLISTED: "UNLISTED";
}>;
declare const ProcessingStatusEnum: z.ZodEnum<{
    UPLOADING: "UPLOADING";
    PROCESSING: "PROCESSING";
    READY: "READY";
    FAILED: "FAILED";
}>;
type Visibility = z.infer<typeof VisibilityEnum>;
type ProcessingStatus = z.infer<typeof ProcessingStatusEnum>;

type ProcessingStatusIndicatorProps = {
    status: ProcessingStatus;
    label?: string;
    progress?: number;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};
declare function ProcessingStatusIndicator({ status, label, progress, size, className, }: ProcessingStatusIndicatorProps): react_jsx_runtime.JSX.Element;

declare const PublishStatusEnum: z.ZodEnum<{
    DRAFT: "DRAFT";
    PUBLISHED: "PUBLISHED";
    ARCHIVED: "ARCHIVED";
}>;

type PublishStatus = z.infer<typeof PublishStatusEnum>;

type PublishStatusBadgeProps = {
    status: PublishStatus;
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
    className?: string;
};
declare function PublishStatusBadge({ status, size, showIcon, className }: PublishStatusBadgeProps): react_jsx_runtime.JSX.Element;

type VisibilityBadgeProps = {
    visibility: Visibility;
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
    className?: string;
};
declare function VisibilityBadge({ visibility, size, showIcon, className }: VisibilityBadgeProps): react_jsx_runtime.JSX.Element;

type PlanInterval = 'MONTHLY' | 'YEARLY' | 'ONCE';
type SubscriptionPlan = {
    planId: string;
    name: string;
    description?: string | null;
    price: number;
    currency?: string;
    interval?: PlanInterval;
    features?: string[];
    isPopular?: boolean;
    isActive?: boolean;
};
type SubscriptionPlanCardProps = {
    plan: SubscriptionPlan;
    isCurrent?: boolean;
    isSelected?: boolean;
    onSelect?: (planId: string) => void;
    loading?: boolean;
    className?: string;
};
declare function SubscriptionPlanCard({ plan, isCurrent, isSelected, onSelect, loading, className, }: SubscriptionPlanCardProps): react_jsx_runtime.JSX.Element;

type UserAvatarProps = {
    user: SafeUser;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    status?: 'online' | 'offline' | 'away' | 'busy';
    className?: string;
};
declare function UserAvatar({ user, size, status, className }: UserAvatarProps): react_jsx_runtime.JSX.Element;

declare function UserMenu({ user, items, align, onlyAvatar, }: {
    user: SafeUser;
    items?: DropdownItem[];
    align?: 'left' | 'right';
    onlyAvatar?: boolean;
}): react_jsx_runtime.JSX.Element;

type UserPreferencesFormProps = {
    initial?: Partial<UserPreferences>;
    onSubmit: (values: UserPreferences) => Promise<void> | void;
    error?: string;
    className?: string;
};
declare function UserPreferencesForm({ initial, onSubmit, error, className }: UserPreferencesFormProps): react_jsx_runtime.JSX.Element;

type UserProfileCardProps = {
    user: SafeUser;
    actions?: React.ReactNode;
    className?: string;
};
declare function UserProfileCard({ user, actions, className }: UserProfileCardProps): react_jsx_runtime.JSX.Element;

type UserProfileFormProps = {
    initial?: Partial<UserProfile>;
    onSubmit: (values: UserProfile) => Promise<void> | void;
    onCancel?: () => void;
    error?: string;
    className?: string;
};
declare function UserProfileForm({ initial, onSubmit, onCancel, error, className }: UserProfileFormProps): react_jsx_runtime.JSX.Element;

type UserRoleBadgeProps = {
    role: UserRole;
    size?: 'sm' | 'md' | 'lg';
};
declare function UserRoleBadge({ role, size }: UserRoleBadgeProps): react_jsx_runtime.JSX.Element;

type UserStatusBadgeProps = {
    status: UserStatus;
    size?: 'sm' | 'md' | 'lg';
    dot?: boolean;
};
declare function UserStatusBadge({ status, size, dot }: UserStatusBadgeProps): react_jsx_runtime.JSX.Element;

export { AddressCard, AddressForm, AddressSelector, ApiErrorSchema, type ApiResponse, ApiResponseSchema, ApiSuccessSchema, type AuthResponse, AuthResponseSchema, type AuthSession, AuthSessionSchema, BaseEntitySchema, CartBadge, CartItem, CartPreview, CartSummary, type ChangePassword, ChangePasswordForm, ChangePasswordSchema, ChatBox, CheckoutSuccessState, CountrySelector, CouponInput, CreditCardForm, CreditCardVisual, CurrencySelector, DateSchema, DirectionProvider, DiscountBadge, EmailSchema, ForgotPasswordForm, GeoPointDisplay, type Id, IdSchema, LanguageEnum, LanguageSwitcher, LocationPicker, LoginForm, type LoginRequest, LoginRequestSchema, NotificationMenu, NullableDateSchema, OAuthButtons, type OAuthCallback, OAuthCallbackSchema, OAuthProviderEnum, OrderTotalsCard, type Pagination, PaginationSchema, PasswordSchema, PaymentMethodSelector, PaymentStatusBadge, PaymentSummaryCard, PriceDisplay, ProcessingStatusIndicator, ProductComparisonRadar, PublishStatusBadge, RegionalSalesPolar, RegisterForm, type RegisterRequest, RegisterRequestSchema, RevenueBarChart, type SafeUser, SafeUserSchema, SalesByCategoryDoughnut, SavedCardSelector, SeoForm, SeoPreview, SessionExpiredBanner, SlugSchema, SortOrderEnum, StatusEnum, SubscriptionPlanCard, ThemeEnum, type User, UserActivityLineChart, UserAvatar, UserMenu, type UserPreferences, UserPreferencesForm, UserPreferencesSchema, type UserProfile, UserProfileCard, UserProfileForm, UserProfileSchema, type UserRole, UserRoleBadge, UserRoleEnum, UserSchema, type UserStatus, UserStatusBadge, UserStatusEnum, UuidSchema, VisibilityBadge, detectBrand, useDirection };
