import React, { useState } from 'react'
import styles from './FirstPart.module.css'
import video1 from '../../resources/Video default.jpg'
import video2 from '../../resources/Video hover.jpg'
import graphic from '../../resources/Graphic.svg'

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
      {/* <div>
        <div>

        </div>
        <div>
          <h3></h3>
          <input type="text" />
        </div>
      </div> */}
    </div>
  )
}
