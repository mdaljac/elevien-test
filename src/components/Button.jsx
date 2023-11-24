function Button({ children, callback, variant = "primary", type = "button" }) {
	let bgCls = "";
	let textCls = "";
	const darkTypes = ["gray"];

	if (variant === "gray") bgCls = "bg-gray-200";
	else if (variant === "orange") bgCls = "bg-orange";
	else bgCls = "bg-primary";

	textCls = darkTypes.includes(variant) ? "text-black" : "text-white";

	return (
		<button
			type={type}
			className={`flex items-center font-bold px-6 py-3 rounded-md ${bgCls} ${textCls}`}
			onClick={() => callback()}
			disabled={callback ? false : true}>
			{children}
		</button>
	);
}

export default Button;
