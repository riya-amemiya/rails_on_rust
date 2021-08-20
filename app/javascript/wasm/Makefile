.PHONY: build

build:
	wasm-pack build
.PHONY: wasm-build

build:
	rustup target add wasm32-unknown-unknown
	cargo install wasm-pack
	wasm-pack build

.PHONY: heroku_build

heroku_build:
	make wasm-build

.PHONY: tsc

tsc:
	tsc