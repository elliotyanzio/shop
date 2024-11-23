import { FC } from 'react'
import Button from '../Button'
import { LargeText } from '../ProductActions/ProductActions.styles'
import { QuantityContainer, PricingCounterContainer, QuantityLabel, QuantityLabelContainer, CenterContainer } from './ProductCounter.styles'
import { ProductCounterProps } from './ProductCounter.types'

const ProductCounter: FC<ProductCounterProps> = ({ productStock, productQuantity, incrementFn, decrementFn, }): JSX.Element => {
    return (
        <>
            <PricingCounterContainer>
                <QuantityLabelContainer>
                    <QuantityLabel>Qty</QuantityLabel>
                </QuantityLabelContainer>
                <CenterContainer>
                    <Button
                        onClick={decrementFn}
                        disabled={productQuantity <= 1}
                    >
                        <p>-</p>
                    </Button>
                    <QuantityContainer>
                        <LargeText title={'Current quantity'}>{productQuantity}</LargeText>
                    </QuantityContainer>
                    <Button
                        onClick={incrementFn}
                        disabled={productQuantity === productStock}
                    >
                        <p>+</p>
                    </Button>
                </CenterContainer>
            </PricingCounterContainer>
        </>
    )
}

export default ProductCounter