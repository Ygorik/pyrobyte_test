import React from 'react'
import styles from'./DeliveryInput.module.css'

export default function DeliveryInput({id, label, placeholder, ...props}) {
  return (
    <div className={styles.DeliveryInput}>
        <label htmlFor={id}>{label}</label>
        <input 
        type="text" 
        id={id} 
        placeholder={placeholder} 
        className='txt' 
        value={props.value}
        onChange={props.onChange}
        />
        <div className={styles.line}></div>
    </div>
  )
}
