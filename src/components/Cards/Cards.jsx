import "./style.css";
import { BsClock, BsFillPersonFill } from "react-icons/bs";
import { useNavigate} from "react-router-dom";
import { MainContext,useContext } from "../Context";
export const Cards = () => {
  const navigate=useNavigate()
  const{cards}=useContext(MainContext)

  return (
    <div className="all-cards">
      <div className="cards">
        {cards?.slice(0, 6).map((card) => {
          return (
            <div className="card" key={card.id}
            onClick={()=>{
              navigate(`/all/${card.id}`)
            }}
            >
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
