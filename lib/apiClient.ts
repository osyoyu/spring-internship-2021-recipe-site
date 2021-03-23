import { Recipe } from "../typing/Recipe";

type FetchRecipeResponse = Recipe;

export async function fetchRecipe(id: number): Promise<FetchRecipeResponse> {
  const res = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
      headers: { "X-Api-Key": process.env.INTERNSHIP_API_KEY ?? "" },
    }
  );
  const recipe = ((await res.json()) as unknown) as FetchRecipeResponse;
  return recipe;
}

type FetchRecipesResponse = {
  recipes: Recipe[];
};

export async function fetchRecipes(
  page?: number,
  id?: number[]
): Promise<FetchRecipesResponse> {
  const qs = new URLSearchParams(
    removeUndefineds({
      page,
      id,
    })
  ).toString();
  const res = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes?${qs}`,
    {
      headers: { "X-Api-Key": process.env.INTERNSHIP_API_KEY ?? "" },
    }
  );
  const extracted = ((await res.json()) as unknown) as FetchRecipesResponse;
  return extracted;
}

function removeUndefineds(
  obj: Record<string, unknown>
): Record<string, string> {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key].toString(); // TODO: KUSO CASTING HERE
    }
  });
  return newObj;
}
