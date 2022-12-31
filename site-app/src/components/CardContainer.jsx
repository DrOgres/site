
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import * as reactRouterDom from "react-router-dom";
import { PortableText } from "@portabletext/react";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const CardContainer = (props) => {
  /**
   * @description Cycles through all cards described in the sanity database
   * pulls the pertinent information into a template for a card on the
   * main page of the site.
   * 
   *
   * @returns dataItems - a const containing a template populated by the
   * map of the cards.json data
   *
   */



  // const [deck, setDeck] = useState(null);

  if (props.deck != null) {
    return props.deck.map((data, index) => (
        <div
          className={"card flex-col flex-no-shrink" + ' ' + data.cardType}
          key={data._id+ data.name + index}
          value={index}
          id={index}
        >
          <img src={urlFor(data.image).url()} alt={data.title} />
          <div className={"card-content flex-row space-between"}>
            <div className="card-summary">
              <h2 className="card-title" >
                {data.name}
                </h2>

              <p className="tag-cloud flex-row wrap">
                {data.tags.map((tag) => (
                    <span
                      className="tag"
                      key={data._id + tag}
                      value={data._id + tag}
                    >
                      {tag}
                    </span>
                ))}{" "}
              </p>

              <div className="card-text short-block">
                <PortableText value={data.text} />
              </div>

              {data.page != null && (
                <div className="card-cta raise">
                  <reactRouterDom.Link to={"pages/" + data.page}>
                    more<i className="fa-solid fa-angles-right"></i>
                  </reactRouterDom.Link>
                </div>
              )}
            </div>
            <div className="card-sidebar flex-col">
              <div className="card-link raise">
                {data.gitRef != null && (
                  <a href={data.gitRef} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github-square"></i>
                  </a>
                )}
              </div>

              <div className="card-link raise">
                {data.projectRef != null && (
                  <a href={data.projectRef} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      
    ));
  }

  return <>Data failed to Load</>;
};

export default CardContainer;
