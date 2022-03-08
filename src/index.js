import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RoutesManager from './RoutesManager';
import { store } from './state/store';
import './styles.css';

ReactDOM.render(<Provider store={store} ><RoutesManager /></Provider>, document.getElementById('root'));

