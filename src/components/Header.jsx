import elevienLogo from "../assets/Logo.svg";

function Header() {
	return (
		<>
			<div className="shadow-md">
				<div className="container flex items-center justify-between py-4">
					<div className="flex items-center gap-x-11">
						<a href="#">
							<img src={elevienLogo} alt="Elevien app logo" />
						</a>
						<div className="flex items-center gap-x-3 text-lg">
							<h1 className="font-bold">Competition name</h1>
							<span className="w-1 h-1 bg-black rounded-full"></span>
							<span className="text-body-secondary">Date</span>
						</div>
					</div>
					<div className="flex items-center gap-x-2">
						<img
							src="https://source.unsplash.com/64x64?profile"
							alt="Profile image alt"
							className="w-8 h-8 rounded-full"
						/>
						<p className="text-sm">Nikola Kavezić</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
