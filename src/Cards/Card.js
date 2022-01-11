/**
 * creates a card with all the details of nasa image
 * created on: 2022-01-08
 * author: @manoj30075
 */

import React, {useState} from "react";
import like from "../assets/images/like.svg";
import dislike from "../assets/images/dislike.svg";
import share from "../assets/images/share.svg";
import dataService from "../data-service/data-service";
import constants from "../constants";

// returns substring if the string is longer than the limit 500 letters
const getText = text => {
  if (text.length > 500 ) {
    return text.substring(0, 500) + "...";
  }
  return text;
};

const Card = ({title, description, date, url, id, liked}) => {
    // state for like and dislike
    const [likedState, setLikedState] = useState(liked);
    return (
        <div className="card">
            <div className="card-image">
                <img src={url} alt={title}/>
            </div>
            <div className="card-date">
                <p>{date}</p>
                <img
                    className="share"
                    src={share}
                    alt="share"
                    onClick={() => {
                        navigator.clipboard.writeText(url).then(() => {
                            alert(constants.SHARABLE_LINK);
                        });
                    }}
                />
                <img
                    className="like-unlike"
                    src={likedState? like : dislike}
                    alt="like-unlike"
                    onClick={() => {
                        setLikedState(!likedState);
                        const nasaImages = dataService.getNasaImagesFromLocalStorage();
                        nasaImages[id].liked = !liked;
                        dataService.saveNasaImagesToLocalStorage(nasaImages);
                    }}
                />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p className="card-content-p">{getText(description)}</p>
            </div>
        </div>
    )
}

export default Card;