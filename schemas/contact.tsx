import { z } from "zod";

enum Sexo {
  H = "H",
  M = "M",
  O = "O"
}

const FormSchema = z.object({
  nome: z.string().min(5, "Nome é obrigatório").describe("Nome // Digite seu nome"),
  email: z.string().min(1, "Email é obrigatório").describe("Email // Digite seu email"),
  checkbox: z.boolean().optional().describe("checkbox"),
  sexo: z.enum(["H", "M", "O"], {
    required_error: "Selecione seu sexo",
  }).describe("Sexo"),
});

export default FormSchema;