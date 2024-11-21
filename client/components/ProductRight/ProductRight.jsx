import Section from "../Section"
import Specification from "../Specification"
import { formatSpecifications } from './ProductRight.utils'
import { GreyParagraphText, ParagraphText, SectionTitle, ProductTitle, SubTitleContainer, ProductRightContainer } from "./ProductRight.styles"
import ProductActions from "../ProductActions/ProductActions"

const ProductRight = ({ productData }) => {
    return (
        <ProductRightContainer>
            <Section type={'primary'}>
                <ProductTitle>{productData[0].name}</ProductTitle>
                <SubTitleContainer>
                    <GreyParagraphText>{productData[0].power} // Packet of 4</GreyParagraphText>
                </SubTitleContainer>
                <ProductActions productData={productData[0]} />
            </Section>
            <Section type={'secondary'}>
                <SectionTitle>Description</SectionTitle>
                <ParagraphText>{productData[0].description}</ParagraphText>
            </Section>
            <Section type='primary'>
                <SectionTitle>Specifications</SectionTitle>
                <Specification specificationArr={formatSpecifications(productData[0])} />
            </Section>
        </ProductRightContainer>
    )
}

export default ProductRight