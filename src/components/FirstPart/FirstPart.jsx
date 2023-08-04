import React, { useState } from 'react'
import styles from './FirstPart.module.css'
import video1 from '../../resources/Video default.jpg'
import video2 from '../../resources/Video hover.jpg'
import graphic from '../../resources/Graphic.svg'
import iSvg from '../../resources/i.svg' 
import DeliveryForm from '../DeliveryForm'
import DeliverySwitch from '../UI/DeliverySwitch/DeliverySwitch'
import DeliveryInput from '../UI/DeliveryInput/DeliveryInput'

export default function FirstPart({children, ...props}) {
  const [imageSrc, setImageSrc] = useState(video1);
  
  return (
    <div className={styles.FirstPart}>
      <div className={styles.info}>
        <h1>Our service started work in New York</h1>
        <p className='txt'>We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.</p>
        <h5><a href="#">Read more</a></h5>
      </div>
      <div>
        <h3 className={styles['vidoe-h3']}>How it works</h3>
        <img 
          src={imageSrc} 
          onMouseOver={ () => {setImageSrc(video2)} }
          onMouseOut={ () => {setImageSrc(video1)} }
         />
      </div>
      <img src={graphic} alt="a" />
      <div>
        <div className={styles.GetStarted}>
          <div className={styles['GetStarted-info']}>
            <h3>Send a Parcel</h3>
            <span className={styles.i}>
              <img src={iSvg} alt="" />
            </span>
          </div>
          <DeliveryForm>
            <DeliverySwitch/>
            <DeliveryInput label="Pickup location" id="Pickup location" placeholder="location"/>
            <DeliveryInput label="Drop location" id="Drop location" placeholder="" value="502 86th St, Brooklyn, NY 11209"/>
          </DeliveryForm>
        </div>
        {/* <div>
          <h3></h3>
          <input type="text" />
        </div> */}
      </div>
    </div>
  )
}
