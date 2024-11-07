"use client";

import { useState, useEffect } from "react";
import { FormData } from "../contactus/page";
import { getData } from "../../../utils/send-email";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
function Enquiries() {
	const [records, setRecords] = useState<FormData[]>([]);
	const columns: ColumnDef<FormData>[] = [
		{
			accessorKey: "name",
			header: "Name",
		},
		{
			accessorKey: "email",
			header: "Email",
		},
		{
			accessorKey: "message",
			header: "Message",
		},
	];

	useEffect(() => {
		async function fetchData() {
			const records = await getData();
			setRecords(records);
		}

		fetchData();
	}, []);

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<DataTable columns={columns} data={records} />
		</div>
	);
}

export default Enquiries;
