#include "include/c_cpp.hpp"

#include <iostream>
int c_cpp() {
    typedef struct {
        std::string hello;
    } Hello;
    Hello a = {"Hello"};
    std::cout << a.hello << std::endl;
    return 0;
}

int c_gcd(int f, int x) {
    int r = 0;
    int tmp = 0;
    if (f < x) {
        tmp = f;
        f = x;
        x = tmp;
    }
    /* ユークリッドの互除法 */
    r = f % x;
    while (r != 0) {
        f = x;
        x = r;
        r = f % x;
    }
    return x;
}
int c_nPr(int r, int n) {
    int y = n;
    int x = 0;
    while (x == 0) {
        if (r == 1) {
            y = y * r;
        }
        r--;
        if (r == 0) {
            x++;
        } else {
            n--;
            if (n == 0) {
                x++;
                break;
            }
            y = y * n;
        }
    }
    return y;
}
int c_nCr(int n, int r) {
    int z = 0;
    int y = 0;
    int age = 1;
    z = r;
    y = c_nPr(r, n);
    for (int i = 2; i <= z; i++) {
        age *= i;
    }
    y = y / age;
    return y;
}