import { useState } from "react";
const SearchableList = ({ listProps }) => {
	const [searchInp, setSearchInp] = useState("");
	const handleSearch = (e) => {
		// Ваш код здесь.
		setSearchInp(e.target.value);
	};

	const filteredList = listProps.filter((item) =>
		item.title.toLowerCase().includes(searchInp.toLocaleLowerCase()),
	);
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="searchableList__content">
						<label className="search__label">
							<span className="search_text">Поиск</span>
							<input
								onChange={handleSearch}
								type="text"
								className="search_input"
							/>
						</label>
						<ul className="list">
							{filteredList.map(({ title, id }) => (
								<li className="item" key={id}>
									{title}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchableList;
