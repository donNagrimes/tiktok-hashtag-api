import { mapVideo } from './videoMapper.js';
import { logger } from '../utils/logger.js';

export async function parseHashtagFeed(rawData, limit) {
try {
const items = rawData?.aweme_list || [];
const sliced = items.slice(0, limit);
return sliced.map(mapVideo);
} catch (err) {
logger.error(`Error parsing hashtag feed: ${err.message}`);
return [];
}
}