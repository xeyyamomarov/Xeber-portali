import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { NavLink ,Routes,Route} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Business,Sports,World,Technology,Entertainment,Science } from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://inshorts.deta.dev/news?category=science")
      .then((res) => res.data)
      .then((datas) => {
        const { data } = datas;
        setCards(data);
      });
  }, []);

  const activeLink=({isActive})=>{
    return{
      color:isActive? "blue":"black",

    }
  }
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
                <NavLink to="/" style={activeLink}>All</NavLink>
              </li>
              <li>
                <NavLink to="/Business"  style={activeLink}>Business</NavLink>
              </li>
              <li>
                <NavLink to="/Sports" style={activeLink}>Sports</NavLink>
              </li>
              <li>
                <NavLink to="/World" style={activeLink}>World</NavLink>
              </li>
              <li>
                <NavLink to="/Technology" style={activeLink}>Technology</NavLink>
              </li>
              <li>
                <NavLink to="/Entertainment" style={activeLink}>Entertainment</NavLink>
              </li>
              <li>
                <NavLink to="/Science" style={activeLink}>Science</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
       <Routes>
        <Route path="/" element={<Cards cards={cards}/>}/>
      <Route path="/business" element={<Business cards={cards}/>} />
      <Route path="/sports" element={<Sports cards={cards}/>} />
      <Route path="/world" element={<World cards={cards}/>} />
      <Route path="/technology" element={<Technology cards={cards}/>} />
      <Route path="/entertainment" element={<Entertainment cards={cards}/>} />
      <Route path="/science" element={<Science cards={cards}/>} />
      </Routes>
    </div>
  );
}

export default App;
