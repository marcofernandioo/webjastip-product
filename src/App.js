import react, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';

import sanityClient from './client';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

const fetcher = (url) => fetch(url).then(result => result);
function App() {
  const [social, setSocial] = useState({});
  useEffect(() => {
    const queryString = `
      *[_type == 'socials'] {
        IG,WA
      } [0]
    `;
    sanityClient
      .fetch(queryString)
      .then(res => {
        console.log(res);
        let socialObj = {};
        if (res.WA) socialObj.wa = res.WA;
        if (res.IG) socialObj.ig = res.IG;
        setSocial(socialObj);
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <SWRConfig value = {{fetcher}}>
      <Navbar data = {social} />
      <Switch>
        <Route exact path = '/products/:name/:price/:desc/:limitedslot/:category/:imgURL' component = {ProductDetail} />
        <Route exact path = '/products' component = {Products} />
        <Route exact path = '/' component = {Home} />
      </Switch>
      <Footer data = {social}/>
    </SWRConfig>
  );
}

export default App;
