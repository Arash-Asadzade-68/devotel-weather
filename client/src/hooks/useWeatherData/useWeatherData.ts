import { useSnackbarMessages } from '../useSnackbarContext/useSnackbarMessages';
import { useDispatch } from 'react-redux';
import { setWeather } from '../../redux/weather/weatherSlice';

import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { WeatherReducer } from '../../pages/Home/state/weather.reducer';
import { useEffect, useReducer } from 'react';
import {
    setIsLoadingState,
    setQueryState,
    setUnitsState,
    setWeatherState,
} from '../../pages/Home/state/weather.actions';
import { UNITS } from '../../pages/Home/types.d';
import { getFormattedCurrentWeather } from '../../services/OpenWeatherServices/getFormattedCurrentWeather';
import { getFormattedForecastWeather } from '../../services/OpenWeatherServices/getFormattedForecastWeather';

export function useWeatherData(lat: number, lon: number) {
    const weather = useSelector((state: RootState) => state.weather);
    const [state, dispatch] = useReducer(WeatherReducer, {
        units: UNITS.METRIC,
        weather,
        isLoading: true,
    });
    const { sendSnackbarMessage } = useSnackbarMessages();
    const ReduxDispatcher = useDispatch();

    useEffect(() => {
        if (lat && lon) {
            getWeatherDetails();
        }
        // eslint-disable-next-line
    }, [state.query, state.units, lat, lon]);

    async function getWeatherDetails() {
        if (!state.isLoading) {
            dispatch(setIsLoadingState(true));
        }
        try {
            const current = getFormattedCurrentWeather({
                units: state.units,
                lat: state.query?.lat ?? lat,
                lon: state.query?.lon ?? lon,
            });
            const forcast = getFormattedForecastWeather({
                units: state.units,
                lat: state.query?.lat ?? lat,
                lon: state.query?.lon ?? lon,
            });
            Promise.all([current, forcast])
                .then(async (response) => {
                    dispatch(setWeatherState({ ...response[0], daily: response[1] }));
                    ReduxDispatcher(setWeather({ ...response[0], daily: response[1] }));
                })
                .then(() => {
                    dispatch(setIsLoadingState(false));
                });
        } catch (error) {
            if (error instanceof Error) {
                sendSnackbarMessage(error.message, 'error');
            }
            dispatch(setIsLoadingState(false));
        }
    }

    function refreshWeather() {
        getWeatherDetails();
    }

    function onChangeUnits(unit: UNITS) {
        dispatch(setUnitsState(unit));
    }
    function setSearchedCity(city: { value: string; label: string }) {
        if (city.value.length > 0) {
            const [lat, lon] = city.value.split(' ');
            dispatch(
                setQueryState({
                    lat,
                    lon,
                }),
            );
        } else {
            dispatch(setQueryState(null));
        }
    }

    return {
        onChangeUnits,
        setSearchedCity,
        refreshWeather,
        state,
    };
}
