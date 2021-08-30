#include "include/c_random.hpp"

#include <random>
int c_random(int x, int y) {
    std::random_device rand;
    return (rand() % x + y);
}
