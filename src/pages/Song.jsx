//aula3 40minutos
import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  //const songId = useParams().id;
  const { id } = useParams();
  console.log("id ", id);

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];
  console.log(image);

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];
  console.log(artistObj);

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );
  console.log(songsArrayFromArtist);

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const random2Index = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;
  const randomId2FromArtist = songsArrayFromArtist[random2Index].id;
  console.log(randomIdFromArtist);
  console.log(randomId2FromArtist);
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da musica ${name}`} />
        </div>
      </div>
      <Player
        duration={duration}
        randomIdFromArtist={randomIdFromArtist}
        randomId2FromArtist={randomId2FromArtist}
      />
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
          />
        </Link>
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
