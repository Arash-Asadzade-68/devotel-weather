import { calculateWeekDays, formatToLocalTime } from '../../utils/formatToLocalTime';
import { IWeatherStatus } from './Forecast';
import Status from './Status';

interface IDaysWeatherStatus {
    statuses: IWeatherStatus[];
}
export function DaysWeatherStatus({ statuses }: IDaysWeatherStatus) {
    return (
        <>
            {statuses.map((status, index) => (
                <Status
                    time={formatToLocalTime(status.dt, status.timezone, 'hh:mm')}
                    temp={`${status.temp}°`}
                    imgSrc={`./icons/${status.icon}.png`}
                    details={status.details}
                    day={status.day ?? calculateWeekDays(index)}
                    humidity={status.humidity}
                    key={status.dt + index}
                />
            ))}
        </>
    );
}
