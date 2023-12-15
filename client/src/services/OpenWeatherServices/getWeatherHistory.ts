export async function getWeatherHistory({ startDate, endDate }: { startDate: string | null; endDate: string | null }) {
    const data = await fetch('./fixture/history');
    const res = await data.json();
    console.log('data', res, startDate, endDate);
}
