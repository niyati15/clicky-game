import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => {
    return props.clicked(props.id);
  }}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>

  </div>
);

export default FriendCard;
