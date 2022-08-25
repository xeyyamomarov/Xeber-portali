import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

export const CardItem = ({ cards }) => {
  const { id } = useParams();
  return (
    <div>
      <div className="main-item">
        {cards?.filter((card) => card.id === id)
          ?.map((card) => {
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
      </div>
      <div className="similar-news">
        <div className="a">
        <p>Similar news</p>
        </div>

        <div className="data">
          {cards?.slice(0, 3).map((card) => {
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
};
