import moment from 'moment';
import StackFlashMessage, { Type } from 'react-native-stack-flash-message';

export function isToday(date: moment.MomentInput): boolean {
  return moment(date).isSame(new Date(), 'day');
}

export function flash(title: string, contents: string, type: Type = 'success') {
  StackFlashMessage.show({
    type,
    title,
    contents,
  });
}
