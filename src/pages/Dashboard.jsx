import { useJobs } from "../features/jobs/useJobs";
import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Spinner from "../ui/Spinner";
const Dashboard = () => {
  const { jobs, isLoading, error } = useJobs();

  if (isLoading) return <Spinner />;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>
      <DashboardLayout />
    </>
  );
};

export default Dashboard;
