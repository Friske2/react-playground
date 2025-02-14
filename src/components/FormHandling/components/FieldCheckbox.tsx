type FieldCheckboxProps = {
    checked: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
}
function FieldCheckbox({children, checked,value, onChange }: FieldCheckboxProps ) {
    return (
        <>
            <input className="form-check-input" type="checkbox" checked={checked} value={value} onChange={onChange} />
            {children}
        </>
    )
}

export default FieldCheckbox;