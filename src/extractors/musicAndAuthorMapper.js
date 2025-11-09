export function mapMusicAndAuthor(data, type) {
  if (!data) return {};
  if (type === 'author') {
    return {
      uid: data.uid,
      unique_id: data.unique_id,
      nickname: data.nickname,
      region: data.region,
      language: data.language,
      signature: data.signature
    };
  }
  if (type === 'music') {
    return {
      id: data.id,
      title: data.title,
      author: data.author,
      duration: data.duration,
      play_url: data.play_url
    };
  }
  return data;
}