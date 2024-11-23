import { useState } from 'react'
import Section from '../components/Section'
import ProductDetails from '../components/ProductDetails'
import { ProductContext } from '../hooks/useProductContext/useProductContext'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import useGraphQLFetch from '../hooks/useGraphQLFetch'
import { TermsText } from '../components/ProductDetails/ProductDetails.styles'
import ProductImage from '../components/ProductImage'
import { Product as ProductResponse } from '../hooks/useGraphQLFetch/types'
import { MainContainer, LayoutContainer, ProductContainer } from '../styles/ProductPage.styles'

const gqlQuery = '{ allProducts { id name power description price quantity brand weight height width length colour img_url model_code} }'

export default function Product() {
  const [productQuantity, setProductQuantity] = useState<number>(1)
  const [basketQuantity, setBasketQuantity] = useState<number>(0)
  const { data, loading, error } = useGraphQLFetch<ProductResponse>('http://localhost:3001/graphql', gqlQuery)

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
          {data && (
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
