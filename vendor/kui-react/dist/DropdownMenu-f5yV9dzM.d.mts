import * as react_jsx_runtime from 'react/jsx-runtime';
import react__default from 'react';

type DropdownItem = {
    type?: 'item';
    label: string;
    icon?: react__default.ReactNode;
    onClick?: () => void;
    danger?: boolean;
    disabled?: boolean;
} | {
    type: 'separator';
};
declare function DropdownMenu({ trigger, items, header, align, className, }: {
    trigger: react__default.ReactNode;
    items: DropdownItem[];
    header?: react__default.ReactNode;
    align?: 'left' | 'right';
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { type DropdownItem as D, DropdownMenu as a };
