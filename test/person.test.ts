import { sum } from "../src/person";


test('person', () => {
    expect(sum(1, 1)).toBe(2);
});
