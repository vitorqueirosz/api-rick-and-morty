import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Characters from './pages/Characters';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/character/:character" component={Characters} />
            </Switch>
        </BrowserRouter>
    );
}
