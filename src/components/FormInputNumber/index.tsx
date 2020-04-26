import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

interface Props {
  value: number | undefined;
  label: string;
  onChange: (value: number) => void;
  placeholder: string | undefined;
  errorMessage: any;
}

const FormInputNumber: React.FC<Props> = ({value, onChange,  ...props}) => {
  const handleChangeText = (textValue: string) => {
    onChange(+textValue);
  };

  return (
    <View style={styles.inputContainer}>
      <Input
        {...props}
        value={(value !== undefined && value !== null) ? value.toString() : ''}
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

export default FormInputNumber;
