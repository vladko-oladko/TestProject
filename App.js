import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoList from './src/screens/TodoList';
import CreateTodo from './src/screens/TodoList/CreateTodo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo list" component={TodoList} />
        <Stack.Screen name="Create todo" component={CreateTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
