import React, { useState } from 'react'
import TodoItem from '../../Toto_Item/TodoItem'
import styles from './homePage.module.scss'
import { img } from '../../../assets/imageDatas'
import { ThemeContext } from '../../../ThemeContext'
import classNames from 'classnames'


const HomePage = () => {
  
const[theme,setTheme]=useState('light')



const toggleTheme=()=>{

setTheme((curr)=>(curr==='light'? 'dark':'light'))

}

  return (
    <>
      <div className={theme==='dark'?styles.container:styles.light_mode}>

      <div className={styles["container_bg-image"]}> 
    <img src={img} alt="" /> 

<ThemeContext.Provider value={{theme,toggleTheme}}>

<TodoItem/>

</ThemeContext.Provider>
   
    
      </div>



      </div>
    </>
  
  )
}

export default HomePage