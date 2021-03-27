import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./../assets/test.json";
import './../styles/games.css';

function Games(props) {
  useEffect(() => {
  }, [])



  return (
    <div className="page">
      <div className='shop'>
        <div className='tags'>
          <h3>Categories</h3>
          <ul>
          <li>Simulation</li>
          <li>RPG</li>
          <li>Strategy</li>
          </ul></div>
        <div className="game-container">
          <ul className='games'>
            {data.games.map((Games, index) => (
              <li className='game' key={index}>
              <Link to={"/games/"+Games.name.toLowerCase().replace(/\s+/g, '-')}>
                <img src={Games.imgURL} alt={"image for game " + Games.name}/>
                <p>{Games.name}</p>
                <p>{Games.price}</p>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Games;
