import React, { useState } from 'react'
import styles from './index.module.less'
import { Decoration7 } from '@jiaminghi/data-view-react'

export const BorderBox = (props) => {
    const { children, title, time } = props;

    return (
        <div className={styles.BorderBox}>
            <div className={styles.title}>
                <Decoration7 style={{  height: '30px' }}>&nbsp; {title} &nbsp;</Decoration7>
            </div>
            <span className={styles.time}>{time}</span>
            {children}
        </div>
    )
}