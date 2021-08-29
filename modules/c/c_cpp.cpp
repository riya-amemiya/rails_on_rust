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
