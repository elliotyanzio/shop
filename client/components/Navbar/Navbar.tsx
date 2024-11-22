import { FC, useContext } from 'react'
import Image from 'next/image'
import OCTOPUS_LOGO from '../../public/octopus-logo.svg'
import BASKET_IMAGE from '../../public/basket.svg'
import useProductContext from '../../hooks/useProductContext'
import { NavbarContainer, BasketContainer, BasketQuantity, BasketQuantityText } from './Navbar.styles'

const Navbar: FC = (): JSX.Element => {
    const { basketQuantity } = useProductContext()

    return (
        <NavbarContainer>
            <Image src={OCTOPUS_LOGO} height={45} width={150} />
            <BasketContainer>
                <Image src={BASKET_IMAGE} height={30} width={30} style={{ position: "relative" }} />
                {basketQuantity > 0 && (
                    <BasketQuantity title="Basket items">
                        <BasketQuantityText style={{ fontSize: '12px' }}>{basketQuantity}</BasketQuantityText>
                    </BasketQuantity>
                )}
            </BasketContainer>

        </NavbarContainer>
    )
}

export default Navbar