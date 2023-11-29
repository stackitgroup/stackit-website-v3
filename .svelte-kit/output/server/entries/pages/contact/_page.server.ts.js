import { f as fail } from "../../../chunks/index.js";
import { z } from "zod";
import { Resend } from "resend";
const VITE_RESEND_API_KEY = "6LdeLRIpAAAAAArIoyirsr2LclWS7oWS7_PH2brH";
const resend = new Resend(VITE_RESEND_API_KEY);
const requestSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  fullName: z.string().min(3).max(50),
  message: z.string().min(20).max(500)
});
const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    try {
      const result = requestSchema.parse(data);
      console.log(result.email);
      const email = await resend.emails.send({
        from: result.fullName,
        to: "alefrank.martinez@stackitgroup.com",
        subject: "Message from contact form on StackIT Group website",
        reply_to: result.email,
        html: `<strong>${result.message}</strong>`
      });
      console.log(email);
      return { success: true };
    } catch (err) {
      const error = err;
      const { fieldErrors: errors } = error.flatten();
      return fail(400, { errors, data });
    }
  }
};
export {
  actions
};
