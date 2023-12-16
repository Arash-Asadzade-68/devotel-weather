import { useEffect, useReducer } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DaysWeatherStatus } from '../Forecast/DaysWeatherStatus';
import { Loading } from '../Loading';
import { getWeatherHistory } from '../../services/OpenWeatherServices/getWeatherHistory';
import { useSnackbarMessages } from '../../hooks/useSnackbarContext';
import { HistoryReducer } from './state/history.reducer';
import { setDateRange, setIsLoading, setWeatherHistory } from './state/history.actions';
import { errorHandler } from '../../utils/errorHandler';

export function History() {
    const [state, dispatch] = useReducer(HistoryReducer, {
        dateRange: {
            startDate: null,
            endDate: null,
        },
        history: [],
        isLoading: false,
    });
    const { sendSnackbarMessage } = useSnackbarMessages();

    useEffect(() => {
        async function loadWeatherHistory() {
            const data = await getWeatherHistory(state.dateRange);
            dispatch(setWeatherHistory(data));
            dispatch(setIsLoading(false));
        }
        if (state.dateRange.startDate && state.dateRange.endDate) {
            dispatch(setIsLoading(true));
            try {
                loadWeatherHistory();
            } catch (error) {
                errorHandler(error, sendSnackbarMessage);
            }
        } else {
            dispatch(setIsLoading(false));
        }
        // eslint-disable-next-line
    }, [state.dateRange]);

    const handleValueChange = (newValue: any) => {
        dispatch(setDateRange(newValue));
    };

    return (
        <div>
            <Datepicker value={state.dateRange} onChange={handleValueChange} showShortcuts={true} />
            {state.isLoading ? <Loading /> : <DaysWeatherStatus statuses={state.history} />}
        </div>
    );
}
