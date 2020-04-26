import React, {useMemo} from 'react';
import {Provider} from 'react-redux';
import Main from './src/screens/Main';

import {createStore} from './src/store/index';

const App = () => {
  const store = useMemo(() => createStore(), []);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
