import { useParams } from "react-router-dom";
import { useState } from "react";
import pages from "../data/pages.json";
import PostList from "./PostList";


/**
 * @description Creates a blog page from a specific blog Id as provided by the link
 * 
 * This function component should be invoked by using the Route path and useParams() 
 * fuction of React Router for example:
 * 
 * <Route
 *    path="pages/:Id"
 *    element = {<Case />}
 *  />
 * 
 * if no path is sent an index of all case posts will be displayed instead.
 * 
 * Filtering is done to prevent standard Blog Posts from showing here those are to be 
 * rendered on the main page and a separate blogs page.
 * 
 * @returns A page template for a Case Study blog page
 * 
 * 
 */

const Case = () => {

    let params = useParams();
    // eslint-disable-next-line
    const [cases, setCases] = useState(pages.posts);


    return (
        <div className="content" data-id={params.id}>
            <section className="case autocenter" id="home">
                <PostList cases={cases} params={params}/>
            </section>
        </div>
    )


};

export default Case;
