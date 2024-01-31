import { useEffect, useState } from 'react'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'
import Main from './layouts/main/Main'
import { dataImg } from '../src/assets/images/Data_img'

function App() {

  const [cart, setCart] = useState([])
  const [image, setImage] = useState(dataImg[1])

  function handleMainImage(item) {

    setImage(item)


  }


  const clearCart=()=>{


    localStorage.removeItem('data')   
   
   setCart([])
   
   
   }

  useEffect(() => {
    // Fetch the cart data from localStorage and parse it
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    setCart(storedData);
  }, []);


  function handleCart() {

    setCart([...cart, image])
   
    localStorage.setItem('data', JSON.stringify([...cart, image]))
  }

  return (
    <>

      <Header data={cart} clearing={clearCart} />
      <Main func={handleCart} dataImg={dataImg} image={image} handleMainImage={handleMainImage} />
      <Footer />
    </>
  )
}

export default App

