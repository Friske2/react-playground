import { useCallback } from "react";
type TypeInputProps = {
  value: string;
  prop: string;
  onChange: (key: string, value: string) => void;
};
function FieldInput(props: TypeInputProps) {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(props.prop, e.target.value);
    },
    [props.prop, props.onChange]
  );
  return (
    <input
      className="form-control"
      onChange={onChange}
      type="text"
      value={props.value}
    />
  );
}

export default FieldInput;
