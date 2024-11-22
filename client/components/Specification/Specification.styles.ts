import styled from "styled-components";
import { ParagraphText } from "../ProductDetails/ProductDetails.styles";

export const SpecificationItemContainer = styled.div`
    display: flex;
`

export const SpecificationItemSide = styled.div`
    width: 50%;
`

export const SpecificationItemText = styled(ParagraphText)`
    &&{
        font-size: ${({ theme }) => theme.fontSizes.xSmall};
        line-height: 1;
    }
`
