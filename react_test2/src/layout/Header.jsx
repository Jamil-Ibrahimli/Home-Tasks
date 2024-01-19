import './header.css'

const Header = () => {
    return (
        <header className='header'>

            <div className="header_container">

                <div className="header_container_logo">Logo</div>
                <div className="header_container_serching"><input type='search' placeholder='Search' /></div>
                <div className="header_container_nav"><ul className="header_container_nav_list"><li><a href="#">home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li></ul></div>
                <div className="header_container_card"><i class="fa-solid fa-cart-shopping"></i></div>
            </div>

        </header>
    )
}

export default Header
