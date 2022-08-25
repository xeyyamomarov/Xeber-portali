import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { BusinessItem } from "../CardItem/BusinessItem";
export const Business = () => {
  const [business, setBusiness] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://inshorts.deta.dev/news?category=business")
      .then((res) => res.data)
      .then((datas) => {
        const { data } = datas;
        setBusiness(data);
      });
  }, []);
  // console.log(business);
  return (
    <div className="all-cards">
      <div className="main">
        {business.slice(0, 6).map((card) => {
          return (
            <div
              onClick={() => {
                navigate(`/business/${card.id}`);
              }}
              className="card"
              key={card.id}
            >
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
        <Route path="/business/:id/*" element={<BusinessItem business={business}/>} />
      </Routes>
    </div>
  );
};
