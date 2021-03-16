import Layout from '../components/Layout'
import Layout_React from '../components/Layout_React'
import Layout_Javascript from '../components/Layout_Javascript'
import Layout_Css from '../components/Layout_Css'
import Layout_Portfolio from '../components/Layout_Portfolio'
import Layout_Contact from '../components/Layout_Contact'
import Layout_Home from '../components/Layout_Home'
import Layout_Search from '../components/Layout_Search'
import '../styles/styles.css'
import '../styles/utilities.css'

import '../styles/prism.css'
import Prism from 'prismjs';


function MyApp({ Component, pageProps, router }) {
  /* console.log(router.route);
  console.log((router.route.startsWith('/react'))); */

  if(router.route.startsWith('/react')) {
    return(
    <Layout_React>
      <Component {...pageProps} />
    </Layout_React>
    )
  }

  if(router.route.startsWith('/javascript')) {
    return(
    <Layout_Javascript>
      <Component {...pageProps} />
    </Layout_Javascript>
    )
  }

  if(router.route.startsWith('/css')) {
    return(
    <Layout_Css>
      <Component {...pageProps} />
    </Layout_Css>
    )
  }

  if(router.route.startsWith('/portfolio')) {
    return(
    <Layout_Portfolio>
      <Component {...pageProps} />
    </Layout_Portfolio>
    )
  }  

  if(router.route.startsWith('/contact')) {
    return(
    <Layout_Contact>
      <Component {...pageProps} />
    </Layout_Contact>
    )
  } 

  if(router.route.startsWith('/search')) {
    return(
    <Layout_Search>
      <Component {...pageProps} />
    </Layout_Search>
    )
  } 

  if(router.route.startsWith('/')) {
    return(
    <Layout_Home>
      <Component {...pageProps} />
    </Layout_Home>
    )
  } 
}

export default MyApp
