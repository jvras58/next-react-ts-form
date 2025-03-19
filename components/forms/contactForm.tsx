'use client';

import React from "react";
import { z } from "zod";
import mapping from "@/components/forms/fieldMap"
import { createTsForm } from "@ts-react/form";
import FormSchema from "@/schemas/contact";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
}

const Form = createTsForm(mapping);


const ContactForm = ({ onSubmit }: ContactFormProps) => {
  return (
    <Form
      schema={FormSchema}
      onSubmit={onSubmit}
      renderAfter={() => <Button type="submit">Enviar</Button>}
    />
  );
};

export default ContactForm;