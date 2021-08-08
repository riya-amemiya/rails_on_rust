import { API } from '../api';
const GET_URL = () => {
    if (API.check_window()) {
        return location;
    }
    return '';
};
export default GET_URL;
