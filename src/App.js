
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';
//import Product from './components/Product';
import Product from './components/Product';
import Cart from './components/Cart';








function App() {
  return (
  <>
    <Navbar/>
  <Switch>
   <Route exact path="/" component={Home} />
  <Route exact path="/products" component={Products} />
  <Route exact path="/products/:id" component={Product} />
  <Route exact path="/cart" component={Cart} />
 </Switch>
  <Footer/>
  </>
   
  
  );
}

export default App;
