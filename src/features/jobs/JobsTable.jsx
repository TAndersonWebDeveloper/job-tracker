import Table from "../../ui/Table";
import JobRow from "./JobRow";
import { useJobs } from "./useJobs";

const JobsTable = () => {
  const { jobs, isLoading, error } = useJobs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Table columns="2fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Job Title</div>
        <div>Company</div>
        <div>Location</div>
        <div>Salary</div>
        <div>Resonse</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={jobs}
        render={(job) => <JobRow key={job.id} job={job} />}
      />
    </Table>
  );
};

export default JobsTable;
