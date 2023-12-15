import { useState } from 'react';
import { RiFolderHistoryFill } from 'react-icons/ri';
import { History } from '../History/History';
import { DaysWeatherStatus } from './DaysWeatherStatus';

export interface IWeatherStatus {
    humidity: number;
    temp_max: number;
    temp_min: number;
    details: string;
    icon: string;
    timezone: number;
    dt: number;
    day?: string;
}
interface IForcast {
    title: string;
    forcast: IWeatherStatus[];
}

export default function Forecast({ title, forcast }: IForcast) {
    const [showHistory, setShowHistory] = useState<boolean>(false);
    return (
        <div>
            <div className="flex items-center justify-between mt-6">
                <h2 className="uppercase">{title}</h2>
                <button
                    title="history"
                    onClick={() => setShowHistory(!showHistory)}
                    className="transition ease-out hover:scale-125 text-xl"
                >
                    <RiFolderHistoryFill aria-label="history-button" className="text-blue-500" />
                </button>
            </div>
            <hr className="my-2" />
            {showHistory ? <History /> : <DaysWeatherStatus statuses={forcast} />}
        </div>
    );
}
