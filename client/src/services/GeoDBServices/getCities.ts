import { getGeoDBData } from './geoDBCitiesService';

export async function getCities(city: string) {
    return await getGeoDBData('cities', { minPopulation: '1000000', namePrefix: city });
}
