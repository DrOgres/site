import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Create from "./components/Create";
import CaseDisplay from "./components/CaseDisplay";
import AnchorScroller from "./components/AnchorScroller.tsx";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import ScrollOut from "scroll-out";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  Splitting();
  ScrollOut({
    targets: "[data-splitting]",
  });
  return (
    
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container flex-col">
          <AnchorScroller>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/create" element={<Create />} />
              <Route path="pages" element={<CaseDisplay />}>
                <Route path=":id" element={<CaseDisplay />} />
              </Route>
            </Routes>
          </AnchorScroller>
        </div>
        <Footer />
      </div>
      <span className="cursor" id="cursor" style={{ opacity: 0 }}></span>
    </BrowserRouter>
  );
}

export default App;
