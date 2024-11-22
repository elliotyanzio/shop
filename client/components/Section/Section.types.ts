export type SectionProps = {
    type?: 'Primary' | 'Secondary' | 'Footer';
    children: JSX.Element;
}

export type SectionContainerProps = Pick<SectionProps, 'type'>