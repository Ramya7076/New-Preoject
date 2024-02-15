// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage'; // Import CartPage
import WishlistPage from './pages/WishlistPage'; // Import WishlistPage

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category/:categoryId" component={CategoryPage} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/wishlist" component={WishlistPage} />
      </Switch>
    </Router>
  );
};

export default App;
