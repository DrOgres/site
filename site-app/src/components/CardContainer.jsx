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
     const type = props.cardType;
    return props.deck.map((data, index) => {
      let  contentClass = "";
      if(data.gitRef != null || data.projectRef !=null){ contentClass = "card-content"} else { contentClass = "card-condensed"};
      return(
      <div
        className={"card flex-col " + data.cardType}
        key={data._id + data.name + index}
        value={index}
        id={type+index}
      >
        <div className='image-container'>
          <img src={urlFor(data.image).url()} alt={data.title} />
        </div>
        <div className={contentClass} >
          <div className='card-summary'>
            <h2 className='card-title'>{data.name}</h2>

            <p className='tag-cloud flex-row wrap'>
              {data.tags.map((tag) => (
                <span
                  className='tag'
                  key={data._id + tag}
                  value={data._id + tag}
                >
                  {tag}
                </span>
              ))}{" "}
            </p>

            <div className='card-text'>
              <PortableText value={data.text} />
            </div>

            {data.page != null && (
              <div className='card-cta raise'>
                <reactRouterDom.Link to={"pages/" + data.page}>
                  more<i className='fa-solid fa-angles-right'></i>
                </reactRouterDom.Link>
              </div>
            )}
          </div>
          { data.gitRef != null || data.projectRef != null ? (
          <div className='card-sidebar'>
            <div className='card-link raise'>
              {data.gitRef != null && (
                <a href={data.gitRef} target='_blank' rel='noreferrer'>
                  <i className='fa-brands fa-github-square'></i>
                </a>
              )}
            </div>

            <div className='card-link raise'>
              {data.projectRef != null && (
                <a href={data.projectRef} target='_blank' rel='noreferrer'>
                  <i className='fa-regular fa-window-maximize'></i>
                </a>
              )}
            </div>
          </div>
          ) : null}
        </div>
      </div>
    )});
  }

  return <>Data failed to Load</>;
};

export default CardContainer;
