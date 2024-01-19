import './card.css'

const Card = (props) => {

const{title,image,seen,price}=props;

    return (

    
            <div className='card'>
                <img src={image} alt="" className='card_image' />
                <h2 className='card_title'>{title}</h2>
                <span className='card_seen'>{seen} <i className="fa-regular fa-eye"></i></span>
                <div className="card_footer">

                    <button className='card_button'>Add to Card <i className="fa-solid fa-bag-shopping"></i></button>
                    <span className='card_price'>{price}$</span>
                </div>

            </div>
   

    )
}

export default Card
