import "./style.css";
import {BsClock,BsFillPersonFill}from "react-icons/bs"
export const  World= ({ cards }) => {
  return (
    <div className="main">
      {cards.slice(2, 3).map((card) => {
        return (
          <div className="card-item" key={card.id}>
            <div className="img-item">
              <img src={card.imageUrl} alt="/" />
              <div className="footer-item">
              <div className="icon">
                <BsClock/>
            <span>{card.date}</span>
            </div>
              <div className="icon">
            <BsFillPersonFill/>
            <span>{card.author}</span>
            </div>
            </div>
            </div>
            <div className="content-item" >
                <h1>{card.title}</h1>
                <p>{card.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
