import { useParams } from "react-router-dom";
import { useJob } from "./useJob";
import Spinner from "../../ui/Spinner";
import DetailContainer, {
  DetailBody,
  DetailHeader,
  ButtonGroup,
} from "../../ui/DetailContainer";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingOffice2,
  HiNoSymbol,
  HiOutlineCheckCircle,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { useMoveBack } from "../../hooks/useMoveBack";
import { BsCashCoin } from "react-icons/bs";
import StyledInfo from "../../ui/StyledInfo";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

import { useDeleteJob } from "./useDeleteJob";

const JobDetail = () => {
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { job, isLoading } = useJob();
  const { deleteJob, isDeleting } = useDeleteJob();

  if (isLoading || isDeleting) return <Spinner />;

  const handleDelete = (jobId) => {
    deleteJob(jobId);
    navigate("/dashboard");
  };

  const iconType = {
    applied: <HiOutlineRocketLaunch />,
    rejected: <HiNoSymbol />,
    interview: <HiOutlineCheckCircle />,
    offer: <HiOutlineCheckCircle />,
  };

  const jobStatus = {
    applied: "Applied",
    rejected: "Rejected",
    interview: "Interview",
    offer: "Offer",
  };

  const jobStatusColor = {
    applied: "yellow",
    rejected: "red",
    interview: "blue",
    offer: "green",
  };

  return (
    <DetailContainer>
      <DetailHeader>
        <div>
          <HiOutlineClipboardDocumentList />
          <h2>{job.job_title}</h2>
        </div>

        <div>
          <HiOutlineBuildingOffice2 />
          <h3>{job.company}</h3>
        </div>
      </DetailHeader>
      <DetailBody>
        <div>
          <StyledInfo
            color="green"
            icon={<BsCashCoin />}
            title="Salary"
            value={job.salary === 0 ? "Not Specified" : `$${job.salary}`}
          />
        </div>
        <div>
          <StyledInfo
            color="yellow"
            icon={<SlLocationPin />}
            title="Location"
            value={`${job.location}`}
          />
        </div>
        <div>
          <StyledInfo
            color={job.response ? "green" : "red"}
            icon={job.response ? <HiOutlineCheckCircle /> : <HiNoSymbol />}
            title="Responded"
            value={`${job.response ? "Yes" : "No"}`}
          />
        </div>
        <div>
          <StyledInfo
            color={jobStatusColor[job.status]}
            // icon={
            //   job.status === "applied" ? (
            //     <HiOutlineRocketLaunch />
            //   ) : (
            //     <HiNoSymbol />
            //   )
            // }

            icon={iconType[job.status]}
            title="Current Status"
            // value={`${job.status === "applied" ? "Applied" : "Rejected"}`}
            value={jobStatus[job.status]}
          />
        </div>
      </DetailBody>

      <ButtonGroup>
        <Button variation="primary" size="large">
          Update
        </Button>
        <Button
          variation="danger"
          size="medium"
          onClick={() => {
            handleDelete(job.id);
            navigate("/dashboard");
          }}
        >
          Delete Job
        </Button>
        <Button variation="secondary" size="medium" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </DetailContainer>
  );
};
export default JobDetail;
