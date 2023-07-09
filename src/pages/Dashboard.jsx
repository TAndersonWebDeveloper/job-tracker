import { useJobs } from "../features/jobs/useJobs";
import { useState } from "react";
const Dashboard = () => {
  const { jobs, isLoading, error } = useJobs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {jobs.map((jobs) => {
        return <div key={jobs.id}>{jobs.job_title}</div>;
      })}
    </div>
  );
};

export default Dashboard;
