import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {Formik} from 'formik';
import moment from 'moment';

import {editTodoAction} from '../../../store/todoList/slice';
import FormInput from '../../../components/FormInput';
import FormInputNumber from '../../../components/FormInputNumber';
import DatePicker from '../../../components/DatePicker';
import {todoSchema} from '../../../common/schemas/todo';
import {ParamList} from '../../../common/types/navigation';

type ProfileScreenNavigationProp = StackNavigationProp<ParamList, 'EditTodo'>;
type ProfileScreenRouteProp = RouteProp<ParamList, 'EditTodo'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const EditTodo: React.FC<Props> = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {todoData} = route.params;

  const onSubmit = useCallback(
    (values) => {
      dispatch(editTodoAction({id: todoData.id, ...values}));
      navigation.navigate('TodoList');
    },
    [dispatch, navigation, todoData],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Edit todo',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          title: todoData.title,
          due: todoData.due,
          description: todoData.description,
          priority: todoData.priority,
        }}
        validationSchema={todoSchema}
        onSubmit={onSubmit}>
        {({values, handleChange, handleSubmit, setFieldValue, isValid, errors}) => (
          <>
            <FormInput
              label="Title *"
              value={values.title}
              onChangeText={handleChange('title')}
              placeholder="Enter title *"
              errorMessage={errors.title}
            />
            <FormInput
              label="Description *"
              value={values.description}
              onChangeText={handleChange('description')}
              placeholder="Enter description *"
              errorMessage={errors.description}
            />
            <DatePicker
              label="Due date"
              value={values.due}
              onChange={(date) => setFieldValue('due', moment(date).format())}
              placeholder="Enter due date"
              errorMessage={errors.due}
            />
            <FormInputNumber
              label="Priority"
              value={values.priority}
              onChange={(value: number) => setFieldValue('priority', value)}
              placeholder="Enter priority"
              errorMessage={errors.priority}
            />
            <Button title="Edit" onPress={handleSubmit} disabled={!isValid} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default EditTodo;
