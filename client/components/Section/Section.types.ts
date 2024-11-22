export type SectionProps = {
    type?: 'Primary' | 'Secondary';
    children: JSX.Element;
}

export type SectionContainerProps = Pick<SectionProps, 'type'>