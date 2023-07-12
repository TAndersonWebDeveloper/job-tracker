import { styled } from "styled-components";
import { SkillValues } from "../services/SkillValues";
import { SlClose } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import { useEditJob } from "../features/jobs/useEditJob";

const Skill = styled.div`
  //   background-color: ${(props) => props.color};
  width: fit-content;
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);
  border: 3px solid ${(props) => props.color};
  position: relative;
  cursor: pointer;
`;

const DeleteSkill = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
  outline: none;
  &:focus {
    outline: none;
  }
  ${Skill}:hover & {
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-red-700);
    transition: all 0.2s ease-in-out;
  }
`;

const StyledTfiClose = styled(TfiClose)`
  background-color: var(--color-grey-0);
  border-radius: 50%;
  color: var(--color-red-700);
  opacity: 0;
  transition: all 0.2s ease-in-out;
  font-size: 1.2;
  padding: 0.2rem;
  ${Skill}:hover & {
    opacity: 1;
    transition: all 0.2s ease-in-out;
    background-color: var(--color-red-200);
  }

  &:focus {
    outline: none !important;
  }
`;

const SkillName = styled.span`
  font-size: 1.4rem;
`;

const SkillItem = ({ skill, job, skills }) => {
  const str = skill;
  const { editJob, isLoading, error } = useEditJob();

  const handleDeleteSkill = (skill) => {
    const newSkills = skills.filter((item) => item !== skill);

    editJob({
      newJob: {
        ...job,
        skills: newSkills,
      },
      id: job.id,
    });
  };

  return (
    <Skill
      color={
        SkillValues[skill] ? SkillValues[skill].color : "var(--color-grey-200)"
      }
    >
      <DeleteSkill
        disabled={isLoading}
        onClick={() => {
          handleDeleteSkill(skill);
        }}
      >
        <StyledTfiClose />
      </DeleteSkill>
      <SkillName>{str.charAt(0)?.toUpperCase() + str.slice(1)}</SkillName>
    </Skill>
  );
};

export default SkillItem;
