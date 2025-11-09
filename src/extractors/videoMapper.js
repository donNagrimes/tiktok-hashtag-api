import { mapMusicAndAuthor } from './musicAndAuthorMapper.js';

export function mapVideo(item) {
const base = {
aweme_id: item.aweme_id,
desc: item.desc,
region: item.region,
create_time: item.create_time,
statistics: item.statistics,
status: item.status,
video_control: item.video_control
};

const mapped = {
...base,
author: mapMusicAndAuthor(item.author, 'author'),
music: mapMusicAndAuthor(item.music, 'music'),
video: {
duration: item.video?.duration,
height: item.video?.height,
width: item.video?.width,
has_watermark: item.video?.has_watermark || false,
play_addr: item.video?.play_addr,
download_addr: item.video?.download_addr
}
};

return mapped;
}