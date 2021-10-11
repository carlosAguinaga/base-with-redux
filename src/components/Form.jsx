import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {userInfo} from "../actions/user.actions";

const Form = () => {
  const [data, setData] = useState({ name: "", age: null });

  const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userInfo(data))
    }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Edad"
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <button>Guardar</button>
    </form>
  );
};

export default Form;
