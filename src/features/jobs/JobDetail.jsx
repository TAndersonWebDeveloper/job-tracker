import { useJob } from "./useJob";
import Spinner from "../../ui/Spinner";
import DetailContainer, {
  DetailBody,
  DetailHeader,
  ButtonGroup,
  StyledLink,
  Tooltip,
} from "../../ui/DetailContainer";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingOffice2,
  HiNoSymbol,
  HiOutlineCheckCircle,
  HiOutlineRocketLaunch,
  HiOutlinePhone,
  HiChevronDown,
} from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { useMoveBack } from "../../hooks/useMoveBack";
import { BsCashCoin, BsLink45Deg } from "react-icons/bs";
import StyledInfo from "../../ui/StyledInfo";
import Button from "../../ui/Button";
import { useNavigate, Link } from "react-router-dom";

import { useDeleteJob } from "./useDeleteJob";
import UpdateJobDetails from "./UpdateJobDetails";
import { useState } from "react";
import JobDetailInfo from "./JobDetailInfo";

const JobDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [hover, setHover] = useState(false);
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { job, isLoading } = useJob();
  const { deleteJob, isDeleting } = useDeleteJob();
  let formattedSalary;

  if (job) {
    formattedSalary = job.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  if (isLoading || isDeleting) return <Spinner />;

  const handleDelete = (jobId) => {
    deleteJob(jobId);
    navigate("/dashboard");
  };

  const iconType = {
    applied: <HiOutlineRocketLaunch />,
    rejected: <HiNoSymbol />,
    interviewing: <HiOutlinePhone />,
    offer: <HiOutlineCheckCircle />,
  };

  const jobStatus = {
    applied: "Applied",
    rejected: "Rejected",
    interviewing: "Interview",
    offer: "Offer",
  };

  const jobStatusColor = {
    applied: "yellow",
    rejected: "red",
    interviewing: "blue",
    offer: "green",
  };

  return (
    <DetailContainer>
      <DetailHeader>
        <div>
          <HiOutlineClipboardDocumentList />
          <h2>{job.job_title}</h2>
          <div>
            <StyledLink to={job.link} target="_blank">
              <BsLink45Deg />
            </StyledLink>
          </div>
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
            value={job.salary === 0 ? "Not Specified" : `${formattedSalary}`}
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
            icon={iconType[job.status]}
            title="Current Status"
            value={jobStatus[job.status]}
          />
        </div>
      </DetailBody>
      <div>
        <JobDetailInfo job={job} />
      </div>

      <ButtonGroup>
        {!isEditing && (
          <Button
            variation="primary"
            size="large"
            onClick={() => setIsEditing(!isEditing)}
          >
            Update
          </Button>
        )}
        {/* <Link target="_blank" to={job.link}>
          <Button size="medium" variation="primary">
            Job Posting
          </Button>
        </Link> */}

        <Button
          variation="danger"
          size="medium"
          onClick={() => {
            handleDelete(job.id);
            navigate("/jobs");
          }}
        >
          Delete Job
        </Button>

        <Button variation="secondary" size="medium" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
      {isEditing && (
        <UpdateJobDetails jobToEdit={job} setIsEditing={setIsEditing} />
      )}
    </DetailContainer>
  );
};
export default JobDetail;
