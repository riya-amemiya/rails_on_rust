extern crate cc;

fn main() {
    cc::Build::new()
        .warnings(true)
        .flag("-Wall")
        .flag("-Wextra")
        .flag("-g")
        // .cpp(true)
        .file("modules/c/foo.c")
        .include("modules")
        .flag("-O3")
        .flag("-mtune=native")
        .flag("-march=native")
        // .flag("-mfpmath=both")
        .compile("c_lib");
}
