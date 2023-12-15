import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { getCities } from '../../services/GeoDBServices/getCities';
import { useSnackbarMessages } from '../useSnackbarContext/useSnackbarMessages';

export interface ICityOption {
    value: string;
    label: string;
}

export function useCityOptions(setSearchedCity: (option: ICityOption) => void) {
    const [searchedTerm, setSearchedTerm] = useState<string>('');
    const [options, setOptions] = useState<ICityOption[]>([]);
    const [hideOptions, setHideOptions] = useState<boolean>(false);
    const { sendSnackbarMessage } = useSnackbarMessages();

    useEffect(() => {
        return () => {
            setSearchText.cancel();
        };
    });

    function onChange(search: string) {
        setSearchedTerm(search);
        setHideOptions(false);
    }
    function setSelectedOption(option: ICityOption) {
        setSearchedTerm(option.label);
        setSearchedCity(option);
        setHideOptions(true);
    }
    const setSearchText = useMemo(() => {
        return debounce(onChange, 100);
    }, []);

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
                if (error instanceof Error) {
                    sendSnackbarMessage(error.message, 'error');
                }
            }
        }
        // eslint-disable-next-line
    }, [searchedTerm]);

    return {
        options,
        setSearchText,
        setSelectedOption,
        searchedTerm,
        hideOptions,
    };
}
