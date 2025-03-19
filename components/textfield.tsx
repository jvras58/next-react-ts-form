import { createTsForm } from "@ts-react/form";
import { z } from "zod";
import TextField from "./inputs";

const mapping = [
  [z.string(), TextField],
] as const;

const Form = createTsForm(mapping);

export default Form;