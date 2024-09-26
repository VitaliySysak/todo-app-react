import styles from './SingleTodoElement.module.css';
import { BiNoEntry } from 'react-icons/bi';

const SingleTodoElement = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoElement}>
      <div className={`circle ${todo.isCompleted? styles.checkOn: ''}`} onClick={() => toggleTodo(todo.id)}></div>
      <h2 className={`${styles.taskTitle} ${todo.isCompleted? styles.completedTodo: ''}`}>{todo.text}</h2>
      <button onClick={() => deleteTodo(todo.id)}>
        <BiNoEntry className={styles.deleteIcon} />
      </button>
    </div>
  );
};

export default SingleTodoElement;
