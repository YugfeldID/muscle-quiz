export function* getConstantLenghtCombinations<T extends string>(
    array: T[],
    combinationItemsCount: number,
    start: number = 0,
    prev: T[] = []
): Iterable<T[]> {
    if (prev.some(el => JSON.stringify(el) == JSON.stringify(array))) {
        return;
    }

    if (combinationItemsCount <= 0) {
        yield prev;
        return;
    }
    for (let i = start; i <= array.length - combinationItemsCount; i++) {
        if (prev.some(el => JSON.stringify(el) == JSON.stringify(array[i]))) continue;
        yield* getConstantLenghtCombinations(
            array,
            combinationItemsCount - 1,
            i + 1,
            [...prev, array[i]]
        );
    }
}

export function getAllCombinationsForArray<T extends string>(array: T[], n: number): Iterable<T[]> {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(...getConstantLenghtCombinations(array, i));
    }
    return result;
}

