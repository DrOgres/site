import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import pages from "../data/pages.json";
import Post from "./Post";


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
    // eslint-disable-next-line
    const [cases, setCases] = useState(pages.posts); 

    const handleDelete = (id)=>{
        console.log("delte this post id:" + id +" -- hide this for non-logged user.")

    }

    useEffect(()=>{
        console.log('ran useEffect');

    })

    if(params.id !== undefined){
       
        return(
            
        <>
        <div className="content" data-id={params.id}>
            <section className="case auto-center" id="home">
            {/* eslint-disable-next-line */}
            <Post cases={cases.filter((post)=> post.id == params.id)} params={params} handleDelete={handleDelete}/>
            </section>
        </div>
        </>
        );
        }
     
    return (
        <>
            <div className="content" data-id={params.id}>
            <section className="case autocenter" id="home">
                <Post cases={cases.filter((post) => post.type === "case" )} params={params}/>
            </section>
        </div>
        </>
    )


};

export default CaseDisplay;
