import React from 'react'
import styles from './DeliverySwitch.module.css'
import foot from '../../../resources/On foot.svg'
import car from '../../../resources/Car.svg'
import truck from '../../../resources/Truck.svg'

export default function DeliverySwitch() {
  return (
    <div className={styles.DeliverySwitch}>
        <input type="radio" name="switch" id="foot" />
        <label htmlFor="foot">
                <img src={foot} alt="" />
                <p>up to 10lb</p>
        </label>
        <input type="radio" name="switch" id="car" />
        <label htmlFor="car">
                <img src={car} alt="" />
                <p>up to 130lb</p>
        </label>
        <input type="radio" name="switch" id="truck" />
        <label htmlFor="truck">
                <img src={truck} alt="" />
                <p>over 130lb</p>
        </label>
    </div>
  )
}
