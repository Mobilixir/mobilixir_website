import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";

// Helper function to get the path to data.json
// Helper function to get the path to data.json
const getDataFilePath = () => path.join(process.cwd(), "public", "data.json");

// Helper function to initialize the JSON file if it doesn't exist
async function initializeJsonFile() {
	const filePath = getDataFilePath();
	if (!existsSync(filePath)) {
		await fs.writeFile(filePath, JSON.stringify([]));
	}
}

// Helper function to read records from data.json
async function readRecords() {
	const filePath = getDataFilePath();
	await initializeJsonFile(); // Ensure the file exists
	const data = await fs.readFile(filePath, "utf8");
	return JSON.parse(data);
}

// Helper function to write records to data.json
async function writeRecords(
	records: Array<{ name: string; email: string; message: string }>
) {
	const filePath = getDataFilePath();
	await fs.writeFile(filePath, JSON.stringify(records, null, 2));
}

// Handle GET and POST requests
export async function GET() {
	const records = await readRecords();
	return NextResponse.json(records);
}

export async function POST(request: Request) {
	const { name, email, message } = await request.json();

	if (!name || !email || !message) {
		return NextResponse.json(
			{ error: "All fields are required" },
			{ status: 400 }
		);
	}

	const records = await readRecords();
	const newRecord = { name, email, message };

	// Append the new record
	records.push(newRecord);

	await writeRecords(records);

	return NextResponse.json({ message: "Thank you. We will contact you soon." });
}
