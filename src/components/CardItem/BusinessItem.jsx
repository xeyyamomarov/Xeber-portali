import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { MainContext, useContext } from "../Context";
import { useEffect, useState } from "react";

export const BusinessItem = () => {
  const { id } = useParams();
  const { business } = useContext(MainContext);
  const [businessItem, setBusinessItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBusinessItem(business);
  }, [business]);
  const dataFilter = businessItem.filter((card) => card.id === id);
  if (dataFilter.length) {
    return (
      <>
        <div className="main-item">
          {dataFilter.map((card) => {
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
              {business?.slice(0, 3).map((business) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/business/${business.id}`);
                    }}
                    key={business.id}
                    className="similar-card"
                  >
                    <div className="similar-content">
                      <h1>{business.title}</h1>
                    </div>
                    <div className="footer-similar">
                      <div className="icon">
                        <BsClock />
                        <span>{business.date}</span>
                      </div>
                      <div className="icon">
                        <BsFillPersonFill />
                        <span>{business.author}</span>
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
