/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/10
 * Time: 16:28
 *
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './containers/home';
import Factors from './containers/factors';

render(
    (<Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/factors" component={Factors}/>
    </Router>),
    document.getElementById('app'));