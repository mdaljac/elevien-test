import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { SelectCustom } from "./FormElements";

export default function Modal({
	modalOpen: open,
	setModalOpen: setOpen,
	countries,
}) {
	const [country, setCountry] = useState(countries[0]);

	const programs = [
		{ name: "Obavezni program - Mlađe djevojčice" },
		{ name: "Univerzalni program" },
	];
	const [programName, setProgramName] = useState(programs[0]);

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		country: country.code,
		programName: programName.name,
		dateOfBirth: "",
		club: "",
		teamName: "",
		phone: "",
	});

	const setData = (e) => {
		e.preventDefault();
		setForm((prevData) => {
			return { ...prevData, [e.target.name]: e.target.value };
		});
	};

	const onSubmit = () => {
		form["phone"] = `+${country.phoneCode}${form.phone}`;

		fetch("https://elevien-fe-job.free.beeceptor.com/application", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form),
		})
			.then((response) => console.log(response))
			.then((data) => console.log(data));

		setForm((prevData) => {
			let obj = { ...prevData };
			Object.keys(obj).forEach((i) => (obj[i] = ""));
			obj["country"] = countries[0].code;
			return obj;
		});
	};

	const setSelectedCountry = (country) => {
		setCountry(() => country);
		setForm((prevData) => {
			return { ...prevData, country: country.code };
		});
	};

	const setSelectedProgramName = (program) => {
		setProgramName(() => program);
		setForm((prevData) => {
			return { ...prevData, programName: program.name };
		});
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="fixed inset-0 bg-overlay bg-opacity-60 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl divide-y-2 pt-7 px-10 pb-8">
								<div className="bg-white pb-7">
									<div className="sm:flex sm:items-start">
										<div>
											<div className="flex items-center justify-between">
												<Dialog.Title as="h3" className="text-xl font-bold">
													Apply gymnast
												</Dialog.Title>
												<button onClick={() => setOpen(false)}>
													<XMarkIcon className="w-6 h-6" />
												</button>
											</div>
											<div className="mt-10">
												<form
													className="flex flex-wrap gap-x-3 gap-y-6"
													id="appForm">
													<div>
														<label htmlFor="firstName">First name</label>
														<div className="mt-1">
															<input
																type="text"
																name="firstName"
																placeholder="Enter name"
																className="w-44"
																value={form.firstName}
																onChange={(e) => setData(e)}
															/>
														</div>
													</div>

													<div>
														<label htmlFor="lastName">Last name</label>
														<div className="mt-1">
															<input
																type="text"
																name="lastName"
																placeholder="Enter last name"
																className="w-56"
																value={form.lastName}
																onChange={(e) => setData(e)}
															/>
														</div>
													</div>

													<div>
														<label htmlFor="country">Country</label>
														<div className="mt-1">
															<SelectCustom
																items={countries}
																selected={country}
																callback={(country) =>
																	setSelectedCountry(country)
																}
															/>
														</div>
													</div>

													<div className="mr-3">
														<label htmlFor="programName">
															Program and category
														</label>
														<div className="mt-1">
															<SelectCustom
																items={programs}
																selected={programName}
																callback={(programName) =>
																	setSelectedProgramName(programName)
																}
															/>
														</div>
													</div>

													<div>
														<label htmlFor="dateOfBirth">Date of birth</label>
														<div className="mt-1">
															<input
																type="text"
																name="dateOfBirth"
																placeholder="Enter date"
																className="w-32"
																value={form.dateOfBirth}
																onChange={(e) => setData(e)}
															/>
														</div>
													</div>

													<div className="mr-3">
														<label htmlFor="club">Club (optional)</label>
														<div className="mt-1">
															<input
																type="text"
																name="club"
																placeholder="Enter club name"
																className="w-64"
																value={form.club}
																onChange={(e) => setData(e)}
															/>
														</div>
													</div>

													<div>
														<label htmlFor="teamName">Team (optional)</label>
														<div className="mt-1">
															<input
																type="text"
																name="teamName"
																placeholder="Team name"
																className="w-64"
																value={form.teamName}
																onChange={(e) => setData(e)}
															/>
														</div>
													</div>

													<div>
														<label htmlFor="phone">Phone (optional)</label>
														<div className="mt-1 relative">
															<span className="absolute left-2 top-1/2 transform -translate-y-1/2">
																+{country.phoneCode}
															</span>
															<input
																type="text"
																name="phone"
																placeholder="Phone Number"
																className="w-44 pl-14"
																value={form.phone}
																onChange={(e) => setData(e)}
															/>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="sm:flex sm:items-center sm:flex-row-reverse pt-4">
									<Button type="submit" callback={() => onSubmit()}>
										Save
									</Button>
									<button
										type="button"
										className="underline underline-offset-4 text-sm mr-6"
										onClick={() => setOpen(false)}>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
