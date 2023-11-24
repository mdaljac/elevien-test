import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ReactCountryFlag from "react-country-flag";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Search() {
	return (
		<div className="relative">
			<MagnifyingGlassIcon className="w-6 h-6 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
			<input type="text" placeholder="Search gymnasts" className="px-11 py-3" />
		</div>
	);
}

function SelectBasic({ name }) {
	return (
		<div>
			<label htmlFor={name} className="capitalize font-regular">
				{name}:
			</label>
			<select name={name} id={name} className="border-none">
				<option value="">All</option>
			</select>
		</div>
	);
}

// Tailwind UI Select
function SelectCustom({ items, callback, selected }) {
	return (
		<Listbox value={selected} onChange={callback}>
			{({ open }) => (
				<div className="relative">
					<Listbox.Button className="relative w-full cursor-default rounded-[4px] bg-white py-2.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm">
						<span className="flex items-center">
							{selected.flag && (
								<ReactCountryFlag
									className="mr-1"
									countryCode={selected.code}
									svg
								/>
							)}
							<span className="ml-3 block truncate">{selected.name}</span>
						</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
							<ChevronDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>

					<Transition
						show={open}
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{items.map((item) => (
								<Listbox.Option
									key={item.name}
									className={({ active }) =>
										classNames(
											active ? "bg-primary text-white" : "text-gray-900",
											"relative cursor-default select-none py-2 pl-3 pr-9",
										)
									}
									value={item}>
									{({ selected, active }) => (
										<>
											<div className="flex items-center">
												{item.flag && (
													<ReactCountryFlag
														className="mr-1"
														countryCode={item.code}
														svg
													/>
												)}
												<span
													className={classNames(
														selected ? "font-semibold" : "font-normal",
														"ml-3 block truncate",
													)}>
													{item.name}
												</span>
											</div>

											{selected ? (
												<span
													className={classNames(
														active ? "text-white" : "text-indigo-600",
														"absolute inset-y-0 right-0 flex items-center pr-4",
													)}></span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			)}
		</Listbox>
	);
}

export { Search, SelectBasic, SelectCustom };
