import { FC } from "react";
import Section from "../Section";
import { ProductImageContainer } from './ProductImage.styles'
import Image from "next/image";
import { AllProducts } from "../../hooks/useGraphQLFetch/types";

const ProductImage: FC<{ productData: AllProducts }> = ({ productData }) => {
    return (
        <Section>
            <ProductImageContainer>
                <Image loader={() => productData[0].img_url} unoptimized={true} src={productData[0].img_url} height={500} width={500} style={{ borderRadius: '15px' }} />
            </ProductImageContainer>
        </Section>
    )
}

export default ProductImage;