import { useTsController, useDescription } from "@ts-react/form";
import { ChangeEvent } from "react";

const TextField = () => {
  const { field } = useTsController<string>();
  const { label, placeholder } = useDescription();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
  };
  
  return (
    <div>
      <label>{label}</label>
      <input 
        value={field.value ?? ""} 
        name={field.name}
        ref={field.ref}
        onBlur={field.onBlur}
        disabled={field.disabled}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;