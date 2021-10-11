import { types } from "../types/types";

const initialState = {
  name: "",
  ege: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userInfo:
      return {
        name: action.payload.name,
        age: action.payload.age
      };

    default:
      return state;
  }
};
