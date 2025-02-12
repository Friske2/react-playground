import { Lookup } from "../types";
type TypeRadioProps = {
  value: string | number;
  prop: string;
  items: Lookup[];
  onChange: (key: string, value: string) => void;
};
function FieldRadio({ prop, value, items, onChange }: TypeRadioProps) {
  return (
    <>
      {items.map((item: Lookup) => (
        <div className="form-check" key={item.value}>
          <input
            className="form-check-input"
            onChange={(e) => {
              onChange(prop, e.target.value);
            }}
            type="radio"
            name={prop}
            value={item.value}
            checked={value == item.value}
          />
          <label className="form-check-label" htmlFor={"gender_" + item.value}>
            {item.label}
          </label>
        </div>
      ))}
    </>
  );
}

export default FieldRadio;
