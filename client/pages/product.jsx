import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Section from '../components/Section'
import ProductRight from '../components/ProductRight/ProductRight'
import { ProductContext } from '../context/useProductContext'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import useGraphQLFetch from '../hooks/useGraphQLFetch'

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

const gqlQuery = '{ allProducts { id name power description price quantity brand weight height length colour img_url model_code} }'

export default function Product() {
  const [productQuantity, setProductQuantity] = useState(1)
  const [basketQuantity, setBasketQuantity] = useState(0)
  const { data, loading, error } = useGraphQLFetch('http://localhost:3001/graphql', gqlQuery)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error fetching data</p>
  }

  return (
    <ProductContext.Provider value={{
      productQuantity, setProductQuantity, basketQuantity, setBasketQuantity
    }}>
      <Navbar />
      <MainContainer>
        {data && data.length > 0 && (
          <>
            <ProductContainer>
              <Section type={'primary'}>
                <Image loader={() => data[0].img_url} src={data[0].img_url} height={500} width={500} style={{ borderRadius: '15px' }} />
              </Section>
              <ProductRight productData={data} productQuantity={productQuantity} />
            </ProductContainer>
          </>
        )}
      </MainContainer>
    </ProductContext.Provider >
  )
}
