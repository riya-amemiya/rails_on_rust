RUST_PATH = ./modules/
INCLUDE_PATH = $(RUST_PATH)include/
RUST_MODULES = $(INCLUDE_PATH)c_hello.rs $(INCLUDE_PATH)c_math.rs $(INCLUDE_PATH)c_random.rs $(INCLUDE_PATH)c_cpp.rs
.SUFFIXES: .h .rs
.SUFFIXES: .hpp .rs
vpath %.h $(RUST_PATH)
vpath %.hpp $(RUST_PATH)
.PHONY: cpp
cpp:
	dpkg -l
.PHONY: rust_build
rust_build:
	rm modules/include/*.rs
	cargo install bindgen
	make bindgen
	cargo build --release -v

.PHONY: build
build:
	make -C app/javascript/wasm build
	pwd
	rm modules/include/*.rs
	make bindgen
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
# $(foreach p,$^,$(call F,$(p)))
bindgen: $(RUST_MODULES)
	@echo $(notdir $(RUST_MODULES))
	@echo $(strip $(patsubst c_%,pub mod c_%,$(patsubst %.rs,%\;,$(notdir $(RUST_MODULES))))) > modules/include.rs

define C
	@echo $(1)
	bindgen $(1) > $(RUST_PATH)include/$(basename $(notdir $(1))).rs

endef
# echo "pub mod $(basename $(notdir $(1)));" >> modules/include.rs

.h.rs:
	$(foreach p,$^,$(call C,$(p)))
.hpp.rs:
	$(foreach p,$^,$(call C,$(p)))