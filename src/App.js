import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { NavLink, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Business,
  Sports,
  World,
  Technology,
  Entertainment,
  Science,
} from "./components/Card";
import { BusinessItem } from "./components/CardItem/BusinessItem";
import { NotFoundPage } from "./components/Card/NotFoundPage";
import { CardItem } from "./components/CardItem/CardItem";
import { SportItem } from "./components/CardItem/SportsItem";

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
                <NavLink to="/business" style={activeLink}>
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
      <Routes>
        <Route path="/*" element={<Cards cards={cards} />} />
        <Route path="/business/*" element={<Business />} />
        <Route path="/sports/*" element={<Sports />} />
        <Route path="/sports/:id/*" element={<SportItem/>} />
        <Route path="/world" element={<World />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/science" element={<Science />} />
        <Route path="/business/:id/*" element={<BusinessItem />} />
        <Route path="/all/:id/*" element={<CardItem cards={cards}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
