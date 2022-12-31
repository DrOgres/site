import CardContainer from "./CardContainer";
import { useState, useEffect } from "react";
import sanityClient from "../client";
/**
 * @description The containing component for all the project cards in the #work section of the site.
 *
 * Cards are created in the CardContainer.js file. this is the wrapper for placing them in the app
 *
 */

const DeckBox = () => {
  const [deck, setDeck] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "card"] | order(name) { 
                name,
                _id,
                gitRef,
                image,
                cardType,
                logoImage{
                    asset ->{
                        _id,
                        url
                    },
                    altText
                },
                
                page,
                projectRef,
                tags,
                text
            }`
      )
      .then((data) => setDeck(data))
      .catch(console.error);
  }, []);


  function handleScroll(direction) {
    let cardIndex = currentCard;
    if (direction === "up") {
      if (currentCard < deck.length - 1) {
        cardIndex++;
        setCurrentCard(cardIndex);
      }
    } else if (direction === "down") {
      if (currentCard > 0) {
        cardIndex--;
        setCurrentCard(cardIndex);
      }

    }
    console.log(cardIndex);
    const visibleCard = document.getElementById(cardIndex);
    visibleCard.scrollIntoView({
      behavior: "smooth",
    });

  }

  return (
    <>
      <div className='deck-box scroll-snap-x gap-sm' id='card-list'>
        <CardContainer setDeck={setDeck} deck={deck} />
      </div>
      <div className='no-wrap carosel-control'>
        {currentCard} of {deck && deck.length -1}
        <button
          onClick={() => {
            handleScroll('down');
          }}
        >
          back
        </button>
        <button
          onClick={() => {       
            handleScroll('up');
          }}
        >
          forth
        </button>
      </div>
    </>
  );
};

export default DeckBox;
