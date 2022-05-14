import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Create from "./components/Create";
import CaseDisplay from "./components/CaseDisplay";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container flex-col">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/create" element={<Create />} />
            <Route path="pages" element={<CaseDisplay />}>
              <Route path=":id" element={<CaseDisplay />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
      <span className="cursor" id="cursor" style={{ opacity: 0 }}></span>
    </BrowserRouter>
  );
}

export default App;
