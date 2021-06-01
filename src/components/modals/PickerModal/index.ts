import PickerModalContainer from './PickerModalContainer';

export type PickerModalHandle = {
  show: () => void;
  hide: () => void;
};

export type Item = {
  label: string;
  value: string | number;
};

export default PickerModalContainer;
