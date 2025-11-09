import pLimit from 'p-limit';
export const createRateLimiter = (maxConcurrent = 5) => pLimit(maxConcurrent);