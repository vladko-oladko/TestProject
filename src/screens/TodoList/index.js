import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, StyleSheet, ScrollView, Button} from 'react-native';
import {selectTodoList} from '../../store/todoList/selectors';
import {fetchTodoListAction} from '../../store/todoList/sagas';
import TodoItem from './TodoItem';

const TodoList = ({navigation}) => {
  const dispatch = useDispatch();
  const todoItems = useSelector(selectTodoList);

  useEffect(() => {
    dispatch(fetchTodoListAction());
  }, [dispatch]);

  const handleClickCreate = useCallback(() => {
    navigation.navigate('Create todo');
  }, [navigation]);

  const handleClickEdit = useCallback(
    (todoData) => {
      navigation.navigate('Edit todo', {
        todoData,
      });
    },
    [navigation],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={handleClickCreate} title="New" />,
    });
  }, [navigation, handleClickCreate]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        {todoItems.map((element) => (
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
