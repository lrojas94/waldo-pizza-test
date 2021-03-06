import React from 'react';
import { Route, Link } from 'react-router-dom';
import Orders from './containers/pages/orders.cont';
import CreateOrder from './containers/pages/create-order.cont';
import Cart from './containers/pages/cart.cont';

const App = () => (
  <div>
    <header className="nav">
      <Link className="nav__link" to="/">Orders</Link>
      <Link className="nav__link" to="/order">Order Now</Link>  
      <Link className="nav__link" to="/cart">Cart</Link>  
    </header>
    <div className="header">
      <h1 className="header__title">
        My Awesome Pizza Site!
      </h1>
      <h3 className="header__subtitle">
        This project was created in order apply to Waldo{'\''}s Front End Engineer job post
      </h3>
      <Link to="/order" className="header__button">
        Order Now
      </Link>
    </div>
    <main>
      <Route exact path="/" component={Orders} />
      <Route exact path="/order" component={CreateOrder} />
      <Route exact path="/cart" component={Cart} />
    </main>
  </div>
)
export default App;
