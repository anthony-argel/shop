import './styles/reset.css';
import './styles/App.css';
import React, {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home';
import NavBar from './components/NavBar';
import Games from './components/Games';
import Cart from './components/Cart';
import GameDetails from './components/GameDetails';
import Footer from './components/Footer';


function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(data) {
    let foundIndex = -1;
    for(let i = 0; i < cart.length; i++) {
      if (cart[i][0] === data[0]) {
        foundIndex = i;
        break;
      }
    }
    if(foundIndex === -1) {
      setCart(cart.concat([data]));
    }
    else {
      let newCart = cart;
      newCart[foundIndex][1] += data[1];
      setCart(newCart);
    }
  }

  function editCartCopies(index, amount) {
    let newCart = [...cart];
    newCart[index][1] += amount;
    if(newCart[index][1] === 0) {
      newCart.splice(index,1);
    }
    setCart(newCart);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currentCart={cart}/>
        <Switch>
          <Route path='/games' exact component={Games}></Route>
          <Route path='/games/:name' render={(props) => <GameDetails {...props} addCartItem={addItemToCart} />}></Route>
          <Route path='/cart' render={(props) => <Cart {...props} currentCart={cart} editCart={editCartCopies} />}></Route>  
          <Route path='/' component={Home}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
