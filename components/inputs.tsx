import { useTsController, useDescription } from "@ts-react/form";
import { ChangeEvent } from "react";
import { Input } from "./ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form";

const TextField = () => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
  };
  
  return (
    <FormItem className="space-y-1">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input 
          value={field.value}
          name={field.name}
          ref={field.ref}
          onBlur={field.onBlur}
          disabled={field.disabled}
          onChange={handleChange}
          placeholder={placeholder}
          className={error ? "border-destructive" : ""}
        />
      </FormControl>
      {error && <FormMessage>{error.errorMessage}</FormMessage>}
    </FormItem>
  );
};

export default TextField;