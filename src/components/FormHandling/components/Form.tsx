type FormProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ disabled, children, onSubmit, ...rest }: FormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      {...rest}
    >
      <fieldset disabled={disabled}>{children}</fieldset>
    </form>
  );
}

export default Form;
