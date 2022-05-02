import { useState } from "react";
import { Link } from "react-router-dom";
import cards from "../data/cards.json";



const CardContainer = () => {
    /**
     * @description Cycles through all cards described in ./data/cards.json
     * pulls the pertinent information into a template for a card on the 
     * main page of the site.
     * 
     * @returns dataItems - a const containing a template populated by the 
     * map of the cards.json data
     * 
     */
    // eslint-disable-next-line
    const [deck, setDeck] = useState(cards.posts)

    // a small snippet of code to set conditional apects 
    // of the desired template 
    deck.forEach(element => {
        const type = element.type;
        element.classes = "card flex-col glow-border " + type;
        
        element.head = <h2>{element.title}</h2>
        
        if (type !== "hero") {
            element.head = <h3>{element.title}</h3>
        }

        if (element.pageLink) {
            element.more = <Link to={element.pageLink}>more<i className="fa-solid fa-angles-right"></i></Link>;
        }

        element.gitLink="";
        if (element.git) {
            element.gitLink = <div className="card-link"><a href={element.git} target="_blank" rel="noreferrer" ><i className="fa-brands fa-github-square"></i></a></div>
        }

        element.siteLink="" 
        if (element.site) {
            element.siteLink = <div className="card-link"><a href={element.site} target="_blank" rel="noreferrer" ><i class="fa-regular fa-window-maximize"></i></a></div>
        }
       
    });
    
    return (

        deck.map((data) => (
            <div className={data.classes} key={data.id} value={data.id}>
                <img src={data.img} alt={data.alt} width={'100%'} />
                <div className="card-content flex-row space-between">
                    <div className="card-summary">

                        {data.head}
                        <p className="card-text">{data.text} {data.more}

                        </p>
                        <p className="tag-cloud flex-row wrap">{data.tags.map((tag) =>
                            <>
                                <span className="tag" key={tag.toString()} value={tag}>{tag}</span>
                            </>
                        )} </p>

                    </div>
                    <div className="card-sidebar flex-col">
                        {data.gitLink}
                        {data.siteLink}
                    </div>
                </div>
            </div>
        ))

    );
}

export default CardContainer;