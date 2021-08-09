import CHECK_WINDOW from './check_window';
const Rust = import('../../../../wasm/pkg/wasm');
class API {
    static check_window = CHECK_WINDOW;
}
export { API, Rust };
