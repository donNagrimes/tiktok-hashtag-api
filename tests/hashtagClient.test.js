import { TikTokHashtagClient } from '../src/client/tiktokHashtagClient.js';

describe('TikTokHashtagClient', () => {
test('extractHashtagFromUrl should extract correctly', () => {
const client = new TikTokHashtagClient();
const url = 'https://www.tiktok.com/tag/testhashtag';
expect(client.extractHashtagFromUrl(url)).toBe('testhashtag');
});
});