import { useRef } from "react";

const FocusableInp = () => {
	const ref = useRef();
	const handleClick = () => {
		ref.current.focus();
	};
	return (
		<>
			<section className="sections">
				<div className="container">
					<input type="text" ref={ref} />
					<button onClick={handleClick}>Установка курсор в поле</button>
				</div>
			</section>
		</>
	);
};

export default FocusableInp;
