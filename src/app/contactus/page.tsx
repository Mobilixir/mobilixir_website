"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../../utils/send-email";
import Image from "next/image";

export type FormData = {
	name: string;
	email: string;
	message: string;
};

function Contact() {
	const { register, handleSubmit, reset } = useForm<FormData>();

	function onSubmit(data: FormData) {
		sendEmail(data);
		reset();
	}

	return (
		<div className="flex flex-row mx-auto justify-between items-center w-full mt-24">
			<div className="items-center justify-center h-auto w-1/2 flex flex-col">
				<Image
					src="/three.svg"
					alt="Logo"
					width={0}
					height={0}
					className=" object-cover h-auto w-auto"
				/>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="items-center justify-center h-auto w-1/2 flex flex-col "
			>
				<div className="mb-5 w-3/4">
					<label
						htmlFor="name"
						className="mb-3 block text-base font-medium text-black"
					>
						Full Name
					</label>
					<input
						type="text"
						placeholder="Full Name"
						className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
						{...register("name", { required: true })}
					/>
				</div>
				<div className="mb-5 w-3/4">
					<label
						htmlFor="email"
						className="mb-3 block text-base font-medium text-black"
					>
						Email Address
					</label>
					<input
						type="email"
						placeholder="example@domain.com"
						className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
						{...register("email", { required: true })}
					/>
				</div>
				<div className="mb-5 w-3/4">
					<label
						htmlFor="message"
						className="mb-3 block text-base font-medium text-black"
					>
						Message
					</label>
					<textarea
						rows={4}
						placeholder="Type your message"
						className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
						{...register("message", { required: true })}
					></textarea>
				</div>
				<div>
					<button className="hover:shadow-form rounded-full bg-black py-3 px-8 text-base font-semibold text-white outline-none">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
export default Contact;
