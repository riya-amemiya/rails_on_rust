use wasm_bindgen::prelude::*;
#[macro_use]
extern crate serde_derive;
extern crate serde;
extern crate serde_json;
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(name);
}
#[wasm_bindgen]
pub fn pow(x: i32) -> i32 {
    return x * x;
}
#[derive(Serialize)]
pub struct RUST {
    name: i32,
}
#[wasm_bindgen]
pub fn rust(x: i32) -> String {
    return serde_json::to_string(&RUST { name: x }).unwrap();
}
