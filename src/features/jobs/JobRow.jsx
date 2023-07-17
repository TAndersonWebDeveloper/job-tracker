import Table from "../../ui/Table";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Tag from "../../ui/Tag";

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid var(--color-grey-300);
`;

const JobRow = ({ job }) => {
  const statusToTagName = {
    unconfirmed: "blue",
    true: "green",
    false: "red",
  };

  //Formats salary for display
  const formattedSalary = job.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledNavLink to={`/jobs/${job.id}`}>
      <Table.Row>
        <div>
          <div>{job.job_title}</div>
        </div>
        <div>{job.company}</div>
        <div>{job.location}</div>
        <div>{job.salary === 0 ? "Not Specified" : `${formattedSalary}`}</div>
        {job.response ? (
          <Tag type={statusToTagName[job.response]} color="green">
            Yes
          </Tag>
        ) : (
          <Tag type={statusToTagName[job.response]} color="green">
            No
          </Tag>
        )}
      </Table.Row>
    </StyledNavLink>
  );
};

export default JobRow;
