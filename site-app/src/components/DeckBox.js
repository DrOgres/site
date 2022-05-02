
import CardContainer from "./CardContainer";

/**
 * @description The containing component for all the project cards in the #work section of the site.
 * 
 * Cards are created in the CardContainer.js file. this is the wrapper for placing them in the app
 * 
 */

const DeckBox = () =>{
  
        return (
            <div className="deck-box content flex-row wrap gap">
            <CardContainer />
            </div>
        );
}


export default DeckBox;