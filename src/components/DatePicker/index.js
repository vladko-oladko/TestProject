import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Button,
} from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

const DatePickerInput = ({value, onChange, placeholder}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(value);

  useEffect(() => {
    setCurrentDate(value);
  }, [value]);

  const toggleDatePickerModal = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleSubmit = () => {
    onChange(currentDate || new Date());
    toggleDatePickerModal();
  };

  return (
    <>
      <Modal visible={isDatePickerVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.datePickerContainer}>
            <View style={styles.buttonContainer}>
              <Button title="OK" onPress={handleSubmit} />
            </View>
            <DatePicker
              date={currentDate || new Date()}
              onDateChange={setCurrentDate}
              mode="date"
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={toggleDatePickerModal}>
        <Text style={value ? styles.text : styles.placeholder}>
          {value ? moment(value).format('DD.MM.YYYY') : placeholder}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  inputContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  datePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 30,
    width: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
  },
  text: {
    fontSize: 18,
    height: 40,
    color: 'black',
  },
  placeholder: {
    fontSize: 18,
    color: 'grey',
  },
});

DatePickerInput.defaultProps = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default DatePickerInput;
