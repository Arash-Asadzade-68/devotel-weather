import { IHistoryState } from '../types.d';
import { SET_DATE_RANGE, SET_IS_LOADING, SET_WEATHER_HISTORY } from './history.actions';

export function HistoryReducer(state: IHistoryState, action: { type: string; payload: any }) {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case SET_WEATHER_HISTORY:
            return {
                ...state,
                history: action.payload,
            };
        case SET_DATE_RANGE:
            return {
                ...state,
                dateRange: action.payload,
            };
    }
    return state;
}
