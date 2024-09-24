const TodoList = ({ todo, remove, toggle }) => {
	return (
		<>
			<section className="sections">
				<div className="container">{todo && todo.task}</div>
				<button onClick={() => remove(todo.id)} className="delete">
					DELETE
				</button>
				<span onClick={() => toggle(todo.id)}>Сделано</span>
			</section>
		</>
	);
};

export default TodoList;
