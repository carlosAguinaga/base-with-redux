import { types } from "../types/types";

export const getPokemonInfo = () => async (dispatch) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const { location_area_encounters } = await response.json();
  dispatch(getLocationArea(location_area_encounters))
};

export const getLocationArea = (url) => async (dispatch) => {
    const response = await fetch(url)
    const result = await response.json()
    dispatch(fillPokemonInfo(result[0].location_area))
};

export const fillPokemonInfo = (payload) => ({
  type: types.pokemonName,
  payload,
});
