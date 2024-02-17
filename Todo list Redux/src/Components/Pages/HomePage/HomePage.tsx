import React, { useState } from 'react'
import TodoItem from '../../Toto_Item/TodoItem'
import styles from './homePage.module.scss'
import img1 from '../../../assets/images/img1.jpg'
import img_5 from '../../../assets/images/img_5.jpg'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const theme=useSelector(state=>state.activeSliceReducer.theme)


  return (
    <>
      <div className={classNames(styles.container, { [styles.light_mode]: theme })}>

        <div className={styles["container_bg-image"]}>
          {theme ? <img src={img_5} alt="" /> : <img src={img1} alt="" />}


          

            <TodoItem />

  

        </div>



      </div>
    </>

  )
}

export default HomePage