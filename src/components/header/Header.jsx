import React from 'react'
import logo from '../../resources/Logo.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
        <img src={logo} alt="" />
        <div className={styles.geolocation}>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#C2D2F4" stroke-width="2"/>
                <path d="M11 6C11 6.57825 10.721 7.43892 10.1734 8.50282C9.6424 9.53439 8.92352 10.6362 8.18814 11.6588C7.45537 12.6777 6.72044 13.5984 6.1676 14.2653C6.10961 14.3353 6.05367 14.4024 6 14.4665C5.94633 14.4024 5.89039 14.3353 5.8324 14.2653C5.27956 13.5984 4.54463 12.6777 3.81186 11.6588C3.07648 10.6362 2.3576 9.53439 1.82663 8.50282C1.27902 7.43892 1 6.57825 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#B7C6E7" stroke-width="2"/>
            </svg>
            <p>NY, Manhattan</p>
        </div>
        <input 
        type="text" 
        className={styles['track-search']} 
        placeholder='Track a Package'
        />
        
        <nav>
            <a href="#">Send a Parcel</a>
            <a href="#">Become a Courier</a>
        </nav>
        <button className={styles.login}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C6.02756 2 4 3.67893 4 5.75V7H3.71429C3.3198 7 3 7.33579 3 7.75V13.25C3 13.6642 3.3198 14 3.71429 14H12.2857C12.6802 14 13 13.6642 13 13.25V7.75C13 7.33579 12.6802 7 12.2857 7H12V5.75C12 3.67893 9.97244 2 8 2ZM8 4C6.81653 4 6 5 6 5.75V7H10V5.75C10 5 9.18347 4 8 4Z" fill="white"/>
            </svg>
        </button>
    </header>
  )
}
