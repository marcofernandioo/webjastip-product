import react, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';

import sanityClient from './client';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
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
        let socialObj = {};
        if (res.WA) socialObj.wa = res.WA;
        if (res.IG) socialObj.ig = res.IG;
        setSocial(socialObj);
      })
      .catch(err => alert('Error, coba ulangi kembali.'));
  }, [])

  return (
    <SWRConfig value = {{fetcher}}>
      <Navbar data = {social} />
      <Switch>
        <Route exact path = '/products' component = {Products} />
        <Route exact path = '/' component = {Home} />
      </Switch>
      <Footer data = {social}/>
    </SWRConfig>
  );
}

export default App;
