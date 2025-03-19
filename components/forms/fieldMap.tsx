import { z } from "zod";
import TextField from "../inputs";

const mapping = [
  [z.string(), TextField],
] as const;

export default mapping