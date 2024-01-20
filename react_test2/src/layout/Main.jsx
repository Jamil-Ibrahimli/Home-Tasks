import React from 'react'
import Banner from '../components/banner/Banner'
import Card from '../components/card/Card'
import './main.css';
import img1 from '../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg';
import img2 from '../assets/clement-helardot-95YRwf6CNw8-unsplash.jpg';
import img3 from '../assets/danial-igdery-FCHlYvR5gJI-unsplash.jpg';
import  img4 from '../assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg';
import img5 from '../assets/tianyi-ma-WiONHd_zYI4-unsplash.jpg';
import img6 from '../assets/goran-ivos-iOykDIkZLQw-unsplash.jpg';
import img7 from '../assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg';
import img8 from '../assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg';


const Main = () => {

  const products = [{

    title: 'Python: Versatile, readable, and beginner-friendly.',
    image: img1,
    seen: '124',
    price: '2030',
  },

  {

    title: 'JavaScript: Web development powerhouse.',
    image: img2 ,
    seen: '1234',
    price: '1900',
  },
  {

    title: 'Java: Cross-platform, object-oriented stalwart.',
    image: img3,
    seen: '22364',
    price: '1000',
  },
  {

    title: 'C++: Efficient and widely used for system programming.',
    image: img4,
    seen: '52374',
    price: '3050',
  },
  {

    title: 'PHP: Server-side scripting for web applications.',
    image: img5,
    seen: '10234',
    price: '400',
  },
  {

    title: 'TypeScript: JavaScript with static typing for robust code.',
    image: img6,
    seen: '234',
    price: '800',
  },
  {

    title: 'Go: Fast, simple, and designed for scalability.',
    image: img7,
    seen: '234',
    price: '100',
  },
  {

    title: 'Swift: Apple is language for iOS and macOS development.',
    image: img8,
    seen: '234',
    price: '100',
  },


  ]


  return (
    <div className='main'>
      <Banner />
      <div className="container">
        {products.map((item) => {
          return <Card title={item.title} image={item.image} seen={item.seen} price={item.price} />

        })} </div>

    </div>
  )
}

export default Main
