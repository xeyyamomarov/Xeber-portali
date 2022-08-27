import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { MainContext, useContext } from "../Context";
import { useEffect, useState } from "react";

export const SportItem = () => {
  const { id } = useParams();
  const { sports } = useContext(MainContext);
  const [sportItem, setSportItem] = useState([]);

  useEffect(() => {
    setSportItem(sports);
  }, [sports]);
  const navigate = useNavigate();
  const sportFilter = sportItem.filter((sport) => sport.id === id);
  if (sportFilter.lenght) {
    return (
      <div>
        <div className="main-item">
          {sportFilter.map((sport) => {
            return (
              <div key={sport.id} className="card-item">
                <div className="img-item">
                  <img src={sport.imageUrl} alt="/" />
                  <div className="footer-item">
                    <div className="icon">
                      <BsClock />
                      <span>{sport.date}</span>
                    </div>
                    <div className="icon">
                      <BsFillPersonFill />
                      <span>{sport.author}</span>
                    </div>
                  </div>
                </div>
                <div className="content-item1">
                  <h1>{sport.title}</h1>
                  <p>{sport.content}</p>
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
              {sports?.slice(0, 3).map((sport) => {
                return (
                  <div
                    onClick={() => navigate(`/sports/${sport.id}`)}
                    key={sport.id}
                    className="similar-card"
                  >
                    <div className="similar-content">
                      <h1>{sport.title}</h1>
                    </div>
                    <div className="footer-similar">
                      <div className="icon">
                        <BsClock />
                        <span>{sport.date}</span>
                      </div>
                      <div className="icon">
                        <BsFillPersonFill />
                        <span>{sport.author}</span>
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
