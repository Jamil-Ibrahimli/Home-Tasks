import ProductItem from '../../components/productItem/ProductItem'
import styles from './main.module.scss'


import React from 'react'

const Main = ({ func, dataImg, image, handleMainImage }) => {
    return (
        <div className='container'>
            <div className={styles.main}>

                <ProductItem func={func} dataImg={dataImg} image={image} handleMainImage={handleMainImage} />

            </div>

        </div>
    )
}

export default Main