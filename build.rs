extern crate cc;

fn main() {
    let path = "modules/c/c_";
    println!("cargo:rustc-link-lib=c++");
    cc::Build::new()
        .warnings(true)
        .flag("-Wall")
        .flag("-Wextra")
        .flag("-g")
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
