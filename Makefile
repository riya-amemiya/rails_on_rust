RUST_PATH = ./modules/
INCLUDE_PATH = $(RUST_PATH)include/
RUST_MODULES = $(INCLUDE_PATH)c_hello.rs $(INCLUDE_PATH)c_math.rs $(INCLUDE_PATH)c_random.rs
.SUFFIXES: .h .rs
vpath %.h $(RUST_PATH)
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
.PHONY: server
server:
	yarn tw
	rails server --environment production

# $(wildcard $(RUST_PATH)c/include/*.h)
bindgen: $(RUST_MODULES)
	rm modules/include.rs
	$(foreach p,$^,$(call F,$(p)))
define C
	bindgen $(1) > $(RUST_PATH)include/$(basename $(notdir $(1))).rs

endef

define F
	echo "pub mod $(basename $(notdir $(1)));" >> modules/include.rs

endef
.h.rs:
	$(foreach p,$^,$(call C,$(p)))