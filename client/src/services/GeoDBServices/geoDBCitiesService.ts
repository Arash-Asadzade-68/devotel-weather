const baseURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_Key,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
};

export async function getGeoDBData(service: string, searchParams: Record<string, string>) {
    const url = new URL(baseURL + '/' + service);
    url.search = new URLSearchParams(searchParams).toString();

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
