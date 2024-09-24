import { useState, useEffect } from "react";

// Создаем кастомный хук useStopwatch
function useStopwatch() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const timerId = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(timerId);
	}, []);

	return seconds; // Возвращаем значение секунд
}

const Stopwatch = () => {
	const seconds = useStopwatch(); // Используем кастомный хук

	return (
		<>
			<section className="sections">
				<div className="container">{seconds}</div>
			</section>
		</>
	);
};

export default Stopwatch;
