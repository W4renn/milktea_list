import React from 'react';
import './MilkteaList.css';

function MilkteaList(props) {
  return (
    <div className='card'>
      <h4>{props.title}</h4>
      <img src={props.imgURL} alt="Milktea Image" />
      <p>Product Description: {props.description}</p>
      <p>Price: {props.price}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default MilkteaList;
