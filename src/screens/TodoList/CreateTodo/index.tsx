import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, Button} from 'react-native';
import {Formik} from 'formik';
import moment from 'moment';

import {createTodoAction} from '../../../store/todoList/slice';
import FormInput from '../../../components/FormInput';
import FormInputNumber from '../../../components/FormInputNumber';
import DatePicker from '../../../components/DatePicker';
import {todoSchema} from '../../../common/schemas/todo'
import {ParamList} from '../../../common/types/navigation';

type ProfileScreenNavigationProp = StackNavigationProp<ParamList, 'CreateTodo'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}
const CreateTodo: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (values) => {
      dispatch(createTodoAction(values));
      navigation.navigate('TodoList');
    },
    [dispatch, navigation],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Create todo',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          title: '',
          due: '',
          description: '',
          priority: undefined,
        }}
        validationSchema={todoSchema}
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
            <FormInputNumber
              label="Priority"
              errorMessage={errors.priority}
              value={values.priority}
              onChange={(value: number) => setFieldValue('priority', value)}
              placeholder="Enter priority (from 0 to 5)"
            />
            <Button
              title="Create"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CreateTodo;
