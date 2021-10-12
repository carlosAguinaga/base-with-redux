import React from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonInfo } from '../actions/pokemon.action'



const Button = () => {

    const dispatch = useDispatch()

  const handleShowPokemon = ()=> {
    dispatch(getPokemonInfo())
  }
    return (
        <button onClick={handleShowPokemon}>Pokemon</button>
    )
}

export default Button
