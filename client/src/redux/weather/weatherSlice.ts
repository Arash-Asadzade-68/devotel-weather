import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lat: 51.5085,
    lon: -0.1257,
    feels_like: 4.82,
    humidity: 91,
    temp: 27.43,
    temp_max: 29.4,
    temp_min: 2.38,
    country: 'GB',
    sunrise: 1702540718,
    sunset: 1702569089,
    details: 'Rain',
    icon: '10d',
    speed: 3.09,
    timezone: '',
    daily: null,
    dt: 1702560920,
    name: 'London',
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (_, action) => action.payload,
    },
});

export const { setWeather } = weatherSlice.actions;
