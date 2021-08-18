# -*- coding: utf-8 -*-
import python_modules
class Error(Exception):
    pass
def test(x,y):
    if x == y:
        print("OK")
    else:
        raise Error(f'Error x:{x},y:{y}')
test(python_modules.c_pow(8),64)