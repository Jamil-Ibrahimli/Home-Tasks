import React, { useState } from 'react'
import styles from './productItem.module.scss';
import { dataImg } from '../../assets/images/Data_img';





const ProductItem = ({  func, dataImg, image, handleMainImage }) => {


    const [count, setCount] = useState(1)


    const handleIncrCount = () => {

        setCount(prev => prev + 1)


    }
    const handleDecrCount = () => {

        count > 0 ? setCount(prev => prev - 1) : 0


    }




    dataImg

    return (
        <>

            <div className={styles.product}>

                <div className={styles.product_images}>

                    <div className={styles.product_images_main}><img src={image} alt="" /></div>

                    <div className={styles.product_images_container}>

                        {dataImg.map((item, index) => <div className={styles.product_images_container_item} key={index}>

                            <img src={item} alt="" onClick={() => { handleMainImage(item) }} />
                        </div>)}

                    </div>

                </div>

                <div className={styles.product_content}>

                    <div className={styles.product_content_titles}>

                        <h5>SNEACER COMPANY</h5>
                        <h2>Fall Limited Edition Sneakers</h2>
                    </div>

                    <div className={styles.product_content_text} > <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ipsam nihil similique modi, quia dolores at quod ullam!


                    </p></div>



                    <div className={styles.product_content_price}>

                        <p>${125 * count}.00  <span>50%</span></p>
                        <small>${(125 * count) * 2}</small>


                    </div>

                    <div className={styles.product_content_buttons} >

                        <button className={styles.btn_minus} onClick={handleDecrCount}>-</button>
                        <span className={styles.display}>{count}</span>
                        <button className={styles.btn_plus} onClick={handleIncrCount}>+</button>
                        <button className={styles.add_to_cart} onClick={func} >add to cart</button>


                    </div>


                </div>




            </div>



        </>
    )
}

export default ProductItem






