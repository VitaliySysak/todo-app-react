import SingleTodoElement from './SingleTodoElement';
import styles from './TodoList.module.css';

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
  return (
    <div className={styles.listContainer}>
      {todos.map((todo) => (
        <SingleTodoElement key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
