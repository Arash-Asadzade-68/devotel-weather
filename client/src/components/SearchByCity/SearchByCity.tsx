import { ICityOption, useCityOptions } from '../../hooks/useCityOptions';
import { AsyncSearch } from '../AsyncSearch';

interface ISearchByCity {
    setSearchedCity: (city: ICityOption) => void;
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
