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
            <div className="App">
                <h1>Bem vindo ao Taxonhub, selecione uma opção:</h1>
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
            </div>
        );
    }
}

export default hot(module)(App);