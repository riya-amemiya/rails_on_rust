// use js_sys::async_iterator;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};
extern crate console_error_panic_hook;
#[macro_use]
extern crate serde;
extern crate serde_derive;
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

/// A struct to hold some data from the github Branch API.
///
/// Note how we don't have to define every member -- serde will ignore extra
/// data when deserializing
#[derive(Debug, Serialize, Deserialize)]
pub struct Branch {
    pub ip: String,
}
#[wasm_bindgen]
pub async fn run(url: String) -> Result<JsValue, JsValue> {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);
    // "https://api.github.com/repos/rustwasm/wasm-bindgen/branches/master"
    let url = format!("{}", url);

    let request = Request::new_with_str_and_init(&url, &opts)?;

    // request.headers().set("Accept", "application/json")?;
    // .set("Accept", "application/vnd.github.v3+json")?;

    console_error_panic_hook::set_once();
    let window = web_sys::window().unwrap();
    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;

    // `resp_value` is a `Response` object.
    assert!(resp_value.is_instance_of::<Response>());
    let resp: Response = resp_value.dyn_into().unwrap();

    // Convert this other `Promise` into a rust `Future`.
    let json = JsFuture::from(resp.json()?).await?;

    // Use serde to parse the JSON into a struct.
    let branch_info: Branch = json.into_serde().unwrap();

    // Send the `Branch` struct back to JS as an `Object`.
    Ok(JsValue::from_serde(&branch_info).unwrap())
}
#[wasm_bindgen]
pub fn dn_to_bn(x: String) -> String {
    return x;
}
