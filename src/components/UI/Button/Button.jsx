import React from 'react'
import styles from './Button.module.css'

export default function Button({children, bg, color, ...props}) {
    const classNames = [styles.Button, styles[bg], styles[color]]
  
    return (
    <button className={classNames.join(' ')}>
        {children}
    </button>
  )
}
