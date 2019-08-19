import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import AppCard from "./AppCard";
const HandyApps = () => {
  return (
    <div>
      <Container>
        <h3 style={{ textAlign: "center" }}>Handy Apps</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          eos non vitae maxime earum dolores alias quibusdam officiis sunt?
          Totam dolore hic delectus doloremque iusto exercitationem enim dicta
          praesentium illum.
        </p>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <AppCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HandyApps;
