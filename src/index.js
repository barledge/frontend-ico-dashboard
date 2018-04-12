import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import { AppContainer } from 'react-hot-loader';
import { FocusStyleManager } from '@blueprintjs/core';

import './assets/scss/blueprint.scss';
import './assets/css/main.css';

import configureStore, { history } from './redux/configureStore';
import Main from './containers/app/Main';
import i18next from './utils/i18next';

const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <ConnectedRouter history={history}>
            <Main/>
          </ConnectedRouter>
        </I18nextProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

FocusStyleManager.onlyShowFocusOnTabs();

if (module.hot) {
  module.hot.accept('./containers/app/Main', () => {
    render(require('./containers/app/Main').default);
  });
}
