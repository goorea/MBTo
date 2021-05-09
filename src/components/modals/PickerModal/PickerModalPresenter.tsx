import React from 'react';
import Modal from 'react-native-modal';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '~/components/Text';
import { Picker } from '@react-native-picker/picker';
import { Item } from '.';

type P = {
  isVisible: boolean;
  hide: () => void;
  items: Item[];
  value: string | number;
  onChangeValue: (value: string | number) => any;
  placeholder?: string;
};

const PickerModalPresenter: React.FC<P> = ({
  isVisible,
  hide,
  items,
  value,
  onChangeValue,
  placeholder,
}: P) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal} onBackdropPress={hide}>
      <ScrollView style={styles.wrapper}>
        {Platform.OS === 'ios' ? (
          <>
            <View style={styles.iosHeader}>
              <TouchableOpacity onPress={hide}>
                <Text>취소</Text>
              </TouchableOpacity>

              {!!placeholder && <Text isBold={true}>{placeholder}</Text>}

              <TouchableOpacity
                onPress={() => onChangeValue(value || items[0].value)}>
                <Text>확인</Text>
              </TouchableOpacity>
            </View>

            <Picker
              selectedValue={value}
              onValueChange={onChangeValue}
              itemStyle={styles.iosPicker}>
              {items.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </>
        ) : (
          <View>
            {!!placeholder && (
              <View style={styles.androidPlaceholder}>
                <Text isBold={true}>{placeholder}</Text>
              </View>
            )}

            {items.map(item => (
              <TouchableOpacity
                onPress={() => onChangeValue(item.value)}
                style={styles.androidPicker}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  wrapper: {
    maxHeight: 200,
    backgroundColor: '#fff',
  },
  iosHeader: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    zIndex: 1,
  },
  iosPicker: {
    fontFamily: 'BMHANNAAir',
    fontSize: 16,
  },
  androidPicker: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  androidPlaceholder: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
});

export default React.memo(PickerModalPresenter);
