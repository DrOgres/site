import CardContainer from "./CardContainer";
import { useState, useEffect } from "react";
import sanityClient from "../client";
/**
 * @description The containing component for all the project cards in the #work section of the site.
 *
 * Cards are created in the CardContainer.js file. this is the wrapper for placing them in the app
 *
 */

//TODO toggle buttons on carosel to active/inactive based on current card i.e. if current card is 0, disable prev button

const DeckBox = ( props ) => {
  const [deck, setDeck] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {

    if(props.group === 'tutorials'){
      // set the deck to only tutorials

      sanityClient
      .fetch(
        `*[_type == "card" && cardType == 'tutorial'] | order(name) {

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

    } else if (props.group === 'projects'){
    sanityClient
      .fetch(
        `*[_type == "card" && cardType != 'tutorial'] | order(name) { 
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
          }
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
    console.log(cardIndex, 'group ', props.group);
    const visibleCard = document.getElementById(props.group+cardIndex);
    visibleCard.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className='deck-box gap-sm' id='card-list'>
        <CardContainer setDeck={setDeck} deck={deck} cardType={props.group} />
      </div>
      {deck && deck.length > 1 && (
      <div className='no-wrap carosel-control'>
       
        <button
        className='carosel-control-button'
          onClick={() => {
            handleScroll("down");
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='40px'
            height='40px' viewBox='0 0 512 512'>
            <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z' />
          </svg>
        </button>
        <button
          className='carosel-control-button'
          onClick={() => {
            handleScroll("up");
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40px'
            height='40px'
            viewBox='0 0 512 512'
          >
            <path d='M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z' />
          </svg>
        </button>
      </div>
      )}
    </>
  );
};

export default DeckBox;
