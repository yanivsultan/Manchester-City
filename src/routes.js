import React from 'react';
import Layout from './Hoc/Layout'
import { Switch,Route } from 'react-router-dom'

import Home from './components/home'
import SignIn from './components/signin'
import Dashboard from './components/admin/Dashboard'

import PrivateRoute from './components/authRoutes/PrivateRoutes'
import PublicRoute from './components/authRoutes/PublicRoutes'
import AdminMatches from './components/admin/matches'


const Routes = (props) => {
  console.log(props)
return (
  <div>
    <Layout>
      <Switch>

        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches} />
        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn} />
      </Switch>
    </Layout>
  </div>
)
}



export default Routes;

