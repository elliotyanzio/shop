import styled from "styled-components"

export const NavbarContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
`

export const BasketContainer = styled.div`
    display: flex;
    align-items: center;
`

export const BasketQuantity = styled.div`
    background-color: ${({ theme }) => theme.colors.sohoLights};
    border-radius: 25px;
    color: white;
    height: 20px;
    width: 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    right: 30px; 
`

export const BasketQuantityText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
`