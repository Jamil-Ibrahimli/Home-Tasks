

import './App.css'
import Feedbacks from './Components/Feedbacks/Feedbacks'
import FeedBackItem from './Components/FeedbackItem/FeedBackItem'
import InputModal from './Components/InputModal/InputModal'
import { Provider } from 'react-redux'
import {Store} from './Store/Store'
function App() {


  return (


    <>
      <Provider store={Store}>

        <Feedbacks />
       
      </Provider>

    </>
  )
}

export default App
