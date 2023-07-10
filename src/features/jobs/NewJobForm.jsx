import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Select from "../../ui/Select";

const NewJobForm = () => {
  return (
    <Form>
      <FormRow label="Job Title">
        <Input type="text" id="jobTitle" />
      </FormRow>
      <FormRow label="Company Name">
        <Input type="text" />
      </FormRow>
      <FormRow label="Salary">
        <Input type="number" />
      </FormRow>
      <FormRow label="Status">
        <Select
          options={[
            {
              label: "Applied",
              value: "applied",
            },
            {
              label: "Interviewing",
              value: "interviewing",
            },
            {
              label: "Offer",
              value: "offer",
            },
            {
              label: "Rejected",
              value: "rejected",
            },
          ]}
        />
      </FormRow>
    </Form>
  );
};

export default NewJobForm;
