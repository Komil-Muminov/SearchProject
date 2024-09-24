import { useState } from "react";
const User = () => {
	const [userInp, setuserInp] = useState({
		log: "",
		pass: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setuserInp((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	console.log(userInp);
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="content">
						<form action="">
							<input name="log" onChange={handleChange} type="text" />
							<input name="pass" onChange={handleChange} type="text" />
							<button>Отправить</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default User;
