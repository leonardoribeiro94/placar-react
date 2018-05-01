import React from "react";

export default class ContadorComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            contador: 0,
        };
    }

    render() {
        return (
            <section>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </section>
        );
    }

    increment = () => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    decrement = () => {
        this.setState({
            contador: this.state.contador - 1,
        });
    }
}

