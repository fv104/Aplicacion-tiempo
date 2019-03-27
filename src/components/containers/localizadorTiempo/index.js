import React, {Component} from 'react';
import Localizador from '../../../components/localizador'
import serviceApi from '../../../services/serviceApi';
import DatosTiempo from  '../../datosTiempo/'
const Location = "Lorca, es";

class LocalizadorTiempo extends Component{
    constructor(props){
        super(props);
        this.state = {data:{}};
    }
    async componentDidMount() {
        console.log("Entra en componentdidmount")
        try{
            let data = await serviceApi.getData();
            console.log(JSON.stringify(data));
            this.setState({data: data});
        }catch (error) {
            console.error(error);
        }


    }

    render() {

        const {data} = this.state;
        console.log("datos recibidos ->" +JSON.stringify(data));
        return(
            <div>
                <h2>Contenedor localizador tiempo</h2>
                <Localizador location={Location}/>
                <DatosTiempo data={data}/>

            </div>
        )
    }
}

export default LocalizadorTiempo;