import { createSlice } from "@reduxjs/toolkit";
import toggleSound from '../assets/foot-switch-166326.mp3';

const activeSlice = createSlice({

    name: 'isActive',
    initialState: { theme: false },
    reducers: {

        handleActive: (state) => {

            state.theme = !state.theme

            const audio = new Audio(toggleSound);


            audio.play()

        }

    }

})


export default activeSlice.reducer
export const { handleActive } = activeSlice.actions