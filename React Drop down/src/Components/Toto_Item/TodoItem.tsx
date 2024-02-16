import React, { useContext, useState } from 'react';
import Input from '../Input/Input';
import OutPut from '../OutPut/OutPut';
import styles from './toDo.module.scss';
import img_3 from '../../assets/images/img_3.png';
import img_6 from '../../assets/images/img_6.png'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from '../../ThemeContext';
import classNames from 'classnames';

const TodoItem = () => {
  const [isActive, setIsActive] = useState(false)
  const useTheme = useContext(ThemeContext)

  const { theme, toggleTheme } = useContext(ThemeContext)

  const [inp, setInp] = useState('')

  const [outPut, setOutPut] = useState<string[]>([])

  const [count, setCount] = useState(0)

  const handleOutPut = () => {
    setCount(prev => prev + 1)
    const arrOutPut = [...outPut, { inp: inp, id: count, active: true }]
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

  const filterComplited = () => {

    let complited = outPut.filter((item) => item.active === false)


    complited.length > 0 && setOutPut(complited)
  }


  const filterActive = () => {

    let activeTodo = outPut.filter((item) => item.active === true)

    activeTodo.length > 0 && setOutPut(activeTodo)
  }

  return (

    <>

      <div className={styles['item-container']}>


        <div className={styles['item-container_title']}>
          <h2>todo</h2>

          <div className={classNames(styles.icon, { [styles.icon_active]: theme })}>

            {theme === false ?

              <MdDarkMode className={styles.icon_dark} onClick={toggleTheme} /> :
              <MdLightMode className={styles.icon_light} onClick={toggleTheme} />}


          </div>

        </div>

        <div className={classNames(styles['input-container'], { [styles['input-container-dark']]: theme })}>

          {theme ? <img src={img_6} alt="" /> : <img src={img_3} alt="" />}
          <Input setInp={setInp} onKeyDown={handleKeyDown} />


        </div>

        <div className={classNames(styles['item-container_details'], { [styles['details-dark']]: theme })}>


          {outPut.map((item, index) =>

            <OutPut mappedOutPut={item.inp} item={item} key={item.id} setOutPut={setOutPut} outPut={outPut} removeItem={() =>

              removeItem(index)} />)}


          {count > 0 ? <div className={styles['item-container_details_filter-control']}>
            <p>{count} items left</p>
            <p onClick={filterComplited}>Complited</p>
            <p onClick={filterActive}>Active</p>
          </div> : null}
        </div >


      </div>

    </>

  )
}

export default TodoItem