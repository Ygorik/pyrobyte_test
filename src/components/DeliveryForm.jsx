import React from 'react'

export default function DeliveryForm({children, ...props}) {
  return (
    <form action="" style={{display: 'flex', flexDirection: 'column'}}>
        {children}
    </form>
  )
}
