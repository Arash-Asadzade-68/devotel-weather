import { Forecast } from '../../components/Forecast';
import { Spiner } from '../../components/Loading';
import { SearchByCity } from '../../components/SearchByCity';
import { Temperature } from '../../components/Temperature';
import { TimeAndLocation } from '../../components/TimeAndLocation';
import { Units } from '../../components/Units';
import { ICityOption } from '../../hooks/useCityOptions';
import { useLocation } from '../../hooks/useLocation';
import { useWeatherData } from '../../hooks/useWeatherData';
import { IWeatherState, UNITS } from './types.d';

export function Home() {
    const { lat, lon } = useLocation();
    const {
        onChangeUnits,
        setSearchedCity,
        refreshWeather,
        state,
    }: {
        onChangeUnits: (unit: UNITS) => void;
        refreshWeather: () => void;
        setSearchedCity: (city: ICityOption) => void;
        state: IWeatherState;
    } = useWeatherData(lat!, lon!);

    return (
        <div className="mx-auto max-w-3xl  py-1 md:py-5  px-4 sm:px-32  rounded-lg">
            <section className="flex justify-center my-6 ">
                <SearchByCity setSearchedCity={setSearchedCity} />
                <Units onChangeUnits={onChangeUnits} selectedUnit={state.units} />
            </section>
            <section className="flex flex-col justify-center my-6 sm:p-4  md:shadow-xl md:shadow-gray-400 rounded-xl sm:bg-white ">
                {state.isLoading ? (
                    <Spiner />
                ) : (
                    <>
                        <TimeAndLocation weather={state.weather} />
                        <Temperature weather={state.weather} refreshWeather={refreshWeather} />
                    </>
                )}
            </section>
            <section className="flex flex-col justify-center my-6 sm:p-4  md:shadow-xl md:shadow-gray-400 rounded-xl sm:bg-white ">
                {state.isLoading ? <Spiner /> : <Forecast title="daily forcast" forcast={state.weather.daily} />}
            </section>
        </div>
    );
}
