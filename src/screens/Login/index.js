import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, TextInput, Button, SafeAreaView} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {loginAction} from '../../store/user/sagas';
import FormInput from '../../components/FormInput';

const schema = Yup.object().shape({
  userName: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();

  const handleLoginPress = useCallback(async (loginData) => {
    dispatch(loginAction(loginData));
  }, []);

  return (
    <SafeAreaView style={styles.wrap}>
      <Formik
        validateOnMount
        initialValues={{
          userName: null,
          password: null,
        }}
        validationSchema={schema}
        onSubmit={handleLoginPress}>
        {({values, handleChange, handleSubmit, isValid}) => (
          <View style={styles.container}>
            <FormInput
              value={values.userName}
              onChangeText={handleChange('userName')}
              placeholder="User name"
            />
            <FormInput
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Password"
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
