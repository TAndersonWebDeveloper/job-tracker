import ExtraInfoContainer from "../../ui/ExtraInfoContainer";
import { SkillsContainer } from "../../ui/DetailContainer";
import SkillItem from "../../ui/SkillItem";
import DetailSubHeading from "../../ui/DetailSubHeading";
import Button from "../../ui/Button";
import { styled } from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useEditJob } from "./useEditJob";
import { set } from "react-hook-form";

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.6rem;
  gap: 1.6rem;
`;

const StyledIcon = styled(BsPlusCircle)`
  font-size: 2.4rem;
  color: var(--color-primary-100);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: var(--color-grey-0);

  &:hover {
    color: var(--color-primary-200);
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

const StyledInput = styled.input`
  height: 4rem;
  padding-left: 1.6rem;
  width: auto;
`;

const JobDetailInfo = ({ job }) => {
  const inputRef = useRef(null);
  const [addSkill, setAddSkill] = useState(false);
  const [skill, setSkill] = useState("");
  const { editJob, isLoading, error } = useEditJob();

  useEffect(() => {
    if (addSkill) {
      inputRef.current.focus();
    }
  }, [addSkill, skill, setSkill, inputRef, job, editJob, isLoading, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill === "") {
      setAddSkill(false);
      return;
    }
    if (job.skills === null) {
      editJob({
        newJob: {
          ...job,
          skills: [skill],
        },
        id: job.id,
      });
    } else {
      editJob({
        newJob: {
          ...job,
          skills: [...job.skills, skill],
        },
        id: job.id,
      });
    }
    setSkill("");
    inputRef.current.focus();
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleAddSkill = () => {
    setAddSkill((prevAddSkill) => !prevAddSkill);
  };

  const handleBlur = () => {
    setAddSkill(false);
  };

  return (
    <ExtraInfoContainer>
      <Header>
        <DetailSubHeading value="Required Skills and Experience" />
      </Header>
      <SkillsContainer>
        {job.skills === null ? (
          !addSkill ? (
            <p>No Skills Listed</p>
          ) : (
            ""
          )
        ) : (
          job.skills.map((skill) => {
            return (
              <SkillItem
                key={job.id + Math.random()}
                skills={job.skills}
                skill={skill}
                job={job}
              />
            );
          })
        )}
        {addSkill && (
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              onChange={handleSkillChange}
              onBlur={handleBlur}
              id="skill"
              ref={inputRef}
              value={skill}
              disabled={isLoading}
            />
          </form>
        )}
        {!addSkill && <StyledIcon onClick={handleAddSkill} />}
      </SkillsContainer>
    </ExtraInfoContainer>
  );
};

export default JobDetailInfo;
