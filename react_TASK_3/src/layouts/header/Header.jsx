import React, { useEffect, useState } from 'react'
import styles from './header.module.scss';
import { FaBagShopping } from "react-icons/fa6";
import avatar from '../../assets/images/unnamed.jpg'
import classNames from 'classnames';


const Header = ({ data, clearing }) => {


    const [isActive, setIsActive] = useState(false)


    const handleSetActive = () => {


        setIsActive(!isActive)


    }


    return (
        <>

            <header className={styles.header}>
                <h2 className={styles.header_logo}>sneakers</h2>

                <ul className={styles.header_menu}>

                    <li><a href="#" className={styles['header_menu_link']}>Collections</a></li>
                    <li><a href="#" className={styles['header_menu_link']}>Men</a></li>
                    <li><a href="#" className={styles['header_menu_link']}>Women</a></li>
                    <li><a href="#" className={styles['header_menu_link']}>About</a></li>
                    <li><a href="#" className={styles['header_menu_link']}>Contact</a></li>


                </ul>

                <div className={styles["header_right"]}>
                    <FaBagShopping className={styles['header_right_basket']} onClick={handleSetActive} />
                    <img src={avatar} alt="avatar" className={styles['header_right_avatar']} />
                </div>


            </header>


            <div className={classNames(styles.cart, { [styles.active]: isActive })}>

                {data && data.map((item, index) => <img src={item} key={index} />)}

                <button className={styles.cart_btn} onClick={clearing}>Clear cart</button>

            </div>

        </>

    )
}

export default Header