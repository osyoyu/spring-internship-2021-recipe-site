import { Recipe } from "../typing/Recipe";

export async function fetchRecipe(id: number): Promise<Recipe> {
  const res = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
      headers: { "X-Api-Key": process.env.INTERNSHIP_API_KEY ?? "" },
    }
  );
  const recipe = ((await res.json()) as unknown) as Recipe;
  return recipe;
}
