export type ButtonProps = {
    width?: string;
    height?: string;
    onClick: () => void;
    disabled?: boolean;
    children: JSX.Element;
}

export type ButtonStyleProps = Pick<ButtonProps, 'width' | 'height'>