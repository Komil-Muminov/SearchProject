import { useState } from "react";

const Search = ({ listProps }) => {
	const [userImp, setUserInp] = useState("");
	const handleSubmite = (e) => {
		e.preventDefault();
		// Ваш код здесь.
		setUserInp(e.target.value);
	};

	const filteredList = listProps.filter((item) =>
		item.title.toLowerCase().startsWith(userImp.toLowerCase()),
	);

	console.log(filteredList);
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="search__container">
						<form action="" className="form">
							<input
								type="text"
								className="form_input"
								onChange={(e) => setUserInp(e.target.value)}
							/>
							<button>Отправить</button>
						</form>
						{filteredList.map(({ title, id }) => (
							<li className="item" key={id}>
								{title}
							</li>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Search;
