import React, {Component} from 'react';
import DatosTemperatura from './datosTemperatura';
import Conversor from 'convert-units';
import IconoTiempo from './iconoTiempo'


class DatosTiempo extends Component{
    constructor(props){
        super(props)
    }
    calcularTemperatura(temperatura){
        return Conversor(temperatura).from('K').to('C')
    }
    calcularViento(viento){
        return Math.round(Conversor(viento).from('m/s').to('km/h'*100)/100)
    }
    render() {
        const {data} = this.props;
        const temperaturaBase = 24;
        const VientoBase = 5;
        const HumedadBase = 20

        return(
            <div>
                <h1>Datos Tiempo</h1>
                <IconoTiempo icono={data}/>
                <DatosTemperatura temp = {data.main ? this.calcularTemperatura(data.main.temp ):temperaturaBase}
                viento = {data.wind ? data.wind.speed : VientoBase}
                humedad={data.main ? data.main.humidity : HumedadBase}/>
            </div>
        )

    }
}
export default DatosTiempo;