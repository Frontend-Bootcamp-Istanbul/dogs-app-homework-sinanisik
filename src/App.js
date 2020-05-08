import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import { Switch, Route } from "react-router-dom";
import routes from "./constants/routes";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    {
                        routes.map(route => {
                            return <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.component} />
                        })
                    }
                </Switch>
            </div>
        );
    }
}

export default App;
