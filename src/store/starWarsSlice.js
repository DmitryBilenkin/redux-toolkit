import { createSlice } from "@reduxjs/toolkit";

const starWarsSlice = createSlice({
    name: 'starWars',
    initialState:{
        quantityOfFacts: 0,
        facts:[
            'прообразом Чубакки стал пёс режиссёра',
            'актёрам разрешили подобрать любимый цвет для своих световых мечей',
            'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
            'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
            'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
        ]        
    },
    reducers:{
        starWars(state, action){         
             state.quantityOfFacts = action.payload               
            }
            
        }     
    })


export const {starWars} = starWarsSlice.actions;
export default starWarsSlice.reducer;