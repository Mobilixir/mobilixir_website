import sendgrid from "@sendgrid/mail";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const body = await req.json();

	const apikey = process.env.SENDGRID_API_KEY;
	if (apikey) {
		sendgrid.setApiKey(apikey);
	} else {
		return new Response("SendGrid API key is not defined", { status: 500 });
	}

	try {
		const mailBody = {
			from: process.env.EMAIL_TO || "",
			subject: body.subject,
			text: body.message,
			html: `<p>from ${body.email} - ${body.name} - ${body.message}</p>`,
			to: process.env.EMAIL_TO || "",
		};

		await sendgrid.send(mailBody);
		return new Response("Email sent successfully", { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			return new Response(error.message, { status: 400 });
		} else {
			return new Response("An unknown error occurred", { status: 500 });
		}
	}
}
