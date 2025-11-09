import { httpClient } from './httpClient.js';
import { parseHashtagFeed } from '../extractors/hashtagFeedParser.js';
import { logger } from '../utils/logger.js';
import pLimit from 'p-limit';

export class TikTokHashtagClient {
constructor(limit = 5) {
this.concurrencyLimit = pLimit(limit);
}

async fetchHashtagData({ name, url, region = 'US', limit = 50 }) {
const hashtag = name || this.extractHashtagFromUrl(url);
if (!hashtag) throw new Error('No valid hashtag provided');

logger.info(`Fetching hashtag feed for #${hashtag} in region ${region}`);
const response = await httpClient.get(`/challenge/item_list/?region=${region}&ch_name=${encodeURIComponent(hashtag)}`);

if (!response.data) throw new Error('No data returned from TikTok API');
const videos = await parseHashtagFeed(response.data, limit);
logger.info(`Fetched ${videos.length} videos for hashtag #${hashtag}`);
return videos;
}

extractHashtagFromUrl(url) {
if (!url) return null;
const match = url.match(/tag\/([^/?#]+)/);
return match ? match[1] : null;
}
}