import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useEffect,useState} from "react";
import axios from "axios";
import { Route,Routes } from "react-router-dom";
import { SportItem } from "../CardItem/SportsItem";
import { useNavigate } from "react-router-dom";
export const Sports = () => {
  const[sports,setSports]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("https://inshorts.deta.dev/news?category=sports")
      .then((res) => res.data)
      .then((datas) => {
        const { data } = datas;
        setSports(data);
      });
  }, []);
  return (
    <div className="all-cards">
    <div className="main">
      {sports.slice(0, 6).map((card) => {
        return (
          <div className="card"   onClick={()=>{
            navigate(`/sports/${card.id}`)
          }} key={card.id}>
          <img className="img" src={card.imageUrl} alt="/" />
          <h1 className="title">{card.title}</h1>
          <p className="content">{card.content}</p>
          <div className="footer">
            <div className="icon">
              <BsClock />
              <span>{card.date}</span>
            </div>
            <div className="icon">
              <BsFillPersonFill />
              <span>{card.author}</span>
            </div>
          </div>
        </div>
        );
      })}
    </div>
    <Routes>
        <Route path="/sports/:id/*" element={<SportItem sports={sports}/>} />
      </Routes>
    </div>
  );
};
