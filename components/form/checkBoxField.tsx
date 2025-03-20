import { useTsController, useDescription } from "@ts-react/form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const CheckBoxField = () => {
  const { field, error } = useTsController<boolean>();
  const { label } = useDescription();
  
  const handleChange = (e: CheckedState) => {
    if(e!=='indeterminate'){
          field.onChange(e);
    }

  };
  
  return (
    <FormItem className="space-y-1">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Checkbox id="checkbox"
          checked={field.value}
          name={field.name}
          ref={field.ref}
          onBlur={field.onBlur}
          disabled={field.disabled}
          onCheckedChange={handleChange}
          className={error ? "border-destructive" : ""}
        />
      </FormControl>
      {error && <FormMessage>{error.errorMessage}</FormMessage>}
    </FormItem>
  );
};

export default CheckBoxField;