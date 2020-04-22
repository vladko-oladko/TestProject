import React, {useState, useCallback} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Button} from 'react-native';
import TodoItem from './TodoItem';
import {getTodoItems} from '../../common/mock/todoItems';

const TodoList = ({navigation}) => {
  const [todoItems, setTodoItems] = useState(getTodoItems());

  const handleClickCreate = useCallback(() => {
    navigation.navigate('Create todo');
  }, [navigation]);

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
          <TodoItem data={element} key={element.id} />
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
