import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Slider from "./slider-dots";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    borderRadius: "20px",
    minWidth: 250,
    minHeight: 350,

    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    backgroundColor: "black",

    color: "white",
    height: "auto",
  },
  media: {
    height: 0,
    paddingTop: "70.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  quick: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    minWidth: "inherit",
    minHeight: "inherit",
    backgroundColor: "rgba(0, 25, 26, 0.95)",
    zIndex: "10",
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className={classes.root}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      {show == true ? (
        <CardActions className={classes.quick}>
          <Link
            to={`/${props.recipe.id}`}
            className="bg-transparent rounded border border-white text-white p-4 m-2 w-40"
          >
            VIEW MORE
          </Link>
          <button className="bg-transparent rounded border border-white text-white font-metro p-4 w-40">
            QUICK VIEW
          </button>
        </CardActions>
      ) : (
        <div className="h-full">
          <CardMedia
            className={classes.media}
            image="/images/Img1.jpg"
            title="Paella dish"
          />
          <CardContent className={classes.content}>
            <div className="text-white flex flex-row justify-between h-full">
              <Typography variant="h5" color="white" component="h1">
                {props.recipe.name}
              </Typography>
              <IconButton color="inherit" aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </div>

            <div className="flex flex-row h-full">
              <IconButton color="inherit" aria-label="add to favorites">
                <img src="/icons/Icon feather-clock.png" className="bg-white" />
              </IconButton>
              <Typography variant="subtitle1">23 mins</Typography>
            </div>

            <Typography variant="body2" color="white" component="p">
              {props.recipe.description}
            </Typography>
          </CardContent>
        </div>
      )}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
