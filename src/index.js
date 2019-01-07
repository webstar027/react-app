import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/counts/counters'

const element =<h1 className='alert alert-danger'>Hello world</h1>
ReactDOM.render(<Counters/>,document.getElementById('root'));
