import react from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path = '/products' component = {Products} />
        <Route path = '/' component = {Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
