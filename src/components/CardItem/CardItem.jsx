import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CardItem = ({ cards }) => {
  const [cardsData, setCardsData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setCardsData(cards)
  }, [cards])

  console.log(cardsData);

  let x = cardsData.filter((card) => card.id === id)
console.log(x);
  if(x.length) {
    return (
      <div>
        <div className="main-item">
          {cardsData && cardsData.filter((card) => card.id === id)
            .map((card) => {
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
                  <div className="content-item">
                    <h1>{card.title}</h1>
                    <p>{card.content}</p>
                  </div>
                </div>
              );
            })}
            {cardsData && "salam"}
        </div>
        <div className="similar-news">
          <div className="a">
            <p>Similar news</p>
          </div>
  
          <div className="data">
            {cardsData && cardsData.slice(0, 3).map((card) => {
              return (
                <div key={card.id} className="similar-card">
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
    );
  } else {
    navigate("/")
  }
};
