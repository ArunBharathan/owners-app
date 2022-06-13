import React from 'react'
import './style.scss';

interface Props {
    name: string;
}

export const GreetingsHeader = ({name}:Props) => {
  return (
    <div className='greetings-container' >
        <h1>Hi, {name}</h1>
        <button className='help-btn' >help</button>
    </div>
  )
}
