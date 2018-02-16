import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './store.redux';
import { ConnectedRouter } from 'react-router-redux'
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);
registerServiceWorker();
