export enum UNITS {
    METRIC = 'metric',
    IMPERIAL = 'imperial',
}
export interface IWeatherState {
    query?: {
        lat: string;
        lon: string;
    };
    units: UNITS;
    weather: any;
    isLoading?: boolean;
}
