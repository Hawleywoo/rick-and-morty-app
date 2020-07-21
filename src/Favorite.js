import React from 'react'
import CharacterCard from './CharacterCard'

function Favorite(props){
    const $favoritesDisplay = props.character.map(eachCharacter =>{
        
        return <CharacterCard 
            key={eachCharacter.id}
            character={eachCharacter}
            clickHandler={props.clickHandler} />
    })
    
    return(
        <div className="favorite-character">
            <h2>Favorite</h2>
            {$favoritesDisplay}
        </div>
    )
}

export default Favorite;