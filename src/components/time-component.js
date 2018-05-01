import React from 'react';
import BotaoGolComponent from './botao-gol-component';

class TimeComponent extends React.Component {

    render() {
        return (
            <section>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <BotaoGolComponent marcarGol={}></BotaoGolComponent>
            </section>
        );
    }
}

export default TimeComponent;