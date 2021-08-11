.PHONY: python_build

python_build:
	python setup.py build_ext --inplace

.PHONY: build
build:
	make -C wasm
	pwd
	make