import { GetServerSideProps, NextPage } from "next";
import { Layout } from "../components/Layout";

import { Recipe } from "../typing/Recipe";
import { fetchRecipes } from "../lib/apiClient";
import { RecipeList } from "../components/RecipeList";

type Props = {
  recipes: Recipe[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const recipes = await (await fetchRecipes()).recipes;
  return {
    props: {
      recipes,
    },
  };
};

const TopPage: NextPage<Props> = ({ recipes }) => {
  return (
    <Layout>
      <RecipeList recipes={recipes} />
    </Layout>
  );
};

export default TopPage;
