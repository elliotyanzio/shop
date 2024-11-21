import styled from "styled-components";

export const PricingCounterContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const QuantityContainer = styled(PricingCounterContainer)`
    margin: ${({ theme }) => `0 ${theme.spacing[3]}`};
`

export const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const QuantityLabelContainer = styled(CenterContainer)`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => `0 ${theme.spacing[2]}`};
`

export const QuantityLabel = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
`