import GET_URL from './url';
class MODULES_CLASS {
    private url = GET_URL;
    async fetch<T, R>(url: string, callback: (data: T) => R) {
        const n = await fetch(url);
        const n_1 = await n.json();
        return callback(n_1);
    }
    get get_url() {
        return this.url();
    }
}
const MODULES = new MODULES_CLASS();
export { MODULES };
