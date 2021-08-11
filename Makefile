.PHONY: build
build:
	make -C wasm
	pwd
	make python_build
	make rust_build
.PHONY: python_build

python_build:
	python setup.py build_ext --inplace

.PHONY: rust_build
rust_build:
	cargo test
	cargo build --release

