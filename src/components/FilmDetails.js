import React from "react";
import Character from "./Character";
import Button from "./Button";

function FilmDetails(props){
    const film = props.film;

    const characters = film.characters.map(character => {
        return (
            <Character character={character} key={character.name}></Character>
        );
    });

    return (
        <div>
            <div className="FilmDetails">
                <div className="Close" onClick={props.closeHandler}><b>X</b></div>
                <img src={film.image}/>
                <h1>Title: {film.title}</h1>
                <p>Episode: {film.episode}</p>
                <p>Director: {film.director}</p>
                <p>Release: {film.release_date}</p>
                <p>Beginning: {film.opening_crawl}</p>

                <div className="ListOfCharacters">
                    {characters}
                </div>
            </div>
        </div>
        
    );
}

export default FilmDetails;