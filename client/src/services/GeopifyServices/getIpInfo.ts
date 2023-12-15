import { getGeopifyData } from './geopifyService';

export async function getIpInfo() {
    return await getGeopifyData('ipinfo', { apiKey: import.meta.env.VITE_GEOPIFY_API_Key });
}
