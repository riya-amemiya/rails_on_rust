.PHONY: build

build:
	tsc
	cargo test
	rustup target add wasm32-unknown-unknown
	cargo install wasm-pack
	wasm-pack build --scope mynpmusername