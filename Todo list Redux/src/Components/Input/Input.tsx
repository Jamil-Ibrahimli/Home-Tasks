import React, {  useState } from 'react'
import styles from './input.module.scss'
import { useSelector } from 'react-redux'


interface inputDataTypes {



  setInp: (value: string) => void,


}


const Input: React.FC<inputDataTypes> = ({ setInp, onKeyDown }) => {

const theme=useSelector(state=>state.activeSliceReducer.theme)
  
  console.log(theme)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    setInp(e.target.value)



  }

  return (

    <>


      <input className={styles.input} type="text" placeholder='Create a new toto...' onChange={handleInput} onKeyDown={onKeyDown} />



    </>

  )
}

export default Input