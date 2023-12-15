import { IWeatherStatus } from '../../Forecast/Forecast';
import { DateRange } from '../types.d';

export const SET_DATE_RANGE = 'SET_DATE_RANGE';

export function setDateRange(range: DateRange) {
    return {
        type: SET_DATE_RANGE,
        payload: range,
    };
}

export const SET_WEATHER_HISTORY = 'SET_WEATHER_HISTORY';

export function setWeatherHistory(history: IWeatherStatus[] | null) {
    return {
        type: SET_WEATHER_HISTORY,
        payload: history,
    };
}

export const SET_IS_LOADING = 'SET_IS_LOADING';

export function setIsLoading(isLoading: boolean) {
    return {
        type: SET_IS_LOADING,
        payload: isLoading,
    };
}
