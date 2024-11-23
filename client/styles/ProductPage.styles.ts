import styled from "styled-components"

export const MainContainer = styled.div`
    margin: 0 auto;
    max-width: 80%;
    flex: 1;
  
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const ProductContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`