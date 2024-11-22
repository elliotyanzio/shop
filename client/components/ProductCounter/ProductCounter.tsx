import { FC } from 'react'
import Button from '../Button'
import useProductContext from '../../hooks/useProductContext'
import { LargeText } from '../ProductActions/ProductActions.styles'
import { QuantityContainer, PricingCounterContainer, QuantityLabel, QuantityLabelContainer, CenterContainer } from './ProductCounter.styles'
import { ProductCounterProps } from './ProductCounter.types'

const ProductCounter: FC<ProductCounterProps> = ({ productData }): JSX.Element => {
    //TODO: Change theses to props - so it can be reusable
    const { productQuantity, setProductQuantity } = useProductContext()
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
                        <p>-</p>
                    </Button>
                    <QuantityContainer>
                        <LargeText title={'Current quantity'}>{productQuantity}</LargeText>
                    </QuantityContainer>
                    <Button
                        onClick={() => setProductQuantity((prev) => prev + 1)}
                        disabled={productQuantity === productData.quantity}
                    >
                        <p>+</p>
                    </Button>
                </CenterContainer>
            </PricingCounterContainer>
        </>
    )
}

export default ProductCounter