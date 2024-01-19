import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_container_nav">

                    <ul className='footer_container_nav_list'>
                         <h3>Information</h3>
                        <li>Address</li>
                        <li>Email</li>
                        <li>Phone number</li>
                        <li>Social media</li>

                    </ul>

                </div>
                <button className='footer_container_btn'>Subscribe</button>

            </div>
            <small className='copyright'>&copy; copyright 2024 testing website Name</small>
        </div>
    )
}

export default Footer
