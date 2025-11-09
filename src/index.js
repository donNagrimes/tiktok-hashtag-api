import dotenv from 'dotenv';
import { TikTokHashtagClient } from './client/tiktokHashtagClient.js';
import { validateInput } from './utils/validation.js';
import { logger } from './utils/logger.js';
import fs from 'fs';
import path from 'path';

dotenv.config();

const inputPath = path.resolve('./data/input.example.json');
const outputPath = path.resolve('./data/sample-output.json');

(async () => {
try {
const input = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
validateInput(input);

const client = new TikTokHashtagClient();
const result = await client.fetchHashtagData(input);

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
logger.info(`Scraping complete. Output saved to ${outputPath}`);
} catch (err) {
logger.error(`Error running scraper: ${err.message}`);
process.exit(1);
}
})();