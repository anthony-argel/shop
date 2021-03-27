import React, { useEffect, useState } from "react";
import data from "./../assets/test.json";
import './../styles/game.css';

function GameDetails(props) {
    const [game, setGame] = useState({});
    const name = props.match.params.name;
  useEffect(() => {
    for(let i = 0; i < data.games.length; i++) {
      if(data.games[i].name.toLowerCase().replace(/\s+/g, '-') === name) {
          setGame(data.games[i]);
          break;
      }
  }
  }, [name])

  function toggleNotification() {
      let notif = document.getElementsByClassName('notification')[0];
      notif.classList.toggle('hidden');
  }

  function addToCart(e) {
      e.preventDefault();
      let boundToggle = toggleNotification.bind(this);
      toggleNotification();
      setTimeout(boundToggle, 500);

      let itemAmount = document.getElementById("amount").value;
      if(itemAmount <= 0) {
        itemAmount = 1;
      }
      let returnData = [game.name, parseInt(itemAmount), game.imgURL, parseFloat(game.price), props.match.params.name];
      props.addCartItem(returnData);
  }

  return (
    <div className="page">
        <div className="notification hidden"><p>{game.name} has been added to the cart.</p></div>
    <h1>{game.name}</h1>
        <div className="game-details">
        <div className="left">
        <img src={game.imgURL} alt={"image for game: " + game.name}/>
        </div>
        <div className="right">
          <p>{game.description}</p>
         <h2>Price: {game.price}</h2>
         <form onSubmit={addToCart}>
          <label htmlFor="amount">Amount:
             <input type="number" min="1" defaultValue="1" id="amount" required></input>
          </label>
         <button>Add To Cart</button>
        </form>
        </div>
        </div>
    </div>
  );
}

export default GameDetails;
