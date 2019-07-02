import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router';


// Default Components
import DefaultLayout from '../containers/Layouts/Default';
import App from '../containers/App';


class Routes extends Component {
    wrap(Component, props, auth) {
        let Layout;
        switch (auth) {
            default: {
                Layout = <DefaultLayout><Component {...props} /></DefaultLayout>;
            }
        }
        return (
            <div {...props} layout={auth}>
                {Layout}
            </div>
        );
    }

    render() {
        const publicUrl = process.env.PUBLIC_URL + '/app/';
        return (
            <Router history={this.props.history}>
                <Switch>
                    {/*Default Pages Routes*/}
                    <Route exact path={publicUrl} render={props => this.wrap(App, this.props, null)}/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;

// '/me' req.me 401
