import GET_URL from './url';
class CLASS_MODULES {
    private url = GET_URL;
    fetch({ url, callback }: { url: string; callback: (data: any) => any }) {
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

export { CLASS_MODULES };
