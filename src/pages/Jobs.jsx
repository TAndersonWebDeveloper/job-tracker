import JobsTable from "../features/jobs/JobsTable";
import Heading from "../ui/Heading";

const Jobs = () => {
  return (
    <div>
      <Heading as="h1">Jobs</Heading>
      <JobsTable />
    </div>
  );
};

export default Jobs;
