import React from 'react';
import './App.css';
import Favorite from './Favorite'
import Characters from './Characters'

const characterUrl = 'https://rickandmortyapi.com/api/character'

class App extends React.Component {
  state = {
    characters: [],
    favoriteCharacter: []
  }

  componentDidMount(){
    fetch(characterUrl)
      .then(response => response.json())
      .then( ({ results }) => this.setState({characters: results}))
  }

  getCharacter = (character) => {
    this.setState({
      favoriteCharacter: [...this.state.favoriteCharacter, character]
    })
  }

  clickHandler = (character) => {
      this.state.favoriteCharacter.includes(character) ?  this.removeCharacter(character) : this.getCharacter(character);
  }


  removeCharacter = (characterRemoving) => {
    let newFavorite = this.state.favoriteCharacter.filter(character => {
      return character.id !== characterRemoving.id
    })


    this.setState({
      favoriteCharacter: newFavorite
    })
    return newFavorite
  }

  render(){

    const { characters , favoriteCharacter} = this.state

    return (
      <div className="App">
        <h1>Rick and Morty</h1>
        <Favorite character={favoriteCharacter} clickHandler={this.clickHandler}/>
        <Characters characters={characters} clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
