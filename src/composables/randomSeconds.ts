export function randomSeconds(minSec: number, maxSec: number) {
    return Math.floor(Math.random() * (maxSec - minSec + 1) + minSec) * 1000;
}