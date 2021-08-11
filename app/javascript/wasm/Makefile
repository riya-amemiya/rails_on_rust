.PHONY: build

build:
	tsc
	cargo test
	cargo install wasm-pack
	wasm-pack build --scope mynpmusername