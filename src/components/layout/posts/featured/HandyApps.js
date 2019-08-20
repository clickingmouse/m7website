import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import myFlightAppIcon from "./HKG MyFlight.png";

import openRiceAppIcon from "../../../../images/posts/apps/openRice.png";
import wifiHKAppIcon from "../../../../images/posts/apps/wifiHK.jpeg";
import hkMyGuideAppIcon from "../../../../images/posts/apps/hkMyGuide.png";
import mtrAppIcon from "../../../../images/posts/apps/mtr.png";
import hkTaxiAppIcon from "../../../../images/posts/apps/hkTaxi.png";
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
              appDescription={
                "An app by the Hong Kong international airport.  This app aiport related info including, floor plan, various transportation location, flight schedules... etc. "
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <AppCard
              title="Open Rice App"
              appIcon={openRiceAppIcon}
              appDescription={
                "Restaurants Yelp, seems to be popular in Asia, restaurants are categorized pretty impressively."
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppCard
              title="MTR App"
              appIcon={mtrAppIcon}
              appDescription={
                "App from HK's mtrc (metro train), good place to lookup mtr stations, travel time, schedules, etc "
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppCard
              title="HK My Guide App"
              appIcon={hkMyGuideAppIcon}
              appDescription={
                "An app by the Hong Kong Tourism board, lots of touristy useful information, history, self guided guides, tips, ...etc"
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppCard
              title="HK Taxi App"
              appIcon={hkTaxiAppIcon}
              appDescription={
                "like many places, paying an unlicensed vehicle for private personal commuting service is debatably technially illegal.  This app is an attempt to fill the 'void'.  Personally, during peak hours, app or no app, can't find a cab when you need one"
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppCard
              title="Go Go Van App"
              appIcon={gogoVanAppIcon}
              appDescription={
                "like its counterpart/competitor - lalamove, this app's main service is to provide help in the transportion of 'goods', obviously this app wont stand out if they do not allow courier to 'ride along'.  They reserve the right to deny service to anyone without a parcel"
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppCard
              title="Lala Move App"
              appIcon={lalaMoveAppIcon}
              appDescription={
                "like its counterpart/competitor - lalamove, this app's main service is to provide help in the transportion of 'goods', obviously this app wont stand out if they do not allow courier to 'ride along'.  They reserve the right to deny service to anyone without a parcel"
              }
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HandyApps;
