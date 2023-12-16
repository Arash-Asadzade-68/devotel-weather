import { useState, useMemo, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import debounce from 'lodash.debounce';

export type Option = { label: string; value: string };
interface IAsyncSearch {
    searchedTerm: string;
    setSearchedTerm: (term: string) => void;
    setSelectedOption: (option: Option) => void;
    options: { label: string; value: string }[];
}

export function AsyncSearch({ options, searchedTerm, setSearchedTerm, setSelectedOption }: IAsyncSearch) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        return () => {
            setSearchText.cancel();
        };
    });
    function onChange(search: string) {
        setSearchedTerm(search);
        setIsOpen(true);
    }
    function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(event.currentTarget.value);
    }
    const setSearchText = useMemo(() => {
        return debounce(onChange, 100);
        // eslint-disable-next-line
    }, []);

    return (
        <div
            tabIndex={-1}
            className="flex w-3/4 items-center justify-center space-x-4 relative bg-white rounded shadow-xl py-1 px-2"
        >
            <input
                type="text"
                className="text-sm sm:text-xl font-light p-2 w-full  focus:outline-none capitalize  placeholder:lowercase text-slate-500"
                placeholder="Search for city..."
                onChange={onSearchChange}
                value={searchedTerm}
            />
            <div className="flex items-center space-x-2">
                <IoCloseOutline
                    className={`text-slate-500 hidden ${searchedTerm.length > 0 && '!inline'} cursor-pointer`}
                    onClick={() => setSearchedTerm('')}
                />
                <FaSearch className="text-slate-500" />
            </div>
            <div
                className={`hidden ${
                    isOpen && options.length > 0 && '!flex flex-col'
                } absolute top-14 !ml-0 bottom-0 left-0 w-full h-60 overflow-y-auto m-0 bg-white z-999 rounded-lg p-2 border `}
                onBlur={() => setIsOpen(false)}
            >
                {options.map((option: Option) => (
                    <p
                        className="p-3 hover:bg-slate-300 rounded-lg hover:text-slate-900 cursor-pointer"
                        id={option.value}
                        key={option.value}
                        onClick={() => {
                            setSelectedOption(option);
                            setIsOpen(false);
                        }}
                    >
                        {option.label}
                    </p>
                ))}
            </div>
        </div>
    );
}
