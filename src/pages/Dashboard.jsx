import { useJobs } from "../features/jobs/useJobs";
import Filter from "../ui/Filter";
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
        <Filter
          filterField="last"
          options={[
            { value: "7", label: "Last 7 days" },
            { value: "30", label: "Last 30 days" },
            { value: "90", label: "Last 90 days" },
          ]}
        />
      </Row>
      <DashboardLayout />
    </>
  );
};

export default Dashboard;
