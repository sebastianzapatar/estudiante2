import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import { Acercade } from './Acercade';
import { Home } from './Home';
import { Insertar } from './Insertar';
import { Listar } from './Listar';
import { Menu } from './Menu';
import { Editar } from './Editar';

export const RouterApp = () => {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/listar" component={Listar}/>
                    <Route exact path="/agregar" component={Insertar}/>
                    <Route exact path="/acercade" component={Acercade}/>
                    <Route exact path="/editar/:id/nombre/:nombre/apellido/:apellido" 
                    component={Editar}/>
                </Switch>
            </Router>
        </div>
    )
}