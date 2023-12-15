import { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DaysWeatherStatus } from '../Forecast/DaysWeatherStatus';
import { Loading } from '../Loading';
import { getWeatherHistory } from '../../services/OpenWeatherServices/getWeatherHistory';
import { IWeatherStatus } from '../Forecast/Forecast';
import { useSnackbarMessages } from '../../hooks/useSnackbarContext/useSnackbarMessages';

export function History() {
    const [history, setHisory] = useState<IWeatherStatus[]>([]);
    const { sendSnackbarMessage } = useSnackbarMessages();
    const [state, setState] = useState({
        startDate: null,
        endDate: null,
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function loadWeatherHistory() {
            const data = await getWeatherHistory(state);
            setHisory(data);
            setIsLoading(false);
        }
        if (state.startDate && state.endDate) {
            setIsLoading(true);
            try {
                loadWeatherHistory();
            } catch (error) {
                if (error instanceof Error) {
                    sendSnackbarMessage(error.message, 'error');
                }
            }
        } else {
            setIsLoading(false);
        }
        // eslint-disable-next-line
    }, [state]);

    const handleValueChange = (newValue: any) => {
        setState(newValue);
    };

    return (
        <div>
            <Datepicker value={state} onChange={handleValueChange} showShortcuts={true} />
            {isLoading ? <Loading /> : <DaysWeatherStatus statuses={history} />}
        </div>
    );
}
