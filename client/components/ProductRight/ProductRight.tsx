import Section from "../Section"
import Specification from "../Specification"
import { formatSpecifications } from './ProductRight.utils'
import { GreyParagraphText, ParagraphText, SectionTitle, ProductTitle, SubTitleContainer, ProductRightContainer, TermsText } from "./ProductRight.styles"
import ProductActions from "../ProductActions/ProductActions"
import { FC } from "react"
import { ProductRightProps } from "./ProductRight.types"

const ProductRight: FC<ProductRightProps> = ({ productData }): JSX.Element => {
    return (
        <ProductRightContainer>
            <Section>
                <>
                    <ProductTitle>{productData[0].name}</ProductTitle>
                    <SubTitleContainer>
                        <GreyParagraphText>{productData[0].power} // Packet of 4</GreyParagraphText>
                    </SubTitleContainer>
                    <ProductActions productData={productData[0]} />
                </>

            </Section>
            <Section type={'Secondary'}>
                <>
                    <SectionTitle>Description</SectionTitle>
                    <ParagraphText>{productData[0].description}</ParagraphText>
                </>
            </Section>
            <Section>
                <>
                    <SectionTitle>Specifications</SectionTitle>
                    <Specification specificationArr={formatSpecifications(productData[0])} />
                </>
            </Section>
        </ProductRightContainer>
    )
}

export default ProductRight