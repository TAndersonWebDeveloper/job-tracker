import { styled } from "styled-components";
import StyledInfo from "../../ui/StyledInfo";
import StyledInfoLayout from "../../ui/StyledInfoLayout";
import {
  HiNoSymbol,
  HiOutlineClipboardDocumentList,
  HiOutlinePhone,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { useJobs } from "../jobs/useJobs";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const {
    jobs,
    isLoading,
    error,
    rejectedJobs,
    interviewJobs,
    activeApplications,
  } = useJobs();

  return (
    <StyledDashboardLayout>
      <StyledInfoLayout>
        <StyledInfo
          color="blue"
          icon={<HiOutlineClipboardDocumentList />}
          title="Total Applications"
          value={jobs.length}
        />
        <StyledInfo
          color="green"
          icon={<HiOutlinePhone />}
          title="Interviews Scheduled"
          value={interviewJobs.length}
        />
        <StyledInfo
          color="yellow"
          icon={<HiOutlineRocketLaunch />}
          title="Active Applications"
          value={activeApplications.length}
        />
        <StyledInfo
          color="red"
          icon={<HiNoSymbol />}
          title="Rejected Applications"
          value={rejectedJobs.length}
        />
      </StyledInfoLayout>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
