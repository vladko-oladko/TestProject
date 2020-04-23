import React, {useEffect, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Text} from 'react-native';
import {initUserLoginStatusAction, logoutAction} from '../../store/user/sagas';
import {selectIsLoggedUser} from '../../store/user/selectors';

import Login from '../Login';
import TodoList from '../TodoList';
import CreateTodo from '../TodoList/CreateTodo';

const Main = () => {
  const Stack = useMemo(() => createStackNavigator(), []);
  const dispatch = useDispatch();
  const isLoggedUser = useSelector(selectIsLoggedUser);

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  useEffect(() => {
    dispatch(initUserLoginStatusAction());
  }, []);

  return (
    (isLoggedUser === null && <Text>Init...</Text>) || (
      <>
        {isLoggedUser && <Button title="Logout" onPress={handleLogout} />}
        <NavigationContainer>
          <Stack.Navigator>
            {(isLoggedUser && (
              <>
                <Stack.Screen name="Todo list" component={TodoList} />
                <Stack.Screen name="Create todo" component={CreateTodo} />
              </>
            )) || <Stack.Screen name="Login" component={Login} />}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  );
};

export default Main;
