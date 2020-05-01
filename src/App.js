import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import { Switch, Route } from "react-router-dom";
import routes from "./constants/routes";
import dogs from './constants/dogsdata';
import DogDetail from './containers/DogDetail';


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
                {/* <Switch>
                    {
                        dogs.map(dog => {
                            return <Route
                                key={dog.id}
                                path={`/detail/:dogId`}
                                component={DogDetail}>
                            </Route>
                        })
                    }
                </Switch> */}
            </div>
        );
    }
}

export default App;
