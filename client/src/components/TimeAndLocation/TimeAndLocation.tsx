import { formatToLocalTime } from '../../utils/formatToLocalTime';
import { FaLocationDot } from 'react-icons/fa6';

interface ITimeAndLocation {
    weather: {
        dt: number;
        timezone: number;
        name: string;
        country: string;
    };
}
export function TimeAndLocation({ weather: { timezone, dt, country, name } }: ITimeAndLocation) {
    return (
        <div>
            <div className="flex items-center justify-center sm:mx-6 ">
                <p className="text-slate-600 text-sm sm:text-xl font-extralight">{formatToLocalTime(dt, timezone)}</p>
            </div>
            <div className="flex items-center justify-center my-3 ">
                <p className="text-slate-600 text-lg sm:text-3xl font-medium mr-1">{`${name},${country}`}</p>
                <FaLocationDot className="text-blue-500 text-lg" />
            </div>
        </div>
    );
}
