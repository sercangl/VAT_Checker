import React, {Suspense} from 'react';
import {Route,Switch,Redirect, BrowserRouter} from 'react-router-dom';

//import Contact from './containers/contact/Contact';
import Homepage from './containers/homepage/Homepage';
import './App.css';
import Contact from './containers/contact/Contact';

const routes =(
    <BrowserRouter>
    <Switch>
        <Route path="/contact" component={Contact} /> 
        <Route path="/" exact component={Homepage} /> 
        <Redirect to="/" />
    </Switch>
    </BrowserRouter>
 ); 

function App() {
    return <div>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense></div>;

}

export default App;