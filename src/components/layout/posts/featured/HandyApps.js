import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import myFlightAppIcon from "./HKG MyFlight.png";

import openRiceAppIcon from "../../../../images/posts/apps/openRice.png";
import wifiHKAppIcon from "../../../../images/posts/apps/wifiHK.jpeg";
import hkMyGuideAppIcon from "../../../../images/posts/apps/hkMyGuide.png";
import mtrAppIcon from "../../../../images/posts/apps/mtr.png";
import hkTaxi from "../../../../images/posts/apps/hkTaxi.png";
import gogoVanAppIcon from "../../../../images/posts/apps/gogoVan.png";
import lalaMoveAppIcon from "../../../../images/posts/apps/lalaMove.png";

import AppCard from "./AppCard";

const appDescription =
  "Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Quasi quas harum autem vel, cum nisi molestiae blanditiis corporis aliquam fugit laboriosam aliquid animi? Maiores impedit illo vitae quasi esse tempora.";
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
            <AppCard
              title="HKG My Flight App"
              appIcon={myFlightAppIcon}
              appDescription={appDescription}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <AppCard
              appIcon={myFlightAppIcon}
              appDescription={appDescription}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HandyApps;
