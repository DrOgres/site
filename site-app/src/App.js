
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Create from './components/Create';
import Case from './components/Case';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container flex-col">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/create" element={<Create />} />
            <Route path="pages" element={<Case />}>
            <Route path=":id" element = {<Case />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
