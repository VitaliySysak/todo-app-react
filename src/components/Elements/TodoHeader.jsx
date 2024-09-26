import sun from '../../images/icon-sun.svg'
import styles from './TodoHeader.module.css'

const TodoHeader = () => {
  return (
    <header>
      <h1 className={styles.TodoTitle}>TODO</h1>
      <img className={styles.sun} src={sun} alt="sun icon" />
    </header>
  );
};

export default TodoHeader;
