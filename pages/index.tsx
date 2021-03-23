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
    </Layout>
  );
};

export default TopPage;
