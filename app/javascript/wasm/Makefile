.PHONY: build

build:
	tsc
	wasm-pack build --scope mynpmusername

.PHONY: heroku_build

heroku_build:
	tsc
	rustup target add wasm32-unknown-unknown
	cargo install wasm-pack
	wasm-pack build --scope mynpmusername