import styles from './index.module.css'
import BorderBox8 from '@jiaminghi/data-view-react/es/borderBox8'

function BottomMessage(params) {
  return(
    <div className={styles.BottomMessage}>
      <BorderBox8 reverse={true}></BorderBox8>
      <BorderBox8></BorderBox8>
      <BorderBox8 reverse={true}></BorderBox8>
      <BorderBox8></BorderBox8>
    </div>
  )
}

export default BottomMessage