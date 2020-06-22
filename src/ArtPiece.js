import React from 'react';
import './App.css';

const ArtPiece = (props) => {
  
  return (
    <div key={props.imageId}>
      <h2>{props.imageTitle}</h2>
      <img src={props.imageSource} alt={props.imageInfo}/>
    </div>
  )

}





export default ArtPiece;