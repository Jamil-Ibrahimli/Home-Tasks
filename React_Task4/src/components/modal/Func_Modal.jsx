import './modal.css'
import { RxCross2, } from "react-icons/rx";
import React, { useState } from 'react'


const Func_Modal = (props) => {
    const storedData = JSON.parse(localStorage.getItem('dataArr')) || [];
    const { toggle } = props
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [saveDatas, setSaveDatas] = useState(storedData)



    function handleFname(e) {

        setFname(e.target.value)
        console.log(fName)

    }
    function handleLname(e) {

        setLname(e.target.value)
        console.log(lName)
    }

    function handleSave() {


        const newDatasArray = [...saveDatas, { fName, lName }]

        setSaveDatas(newDatasArray)



        localStorage.setItem('dataArr', JSON.stringify(newDatasArray))

    }
    console.log(saveDatas)

    return (
        <>
            <div className="modal">
                <h2 className='modal_header'>Create your account</h2>

                <RxCross2 className='modal_x' onClick={toggle} />

                <div className="modal_container">

                    <div className="modal_container_inp">

                        <label htmlFor="fname">First name</label>

                        <input type="text" name="fname" id="fname" placeholder='First name' onChange={handleFname} required />

                    </div>

                    <div className="modal_container_inp">

                        <label htmlFor="lname">Last name</label>

                        <input type="text" name="lname" id="lname" placeholder='Last name' onChange={handleLname} required />

                    </div>

                </div>

                <div className="modal_buttons">

                    <button className="save" onClick={handleSave}>Save</button>

                    <button className="cancel" onClick={toggle}>Cancel</button>

                </div>



            </div>

            <div><p className="output">Name/Surname</p>{saveDatas ? saveDatas.map((item, index) => <div key={index}>

                <p >{`${item.fName ? item.fName : ""}   ${item.lName ? item.lName : ''}`}</p>


            </div>) : ""}  </div>

        </>
    )
}

export default Func_Modal



