import React from 'react'
import styles from './index.module.less'
// import { Decoration7 } from '@jiaminghi/data-view-react'

export const BorderBox = (props) => {
    const { children, title, time } = props;

    return (
        <div className={styles.BorderBox}>
            <div className={styles.title}>
                {/* <Decoration7 style={{  height: '30px' }}></Decoration7> */}
                &nbsp; {title} &nbsp;
            </div>
            <span className={styles.time}>{time}</span>
            {children}
        </div>
    )
}