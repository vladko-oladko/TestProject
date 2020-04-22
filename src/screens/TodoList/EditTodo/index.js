import React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormInput from '../../../components/FormInput';
import DatePicker from '../../../components/DatePicker';

const schema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  due: Yup.date(),
  priority: Yup.number().min(0).max(5),
});

const EditTodo = () => {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          title: null,
          due: null,
          description: null,
          priority: 0,
        }}
        validationSchema={schema}
        validateOnMount
        onSubmit={(values) => console.log(values)}>
        {({values, handleChange, handleSubmit, setFieldValue, isValid}) => (
          <>
            <FormInput
              value={values.title}
              onChangeText={handleChange('title')}
              placeholder="Enter title *"
            />
            <FormInput
              value={values.description}
              onChangeText={handleChange('description')}
              placeholder="Enter description *"
            />
            <DatePicker
              value={values.due}
              onChange={(date) => setFieldValue('due', date)}
              placeholder="Enter due date"
            />
            <FormInput
              value={values.priority}
              onChangeText={handleChange('priority')}
              keyboardType="numeric"
              placeholder="Enter priority"
            />
            <View style={styles.buttonContainer}>
              <Button title="Edit" onPress={handleSubmit} disabled={!isValid} />
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

export default EditTodo;
