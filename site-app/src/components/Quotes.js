import { useState, useEffect } from "react";
import sanityClient from "../client";

const Quotes = () => {
  const [quoteList, setQuoteList] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "quote"]{ 
                Quote
            }`
      )
      .then((data) => setQuoteList(data))
      .catch(console.error);
  }, []);

  let cursor = true;
  const speed = 600;
  let blinkCursor;

  function startBlink() {
    if (!blinkCursor) {
      blinkCursor = setInterval(cursorBlink, speed);
    }
  }

  function cursorBlink() {
    if (cursor) {
      document.getElementById("cursor").style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById("cursor").style.opacity = 1;
      cursor = true;
    }
  }

  if (quoteList) {
    startBlink();
    let use = Math.round(Math.random() * (quoteList.length - 1));

    return (
      <>
        <div className="quote-text">
          {quoteList[use].Quote}
          <span className="cursor" id="cursor" style={{ opacity: 1 }}>
            _
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="quote-text">
        Didn't we start the fire?
        <span className="cursor" id="cursor" style={{ opacity: 1 }}>
          _
        </span>
      </div>
    </>
  );
};

export default Quotes;
