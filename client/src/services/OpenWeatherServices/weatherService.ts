const baseURL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherData(service: string, searchParams: Record<string, string | number>) {
    const url = new URL(baseURL + '/' + service);
    url.search = new URLSearchParams({ ...searchParams, appid: import.meta.env.VITE_WEATHER_API_KEY }).toString();
    const response = await fetch(url);
    return await response.json();
}
