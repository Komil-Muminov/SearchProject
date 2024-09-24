import { useState } from "react";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import TodoList from "./Components/Todo/TodoList";
function ToDoRender() {
	const [todos, setTodos] = useState([]);

	const handleAddTask = (userInp) => {
		if (userInp) {
			const newItem = {
				id: new Date(),
				task: userInp.trim(),
				complete: false,
			};
			setTodos([...todos, newItem]);
			console.log(todos);
		}
	};

	const handleRemoveTask = (id) => {
		setTodos([...todos.filter((item) => item.id !== id)]);
	};

	const handleToggleChange = (id) => {
		setTodos((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, complete: !item.complete } : item,
			),
		);
		console.log(todos);
	};

	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header__content">{todos.length}</div>
				</div>
			</header>
			<ToDoForm addTask={handleAddTask} />
			{todos?.length > 0 &&
				todos.map((item) => {
					return (
						<TodoList
							key={item.id}
							todo={item}
							remove={handleRemoveTask}
							toggle={handleToggleChange}
						/>
					);
				})}
		</>
	);
}

export default ToDoRender;
