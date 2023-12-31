import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { ZodError, z } from 'zod';
import type { Actions } from './$types';
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

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

			await resend.emails
				.send({
					from: result.email,
					to: import.meta.env.VITE_HOST_EMAIL,
					subject: 'Message from contact form on StackIT Group website',
					text: 'Message from contact form on StackIT Group website:\n\n' + result.message
					// html: `<strong>${result.message}</strong>`
				})
				.catch((err) => {
					console.log({ err });
					throw err;
				});

			return { success: true };
		} catch (err) {
			console.log({ err });
			const error = err as ZodError;
			const { fieldErrors: errors } = error.flatten();

			return fail(400, { errors, data });
		}
	}
};
