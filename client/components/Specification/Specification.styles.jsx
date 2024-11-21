import styled from "styled-components";
import { ParagraphText } from "../ProductRight/ProductRight.styles";

export const SpecificationItemContainer = styled.div`
    display: flex;
`

export const SpecificationItemSide = styled.div`
    width: 50%;
`

export const SpecificationItemText = styled(ParagraphText)`
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 1;
`
