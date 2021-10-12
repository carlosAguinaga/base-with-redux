import { types } from "../types/types";

const initialState = {
    name: ""
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pokemonName:
      return {
          name: action.payload
      };

    default:
      return state;
  }
};
