import Form from "../../ui/Form";


const UpdateJobDetails = () => {
  return <Form onSubmit={handleSubmit(onSubmit)}>
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
    <Button variation="secondary" size="medium" type="reset">
      Cancel
    </Button>
    <Button variation="primary" size="medium" type="submit">
      Add Job
    </Button>
  </FormRow>
</Form>
};

export default UpdateJobDetails;
