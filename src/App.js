import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={ProductList} />
        <Route exact path='/products/:id' component={Product} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
