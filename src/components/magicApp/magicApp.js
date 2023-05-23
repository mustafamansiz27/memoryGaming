import React, { useEffect, useState } from "react";
import "./magicApp.scss";
import SingleCard from "../SingleCard";

const MagicApp = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false)


  const cardImages = [
    { src: require("../../assests/image/helmet-1.png" ),matched:false } ,
    { src: require("../../assests/image/potion-1.png" ),matched:false } ,
    { src: require("../../assests/image/ring-1.png"   ),matched:false },
    { src: require("../../assests/image/scroll-1.png" ),matched:false } ,
    { src: require("../../assests/image/shield-1.png" ),matched:false } ,
    { src: require("../../assests/image/sword-1.png" ),matched:false } ,
  ];

  

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurns(0);
  };



  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };


  // compare 2 selected cards
  useEffect( ()=> {
     
   

    if(choiceOne && choiceTwo){
      setDisabled(true) 
       

      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched:true}
            } else {
               return card 
            }
          })
        })
        resetTurn()

      }else {
       setTimeout(() => resetTurn(),1000) 

      }

    }

  },[choiceOne,choiceTwo] )

  // reset choices & increase turn 
   


  // start a new game automaticly
  useEffect(()=>{
    shuffleCards()
  }, [])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1 )
    setDisabled(false)
  }

  return (
    <div className="magic-app">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice = {handleChoice}
          flipped = {card === choiceOne ||card === choiceTwo || card.matched }
          disabled={disabled}
          />
        ))}
      </div>
      <p> Turns:{turns} </p>
    </div>
  );
};

export default MagicApp;
