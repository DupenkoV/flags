import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from './features/theme/theme-slice'
import { controlsReducer } from "./features/controls/controls-slice";
import { coutryReducer } from "./features/countries/countries-slice";

import * as api from './config'
import { detailsReducer } from "./features/details/details-slice";

export const store = configureStore({
    devTools: true,
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: coutryReducer,
        details: detailsReducer
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