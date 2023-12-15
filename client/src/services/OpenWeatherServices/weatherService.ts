const baseURL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherData(service: string, searchParams: Record<string, string | number>) {
    const url = new URL(baseURL + '/' + service);
    url.search = new URLSearchParams({ ...searchParams, appid: import.meta.env.VITE_WEATHER_API_KEY }).toString();

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
}
