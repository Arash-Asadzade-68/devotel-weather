import moment from 'moment';

export function formatToLocalTime(seconds: number, zone: number, format = 'ddd DD MMM YYYY HH:mm a') {
    return moment.utc(seconds, 'X').add(zone, 'seconds').format(format);
}

export function calculateWeekDays(index: number) {
    const today = new Date().getDay();
    const WEEK_DAYS = ['Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];
    const forecastDays = WEEK_DAYS.splice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, today));
    return forecastDays[index];
}
