import { React, Component } from "react";
import cards from "./data/cards.json";

class CardContainer extends Component {
    
    /*
    we load all the cards in from the cards.json file, each entry has the information needed for 
    creating and displaying a card.

    deck is set as an array from the json file

    for each element in deck we build the variable compoents (css classes and header size)

    then we iterate over the deck as a map stored as dataItems

    our return is simply the dataItems map

    */

    render(){
       
        let deck = Object.values(cards);     
        deck.forEach(element => {
            const type = element.type;
            element.classes = "card flex-col glow-border " + type;
            if (type !== "hero") {
                element.head= <h3>{element.title}</h3>
            } else {
                element.head= <h2>{element.title}</h2> 
            }
                    
        });
        const dataItems = deck.map((data) =>
            
            <>
            <div className={data.classes} key={data.id} value={data.id}>
                <img src={data.img} alt={data.alt} width={'100%'} /> 
                <div className="card-content">
                        {data.head}
                        <p className="card-text">{data.text}</p>
                    </div>

            </div>
            </>
        );

        return(
            
           <>
           {dataItems}
           </>
           
        );
        

    }
}

export default CardContainer;