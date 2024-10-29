import React, { useEffect, useState } from "react"
import DeleteEdit from "../buttons/DeleteEdit"
import { EmptyTableCard } from "../cards/EmptyTableCard"

export interface Client {
	id: number
	firstname: string
	lastname: string
	phonenumber: string
	email: string
	identification: string
}

export interface Airship {
	id: number
	name: string
	capacity: string
	flightrange: string
	speed: string
	price: string
}

export interface Flight {
	id: number
	launchtime: string
	arrivaltime: string
	to: string
	airship: string
	createdby: string
}

type DataType = Flight | Airship | Client

interface TableProps {
	info: DataType[]
	caseType: string
}

const TableModal = ({ info, caseType }: TableProps) => {
	const [data, setData] = useState<DataType[]>([])

	const editClient = (id: number) => {
		console.log(`Editing client with ID: ${id}`)
	}

	useEffect(() => {
		setData(info)
	}, [info])

	return (
		<div className="relative overflow-x-auto overflow-y-auto max-h-[800px] w-full max-w-[100%] shadow-md sm:rounded-lg">
			{data.length > 0 ? (
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							{Object.entries(data[0]).map(
								([key, value], index) => (
									<th
										key={index}
										scope="col"
										className="px-6 py-3"
									>
										{key}
									</th>
								)
							)}

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
								{Object.entries(singledata).map(
									([key, value]) => (
										<td
											key={key}
											className="px-6 py-3 whitespace-nowrap"
										>
											{value}
										</td>
									)
								)}

								<td className="px-6 py-3 flex whitespace-nowrap">
									<button
										className="bg-transparent p-2"
										onClick={() =>
											editClient(singledata.id)
										}
									>
										<svg
											className="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
											/>
										</svg>
									</button>

									<DeleteEdit
										id={singledata.id}
										caseType={caseType}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<EmptyTableCard />
			)}
		</div>
	)
}

export default TableModal
