import { reverseString } from './exercise.js';

test('reverseString reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    // add more assertion here
    expect(reverseString('world')).toBe('dlrow');​
});
