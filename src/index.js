import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import * as serviceWorker from './serviceWorker';

import store from './react/redux/configureStore';
import ErrorBoundary from './react/components/container/errorboundary/ErrorBoundary';
import AppBootstrap from './react/AppBootstrap';

const styles = {
  container: {
    position: 'relative',
  },
};

const App = () => {
  return (
    <div id="app" style={styles.container}>
      <ErrorBoundary>
        <CookiesProvider>
          <Provider store={store}>
            <AppBootstrap />
          </Provider>
        </CookiesProvider>
      </ErrorBoundary>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
