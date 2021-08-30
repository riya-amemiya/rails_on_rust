#include <random>
#include <iostream>
#include "include/c_random.hpp"
int c_random(int x, int y)
{
    std::random_device rand;
    return (rand() % x + y);
}