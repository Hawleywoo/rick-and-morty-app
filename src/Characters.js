import React from 'react'
import CharacterCard from './CharacterCard'

export default function Characters(props){
    

    const displayCharacters = () => {
        return props.characters.map(character => {
            
            return (
                <CharacterCard 
                    key={character.id} 
                    character={character} 
                    clickHandler={props.clickHandler}
                />
            )
        })
    }

    return(
        <section className="chracters">
            { displayCharacters() }
        </section>
    )

}