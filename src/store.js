import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from './features/theme/theme-slice'
import { controlsReducer } from "./features/controls/controls-slice";

import * as api from './config'

export const store = configureStore({
    devTools: true,
    reducer: {
        theme: themeReducer,
        controls: controlsReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        },
        serializableCheck: false,
    })
})