import { TiWeatherSunny } from 'react-icons/ti';
import { TbSunset2 } from 'react-icons/tb';

interface ISunStatus {
    title: string;
    value: string;
}

export default function SunStatusDetails({ title, value }: ISunStatus) {
    return (
        <div className="flex items-center justify-start  text-sm  font-light">
            {title === 'Set' ? (
                <TbSunset2 className="text-orange-600" />
            ) : (
                <TiWeatherSunny className="text-yellow-500" />
            )}
            <p className="font-light">
                {title}: <span className="font-semibold ml-1">{value}</span>
            </p>
        </div>
    );
}
