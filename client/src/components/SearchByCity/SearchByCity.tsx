import { useCityOptions } from '../../hooks/useCityOptions';
import { AsyncSearch, Option } from '../AsyncSearch';

interface ISearchByCity {
    setSearchedCity: (city: Option) => void;
}
export function SearchByCity({ setSearchedCity }: ISearchByCity) {
    const { options, setSelectedOption, searchedTerm, setSearchedTerm } = useCityOptions(setSearchedCity);

    return (
        <AsyncSearch
            options={options}
            searchedTerm={searchedTerm}
            setSearchedTerm={setSearchedTerm}
            setSelectedOption={setSelectedOption}
        />
    );
}
