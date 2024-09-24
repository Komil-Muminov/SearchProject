import SearchableList from "../SearchableList";

const Render = () => {
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
					<SearchableList listProps={list} />
				</div>
			</section>
		</>
	);
};
export default Render;
