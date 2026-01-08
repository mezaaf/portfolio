import { ContactFormSchema } from "@/features/home/forms/contact";
import { resend } from "@/lib/resend";

export const sendContactEmail = async (data: ContactFormSchema) => {
  await resend.emails.send({
    from: "Mezaaf <onboarding@resend.dev>",
    to: ["mezafuwandhana@gmail.com"],
    subject: "New Message from mezaaf's site",
    html: `
      <h3>Pesan Kontak Baru</h3>
      <p><b>Name:</b> ${data.name} </p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Message:</b></p>
      <p>${data.message}</p>
    `,
  });
};
