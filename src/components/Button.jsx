import React from 'react'
import { useDispatch } from 'react-redux'
import {showModal} from '../actions/modal.action.js'


const Button = () => {

    const dispatch = useDispatch()

  const handleModal = ()=> {
    dispatch(showModal())
  }
    return (
        <button onClick={handleModal}>Toggle modal</button>
    )
}

export default Button
