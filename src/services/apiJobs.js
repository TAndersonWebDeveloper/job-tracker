import supabase from "./supabase";

export const getJobs = async () => {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    console.error(error);
    throw new Error("Jobs could not be loaded");
  }

  return data;
};

export const addJob = async ({
  jobTitle,
  companyName,
  salary,
  status,
  location,
}) => {
  const { data, error } = await supabase
    .from("jobs")
    .insert([
      { job_title: jobTitle, company: companyName, salary, status, location },
    ]);

  if (error) {
    console.error(error);
    throw new Error("Job could not be added");
  }

  return data;
};
