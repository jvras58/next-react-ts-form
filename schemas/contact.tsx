import { z } from "zod";

const FormSchema = z.object({
  nome: z.string().min(5, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório"),
});

export const FormPlaceholders = {
  nome: "Digite seu nome completo",
  email: "Seu endereço de email",
};

export default FormSchema;