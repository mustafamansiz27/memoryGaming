import React from 'react'
import "./SingleCard.scss"

const SingleCard = ({card,coverImage}) => {
  return (
    <div className="card" >
    <div>
      <img className="front" src={card.src} alt="card front" />
      <img className="back" src={coverImage} alt="card back" />
    </div>
  </div>
  )
}

export default SingleCard
