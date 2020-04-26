import React, {useEffect, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, ActivityIndicator} from 'react-native';
import {initUserLoginStatusAction, logoutAction} from '../../store/user/sagas';
import {selectIsLoggedUser} from '../../store/user/selectors';
import {selectIsShownSpinner} from '../../store/global/selectors';

import Login from '../Login';
import TodoList from '../TodoList';
import CreateTodo from '../TodoList/CreateTodo';
import EditTodo from '../TodoList/EditTodo';

const Main: React.FC = () => {
  const Stack = useMemo(() => createStackNavigator(), []);
  const dispatch = useDispatch();
  const isLoggedUser = useSelector(selectIsLoggedUser);
  const isLoading = useSelector(selectIsShownSpinner);

  useEffect(() => {
    dispatch(initUserLoginStatusAction());
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedUser ? (
            <>
              <Stack.Screen name="TodoList" component={TodoList} />
              <Stack.Screen name="CreateTodo" component={CreateTodo} />
              <Stack.Screen name="EditTodo" component={EditTodo} />
            </>
          ) : <Stack.Screen name="Login" component={Login} />}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

export default Main;
