function Table({ headers, classes, children }) {
	return (
		<div className="border rounded-lg">
			{/* table header */}
			<div
				className={`${classes} items-center bg-gray-200 text-body-light text-sm font-bold px-6`}>
				{headers.map((header, i) => (
					<span className={i === 0 ? "py-4" : ""} key={header}>
						{header}
					</span>
				))}
			</div>
			{/* table data */}
			<div className="text-sm">
				<ul>{children}</ul>
			</div>
		</div>
	);
}

export default Table;
