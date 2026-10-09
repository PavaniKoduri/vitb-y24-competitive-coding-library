class BitManipulation {
    static getBit(n, k) {
        n = BigInt(n);
        k = BigInt(k);
        return (n >> k) & 1n;
    }

    static setBit(n, k) {
        n = BigInt(n);
        k = BigInt(k);
        return (1n << k) | n;
    }

    static clearBit(n, k) {
        n = BigInt(n);
        k = BigInt(k);
        return n & ~(1n << k);
    }

    static toggleBit(n, k) {
        n = BigInt(n);
        k = BigInt(k);
        return n ^ (1n << k);
    }

    static isPowerOfTwo(n) {
        n = BigInt(n);
        return n > 0n && (n & (n - 1n)) === 0n;
    }

    countSetBits(n) {
        n = BigInt(n);
        let count = 0;
        while (n > 0n) {
            n = n & (n - 1n);
            count++;
        }
        return count;
    }
}