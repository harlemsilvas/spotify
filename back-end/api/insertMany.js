import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});
//console.log(newArtistArray);

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});
//console.log(newSongsArray);

// db.collection("songs").insertMany(newSongsArray);
const responseSongs = await db.collection("songs").insertMany(newSongsArray);
console.log(responseSongs);

const responseArtist = await db
  .collection("artists")
  .insertMany(newArtistArray);
console.log(responseArtist);
