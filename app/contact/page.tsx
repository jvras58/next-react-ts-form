'use client';

import ContactForm from "@/components/forms/contactForm";
import { z } from "zod";
import FormSchema from "@/schemas/contact";
import { Toaster } from "@/components/ui/sonner";

export default function ContactPage() {
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Dados do formulário:", data);
      return true;
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-md mx-auto">
        <ContactForm onSubmit={handleSubmit} />
      </div>
      <Toaster />
    </div>
  );
}