import React from 'react';

const Card = ({ imageUrl, text}) => {
  return (

    <div className="card">
      <img className="card-image" src={imageUrl} />
        <h4 className="card-main-text">{text}</h4>
      </div>


  );
};

export default Card;