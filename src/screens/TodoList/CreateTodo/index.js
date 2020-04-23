import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import {createTodoAction} from '../../../store/todoList/slice';
import FormInput from '../../../components/FormInput';
import DatePicker from '../../../components/DatePicker';

const schema = Yup.object().shape({
  title: Yup.string().min(1).required('Title is required'),
  description: Yup.string().min(1).required('Title is required'),
  due: Yup.string(),
  priority: Yup.number()
    .typeError('Priority must be a number (0 - 5)')
    .min(0, 'Value should be from 0 to 5')
    .max(5, 'Value should be from 0 to 5'),
});

const CreateTodo = () => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (values) => {
      dispatch(createTodoAction(values));
    },
    [dispatch],
  );

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          title: '',
          due: '',
          description: '',
          priority: 0,
        }}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          isValid,
          errors,
        }) => (
          <>
            <FormInput
              label="Title *"
              value={values.title}
              onChangeText={handleChange('title')}
              placeholder="Enter title"
              errorMessage={errors.title}
            />
            <FormInput
              label="Description *"
              value={values.description}
              onChangeText={handleChange('description')}
              placeholder="Enter description"
              errorMessage={errors.description}
            />
            <DatePicker
              label="Due date"
              value={values.due}
              onChange={(date) => setFieldValue('due', moment(date).format())}
              placeholder="Enter due date"
              errorMessage={errors.title}
            />
            <FormInput
              label="Priority"
              value={values.priority}
              onChangeText={handleChange('priority')}
              keyboardType="numeric"
              placeholder="Enter priority (from 0 to 5)"
              errorMessage={errors.priority}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Create"
                onPress={handleSubmit}
                disabled={!isValid}
              />
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
