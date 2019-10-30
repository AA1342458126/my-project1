import React from 'react';
import {HashRouter,Route,Switch,withRouter,Redirect} from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';
import Home from './pages/home';
import User from './pages/user'
class RootRoute extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/login"></Redirect>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={()=>{
                        return(
                            <Admin>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/user" component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRoute