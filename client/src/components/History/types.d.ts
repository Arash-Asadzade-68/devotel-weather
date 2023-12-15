import { IWeatherStatus } from '../Forecast/Forecast';

export type DateRange = { startDate: string | null; endDate: string | null };
export interface IHistoryState {
    isLoading: boolean;
    history: IWeatherStatus[] | undefined;
    dateRange: DateRange;
}
