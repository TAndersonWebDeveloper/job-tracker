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
import ApplicationChart from "../../ui/ApplicationChart";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { jobs, rejectedJobs, interviewJobs, activeApplications } = useJobs();

  //Retreive search params
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("last");

  //Get all dates between start and end date using params, default to 7
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), filter || 7),
    end: new Date(),
  });

  //Map all dates to an object with the date and the number of applications on that date, as well as the number of interviews, active applications, and rejected applications
  let dates = allDates.map((date) => {
    return {
      label: format(date, "MM/dd/yyyy"),
      applications: jobs.filter((job) =>
        isSameDay(date, new Date(job.created_at))
      ).length,
      interviewJobs: interviewJobs.filter((job) =>
        isSameDay(date, new Date(job.created_at))
      ).length,
      activeApplications: activeApplications.filter((job) =>
        isSameDay(date, new Date(job.created_at))
      ).length,
      rejectedJobs: rejectedJobs.filter((job) =>
        isSameDay(date, new Date(job.created_at))
      ).length,
    };
  });

  return (
    <StyledDashboardLayout>
      <StyledInfoLayout>
        <StyledInfo
          color="blue"
          icon={<HiOutlineClipboardDocumentList />}
          title="Total Applications"
          value={dates.reduce((acc, cur) => acc + cur.applications, 0)}
        />
        <StyledInfo
          color="green"
          icon={<HiOutlinePhone />}
          title="Interviews Scheduled"
          value={dates.reduce((acc, cur) => acc + cur.interviewJobs, 0)}
        />
        <StyledInfo
          color="yellow"
          icon={<HiOutlineRocketLaunch />}
          title="Active Applications"
          value={dates.reduce((acc, cur) => acc + cur.activeApplications, 0)}
        />
        <StyledInfo
          color="red"
          icon={<HiNoSymbol />}
          title="Rejected Applications"
          value={dates.reduce((acc, cur) => acc + cur.rejectedJobs, 0)}
        />
      </StyledInfoLayout>
      <ApplicationChart data={jobs} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
