import BorderBox12 from '@jiaminghi/data-view-react/es/borderBox12'
import styles from './index.module.css'

function LeftMessage (){
  return(
    <div className={styles.LeftMessage}>
      <BorderBox12 className={styles.LeftMessage_top}></BorderBox12>
      <BorderBox12 className={styles.LeftMessage_bottom}></BorderBox12>
    </div>
  )
}

export default  LeftMessage