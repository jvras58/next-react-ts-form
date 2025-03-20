import { z } from "zod";
import TextField from "./textField";
import CheckBoxField from "./checkBoxField";
import SelectField from "./SelectField";

const mapping = [
  [z.string(), TextField],
  [z.boolean(), CheckBoxField],
  [z.enum(['']), SelectField] as const,

] as const;

export default mapping