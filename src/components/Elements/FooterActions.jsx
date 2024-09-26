import styles from './FooterActions.module.css';

const FooterActions = ({ unCompletedTodosCount, deleteCompletedTodos, todos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.element}>{unCompletedTodosCount} items left </div>
      <button className={styles.element} onClick={()=> deleteCompletedTodos()}>
        Clear Completed
      </button>
    </div>
  );
};

export default FooterActions;
