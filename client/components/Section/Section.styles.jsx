import styled from "styled-components"

export const SectionContainer = styled.div`
    background: ${({ type, theme }) => type === 'primary' ? theme.colors.siphon : theme.colors.hemocyanin};
    padding: 15px 15px;

    @media screen and (min-width: 350px) {
        background: ${({ theme }) => theme.colors.siphon};
    }
`