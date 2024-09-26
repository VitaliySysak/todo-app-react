import styles from './CheckBox.module.css';

const CheckBox = () => {
  return (
    <div className={styles.checkBoxContainer}>
      <input className={styles.input} type="checkbox" />
      <h3 className={styles.checkBoxText}>
        If you would like us to no longer continue to stop not sending you
        special deals and offers every week, please indicate you are inclined to
        yes by not checking the box.
      </h3>
    </div>
  );
};

export default CheckBox;
