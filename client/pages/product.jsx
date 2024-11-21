import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Button from '../components/Button'
import Section from '../components/Section'
import Specification from '../components/Specification'

const Title = styled.p`
  color: orange;
  background-color: ${({ theme }) => theme.colors.plum};
`

export default function Product() {
  const [productData, setProductData] = useState()
  const [productQuantity, setProductQuantity] = useState(1)

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


  const formatSpecifications = (productData) => ([
    {
      title: 'Brand',
      value: productData.brand
    },
    {
      title: 'Item Weight (g)',
      value: productData.weight
    },
    {
      title: 'Dimension (cm)',
      value: `${productData.height} x ${productData.length}`
    },
    {
      title: 'Item Model number',
      value: productData.model_code
    },
    {
      title: 'Colour',
      value: productData.colour
    },
  ])

  return (
    <div style={{ margin: '0 auto', maxWidth: '900px' }}>
      {/* <Title>Product page!</Title>
      <p>{JSON.stringify(productData)}</p> */}
      {productData && productData.length > 0 && (
        <>
          <div style={{}}>
            {/* left */}
            <div style={{}}>
              <Image loader={() => productData[0].img_url} src={productData[0].img_url} height={500} width={500} style={{ borderRadius: '5px' }} />
            </div>
            {/* right */}
            <div style={{}}>
              <h1 style={{ padding: '0', margin: '0' }}>{productData[0].name}</h1>
              <div>
                <p style={{ color: 'grey', fontSize: '12px' }}>{productData[0].power} // Packet of 4</p>
              </div>
              <Section type={'primary'}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p>£12.99</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button text='-' onClick={() => setProductQuantity((prev) => prev - 1)} disabled={productQuantity <= 1} />
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 10px' }}>
                      <p>{productQuantity}</p>
                    </div>

                    <Button text='+' onClick={() => setProductQuantity((prev) => prev + 1)} disabled={productQuantity === productData[0].quantity} />
                  </div>
                </div>
              </Section>
              <Button text='Add to cart' onClick={() => console.log('new button clicked')} />
              <Section type={'secondary'}>
                <h2>Description</h2>
                <p style={{ lineHeight: '1.5' }}>{productData[0].description}</p>
              </Section>
              <Section type='primary'>
                <Specification specificationArr={formatSpecifications(productData[0])} />
              </Section>
            </div>
          </div>

        </>
      )}







    </div>
  )
}
