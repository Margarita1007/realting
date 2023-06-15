import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CardType } from "../types";
import { cards } from "../components/main/teasers/data";

interface offerState {
    offers: CardType[],
    filter: CardType[],
    search: string,
    stateSearch: string
}

const initialState: offerState = {
    offers: cards,
    filter: [],
    search: '',
    stateSearch: ''
}

function searchOffers(word: string, state: CardType[]) {
    const searchOffer = state.filter((item) => (
        item.text.toLocaleLowerCase().includes(word.toLocaleLowerCase()) || 
        item.title.toLocaleLowerCase().includes(word.toLocaleLowerCase())
    ));
    console.log(searchOffer)
    return searchOffer
}


export const offerSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        setOffers: (state, action: PayloadAction<[]>) => {
            state.offers = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            state.filter = searchOffers(action.payload, state.offers);
            state.stateSearch = state.search && !state.filter.length ? 'Ничего не найдено. Посмотрите другие объекты в нашем каталоге:' : ''
        },
    }
})

export const { setOffers, setSearch } = offerSlice.actions;

export const selectOfferState = (state: RootState) => state.offers;

export default offerSlice.reducer;