import ExtraInfoContainer from "../../ui/ExtraInfoContainer";

import { SkillsContainer } from "../../ui/DetailContainer";
import SkillItem from "../../ui/SkillItem";
import DetailSubHeading from "../../ui/DetailSubHeading";
import { SkillValues } from "../../services/SkillValues";
import { getJobs } from "../../services/apiJobs";

const JobDetailInfo = ({ job }) => {
  return (
    <ExtraInfoContainer>
      <DetailSubHeading value="Listed Required Skills" />
      <SkillsContainer>
        {job.skills === null ? (
          <p>No skills listed</p>
        ) : (
          job.skills.map((skill) => {
            return <SkillItem skill={skill} />;
          })
        )}

        {/* <SkillItem skill="react" />
        <SkillItem skill="typescript" />
        <SkillItem skill="mysql" />
        <SkillItem skill="node" /> */}
      </SkillsContainer>
    </ExtraInfoContainer>
  );
};

export default JobDetailInfo;
