const baseURL = 'https://api.geoapify.com/v1/';

export async function getGeopifyData(service: string, searchParams: Record<string, string>) {
    const url = new URL(baseURL + '/' + service);
    url.search = new URLSearchParams(searchParams).toString();

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
