import { useContext } from 'react'
import Button from '../Button'
import { ProductContext } from '../../context/useProductContext'

const ProductCounter = ({ productData }) => {
    const { productQuantity, setProductQuantity } = useContext(ProductContext)
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                    <p style={{ margin: '0', padding: '0', fontSize: '12px' }}>Qty</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        onClick={() => setProductQuantity((prev) => prev - 1)}
                        disabled={productQuantity <= 1}
                    >
                        -
                    </Button>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 10px' }}>
                        <p style={{ margin: '0', padding: '0', fontWeight: '400', fontSize: '20px' }} title={'Current quantity'}>{productQuantity}</p>
                    </div>
                    <Button
                        onClick={() => setProductQuantity((prev) => prev + 1)}
                        disabled={productQuantity === productData.quantity}
                    >
                        +
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductCounter