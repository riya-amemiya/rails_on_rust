extern crate cc;

fn main() {
    cc::Build::new()
        // .cpp(true)
        .file("modules/c/foo.c")
        .include("modules")
        .flag("-O3")
        .flag("-mtune=native")
        .flag("-march=native")
        // .flag("-mfpmath=both")
        .compile("c_lib");
}
