import { WiHumidity } from 'react-icons/wi';
interface IStatus {
    temp: string;
    time: string;
    details: string;
    imgSrc: string;
    humidity: number;
    day: string;
}
export default function Status({ imgSrc, temp, time, details, humidity, day }: IStatus) {
    return (
        <div className="border-slate-500 rounded-lg h-10 w-full grid grid-cols-6 gap-1 items-center justify-center">
            <p className="text-sm sm:text-base font-bold flex justify-center items-center">{day}</p>
            <p className="text-sm sm:text-base flex justify-center items-center space-x-1 font-extralight text-gray-500">
                <span className="text-blue-300">
                    <WiHumidity />
                </span>
                {humidity}%
            </p>
            <div className="flex justify-center items-center">
                <img src={imgSrc} alt="rainy" className="w-8" />
            </div>
            <p className="text-sm sm:text-base text-center font-extralight text-gray-500">{details}</p>
            <p className="text-sm sm:text-base text-center font-semibold">{temp}</p>
            <p className="text-sm sm:text-base text-center font-semibold">{time}</p>
        </div>
    );
}
