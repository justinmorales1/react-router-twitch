import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import Header from "./Header";
import history from '../history'

//Client Id - 967271230354-3l7qnrmc61kl2tn62vik8us0sfuh0ccn.apps.googleusercontent.com

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    {/*Switch is used to keep router from showing multiple components*/}
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                        <Route path="/streams/:id" exact component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};


export default App;