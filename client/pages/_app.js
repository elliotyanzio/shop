import "../styles/globals.css";
import Image from 'next/image'
import OCTOPUS_LOGO from '../public/octopus-logo.svg'
import BASKET_IMAGE from '../public/basket.svg'
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme} >
        <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', margin: '5px 10px' }}>
          <Image src={OCTOPUS_LOGO} height={45} width={150} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={BASKET_IMAGE} height={30} width={30} style={{ position: "relative" }} />
            <div title="Basket items" style={{ backgroundColor: '#f050f8', borderRadius: '25px', color: 'white', height: '20px', width: '20px', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '5px', right: '30px' }}>
              <span style={{ fontSize: '12px' }}>4</span>
            </div>
          </div>

        </div>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
