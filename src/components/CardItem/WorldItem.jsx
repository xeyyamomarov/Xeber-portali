import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { MainContext, useContext } from "../Context";
import { useEffect, useState } from "react";

export const WorldItem = () => {
  const { id } = useParams();
  const { world } = useContext(MainContext);
  const [worldItem, setWorldItem] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    setWorldItem(world)
  },[world])

  const worldFilter = worldItem.filter((card) => card.id === id);
  if(worldFilter.length){
  return (
    <div>
      <div className="main-item">
        {worldFilter.map((card) => {
          return (
            <div key={card.id} className="card-item">
              <div className="img-item">
                <img src={card.imageUrl} alt="/" />
                <div className="footer-item">
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
              <div className="content-item1">
                <h1>{card.title}</h1>
                <p>{card.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="main-similar">
        <div className="similar-news">
          <div id="news">
            <p>Similar news</p>
          </div>

          <div className="data">
            {world?.slice(0, 3).map((card) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/world/${card.id}`);
                  }}
                  key={card.id}
                  className="similar-card"
                >
                  <div className="similar-content">
                    <h1>{card.title}</h1>
                  </div>
                  <div className="footer-similar">
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
      </div>
    </div>
  );
          }
          else{
            navigate("/")
          }
};
