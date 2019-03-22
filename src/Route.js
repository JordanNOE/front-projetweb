import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import home from './conteneur/home';
import admin from './conteneur/admin';

export default () => (
    <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/admin" exact component={admin}/>
    </Switch>
);