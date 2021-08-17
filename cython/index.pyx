import requests
cpdef c_pow(int x):
    return x * x;
cpdef c_add(int x):
    return x + x;
cpdef http_request(str x):
    return requests.get(x).json();