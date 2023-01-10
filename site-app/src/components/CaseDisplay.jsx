import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import sanityClient from "../client";
import ReactMarkdown from "react-markdown";
import { Link, NavLink } from "react-router-dom";

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
  const [cases, setCases] = useState(null);
  const useSlug = params.id;

  useEffect(() => {
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
        <section className="case auto-center grid-3-col gap" id="home">
          <div className="case-list sidebar">
            <div className="flex-row justify-start">
              <ul className="flex-col justify-start " id="navigation">
                <li className="sidebar-nav">
                  <NavLink to="/#" className="site-link  ul-link-l-to-r">
                    Home
                  </NavLink>
                </li>
                <li className="sidebar-nav">
                  <NavLink to="/#work" className="site-link  ul-link-l-to-r">
                    projects
                  </NavLink>
                </li>

                <li className="sidebar-nav">
                  <NavLink
                    to="/#tutorial"
                    className="site-link  ul-link-l-to-r"
                  >
                    tutorials
                  </NavLink>
                </li>

                <li className="sidebar-nav">
                  <NavLink to="/#about" className="site-link  ul-link-l-to-r">
                    about
                  </NavLink>
                </li>

                <li className="sidebar-nav">
                  <NavLink to="/#contact" className="site-link  ul-link-l-to-r">
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="list-group card">
              <h4>Other Case Studies</h4>
              <ul>
                {cases.map(
                  (data) =>
                    data.slug.current !== useSlug && (
                      <li key={data._id} value={data._id}>
                        <Link className="ul-link-l-to-r" to={data.slug.current}>
                          {data.title}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>

          {cases.map(
            (data) =>
              data.slug.current === useSlug && (
                <div className="overflow-scroll ">
                  <div
                    className="card case-body"
                    key={data._id}
                    value={data._id}
                  >
                    <h2>{data.title}</h2>
                    <ReactMarkdown children={data.text} />
                  </div>
                </div>
              )
          )}
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
