import '../styles/globals.css'
import '../styles/App.css'
import '../styles/App-responsive.css'

/*pages*/

import HeaderMain from '../src/header/HeaderMain'
import Footer from '../src/header/Footer'

function MyApp ({ Component, pageProps }) {
  return (
  <div>
    <HeaderMain />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}

export default MyApp
