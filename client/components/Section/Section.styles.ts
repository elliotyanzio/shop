import styled from "styled-components"
import { SectionContainerProps } from "./Section.types"

export const SectionContainer = styled.div<SectionContainerProps>`
    background: ${({ type, theme }) => type === 'Primary' ? theme.colors.siphon : theme.colors.hemocyanin};
    padding: 15px 15px;
    text-align: ${({ type }) => type === 'Footer' ? 'center' : 'left'};
    position: relative;

    @media screen and (min-width: 768px) {
        background: ${({ type, theme }) => type === 'Footer' ? theme.colors.hemocyanin : theme.colors.siphon};
    }
`