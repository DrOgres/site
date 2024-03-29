import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import CaseDisplay from "./components/CaseDisplay.tsx";
import AnchorScroller from "./components/AnchorScroller.tsx";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [scrollY, setScrollY] = useState(0);

  return (
    <BrowserRouter>
      <div
        className='App scroll-y'
        id='article'
        // on scroll get the y position of the scroll and pass it to the state
        onScroll={(e) => {
          setScrollY(e.target.scrollTop);
        }}
      >
        <Header scrollPos={scrollY} />
        <article className='container flex-col auto-center center'>
          <AnchorScroller>
            <Routes>
              <Route path='/' element={<Content />} scrollPos={scrollY} />
              <Route path='pages' element={<CaseDisplay />}>
                <Route path=':id' element={<CaseDisplay />} />
              </Route>
            </Routes>
          </AnchorScroller>
          <Footer />
        </article>
      </div>
    </BrowserRouter>
  );
}

export default App;
