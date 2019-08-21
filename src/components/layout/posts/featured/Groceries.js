import React from "react";
import Container from "@material-ui/core/Container";
import Supermarket from "./Supermarket";

import parkNShopImg from "./internationalParkNShop.png";
import wellcomeImg from "../../../../images/posts/supermarkets/wellcome.png";
import vanguardImg from "../../../../images/posts/supermarkets/vanguard.png";
const parknshopGeoCoords = { lat: 22.298201, lng: 114.172474 };
const wellcomeGeoCoords = { lat: 22.3009595, lng: 114.1742452 };
const vanguardGeoCoords = { lat: 22.298507, lng: 114.174177 };

const Groceries = () => {
  return (
    <div>
      <Container>
        <h1>Nearby Supermarkets</h1>
      </Container>

      <hr />
      <Container>
        <Supermarket
          image={parkNShopImg}
          title="International Park N Shop"
          coords={parknshopGeoCoords}
          id="parknshop-map"
        />
        <Supermarket
          image={wellcomeImg}
          title="Wellcome Supermarket"
          coords={wellcomeGeoCoords}
          id="wellcome-map"
        />
        <Supermarket
          image={vanguardImg}
          title="Vanguard"
          coords={vanguardGeoCoords}
          id="vanguard-map"
        />
      </Container>
    </div>
  );
};

export default Groceries;
