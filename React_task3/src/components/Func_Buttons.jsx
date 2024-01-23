import React, { useState } from 'react'
import './buttons.css'


const Func_Buttons = (props) => {


    const [count, setCount] = useState(0)
          

    function setIncrement() {

        setCount((next) => next + 1)

    }

    function setDecrement() {

        setCount((prev) => prev > 0 ? prev - 1 : 0)

    }

    const setReset = () => {

        setCount(0)
    
    }

    return (
        <>
            <div className="counter">

                <div className="counter_header"><h2 className='counter_header_text'>Functional Counter App</h2></div>
                <div className="counter_set">
                    <button className="counter_set_decr" onClick={setDecrement}>-</button>
                    <p className="counter_display">{count}</p>
                    <button className="counter_set_incr" onClick={setIncrement}>+</button>
                </div>

                <div className="counter_reset">
                    <button className='counter_reset_btn' onClick={setReset}>Reset</button>

                </div>


            </div>

        </>
    )
}

export default Func_Buttons
