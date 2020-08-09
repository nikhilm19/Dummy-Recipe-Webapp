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
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import history from "../history";
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
    <div
      class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white "
      ref={props.ref}
      style={{ height: "450px" }}
    >
      <img
        class="w-full h-64"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7) 2%, rgba(255,255,255,0) 95%), url(${props.recipe.image})`,
        }}
        onClick={() => history.push("/2")}
      />

      {props.keyId % 2 == 0 ? (
        <div class="px-6 py-4 bg-black h-full">
          <div class="font-bold text-2xl text-white">{props.recipe.name}</div>
          <div class="font-bold text-2xl mb-2 text-white text-right">
            <img
              src="/icons/Icon feather-heart-color.png"
              className="ml-auto"
            />
          </div>
          <div class="bg-black flex flex-row">
            <img src="/icons/clock-48.png" className="w-6 h-6" />
            <h1 class="rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
              23 Mins
            </h1>
          </div>
          <p class="text-white text-xs h-full">{props.recipe.description}</p>
        </div>
      ) : (
        <div class="px-6 py-4 bg-white h-full">
          <div class="font-bold text-2xl text-black">{props.recipe.name}</div>
          <div class="font-bold text-2xl mb-2 text-black text-right">
            <img
              src="/icons/Icon feather-heart-color.png"
              className="ml-auto"
            />
          </div>
          <div class="bg-white flex flex-row">
            <img src="/icons/clock-48-white.png" className="w-6 h-6" />
            <h1 class="rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
              23 Mins
            </h1>
          </div>
          <p class="text-black text-xs h-full">{props.recipe.description}</p>
        </div>
      )}
    </div>
  );
}
