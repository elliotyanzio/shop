import { useContext } from "react"
import { ProductContext } from "../../context/useProductContext"
import Button from '../Button'
import ProductCounter from "../ProductCounter/ProductCounter"
import { LargeText, PricingContainer } from './ProductActions.styles'

const ProductActions = ({ productData }) => {
    const { setBasketQuantity, productQuantity } = useContext(ProductContext)

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