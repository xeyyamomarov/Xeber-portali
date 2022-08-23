import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
// import { MainContext, useContext } from "../Context";
import { useEffect,useState} from "react";
import axios from "axios";
export const Entertainment = () => {
  const[entertainments,setEntertainments]=useState([])
  useEffect(() => {
    axios
      .get("https://inshorts.deta.dev/news?category=entertainment")
      .then((res) => res.data)
      .then((datas) => {
        const { data } = datas;
        setEntertainments(data);
      });
  }, []);
  return (
    <div className="all-cards">
    <div className="main">
      {entertainments.slice(0, 6).map((card) => {
        return (
          <div className="card" key={card.id}>
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
    </div>
  );
};
