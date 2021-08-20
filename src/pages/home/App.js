import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../../sass/app.scss';
import {BrowserRouter,Link,Route,Switch} from "react-router-dom";

class App extends Component {
    state = {
        counter: 0
    };

    handleClick = () => {
        this.setState(prevState => {
            return { counter: prevState.counter + 1 };
        });
    };
    render() {
        return (
            <div className="speciesScreen">
                <nav id="menu">
                    <ul>
                        <li>
                            <Link to="/species-validation">Ocorrências de especies</Link>
                        </li>
                        <li>
                            <Link to="/species-ocurrence">Ocorrências de especies</Link>
                        </li>
                        <li><a href="#">Documentação</a></li>
                    </ul>
                </nav>
                <div className="speciesScreenTitle">
                    <h1>Bem vindo ao Taxonhub 2.0!</h1>
                </div>
            </div>
           
        );
    }
}

export default hot(module)(App);