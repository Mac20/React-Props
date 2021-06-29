import React from "react";
import contacts from "../contacts";

function Card(props) {
  return (
    <div class="card">
      <div class="top">
        <h2 class="name">{props.name}</h2>
        <img class="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div class="bottom">
        <p class="info">{props.tel}</p>
        <p class="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
