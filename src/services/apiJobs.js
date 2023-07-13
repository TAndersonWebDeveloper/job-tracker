import supabase from "./supabase";

export const getJobs = async ({ page, filter, search }) => {
  let query = supabase.from("jobs").select("*", {
    count: "exact",
  });

  //Filter

  if (filter) query = query.eq(filter.field, filter.value);

  //Pagination
  if (page) {
    const from = (page - 1) * 10;
    const to = from + 10 - 1;
    query = query.range(from, to);
  }

  //Search

  if (search) {
    const { fields, value } = search;
    query = query.or(fields.map((field) => `${field}.ilike.%${value}%`));
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
  response,
  link,
}) => {
  const { data, error } = await supabase.from("jobs").insert([
    {
      job_title: jobTitle,
      company: companyName,
      salary,
      status,
      location,
      response,
      link,
    },
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

  return data;
}

export const updateJob = async (newJob, id) => {
  const { data, error } = await supabase
    .from("jobs")
    .update({ ...newJob })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Job could not be updated");
  }

  return data;
};

export const deleteSkills = async (index, id) => {
  const job = await supabase.from("jobs").select("skills").eq("id", id);

  const skills = job.data[0].skills;

  skills.splice(index, 1);

  if (error) {
    console.error(error);
    throw new Error("Skill could not be deleted");
  }

  return data;
};
