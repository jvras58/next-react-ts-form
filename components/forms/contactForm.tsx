'use client';

import React from "react";
import { z } from "zod";
import Form from "@/components/textfield"
import FormSchema from "@/schemas/contact";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  onSubmit: (data: z.infer<typeof FormSchema>) => void;
}

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