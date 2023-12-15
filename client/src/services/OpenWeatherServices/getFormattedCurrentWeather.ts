import { getWeatherData } from './weatherService';

function formatCurrentWeather(data: any) {
    const {
        coord: { lat, lon },
        main: { feels_like, humidity, temp, temp_max, temp_min },
        name,
        dt,
        timezone,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        feels_like,
        humidity,
        temp,
        temp_max,
        temp_min,
        name,
        dt,
        country,
        sunrise,
        sunset,
        speed,
        details,
        icon,
        timezone,
    };
}

export async function getFormattedCurrentWeather(params: Record<string, string |  number>) {
    return await getWeatherData('weather', params).then(formatCurrentWeather);
}
