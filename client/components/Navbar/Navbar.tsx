import React from 'react'
import Image from 'next/image'
import OCTOPUS_LOGO from '../../public/OCTOPUS_LOGO.svg'

const Navbar = () => {
    return (
        <div style={{ width: '100%', height: '50px', display: 'flex', justifyContent: 'space-between' }}>
            <Image src={OCTOPUS_LOGO} height={45} width={150} />
        </div>
    )
}

export default Navbar