import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { MainContext, useContext } from "../Context";
import { useEffect, useState } from "react";

export const ScienceItem = () => {
  const { id } = useParams();
  const { science } = useContext(MainContext);
  const navigate = useNavigate();
  const [scienceItem, setScienceItem] = useState([]);

  useEffect(() => {
    setScienceItem(science);
  }, [science]);
  const scienceFilter = scienceItem.filter((card) => card.id === id);
  if (scienceFilter.length) {
    return (
      <div>
        <div className="main-item">
          {scienceFilter.map((card) => {
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
              {science?.slice(0, 3).map((card) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/science/${card.id}`);
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
  } else {
    navigate("/");
  }
};
