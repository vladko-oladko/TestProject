import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

const FormInputNumber = ({value, onChange, ...props}) => {
  const handleChangeText = (textValue) => {
    onChange(+textValue);
  };

  return (
    <View style={styles.inputContainer}>
      <Input
        {...props}
        value={value !== undefined ? value.toString() : ''}
        onChangeText={handleChangeText}
        placeholderTextColor="grey"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
  },
});

FormInputNumber.propTypes = {
  value: PropTypes.number,
};

export default FormInputNumber;
