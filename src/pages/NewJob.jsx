import Heading from "../ui/Heading";
import NewJobForm from "../features/jobs/NewJobForm";

const NewJob = () => {
  return (
    <div>
      <Heading as="h1">Track New Job</Heading>
      <NewJobForm />
    </div>
  );
};

export default NewJob;
