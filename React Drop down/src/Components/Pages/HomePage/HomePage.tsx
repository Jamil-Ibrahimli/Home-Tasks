import React, { useState } from 'react'
import TodoItem from '../../Toto_Item/TodoItem'
import styles from './homePage.module.scss'
import img1 from '../../../assets/images/img1.jpg'
import img_5 from '../../../assets/images/img_5.jpg'
import { ThemeContext } from '../../../ThemeContext'
import classNames from 'classnames'
import { FaBedPulse } from 'react-icons/fa6'
import toggleSound from '../../../assets/foot-switch-166326.mp3'

const HomePage = () => {

  const [theme, setTheme] = useState(false)



  const toggleTheme = () => {
    const audio = new Audio(toggleSound);
    setTheme((curr) => !curr);

    audio.play()
  }

  return (
    <>
      <div className={classNames(styles.container, { [styles.light_mode]: theme })}>

        <div className={styles["container_bg-image"]}>
          {theme ? <img src={img_5} alt="" /> : <img src={img1} alt="" />}


          <ThemeContext.Provider value={{ theme, toggleTheme }}>

            <TodoItem />

          </ThemeContext.Provider>


        </div>



      </div>
    </>

  )
}

export default HomePage