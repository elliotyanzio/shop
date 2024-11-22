import { FC } from "react"
import useProductContext from "../../hooks/useProductContext"
import Button from '../Button'
import ProductCounter from "../ProductCounter/ProductCounter"
import { LargeText, PricingContainer } from './ProductActions.styles'
import { ProductActionsProps } from './ProductActions.types'

const ProductActions: FC<ProductActionsProps> = ({ productData }): JSX.Element => {
    const { setBasketQuantity, productQuantity } = useProductContext()

    return (
        <>
            <PricingContainer>
                <LargeText>£{productData.price}</LargeText>
                <ProductCounter productData={productData} />
            </PricingContainer>
            <Button
                width={'100%'}
                height={'50px'}
                onClick={() => setBasketQuantity(productQuantity)}
            >
                <LargeText>Add to cart</LargeText>
            </Button>
        </>
    )
}

export default ProductActions;