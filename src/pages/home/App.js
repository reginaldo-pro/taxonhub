import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../../sass/app.scss';

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
                        <li><a href="#">Ocorrências de especies</a></li>
                        <li><a href="#">Validação de especies</a></li>
                        <li><a href="#">Documentação</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default hot(module)(App);