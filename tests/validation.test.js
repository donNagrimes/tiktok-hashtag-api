import { validateInput } from '../src/utils/validation.js';

describe('Validation', () => {
test('throws error for invalid input', () => {
expect(() => validateInput({})).toThrow();
});
});