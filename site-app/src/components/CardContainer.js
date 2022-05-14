import { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import { PortableText } from '@portabletext/react'


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

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
   
    const [deck, setDeck] = useState(null)
  

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "card"]{ 
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
                name,
                page,
                projectRef,
                tags,
                text
            }`
            )
            .then((data) => setDeck(data))
            .catch(console.error);
    }, []);


    if (deck != null) {
        console.log(deck);

        return (

            deck.map((data, index) => (
                <>
                    <div className={"card flex-col glow-border " + data.cardType}
                        key={index} value={index}>

                        <img
                            src={urlFor(data.image).url()}
                            alt={data.title}

                        />

                        <div className={"card-content flex-row space-between"}>
                            <div className="card-summary">


                                <h2>{data.name}</h2>

                                <p className="tag-cloud flex-row wrap">{data.tags.map((tag) =>
                                    <>
                                        <span className="tag" key={tag.toString()} value={tag}>{tag}</span>
                                    </>
                                )} </p>

                                <p className="card-text">
                                    <PortableText
                                        value={data.text}
                                    />
                                </p>

                              
                                { data.page != null &&
                                       
                                        <div className="card-cta"><Link to={data.page}>more<i className="fa-solid fa-angles-right"></i></Link></div>
                                    }

                               
                            </div>
                            <div className="card-sidebar flex-col">
                               
                                
                                <div className="card-link">
                                {data.gitRef != null &&
                                 <a href={data.gitRef} target="_blank" rel="noreferrer" ><i className="fa-brands fa-github-square"></i></a>
                                
                                
                                }
                                </div>
                               
                                <div className="card-link">   
                                    { data.projectRef != null && <a href={data.projectRef} target="_blank" rel="noreferrer" ><i className="fa-solid fa-globe"></i></a> } 
                                </div>

                            </div>
                        </div>
                    </div>

                </>

            ))
        );
    };

    return (<>Data failed to Load</>);
}

export default CardContainer;