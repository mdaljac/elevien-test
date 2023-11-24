const getCountries = async () => {
	let countries;

	await fetch("https://elevien-fe-job.free.beeceptor.com/countries")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			countries = data;
		})
		.catch((error) => console.error(error));

	return countries;
};

export { getCountries };
