// package for run things when tab is in background
import 'hacktimer';

// npm packages
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

// styles
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './css/main.scss';

import 'hellojs/dist/hello.all';

// our packages
import App from './app';
import store from './store';
import {requireAuth} from './util';

// our pages
import Welcome from './pages/welcome';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notfound';

import {Routine, Exercise, Create, DoRoutine} from './pages/routine';
import {SportStats, StatsInfo} from './pages/stats';
import Session from './pages/session';
import Sessions from './pages/sessions';
import Profile from './pages/profile';
import UpdateUser from './pages/profile/updateUser';
import UpdateProfile from './pages/profile/updateProfile';
import Objectives from './pages/profile/objectives';
import Athletes from './pages/athletes';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// render on page
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="welcome" component={Welcome} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="session" component={Session} />
        <Route path="sessions" component={Sessions} />
        <Route path="routine" component={Routine} />
        <Route path="routine/exercise" component={Exercise} />
        <Route path="routine/create" component={Create} />
        <Route path="routine/doRoutine" component={DoRoutine} />
        <Route path="stats" component={SportStats} />
        <Route path="stats/info" component={StatsInfo} />
        <Route path="athletes" component={Athletes} />
        <Route path="profile" component={Profile} />
        <Route path="updateUser" component={UpdateUser} />
        <Route path="updateProfile" component={UpdateProfile} />
        <Route path="objectives" component={Objectives} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
