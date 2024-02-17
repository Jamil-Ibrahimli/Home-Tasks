import React, { useContext, useEffect, useState } from 'react'
import styles from './outPut.module.scss'
import img_2 from '../../assets/images/imh2.png'
import img_3 from '../../assets/images/img_3.png'
import img_6 from '../../assets/images/img_6.png'
import classNames from 'classnames'
import img_4 from '../../assets/images/image_4.png'
import { useSelector } from 'react-redux'



interface outPutDataTypes {

  outPut: string,


}

const OutPut: React.FC<outPutDataTypes> = ({ item, removeItem, mappedOutPut, }) => {

 const theme=useSelector(state=>state.activeSliceReducer.theme)

  const [isActive, setIsActive] = useState(false)


  const handleActive = () => {

    setIsActive(prev => !prev)

    if (isActive) {

      item.active = true

    } else {
      item.active = false

    }

  }






  return (
    <>

      <div className={styles['output-container']}>
        {theme ?
          <img src={isActive ? img_2 : img_6} alt="complete" onClick={handleActive} /> :
          <img src={isActive ? img_2 : img_3} alt="complete" onClick={handleActive} />}
        <p className={classNames(styles.output, { [styles.output_active]: isActive })}>{mappedOutPut}</p>
        <img src={img_4} alt="delete" onClick={removeItem} />
      </div>

    </>
  )



}

export default OutPut