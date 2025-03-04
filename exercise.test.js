import { reverseString } from './exercise.js';

test('reverseString reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    // add more tests here
    expect(reverseString('')).toBe('');
    expect(reverseString('123')).toBe('321');
    expect(reverseString('1234')).toBe('4321');
    expect(reverseString('world')).toBe('dlrow');
});
