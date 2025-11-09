import Ajv from 'ajv';
import schema from '../config/schema.json' assert { type: 'json' };
import { logger } from './logger.js';

const ajv = new Ajv();

export function validateInput(input) {
const validate = ajv.compile(schema);
const valid = validate(input);
if (!valid) {
logger.error(`Input validation failed: ${JSON.stringify(validate.errors, null, 2)}`);
throw new Error('Invalid input');
}
}