import React from 'react'
import './home_page.css'
import Func_Buttons from '../components/Func_Buttons'
import Class_Buttons from '../components/Class_Buttons'


const HomePage = () => {
    return (
        <div className='comp_container'>
            <Func_Buttons />
            <Class_Buttons />

        </div>
    )
}

export default HomePage

