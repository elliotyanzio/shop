import { useState } from 'react'
import Section from '../components/Section'
import ProductDetails from '../components/ProductDetails'
import { ProductContext } from '../hooks/useProductContext/useProductContext'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import useGraphQLFetch from '../hooks/useGraphQLFetch'
import { TermsText } from '../components/ProductDetails/ProductDetails.styles'
import ProductImage from '../components/ProductImage'

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

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const gqlQuery = '{ allProducts { id name power description price quantity brand weight height length colour img_url model_code} }'

export default function Product() {
  const [productQuantity, setProductQuantity] = useState<number>(1)
  const [basketQuantity, setBasketQuantity] = useState<number>(0)
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
            <ProductContainer>
              <ProductImage productData={data} />
              <ProductDetails productData={data} />
            </ProductContainer>
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
