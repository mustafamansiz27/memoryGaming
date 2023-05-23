import React from 'react'
import "./SingleCard.scss"

const SingleCard = ({card,handleChoice,flipped,disabled}) => {


    const handleClick = ()=>{

      if(!disabled){
        handleChoice(card)

      }
       
      
    }

    


  return (
    <div className="card" >
    <div className={flipped ? "flipped": "" }>
      <img className="front" src={card.src} alt="card front" />
      <img
       className="back"
       src={require("../assests/image/cover.png")} 
       alt="card back" 
       onClick={handleClick}
       />
    </div>   
  </div>  
  )
}

export default SingleCard


// Sub Total :	16739.30$
// Discount :	2551.69$
// Tax :	724.95$
// Total Amount :	14912.56$

