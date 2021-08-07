const GET_URL = () => {
    if (window && location) {
        return location;
    }
    return '';
};
export default GET_URL;
