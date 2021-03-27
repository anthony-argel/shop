import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './../styles/cart.css'
import uniqid from "uniqid";

function Cart(props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotal();
  })

  function updateTotal() {
    let tmpTotal = 0;
    let copies = 0;
    let price = 0;
    for(let i = 0; i < props.currentCart.length; i++) {
      copies = props.currentCart[i][1];
      price = props.currentCart[i][3];
      tmpTotal += (copies * price);
    }

    setTotal(tmpTotal);
  }

  const incrementCopies = (e) => {
    let found = document.getElementsByClassName("item");
    for(let i = 0; i < found.length; i++) {
      if(found[i].contains(e.target)) {
        props.editCart(parseInt(found[i].getAttribute('data-id')), 1);
      }
    }
  }

  const decrementCopies = (e) => {
    let found = document.getElementsByClassName("item");
    for(let i = 0; i < found.length; i++) {
      if(found[i].contains(e.target)) {
        props.editCart(parseInt(found[i].getAttribute('data-id')), -1);
      }
    }
  }

  function removeItem(e) {
    let found = document.getElementsByClassName("item");
    for(let i = 0; i < found.length; i++) {
      if(found[i].contains(e.target)) {
        props.editCart(parseInt(found[i].getAttribute('data-id')), -1 * props.currentCart[i][1]);
      }
    }
  }

  function renderItems() {
    return props.currentCart.map((item, index) => (
      <div key={uniqid()} className="item" data-id={index}>
        <div className="left">
    <Link to={"/games/"+item[4]}>
         <img src ={item[2]} alt={"image for game: " + item[0]}/>
    </Link>
        </div>
        <div className="right">
          <p>Title: {item[0]}</p>
          <p>Copies: 
            {item[1]}
            <button onClick={decrementCopies}>-</button>
            <button onClick={incrementCopies}>+</button>
          </p>
          <p>Price: {item[3]}</p>
          <p className="removeItemBtn" onClick={removeItem}>Remove item</p>
        </div>
      </div>
  ))
  }


  return (
    <div className="page">
      <h1>Cart</h1>
      {renderItems()}
      <div className="total"><p>TOTAL: {total.toFixed(2)}</p>
      <button>Complete Purchase</button>
      </div>
    </div>
  );
}

export default Cart;
