import { useForm } from "react-hook-form";

function Form() {
	const { register } = useForm();
	return (
		<form className="flex flex-wrap gap-x-3 gap-y-6">
			<div>
				<label htmlFor="firstName">First name</label>
				<div className="mt-1">
					<input
						type="text"
						name="firstName"
						placeholder="Enter name"
						className="w-44"
						{...register("firstName", {
							required: true,
							maxLength: 80,
						})}
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
						{...register("lastName", {
							required: true,
							maxLength: 100,
						})}
					/>
				</div>
			</div>

			<div>
				<label htmlFor="country">Country</label>
				<div className="mt-1">
					<select
						name="country"
						className="w-28"
						{...register("country", { required: true })}
						onChange={() => setPhone()}>
						<option value="CRO">CRO</option>
						<option value="BIH">BIH</option>
						<option value="RS">RS</option>
					</select>
				</div>
			</div>

			<div className="mr-3">
				<label htmlFor="programName">Program and category</label>
				<div className="mt-1">
					<select
						name="programName"
						className="w-96"
						{...register("programName", {
							required: true,
						})}>
						<option value="Obavezni program - Mlađe djevojčice">
							Obavezni program - Mlađe djevojčice
						</option>
						<option value=" Neki drugi program"> Neki drugi program</option>
					</select>
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
						{...register("dateOfBirth", {
							required: true,
						})}
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
						{...register("club", {})}
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
						{...register("teamName", {})}
					/>
				</div>
			</div>

			<div>
				<label htmlFor="phone">Phone (optional)</label>
				<div className="mt-1 relative">
					<span className="absolute left-2 top-1/2 transform -translate-y-1/2">
						+385
					</span>
					<input
						type="text"
						name="phone"
						placeholder="Phone Number"
						className="w-44 pl-14"
						{...register("phone", {})}
					/>
				</div>
			</div>
		</form>
	);
}

export default Form;
