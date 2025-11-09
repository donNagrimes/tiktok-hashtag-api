import { mapVideo } from '../src/extractors/videoMapper.js';

describe('Video Mapper', () => {
test('maps minimal video structure', () => {
const input = { aweme_id: '123', desc: 'test video', video: { duration: 10 } };
const result = mapVideo(input);
expect(result.aweme_id).toBe('123');
expect(result.video.duration).toBe(10);
});
});