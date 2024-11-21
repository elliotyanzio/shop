import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Section from '../components/Section'
import ProductRight from '../components/ProductRight/ProductRight'
import { ProductContext } from '../context/useProductContext'
import Navbar from '../components/Navbar'

export default function Product() {
  const [productData, setProductData] = useState()
  const [productQuantity, setProductQuantity] = useState(1)
  const [basketQuantity, setBasketQuantity] = useState(0)

  const fetchProductData = useCallback(async () => {
    const response = await fetch('http://localhost:3001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: '{ allProducts { id name power description price quantity brand weight height length colour img_url model_code} }' })
    })
    const gqlRes = await response.json()
    setProductData(gqlRes.data.allProducts)
  }, [])

  useEffect(() => {
    fetchProductData()
  }, [fetchProductData])

  return (
    <ProductContext.Provider value={{
      productQuantity, setProductQuantity, basketQuantity, setBasketQuantity
    }}>
      <Navbar />
      <div style={{ margin: '0 auto', maxWidth: '900px' }}>
        {productData && productData.length > 0 && (
          <>
            <div style={{}}>
              {/* left */}
              <Section type={'primary'}>
                <div style={{}}>
                  <Image loader={() => productData[0].img_url} src={productData[0].img_url} height={500} width={500} style={{ borderRadius: '15px' }} />
                </div>
              </Section>
              {/* right */}
              <ProductRight productData={productData} productQuantity={productQuantity} />
            </div>

          </>
        )}
      </div>
    </ProductContext.Provider>
  )
}
