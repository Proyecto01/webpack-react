import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './components/App';
import './styles/global.scss';

ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('app')
  );