import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { MainContext, useContext } from "../Context";
import { useEffect, useState } from "react";

export const EntertainmentItem = () => {
  const { id } = useParams();
  const { entertainments } = useContext(MainContext);
  const [entertainmentItem, setEntertainmentItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setEntertainmentItem(entertainments);
  }, [entertainments]);
  const entertainmentFilter = entertainmentItem.filter(
    (card) => card.id === id
  );
  if (entertainmentFilter.length) {
    return (
      <>
        <div className="main-item">
          {entertainmentFilter.map((entertainment) => {
            return (
              <div key={entertainment.id} className="card-item">
                <div className="img-item">
                  <img src={entertainment.imageUrl} alt="/" />
                  <div className="footer-item">
                    <div className="icon">
                      <BsClock />
                      <span>{entertainment.date}</span>
                    </div>
                    <div className="icon">
                      <BsFillPersonFill />
                      <span>{entertainment.author}</span>
                    </div>
                  </div>
                </div>
                <div className="content-item1">
                  <h1>{entertainment.title}</h1>
                  <p>{entertainment.content}</p>
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
              {entertainments?.slice(0, 3).map((entertainment) => {
                return (
                  <div
                    key={entertainment.id}
                    onClick={() => {
                      navigate(`/entertainment/${entertainments.id}`);
                    }}
                    className="similar-card"
                  >
                    <div className="similar-content">
                      <h1>{entertainment.title}</h1>
                    </div>
                    <div className="footer-similar">
                      <div className="icon">
                        <BsClock />
                        <span>{entertainment.date}</span>
                      </div>
                      <div className="icon">
                        <BsFillPersonFill />
                        <span>{entertainment.author}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    navigate("/");
  }
};
