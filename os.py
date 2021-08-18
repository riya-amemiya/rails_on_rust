import platform
pf = platform.system()
if pf == 'Darwin':
    print('Mac')
elif pf == 'Linux':
    print('Linux')