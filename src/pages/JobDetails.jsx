import { useParams } from "react-router-dom";
import Heading from "../ui/Heading";
import JobDetail from "../features/jobs/JobDetail";

const JobDetails = () => {
  const { jobId } = useParams();

  return (
    <>
      <Heading>Job Details</Heading>
      <JobDetail jobId={jobId} />
    </>
  );
};

export default JobDetails;
