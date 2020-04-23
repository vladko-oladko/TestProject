import React, {useEffect, useState, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Button} from 'react-native';
import Login from './src/screens/Login';
import TodoList from './src/screens/TodoList';
import CreateTodo from './src/screens/TodoList/CreateTodo';

import {getLoginStatus, setLoginStatus} from './src/services';

const Stack = createStackNavigator();

const App = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    getLoginStatus().then((value) => {
      setIsAuth(value);
    });
  }, [setIsAuth]);

  const handleLogout = useCallback(() => {
    setLoginStatus(false);
    setIsAuth(false);
  }, [setIsAuth]);

  // changeable by redux
  return (
    (isAuth === null && <Text>Login...</Text>) || (
      <NavigationContainer>
        <Stack.Navigator>
          {!isAuth ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen name="Todo list" component={TodoList} />
              <Stack.Screen name="Create todo" component={CreateTodo} />
            </>
          )}
        </Stack.Navigator>
        {isAuth && <Button title="Logout" onPress={handleLogout} />}
      </NavigationContainer>
    )
  );
};

export default App;
