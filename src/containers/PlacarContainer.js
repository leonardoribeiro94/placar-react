import React from "react";
import TimeComponent from "../components/time-component";
import PartidaComponent from "../components/partida-component";
import Div from "../components/styled-components/div-styled-component";

export default class PlacarContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            gols_casa: 0,
            gols_visitante: 0
        };
    }

    marcarGolCasa() {
        gols_casa: this.state.gols_casa + 1
    }

    marcarGolVisitante = () => {
        gols_visitante: this.state.gols_visitante + 1
    }

    render() {
        return (
            <section>
                <Div>
                    <h3>Casa</h3>
                    <TimeComponent nome={this.props.casa.nome} />
                </Div>
                <Div>
                    <PartidaComponent
                        partida={this.props.partida.estadio}
                        data={this.props.partida.data}
                        horario={this.props.partida.horario}
                    />
                </Div>
                <Div>
                    <h3>Visitante</h3>
                    <TimeComponent
                        nome={this.props.visitante.nome}
                        golCasa={this.props.marcarGolCasa}
                        golVisitante={this.props.marcarGolVisitante} />
                </Div>
            </section>
        );
    }
}