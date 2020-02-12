import React from 'react';
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom'

import Home from './components/home'
import SignIn from './components/signin'
import Dashboard from './components/admin/Dashboard'

import PrivateRoute from './components/authRoutes/PrivateRoutes'
import PublicRoute from './components/authRoutes/PublicRoutes'
import AdminMatches from './components/admin/matches'
import AddEditMatch from './components/admin/matches/AddEditMatch'
import AdminPlayers from './components/admin/players'
import AddEditPlayers from './components/admin/players/AddEditPlayers'

const Routes = (props) => {
return (
  <div>
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch} />
        <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers} />
        <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers} />
        <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers} />


        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn} />
      </Switch>
    </Layout>
  </div>
)
}



export default Routes;

