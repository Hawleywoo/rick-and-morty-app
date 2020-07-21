import React from 'react'

function CharacterCard(props){

    const handleClick = () => {
        console.log(props.character)
        props.clickHandler(props.character)
    }

    return (
        <div className='character-card' onClick={handleClick}>
            <img src={props.character.image} alt={props.character.name}/>
            <h2>{props.character.name}</h2>
            <p>Species {props.character.species}</p>
            <p>Status {props.character.status}</p>

        </div>
    )
}

export default CharacterCard;