import { FormData } from "@/app/contactus/page";

export function sendEmail(data: FormData) {
	const apiEndpoint = "/api/email";

	fetch(apiEndpoint, {
		method: "POST",
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((response) => {
			alert(response.message);
		})
		.catch((err) => {
			alert(err);
		});
}

export async function getData() {
	const apiEndpoint = "/api/email";
	let response = await fetch(apiEndpoint);
	let data = response.json();
	return data;
}
