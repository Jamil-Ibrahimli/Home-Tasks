import React, { useEffect, useState } from 'react'
import styles from './outPut.module.scss'
import img_2 from '../../assets/images/imh2.png'
import img_3 from '../../assets/images/img_3.png'
import classNames from 'classnames'
import img_4 from '../../assets/images/image_4.png'


interface outPutDataTypes {

  outPut: string,


}

const OutPut: React.FC<outPutDataTypes> = ({ outPut,removeItem}) => {



  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {

    setIsActive(prev => !prev)

  }


  return (
    <>

      <div className={styles['output-container']}>
        <img src={isActive ? img_2 : img_3} alt="complete" onClick={handleActive} />
        <p className={classNames(styles.output, { [styles.output_active]: isActive })}>{outPut}</p>
        <img src={img_4} alt="delete" onClick={removeItem} />
      </div>

    </>
  )
}

export default OutPut