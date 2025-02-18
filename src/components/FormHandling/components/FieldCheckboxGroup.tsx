import { Lookup } from "../types";
import FieldCheckbox from "./FieldCheckbox";
type TypeCheckboxProps = {
  value: (string | number)[];
  prop: string;
  items: Lookup[];
  onChange: (key: string, value: unknown[]) => void;
};
function FieldCheckboxGroup({
  prop,
  onChange,
  items,
  value,
}: TypeCheckboxProps) {
  const checkBoxChange = (payload: unknown, checked: boolean) => {
    console.log("payload", payload, checked);
    let result: unknown[] = [];
    if (checked && value.length == 0) {
      result = [payload];
    } else if (checked) {
      result = [...value, payload];
    } else {
      // uncheck
      const indexSkill = value.findIndex((item) => item === payload);
      if (indexSkill > -1) {
        result = value.filter((item) => item !== payload);
      }
    }
    onChange(prop, result);
  };
  return (
    <>
      {items.map((item: Lookup) => (
        <div className="form-check" key={item.value}>
          <FieldCheckbox
            onChange={(e) => {
              checkBoxChange(e.target.value, e.target.checked);
            }}
            checked={value.includes(item.value)}
            value={item.value}
          >
             <label className="form-check-label" htmlFor={"skills_" + item.value}>
              {item.label}
            </label>
          </FieldCheckbox>
         
        </div>
      ))}
    </>
  );
}

export default FieldCheckboxGroup;
