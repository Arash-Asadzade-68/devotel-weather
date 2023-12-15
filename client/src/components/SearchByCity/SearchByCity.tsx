import { FaSearch } from 'react-icons/fa';
import { ICityOption, useCityOptions } from '../../hooks/useCityOptions';

interface ISearchByCity {
    setSearchedCity: (city: ICityOption) => void;
}
export function SearchByCity({ setSearchedCity }: ISearchByCity) {
    const { setSearchText, options, setSelectedOption, searchedTerm, hideOptions } = useCityOptions(setSearchedCity);
    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.currentTarget.value);
    };

    return (
        <div className="flex w-3/4 items-center justify-center space-x-4 relative">
            <input
                type="text"
                className="text-sm sm:text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize rounded placeholder:lowercase text-slate-500"
                placeholder="Search for city..."
                onChange={onSearchChange}
                value={searchedTerm}
            />

            {options.length > 0 && !hideOptions && (
                <ul className="absolute top-12 !ml-0 bottom-0 left-0 w-full h-60 overflow-y-auto m-0 bg-white z-0 rounded-lg p-2 border ">
                    {options.map((option: ICityOption) => (
                        <li
                            className="p-3 hover:bg-slate-300 rounded-lg hover:text-slate-900 cursor-pointer"
                            id={option.value}
                            onClick={() => setSelectedOption(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
            <FaSearch className="text-slate-700 w-4 h-4" />
        </div>
    );
}
