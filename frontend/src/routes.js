import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home/Home'
import Add from './pages/addQuestion/Add'
import UpdateQuestion from './pages/updateQuestion/UpdateQuestion'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/add' component={Add} />
                <Route path='/updateQuestion' component={UpdateQuestion} />
            </Switch>
        </BrowserRouter>
    )
}