/**
 * Created by Administrator on 2017/1/6.
 */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import * as bootstrap from 'react-bootstrap';

//bootstrap.Button

//ReactDOM.render(<App />, document.getElementById('root'));
const pagerInstance = (
    <bootstrap.Pager>
        <bootstrap.Pager.Item href="#">Previous</bootstrap.Pager.Item>
        {' '}
        <bootstrap.Pager.Item href="#">Next</bootstrap.Pager.Item>
    </bootstrap.Pager>
);

ReactDOM.render(pagerInstance,document.getElementById('root'));
