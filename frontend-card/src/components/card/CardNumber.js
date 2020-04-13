import React, { useContext } from "react";
import { CardContext } from "../../CardContext"
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const CardNumber = () => {
  const { getCardType, card } = useContext(CardContext);
  return (
    <label
      htmlFor="cardNumber"
      className="card-item__number"
      ref={card.cardNumberRef}
    >
      {
        (getCardType() === "amex" ? card.amexCardMask : card.otherCardMask).split('').map((n, index) => (
            <div key={index} className={`card-item__numberItem` + (n.trim() === '' ? ` -active` : '')}>
                {card.cardNumber.length > index ? card.cardNumber[index] : n}
            </div>
          ))
      }
    </label >
  );
}

export default CardNumber;
