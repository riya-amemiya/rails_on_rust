# -*- coding: utf-8 -*-
from distutils.core import setup, Extension
from Cython.Build import cythonize
from numpy import get_include

ext = Extension(
    "python_modules",
    sources=["./cython/index.pyx"],
    include_dirs=['.', get_include()])
setup(
    name="python_modules",
    ext_modules=cythonize([ext]))