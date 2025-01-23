/** @format */

import supabase from "./supabase";

export async function getTransactions() {
  const { data, error } = await supabase.from("transactions").select("*");

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded.");
  }

  return data;
}

export async function getTransactionsCategories() {
  const { data, error } = await supabase
    .from("transactions")
    .select("category");

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded.");
  }

  return data;
}
