import Search from "./Search";
const AppRender = () => {
	const list = [
		{
			id: new Date(),
			title: "Арбуз",
		},

		{
			id: new Date(),
			title: "Огурец",
		},

		{
			id: new Date(),
			title: "Свекла ",
		},
	];

	return (
		<>
			<section className="sections">
				<div className="container">
					<Search listProps={list} />
				</div>
			</section>
		</>
	);
};

export default AppRender;
