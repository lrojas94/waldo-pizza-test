import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/pages/home.comp';
import CreateOrder from './containers/pages/create-order.cont';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/create-order">Order Now!</Link>  
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/create-order" component={CreateOrder} />
    </main>
  </div>
)
export default App;
