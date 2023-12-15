import { formatToLocalTime } from '../../utils/formatToLocalTime';
import { IWeatherStatus } from './Forecast';
import Status from './Status';

interface IDaysWeatherStatus {
    statuses: IWeatherStatus[];
}
export function DaysWeatherStatus({ statuses }: IDaysWeatherStatus) {
    return (
        <>
            {statuses.map((status) => (
                <Status
                    min={`${status.temp_min}°`}
                    max={`${status.temp_max}°`}
                    imgSrc={`./icons/${status.icon}.png`}
                    details={status.details}
                    day={status.day ?? formatToLocalTime(status.dt, status.timezone, 'ddd')}
                    humidity={status.humidity}
                    key={status.humidity + status.details + status.dt}
                />
            ))}
        </>
    );
}
