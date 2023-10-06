import React from "react";
import { FormProvider as Form } from "react-hook-form";

export default function FormProvider({ children, onSubmit, methods }) {
    
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} noValidate>
        {children}
      </form>
    </Form>
  );
}
