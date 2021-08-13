.PHONY: build

build:
	tsc
	wasm-pack build --scope mynpmusername
.PHONY: wasm-build

build:
	rustup target add wasm32-unknown-unknown
	cargo install wasm-pack
	wasm-pack build --scope mynpmusername

.PHONY: heroku_build

heroku_build:
	tsc
	make wasm-build

.PHONY: tsc

tsc:
	tsc