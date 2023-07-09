import supabase from "./supabase";

export const getJobs = async () => {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.error(error);
    throw new Error("Jobs could not be loaded");
  }

  return data;
};
