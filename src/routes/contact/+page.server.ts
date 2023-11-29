import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { ZodError, z } from 'zod';
import type { Actions } from './$types';
const VITE_RESEND_API_KEY = import.meta.env.VITE_GOOGLE_RECAPTCHA_PUBLIC_KEY;
const resend = new Resend(VITE_RESEND_API_KEY);

const requestSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	fullName: z.string().min(3).max(50),
	message: z.string().min(20).max(500)
});

type ContactForm = {
	email?: string;
	fullName?: string;
	message?: string;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data: ContactForm = Object.fromEntries(await request.formData());
		try {
			const result = requestSchema.parse(data);
			console.log(result.email);

			const email = await resend.emails.send({
				from: result.fullName,
				to: 'alefrank.martinez@stackitgroup.com',
				subject: 'Message from contact form on StackIT Group website',
				reply_to: result.email,
				html: `<strong>${result.message}</strong>`
			});

			console.log(email);

			return { success: true };
		} catch (err) {
			const error = err as ZodError;
			const { fieldErrors: errors } = error.flatten();
			return fail(400, { errors, data });
		}
	}
};
