import { z } from "zod";

const FormSchema = z.object({
  nome: z.string().min(5, "Nome é obrigatório").describe("Nome // Digite seu nome"),
  email: z.string().min(1, "Email é obrigatório").describe("Email // Digite seu email"),
});


export default FormSchema;