import React from 'react';

const ValidationComponent = (props) => {

  let message = null;

  if(props.name !== null || props.name !== ''){
    message = null;
    if(props.name.length  <= 5){
      message = (
        <div>Text Too Short</div>
      )
    }else {
      message = (
        <div>Text long enough</div>
      )
    }
  }
  
  return (
    <div>
      <div>{props.name}</div>
      {message}
    </div>
  )
}

export default ValidationComponent;
