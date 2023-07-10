import { HiEye, HiTrash } from "react-icons/hi2";
import Submenu from "../../ui/SubMenu";
import Table from "../../ui/Table";
import { useNavigate, NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid var(--color-grey-300);
`;

const JobRow = ({ job }) => {
  const navigate = useNavigate();

  return (
    <StyledNavLink to={`/jobs/${job.id}`}>
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
            <Submenu.Item
              onClick={() => navigate("/dashboard")}
              icon={<HiEye />}
            >
              See Details
            </Submenu.Item>
            <Submenu.Item icon={<HiTrash />}>Delete</Submenu.Item>
          </Submenu.List>
        </Submenu>
      </Table.Row>
    </StyledNavLink>
  );
};

export default JobRow;
