#include <cstdint>

class BitManipulation
{
public:
    static uint64_t getBit(uint64_t n, int k)
    {
        return (n >> k) & 1ULL;
    }

    static uint64_t setBit(uint64_t n, int k)
    {
        return (1ULL << k) | n;
    }

    static uint64_t clearBit(uint64_t n, int k)
    {
        return n & ~(1ULL << k);
    }

    static uint64_t toggleBit(uint64_t n, int k)
    {
        return n ^ (1ULL << k);
    }

    static bool isPowerOfTwo(uint64_t n)
    {
        return (n > 0) && ((n & (n - 1)) == 0);
    }

    long countSetBits(uint64_t n)
    {
        int count = 0;
        while (n > 0)
        {
            n = n & (n - 1);
            count++;
        }
        return count;
    }
};