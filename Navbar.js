import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import Categories from './Categories';
import Product from './Product';

class Navbar extends React.Component{
    render() {
        return (
          <Router>
            <div>
              <nav>
              <ul id="nav">
                <li><Link to="/first">Home</Link></li>
                <li><Link to="/second">Categories</Link></li>
                <li><Link to="/third">Products</Link></li>
              </ul>

              <Route
              path="/first"
              component= {Home}
              />

              <Route
              path="/second"
              component= {Categories}
              />
              
              <Route
              path="/third"
              component= {Product}
              />

              </nav>
            </div>
            </Router>
        );
    }
  }

  export default Navbar;