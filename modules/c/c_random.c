#include <stdio.h>
#include <stdlib.h>
#include "include/c_random.h"
int c_random(int x, int y)
{
    printf("%d", rand() % x + y);
    return 0;
}