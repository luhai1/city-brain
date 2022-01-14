import BorderBox13 from '@jiaminghi/data-view-react/es/borderBox13'
import BorderBox12 from '@jiaminghi/data-view-react/es/borderBox12'
import styles from './index.module.css'

function ComHead() {
  return (
    <div className={styles.com_head}>
      <BorderBox13 className={styles.com_head_left}>
        BorderBox13
      </BorderBox13>

      <BorderBox12 reverse={true} className={styles.com_head_right}>
        BorderBox12
      </BorderBox12>
    </div>
  );
}

export default ComHead;
