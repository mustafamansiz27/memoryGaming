import React, { useState } from "react";
import "./magicApp.scss";
import coverImage from "../../assests/image/cover.png";
import SingleCard from "../SingleCard";

const MagicApp = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const cardImages = [
    { src: require("../../assests/image/helmet-1.png") },
    { src: require("../../assests/image/potion-1.png") },
    { src: require("../../assests/image/ring-1.png") },
    { src: require("../../assests/image/scroll-1.png") },
    { src: require("../../assests/image/shield-1.png") },
    { src: require("../../assests/image/shield-1.png") },
  ];

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0); 
  };

  return (
    <div className="magic-app">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
};

export default MagicApp;
