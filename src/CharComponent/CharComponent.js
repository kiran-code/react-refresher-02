import React from 'react';

const CharComponent = (props) => {
  const style = {
    display: 'inline-block',
    textAlign: 'center',
    font: 'inherit',
    border: '1px solid black',
    padding: '16px',
    margin: '16px',
    cursor: 'pointer'
  }

  return (
  <div style={style} onClick={props.click}>{props.character}</div>
  )
}

export default CharComponent;