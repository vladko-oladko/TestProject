import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const FormInput = ({value, onChange, placeholder}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const toggleDatePickerModal = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  return (
    <>
      <Modal visible={isDatePickerVisible}>
        <DatePicker date={value} onDateChange={onChange} />
      </Modal>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={toggleDatePickerModal}>
        <Text>{moment(value).format('DD.MM.YYYY')}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
  },
});

export default FormInput;
