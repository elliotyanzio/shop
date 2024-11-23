import Section from "../Section"
import Specification from "../Specification"
import { formatSpecifications } from './ProductDetails.utils'
import { GreyParagraphText, ParagraphText, SectionTitle, ProductTitle, SubTitleContainer, ProductDetailsContainer } from "./ProductDetails.styles"
import ProductActions from "../ProductActions/ProductActions"
import { FC } from "react"
import { ProductDetailsProps } from "./ProductDetails.types"

const ProductDetails: FC<ProductDetailsProps> = ({ productData }): JSX.Element => {
    return (
        <ProductDetailsContainer>
            <Section>
                <>
                    <ProductTitle>{productData.name}</ProductTitle>
                    <SubTitleContainer>
                        <GreyParagraphText>{productData.power} // Packet of 4</GreyParagraphText>
                    </SubTitleContainer>
                    <ProductActions productData={productData} />
                </>

            </Section>
            <Section type={'Secondary'}>
                <>
                    <SectionTitle>Description</SectionTitle>
                    <ParagraphText>{productData.description}</ParagraphText>
                </>
            </Section>
            <Section>
                <>
                    <SectionTitle>Specifications</SectionTitle>
                    <Specification specificationArr={formatSpecifications(productData)} />
                </>
            </Section>
        </ProductDetailsContainer>
    )
}

export default ProductDetails