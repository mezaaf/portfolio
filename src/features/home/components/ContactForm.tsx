"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader, SendHorizonalIcon } from "lucide-react";
import { Controller } from "react-hook-form";
import { useContactForm } from "../hooks/useContactForm";

const ContactForm = () => {
  const { isLoading, onSubmit, form } = useContactForm();

  return (
    <form onSubmit={onSubmit}>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                placeholder="Enter your name"
                className="h-12"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                className="h-12"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                placeholder="Write your message..."
                className="min-h-[100px]"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field>
          <Button disabled={isLoading} className="w-fit! group">
            {isLoading ? (
              <>
                <Loader className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Now{" "}
                <SendHorizonalIcon className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
              </>
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
