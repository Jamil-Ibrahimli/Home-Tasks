
import React, { Component } from 'react'
import './buttons.css'


export default class Class_Buttons extends Component {

    constructor(props) {

        super(props)

        this.state = {

            count: 0,


        }

    }


    setIncrement = () => {

        this.setState({

            count: this.state.count + 1

        })


    }
    setDecrement = () => {

        this.state.count > 0 ? this.setState({

            count: this.state.count - 1

        }) : 0
    }

    setReset = () => {

        this.setState({

            count: this.state.count = 0

        })

    }


    render() {

        return (
            <>
                <div className="counter">

                    <div className="counter_header"><h2 className='counter_header_text'>Class Counter App</h2></div>
                    <div className="counter_set">
                        <button className="counter_set_decr" onClick={this.setDecrement}>-</button>
                        <p className="counter_display">{this.state.count}</p>
                        <button className="counter_set_incr" onClick={this.setIncrement}>+</button>
                    </div>

                    <div className="counter_reset">
                        <button className='counter_reset_btn' onClick={this.setReset}>Reset</button>

                    </div>


                </div>


            </>
        )
    }
}
