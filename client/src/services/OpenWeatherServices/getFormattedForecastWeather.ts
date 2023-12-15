import { getWeatherData } from './weatherService';

function formatForecastWeather(data: any) {
    return data.list.map((item: any) => {
        return {
            humidity: item.main.humidity,
            temp: item.main.temp,
            dt: item.dt,
            icon: item.weather[0].icon,
            details: item.weather[0].main,
            timezone: data.city.timezone,
        };
    });
}

export async function getFormattedForecastWeather(params: Record<string, string>) {
    return await getWeatherData('forecast', { ...params, cnt: '7' }).then(formatForecastWeather);
}
