import { GetServerSideProps, NextPage } from "next";
import { Layout } from "../components/Layout";

import { Recipe } from "../typing/Recipe";
import { fetchRecipe } from "../lib/apiClient";

type Props = {
  recipe: Recipe;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const recipe = await fetchRecipe(6699132);
  return {
    props: {
      recipe,
    },
  };
};

const TopPage: NextPage<Props> = ({ recipe }) => {
  return (
    <Layout>
      <h1>{recipe.title}</h1>
      <img src={recipe.image_url} />
      <hr />
      <ul>
        <li>作者: {recipe.author.user_name}</li>
        <li>ひづけ: {recipe.published_at}</li>
        <li>説明: {recipe.description}</li>
      </ul>
      <hr />
      <h2>材料</h2>
      <ul>
        {recipe.ingredients.map(ingredient => <li>{ingredient.name} ({ingredient.quantity})</li>)}
      </ul>
      <hr />
      <h2>手順</h2>
      <ol>
        {recipe.steps.map(step => <li>{step}</li>)}
      </ol>
    </Layout>
  );
};

export default TopPage;
