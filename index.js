import hamburgerMenu from "./js/menu.js";
import { tooglePlaylist } from "./js/playlist.js"

const d = document;


d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  tooglePlaylist(".playlist-btn", ".iframe-container");
})

