import React from 'react';
import { Provider } from 'react-redux';
import I18nProvider from './i18n';

import store from './store';
import App from './screens';

const ReduxApp = () => (
    <Provider store={store}>
        <I18nProvider>
            <App />
        </I18nProvider>
    </Provider>
);

export default ReduxApp;
