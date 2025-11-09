import axios from 'axios';
import { logger } from '../utils/logger.js';

const instance = axios.create({
baseURL: process.env.TIKTOK_API_BASE_URL || 'https://www.tiktok.com/api',
timeout: 15000,
headers: { 'User-Agent': 'Mozilla/5.0' }
});

instance.interceptors.response.use(
res => res,
err => {
logger.error(`HTTP error: ${err.message}`);
throw err;
}
);

export const httpClient = instance;