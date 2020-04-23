import React, {useCallback} from 'react';
import {StyleSheet, View, TextInput, Button, SafeAreaView} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {requestAPI} from '../../services/index';
import {setLoginStatus} from '../../services/loginStatus';

const schema = Yup.object().shape({
  userName: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const handleLoginPress = useCallback(async ({userName, password}) => {
    const response = await requestAPI(
      'https://portal.poimapper.com/json/auth/todo/login',
      {
        method: 'POST',
        body: {
          userName,
          password,
        },
        errMessage: 'Login failed',
      },
    );

    setLoginStatus(!!response);
  }, []);

  return (
    <SafeAreaView style={styles.wrap}>
      <Formik
        initialValues={{
          login: null,
          password: null,
        }}
        validationSchema={schema}
        onSubmit={handleLoginPress}>
        {({values, handleChange, handleSubmit, isValid}) => (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('userName')}
              value={values.login}
              textContentType="username"
              placeholder="User name"
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
              textContentType="password"
              placeholder="Password"
            />
            <Button title="Login" onPress={handleSubmit} disabled={!isValid} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    marginLeft: '10%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    borderColor: 'gray',
  },
});

export default Login;
