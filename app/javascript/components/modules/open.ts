import { API } from '../api';
import { curry3 } from '../api/Curry/curry3';
const OPEN = curry3(function (url: string, name: string, option: string) {
    if (API.check_window()) {
        return window.open(url, name, option);
    }
    return '';
});
export default OPEN;
