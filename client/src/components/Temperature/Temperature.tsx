import { FaTemperatureHigh } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { LuRefreshCcw } from 'react-icons/lu';

import SunStatusDetails from './SunStatusDetails';
import { TemperatureDetails } from './TemperatureDetails';
import { formatToLocalTime } from '../../utils/formatToLocalTime';

interface ITemperature {
    weather: {
        feels_like: number;
        humidity: number;
        temp: number;
        temp_max: number;
        temp_min: number;
        sunrise: number;
        sunset: number;
        details: string;
        icon: string;
        speed: 3.09;
        timezone: number;
    };
    refreshWeather: () => void;
}

export function Temperature({ weather, refreshWeather }: ITemperature) {
    return (
        <div>
            <div className="flex items-center justify-center py-3 text-sm sm:text-xl text-slate-950 font-semibold">
                <p>{weather.details}</p>
                <button
                    onClick={refreshWeather}
                    className="text-sm sm:text-xl text-slate-700 font-light transition ease-out hover:scale-125 ml-2"
                >
                    <LuRefreshCcw className="text-gray-500" />
                </button>
            </div>
            <div className="flex items-center justify-center py-3  text-slate-500">
                <img src={`./icons/${weather.icon}.png`} alt="rainy" className="w-20" />
                <p className="text-5xl font-semibold">{weather.temp}°</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between py-3 ">
                <div className="flex flex-col space-y-2 items-baseline">
                    <TemperatureDetails
                        Icon={FaTemperatureHigh}
                        value={`${weather.feels_like}°`}
                        title="Feels like"
                        color="text-red-400"
                    />
                    <TemperatureDetails
                        Icon={WiHumidity}
                        value={`${weather.humidity}%`}
                        title="Humidity"
                        color="text-blue-400"
                    />
                    <TemperatureDetails
                        Icon={FaWind}
                        value={`${weather.speed} km/h`}
                        title="Wind Speed"
                        color="text-gray-400"
                    />
                </div>
                <div className="grid grid-cols-2 gap-x-12 sm:flex sm:flex-col space-y-1 items-baseline mt-4 sm:mt-0">
                    <SunStatusDetails
                        title="Rise"
                        value={formatToLocalTime(weather.sunrise, weather.timezone, 'HH:MM a')}
                    />
                    <SunStatusDetails
                        title="Set"
                        value={formatToLocalTime(weather.sunset, weather.timezone, 'HH:MM a')}
                    />
                    <SunStatusDetails title="High" value={`${weather.temp_max}°`} />
                    <SunStatusDetails title="Low" value={`${weather.temp_min}°`} />
                </div>
            </div>
        </div>
    );
}
