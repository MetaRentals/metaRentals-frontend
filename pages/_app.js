import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider appId="hQ8qO3ejQY0ZJPrqJUM0WRnsMvhuQlNFaOM2Z9o2" serverUrl="https://xh73q41shtyr.usemoralis.com:2053/server">

<Component {...pageProps} />
  </MoralisProvider>
  
  )
}

export default MyApp
