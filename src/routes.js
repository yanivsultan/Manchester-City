import React from 'react';
import Layout from './Hoc/Layout'
import { Switch,Route } from 'react-router-dom'

import Home from './components/home'
import SignIn from './components/signin'



const Routes = (props) => {
return (
  <div>
    <Layout>
      <Switch>
        <Route exact component={Home} path="/"/>
        <Route exact component={SignIn} path="/sign_in"/>
      </Switch>
    </Layout>
  </div>
)
}



export default Routes;

