export function getRandomIndex(array: Array<unknown>, excludedIndexes?: Array<number>): number | null {
    if (excludedIndexes) {
        const set = new Set(excludedIndexes.filter((el) => el < array.length));
        if (set.size === array.length) {
            return null;
        }
    }

    const randIndex = Math.floor(Math.random() * array.length);
    if (excludedIndexes && excludedIndexes?.includes(randIndex)) {
        return getRandomIndex(array, excludedIndexes);
    } else {
        return randIndex;
    }
}

export function getRandomElement<T>(array: Array<T>, excludedIndexes?: number[]): T | null {
    let randomIndex = getRandomIndex(array, excludedIndexes);
    return randomIndex !== null ? array[randomIndex] : null;
}

export function randomSort<T>(array: Array<T>): Array<T> {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function randomDigitFromRange(min: number, max: number, excluded?: number[]): number {
    const digit = Math.floor(Math.random() * (max - min + 1) + min);
    if (excluded?.includes(digit)) {
        return randomDigitFromRange(min, max, excluded);
    }
    return digit;
}
