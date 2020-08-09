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
        <RecipeCard key={recipe.id} keyId={k} recipe={recipe}></RecipeCard>
      );
    });
  }
  return props.recipes.length !== 0 ? (
    <div className="z-1 pl-16 pr-16 grid grid-cols-1 row-gap-2 col-gap-4  col-gap-2 sm:grid-cols-1 md:grid-cols-4 mt-16 xl:grid-cols-3">
      {recipes}
    </div>
  ) : (
    <div className="flex justify-center h-full w-full p-10 mt-10">
      {<img src="/404.png" className="w-3/4"></img>}
    </div>
  );
};

export default RecipeList;
