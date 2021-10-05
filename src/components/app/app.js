import React from 'react';
import {MainPage, CartPage, CartItem} from '../pages';
import AppHeader from '../app-header';
import {Switch, Route} from 'react-router-dom';
import Background from './food-bg.jpg';

const App = () => {
    return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Switch>
                    <Route path='/menu' exact component={MainPage} />
                    <Route path='/bin' component={CartPage}/>
                    <Route path='/:id' component={CartItem}/>
                </Switch>
            </div>
    )
}

export default App;