import { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DaysWeatherStatus } from '../Forecast/DaysWeatherStatus';
import { Loading } from '../Loading';
import { getWeatherHistory } from '../../services/OpenWeatherServices/getWeatherHistory';

export function History() {
    const [state, setState] = useState({
        startDate: null,
        endDate: null,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function loadWeatherHistory() {
            const data = await getWeatherHistory(state);
            console.log('data', data);
        }
        if (state.startDate && state.endDate) {
            setIsLoading(true);
            loadWeatherHistory();
        } else {
            setIsLoading(false);
        }
    }, [state]);

    const handleValueChange = (newValue: any) => {
        setState(newValue);
    };

    return (
        <div>
            <Datepicker value={state} onChange={handleValueChange} showShortcuts={true} />
            {isLoading ? <Loading /> : <DaysWeatherStatus statuses={[]} />}
        </div>
    );
}
