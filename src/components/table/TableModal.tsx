import React, { useState } from "react";
import DeleteEdit from "../buttons/DeleteEdit";
import Edit from "../buttons/Edit";

export interface Client {
  id: number;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  identification: string;
}

export interface Airship {
  id: number;
  name: string;
  capacity: string;
  flightrange: string;
  speed: string;
  price: string;
}

export interface Flight {
  id: number;
  launchtime: string;
  arrivaltime: string;
  to: string;
  airship: string;
  createdby: string;
}

type DataType = Flight | Airship | Client;

interface TableProps {
	info: DataType[]
	caseType: string
}

const TableModal = ({ info, caseType }: TableProps) => {
	const [data, setData] = useState<DataType[]>(info)

	const editClient = (id: number) => {
		console.log(`Editing client with ID: ${id}`)
	}

	return (
		<div className="relative overflow-x-auto overflow-y-auto max-h-[800px] w-full max-w-[100%] shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						{Object.entries(data[0]).map(([key, value], index) => (
							<th key={index} scope="col" className="px-6 py-3">
								{key}
							</th>
						))}

						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((singledata) => (
						<tr
							key={singledata.id}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							{Object.entries(singledata).map(([key, value]) => (
								<td
									key={key}
									className="px-6 py-3 whitespace-nowrap"
								>
									{value}
								</td>
							))}

							<td className="px-6 py-3 flex whitespace-nowrap">
								<Edit
									id={singledata.id}
									caseType={caseType}
									data={singledata}
								/>
								<DeleteEdit
									id={singledata.id}
									caseType={caseType}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TableModal;