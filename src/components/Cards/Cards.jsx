import "./style.css"
import {BsClock,BsFillPersonFill}from "react-icons/bs"
export const Cards = ({cards}) => {

  return (
    <div className="all-cards">
    <div className="cards">{cards.slice(0,6).map(card=>{
        return(
        <div className="card" key={card.id} >
            <img  className="img" src={card.imageUrl} alt="/"/>
            <h1 className="title">{card.title}</h1>
            <p className="content">{card.content}</p>
            <div className="footer">
                <div className="icon">
                <BsClock/>
            <span>{card.date}</span>
            </div>e
                <div className="icon">
            <BsFillPersonFill/>
            <span>{card.author}</span>
            </div>
            </div>
        </div>
        )
    })}
    </div>
    </div>
  );
};