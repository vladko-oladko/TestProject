import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, TextInput, Button, SafeAreaView} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {loginAction} from '../../store/user/sagas';
import FormInput from '../../components/FormInput';
import { loginSchema } from '../../common/schemas/login';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleLoginPress = useCallback(async (loginData) => {
    dispatch(loginAction(loginData));
  }, []);

  return (
    <SafeAreaView style={styles.wrap}>
      <Formik
        validateOnMount
        initialValues={{
          userName: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleLoginPress}>
        {({values, handleChange, handleSubmit, isValid}) => (
          <View style={styles.container}>
            <FormInput
              value={values.userName}
              onChangeText={handleChange('userName')}
              placeholder="User name"
              autoCapitalize="none"
            />
            <FormInput
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleSubmit} disabled={!isValid} />
            </View>
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
  buttonContainer: {
    margin: 12,
  },
  container: {
    width: '80%',
    marginLeft: '10%',
  },
});

export default Login;
