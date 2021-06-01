import React from 'react';
import Modal from 'react-native-modal';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from '~/components/texts/Text';
import { Picker } from '@react-native-picker/picker';
import { Item } from '.';
import { ThemeContextState } from '~/types/themes';
import { ThemeContext } from '~/contexts/ThemeContext';

type P = {
  isVisible: boolean;
  hide: () => void;
  items: Item[];
  value: string | number;
  onConfirm: (value: string | number) => any;
  onChangeValue: (value: string | number) => any;
  placeholder?: string;
};

const PickerModalPresenter: React.FC<P> = ({
  isVisible,
  hide,
  items,
  value,
  onConfirm,
  onChangeValue,
  placeholder,
}: P) => {
  const { colors } = React.useContext<ThemeContextState>(ThemeContext);

  return (
    <Modal isVisible={isVisible} style={styles.modal} onBackdropPress={hide}>
      <ScrollView style={wrapperStyles(colors.background)}>
        {Platform.OS === 'ios' ? (
          <>
            <View style={styles.iosHeader}>
              <TouchableOpacity onPress={hide}>
                <Text>취소</Text>
              </TouchableOpacity>

              {!!placeholder && <Text isBold={true}>{placeholder}</Text>}

              <TouchableOpacity
                onPress={() => onConfirm(value || items[0].value)}>
                <Text>확인</Text>
              </TouchableOpacity>
            </View>

            <Picker
              selectedValue={value}
              onValueChange={onChangeValue}
              itemStyle={iosPickerItemStyle(colors.foreground)}>
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
              <View style={androidPlaceholderStyles(colors.gray300)}>
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
  androidPicker: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const wrapperStyles = (backgroundColor: string): ViewStyle => ({
  maxHeight: 200,
  backgroundColor,
});

const androidPlaceholderStyles = (backgroundColor: string): ViewStyle => ({
  paddingVertical: 12,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor,
});

const iosPickerItemStyle = (color: string): TextStyle => ({
  color,
  fontFamily: 'BMHANNAAir',
  fontSize: 16,
});

export default React.memo(PickerModalPresenter);
