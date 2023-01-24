function tooglePlaylist(playlistBtn, iframe) {

  document.addEventListener("click", e => {
    if(e.target.matches(playlistBtn) || e.target.matches(`.fa-spotify`) ) {
      document.querySelector(iframe).classList.toggle("iframe-is-active");
    }
  })
}
export {tooglePlaylist};