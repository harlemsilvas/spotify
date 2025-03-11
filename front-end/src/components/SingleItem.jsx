import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem_Artista ${name}`}
          />
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-plat" /> */}
          <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
        </div>
      </div>
      <div className="single-item__texts">
        <p className="single-item__title">{name}</p>
        <p className="single-item__type">
          {artist ?? "Artista"}
          {/* 3 formas de executar a validação */}
          {/* {artist ? artist : "Artista"} */}
          {/* {artist === undefined ? "Artista" : artist} */}
        </p>
      </div>
    </Link>
  );
};

export default SingleItem;
