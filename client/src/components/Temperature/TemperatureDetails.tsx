interface ITemperatureDetails {
    title: string;
    Icon: React.ElementType;
    value: string;
    color: string;
}
export function TemperatureDetails({ Icon, title, value, color }: ITemperatureDetails) {
    return (
        <div className="flex font-light text-sm items-center justify-center">
            <Icon className={`mr-1 w-3 h-3 ${color}`} />
            {title}:<span className="ml-1 font-semibold text-slate-700">{value}</span>
        </div>
    );
}
