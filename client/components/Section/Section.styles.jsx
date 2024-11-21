import styled from "styled-components"

export const SectionContainer = styled.div`
    background: ${({ type, theme }) => type === 'primary' ? theme.colors.siphon : theme.colors.hemocyanin};
`