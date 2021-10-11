import React from 'react'
import { useSelector } from 'react-redux'

const Modal = () => {

    const {isVisible} = useSelector(state => state.modal);
    const {name, age} = useSelector(state => state.user);

    return (
        <div>
            { isVisible && <div>
                <p>{name}</p>
                <p>{age} años</p>
                </div>}
        </div>
    )
}

export default Modal
