import React, { useContext, useEffect, useState } from 'react';
import Input from '../Input/Input';
import OutPut from '../OutPut/OutPut';
import styles from './toDo.module.scss';
import img_3 from '../../assets/images/img_3.png';
import img_6 from '../../assets/images/img_6.png'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { handleActive } from '../../store/activeSlice';


const TodoItem = () => {

  const theme = useSelector(state => state.activeSliceReducer.theme)

  const dispatch = useDispatch()


  const [isActive, setIsActive] = useState(false)

  const [inp, setInp] = useState('')

  const [outPut, setOutPut] = useState<string[]>([])
  const [commonOutput, setCommonOutput] = useState<string[]>([])

  const [count, setCount] = useState(0)

  const handleOutPut = () => {
    setCount(prev => prev = outPut.length + 1)
    const arrOutPut = [...outPut, { inp: inp, id: count, active: true }]
    setOutPut(arrOutPut)

  }
  console.log(commonOutput)
  useEffect(() => {

    setCommonOutput(outPut)

  }, [outPut])
  useEffect(() => {

    setCount(prev => prev = commonOutput.length)
  }, [commonOutput])

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

    let complited = commonOutput.filter((item) => item.active === false)
    complited.length > 0 ? setCommonOutput(complited):console.log('there is no complited')
    setCount(prev => prev = complited.length)
  }


  const filterActive = () => {

    let activeTodo = commonOutput.filter((item) => item.active === true)
    activeTodo.length > 0 && setCommonOutput(activeTodo)
    setCount(prev => prev = activeTodo.length)

  }
  const handleAll = () => {

    let all = outPut.filter((item) => !commonOutput.some((someItem) => someItem.id === item.id))
    setCommonOutput([...commonOutput, ...all])

  }

  const clearCompleated = () => {

    let cleared = commonOutput.filter((item) => item.active === true)

    cleared.length > 0 && setOutPut(cleared)
  }

  return (

    <>

      <div className={styles['item-container']}>


        <div className={styles['item-container_title']}>
          <h2>todo</h2>

          <div className={classNames(styles.icon, { [styles.icon_active]: theme })} onClick={() => dispatch(handleActive())}>

            {theme === false ?

              <MdDarkMode className={styles.icon_dark} /> :
              <MdLightMode className={styles.icon_light} />}


          </div>

        </div>

        <div className={classNames(styles['input-container'], { [styles['input-container-dark']]: theme })}>

          {theme ? <img src={img_6} alt="" /> : <img src={img_3} alt="" />}
          <Input setInp={setInp} onKeyDown={handleKeyDown} />


        </div>

        <div className={classNames(styles['item-container_details'], { [styles['details-dark']]: theme })}>


          {commonOutput.map((item, index) =>

            <OutPut mappedOutPut={item.inp} item={item} key={item.id} setOutPut={setOutPut} outPut={outPut} removeItem={() =>

              removeItem(index)} />)}


          {count > 0 ? <div className={styles['item-container_details_filter-control']}>
            <p>{count} items left</p>
            <p onClick={filterComplited}>Complited</p>
            <p onClick={filterActive}>Active</p>
            <p onClick={handleAll}>All</p>
            <p onClick={clearCompleated}>Clear Compleated</p>
          </div> : null}
        </div >


      </div>

    </>

  )
}

export default TodoItem