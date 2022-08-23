import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { NavLink, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { MainContext } from "./components/Context";
import {
  Business,
  Sports,
  World,
  Technology,
  Entertainment,
  Science,
} from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://inshorts.deta.dev/news?category=all")
      .then((res) => res.data)
      .then((datas) => {
        const { data } = datas;
        setCards(data);
      });
  }, []);

  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };
  const datas = {
    cards,
    setCards,
  };
  return (
    <div className="App">
      <header className="header">
        <div className="news">
          <h1>News</h1>
        </div>
        <div className="title-bar">
          <nav>
            <ul>
              <li>
                <NavLink to="/" style={activeLink}>
                  All
                </NavLink>
              </li>
              <li>
                <NavLink to="/Business" style={activeLink}>
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink to="/Sports" style={activeLink}>
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink to="/World" style={activeLink}>
                  World
                </NavLink>
              </li>
              <li>
                <NavLink to="/Technology" style={activeLink}>
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink to="/Entertainment" style={activeLink}>
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink to="/Science" style={activeLink}>
                  Science
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <MainContext.Provider value={datas}>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/world" element={<World />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/science" element={<Science />} />
        </Routes>
      </MainContext.Provider>
    </div>
  );
}

export default App;
