import {AsyncStorage} from 'react-native';

export async function setLoginStatus(status) {
  try {
    await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(!!status));
  } catch (error) {
    console.error('Something went wrong', error);
  }
}

export async function getLoginStatus() {
  try {
    const isActive = await AsyncStorage.getItem('isUserLoggedIn');
    return JSON.parse(!!isActive);
  } catch (error) {
    console.error('Something went wrong', error);
  }
  return false;
}
