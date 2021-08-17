# -*- coding: utf-8 -*-
import python_modules
def test(x,y):
    if x == y:
        print("OK")
    else:
        print(f'Error x:{x},y:{y}')
test(python_modules.c_pow(8),64)