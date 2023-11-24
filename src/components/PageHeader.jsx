function PageHeader({ children }) {
	return (
		<div className="flex items-center justify-between py-10 border-b mb-4">
			{children}
		</div>
	);
}

export default PageHeader;
