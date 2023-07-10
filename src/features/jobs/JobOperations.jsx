import { styled } from "styled-components";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const JobOperations = () => {
  return (
    <TableOperations>
      <NavLink to="/jobs/new">
        <Button size="medium" variation="primary">
          Track New Job
        </Button>
      </NavLink>
    </TableOperations>
  );
};

export default JobOperations;
