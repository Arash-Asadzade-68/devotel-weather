import { UNITS } from '../../pages/Home/types.d';

interface IUnits {
    onChangeUnits: (unit: UNITS) => void;
    selectedUnit: UNITS;
}

export function Units({ onChangeUnits, selectedUnit }: IUnits) {
    return (
        <div className="flex w-1/4 items-center justify-center">
            <button
                name="metric"
                className={`text-sm sm:text-xl text-slate-700 font-light transition ease-out hover:scale-125 ${
                    selectedUnit === UNITS.METRIC ? '!text-blue-600 !scale-125' : ''
                }`}
                onClick={() => onChangeUnits(UNITS.METRIC)}
            >
                °C
            </button>
            <p className="text-sm sm:text-xl mx-1 text-slate-500">|</p>
            <button
                name="imperial"
                className={`text-sm sm:text-xl text-slate-700 font-light transition ease-out hover:scale-125 ${
                    selectedUnit === UNITS.IMPERIAL ? '!text-blue-600 !scale-125' : ''
                }`}
                onClick={() => onChangeUnits(UNITS.IMPERIAL)}
            >
                °F
            </button>
        </div>
    );
}
