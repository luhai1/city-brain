import styles from './index.module.css'
import BorderBox12 from '@jiaminghi/data-view-react/es/borderBox12'

function RightMessage(params) {
  return(
    <div className={styles.RightMessage}>
       <BorderBox12 className={styles.LeftMessage_top}></BorderBox12>
      <BorderBox12 className={styles.LeftMessage_bottom}></BorderBox12>
    </div>
  )
} 


export default RightMessage