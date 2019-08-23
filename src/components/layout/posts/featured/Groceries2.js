import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Supermarket from "./Supermarket";
import { makeStyles } from "@material-ui/core/styles";
import parkNShopImg from "./internationalParkNShop.png";
import wellcomeImg from "../../../../images/posts/supermarkets/wellcome.png";
import vanguardImg from "../../../../images/posts/supermarkets/vanguard.png";
import parknshopLogo from "../../../../images/posts/supermarkets/parknshop-logo.png";
import wellcomeLogo from "../../../../images/posts/supermarkets/wellcome-logo.jpg";
import vanguardLogo from "../../../../images/posts/supermarkets/vanguard-logo.png";

import SupermarketCard from "./SupermarketCard";
import SupermarketMap from "./SupermarketMap";
const parknshopGeoCoords = { lat: 22.298201, lng: 114.172474 };
const wellcomeGeoCoords = { lat: 22.3009595, lng: 114.1742452 };
const vanguardGeoCoords = { lat: 22.298507, lng: 114.174177 };
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexGrow: 1
  }
}));
const Groceries = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <h1>Nearby Supermarkets</h1>
      </Container>
      <hr />
      <Container>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                  <div style={{ height: "30vw" }}>
                    <SupermarketMap
                      id="supermarkets-map"
                      destinationcoords={wellcomeGeoCoords}
                      options={{
                        center: {
                          lat: 22.2995,
                          lng: 114.17228420963512
                        },
                        zoom: 17
                      }}
                      onMapLoad={map => {
                        var marker = new window.google.maps.Marker({
                          position: {
                            lat: 22.298606176308525,
                            lng: 114.17228420963512
                          },
                          map: map,
                          title: "Majestic House"
                        });
                        var parknshopMarker2 = new window.google.maps.Marker({
                          icon: {
                            url:
                              "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                          },
                          position: parknshopGeoCoords,
                          map: map,
                          title: "Park n'shop"
                        });

                        var wellcomMarker = new window.google.maps.Marker({
                          icon: {
                            url:
                              "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                          },
                          position: wellcomeGeoCoords,
                          map: map,
                          title: "Wellcome"
                        });

                        var vanguardMarker2 = new window.google.maps.Marker({
                          icon: {
                            url:
                              "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                          },
                          position: vanguardGeoCoords,
                          map: map,
                          title: "Vanguard !"
                        });
                      }}
                    />
                  </div>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                  <SupermarketCard
                    logo={wellcomeLogo}
                    title="Wellcome"
                    address="53-54 Kimberley Rd"
                    summary="24 hours!"
                  />
                </Paper>
                <br />
                <Paper className={classes.paper}>
                  <SupermarketCard
                    logo={vanguardLogo}
                    title="Vanguard"
                    address="4 Prat Ave"
                    summary="small 24 hours depot"
                  />
                </Paper>
                <br />
                <Paper className={classes.paper}>
                  <SupermarketCard
                    logo={parknshopLogo}
                    title="Park n' Shop"
                    address="Basement, Manson House, Nathan Rd"
                    summary="Literally just around the corner!"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Groceries;
