import type { CustomerInfo } from "./types";
import useLookup from "./hooks/useLookup";
import useForm from "./hooks/useForm";
import { FieldInput, FieldRadio, FieldCheckboxGroup } from "./components";

function FormHandling() {
  const { genders, skills } = useLookup();
  const {
    form: customerInfo,
    onSubmit,
    onChange,
  } = useForm<CustomerInfo>({
    firstName: "John",
    lastName: "Smith",
    genderId: "M",
    skills: ["JS", "TS"],
  });

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <legend>Example form</legend>
      <div>
        <label className="form-label" htmlFor="firstName">
          First Name :{" "}
        </label>
        <FieldInput
          onChange={onChange}
          prop="firstName"
          value={customerInfo.firstName}
        />
      </div>
      <div>
        <label className="form-label" htmlFor="lastName">
          Last Name :{" "}
        </label>
        <FieldInput
          onChange={onChange}
          prop="lastName"
          value={customerInfo.lastName}
        />
      </div>
      <div>
        <label className="form-label" htmlFor="gender">
          Gender :{" "}
        </label>
        <FieldRadio
          prop="genderId"
          items={genders}
          onChange={onChange}
          value={customerInfo.genderId}
        />
      </div>
      <div>
        <label htmlFor="skills">Skills : </label>
        <FieldCheckboxGroup
          prop="skills"
          value={customerInfo.skills}
          onChange={onChange}
          items={skills}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
export default FormHandling;
