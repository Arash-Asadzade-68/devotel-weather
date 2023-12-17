import { IWeatherState } from '../types';
import { SET_QUERY_STATE, SET_UNITS_STATE, SET_WEATHER_STATE, SET_LOADING_STATE } from './weather.actions';

export function WeatherReducer(state: IWeatherState, action: { type: string; payload: any }) {
    switch (action.type) {
        case SET_QUERY_STATE:
            return {
                ...state,
                query: {
                    lat: action.payload?.lat,
                    lon: action.payload?.lon,
                },
            };
        case SET_UNITS_STATE:
            return {
                ...state,
                units: action.payload,
            };
        case SET_WEATHER_STATE:
            return {
                ...state,
                weather: action.payload,
            };
        case SET_LOADING_STATE:
            return {
                ...state,
                isLoading: action.payload,
            };
    }
    return state;
}
