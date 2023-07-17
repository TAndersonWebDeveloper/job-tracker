import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useEditJob } from "./useEditJob";

import Button from "../../ui/Button";

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

const UpdateJobDetails = ({ jobToEdit, setIsEditing }) => {
  const { id: editId, ...editValues } = jobToEdit;

  const { editJob } = useEditJob();

  //React hook form for editing a job
  const { register, handleSubmit } = useForm({
    defaultValues: {
      jobTitle: editValues.job_title,
      companyName: editValues.company,
      salary: editValues.salary,
      location: editValues.location,
      status: editValues.status,
      response: editValues.response,
      link: editValues.link,
    },
  });

  //On submit handler for editing a job
  function onSubmit(data) {
    editJob({
      newJob: {
        job_title: data.jobTitle,
        company: data.companyName,
        salary: data.salary,
        location: data.location,
        status: data.status,
        response: data.response,
        link: data.link,
      },
      id: editId,
    });
    setIsEditing(false);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Job Title">
        <Input
          type="text"
          id="jobTitle"
          {...register("jobTitle", {
            required: "Job title is required",
          })}
        />
      </FormRow>
      <FormRow label="Company Name">
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
      <FormRow label="Job Posting Url">
        <Input type="text" id="location" {...register("link")} />
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
          variation="secondary"
          size="medium"
          type="reset"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </Button>
        <Button variation="primary" size="medium" type="submit">
          Update Job
        </Button>
      </FormRow>
    </Form>
  );
};

export default UpdateJobDetails;
