import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
    @media screen and (min-width: 768px) {
        width: 66%;
    }
`

export const ParagraphText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin: ${({ theme }) => `${theme.spacing[1]} 0`};
    line-height: 1.5;
    font-weight: 200;
`

export const GreyParagraphText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.regular};
    color: ${({ theme }) => theme.colors.grey};
`

export const TermsText = styled(GreyParagraphText)`
    font-size: ${({ theme }) => theme.fontSizes.tiny};
    line-height: 1.5;
`

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
    margin: ${({ theme }) => `${theme.spacing[1]} 0 ${theme.spacing[3]}`};
`

export const ProductTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.title};
`

export const SubTitleContainer = styled.div`
    margin: ${({ theme }) => `${theme.spacing[2]} 0`};
`