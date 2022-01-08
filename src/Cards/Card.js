import React from "react";

const getText = text => {
  if (text.length > 500 ){
    return text.substring(0, 500) + "...";
  }
  return text;
};

const Card = ({title, description, date, url, id}) => (
    <div className="card">
        <div className="card-image">
            <img src={url} alt={title}/>
        </div>
        <div className="card-footer">
            <p>{date}</p>
        </div>
        <div className="card-content">
            <h3>{title}</h3>
            <p className="card-content-p">{getText(description)}</p>
        </div>
    </div>
)

export default Card;