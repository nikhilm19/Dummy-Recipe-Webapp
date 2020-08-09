import React from "react";

import recipeApi from "../api/recipe";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    //const data = await recipeApi.get("");
    //this.setState({ recipe: data[parseInt(this.props.match.params.id)] });
  };

  render() {
    return (
      <section class="text-gray-700 body-font flex flex-row w-full p-32">
        
          <div class="flex flex-wrap -m-4 w-1/2">
            <div class="p-4">
              <div class="bg-gray-100 p-6 rounded-lg ">
                <img
                  class="h-64 rounded w-full object-cover object-center mb-6"
                  src="/images/Img1.jpg"
                  alt="content"
                />
                <h3 class="tracking-widest  text-xl font-medium title-font">
                  Ingredients
                </h3>
                <h2 class="text-gray-600 font-medium title-font mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
                <h3 class="tracking-widest  text-xl font-medium title-font">
                  How to prepare
                </h3>
                <p class=" text-gray-600 font-medium title-font mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="container px-5  mx-auto flex w-1/2">
            <div class="  bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h2 class="text-gray-500 text-lg mb-1 font-xs title-font text-right">
                Recipe
              </h2>
              <h2 class="text-gray-900 text-lg mb-1 font-bold text-4xl text-right">
                Cheese burst
              </h2>
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font text-right">
                Description
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600 text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h2 class="leading-relaxed mb-5 text-gray-600 text-right">
                FAVOURITE THIS RECIPE ❤️
              </h2>
              <br className="text-black bg-black border border-black"></br>
              <textarea
                class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                placeholder="Message"
              ></textarea>
              <button class="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">
                Add Comment
              </button>
            </div>
          </div>
        
      </section>
    );
  }
}

export default Details;
