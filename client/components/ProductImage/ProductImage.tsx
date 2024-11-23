import { FC } from "react";
import Section from "../Section";
import { ProductImageContainer } from './ProductImage.styles'
import Image from "next/image";
import { ProductImageProps } from "./ProductImage.types";

const ProductImage: FC<ProductImageProps> = ({ productData }) => {
    return (
        <Section>
            <ProductImageContainer>
                <Image loader={() => productData.img_url} unoptimized={true} src={productData.img_url} height={500} width={500} style={{ borderRadius: '15px' }} />
            </ProductImageContainer>
        </Section>
    )
}

export default ProductImage;