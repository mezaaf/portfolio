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
              <FieldLabel
                htmlFor="name"
                className="text-base md:text-lg xl:text-xl"
              >
                Name
              </FieldLabel>
              <Input
                id="name"
                placeholder="Enter your name"
                className="h-12 text-sm md:text-base xl:text-lg"
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
              <FieldLabel
                htmlFor="email"
                className="text-base md:text-lg xl:text-xl"
              >
                Mailling contact info
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="h-12 text-sm md:text-base xl:text-lg"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor="phone"
                className="text-base md:text-lg xl:text-xl"
              >
                Calling contact info
              </FieldLabel>
              <Input
                id="phone"
                type="number"
                placeholder="Phone number"
                className="h-12 text-sm md:text-base xl:text-lg"
                onWheel={(e) => e.currentTarget.blur()}
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
              <FieldLabel
                htmlFor="message"
                className="text-base md:text-lg xl:text-xl"
              >
                Details
              </FieldLabel>
              <Textarea
                id="message"
                placeholder="Please describe your project or question..."
                className="min-h-[100px] text-sm md:text-base xl:text-lg"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field>
          <Button
            disabled={isLoading}
            className="group bg-my-black rounded-full p-8 text-lg md:text-xl xl:text-2xl"
          >
            {isLoading ? (
              <>
                <Loader className="size-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Submit
                <SendHorizonalIcon className="size-5 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
              </>
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
