import React from 'react'

export default function Salut(props) {
    let element ;
    console.log(typeof props.curs);
    if( props.curs !== undefined){
         element =<div>Salut {props.nume} si sunt inscri la cursul de {props.curs}</div>;
    }
    else{
         element =<div>Salut {props.nume}</div>;
    }
  return (
    
    element
  )
}
