import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { addJob } from "../../services/apiJobs";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";

const Select = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const NewJobForm = () => {
  const { user } = useUser();
  const userId = user?.id;
  const navigate = useNavigate();

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      jobTitle: "",
      companyName: "",
      salary: "",
    },
  });

  const { errors } = formState;

  const onSubmit = async ({
    jobTitle,
    companyName,
    salary,
    status,
    location,
    response,
    link,
  }) => {
    if (salary === "") {
      salary = 0;
    }
    await addJob({
      jobTitle,
      companyName,
      salary,
      status,
      location,
      response,
      link,
    });
    navigate("/jobs");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Job Title" error={errors?.jobTitle?.message}>
        <Input
          type="text"
          id="jobTitle"
          {...register("jobTitle", {
            required: "Job title is required",
          })}
        />
      </FormRow>
      <FormRow label="Company Name" error={errors?.companyName?.message}>
        <Input
          type="text"
          id="companyName"
          {...register("companyName", {
            required: "Company name is required",
          })}
        />
      </FormRow>
      <FormRow label="Salary">
        <Input type="number" id="salary" {...register("salary")} />
      </FormRow>
      <FormRow label="Location">
        <Input type="text" id="location" {...register("location")} />
      </FormRow>
      <FormRow label="Link">
        <Input type="text" id="link" {...register("link")} />
      </FormRow>

      <FormRow label="Status" id="status">
        <Select name="status" id="status" {...register("status")}>
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </Select>
      </FormRow>
      <FormRow label="Response" id="response">
        <Select name="response" id="response" {...register("response")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Button
          variation="danger"
          size="medium"
          type="reset"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button variation="secondary" size="medium" type="reset">
          Clear Form
        </Button>
        <Button variation="primary" size="medium" type="submit">
          Add Job
        </Button>
      </FormRow>
    </Form>
  );
};

export default NewJobForm;
