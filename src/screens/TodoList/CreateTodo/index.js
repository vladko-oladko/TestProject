import React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {Formik} from 'formik';
import Yup from 'yup';
import FormInput from '../../../components/FormInput';
import DatePicker from '../../../components/DatePicker';
import moment from 'moment';

const CreateTodo = () => {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          title: '',
          due: new Date(),
          description: '',
          priority: 0,
        }}
        onSubmit={(values) => console.log(values)}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <FormInput
              name="title"
              value={values.title}
              onChange={(s) => console.log(s)}
              placeholder="Enter title"
            />
            <DatePicker
              value={values.due}
              onChange={(s) => console.log(s)}
              placeholder="Enter due date"
            />
            <FormInput
              name="description"
              value={values.description}
              onChange={handleChange('description')}
              placeholder="Enter description"
            />
            <View style={styles.buttonContainer}>
              <Button onPress={handleSubmit} title="Create" />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  scrollView: {
    height: '100%',
  },
});

export default CreateTodo;
