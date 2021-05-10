import moment from 'moment';

export function isToday(date: moment.MomentInput): boolean {
  return moment(date).isSame(new Date(), 'day');
}
