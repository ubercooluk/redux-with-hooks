import axios from 'axios';
import config from '../config';
const UserService =  {
 getUsers(){
        return axios.get(config.baseUrl+config.endPoints.users)
            .then(response => {
                return response.data;
            })
    }
};
export default UserService;