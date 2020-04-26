import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, StyleSheet, ScrollView, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {selectTodoList} from '../../store/todoList/selectors';
import {fetchTodoListAction} from '../../store/todoList/sagas';
import {ToDoInterface} from '../../common/interfaces/todo';
import {ParamList} from '../../common/types/navigation';
import TodoItem from './TodoItem';
import { logoutAction } from '../../store/user/sagas';

export interface Props {
  navigation: StackNavigationProp<ParamList, 'TodoList'>
}

const TodoList: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const todoItems = useSelector(selectTodoList);

  useEffect(() => {
    dispatch(fetchTodoListAction());
  }, [dispatch]);

  const handleClickCreate = useCallback(() => {
    navigation.navigate('CreateTodo');
  }, [navigation]);

  const handleClickLogout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const handleClickEdit = useCallback(
    (todoData) => {
      navigation.navigate('EditTodo', {
        todoData,
      });
    },
    [navigation],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      title: 'Todo list',
      headerLeft: () =>  <Button onPress={handleClickLogout} title="Logout" />,
      headerRight: () => <Button onPress={handleClickCreate} title="New" />,
    });
  }, [navigation, handleClickCreate]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        {todoItems.map((element: ToDoInterface) => (
          <TodoItem
            data={element}
            key={element.id}
            onPressEdit={handleClickEdit}
          />
        ))}
      </ScrollView>
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

export default TodoList;
