import AsyncStorage from '@react-native-community/async-storage';

export async function setLoginStatus(status: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(!!status));
  } catch (error) {
    console.error('Something went wrong', error);
  }
}

export async function getLoginStatus(): Promise<boolean> {
  try {
    const isActive = await AsyncStorage.getItem('isUserLoggedIn');
    return !!JSON.parse(isActive);
  } catch (error) {
    console.error('Something went wrong', error);
  }
  return false;
}
