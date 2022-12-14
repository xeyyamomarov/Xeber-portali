import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { MainContext, useContext } from "../Context";
import { useNavigate } from "react-router-dom";
export const World = () => {
  const {world}=useContext(MainContext)
  const navigate=useNavigate()
  return (
    <div className="all-cards">
      <div className="main">
        {world.slice(0, 6).map((card) => {
          return (
            <div 
            onClick={()=>{
              navigate(`/world/${card.id}`)
            }}
            className="card" key={card.id}>
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
    </div>
  );
};
