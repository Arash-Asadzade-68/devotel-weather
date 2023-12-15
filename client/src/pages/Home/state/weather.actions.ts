import { UNITS } from '../types';

export const SET_QUERY_STATE = 'SET_QUERY_STATE';

export function setQueryState(
    queryState: {
        lat: string;
        lon: string;
    } | null,
) {
    return {
        type: SET_QUERY_STATE,
        payload: queryState,
    };
}

export const SET_UNITS_STATE = 'SET_UNITS_STATE';

export function setUnitsState(units: UNITS | null) {
    return {
        type: SET_UNITS_STATE,
        payload: units,
    };
}

export const SET_WEATHER_STATE = 'SET_WEATHER_STATE';

export function setWeatherState(weather: any | null) {
    return {
        type: SET_WEATHER_STATE,
        payload: weather,
    };
}

export const SET_LOADING_STATE = 'SET_LOADING_STATE';

export function setIsLoadingState(isLoading: boolean) {
    return {
        type: SET_LOADING_STATE,
        payload: isLoading,
    };
}
