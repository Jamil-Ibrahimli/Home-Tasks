import React, { useState } from 'react';
import Func_Modal from '../modal/Func_Modal';


const HomePage = () => {

    const [modal, setModal] = useState(false)


    function openModal() {

        setModal(!modal)

    }


    return (
        <>

            {modal && <Func_Modal toggle={openModal} />}

            <button onClick={openModal}>Click</button>
            
        </>
    )
}

export default HomePage