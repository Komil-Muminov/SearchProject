import { useState } from "react";
const ToDoForm = ({ addTask }) => {
	const [userInp, setUserInp] = useState("");
	const handleSubmite = (e) => {
		e.preventDefault();
		// Ваш код здесь.
		if (userInp?.length > 0) {
			addTask(userInp);
			setUserInp("");
		}
	};
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="form__content">
						<form action="" className="form" onSubmit={handleSubmite}>
							<input
								onChange={(e) => setUserInp(e.target.value)}
								value={userInp}
								type="text"
								className="form_input"
							/>
							<button>Отправить</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default ToDoForm;
