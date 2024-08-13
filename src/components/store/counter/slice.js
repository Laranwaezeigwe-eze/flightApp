import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counterSlice',
    initialState: {
        count: 0
    },
    reducers: {
        increaseCounter:(state)=>{
            state.count += 1
        },
        decreaseCounter:(state)=>{
            state.count -=1
        },
        switchCounterSigns:(state)=>{
            state.count *= -1
        },
        restartCounter:(state)=>{
            state.count = 0
        },
        setCount:(state, action)=>{
            state.count = action.payload
        }
    }
})

export const {increaseCounter, decreaseCounter, switchCounterSigns, restartCounter, setCount} = counterSlice.actions
export default counterSlice.reducer