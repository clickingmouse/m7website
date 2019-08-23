import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import siuyehImg from "../../../../images/posts/featured/siuyeh.jpg";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const SiuYehPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Siy Yeh"
          height="140"
          image={siuyehImg}
          title="Siy Yeh"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ textAlign: "left" }}
          >
            Siu yeh
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" component="p">
            Siu yeh (Chinese: 宵夜 / 消夜; pinyin: Xiāoyè), also known as yexiao
            (夜宵; pinyin: yèxiāo), is a late night meal in the food culture of
            Hong Kong, Taiwan, and some parts of southern mainland China. It
            comes after dinner, and is similar to supper. Mealtime may start
            from about 9pm onwards until 4am, which would be early morning yum
            cha time. It can range anywhere from a snack to a full-fledged meal.
            For people working late night shifts, siu yeh is also associated
            with their post-midnight meals.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled>
          Coming Soon
        </Button>
      </CardActions>
    </Card>
  );
};
export default SiuYehPost;
