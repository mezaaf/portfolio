import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormSchema, contactFormSchema } from "../forms/contact";
import { sendContactAction } from "../actions/sendContactAction";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data: ContactFormSchema) => {
    setIsLoading(true);
    const res = await sendContactAction(data);
    if (res.success) {
      form.reset();
      toast.success("Success", { description: res.statusText });
    } else {
      toast.error("Failed", { description: res.statusText });
    }
    setIsLoading(false);
  });

  return {
    isLoading,
    onSubmit,
    form,
  };
};
