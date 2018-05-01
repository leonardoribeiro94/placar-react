import React from "react";
import PlacarContainer from "../containers/PlacarContainer";

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "01/02/2018",
        horario: "19:00"
    },
    casa: {
        nome: "Corinthians"
    },
    visitante: {
        nome: "Flamengo"
    }
}

export default class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <PlacarContainer
                    partida={dados.partida}
                    casa={dados.casa}
                    visitante={dados.visitante}
                />
            </div>
        )
    }
}