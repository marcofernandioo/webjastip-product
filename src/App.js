import react from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path = '/products/:name/:price/:desc/:limitedslot/:category/:imgURL' component = {ProductDetail} />
        <Route exact path = '/products' component = {Products} />
        <Route exact path = '/' component = {Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
