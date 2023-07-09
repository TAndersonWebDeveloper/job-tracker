import Table from "../../ui/Table";

const JobRow = ({ job }) => {
  return (
    <Table.Row>
      <div>
        <div>{job.job_title}</div>
      </div>
      <div>{job.company}</div>
      <div>{job.location}</div>
      <div>{job.salary}</div>
      {job.response ? <div>Yes</div> : <div>No</div>}
    </Table.Row>
  );
};

export default JobRow;
