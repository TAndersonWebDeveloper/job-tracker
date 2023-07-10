import JobOperations from "../features/jobs/JobOperations";
import JobsTable from "../features/jobs/JobsTable";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Jobs = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Jobs</Heading>
        <JobOperations />
      </Row>
      <JobsTable />
    </>
  );
};

export default Jobs;
