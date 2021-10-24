import { SHOW_PROFILE } from "./types";

const initialState = {
    firstName: "Jack",
    lastName: "London",
    age: 23,
    isVisibleProfile: true,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILE:
            return {
                ...state,
                isVisibleProfile: !state.isVisibleProfile,
            };
        default:
            return state;
    }
};