import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Section from '../components/Section'
import ProductRight from '../components/ProductRight/ProductRight'
import { ProductContext } from '../context/useProductContext'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 90%;
  
  @media screen and (max-width: 550px) {
    margin: 0 auto;
    max-width: 100%;
  }
`

const ProductContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

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
      <MainContainer>
        {productData && productData.length > 0 && (
          <>
            <ProductContainer>
              <Section type={'primary'}>
                <Image loader={() => productData[0].img_url} src={productData[0].img_url} height={500} width={500} style={{ borderRadius: '15px' }} />
              </Section>
              <ProductRight productData={productData} productQuantity={productQuantity} />
            </ProductContainer>

          </>
        )}
      </MainContainer>
    </ProductContext.Provider >
  )
}
