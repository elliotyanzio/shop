import styled from "styled-components"

export const LargeText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 400;
`

export const PricingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;  
    margin: ${({ theme }) => `${theme.spacing[3]} 0`};
`