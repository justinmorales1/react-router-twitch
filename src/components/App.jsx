import React from "react";
import { Router, Route } from "react-router-dom";
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
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" component={StreamCreate}/>
                    <Route path="/streams/edit" component={StreamEdit}/>
                    <Route path="/streams/delete" component={StreamDelete}/>
                    <Route path="/streams/show" component={StreamShow}/>
                </div>
            </Router>
        </div>
    )
};


export default App;