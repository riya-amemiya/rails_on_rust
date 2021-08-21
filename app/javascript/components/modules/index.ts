import GET_URL from './url';
class MODULES_CLASS {
    private url = GET_URL;
    fetch(url: string, callback: (data: any) => any) {
        fetch(url)
            .then((n) => n.json())
            .then(<T>(n: T) => {
                callback(n);
            });
    }
    get get_url() {
        return this.url();
    }
}
const MODULES = new MODULES_CLASS();
export { MODULES };
