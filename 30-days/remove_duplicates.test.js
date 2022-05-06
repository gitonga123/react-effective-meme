const removeDuplicates = require('./remove_duplicates_2');
const removeDuplicatesB = require('./remove_duplicates_object');

describe('Test remove all adjacent duplicates from a string by length of K using stack dsa', () => {
    test('Test Example 1 s=abcd k=2 response = abcd', () => {
        const s = 'abcd';
        const k = 2;
        
        expect(removeDuplicates(s, k)).toBe('abcd');
    });

    test('Test Example 2 s=deeedbbcccbdaa k=3 response = aa', () => {
        const s = 'deeedbbcccbdaa';
        const k = 3;
        
        expect(removeDuplicates(s, k)).toBe('aa');
    });

    test('Test Example 3 s=pbbcggttciiippooaais k=2 response = ps', () => {
        const s = 'pbbcggttciiippooaais';
        const k = 2;
        
        expect(removeDuplicates(s, k)).toBe('ps');
    });

    test('Test Example 4 s=yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy k=4 response = ybth', () => {
        const s = 'yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy';
        const k = 4;
        
        expect(removeDuplicates(s, k)).toBe("ybth");
    });
});

describe('Test remove all adjacent duplicates from a string by length of K using Objects', () => {
    test('Test Example 1 s=abcd k=2 response = abcd', () => {
        const s = 'abcd';
        const k = 2;
        
        expect(removeDuplicatesB(s, k)).toBe('abcd');
    });

    test('Test Example 2 s=deeedbbcccbdaa k=3 response = aa', () => {
        const s = 'deeedbbcccbdaa';
        const k = 3;
        
        expect(removeDuplicatesB(s, k)).toBe('aa');
    });

    test('Test Example 3 s=pbbcggttciiippooaais k=2 response = ps', () => {
        const s = 'pbbcggttciiippooaais';
        const k = 2;
        
        expect(removeDuplicatesB(s, k)).toBe('ps');
    });
})