import supabase from "./supabase";

export const getJobs = async ({ page }) => {
  let query = supabase.from("jobs").select("*", {
    count: "exact",
  });

  if (page) {
    const from = (page - 1) * 10;
    const to = from + 10 - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Jobs could not be loaded");
  }

  return { data, count };
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

export const getJob = async (id) => {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Job could not be loaded");
  }

  return data;
};

export async function deleteJob(id) {
  const { data, error } = await supabase.from("jobs").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Job could not be deleted");
  }

  console.log(data);
  return data;
}
