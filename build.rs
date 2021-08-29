extern crate cc;

fn main() {
    let path = "modules/c/c_";
    cc::Build::new()
        .warnings(true)
        .flag("-Wall")
        .flag("-Wextra")
        .flag("-g")
        // .cpp(true)
        .file(format!("{}hello.c", path))
        .file(format!("{}math.c", path))
        .file(format!("{}random.c", path))
        .include("modules")
        .include("cython")
        .flag("-O3")
        .flag("-mtune=native")
        .flag("-march=native")
        // .flag("-mfpmath=both")
        .compile("c_lib");
}
