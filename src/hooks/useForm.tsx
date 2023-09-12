import { useState } from "react";

const useForm = (initialData: any, onValidate: any) => {
  const [form, setForm] = useState(initialData);
  const [isValid, setisValid] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const err = onValidate(form);
    setisValid(err);
  };

  return { form, isValid, handleChange, handleSubmit };
};

export default useForm;
