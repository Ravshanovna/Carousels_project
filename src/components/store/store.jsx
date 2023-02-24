import {configureStore} from '@reduxjs/toolkit'
import {Search_input} from './reducer/Search'
const store = configureStore({
    reducer: {
        data : Search_input
    }
})


export {store}