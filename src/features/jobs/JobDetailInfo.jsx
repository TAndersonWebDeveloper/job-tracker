import ExtraInfoContainer from "../../ui/ExtraInfoContainer";
import { Link } from "react-router-dom";
import { styled, css } from "styled-components";
import Button from "../../ui/Button";
import { HiChevronDown } from "react-icons/hi2";
import { useState } from "react";
import StyledInfo from "../../ui/StyledInfo";
import { BsLink45Deg } from "react-icons/bs";

const ChevronContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  flex-direction: column;
  color: var(--color-grey-300);
  cursor: pointer;

  & button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const JobDetailInfo = ({ job }) => {
  const [moreInfoClicked, setMoreInfoClicked] = useState(false);

  return (
    <ExtraInfoContainer>
      <ChevronContainer>
        <button onClick={() => setMoreInfoClicked(!moreInfoClicked)}>
          <HiChevronDown />
        </button>
      </ChevronContainer>

      {moreInfoClicked && (
        <Container>
          <Link to={job.link} target="_blank">
            <StyledInfo
              icon={<BsLink45Deg />}
              color="blue"
              value="Job Posting"
            ></StyledInfo>
          </Link>
        </Container>
      )}
    </ExtraInfoContainer>
  );
};

export default JobDetailInfo;
