import styled from "styled-components"
import { SectionContainerProps } from "./Section.types"

export const SectionContainer = styled.div<SectionContainerProps>`
    background: ${({ type, theme }) => type === 'Primary' ? theme.colors.siphon : theme.colors.hemocyanin};
    padding: 15px 15px;

    @media screen and (min-width: 768px) {
        background: ${({ theme }) => theme.colors.siphon};
    }
`