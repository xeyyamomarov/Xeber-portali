import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

export const SportItem = ({ sports }) => {
  const { id } = useParams();
  return (
    <div>
      <div className="main-item">
        {sports
          .filter((sport) => sport.id === id)
          ?.map((sport) => {
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
                <div className="content-item">
                  <h1>{sport.title}</h1>
                  <p>{sport.content}</p>
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
          {sports?.slice(0, 3).map((sport) => {
            return (
              <div key={sport.id} className="similar-card">
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
  );
};
