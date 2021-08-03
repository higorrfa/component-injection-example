import React from 'react';
import ReactDOM from 'react-dom';
import InjectedCard from './InjectedCard';
import InjectedComponent from './InjectedComponent';
import RegularComponent from './RegularComponent';
import './index.css'

ReactDOM.render(
  <RegularComponent InjectedComponent={InjectedComponent} InjectedCard={InjectedCard}></RegularComponent>,
  document.getElementById('root')
);


