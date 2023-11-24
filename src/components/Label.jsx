function Label({ type }) {
	const style = {
		applied: "bg-success text-white",
		canceled: "bg-gray-200 text-gray-600",
		declined: "bg-alert text-white",
		"awaiting-response": "bg-warning text-white",
	};

	return (
		<span
			className={`text-[9px] font-bold uppercase px-[6px] py-1 rounded-sm ${
				style[type.replace(/ /g, "-")]
			}`}>
			{type}
		</span>
	);
}

export default Label;
