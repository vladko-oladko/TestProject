import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const FormInput = ({name, placeholder, ...rest}) => (
  <View style={styles.inputContainer}>
    <TextInput
      {...rest}
      name={name}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
  },
});

export default FormInput;
