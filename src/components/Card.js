import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import history from "../history";
import Slider from "./slider-dots";

import ClockIcon from "../assets/icons/clock-48.png";
import ClockIconWhite from "../assets/icons/clock-48-white.png";
import HeartIcon from "../assets/icons/Icon feather-heart-color.png";

export default function RecipeReviewCard(props) {
  const [show, setShow] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      class="max-w-sm rounded-lg overflow-hidden shadow-lg  transition duration-500 ease-in-out relative"
      ref={props.ref}
      style={{ height: "450px" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <div
          className="flex flex-col justify-center items-center bg-red-100 opacity-25"
          style={{
            height: "450px",
            zIndex: "20",
          }}
        >
          <Link
            to={`/${props.recipe.id}`}
            className="border-white bg-transparent "
          >
            View More
          </Link>
        </div>
      )}

      <div className="z-10 h-full">
        <div
          class="w-full h-64 "
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
              props.keyId % 2 == 0
                ? `linear-gradient(0deg, rgba(0,0,0,0.7) 2%, rgba(255,255,255,0) 95%), url(${props.recipe.image})`
                : `linear-gradient(0deg, rgb(255 255 255 / 32%) 2%, rgba(255,255,255,0) 95%), url('${props.recipe.image}')`,
          }}
          onClick={() => history.push(`${props.keyId}`)}
        />

        {props.keyId % 2 == 0 ? (
          <div class="px-6 py-4 bg-black h-full border-none hover:bg-white h-full">
            <div class="font-bold text-2xl text-white">{props.recipe.name}</div>
            <div class="font-bold text-2xl mb-2 text-white text-right">
              <img src={HeartIcon} className="ml-auto" />
            </div>
            <div class="bg-black flex flex-row">
              <img src={ClockIcon} className="w-6 h-6" />
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
              <img src={HeartIcon} className="ml-auto" />
            </div>
            <div class="bg-white flex flex-row">
              <img src={ClockIconWhite} className="w-6 h-6" />
              <h1 class="rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
                23 Mins
              </h1>
            </div>
            <p class="text-black text-xs h-full">{props.recipe.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
