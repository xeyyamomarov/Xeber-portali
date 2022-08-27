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
import { BusinessItem } from "./components/CardItem/BusinessItem";
import { NotFoundPage } from "./components/Card/NotFoundPage";
import { CardItem } from "./components/CardItem/CardItem";
import { SportItem } from "./components/CardItem/SportsItem";
import { WorldItem } from "./components/CardItem/WorldItem";
import { TechnologyItem } from "./components/CardItem/TechnologyItem";
import { EntertainmentItem } from "./components/CardItem/EntertainmentItem";
import { ScienceItem } from "./components/CardItem/ScienceItem";

function App() {
  const [cards, setCards] = useState([]);
  const [cardItem, setCardItem] = useState([]);
  const [business, setBusiness] = useState([]);
  const [sports, setSports] = useState([]);
  const [world, setWorld] = useState([]);
  const [science, setScience] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [entertainments, setEntertainments] = useState([]);
  useEffect(() => {
    axios
      .get("https://inshorts.deta.dev/news?category=all")
      .then((res) => res.data)
      .then((datas) => {
        const { data } = datas;
        setCards(data);
      });

    axios
      .get("https://inshorts.deta.dev/news?category=business")
      .then((res) => res.data)
      .then((datas) => {
        const { data } = datas;
        setBusiness(data);
      });
  }, []);
  axios
    .get("https://inshorts.deta.dev/news?category=sports")
    .then((res) => res.data)
    .then((datas) => {
      const { data } = datas;
      setSports(data);
    });
  axios
    .get("https://inshorts.deta.dev/news?category=world")
    .then((res) => res.data)
    .then((datas) => {
      const { data } = datas;
      setWorld(data);
    });
  axios
    .get("https://inshorts.deta.dev/news?category=science")
    .then((res) => res.data)
    .then((datas) => {
      const { data } = datas;
      setScience(data);
    });
  axios
    .get("https://inshorts.deta.dev/news?category=technology")
    .then((res) => res.data)
    .then((datas) => {
      const { data } = datas;
      setTechnology(data);
    });
  axios
    .get("https://inshorts.deta.dev/news?category=entertainment")
    .then((res) => res.data)
    .then((datas) => {
      const { data } = datas;
      setEntertainments(data);
    });

  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };
  const cardData = {
    cards,
    business,
    sports,
    world,
    science,
    technology,
    entertainments,
    cardItem,
    setCardItem,
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
      <MainContext.Provider value={cardData}>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/all/:id" element={<CardItem />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/:id/*" element={<BusinessItem />} />
          <Route path="/sports/*" element={<Sports />} />
          <Route path="/sports/:id" element={<SportItem />} />
          <Route path="/world" element={<World />} />
          <Route path="/world/:id" element={<WorldItem />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/:id" element={<TechnologyItem />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/entertainment/:id" element={<EntertainmentItem />} />
          <Route path="/science" element={<Science />} />
          <Route path="/science/:id" element={<ScienceItem />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainContext.Provider>
    </div>
  );
}

export default App;
