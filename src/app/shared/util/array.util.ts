export class ArrayUtil {

    static equals<T>(arr1: T[], arr2: T[]): boolean {
        return (
            arr1.length === arr2.length &&
            arr1.every(x => arr2.includes(x)) &&
            arr2.every(x => arr1.includes(x))
        );
    }

    static getNumOccurrences<T>(arr: T[]): any { /* keys: elements, values: num occurrences */
        return arr.reduce(function (acc: any, curr) {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {});
    }
    
}
