import React, { useContext, useState } from 'react';
import Input from '../Input/Input';
import OutPut from '../OutPut/OutPut';
import styles from './toDo.module.scss';
import img_3 from '../../assets/images/img_3.png';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from '../../ThemeContext';
import classNames from 'classnames';

const TodoItem = () => {

  const useTheme = useContext(ThemeContext)

  const { theme, toggleTheme } = useContext(ThemeContext)

  
  console.log(theme)
  const [inp, setInp] = useState('')

  const [outPut, setOutPut] = useState<string[]>([])

  const [count, setCount] = useState(0)


  const handleOutPut = () => {
    setCount(prev => prev + 1)
    const arrOutPut = [...outPut, { inp: inp, id: count }]
    setOutPut(arrOutPut)

  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.value = ''
      handleOutPut()

    }


  }
  const removeItem = (inx) => {


    setOutPut(prev => prev.filter((item, index) => index !== inx))
    setCount(prev => prev - 1)

  }
  console.log(outPut)

  return (

    <>

      <div className={styles['item-container']}>


        <div className={styles['item-container_title']}>
          <h2>todo</h2>
          {theme === 'dark' ?
            <MdLightMode className={styles.icon} onClick={toggleTheme} /> :
            <MdDarkMode className={styles.icon} onClick={toggleTheme} />}

        </div>

        <div className={theme==='light'?styles['input-container']:styles['input-container-dark']}>

          <img src={img_3} alt="" />
          <Input setInp={setInp} onKeyDown={handleKeyDown} />


        </div>

        <div className={theme==='light'?styles['item-container_details']:styles['details-dark']}>


          {outPut.map((item, index) => 

          <OutPut outPut={item.inp} key={item.id} removeItem={() =>

           removeItem(index)} />)}


          <div>{count > 0 ? <p>{count} items left</p> : null}</div>
        </div >


      </div>

    </>

  )
}

export default TodoItem