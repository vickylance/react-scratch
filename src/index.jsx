import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './vitals';
import { CustomButton } from './index.style';
import './index.css';

ReactDOM.render(
  <h1>
    Hello World <CustomButton>React!</CustomButton>
  </h1>,
  document.getElementById('root'),
);

reportWebVitals();
