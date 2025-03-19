'use client';

import React, { useState } from "react";
import { z } from "zod";
import mapping from "@/components/forms/fieldMap"
import { createTsForm } from "@ts-react/form";
import FormSchema from "@/schemas/contact";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

interface ContactFormProps {
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
}

const Form = createTsForm(mapping);

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    try {
      onSubmit(data);
      toast.success("Formulário enviado!", { 
        description: "Entraremos em contato em breve."
      });
    } catch (error) {
      toast.error("Erro ao enviar", {
        description: "Por favor, tente novamente mais tarde."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Formulário de Contato</CardTitle>
        <CardDescription>Preencha os dados abaixo para entrar em contato conosco.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form
          schema={FormSchema}
          onSubmit={handleSubmit}
          defaultValues={{email:'', nome:''}}
          renderAfter={() => (
            <Button 
              type="submit" 
              className="w-full mt-4" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar mensagem"
              )}
            </Button>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default ContactForm;