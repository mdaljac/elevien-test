import { createContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import Button from "./components/Button";
import Label from "./components/Label";
import Table from "./components/Table/Table";
import { Search, SelectBasic } from "./components/FormElements";
import Modal from "./components/Modal";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ReactCountryFlag from "react-country-flag";
import { getCountries } from "./api";

function App() {
	const [applications, setApplications] = useState([]);
	const [countries, setCountries] = useState([]);
	const [accordionId, setAccordionId] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const tableHeaders = [
		"Name",
		"Discipline",
		"Program",
		"Category",
		"Team",
		"Status",
		"Date",
	];

	useEffect(() => {
		fetch("https://elevien-fe-job.free.beeceptor.com/applications")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setApplications(data);
			})
			.catch((error) => console.error(error));

		getCountries().then((data) => setCountries(data));
	}, []);

	return (
		<>
			<div>
				<Header />
				<div className="container">
					<PageHeader>
						<h2 className="text-2xl font-bold">My Applications</h2>
						<div className="flex items-center gap-x-4">
							<Button callback={() => setModalOpen(true)}>
								New application
							</Button>
							<Button variant="gray">
								<span className="inline-block w-2.5 h-2.5 bg-success rounded-full mr-2.5"></span>{" "}
								Open
							</Button>
						</div>
					</PageHeader>

					{/* filters */}
					<div className="mb-7">
						<form className="flex items-center gap-x-5">
							<Search />
							<SelectBasic name="discipline" />
							<SelectBasic name="program" />
							<SelectBasic name="category" />
							<SelectBasic name="status" />
						</form>
					</div>

					{/* data table */}
					<div className="mb-10">
						<h3 className="text-lg font-bold mb-3">
							All requests ({applications.length})
						</h3>
						<Table headers={tableHeaders} classes="grid grid-cols-8">
							{applications.map((application, i) => (
								<li
									className="even:bg-gray-50 cursor-pointer"
									key={application.id}
									onClick={() => setAccordionId(i)}>
									<div className="grid grid-cols-8 items-center px-6 py-4">
										<div className="flex flex-col">
											<span>{` ${application.firstName} ${application.lastName} `}</span>
											<span className="text-xs text-body-secondary">
												<ReactCountryFlag
													className="mr-1"
													countryCode={application.country}
													svg
												/>
												{application.club}
											</span>
										</div>
										<span className="py-4">{application.discipline}</span>
										<span className="py-4">{application.programName}</span>
										<span className="py-4">{application.categoryName}</span>
										<span className="py-4">{application.teamName}</span>
										<span className="py-4">
											<Label type={application.status} />
										</span>
										<span className="py-4 text-xs">
											{dayjs(application.date).format("DD.MM.YYYY. HH:mm")}
										</span>
										<span className="py-4 ml-auto">
											<ChevronDownIcon
												className={`h-6 w-6 transform transition-transform ${
													accordionId === i ? "rotate-180" : ""
												}`}
											/>
										</span>
										{/* accordion data */}
										<div
											className={`row-start-2 col-start-2 col-end-8 grid grid-cols-6 border-t pt-3 ${
												accordionId === i ? "block" : "hidden"
											}`}>
											<div className="col-start-2 col-span-2 flex flex-col text-xs">
												<span>
													<span className="font-bold mr-1">Date of birth:</span>
													{dayjs(application.dateOfBirth).format("DD.MM.YYYY.")}
												</span>
												<span>
													<span className="font-bold mr-1">Phone number:</span>
													<a href={`tel:${application.phone}`}>
														{application.phone}
													</a>
												</span>
											</div>
										</div>
									</div>
								</li>
							))}
						</Table>
					</div>
				</div>
			</div>

			{countries.length && (
				<Modal
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
					countries={countries}
				/>
			)}
		</>
	);
}

export default App;
