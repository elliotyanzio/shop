import React, { useContext } from 'react'
import Image from 'next/image'
import OCTOPUS_LOGO from '../../public/octopus-logo.svg'
import BASKET_IMAGE from '../../public/basket.svg'
import { ProductContext } from '../../context/useProductContext'

const Navbar = () => {
    const { basketQuantity } = useContext(ProductContext)
    return (
        <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', margin: '5px 10px' }}>
            <Image src={OCTOPUS_LOGO} height={45} width={150} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={BASKET_IMAGE} height={30} width={30} style={{ position: "relative" }} />
                {basketQuantity > 0 && (
                    <div title="Basket items" style={{ backgroundColor: '#f050f8', borderRadius: '25px', color: 'white', height: '20px', width: '20px', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '5px', right: '30px' }}>
                        <span style={{ fontSize: '12px' }}>{basketQuantity}</span>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Navbar