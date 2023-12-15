import moment from 'moment';

export function formatToLocalTime(seconds: number, zone: number, format = 'ddd DD MMM YYYY HH:mm a') {
    return moment.utc(seconds, 'X').add(zone, 'seconds').format(format);
}
