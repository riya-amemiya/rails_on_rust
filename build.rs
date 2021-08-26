extern crate cc;

fn main() {
    cc::Build::new()
        .warnings(true)
        .flag("-Wall")
        .flag("-Wextra")
        .flag("-g")
        // .cpp(true)
        .file("modules/c/foo.c")
        .file("modules/c/c_random.c")
        .include("modules")
        .include("cython")
        .flag("-O3")
        .flag("-mtune=native")
        .flag("-march=native")
        // .flag("-mfpmath=both")
        .compile("c_lib");
}
