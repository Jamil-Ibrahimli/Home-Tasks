import React from 'react'
import Banner from '../components/banner/Banner'
import Card from '../components/card/Card'
import './main.css'

const Main = () => {

  const products = [{

    title: 'Python: Versatile, readable, and beginner-friendly.',
    image: 'src/assets/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg',
    seen: '124',
    price: '2030',
  },

  {

    title: 'JavaScript: Web development powerhouse.',
    image: 'src/assets/clement-helardot-95YRwf6CNw8-unsplash.jpg',
    seen: '1234',
    price: '1900',
  },
  {

    title: 'Java: Cross-platform, object-oriented stalwart.',
    image: 'src/assets/danial-igdery-FCHlYvR5gJI-unsplash.jpg',
    seen: '22364',
    price: '1000',
  },
  {

    title: 'C++: Efficient and widely used for system programming.',
    image: 'src/assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
    seen: '52374',
    price: '3050',
  },
  {

    title: 'PHP: Server-side scripting for web applications.',
    image: 'src/assets/tianyi-ma-WiONHd_zYI4-unsplash.jpg',
    seen: '10234',
    price: '400',
  },
  {

    title: 'TypeScript: JavaScript with static typing for robust code.',
    image: 'src/assets/goran-ivos-iOykDIkZLQw-unsplash.jpg',
    seen: '234',
    price: '800',
  },
  {

    title: 'Go: Fast, simple, and designed for scalability.',
    image: 'src/assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg',
    seen: '234',
    price: '100',
  },
  {

    title: 'Swift: Apple is language for iOS and macOS development.',
    image: 'src/assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg',
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
