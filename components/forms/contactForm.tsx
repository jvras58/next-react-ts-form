'use client';

import React from "react";
import mapping from "@/components/forms/fieldMap";
import { createTsForm } from "@ts-react/form";
import FormSchema from "@/schemas/contact";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useContactForm } from "@/hooks/useContactForm";

const Form = createTsForm(mapping);

const ContactForm = () => {
  const { isSubmitting, submitContact } = useContactForm();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Formulário de Contato</CardTitle>
        <CardDescription>Preencha os dados abaixo para entrar em contato conosco.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form
          schema={FormSchema}
          onSubmit={submitContact}
          defaultValues={{ email: '', nome: '' }}
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
