import { FaSearch } from 'react-icons/fa';

export function Search() {
    return (
        <form className="bg-slate-100 rounded-lg p-3 flex justify-between items-center mx-2">
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus-within:outline-none w-20 sm:w-64"
            />
            <FaSearch className="text-slate-600 ml-1" />
        </form>
    );
}
