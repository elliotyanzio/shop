import Section from "../Section"
import Button from '../Button'
import Specification from "../Specification"
import { formatSpecifications } from './ProductRight.utils'
import ProductCounter from "../ProductCounter/ProductCounter"
import { useContext } from "react"
import { ProductContext } from "../../context/useProductContext"

const ProductRight = ({ productData }) => {
    const { setBasketQuantity, productQuantity } = useContext(ProductContext)

    return (
        <div style={{}}>
            <Section type={'primary'}>
                <h1 style={{ padding: '0', margin: '0' }}>{productData[0].name}</h1>
                <div>
                    <p style={{ color: 'grey', fontSize: '12px', padding: '0', margin: '0', marginTop: '8px' }}>{productData[0].power} // Packet of 4</p>
                </div>
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
                        <h2 style={{ fontWeight: '400' }}>£{productData[0].price}</h2>
                        <ProductCounter productData={productData[0]} />
                    </div>
                    <Button
                        width={'100%'} height={'50px'}
                        onClick={() => setBasketQuantity(productQuantity)}
                    >
                        <h3 style={{ padding: '0', margin: '0' }}>Add to cart</h3>
                    </Button>
                </>
            </Section>
            <Section type={'secondary'}>
                <h2>Description</h2>
                <p style={{ lineHeight: '1.5' }}>{productData[0].description}</p>
            </Section>
            <Section type='primary'>
                <Specification specificationArr={formatSpecifications(productData[0])} />
            </Section>
        </div>
    )
}

export default ProductRight