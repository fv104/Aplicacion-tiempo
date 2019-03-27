import React, {Component} from 'react';
import './localizador.css';

class Localizador extends Component{

    render() {
        const Location = this.props.location;
        return (
            <div>
                <div id="Localizador">
                    <h1>{Location}</h1>
                </div>
            </div>
        );
    }
}

export default Localizador;