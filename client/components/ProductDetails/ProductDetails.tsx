import Section from "../Section"
import Specification from "../Specification"
import { formatSpecifications } from './ProductDetails.utils'
import { GreyParagraphText, ParagraphText, SectionTitle, ProductTitle, SubTitleContainer, ProductDetailsContainer, TermsText } from "./ProductDetails.styles"
import ProductActions from "../ProductActions/ProductActions"
import { FC } from "react"
import { ProductDetailsProps } from "./ProductDetails.types"

const ProductDetails: FC<ProductDetailsProps> = ({ productData }): JSX.Element => {
    return (
        <ProductDetailsContainer>
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
        </ProductDetailsContainer>
    )
}

export default ProductDetails