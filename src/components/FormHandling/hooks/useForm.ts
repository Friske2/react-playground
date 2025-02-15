import { useState, useEffect } from "react";

function useForm<T>(initValue: T) {
  const [form, setForm] = useState<T>(initValue);
  useEffect(() => {
    return () => {
      setForm(initValue);
    };
  }, []);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", form);
  };
  const onChange = (key: string, value: unknown) => {
    setForm({
      ...form,
      [key]: value,
    });
  };
  return {
    form,
    onSubmit,
    onChange,
  };
}

export default useForm;
