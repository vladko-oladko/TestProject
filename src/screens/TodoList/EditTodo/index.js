import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import {editTodoAction} from '../../../store/todoList/slice';
import FormInput from '../../../components/FormInput';
import FormInputNumber from '../../../components/FormInputNumber';
import DatePicker from '../../../components/DatePicker';

const schema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  due: Yup.string(),
  priority: Yup.number().min(0).max(5),
});

const EditTodo = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {todoData} = route.params;

  const onSubmit = useCallback(
    (values) => {
      dispatch(editTodoAction({id: todoData.id, ...values}));
      navigation.navigate('Todo list');
    },
    [dispatch, navigation, todoData],
  );

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          title: todoData.title,
          due: todoData.due,
          description: todoData.description,
          priority: todoData.priority,
        }}
        validationSchema={schema}
        onSubmit={onSubmit}>
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
              onChange={(date) => setFieldValue('due', moment(date).format())}
              placeholder="Enter due date"
            />
            <FormInputNumber
              value={values.priority}
              onChange={(value) => setFieldValue('priority', value)}
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
