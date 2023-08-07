import React from 'react'
import styles from './InputSearch.module.css'

export default function InputSearch({...props}) {
  return (
    <input type="text" {...props} className={styles.InputSearch}/>
  )
}
