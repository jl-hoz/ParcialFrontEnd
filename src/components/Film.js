import React from "react";
import "./style.css";

function Film(props){
    const film = props.film;
    return (
        <div className="Film" onClick={() => props.handler(film.episode_id)}>
            <img src={film.image}/>
            <h1>{film.title}</h1>
            <p>Episode: {film.episode_id}</p>
        </div>
    );
}

export default Film;