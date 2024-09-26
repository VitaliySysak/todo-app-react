import styles from './CreateNewTodo.module.css';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useState } from 'react';

const CreateNewTodo = ({ addTodo, todos }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.length <= 30 && todos.length <= 15 && text) {
      addTodo(text);
    }
    setText('');
  };
  return (
    <form className={styles.createNewTodoContainer} onSubmit={onSubmitHandler}>
      <div className="circle"></div>
      <input
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>
        <IoMdAddCircleOutline className={styles.addIcon} type="submit" />
      </button>
    </form>
  );
};

export default CreateNewTodo;
