import React from 'react'
import styles from './footer.module.scss';

const Footer = () => {

    
    return (
        <>

            <footer className={styles.footer}>

                <div className={styles.footer_menu}>
                    <div className={styles.class}><h2>PRODUCTS</h2><ul>
                        <li>Teams</li>
                        <li>Advertising</li>
                        <li>Collectives</li>
                        <li>Talent</li></ul>

                    </div>

                    <div className={styles.class}><h2>COMPANY</h2><ul>
                        <li>About</li>
                        <li>Press</li>
                        <li> Work Here</li>
                        <li>Legal</li>
                        <li> Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Contact Us</li>
                        <li>Cookie Settings</li></ul>
                    </div>

                    <div className={styles.class}><h2>STACK EXCHANGE NETWORK</h2><ul>
                        <li>Technology</li>
                        <li>Culture recreation</li>
                        <li>Life&arts</li>
                        <li>Business</li></ul>
                    </div>



                </div>


                <div className={styles.footer_copyright}>Site design / logo © 2024 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2024.1.30.4069</div>




            </footer>




        </>


    )
}

export default Footer