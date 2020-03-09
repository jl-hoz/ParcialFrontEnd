import React from "react";

function Character(props){

    const character = props.character;

    return (
        <div className="Character">
            <img src={character.image}/>
            <p>Name: <b>{character.name}</b></p>
            <p>Actor: {character.actor}</p>
        </div>
    );
}

export default Character;