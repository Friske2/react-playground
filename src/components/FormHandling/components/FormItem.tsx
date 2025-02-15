type FormItemProps = {
  prop: string;
  label: string;
  children: React.ReactNode;
};
function FormItem({ label, children, ...rest }: FormItemProps) {
  return (
    <div {...rest}>
      <label>{label}</label>
      {children}
    </div>
  );
}

export default FormItem;
