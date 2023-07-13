import { styled } from "styled-components";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";
import Filter from "../../ui/Filter";
import Search from "../../ui/Search";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const JobOperations = () => {
  return (
    <TableOperations>
      <Search />
      <Filter
        filterField="status"
        options={[
          { label: "All", value: "all" },
          { label: "Applied", value: "applied" },
          { label: "Interview", value: "interviewing" },
          { label: "Offer", value: "offer" },
          { label: "Rejected", value: "rejected" },
        ]}
      />
      <NavLink to="/new">
        <Button size="medium" variation="primary">
          Track New Job
        </Button>
      </NavLink>
    </TableOperations>
  );
};

export default JobOperations;
