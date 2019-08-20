import React from "react";
import Container from "@material-ui/core/Container";
import Supermarket from "./Supermarket";
import parkNShopImg from "./internationalParkNShop.png";
const Groceries = () => {
  return (
    <div>
      <Container>
        <h1>Nearby Supermarkets</h1>
      </Container>

      <hr />
      <Container>
        <Supermarket image={parkNShopImg} title="International Park N Shop" />
      </Container>
    </div>
  );
};

export default Groceries;
