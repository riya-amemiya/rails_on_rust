.PHONY: build
build:
	make -C app/javascript/wasm
	pwd
	make python_build
	make rust_build
.PHONY: python_build

python_build:
	python setup.py build_ext --inplace

.PHONY: rust_build
rust_build:
	make rust_fix
	cargo test
	cargo build --release

.PHONY: rust_fix
rust_fix:
	cargo install cargo-audit
	cargo install cargo-audit --features=fix
	cargo audit fix
