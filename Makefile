
.PHONY: rust_build
rust_build:
	cargo build --release
.PHONY: build
build:
	make -C app/javascript/wasm build
	pwd
	make rust_build
.PHONY: python_build

python_build:
	python setup.py build_ext --inplace



.PHONY: rust_fix
rust_fix:
	cargo install cargo-audit
	cargo install cargo-audit --features=fix
	cargo audit fix

.PHONY: heroku
heroku:
	curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
	make rust_build