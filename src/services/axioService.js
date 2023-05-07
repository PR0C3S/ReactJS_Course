import APIRequest from "../utils/config/axios.config";

export function getRandomJoke(){
    return APIRequest.get('/jokes/random', {
        validateStatus: function (status){
            return status < 500;
        }
    }); 
}