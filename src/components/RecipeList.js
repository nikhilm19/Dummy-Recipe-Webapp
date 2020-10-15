import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = (props) => {
  let k = -1;
  if (props.recipes.length === 0) {
    console.log("no no");
  } else {
    console.log(props.recipes);
  }
  let recipes = [];

  if (props.recipes.length !== 0) {
    recipes = props.recipes.map((recipe) => {
      k++;
      console.log(recipe);

      return (
        <div className="h-full rounded  mx-4 sm:w-1/4 h-64 mb-8">
          <RecipeCard key={recipe.id} keyId={k} recipe={recipe}></RecipeCard>
        </div>
      );
    });
  }
  return props.recipes.length !== 0 ? (
    <div>
      <div className="flex ml-auto sm:px-48 pr-4 flex-col">
        <h1 className="text-gray-500  text-right">Category</h1>
        <h1 className="text-4xl text-gray-900 font-extrabold font-nunito text-right">
          Pizza and Noodles
        </h1>
      </div>
      <div className="z-1 sm:px-16 flex sm:flex-row flex-wrap justify-center flex-col">
        {recipes}
      </div>
    </div>
  ) : (
    <div className="flex justify-center h-full w-full p-10 mt-10">
      {<h1 className="text-gray-500 ">Your dish is still cooking!</h1>}
    </div>
  );
};

export default RecipeList;
