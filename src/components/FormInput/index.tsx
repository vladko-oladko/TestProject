import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

const FormInput= (props: any) => (
  <View style={styles.inputContainer}>
    <Input {...props} placeholderTextColor="grey" />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
  },
});

export default FormInput;
