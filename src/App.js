import React from "react";
import SearchBar from "./components/SearchBar";
import { Router, Route, Link } from "react-router-dom";
import recipe from "./api/recipe";
import history from "./history";

import axios from "axios";
import recipes from "./data/recipes.json";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetails";

import Illustration1 from "./assets/images/Illustration1.png";

import Illustration2 from "./assets/images/Illustration2.png";
import Illustration3 from "./assets/images/Illustration3.png";
import Illustration4 from "./assets/images/Illustration4.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      results: [],
    };
  }

  async componentDidMount() {
    //const response = await recipe.get("");

    //console.log(response.data);

    const response = recipes;

    this.setState({ recipes: response, results: response });
  }
  onSubmit = async (term) => {
    console.log(term);
    if (term === "") {
      this.setState({ results: this.state.recipes });
    }
    let results = this.state.recipes.filter((recipe) => {
      return recipe.name.startsWith(term);
    });

    this.setState({ results });
    console.log(term);
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Illustration1}),url(${Illustration2}) ,url(${Illustration3}), url(${Illustration4})`,
          backgroundPosition: "right bottom, left bottom, right top, left top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200px, 130px, 130px, 130px",
        }}
        className="h-screen overflow-scroll App flex flex-col top-0 inset-x-0 h-16 items-center bg-gray-200 py-16"
      >
        <Router history={history}>
          <div className="pl-8 flex bg-gray-200 border-b border-gray-200 fixed top-0 inset-x-0 z-20 h-16 items-center ">
            <header className="sticky w-1/4 mr-8"></header>

            <SearchBar onSubmit={this.onSubmit} />
            <div className="w-1/2 h-full flex justify-center">
              <div className="flex flex-row w-1/2 justify-between px-2 py-2 items-center">
                <a href="https://nikhilm19.tech/">About Us</a>
              </div>
            </div>
          </div>

          <Route
            path="/"
            exact
            component={() => <RecipeList recipes={this.state.results} />}
          ></Route>

          <Route
            path="/:id"
            exact
            render={(props) => (
              <RecipeDetail recipes={this.state.recipes} {...props} />
            )}
          ></Route>
        </Router>
      </div>
    );
  }
}

export default App;
