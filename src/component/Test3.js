import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

function Topics() {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <NavLink to="/topics/1">HTML</NavLink>
                </li>
                <li>
                    <NavLink to="/topics/2">CSS</NavLink>
                </li>
                <li>
                    <NavLink to="/topics/3">JAVASCRIPT</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/topics/1">HTML is ...</Route>
                <Route path="/topics/2">CSS is ...</Route>
                <Route path="/topics/3">JS is ...</Route>
            </Switch>
        </div>
    );
}
function App() {
    return (
        <div>
            <Route path={'/'}>
                <h1>React Router Dom exampleaaa</h1>
                <ul>
                    <li>
                        <NavLink to="/topics">Topics</NavLink>
                    </li>
                </ul>
            </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
        </div>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

export default Topics;