import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import store from './config/store';
import { initIntl, intlProviderProps } from './config/intl';

import App from './App';

import './index.css';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store()}>
      <IntlProvider {...intlProviderProps}>
        <App />
      </IntlProvider>
    </Provider>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
};

initIntl().then(renderApp);
