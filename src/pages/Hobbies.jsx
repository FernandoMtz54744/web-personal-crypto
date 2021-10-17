import React from 'react'

export default function Hobbies() {
    return (
      <div className="hobbie-page">
        <div className="hobbies-container">
          <h1>Hobbies</h1>
          <div className="hobbies">
            <div className="hobbie piano">
              <h2>Tocar el Piano</h2>
            </div>
            <div className="hobbie pelicula">
              <h2>Ver películas</h2>
            </div>
            <div className="hobbie musica">
              <h2>Escuchar música</h2>
            </div>
            <div className="hobbie cancion">
            <iframe className="cancion" src="https://www.youtube.com/embed/kWUV5-frRU4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className="Go-down3">
            <i className="fas fa-caret-up"></i>
        </div>
      </div>
    );
}
