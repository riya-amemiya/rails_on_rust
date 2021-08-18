import CHECK_WINDOW from './check_window';
import * as Curry from './Curry';
// @ts-ignore
const Rust = import('wasm_riya_hiyori');
class API {
    static check_window = CHECK_WINDOW;
}
export { API, Rust, Curry };
