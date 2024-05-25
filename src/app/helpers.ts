export function countDigits(number: number) {
    if (!number) return 0;
    return Math.floor(Math.log10(number)) + 1;
}