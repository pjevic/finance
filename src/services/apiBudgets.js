/** @format */

import supabase from "./supabase";

export async function getBudgets() {
  const { data, error } = await supabase.from("budgets").select("*");

  if (error) {
    console.error(error);
    throw new Error("Budgets could not be loaded.");
  }

  return data;
}

export async function createBudget(newBudget) {
  const { data, error } = await supabase.from("budgets").insert([newBudget]);

  if (error) {
    console.error(error);
    throw new Error("New budgets could not be added.");
  }

  return data;
}
