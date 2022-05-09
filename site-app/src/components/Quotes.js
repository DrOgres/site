import { useState } from "react";
import quotes from "../data/quotes.json";






const Quotes = () => {
    // eslint-disable-next-line 
    const [list, setQuotes] = useState(quotes.quotes); 
  
    let length = list.length - 1;
    let use = Math.round(Math.random() * length);
    let cursor = true;
    const speed = 420;


    setInterval(() => {
        if (cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
        } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
        }
    }, speed);

    return (

        <>
            <div className="quote-text">{list[use]}
            <span className="cursor" id="cursor">_</span></div>
        </>
    )

}

export default Quotes;