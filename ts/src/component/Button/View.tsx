import React from 'react';
import './style.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function View({ text, onClick }: ButtonProps) {
  return (
    <div className='button'>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default View;