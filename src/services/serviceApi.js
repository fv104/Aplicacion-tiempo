const location = "Lorca,es";
const appId="5ae765425c003aec7bdc81cbbd770220";
const endPoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appId}`;
class serviceApi {

    static async getData(){
        console.log("Entra en getdata")
        let result = await fetch(endPoint)
            .then(data=>data.json())
            .then(weather_data=>weather_data);
        console.log("Recibida la peticion" + result);
        return result;
    }
}

export default serviceApi;