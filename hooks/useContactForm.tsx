import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import FormSchema from "@/schemas/contact";

export type ContactFormData = z.infer<typeof FormSchema>;

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simula uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Dados do formulário:", data);
      toast.success("Formulário enviado!", { 
        description: "Entraremos em contato em breve."
      });
    } catch (error) {
      console.error("Erro na submissão:", error);
      toast.error("Erro ao enviar", {
        description: "Por favor, tente novamente mais tarde."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitContact };
};
