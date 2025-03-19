'use client';

import ContactForm from "@/components/forms/contactForm";
import { z } from "zod";
import FormSchema from "@/schemas/contact";

export default function ContactPage() {
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      console.log("Dados do formulário:", data);
      
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Entre em contato</h1>
      <div className="max-w-md">
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}