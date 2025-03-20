'use client';

import React from "react";

import FormSchema from "@/schemas/contact";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useContactForm } from "@/hooks/useContactForm";
import  Form  from "@/components/form";


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
          formProps={{
            className: "space-y-6 max-w-md mx-auto p-6 rounded-lg"
          }}
          defaultValues={{ email: '', nome: '', checkbox: undefined, sexo: undefined }}
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
