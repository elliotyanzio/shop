import { useState } from 'react'
import Image from 'next/image'
import Section from '../components/Section'
import ProductRight from '../components/ProductRight/ProductRight'
import { ProductContext } from '../hooks/useProductContext/useProductContext'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import useGraphQLFetch from '../hooks/useGraphQLFetch'
import { TermsText } from '../components/ProductRight/ProductRight.styles'

const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 80%;
    flex: 1;
  
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const ProductContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const ProductImageContainer = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
      <LayoutContainer>
        <Navbar />
        <MainContainer>
          {data && data.length > 0 && (
            <>
              <ProductContainer>
                <Section>
                  <ProductImageContainer>
                    <Image loader={() => data[0].img_url} unoptimized={true} src={data[0].img_url} height={500} width={500} style={{ borderRadius: '15px' }} />
                  </ProductImageContainer>
                </Section>
                <ProductRight productData={data} productQuantity={productQuantity} />
              </ProductContainer>
            </>
          )}
        </MainContainer>
        <Section type={'Footer'}>
          <TermsText>
            Octopus Energy Ltd is a company registered in England and Wales. Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
          </TermsText>
        </Section>
      </LayoutContainer>
    </ProductContext.Provider >
  )
}
