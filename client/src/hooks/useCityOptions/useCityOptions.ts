import { useMemo, useState } from 'react';
import { getCities } from '../../services/GeoDBServices/getCities';
import { useSnackbarMessages } from '../useSnackbarContext/useSnackbarMessages';
import { errorHandler } from '../../utils/errorHandler';

export interface ICityOption {
    value: string;
    label: string;
}

export function useCityOptions(setSearchedCity: (option: ICityOption) => void) {
    const [searchedTerm, setSearchedTerm] = useState<string>('');
    const [options, setOptions] = useState<ICityOption[]>([]);
    const { sendSnackbarMessage } = useSnackbarMessages();

    function setSelectedOption(option: ICityOption) {
        setSearchedTerm(option.label);
        setSearchedCity(option);
    }
    useMemo(async () => {
        if (searchedTerm.length > 0) {
            try {
                const cities = await getCities(searchedTerm);
                if (cities?.data?.length > 0) {
                    setOptions(
                        cities.data.map((city: any) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name} ${city.countryCode}`,
                            };
                        }),
                    );
                }
            } catch (error) {
                errorHandler(error, sendSnackbarMessage);
            }
        } else {
            setOptions([]);
        }
        // eslint-disable-next-line
    }, [searchedTerm]);

    return {
        options,
        setSelectedOption,
        searchedTerm,
        setSearchedTerm,
    };
}
