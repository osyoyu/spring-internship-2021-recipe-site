/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from "react";
import { css, jsx } from "@emotion/react";

import { Recipe } from "../typing/Recipe";
import { Header } from "./Header";

type Props = {
  recipes: Recipe[];
};

export const RecipeList: FC<Props> = ({ recipes }) => {
  return (
    <div>
      <ul>
        {recipes.map(recipe => (
          <li><a href={`/recipes/${recipe.id}`}>{recipe.title}</a></li>
        ))}
      </ul>
    </div>
  );
};
