extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

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
