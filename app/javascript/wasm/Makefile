.PHONY: build

build:
	tsc
	cargo test
	cargo install wasm-pack
	rustup target add wasm32-unknown-unknown
	wasm-pack build --scope mynpmusername