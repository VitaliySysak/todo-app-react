import styles from './TodoContainer.module.css';
import TodoHeader from '../Elements/TodoHeader';
import CreateNewTodo from '../Elements/CreateNewTodo';
import TodoList from '../Elements/TodoList';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import FooterActions from '../Elements/FooterActions';

const TodoBlock = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      text: 'Complete online JavaScript course',
      isCompleted: false,
    },
  ]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuid(),
      text: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  function toggleTodoHandler(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteCompletedTodosHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const unCompletedTodosCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className={styles.todoBlockContainer}>
      <TodoHeader />
      <CreateNewTodo addTodo={addTodoHandler} todos={todos} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      <FooterActions
        todos={todos}
        unCompletedTodosCount={unCompletedTodosCount}
        deleteCompletedTodos={deleteCompletedTodosHandler}
      />
    </div>
  );
};

export default TodoBlock;
