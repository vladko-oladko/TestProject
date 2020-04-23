import React, {useMemo} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoList from './src/screens/TodoList';
import CreateTodo from './src/screens/TodoList/CreateTodo';
import EditTodo from './src/screens/TodoList/EditTodo';
import {createStore} from './src/store/index';

const App = () => {
  const Stack = useMemo(() => createStackNavigator(), []);
  const store = useMemo(() => createStore(), []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Todo list" component={TodoList} />
          <Stack.Screen name="Create todo" component={CreateTodo} />
          <Stack.Screen name="Edit todo" component={EditTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
