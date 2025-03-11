/** @format */

import supabase from "./supabase";

export async function getPots() {
  const { data, error } = await supabase.from("pots").select("*");

  if (error) {
    console.error(error);
    throw new Error("Pots could not be loaded.");
  }

  return data;
}
