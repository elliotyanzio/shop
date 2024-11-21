import { useContext } from 'react'
import Button from '../Button'
import { ProductContext } from '../../context/useProductContext'
import { LargeText } from '../ProductActions/ProductActions.styles'
import { QuantityContainer, PricingCounterContainer, QuantityLabel, QuantityLabelContainer, CenterContainer } from './ProductCounter.styles'

const ProductCounter = ({ productData }) => {

    //TODO: Change theses to props - so it can be reusable
    const { productQuantity, setProductQuantity } = useContext(ProductContext)
    return (
        <>
            <PricingCounterContainer>
                <QuantityLabelContainer>
                    <QuantityLabel>Qty</QuantityLabel>
                </QuantityLabelContainer>
                <CenterContainer>
                    <Button
                        onClick={() => setProductQuantity((prev) => prev - 1)}
                        disabled={productQuantity <= 1}
                    >
                        -
                    </Button>
                    <QuantityContainer>
                        <LargeText title={'Current quantity'}>{productQuantity}</LargeText>
                    </QuantityContainer>
                    <Button
                        onClick={() => setProductQuantity((prev) => prev + 1)}
                        disabled={productQuantity === productData.quantity}
                    >
                        +
                    </Button>
                </CenterContainer>
            </PricingCounterContainer>
        </>
    )
}

export default ProductCounter