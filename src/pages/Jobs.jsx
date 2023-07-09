import JobsTable from "../features/jobs/JobsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Jobs = () => {
  return (
    <Row>
      <Heading as="h1">Jobs</Heading>
      <JobsTable />
    </Row>
  );
};

export default Jobs;
