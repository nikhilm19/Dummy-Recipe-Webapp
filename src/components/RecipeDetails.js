import React from "react";

import recipeApi from "../api/recipe";
import recipes from "../data/recipes.json";
import starIcon from "../assets/icons/Icon awesome-star.png";
import { Link } from "react-router-dom";
import Poster from "../assets/images/Img1.jpg";

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  componentDidMount = async () => {
    //const data = await recipeApi.get("");
    // const response = await recipeApi.get("");

    const response = recipes;

    console.log(this.props.match.params.id);

    this.setState({
      recipe: response[this.props.match.params.id],
    });
  };

  render() {
    console.log(this.state.recipe);
    return this.state.recipe ? (
      <section class="text-gray-700 body-font flex flex-col w-full sm:px-48 py-5 mt-5">
        <div className="sm:ml-4 sticky sm:static top-0 bg-white z-10 sm:bg-transparent">
          <Link to="/" className="go-back font-nunito pl-4">
            <i class="fas fa-arrow-alt-circle-left "></i> Go back
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row flex-col-reverse z-1">
          {" "}
          <div class="flex flex-wrap sm:w-1/2">
            <div class="p-4">
              <div class=" p-6 rounded-lg ">
                <video
                  class="h-64 rounded w-full object-cover object-center mb-6"
                  alt="content"
                  controls
                  poster={Poster}
                />
                <h3 class=" text-xl font-medium ">Ingredients:</h3>
                <h2 class="text-gray-600 font-medium  mb-4 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
                <h3 class="  text-xl font-medium title-font">
                  How to prepare:
                </h3>
                <p class=" text-gray-600 font-medium mb-4 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="container sm:px-5  mx-auto flex sm:w-1/2">
            <div class="rounded-lg px-4 sm:p-8 flex flex-col md:ml-auto w-full sm:mt-10 md:mt-0 relative z-1">
              <h2 class="text-gray-500 text-lg mb-1 font-xs title-font text-center sm:text-right">
                Recipe
              </h2>
              <h2 class="text-gray-900 text-lg mb-1 font-bold sm:text-4xl text-2xl font-nunito text-center sm:text-right">
                {this.state.recipe ? this.state.recipe.name : "Foobar"}
              </h2>

              <div className="flex flex-row sm:ml-auto mx-auto">
                <div>
                  <h1 className="bg-black text-white text-sm mr-8 px-2 ">
                    4/5
                  </h1>
                </div>
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
              </div>

              <h2 class="text-gray-400 text-lg mb-1 font-medium title-font text-center sm:text-right">
                Description
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600 text-center sm:text-right text-xs">
                {this.state.recipe.description}
              </p>

              <div className="flex flex-row mx-auto sm:ml-auto mb-4">
                <div className="bg-black px-4 py-2 rounded-full w-16 h-16 mr-4 text-white text-center">
                  <h1 className="text-xl">8</h1>{" "}
                  <h2 className="text-xs">cals</h2>
                </div>
                <div className="bg-black px-4 py-2 rounded-full w-16 h-16 mr-4 text-white text-center">
                  <h1 className="text-xl">220</h1>{" "}
                  <h2 className="text-xs">bucks</h2>
                </div>
                <div className="bg-black px-4 py-2 rounded-full w-16 h-16 mr-4 text-white text-center">
                  <h1 className="text-xl">30</h1>{" "}
                  <h2 className="text-xs">mins</h2>
                </div>
              </div>

              <h2 class="leading-relaxed text-sm mb-5 text-gray-600 text-center sm:text-right mb-4">
                FAVOURITE THIS RECIPE <span role="img">❤️</span>
              </h2>
              <span className="text-black bg-black border border-gray-300 mb-4 border-2 w-full"></span>
              <textarea
                class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                placeholder="Message"
              ></textarea>
              <button class="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </section>
    ) : (
      ""
    );
  }
}

export default Details;
