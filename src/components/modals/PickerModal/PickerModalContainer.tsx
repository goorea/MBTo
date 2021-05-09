import React, { MutableRefObject } from 'react';
import PickerModalPresenter from './PickerModalPresenter';
import { PickerModalHandle, Item } from '.';

type P = {
  items: Item[];
  value: string | number;
  onChange: (value: string | number) => any;
  placeholder?: string;
};

const PickerModal: React.ForwardRefRenderFunction<PickerModalHandle, P> = (
  { items, value, onChange, placeholder }: P,
  ref:
    | ((instance: PickerModalHandle | null) => void)
    | MutableRefObject<PickerModalHandle | null>
    | null,
) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const onChangeValue = (v: string | number) => {
    onChange(v);
    hide();
  };

  React.useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  return (
    <PickerModalPresenter
      isVisible={isVisible}
      hide={hide}
      items={items}
      value={value}
      onChangeValue={onChangeValue}
      placeholder={placeholder}
    />
  );
};

export default React.forwardRef(PickerModal);
