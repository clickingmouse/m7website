import React from "react";

const SupermarketCard = props => {
  return (
    <div>
      <h5>{props.title}</h5> <hr />
      Address : {props.address}
      <br />- {props.summary}
    </div>
  );
};

export default SupermarketCard;
