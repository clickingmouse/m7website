import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ViaBusCard from "./ViaBusCard";
import ViaTrainCard from "./ViaTrainCard";
const FromAirport2 = () => {
  return (
    <div>
      From Airport 2
      <ViaBusCard />
      <ViaTrainCard />
    </div>
  );
};

export default FromAirport2;
