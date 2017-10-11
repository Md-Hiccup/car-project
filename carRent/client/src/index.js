import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Navbars from './component/navbar';
import Footer from './component/footer';
// import 'bootstrap/dist/css/bootstrap.css';

import Layout from './pages/layout';
import Signup from './pages/signup';
import Login from './pages/login';

const root = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div className="container-fluid">
            <Navbars/>
            <Switch>
                <Route exact path="/" component={ Layout }></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
            </Switch>
           
            <Footer/>
        </div>
    </Router>, root
);
registerServiceWorker();
