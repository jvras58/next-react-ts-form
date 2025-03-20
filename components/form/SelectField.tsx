import { useTsController, useDescription } from "@ts-react/form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const SEXO_OPTIONS = [
  { value: "H", label: "Homem" },
  { value: "M", label: "Mulher" },
  { value: "O", label: "Outros" }
];

const SelectField = () => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();
  
  const handleChange = (value: string) => {
    field.onChange(value);
  };
  
  return (
    <FormItem className="space-y-1">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Select 
          value={field.value} 
          name={field.name}
          onValueChange={handleChange}
          disabled={field.disabled}
        >
          <SelectTrigger className={error ? "border-destructive" : ""}>
            <SelectValue placeholder={placeholder || "Selecione uma opção"} />
          </SelectTrigger>
          <SelectContent>
            {SEXO_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      {error && <FormMessage>{error.errorMessage}</FormMessage>}
    </FormItem>
  );
};

export default SelectField;