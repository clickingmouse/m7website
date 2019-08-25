import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const PreviewPhoto = props => {
  const { pictureUrl } = props;
  return (
    <div className="preview photo" style={{ height: "auto" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8}>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ objectFit: "contain", border: "1px solid black" }}
              src={pictureUrl}
              width="auto"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PreviewPhoto;
