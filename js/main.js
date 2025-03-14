"use strict";

let playList = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC/DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" },
];
const button = document.getElementById("showSongs");

const showPlayList = () => {
  let playlistElement = document.getElementById("playlist");

  playlistElement.innerHTML = "";

  playList.forEach((track) => {
    console.log(track);
    let listItem = document.createElement("li");
    listItem.innerHTML = `<span class="author">${track.author}</span> - ${track.song}`;
    playlistElement.appendChild(listItem);
  });
};

button.addEventListener("click", showPlayList);

// document.getElementById("showSongs").addEventListener("click", function () {
//   let playlistElement = document.getElementById("playlist");

//   playlistElement.innerHTML = "";

//   playList.forEach((track) => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = `<span class="author">${track.author}</span> - ${track.song}`;
//     playlistElement.appendChild(listItem);
//   });
// });
