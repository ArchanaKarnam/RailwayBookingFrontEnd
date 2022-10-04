
import axios from 'axios';

const MOVIE_API_BASE_URL="http://localhost:8090/trains/getlist"
class TrainListService{
    getList(){
        return axios.get(MOVIE_API_BASE_URL);
    }
}

export default new TrainListService();

