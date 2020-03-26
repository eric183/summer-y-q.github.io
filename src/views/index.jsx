import React, { lazy, Fragment } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import loadable from '@loadable/component'

// import Home from './components/home';

class App extends React.Component {
    render() {

        let loadDymaticModule = path => loadable(()=> import('' + path));


        return (
            <Router>
                <Fragment>
                    
                    <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } />
               
                    {/* /project */}
                    {
                        
                        /* <Route path="/tairan_pbr" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/tairan_shader" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/chtf" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } />
                        <Route path="/resume" exact component={ loadDymaticModule('./components/resume') } /> */
                    }
                        {/* <Route path="/" exact component={lazy(() => import('./components/home'))} /> */}
                </Fragment>
            </Router>
        )
    }
}


export default App;

