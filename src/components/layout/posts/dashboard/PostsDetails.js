import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import peakTramImg from "./peak-tram.jpg";
const useStyles = makeStyles({
  card: {
    //    maxWidth: ,
  }
});

const PostsDetails = props => {
  const classes = useStyles();
  const id = props.match.params.id;
  return (
    <div>
      <Container>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              image={peakTramImg}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Title - {id}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur architecto velit impedit assumenda animi esse cumque
                quibusdam autem a laudantium? Nulla enim, eligendi rem illum
                maxime pariatur culpa modi expedita?
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};

export default PostsDetails;
