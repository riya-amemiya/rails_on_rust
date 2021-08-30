use std::process::Command;
extern crate cc;
fn main() {
    let path = "modules/c/c_";
    let _ = Command::new("make")
        .arg("bindgen")
        .output()
        .expect("failed to execute process");
    let _ = cc::Build::new()
        .warnings(true)
        .flag("-Wall")
        .flag("-Wextra")
        .flag("-g")
        .cpp(true)
        // .cpp(true)
        .file(format!("{}hello.cpp", path))
        .file(format!("{}math.cpp", path))
        .file(format!("{}random.cpp", path))
        .file(format!("{}cpp.cpp", path))
        .include("modules")
        .include("cython")
        .flag("-O3")
        .flag("-mtune=native")
        .flag("-march=native")
        // .flag("-mfpmath=both")
        .compile("c_lib");
}
