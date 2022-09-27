import React from "react";


const Card = ({name, url}) => {
    return (
    <div className="card">
        <p> {name} </p>
        <img src={url} alt="" ></img>
    </div>
  )

};

export default Card;