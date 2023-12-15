import moment from 'moment';
import { IWeatherStatus } from '../../components/Forecast/Forecast';
export async function getWeatherHistory({ startDate, endDate }: { startDate: string | null; endDate: string | null }) {
    const data = await fetch('./fixture/history.json');
    const res = await data.json();
    const result: IWeatherStatus[] = [];
    res.map((item: any) => {
        const date = moment.utc(item.dt_iso).local().format();
        const compareDate = moment(date, 'YYYY/MM/DD');
        const start = moment(startDate, 'YYYY/MM/DD');
        const end = moment(endDate, 'YYYY/MM/DD');

        if (compareDate.isBetween(start, end)) {
            result.push({
                humidity: item.main.humidity,
                temp: item.main.temp,
                dt: item.dt,
                icon: item.weather[0].icon,
                details: item.weather[0].main,
                timezone: item.timezone,
                day: compareDate.format('MM/DD'),
            });
        }
    });
    return result;
}
