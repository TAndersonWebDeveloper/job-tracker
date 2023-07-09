import { HiEye, HiTrash } from "react-icons/hi2";
import Submenu from "../../ui/SubMenu";
import Table from "../../ui/Table";
import { useNavigate } from "react-router-dom";

const JobRow = ({ job }) => {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <div>
        <div>{job.job_title}</div>
      </div>
      <div>{job.company}</div>
      <div>{job.location}</div>
      <div>{job.salary}</div>
      {job.response ? <div>Yes</div> : <div>No</div>}
      <Submenu>
        <Submenu.Toggle id={job.id} />
        <Submenu.List id={job.id}>
          <Submenu.Item onClick={() => navigate("/dashboard")} icon={<HiEye />}>
            See Details
          </Submenu.Item>
          <Submenu.Item icon={<HiTrash />}>Delete</Submenu.Item>
        </Submenu.List>
      </Submenu>
    </Table.Row>
  );
};

export default JobRow;
