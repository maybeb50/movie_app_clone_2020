import sum from './Counter';

test('adds 1 + 2 to qeual 3', () => {
    expect(sum(1, 2)).toBe(3);
});