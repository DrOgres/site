import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import sanityClient from "../client";
import ReactMarkdown from "react-markdown";

/**
 * @description Creates a page in the Case Study format from a specific Id as provided by the link
 *
 * This function component should be invoked by using the Route path and useParams()
 * fuction of React Router for example:
 *
 * <Route
 *    path="pages/:Id"
 *    element = {<Case />}
 *  />
 *
 * if no id is sent an list of all case posts will be displayed instead.
 * In the case of a full list filtering is done to prevent standard Blog Posts from showing here.
 *
 * TODO test ID sent if out of range default to full list
 *
 * @returns A page template for a Case Study blog page
 *
 *
 */

const CaseDisplay = () => {
  let params = useParams();
  // const slug = "vaesen-system-for-foundry-vtt";
  // eslint-disable-next-line
  const [cases, setCases] = useState(null);
  const useSlug = params.id;

  useEffect(() => {
    //This is a dirty little hack that
    // stops the set interval on the cursor to prevent it
    //from getting new timers when we navigate back to root
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }

    sanityClient
      .fetch(
        `*[_type == "case"]{ 
            _id,
            title,
            text,
            slug   
        }`
      )
      .then((data) => setCases(data))
      .catch(console.error);
  }, []);

  if (cases) {
    return (
      <div className="case-content">
        <section className="case auto-center flex-row" id="home">
          {cases.map((data) => (
            <div>
              {data.slug.current === useSlug && (
                <div className="case-body" key={data._id} value={data._id}>
                  <h2>{data.title}</h2>
                  <ReactMarkdown children={data.text} />
                </div>
              )}
            </div>
          ))}
          <div className="case-list sidebar">
            <h4>Other Case Studies</h4>
            <ul>
              {cases.map((data) => (
                <>{data.slug.current !== useSlug && <li>{data.title}</li>}</>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <div className="content" data-id={params.id}>
        <section className="case auto-center" id="home">
          <p>Data Failed to Load</p>
        </section>
      </div>
    </>
  );
};

export default CaseDisplay;
