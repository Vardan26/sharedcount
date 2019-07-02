import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { history } from './store/configureStore';
import './styles/index.css';
import Routes from './Router/index'

const render = () => {
    return ReactDOM.render(
            <Provider store={store}>
                <Routes history={history}/>
            </Provider>,
        document.getElementById('react-root')
    )
}

render();
